(ns infoscan.prod
  (:require [infoscan.core :as core]))

;;ignore println statements in prod
(set! *print-fn* (fn [& _]))

(core/init!)
