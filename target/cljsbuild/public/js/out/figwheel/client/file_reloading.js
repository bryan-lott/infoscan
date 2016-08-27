// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
figwheel.client.file_reloading.queued_file_reload;
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__19819__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__19819__auto__){
return or__19819__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__19819__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__19819__auto__)){
return or__19819__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__40646_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__40646_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__40651 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__40652 = null;
var count__40653 = (0);
var i__40654 = (0);
while(true){
if((i__40654 < count__40653)){
var n = cljs.core._nth.call(null,chunk__40652,i__40654);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__40655 = seq__40651;
var G__40656 = chunk__40652;
var G__40657 = count__40653;
var G__40658 = (i__40654 + (1));
seq__40651 = G__40655;
chunk__40652 = G__40656;
count__40653 = G__40657;
i__40654 = G__40658;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__40651);
if(temp__4657__auto__){
var seq__40651__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40651__$1)){
var c__20622__auto__ = cljs.core.chunk_first.call(null,seq__40651__$1);
var G__40659 = cljs.core.chunk_rest.call(null,seq__40651__$1);
var G__40660 = c__20622__auto__;
var G__40661 = cljs.core.count.call(null,c__20622__auto__);
var G__40662 = (0);
seq__40651 = G__40659;
chunk__40652 = G__40660;
count__40653 = G__40661;
i__40654 = G__40662;
continue;
} else {
var n = cljs.core.first.call(null,seq__40651__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__40663 = cljs.core.next.call(null,seq__40651__$1);
var G__40664 = null;
var G__40665 = (0);
var G__40666 = (0);
seq__40651 = G__40663;
chunk__40652 = G__40664;
count__40653 = G__40665;
i__40654 = G__40666;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__40705_40712 = cljs.core.seq.call(null,deps);
var chunk__40706_40713 = null;
var count__40707_40714 = (0);
var i__40708_40715 = (0);
while(true){
if((i__40708_40715 < count__40707_40714)){
var dep_40716 = cljs.core._nth.call(null,chunk__40706_40713,i__40708_40715);
topo_sort_helper_STAR_.call(null,dep_40716,(depth + (1)),state);

var G__40717 = seq__40705_40712;
var G__40718 = chunk__40706_40713;
var G__40719 = count__40707_40714;
var G__40720 = (i__40708_40715 + (1));
seq__40705_40712 = G__40717;
chunk__40706_40713 = G__40718;
count__40707_40714 = G__40719;
i__40708_40715 = G__40720;
continue;
} else {
var temp__4657__auto___40721 = cljs.core.seq.call(null,seq__40705_40712);
if(temp__4657__auto___40721){
var seq__40705_40722__$1 = temp__4657__auto___40721;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40705_40722__$1)){
var c__20622__auto___40723 = cljs.core.chunk_first.call(null,seq__40705_40722__$1);
var G__40724 = cljs.core.chunk_rest.call(null,seq__40705_40722__$1);
var G__40725 = c__20622__auto___40723;
var G__40726 = cljs.core.count.call(null,c__20622__auto___40723);
var G__40727 = (0);
seq__40705_40712 = G__40724;
chunk__40706_40713 = G__40725;
count__40707_40714 = G__40726;
i__40708_40715 = G__40727;
continue;
} else {
var dep_40728 = cljs.core.first.call(null,seq__40705_40722__$1);
topo_sort_helper_STAR_.call(null,dep_40728,(depth + (1)),state);

var G__40729 = cljs.core.next.call(null,seq__40705_40722__$1);
var G__40730 = null;
var G__40731 = (0);
var G__40732 = (0);
seq__40705_40712 = G__40729;
chunk__40706_40713 = G__40730;
count__40707_40714 = G__40731;
i__40708_40715 = G__40732;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__40709){
var vec__40711 = p__40709;
var x = cljs.core.nth.call(null,vec__40711,(0),null);
var xs = cljs.core.nthnext.call(null,vec__40711,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__40711,x,xs,get_deps__$1){
return (function (p1__40667_SHARP_){
return clojure.set.difference.call(null,p1__40667_SHARP_,x);
});})(vec__40711,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__40745 = cljs.core.seq.call(null,provides);
var chunk__40746 = null;
var count__40747 = (0);
var i__40748 = (0);
while(true){
if((i__40748 < count__40747)){
var prov = cljs.core._nth.call(null,chunk__40746,i__40748);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__40749_40757 = cljs.core.seq.call(null,requires);
var chunk__40750_40758 = null;
var count__40751_40759 = (0);
var i__40752_40760 = (0);
while(true){
if((i__40752_40760 < count__40751_40759)){
var req_40761 = cljs.core._nth.call(null,chunk__40750_40758,i__40752_40760);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_40761,prov);

var G__40762 = seq__40749_40757;
var G__40763 = chunk__40750_40758;
var G__40764 = count__40751_40759;
var G__40765 = (i__40752_40760 + (1));
seq__40749_40757 = G__40762;
chunk__40750_40758 = G__40763;
count__40751_40759 = G__40764;
i__40752_40760 = G__40765;
continue;
} else {
var temp__4657__auto___40766 = cljs.core.seq.call(null,seq__40749_40757);
if(temp__4657__auto___40766){
var seq__40749_40767__$1 = temp__4657__auto___40766;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40749_40767__$1)){
var c__20622__auto___40768 = cljs.core.chunk_first.call(null,seq__40749_40767__$1);
var G__40769 = cljs.core.chunk_rest.call(null,seq__40749_40767__$1);
var G__40770 = c__20622__auto___40768;
var G__40771 = cljs.core.count.call(null,c__20622__auto___40768);
var G__40772 = (0);
seq__40749_40757 = G__40769;
chunk__40750_40758 = G__40770;
count__40751_40759 = G__40771;
i__40752_40760 = G__40772;
continue;
} else {
var req_40773 = cljs.core.first.call(null,seq__40749_40767__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_40773,prov);

var G__40774 = cljs.core.next.call(null,seq__40749_40767__$1);
var G__40775 = null;
var G__40776 = (0);
var G__40777 = (0);
seq__40749_40757 = G__40774;
chunk__40750_40758 = G__40775;
count__40751_40759 = G__40776;
i__40752_40760 = G__40777;
continue;
}
} else {
}
}
break;
}

var G__40778 = seq__40745;
var G__40779 = chunk__40746;
var G__40780 = count__40747;
var G__40781 = (i__40748 + (1));
seq__40745 = G__40778;
chunk__40746 = G__40779;
count__40747 = G__40780;
i__40748 = G__40781;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__40745);
if(temp__4657__auto__){
var seq__40745__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40745__$1)){
var c__20622__auto__ = cljs.core.chunk_first.call(null,seq__40745__$1);
var G__40782 = cljs.core.chunk_rest.call(null,seq__40745__$1);
var G__40783 = c__20622__auto__;
var G__40784 = cljs.core.count.call(null,c__20622__auto__);
var G__40785 = (0);
seq__40745 = G__40782;
chunk__40746 = G__40783;
count__40747 = G__40784;
i__40748 = G__40785;
continue;
} else {
var prov = cljs.core.first.call(null,seq__40745__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__40753_40786 = cljs.core.seq.call(null,requires);
var chunk__40754_40787 = null;
var count__40755_40788 = (0);
var i__40756_40789 = (0);
while(true){
if((i__40756_40789 < count__40755_40788)){
var req_40790 = cljs.core._nth.call(null,chunk__40754_40787,i__40756_40789);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_40790,prov);

var G__40791 = seq__40753_40786;
var G__40792 = chunk__40754_40787;
var G__40793 = count__40755_40788;
var G__40794 = (i__40756_40789 + (1));
seq__40753_40786 = G__40791;
chunk__40754_40787 = G__40792;
count__40755_40788 = G__40793;
i__40756_40789 = G__40794;
continue;
} else {
var temp__4657__auto___40795__$1 = cljs.core.seq.call(null,seq__40753_40786);
if(temp__4657__auto___40795__$1){
var seq__40753_40796__$1 = temp__4657__auto___40795__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40753_40796__$1)){
var c__20622__auto___40797 = cljs.core.chunk_first.call(null,seq__40753_40796__$1);
var G__40798 = cljs.core.chunk_rest.call(null,seq__40753_40796__$1);
var G__40799 = c__20622__auto___40797;
var G__40800 = cljs.core.count.call(null,c__20622__auto___40797);
var G__40801 = (0);
seq__40753_40786 = G__40798;
chunk__40754_40787 = G__40799;
count__40755_40788 = G__40800;
i__40756_40789 = G__40801;
continue;
} else {
var req_40802 = cljs.core.first.call(null,seq__40753_40796__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_40802,prov);

var G__40803 = cljs.core.next.call(null,seq__40753_40796__$1);
var G__40804 = null;
var G__40805 = (0);
var G__40806 = (0);
seq__40753_40786 = G__40803;
chunk__40754_40787 = G__40804;
count__40755_40788 = G__40805;
i__40756_40789 = G__40806;
continue;
}
} else {
}
}
break;
}

var G__40807 = cljs.core.next.call(null,seq__40745__$1);
var G__40808 = null;
var G__40809 = (0);
var G__40810 = (0);
seq__40745 = G__40807;
chunk__40746 = G__40808;
count__40747 = G__40809;
i__40748 = G__40810;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__40815_40819 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__40816_40820 = null;
var count__40817_40821 = (0);
var i__40818_40822 = (0);
while(true){
if((i__40818_40822 < count__40817_40821)){
var ns_40823 = cljs.core._nth.call(null,chunk__40816_40820,i__40818_40822);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_40823);

var G__40824 = seq__40815_40819;
var G__40825 = chunk__40816_40820;
var G__40826 = count__40817_40821;
var G__40827 = (i__40818_40822 + (1));
seq__40815_40819 = G__40824;
chunk__40816_40820 = G__40825;
count__40817_40821 = G__40826;
i__40818_40822 = G__40827;
continue;
} else {
var temp__4657__auto___40828 = cljs.core.seq.call(null,seq__40815_40819);
if(temp__4657__auto___40828){
var seq__40815_40829__$1 = temp__4657__auto___40828;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40815_40829__$1)){
var c__20622__auto___40830 = cljs.core.chunk_first.call(null,seq__40815_40829__$1);
var G__40831 = cljs.core.chunk_rest.call(null,seq__40815_40829__$1);
var G__40832 = c__20622__auto___40830;
var G__40833 = cljs.core.count.call(null,c__20622__auto___40830);
var G__40834 = (0);
seq__40815_40819 = G__40831;
chunk__40816_40820 = G__40832;
count__40817_40821 = G__40833;
i__40818_40822 = G__40834;
continue;
} else {
var ns_40835 = cljs.core.first.call(null,seq__40815_40829__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_40835);

var G__40836 = cljs.core.next.call(null,seq__40815_40829__$1);
var G__40837 = null;
var G__40838 = (0);
var G__40839 = (0);
seq__40815_40819 = G__40836;
chunk__40816_40820 = G__40837;
count__40817_40821 = G__40838;
i__40818_40822 = G__40839;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__19819__auto__ = goog.require__;
if(cljs.core.truth_(or__19819__auto__)){
return or__19819__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__40840__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__40840 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40841__i = 0, G__40841__a = new Array(arguments.length -  0);
while (G__40841__i < G__40841__a.length) {G__40841__a[G__40841__i] = arguments[G__40841__i + 0]; ++G__40841__i;}
  args = new cljs.core.IndexedSeq(G__40841__a,0);
} 
return G__40840__delegate.call(this,args);};
G__40840.cljs$lang$maxFixedArity = 0;
G__40840.cljs$lang$applyTo = (function (arglist__40842){
var args = cljs.core.seq(arglist__40842);
return G__40840__delegate(args);
});
G__40840.cljs$core$IFn$_invoke$arity$variadic = G__40840__delegate;
return G__40840;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__40844 = cljs.core._EQ_;
var expr__40845 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__40844.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__40845))){
var path_parts = ((function (pred__40844,expr__40845){
return (function (p1__40843_SHARP_){
return clojure.string.split.call(null,p1__40843_SHARP_,/[\/\\]/);
});})(pred__40844,expr__40845))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__40844,expr__40845){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e40847){if((e40847 instanceof Error)){
var e = e40847;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e40847;

}
}})());
});
;})(path_parts,sep,root,pred__40844,expr__40845))
} else {
if(cljs.core.truth_(pred__40844.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__40845))){
return ((function (pred__40844,expr__40845){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__40844,expr__40845){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__40844,expr__40845))
);

return deferred.addErrback(((function (deferred,pred__40844,expr__40845){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__40844,expr__40845))
);
});
;})(pred__40844,expr__40845))
} else {
return ((function (pred__40844,expr__40845){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__40844,expr__40845))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__40848,callback){
var map__40851 = p__40848;
var map__40851__$1 = ((((!((map__40851 == null)))?((((map__40851.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40851.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40851):map__40851);
var file_msg = map__40851__$1;
var request_url = cljs.core.get.call(null,map__40851__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__40851,map__40851__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__40851,map__40851__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__22319__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22319__auto__){
return (function (){
var f__22320__auto__ = (function (){var switch__22298__auto__ = ((function (c__22319__auto__){
return (function (state_40875){
var state_val_40876 = (state_40875[(1)]);
if((state_val_40876 === (7))){
var inst_40871 = (state_40875[(2)]);
var state_40875__$1 = state_40875;
var statearr_40877_40897 = state_40875__$1;
(statearr_40877_40897[(2)] = inst_40871);

(statearr_40877_40897[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40876 === (1))){
var state_40875__$1 = state_40875;
var statearr_40878_40898 = state_40875__$1;
(statearr_40878_40898[(2)] = null);

(statearr_40878_40898[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40876 === (4))){
var inst_40855 = (state_40875[(7)]);
var inst_40855__$1 = (state_40875[(2)]);
var state_40875__$1 = (function (){var statearr_40879 = state_40875;
(statearr_40879[(7)] = inst_40855__$1);

return statearr_40879;
})();
if(cljs.core.truth_(inst_40855__$1)){
var statearr_40880_40899 = state_40875__$1;
(statearr_40880_40899[(1)] = (5));

} else {
var statearr_40881_40900 = state_40875__$1;
(statearr_40881_40900[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40876 === (6))){
var state_40875__$1 = state_40875;
var statearr_40882_40901 = state_40875__$1;
(statearr_40882_40901[(2)] = null);

(statearr_40882_40901[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40876 === (3))){
var inst_40873 = (state_40875[(2)]);
var state_40875__$1 = state_40875;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40875__$1,inst_40873);
} else {
if((state_val_40876 === (2))){
var state_40875__$1 = state_40875;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40875__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_40876 === (11))){
var inst_40867 = (state_40875[(2)]);
var state_40875__$1 = (function (){var statearr_40883 = state_40875;
(statearr_40883[(8)] = inst_40867);

return statearr_40883;
})();
var statearr_40884_40902 = state_40875__$1;
(statearr_40884_40902[(2)] = null);

(statearr_40884_40902[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40876 === (9))){
var inst_40861 = (state_40875[(9)]);
var inst_40859 = (state_40875[(10)]);
var inst_40863 = inst_40861.call(null,inst_40859);
var state_40875__$1 = state_40875;
var statearr_40885_40903 = state_40875__$1;
(statearr_40885_40903[(2)] = inst_40863);

(statearr_40885_40903[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40876 === (5))){
var inst_40855 = (state_40875[(7)]);
var inst_40857 = figwheel.client.file_reloading.blocking_load.call(null,inst_40855);
var state_40875__$1 = state_40875;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40875__$1,(8),inst_40857);
} else {
if((state_val_40876 === (10))){
var inst_40859 = (state_40875[(10)]);
var inst_40865 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_40859);
var state_40875__$1 = state_40875;
var statearr_40886_40904 = state_40875__$1;
(statearr_40886_40904[(2)] = inst_40865);

(statearr_40886_40904[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40876 === (8))){
var inst_40861 = (state_40875[(9)]);
var inst_40855 = (state_40875[(7)]);
var inst_40859 = (state_40875[(2)]);
var inst_40860 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_40861__$1 = cljs.core.get.call(null,inst_40860,inst_40855);
var state_40875__$1 = (function (){var statearr_40887 = state_40875;
(statearr_40887[(9)] = inst_40861__$1);

(statearr_40887[(10)] = inst_40859);

return statearr_40887;
})();
if(cljs.core.truth_(inst_40861__$1)){
var statearr_40888_40905 = state_40875__$1;
(statearr_40888_40905[(1)] = (9));

} else {
var statearr_40889_40906 = state_40875__$1;
(statearr_40889_40906[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__22319__auto__))
;
return ((function (switch__22298__auto__,c__22319__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__22299__auto__ = null;
var figwheel$client$file_reloading$state_machine__22299__auto____0 = (function (){
var statearr_40893 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_40893[(0)] = figwheel$client$file_reloading$state_machine__22299__auto__);

(statearr_40893[(1)] = (1));

return statearr_40893;
});
var figwheel$client$file_reloading$state_machine__22299__auto____1 = (function (state_40875){
while(true){
var ret_value__22300__auto__ = (function (){try{while(true){
var result__22301__auto__ = switch__22298__auto__.call(null,state_40875);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22301__auto__;
}
break;
}
}catch (e40894){if((e40894 instanceof Object)){
var ex__22302__auto__ = e40894;
var statearr_40895_40907 = state_40875;
(statearr_40895_40907[(5)] = ex__22302__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40875);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40894;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40908 = state_40875;
state_40875 = G__40908;
continue;
} else {
return ret_value__22300__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__22299__auto__ = function(state_40875){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__22299__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__22299__auto____1.call(this,state_40875);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__22299__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__22299__auto____0;
figwheel$client$file_reloading$state_machine__22299__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__22299__auto____1;
return figwheel$client$file_reloading$state_machine__22299__auto__;
})()
;})(switch__22298__auto__,c__22319__auto__))
})();
var state__22321__auto__ = (function (){var statearr_40896 = f__22320__auto__.call(null);
(statearr_40896[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22319__auto__);

return statearr_40896;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22321__auto__);
});})(c__22319__auto__))
);

return c__22319__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__40909,callback){
var map__40912 = p__40909;
var map__40912__$1 = ((((!((map__40912 == null)))?((((map__40912.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40912.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40912):map__40912);
var file_msg = map__40912__$1;
var namespace = cljs.core.get.call(null,map__40912__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__40912,map__40912__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__40912,map__40912__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__40914){
var map__40917 = p__40914;
var map__40917__$1 = ((((!((map__40917 == null)))?((((map__40917.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40917.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40917):map__40917);
var file_msg = map__40917__$1;
var namespace = cljs.core.get.call(null,map__40917__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__19807__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__19807__auto__){
var or__19819__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__19819__auto__)){
return or__19819__auto__;
} else {
var or__19819__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__19819__auto____$1)){
return or__19819__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__19807__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__40919,callback){
var map__40922 = p__40919;
var map__40922__$1 = ((((!((map__40922 == null)))?((((map__40922.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40922.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40922):map__40922);
var file_msg = map__40922__$1;
var request_url = cljs.core.get.call(null,map__40922__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__40922__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__22319__auto___41010 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22319__auto___41010,out){
return (function (){
var f__22320__auto__ = (function (){var switch__22298__auto__ = ((function (c__22319__auto___41010,out){
return (function (state_40992){
var state_val_40993 = (state_40992[(1)]);
if((state_val_40993 === (1))){
var inst_40970 = cljs.core.nth.call(null,files,(0),null);
var inst_40971 = cljs.core.nthnext.call(null,files,(1));
var inst_40972 = files;
var state_40992__$1 = (function (){var statearr_40994 = state_40992;
(statearr_40994[(7)] = inst_40970);

(statearr_40994[(8)] = inst_40971);

(statearr_40994[(9)] = inst_40972);

return statearr_40994;
})();
var statearr_40995_41011 = state_40992__$1;
(statearr_40995_41011[(2)] = null);

(statearr_40995_41011[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40993 === (2))){
var inst_40975 = (state_40992[(10)]);
var inst_40972 = (state_40992[(9)]);
var inst_40975__$1 = cljs.core.nth.call(null,inst_40972,(0),null);
var inst_40976 = cljs.core.nthnext.call(null,inst_40972,(1));
var inst_40977 = (inst_40975__$1 == null);
var inst_40978 = cljs.core.not.call(null,inst_40977);
var state_40992__$1 = (function (){var statearr_40996 = state_40992;
(statearr_40996[(11)] = inst_40976);

(statearr_40996[(10)] = inst_40975__$1);

return statearr_40996;
})();
if(inst_40978){
var statearr_40997_41012 = state_40992__$1;
(statearr_40997_41012[(1)] = (4));

} else {
var statearr_40998_41013 = state_40992__$1;
(statearr_40998_41013[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40993 === (3))){
var inst_40990 = (state_40992[(2)]);
var state_40992__$1 = state_40992;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40992__$1,inst_40990);
} else {
if((state_val_40993 === (4))){
var inst_40975 = (state_40992[(10)]);
var inst_40980 = figwheel.client.file_reloading.reload_js_file.call(null,inst_40975);
var state_40992__$1 = state_40992;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40992__$1,(7),inst_40980);
} else {
if((state_val_40993 === (5))){
var inst_40986 = cljs.core.async.close_BANG_.call(null,out);
var state_40992__$1 = state_40992;
var statearr_40999_41014 = state_40992__$1;
(statearr_40999_41014[(2)] = inst_40986);

(statearr_40999_41014[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40993 === (6))){
var inst_40988 = (state_40992[(2)]);
var state_40992__$1 = state_40992;
var statearr_41000_41015 = state_40992__$1;
(statearr_41000_41015[(2)] = inst_40988);

(statearr_41000_41015[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40993 === (7))){
var inst_40976 = (state_40992[(11)]);
var inst_40982 = (state_40992[(2)]);
var inst_40983 = cljs.core.async.put_BANG_.call(null,out,inst_40982);
var inst_40972 = inst_40976;
var state_40992__$1 = (function (){var statearr_41001 = state_40992;
(statearr_41001[(12)] = inst_40983);

(statearr_41001[(9)] = inst_40972);

return statearr_41001;
})();
var statearr_41002_41016 = state_40992__$1;
(statearr_41002_41016[(2)] = null);

(statearr_41002_41016[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__22319__auto___41010,out))
;
return ((function (switch__22298__auto__,c__22319__auto___41010,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__22299__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__22299__auto____0 = (function (){
var statearr_41006 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41006[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__22299__auto__);

(statearr_41006[(1)] = (1));

return statearr_41006;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__22299__auto____1 = (function (state_40992){
while(true){
var ret_value__22300__auto__ = (function (){try{while(true){
var result__22301__auto__ = switch__22298__auto__.call(null,state_40992);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22301__auto__;
}
break;
}
}catch (e41007){if((e41007 instanceof Object)){
var ex__22302__auto__ = e41007;
var statearr_41008_41017 = state_40992;
(statearr_41008_41017[(5)] = ex__22302__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40992);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41007;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41018 = state_40992;
state_40992 = G__41018;
continue;
} else {
return ret_value__22300__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__22299__auto__ = function(state_40992){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__22299__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__22299__auto____1.call(this,state_40992);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__22299__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__22299__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__22299__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__22299__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__22299__auto__;
})()
;})(switch__22298__auto__,c__22319__auto___41010,out))
})();
var state__22321__auto__ = (function (){var statearr_41009 = f__22320__auto__.call(null);
(statearr_41009[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22319__auto___41010);

return statearr_41009;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22321__auto__);
});})(c__22319__auto___41010,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__41019,opts){
var map__41023 = p__41019;
var map__41023__$1 = ((((!((map__41023 == null)))?((((map__41023.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41023.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41023):map__41023);
var eval_body__$1 = cljs.core.get.call(null,map__41023__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__41023__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__19807__auto__ = eval_body__$1;
if(cljs.core.truth_(and__19807__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__19807__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e41025){var e = e41025;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__41026_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__41026_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__41031){
var vec__41032 = p__41031;
var k = cljs.core.nth.call(null,vec__41032,(0),null);
var v = cljs.core.nth.call(null,vec__41032,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__41033){
var vec__41034 = p__41033;
var k = cljs.core.nth.call(null,vec__41034,(0),null);
var v = cljs.core.nth.call(null,vec__41034,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__41038,p__41039){
var map__41286 = p__41038;
var map__41286__$1 = ((((!((map__41286 == null)))?((((map__41286.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41286.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41286):map__41286);
var opts = map__41286__$1;
var before_jsload = cljs.core.get.call(null,map__41286__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__41286__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__41286__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__41287 = p__41039;
var map__41287__$1 = ((((!((map__41287 == null)))?((((map__41287.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41287.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41287):map__41287);
var msg = map__41287__$1;
var files = cljs.core.get.call(null,map__41287__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__41287__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__41287__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__22319__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22319__auto__,map__41286,map__41286__$1,opts,before_jsload,on_jsload,reload_dependents,map__41287,map__41287__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__22320__auto__ = (function (){var switch__22298__auto__ = ((function (c__22319__auto__,map__41286,map__41286__$1,opts,before_jsload,on_jsload,reload_dependents,map__41287,map__41287__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_41440){
var state_val_41441 = (state_41440[(1)]);
if((state_val_41441 === (7))){
var inst_41303 = (state_41440[(7)]);
var inst_41302 = (state_41440[(8)]);
var inst_41304 = (state_41440[(9)]);
var inst_41301 = (state_41440[(10)]);
var inst_41309 = cljs.core._nth.call(null,inst_41302,inst_41304);
var inst_41310 = figwheel.client.file_reloading.eval_body.call(null,inst_41309,opts);
var inst_41311 = (inst_41304 + (1));
var tmp41442 = inst_41303;
var tmp41443 = inst_41302;
var tmp41444 = inst_41301;
var inst_41301__$1 = tmp41444;
var inst_41302__$1 = tmp41443;
var inst_41303__$1 = tmp41442;
var inst_41304__$1 = inst_41311;
var state_41440__$1 = (function (){var statearr_41445 = state_41440;
(statearr_41445[(7)] = inst_41303__$1);

(statearr_41445[(8)] = inst_41302__$1);

(statearr_41445[(11)] = inst_41310);

(statearr_41445[(9)] = inst_41304__$1);

(statearr_41445[(10)] = inst_41301__$1);

return statearr_41445;
})();
var statearr_41446_41532 = state_41440__$1;
(statearr_41446_41532[(2)] = null);

(statearr_41446_41532[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41441 === (20))){
var inst_41344 = (state_41440[(12)]);
var inst_41352 = figwheel.client.file_reloading.sort_files.call(null,inst_41344);
var state_41440__$1 = state_41440;
var statearr_41447_41533 = state_41440__$1;
(statearr_41447_41533[(2)] = inst_41352);

(statearr_41447_41533[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41441 === (27))){
var state_41440__$1 = state_41440;
var statearr_41448_41534 = state_41440__$1;
(statearr_41448_41534[(2)] = null);

(statearr_41448_41534[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41441 === (1))){
var inst_41293 = (state_41440[(13)]);
var inst_41290 = before_jsload.call(null,files);
var inst_41291 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_41292 = (function (){return ((function (inst_41293,inst_41290,inst_41291,state_val_41441,c__22319__auto__,map__41286,map__41286__$1,opts,before_jsload,on_jsload,reload_dependents,map__41287,map__41287__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__41035_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__41035_SHARP_);
});
;})(inst_41293,inst_41290,inst_41291,state_val_41441,c__22319__auto__,map__41286,map__41286__$1,opts,before_jsload,on_jsload,reload_dependents,map__41287,map__41287__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_41293__$1 = cljs.core.filter.call(null,inst_41292,files);
var inst_41294 = cljs.core.not_empty.call(null,inst_41293__$1);
var state_41440__$1 = (function (){var statearr_41449 = state_41440;
(statearr_41449[(13)] = inst_41293__$1);

(statearr_41449[(14)] = inst_41290);

(statearr_41449[(15)] = inst_41291);

return statearr_41449;
})();
if(cljs.core.truth_(inst_41294)){
var statearr_41450_41535 = state_41440__$1;
(statearr_41450_41535[(1)] = (2));

} else {
var statearr_41451_41536 = state_41440__$1;
(statearr_41451_41536[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41441 === (24))){
var state_41440__$1 = state_41440;
var statearr_41452_41537 = state_41440__$1;
(statearr_41452_41537[(2)] = null);

(statearr_41452_41537[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41441 === (39))){
var inst_41394 = (state_41440[(16)]);
var state_41440__$1 = state_41440;
var statearr_41453_41538 = state_41440__$1;
(statearr_41453_41538[(2)] = inst_41394);

(statearr_41453_41538[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41441 === (46))){
var inst_41435 = (state_41440[(2)]);
var state_41440__$1 = state_41440;
var statearr_41454_41539 = state_41440__$1;
(statearr_41454_41539[(2)] = inst_41435);

(statearr_41454_41539[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41441 === (4))){
var inst_41338 = (state_41440[(2)]);
var inst_41339 = cljs.core.List.EMPTY;
var inst_41340 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_41339);
var inst_41341 = (function (){return ((function (inst_41338,inst_41339,inst_41340,state_val_41441,c__22319__auto__,map__41286,map__41286__$1,opts,before_jsload,on_jsload,reload_dependents,map__41287,map__41287__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__41036_SHARP_){
var and__19807__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__41036_SHARP_);
if(cljs.core.truth_(and__19807__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__41036_SHARP_));
} else {
return and__19807__auto__;
}
});
;})(inst_41338,inst_41339,inst_41340,state_val_41441,c__22319__auto__,map__41286,map__41286__$1,opts,before_jsload,on_jsload,reload_dependents,map__41287,map__41287__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_41342 = cljs.core.filter.call(null,inst_41341,files);
var inst_41343 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_41344 = cljs.core.concat.call(null,inst_41342,inst_41343);
var state_41440__$1 = (function (){var statearr_41455 = state_41440;
(statearr_41455[(12)] = inst_41344);

(statearr_41455[(17)] = inst_41338);

(statearr_41455[(18)] = inst_41340);

return statearr_41455;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_41456_41540 = state_41440__$1;
(statearr_41456_41540[(1)] = (16));

} else {
var statearr_41457_41541 = state_41440__$1;
(statearr_41457_41541[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41441 === (15))){
var inst_41328 = (state_41440[(2)]);
var state_41440__$1 = state_41440;
var statearr_41458_41542 = state_41440__$1;
(statearr_41458_41542[(2)] = inst_41328);

(statearr_41458_41542[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41441 === (21))){
var inst_41354 = (state_41440[(19)]);
var inst_41354__$1 = (state_41440[(2)]);
var inst_41355 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_41354__$1);
var state_41440__$1 = (function (){var statearr_41459 = state_41440;
(statearr_41459[(19)] = inst_41354__$1);

return statearr_41459;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41440__$1,(22),inst_41355);
} else {
if((state_val_41441 === (31))){
var inst_41438 = (state_41440[(2)]);
var state_41440__$1 = state_41440;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41440__$1,inst_41438);
} else {
if((state_val_41441 === (32))){
var inst_41394 = (state_41440[(16)]);
var inst_41399 = inst_41394.cljs$lang$protocol_mask$partition0$;
var inst_41400 = (inst_41399 & (64));
var inst_41401 = inst_41394.cljs$core$ISeq$;
var inst_41402 = (inst_41400) || (inst_41401);
var state_41440__$1 = state_41440;
if(cljs.core.truth_(inst_41402)){
var statearr_41460_41543 = state_41440__$1;
(statearr_41460_41543[(1)] = (35));

} else {
var statearr_41461_41544 = state_41440__$1;
(statearr_41461_41544[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41441 === (40))){
var inst_41415 = (state_41440[(20)]);
var inst_41414 = (state_41440[(2)]);
var inst_41415__$1 = cljs.core.get.call(null,inst_41414,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_41416 = cljs.core.get.call(null,inst_41414,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_41417 = cljs.core.not_empty.call(null,inst_41415__$1);
var state_41440__$1 = (function (){var statearr_41462 = state_41440;
(statearr_41462[(20)] = inst_41415__$1);

(statearr_41462[(21)] = inst_41416);

return statearr_41462;
})();
if(cljs.core.truth_(inst_41417)){
var statearr_41463_41545 = state_41440__$1;
(statearr_41463_41545[(1)] = (41));

} else {
var statearr_41464_41546 = state_41440__$1;
(statearr_41464_41546[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41441 === (33))){
var state_41440__$1 = state_41440;
var statearr_41465_41547 = state_41440__$1;
(statearr_41465_41547[(2)] = false);

(statearr_41465_41547[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41441 === (13))){
var inst_41314 = (state_41440[(22)]);
var inst_41318 = cljs.core.chunk_first.call(null,inst_41314);
var inst_41319 = cljs.core.chunk_rest.call(null,inst_41314);
var inst_41320 = cljs.core.count.call(null,inst_41318);
var inst_41301 = inst_41319;
var inst_41302 = inst_41318;
var inst_41303 = inst_41320;
var inst_41304 = (0);
var state_41440__$1 = (function (){var statearr_41466 = state_41440;
(statearr_41466[(7)] = inst_41303);

(statearr_41466[(8)] = inst_41302);

(statearr_41466[(9)] = inst_41304);

(statearr_41466[(10)] = inst_41301);

return statearr_41466;
})();
var statearr_41467_41548 = state_41440__$1;
(statearr_41467_41548[(2)] = null);

(statearr_41467_41548[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41441 === (22))){
var inst_41354 = (state_41440[(19)]);
var inst_41357 = (state_41440[(23)]);
var inst_41362 = (state_41440[(24)]);
var inst_41358 = (state_41440[(25)]);
var inst_41357__$1 = (state_41440[(2)]);
var inst_41358__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_41357__$1);
var inst_41359 = (function (){var all_files = inst_41354;
var res_SINGLEQUOTE_ = inst_41357__$1;
var res = inst_41358__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_41354,inst_41357,inst_41362,inst_41358,inst_41357__$1,inst_41358__$1,state_val_41441,c__22319__auto__,map__41286,map__41286__$1,opts,before_jsload,on_jsload,reload_dependents,map__41287,map__41287__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__41037_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__41037_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_41354,inst_41357,inst_41362,inst_41358,inst_41357__$1,inst_41358__$1,state_val_41441,c__22319__auto__,map__41286,map__41286__$1,opts,before_jsload,on_jsload,reload_dependents,map__41287,map__41287__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_41360 = cljs.core.filter.call(null,inst_41359,inst_41357__$1);
var inst_41361 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_41362__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_41361);
var inst_41363 = cljs.core.not_empty.call(null,inst_41362__$1);
var state_41440__$1 = (function (){var statearr_41468 = state_41440;
(statearr_41468[(23)] = inst_41357__$1);

(statearr_41468[(24)] = inst_41362__$1);

(statearr_41468[(26)] = inst_41360);

(statearr_41468[(25)] = inst_41358__$1);

return statearr_41468;
})();
if(cljs.core.truth_(inst_41363)){
var statearr_41469_41549 = state_41440__$1;
(statearr_41469_41549[(1)] = (23));

} else {
var statearr_41470_41550 = state_41440__$1;
(statearr_41470_41550[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41441 === (36))){
var state_41440__$1 = state_41440;
var statearr_41471_41551 = state_41440__$1;
(statearr_41471_41551[(2)] = false);

(statearr_41471_41551[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41441 === (41))){
var inst_41415 = (state_41440[(20)]);
var inst_41419 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_41420 = cljs.core.map.call(null,inst_41419,inst_41415);
var inst_41421 = cljs.core.pr_str.call(null,inst_41420);
var inst_41422 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_41421)].join('');
var inst_41423 = figwheel.client.utils.log.call(null,inst_41422);
var state_41440__$1 = state_41440;
var statearr_41472_41552 = state_41440__$1;
(statearr_41472_41552[(2)] = inst_41423);

(statearr_41472_41552[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41441 === (43))){
var inst_41416 = (state_41440[(21)]);
var inst_41426 = (state_41440[(2)]);
var inst_41427 = cljs.core.not_empty.call(null,inst_41416);
var state_41440__$1 = (function (){var statearr_41473 = state_41440;
(statearr_41473[(27)] = inst_41426);

return statearr_41473;
})();
if(cljs.core.truth_(inst_41427)){
var statearr_41474_41553 = state_41440__$1;
(statearr_41474_41553[(1)] = (44));

} else {
var statearr_41475_41554 = state_41440__$1;
(statearr_41475_41554[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41441 === (29))){
var inst_41394 = (state_41440[(16)]);
var inst_41354 = (state_41440[(19)]);
var inst_41357 = (state_41440[(23)]);
var inst_41362 = (state_41440[(24)]);
var inst_41360 = (state_41440[(26)]);
var inst_41358 = (state_41440[(25)]);
var inst_41390 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_41393 = (function (){var all_files = inst_41354;
var res_SINGLEQUOTE_ = inst_41357;
var res = inst_41358;
var files_not_loaded = inst_41360;
var dependencies_that_loaded = inst_41362;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_41394,inst_41354,inst_41357,inst_41362,inst_41360,inst_41358,inst_41390,state_val_41441,c__22319__auto__,map__41286,map__41286__$1,opts,before_jsload,on_jsload,reload_dependents,map__41287,map__41287__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__41392){
var map__41476 = p__41392;
var map__41476__$1 = ((((!((map__41476 == null)))?((((map__41476.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41476.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41476):map__41476);
var namespace = cljs.core.get.call(null,map__41476__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_41394,inst_41354,inst_41357,inst_41362,inst_41360,inst_41358,inst_41390,state_val_41441,c__22319__auto__,map__41286,map__41286__$1,opts,before_jsload,on_jsload,reload_dependents,map__41287,map__41287__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_41394__$1 = cljs.core.group_by.call(null,inst_41393,inst_41360);
var inst_41396 = (inst_41394__$1 == null);
var inst_41397 = cljs.core.not.call(null,inst_41396);
var state_41440__$1 = (function (){var statearr_41478 = state_41440;
(statearr_41478[(16)] = inst_41394__$1);

(statearr_41478[(28)] = inst_41390);

return statearr_41478;
})();
if(inst_41397){
var statearr_41479_41555 = state_41440__$1;
(statearr_41479_41555[(1)] = (32));

} else {
var statearr_41480_41556 = state_41440__$1;
(statearr_41480_41556[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41441 === (44))){
var inst_41416 = (state_41440[(21)]);
var inst_41429 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_41416);
var inst_41430 = cljs.core.pr_str.call(null,inst_41429);
var inst_41431 = [cljs.core.str("not required: "),cljs.core.str(inst_41430)].join('');
var inst_41432 = figwheel.client.utils.log.call(null,inst_41431);
var state_41440__$1 = state_41440;
var statearr_41481_41557 = state_41440__$1;
(statearr_41481_41557[(2)] = inst_41432);

(statearr_41481_41557[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41441 === (6))){
var inst_41335 = (state_41440[(2)]);
var state_41440__$1 = state_41440;
var statearr_41482_41558 = state_41440__$1;
(statearr_41482_41558[(2)] = inst_41335);

(statearr_41482_41558[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41441 === (28))){
var inst_41360 = (state_41440[(26)]);
var inst_41387 = (state_41440[(2)]);
var inst_41388 = cljs.core.not_empty.call(null,inst_41360);
var state_41440__$1 = (function (){var statearr_41483 = state_41440;
(statearr_41483[(29)] = inst_41387);

return statearr_41483;
})();
if(cljs.core.truth_(inst_41388)){
var statearr_41484_41559 = state_41440__$1;
(statearr_41484_41559[(1)] = (29));

} else {
var statearr_41485_41560 = state_41440__$1;
(statearr_41485_41560[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41441 === (25))){
var inst_41358 = (state_41440[(25)]);
var inst_41374 = (state_41440[(2)]);
var inst_41375 = cljs.core.not_empty.call(null,inst_41358);
var state_41440__$1 = (function (){var statearr_41486 = state_41440;
(statearr_41486[(30)] = inst_41374);

return statearr_41486;
})();
if(cljs.core.truth_(inst_41375)){
var statearr_41487_41561 = state_41440__$1;
(statearr_41487_41561[(1)] = (26));

} else {
var statearr_41488_41562 = state_41440__$1;
(statearr_41488_41562[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41441 === (34))){
var inst_41409 = (state_41440[(2)]);
var state_41440__$1 = state_41440;
if(cljs.core.truth_(inst_41409)){
var statearr_41489_41563 = state_41440__$1;
(statearr_41489_41563[(1)] = (38));

} else {
var statearr_41490_41564 = state_41440__$1;
(statearr_41490_41564[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41441 === (17))){
var state_41440__$1 = state_41440;
var statearr_41491_41565 = state_41440__$1;
(statearr_41491_41565[(2)] = recompile_dependents);

(statearr_41491_41565[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41441 === (3))){
var state_41440__$1 = state_41440;
var statearr_41492_41566 = state_41440__$1;
(statearr_41492_41566[(2)] = null);

(statearr_41492_41566[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41441 === (12))){
var inst_41331 = (state_41440[(2)]);
var state_41440__$1 = state_41440;
var statearr_41493_41567 = state_41440__$1;
(statearr_41493_41567[(2)] = inst_41331);

(statearr_41493_41567[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41441 === (2))){
var inst_41293 = (state_41440[(13)]);
var inst_41300 = cljs.core.seq.call(null,inst_41293);
var inst_41301 = inst_41300;
var inst_41302 = null;
var inst_41303 = (0);
var inst_41304 = (0);
var state_41440__$1 = (function (){var statearr_41494 = state_41440;
(statearr_41494[(7)] = inst_41303);

(statearr_41494[(8)] = inst_41302);

(statearr_41494[(9)] = inst_41304);

(statearr_41494[(10)] = inst_41301);

return statearr_41494;
})();
var statearr_41495_41568 = state_41440__$1;
(statearr_41495_41568[(2)] = null);

(statearr_41495_41568[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41441 === (23))){
var inst_41354 = (state_41440[(19)]);
var inst_41357 = (state_41440[(23)]);
var inst_41362 = (state_41440[(24)]);
var inst_41360 = (state_41440[(26)]);
var inst_41358 = (state_41440[(25)]);
var inst_41365 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_41367 = (function (){var all_files = inst_41354;
var res_SINGLEQUOTE_ = inst_41357;
var res = inst_41358;
var files_not_loaded = inst_41360;
var dependencies_that_loaded = inst_41362;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_41354,inst_41357,inst_41362,inst_41360,inst_41358,inst_41365,state_val_41441,c__22319__auto__,map__41286,map__41286__$1,opts,before_jsload,on_jsload,reload_dependents,map__41287,map__41287__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__41366){
var map__41496 = p__41366;
var map__41496__$1 = ((((!((map__41496 == null)))?((((map__41496.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41496.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41496):map__41496);
var request_url = cljs.core.get.call(null,map__41496__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_41354,inst_41357,inst_41362,inst_41360,inst_41358,inst_41365,state_val_41441,c__22319__auto__,map__41286,map__41286__$1,opts,before_jsload,on_jsload,reload_dependents,map__41287,map__41287__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_41368 = cljs.core.reverse.call(null,inst_41362);
var inst_41369 = cljs.core.map.call(null,inst_41367,inst_41368);
var inst_41370 = cljs.core.pr_str.call(null,inst_41369);
var inst_41371 = figwheel.client.utils.log.call(null,inst_41370);
var state_41440__$1 = (function (){var statearr_41498 = state_41440;
(statearr_41498[(31)] = inst_41365);

return statearr_41498;
})();
var statearr_41499_41569 = state_41440__$1;
(statearr_41499_41569[(2)] = inst_41371);

(statearr_41499_41569[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41441 === (35))){
var state_41440__$1 = state_41440;
var statearr_41500_41570 = state_41440__$1;
(statearr_41500_41570[(2)] = true);

(statearr_41500_41570[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41441 === (19))){
var inst_41344 = (state_41440[(12)]);
var inst_41350 = figwheel.client.file_reloading.expand_files.call(null,inst_41344);
var state_41440__$1 = state_41440;
var statearr_41501_41571 = state_41440__$1;
(statearr_41501_41571[(2)] = inst_41350);

(statearr_41501_41571[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41441 === (11))){
var state_41440__$1 = state_41440;
var statearr_41502_41572 = state_41440__$1;
(statearr_41502_41572[(2)] = null);

(statearr_41502_41572[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41441 === (9))){
var inst_41333 = (state_41440[(2)]);
var state_41440__$1 = state_41440;
var statearr_41503_41573 = state_41440__$1;
(statearr_41503_41573[(2)] = inst_41333);

(statearr_41503_41573[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41441 === (5))){
var inst_41303 = (state_41440[(7)]);
var inst_41304 = (state_41440[(9)]);
var inst_41306 = (inst_41304 < inst_41303);
var inst_41307 = inst_41306;
var state_41440__$1 = state_41440;
if(cljs.core.truth_(inst_41307)){
var statearr_41504_41574 = state_41440__$1;
(statearr_41504_41574[(1)] = (7));

} else {
var statearr_41505_41575 = state_41440__$1;
(statearr_41505_41575[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41441 === (14))){
var inst_41314 = (state_41440[(22)]);
var inst_41323 = cljs.core.first.call(null,inst_41314);
var inst_41324 = figwheel.client.file_reloading.eval_body.call(null,inst_41323,opts);
var inst_41325 = cljs.core.next.call(null,inst_41314);
var inst_41301 = inst_41325;
var inst_41302 = null;
var inst_41303 = (0);
var inst_41304 = (0);
var state_41440__$1 = (function (){var statearr_41506 = state_41440;
(statearr_41506[(7)] = inst_41303);

(statearr_41506[(8)] = inst_41302);

(statearr_41506[(9)] = inst_41304);

(statearr_41506[(32)] = inst_41324);

(statearr_41506[(10)] = inst_41301);

return statearr_41506;
})();
var statearr_41507_41576 = state_41440__$1;
(statearr_41507_41576[(2)] = null);

(statearr_41507_41576[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41441 === (45))){
var state_41440__$1 = state_41440;
var statearr_41508_41577 = state_41440__$1;
(statearr_41508_41577[(2)] = null);

(statearr_41508_41577[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41441 === (26))){
var inst_41354 = (state_41440[(19)]);
var inst_41357 = (state_41440[(23)]);
var inst_41362 = (state_41440[(24)]);
var inst_41360 = (state_41440[(26)]);
var inst_41358 = (state_41440[(25)]);
var inst_41377 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_41379 = (function (){var all_files = inst_41354;
var res_SINGLEQUOTE_ = inst_41357;
var res = inst_41358;
var files_not_loaded = inst_41360;
var dependencies_that_loaded = inst_41362;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_41354,inst_41357,inst_41362,inst_41360,inst_41358,inst_41377,state_val_41441,c__22319__auto__,map__41286,map__41286__$1,opts,before_jsload,on_jsload,reload_dependents,map__41287,map__41287__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__41378){
var map__41509 = p__41378;
var map__41509__$1 = ((((!((map__41509 == null)))?((((map__41509.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41509.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41509):map__41509);
var namespace = cljs.core.get.call(null,map__41509__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__41509__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_41354,inst_41357,inst_41362,inst_41360,inst_41358,inst_41377,state_val_41441,c__22319__auto__,map__41286,map__41286__$1,opts,before_jsload,on_jsload,reload_dependents,map__41287,map__41287__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_41380 = cljs.core.map.call(null,inst_41379,inst_41358);
var inst_41381 = cljs.core.pr_str.call(null,inst_41380);
var inst_41382 = figwheel.client.utils.log.call(null,inst_41381);
var inst_41383 = (function (){var all_files = inst_41354;
var res_SINGLEQUOTE_ = inst_41357;
var res = inst_41358;
var files_not_loaded = inst_41360;
var dependencies_that_loaded = inst_41362;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_41354,inst_41357,inst_41362,inst_41360,inst_41358,inst_41377,inst_41379,inst_41380,inst_41381,inst_41382,state_val_41441,c__22319__auto__,map__41286,map__41286__$1,opts,before_jsload,on_jsload,reload_dependents,map__41287,map__41287__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_41354,inst_41357,inst_41362,inst_41360,inst_41358,inst_41377,inst_41379,inst_41380,inst_41381,inst_41382,state_val_41441,c__22319__auto__,map__41286,map__41286__$1,opts,before_jsload,on_jsload,reload_dependents,map__41287,map__41287__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_41384 = setTimeout(inst_41383,(10));
var state_41440__$1 = (function (){var statearr_41511 = state_41440;
(statearr_41511[(33)] = inst_41382);

(statearr_41511[(34)] = inst_41377);

return statearr_41511;
})();
var statearr_41512_41578 = state_41440__$1;
(statearr_41512_41578[(2)] = inst_41384);

(statearr_41512_41578[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41441 === (16))){
var state_41440__$1 = state_41440;
var statearr_41513_41579 = state_41440__$1;
(statearr_41513_41579[(2)] = reload_dependents);

(statearr_41513_41579[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41441 === (38))){
var inst_41394 = (state_41440[(16)]);
var inst_41411 = cljs.core.apply.call(null,cljs.core.hash_map,inst_41394);
var state_41440__$1 = state_41440;
var statearr_41514_41580 = state_41440__$1;
(statearr_41514_41580[(2)] = inst_41411);

(statearr_41514_41580[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41441 === (30))){
var state_41440__$1 = state_41440;
var statearr_41515_41581 = state_41440__$1;
(statearr_41515_41581[(2)] = null);

(statearr_41515_41581[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41441 === (10))){
var inst_41314 = (state_41440[(22)]);
var inst_41316 = cljs.core.chunked_seq_QMARK_.call(null,inst_41314);
var state_41440__$1 = state_41440;
if(inst_41316){
var statearr_41516_41582 = state_41440__$1;
(statearr_41516_41582[(1)] = (13));

} else {
var statearr_41517_41583 = state_41440__$1;
(statearr_41517_41583[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41441 === (18))){
var inst_41348 = (state_41440[(2)]);
var state_41440__$1 = state_41440;
if(cljs.core.truth_(inst_41348)){
var statearr_41518_41584 = state_41440__$1;
(statearr_41518_41584[(1)] = (19));

} else {
var statearr_41519_41585 = state_41440__$1;
(statearr_41519_41585[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41441 === (42))){
var state_41440__$1 = state_41440;
var statearr_41520_41586 = state_41440__$1;
(statearr_41520_41586[(2)] = null);

(statearr_41520_41586[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41441 === (37))){
var inst_41406 = (state_41440[(2)]);
var state_41440__$1 = state_41440;
var statearr_41521_41587 = state_41440__$1;
(statearr_41521_41587[(2)] = inst_41406);

(statearr_41521_41587[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41441 === (8))){
var inst_41314 = (state_41440[(22)]);
var inst_41301 = (state_41440[(10)]);
var inst_41314__$1 = cljs.core.seq.call(null,inst_41301);
var state_41440__$1 = (function (){var statearr_41522 = state_41440;
(statearr_41522[(22)] = inst_41314__$1);

return statearr_41522;
})();
if(inst_41314__$1){
var statearr_41523_41588 = state_41440__$1;
(statearr_41523_41588[(1)] = (10));

} else {
var statearr_41524_41589 = state_41440__$1;
(statearr_41524_41589[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__22319__auto__,map__41286,map__41286__$1,opts,before_jsload,on_jsload,reload_dependents,map__41287,map__41287__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__22298__auto__,c__22319__auto__,map__41286,map__41286__$1,opts,before_jsload,on_jsload,reload_dependents,map__41287,map__41287__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__22299__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__22299__auto____0 = (function (){
var statearr_41528 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41528[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__22299__auto__);

(statearr_41528[(1)] = (1));

return statearr_41528;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__22299__auto____1 = (function (state_41440){
while(true){
var ret_value__22300__auto__ = (function (){try{while(true){
var result__22301__auto__ = switch__22298__auto__.call(null,state_41440);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22301__auto__;
}
break;
}
}catch (e41529){if((e41529 instanceof Object)){
var ex__22302__auto__ = e41529;
var statearr_41530_41590 = state_41440;
(statearr_41530_41590[(5)] = ex__22302__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41440);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41529;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41591 = state_41440;
state_41440 = G__41591;
continue;
} else {
return ret_value__22300__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__22299__auto__ = function(state_41440){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__22299__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__22299__auto____1.call(this,state_41440);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__22299__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__22299__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__22299__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__22299__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__22299__auto__;
})()
;})(switch__22298__auto__,c__22319__auto__,map__41286,map__41286__$1,opts,before_jsload,on_jsload,reload_dependents,map__41287,map__41287__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__22321__auto__ = (function (){var statearr_41531 = f__22320__auto__.call(null);
(statearr_41531[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22319__auto__);

return statearr_41531;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22321__auto__);
});})(c__22319__auto__,map__41286,map__41286__$1,opts,before_jsload,on_jsload,reload_dependents,map__41287,map__41287__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__22319__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__41594,link){
var map__41597 = p__41594;
var map__41597__$1 = ((((!((map__41597 == null)))?((((map__41597.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41597.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41597):map__41597);
var file = cljs.core.get.call(null,map__41597__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__41597,map__41597__$1,file){
return (function (p1__41592_SHARP_,p2__41593_SHARP_){
if(cljs.core._EQ_.call(null,p1__41592_SHARP_,p2__41593_SHARP_)){
return p1__41592_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__41597,map__41597__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__41603){
var map__41604 = p__41603;
var map__41604__$1 = ((((!((map__41604 == null)))?((((map__41604.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41604.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41604):map__41604);
var match_length = cljs.core.get.call(null,map__41604__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__41604__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__41599_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__41599_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args41606 = [];
var len__20877__auto___41609 = arguments.length;
var i__20878__auto___41610 = (0);
while(true){
if((i__20878__auto___41610 < len__20877__auto___41609)){
args41606.push((arguments[i__20878__auto___41610]));

var G__41611 = (i__20878__auto___41610 + (1));
i__20878__auto___41610 = G__41611;
continue;
} else {
}
break;
}

var G__41608 = args41606.length;
switch (G__41608) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41606.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__41613_SHARP_,p2__41614_SHARP_){
return cljs.core.assoc.call(null,p1__41613_SHARP_,cljs.core.get.call(null,p2__41614_SHARP_,key),p2__41614_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__41615){
var map__41618 = p__41615;
var map__41618__$1 = ((((!((map__41618 == null)))?((((map__41618.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41618.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41618):map__41618);
var f_data = map__41618__$1;
var file = cljs.core.get.call(null,map__41618__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__41620,files_msg){
var map__41627 = p__41620;
var map__41627__$1 = ((((!((map__41627 == null)))?((((map__41627.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41627.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41627):map__41627);
var opts = map__41627__$1;
var on_cssload = cljs.core.get.call(null,map__41627__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__41629_41633 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__41630_41634 = null;
var count__41631_41635 = (0);
var i__41632_41636 = (0);
while(true){
if((i__41632_41636 < count__41631_41635)){
var f_41637 = cljs.core._nth.call(null,chunk__41630_41634,i__41632_41636);
figwheel.client.file_reloading.reload_css_file.call(null,f_41637);

var G__41638 = seq__41629_41633;
var G__41639 = chunk__41630_41634;
var G__41640 = count__41631_41635;
var G__41641 = (i__41632_41636 + (1));
seq__41629_41633 = G__41638;
chunk__41630_41634 = G__41639;
count__41631_41635 = G__41640;
i__41632_41636 = G__41641;
continue;
} else {
var temp__4657__auto___41642 = cljs.core.seq.call(null,seq__41629_41633);
if(temp__4657__auto___41642){
var seq__41629_41643__$1 = temp__4657__auto___41642;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41629_41643__$1)){
var c__20622__auto___41644 = cljs.core.chunk_first.call(null,seq__41629_41643__$1);
var G__41645 = cljs.core.chunk_rest.call(null,seq__41629_41643__$1);
var G__41646 = c__20622__auto___41644;
var G__41647 = cljs.core.count.call(null,c__20622__auto___41644);
var G__41648 = (0);
seq__41629_41633 = G__41645;
chunk__41630_41634 = G__41646;
count__41631_41635 = G__41647;
i__41632_41636 = G__41648;
continue;
} else {
var f_41649 = cljs.core.first.call(null,seq__41629_41643__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_41649);

var G__41650 = cljs.core.next.call(null,seq__41629_41643__$1);
var G__41651 = null;
var G__41652 = (0);
var G__41653 = (0);
seq__41629_41633 = G__41650;
chunk__41630_41634 = G__41651;
count__41631_41635 = G__41652;
i__41632_41636 = G__41653;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__41627,map__41627__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__41627,map__41627__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map