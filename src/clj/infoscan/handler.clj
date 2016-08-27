(ns infoscan.handler
  (:require [compojure.core :refer [GET defroutes]]
            [compojure.route :refer [not-found resources]]
            [hiccup.page :refer [include-js include-css html5]]
            [infoscan.middleware :refer [wrap-middleware]]
            [environ.core :refer [env]]))

(def mount-target
  [:div#app
      [:h3 "ClojureScript has not been compiled!"]
      [:p "please run "
       [:b "lein figwheel"]
       " in order to start the compiler"]])

(def loading-page
  (html5
   [:head
     [:meta {:charset "utf-8"}]
     [:meta {:name "viewport"
             :content "width=device-width, initial-scale=1"}]
     (include-css (if (env :dev) "css/site.css" "css/site.min.css")
                  "https://cdnjs.cloudflare.com/ajax/libs/foundation/5.5.2/css/normalize.min.css"
                  "https://cdnjs.cloudflare.com/ajax/libs/foundation/5.5.2/css/foundation.min.css")]
   [:body
    mount-target
    (include-js "js/app.js")]))


(defroutes routes
  (GET "/" [] loading-page)
  (GET "/raw" [] loading-page)
  (GET "/scan" [] loading-page)
  (GET "/export" [] loading-page)

  (resources "/")
  (not-found "Not Found"))

(def app (wrap-middleware #'routes))
