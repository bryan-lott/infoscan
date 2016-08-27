(ns infoscan.core
  (:require [reagent.core :as r]
            [reagent.session :as session]
            [reagent-forms.core :refer [bind-fields init-field value-of]]
            [secretary.core :as secretary :include-macros true]
            [accountant.core :as accountant]
            [clojure.string :as s]))

;; -------------------------
;; State Management

(def all-keys [:pii?
               :merchant
               :internal_vendor_id
               :internal_template_id
               :internal_file_id
               :internal_order_id
               :product_title
               :product_subtitle
               :receipt_title
               :crawled_title
               :product_sku
               :product_when
               :product_where
               :seller
               :invoice_id
               :orig_n
               :rand_n])

(def meta-keys [:internal_vendor_id
                :internal_template_id
                :internal_file_id
                :internal_order_id
                :orig_n
                :rand_n])

(def data-keys [:pii?
                :merchant
                :product_title
                :product_subtitle
                :receipt_title
                :crawled_title
                :product_sku
                :product_when
                :product_where
                :seller
                :invoice_id])

(def app-state (r/atom {:sort-val :pii?
                        :ascending true
                        :raw-hive ""
                        :raw-fade ""
                        :raw-highlight ""
                        :word-color {}
                        :export #{}
                        :table-contents []}))

(defn update-sort-value
  "Change the table sort to the new-val and ascending or descending."
  [new-val]
  (if (= new-val (:sort-val @app-state))
    (swap! app-state update-in [:ascending] not)
    (swap! app-state assoc :ascending true))
  (swap! app-state assoc :sort-val new-val))

(defn sorted-contents
  "Return a table sorted by the app-state's current :sort-val and :ascending values."
  []
  (let [sorted-contents (sort-by (:sort-val @app-state) (:table-contents @app-state))]
    (if (:ascending @app-state)
      sorted-contents
      (rseq sorted-contents))))

(defn key->str
  "Change a :keyword back into a regular string w/o the leading colon."
  [k]
  (apply str (rest (str k))))

(defn highlight>fade
  "Highlight colors win out over fade colors."
  [w1 w2]
  (if (= w1 "red") w1 w2))

(defn color-lookup [word]
  (get-in @app-state
          [:word-color (s/lower-case word)]
          "black"))

(defn color-update!
  "Cycle the color of the given word in app-state"
  [word]
  (swap!
    app-state
    update-in [:word-color (s/lower-case word)]
    #(case %
       "black" "red"
       "red" "lightgrey"
       "lightgrey" "black"
       "black")))


;; -------------------------
;; Raw Input Parsing

