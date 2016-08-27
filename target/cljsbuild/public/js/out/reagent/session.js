// Compiled by ClojureScript 1.7.170 {}
goog.provide('reagent.session');
goog.require('cljs.core');
goog.require('reagent.core');
reagent.session.state = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
/**
 * Get the key's value from the session, returns nil if it doesn't exist.
 */
reagent.session.get = (function reagent$session$get(var_args){
var args__20884__auto__ = [];
var len__20877__auto___36880 = arguments.length;
var i__20878__auto___36881 = (0);
while(true){
if((i__20878__auto___36881 < len__20877__auto___36880)){
args__20884__auto__.push((arguments[i__20878__auto___36881]));

var G__36882 = (i__20878__auto___36881 + (1));
i__20878__auto___36881 = G__36882;
continue;
} else {
}
break;
}

var argseq__20885__auto__ = ((((1) < args__20884__auto__.length))?(new cljs.core.IndexedSeq(args__20884__auto__.slice((1)),(0))):null);
return reagent.session.get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20885__auto__);
});

reagent.session.get.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__36878){
var vec__36879 = p__36878;
var default$ = cljs.core.nth.call(null,vec__36879,(0),null);
return cljs.core.get.call(null,cljs.core.deref.call(null,reagent.session.state),k,default$);
});

reagent.session.get.cljs$lang$maxFixedArity = (1);

reagent.session.get.cljs$lang$applyTo = (function (seq36876){
var G__36877 = cljs.core.first.call(null,seq36876);
var seq36876__$1 = cljs.core.next.call(null,seq36876);
return reagent.session.get.cljs$core$IFn$_invoke$arity$variadic(G__36877,seq36876__$1);
});
reagent.session.put_BANG_ = (function reagent$session$put_BANG_(k,v){
return cljs.core.swap_BANG_.call(null,reagent.session.state,cljs.core.assoc,k,v);
});
/**
 * Gets the value at the path specified by the vector ks from the session,
 *   returns nil if it doesn't exist.
 */
reagent.session.get_in = (function reagent$session$get_in(var_args){
var args__20884__auto__ = [];
var len__20877__auto___36887 = arguments.length;
var i__20878__auto___36888 = (0);
while(true){
if((i__20878__auto___36888 < len__20877__auto___36887)){
args__20884__auto__.push((arguments[i__20878__auto___36888]));

var G__36889 = (i__20878__auto___36888 + (1));
i__20878__auto___36888 = G__36889;
continue;
} else {
}
break;
}

var argseq__20885__auto__ = ((((1) < args__20884__auto__.length))?(new cljs.core.IndexedSeq(args__20884__auto__.slice((1)),(0))):null);
return reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20885__auto__);
});

reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__36885){
var vec__36886 = p__36885;
var default$ = cljs.core.nth.call(null,vec__36886,(0),null);
return cljs.core.get_in.call(null,cljs.core.deref.call(null,reagent.session.state),ks,default$);
});

reagent.session.get_in.cljs$lang$maxFixedArity = (1);

reagent.session.get_in.cljs$lang$applyTo = (function (seq36883){
var G__36884 = cljs.core.first.call(null,seq36883);
var seq36883__$1 = cljs.core.next.call(null,seq36883);
return reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic(G__36884,seq36883__$1);
});
/**
 * Replace the current session's value with the result of executing f with
 *   the current value and args.
 */
reagent.session.swap_BANG_ = (function reagent$session$swap_BANG_(var_args){
var args__20884__auto__ = [];
var len__20877__auto___36892 = arguments.length;
var i__20878__auto___36893 = (0);
while(true){
if((i__20878__auto___36893 < len__20877__auto___36892)){
args__20884__auto__.push((arguments[i__20878__auto___36893]));

var G__36894 = (i__20878__auto___36893 + (1));
i__20878__auto___36893 = G__36894;
continue;
} else {
}
break;
}

var argseq__20885__auto__ = ((((1) < args__20884__auto__.length))?(new cljs.core.IndexedSeq(args__20884__auto__.slice((1)),(0))):null);
return reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20885__auto__);
});

reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return cljs.core.apply.call(null,cljs.core.swap_BANG_,reagent.session.state,f,args);
});

reagent.session.swap_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.swap_BANG_.cljs$lang$applyTo = (function (seq36890){
var G__36891 = cljs.core.first.call(null,seq36890);
var seq36890__$1 = cljs.core.next.call(null,seq36890);
return reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__36891,seq36890__$1);
});
/**
 * Remove all data from the session and start over cleanly.
 */
reagent.session.clear_BANG_ = (function reagent$session$clear_BANG_(){
return cljs.core.reset_BANG_.call(null,reagent.session.state,cljs.core.PersistentArrayMap.EMPTY);
});
reagent.session.reset_BANG_ = (function reagent$session$reset_BANG_(m){
return cljs.core.reset_BANG_.call(null,reagent.session.state,m);
});
/**
 * Remove a key from the session
 */
reagent.session.remove_BANG_ = (function reagent$session$remove_BANG_(k){
return cljs.core.swap_BANG_.call(null,reagent.session.state,cljs.core.dissoc,k);
});
/**
 * Associates a value in the session, where ks is a
 * sequence of keys and v is the new value and returns
 * a new nested structure. If any levels do not exist,
 * hash-maps will be created.
 */
reagent.session.assoc_in_BANG_ = (function reagent$session$assoc_in_BANG_(ks,v){
return cljs.core.swap_BANG_.call(null,reagent.session.state,(function (p1__36895_SHARP_){
return cljs.core.assoc_in.call(null,p1__36895_SHARP_,ks,v);
}));
});
/**
 * Destructive get from the session. This returns the current value of the key
 *   and then removes it from the session.
 */
reagent.session.get_BANG_ = (function reagent$session$get_BANG_(var_args){
var args__20884__auto__ = [];
var len__20877__auto___36900 = arguments.length;
var i__20878__auto___36901 = (0);
while(true){
if((i__20878__auto___36901 < len__20877__auto___36900)){
args__20884__auto__.push((arguments[i__20878__auto___36901]));

var G__36902 = (i__20878__auto___36901 + (1));
i__20878__auto___36901 = G__36902;
continue;
} else {
}
break;
}

var argseq__20885__auto__ = ((((1) < args__20884__auto__.length))?(new cljs.core.IndexedSeq(args__20884__auto__.slice((1)),(0))):null);
return reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20885__auto__);
});

reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__36898){
var vec__36899 = p__36898;
var default$ = cljs.core.nth.call(null,vec__36899,(0),null);
var cur = reagent.session.get.call(null,k,default$);
reagent.session.remove_BANG_.call(null,k);

return cur;
});

reagent.session.get_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.get_BANG_.cljs$lang$applyTo = (function (seq36896){
var G__36897 = cljs.core.first.call(null,seq36896);
var seq36896__$1 = cljs.core.next.call(null,seq36896);
return reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__36897,seq36896__$1);
});
/**
 * Destructive get from the session. This returns the current value of the path
 *   specified by the vector ks and then removes it from the session.
 */
reagent.session.get_in_BANG_ = (function reagent$session$get_in_BANG_(var_args){
var args__20884__auto__ = [];
var len__20877__auto___36907 = arguments.length;
var i__20878__auto___36908 = (0);
while(true){
if((i__20878__auto___36908 < len__20877__auto___36907)){
args__20884__auto__.push((arguments[i__20878__auto___36908]));

var G__36909 = (i__20878__auto___36908 + (1));
i__20878__auto___36908 = G__36909;
continue;
} else {
}
break;
}

var argseq__20885__auto__ = ((((1) < args__20884__auto__.length))?(new cljs.core.IndexedSeq(args__20884__auto__.slice((1)),(0))):null);
return reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20885__auto__);
});

reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__36905){
var vec__36906 = p__36905;
var default$ = cljs.core.nth.call(null,vec__36906,(0),null);
var cur = cljs.core.get_in.call(null,cljs.core.deref.call(null,reagent.session.state),ks,default$);
reagent.session.assoc_in_BANG_.call(null,ks,null);

return cur;
});

reagent.session.get_in_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.get_in_BANG_.cljs$lang$applyTo = (function (seq36903){
var G__36904 = cljs.core.first.call(null,seq36903);
var seq36903__$1 = cljs.core.next.call(null,seq36903);
return reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__36904,seq36903__$1);
});
/**
 * Updates a value in session where k is a key and f
 * is the function that takes the old value along with any
 * supplied args and return the new value. If key is not
 * present it will be added.
 */
reagent.session.update_BANG_ = (function reagent$session$update_BANG_(var_args){
var args__20884__auto__ = [];
var len__20877__auto___36914 = arguments.length;
var i__20878__auto___36915 = (0);
while(true){
if((i__20878__auto___36915 < len__20877__auto___36914)){
args__20884__auto__.push((arguments[i__20878__auto___36915]));

var G__36916 = (i__20878__auto___36915 + (1));
i__20878__auto___36915 = G__36916;
continue;
} else {
}
break;
}

var argseq__20885__auto__ = ((((2) < args__20884__auto__.length))?(new cljs.core.IndexedSeq(args__20884__auto__.slice((2)),(0))):null);
return reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__20885__auto__);
});

reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (k,f,args){
return cljs.core.swap_BANG_.call(null,reagent.session.state,(function (p1__36910_SHARP_){
return cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.update,p1__36910_SHARP_,k,f),args);
}));
});

reagent.session.update_BANG_.cljs$lang$maxFixedArity = (2);

reagent.session.update_BANG_.cljs$lang$applyTo = (function (seq36911){
var G__36912 = cljs.core.first.call(null,seq36911);
var seq36911__$1 = cljs.core.next.call(null,seq36911);
var G__36913 = cljs.core.first.call(null,seq36911__$1);
var seq36911__$2 = cljs.core.next.call(null,seq36911__$1);
return reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__36912,G__36913,seq36911__$2);
});
/**
 * 'Updates a value in the session, where ks is a
 * sequence of keys and f is a function that will
 * take the old value along with any supplied args and return
 * the new value. If any levels do not exist, hash-maps
 * will be created.
 */
reagent.session.update_in_BANG_ = (function reagent$session$update_in_BANG_(var_args){
var args__20884__auto__ = [];
var len__20877__auto___36921 = arguments.length;
var i__20878__auto___36922 = (0);
while(true){
if((i__20878__auto___36922 < len__20877__auto___36921)){
args__20884__auto__.push((arguments[i__20878__auto___36922]));

var G__36923 = (i__20878__auto___36922 + (1));
i__20878__auto___36922 = G__36923;
continue;
} else {
}
break;
}

var argseq__20885__auto__ = ((((2) < args__20884__auto__.length))?(new cljs.core.IndexedSeq(args__20884__auto__.slice((2)),(0))):null);
return reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__20885__auto__);
});

reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,f,args){
return cljs.core.swap_BANG_.call(null,reagent.session.state,(function (p1__36917_SHARP_){
return cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.update_in,p1__36917_SHARP_,ks,f),args);
}));
});

reagent.session.update_in_BANG_.cljs$lang$maxFixedArity = (2);

reagent.session.update_in_BANG_.cljs$lang$applyTo = (function (seq36918){
var G__36919 = cljs.core.first.call(null,seq36918);
var seq36918__$1 = cljs.core.next.call(null,seq36918);
var G__36920 = cljs.core.first.call(null,seq36918__$1);
var seq36918__$2 = cljs.core.next.call(null,seq36918__$1);
return reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__36919,G__36920,seq36918__$2);
});

//# sourceMappingURL=session.js.map