(defn line->map
  "Take a line and convert it to a map with ks as keys."
  [ks data]
  (zipmap ks (apply conj [""] (s/split (s/replace data #"^\"|\"$" "") #"\",\""))))

(defn raw->map
  "Assumes that input will be text in a always-quoted csv format
  where the first row is a header.  Produces a list of maps."
  [input]
  (let [lines (-> input s/trim s/split-lines)
        header (map keyword (s/split (s/replace (first lines) #"^\"|\"$" "") #"\",\""))
        data (rest lines)]
    (map (partial line->map header) data)))

(defn raw-word->map
  "Create a map from a string and color.
  Split the string based on newlines and map the words to the provided color."
  [input color]
  (let [words (-> input s/trim s/split-lines)]
    (zipmap words (repeat color))))

(defn toggle-row-color! [curr-color]
  (if (= @curr-color "white")
    (reset! curr-color "peru")
    (reset! curr-color "white")))

(defn extract-indices
  "Extract as a list, in order, the indices found in i from the vector v"
  [i v]
  (map #(get v %) i))

(defn list-indices
  "Return a list of the indices of m1 found in m2 (indices returned are the indices in m2)"
  [m1 m2]
  (let [arr (to-array m2)]
    (map
      #(.indexOf arr %) m1)))

;; -------------------------
;; Components

(defn links [pagename]
  [:div [:h2 pagename]
   [:a {:href "/"} "Infoscan Home"]
   " - "
   [:a {:href "/raw"} "Raw Hive Input"]
   " - "
   [:a {:href "/scan"} "PII Scan"]
   " - "
   [:a {:href "/export"} "Export"]
   [:hr]])

(defn word-component [word]
  (if (re-find #"\w+" word)
    [:span
     {:class (str "word-" (s/lower-case word))
;;      {:style {:color (color-lookup word)}
            :on-click #(color-update! word)}
     word]
    [:span
     {:class (str "word-" (s/lower-case word))}
;;      {:style {:color "black"}}
     word]))

;; var x = document.querySelectorAll(".word-silver");
;; for (var i = 0; i < x.length; i++) {x[i].style.color = "red";}

;; egghead.io

(defn raw-component []
  [:div
   [:table
    [:tr
     [:td
      [:label "Raw Hive Input"]]
     [:td
      [:textarea.form-control
       {:field :textarea
        :style {:width "100%"}
        :id :raw-data
        :value (:raw-hive @app-state)
        :placeholder "Paste the output of your Hive query here (csv)"
        :on-change #(do
                      (swap! app-state assoc :raw-hive (-> % .-target .-value))
                      (swap! app-state assoc :table-contents (raw->map (:raw-hive @app-state))))}]]]
    [:tr
     [:td
      [:label "Fade Words"]]
     [:td
      [:textarea.form-control
       {:field :textarea
        :style {:width "100%"}
        :id :fade-words
        :value (:raw-fade @app-state)
        :placeholder "Paste any words you want to \"fade out\" here"
        :on-change #(do
                      (swap! app-state assoc :raw-fade (-> % .-target .-value))
                      (swap! app-state merge-with (:word-color @app-state) (raw-word->map (:raw-fade @app-state) "lightgrey")))}]]]
    [:tr
     [:td
      [:label "Highlight Words"]]
     [:td
      [:textarea.form-control
       {:field :textarea
        :style {:width "100%"}
        :id :highlight-words
        :value (:raw-highlight @app-state)
        :placeholder "Paste any words you want to highlight in red here"
        :on-change #(do
                      (swap! app-state assoc :raw-highlight (-> % .-target .-value))
                      (swap! app-state merge-with (:word-color @app-state) (raw-word->map (:raw-highlight @app-state) "red")))}]]]]])



(defn line-component [line]
  (let [row-color (r/atom "white")]
    (fn []
      [:tr {:style {:background-color @row-color}}
       [:td
        [:input {:type "button"
                 :style {:width "100%"}
                 :value "PII"
                 :on-click #(do
                              (swap! app-state update :export conj line)
                              (toggle-row-color! row-color))}]]
       (map-indexed
         #(with-meta %2 {:key %1 :data %2})
         (for [k (rest data-keys)]
           [:td
            (map-indexed
              #(with-meta %2  {:key %1})
              (for [word (s/split (get line k) #"\b")]
                [word-component word]))]))])))

(defn table []
  (fn []
    [:table
     [:thead
      [:tr
       (map-indexed
         #(with-meta %2 {:key %1})
         (for [head data-keys]
           [:th {:width "200"
                 :on-click #(update-sort-value head)}
            (key->str head)]))]]
     [:tbody
      (map-indexed
         #(with-meta %2 {:key %1})
       (for [line (sorted-contents)]
         [line-component line]))]]))


;; (defn datagrid-component [data]
;;   (fn []
;;     (let [data-indices (list-indices data-keys @header)]
;;       [:table
;;        [:th "Contains PII" (map-indexed #(with-meta %2 {:key %1})
;;                                         (for [heading (extract-indices data-indices @header)]
;;                                           [:td heading]))]
;;        (map-indexed #(with-meta %2  {:key %1}) (for [line @data]
;;                                                  [line-component line data-indices]))])))


;; -------------------------
;; Views

(defn home-page []
  [:div
   [links "Infoscan Home"]
   [:p "Infoscan is a faster way of scanning for PII"]
   [:p "To start, please paste the results of your Hive query into the \"Raw Hive Input\" page"]])

(defn raw-input-page []
  [:div
   [links "Raw Hive Input"]
   [bind-fields raw-component app-state]])

(defn pii-scan-page []
  [:div
   [links "PII Scan"]
   [bind-fields table app-state]])

(defn export-page []
  [:div
   [links "Export"]
   [:h2 "Current Fade Words"]
   [:textarea.form-control
    {:field :textarea
     :style {:width "100%"}
     :id :fade-words-export
     :readOnly true
     :value (s/join "\n" (keys (filter #(= (val %) "lightgrey") (:word-color @app-state))))}]
   [:h2 "Current Highlight Words"]
   [:textarea.form-control
    {:field :textarea
     :style {:width "100%"}
     :id :highlight-words-export
     :readOnly true
     :value (s/join "\n" (keys (filter #(= (val %) "red") (:word-color @app-state))))}]
   [:h2 "Found PII"]
   [:p (str (:export @app-state))]])


(defn current-page []
  [:div [(session/get :current-page)]])

;; -------------------------
;; Routes

(secretary/defroute "/" []
  (session/put! :current-page #'home-page))

(secretary/defroute "/raw" []
  (session/put! :current-page #'raw-input-page))

(secretary/defroute "/scan" []
  (session/put! :current-page #'pii-scan-page))

(secretary/defroute "/export" []
  (session/put! :current-page #'export-page))

;; -------------------------
;; Initialize app

(defn mount-root []
  (r/render [current-page] (.getElementById js/document "app")))

(defn init! []
  (accountant/configure-navigation!)
  (accountant/dispatch-current!)
  (mount-root))
