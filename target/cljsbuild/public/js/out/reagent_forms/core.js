// Compiled by ClojureScript 1.7.170 {}
goog.provide('reagent_forms.core');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('goog.string.format');
goog.require('reagent.core');
goog.require('reagent_forms.datepicker');
reagent_forms.core.value_of = (function reagent_forms$core$value_of(element){
return element.target.value;
});
reagent_forms.core.id__GT_path = cljs.core.memoize.call(null,(function (id){
if(cljs.core.sequential_QMARK_.call(null,id)){
return id;
} else {
var segments = clojure.string.split.call(null,cljs.core.subs.call(null,[cljs.core.str(id)].join(''),(1)),/\./);
return cljs.core.map.call(null,cljs.core.keyword,segments);
}
}));
reagent_forms.core.set_doc_value = (function reagent_forms$core$set_doc_value(doc,id,value,events){
var path = reagent_forms.core.id__GT_path.call(null,id);
return cljs.core.reduce.call(null,((function (path){
return (function (p1__37222_SHARP_,p2__37221_SHARP_){
var or__19819__auto__ = p2__37221_SHARP_.call(null,path,value,p1__37222_SHARP_);
if(cljs.core.truth_(or__19819__auto__)){
return or__19819__auto__;
} else {
return p1__37222_SHARP_;
}
});})(path))
,cljs.core.assoc_in.call(null,doc,path,value),events);
});
reagent_forms.core.mk_save_fn = (function reagent_forms$core$mk_save_fn(doc,events){
return (function (id,value){
return cljs.core.swap_BANG_.call(null,doc,reagent_forms.core.set_doc_value,id,value,events);
});
});
reagent_forms.core.wrap_get_fn = (function reagent_forms$core$wrap_get_fn(get,wrapper){
return (function (id){
return wrapper.call(null,get.call(null,id));
});
});
reagent_forms.core.wrap_save_fn = (function reagent_forms$core$wrap_save_fn(save_BANG_,wrapper){
return (function (id,value){
return save_BANG_.call(null,id,wrapper.call(null,value));
});
});
reagent_forms.core.wrap_fns = (function reagent_forms$core$wrap_fns(opts,node){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"get","get",1683182755),(function (){var temp__4655__auto__ = new cljs.core.Keyword(null,"in-fn","in-fn",-1938980694).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,node));
if(cljs.core.truth_(temp__4655__auto__)){
var in_fn = temp__4655__auto__;
return reagent_forms.core.wrap_get_fn.call(null,new cljs.core.Keyword(null,"get","get",1683182755).cljs$core$IFn$_invoke$arity$1(opts),in_fn);
} else {
return new cljs.core.Keyword(null,"get","get",1683182755).cljs$core$IFn$_invoke$arity$1(opts);
}
})(),new cljs.core.Keyword(null,"save!","save!",-1137373803),(function (){var temp__4655__auto__ = new cljs.core.Keyword(null,"out-fn","out-fn",747295447).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,node));
if(cljs.core.truth_(temp__4655__auto__)){
var out_fn = temp__4655__auto__;
return reagent_forms.core.wrap_save_fn.call(null,new cljs.core.Keyword(null,"save!","save!",-1137373803).cljs$core$IFn$_invoke$arity$1(opts),out_fn);
} else {
return new cljs.core.Keyword(null,"save!","save!",-1137373803).cljs$core$IFn$_invoke$arity$1(opts);
}
})()], null);
});
if(typeof reagent_forms.core.format_type !== 'undefined'){
} else {
reagent_forms.core.format_type = (function (){var method_table__20732__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__20733__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__20734__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__20735__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__20736__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"reagent-forms.core","format-type"),((function (method_table__20732__auto__,prefer_table__20733__auto__,method_cache__20734__auto__,cached_hierarchy__20735__auto__,hierarchy__20736__auto__){
return (function (field_type,_){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([field_type], true),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.Keyword(null,"numeric","numeric",-1495594714)], null)))){
return new cljs.core.Keyword(null,"numeric","numeric",-1495594714);
} else {
return field_type;
}
});})(method_table__20732__auto__,prefer_table__20733__auto__,method_cache__20734__auto__,cached_hierarchy__20735__auto__,hierarchy__20736__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__20736__auto__,method_table__20732__auto__,prefer_table__20733__auto__,method_cache__20734__auto__,cached_hierarchy__20735__auto__));
})();
}
reagent_forms.core.valid_number_ending_QMARK_ = (function reagent_forms$core$valid_number_ending_QMARK_(n){
return ((cljs.core.not_EQ_.call(null,".",cljs.core.last.call(null,cljs.core.butlast.call(null,n)))) && (cljs.core._EQ_.call(null,".",cljs.core.last.call(null,n)))) || (cljs.core._EQ_.call(null,"0",cljs.core.last.call(null,n)));
});
reagent_forms.core.format_value = (function reagent_forms$core$format_value(fmt,value){
if(cljs.core.truth_((function (){var and__19807__auto__ = cljs.core.not.call(null,isNaN(parseFloat(value)));
if(and__19807__auto__){
return fmt;
} else {
return and__19807__auto__;
}
})())){
return goog.string.format(fmt,value);
} else {
return value;
}
});
cljs.core._add_method.call(null,reagent_forms.core.format_type,new cljs.core.Keyword(null,"numeric","numeric",-1495594714),(function (_,n){
if(cljs.core.truth_(cljs.core.not_empty.call(null,n))){
var parsed = parseFloat(n);
if(cljs.core.truth_(isNaN(parsed))){
return null;
} else {
return parsed;
}
} else {
return null;
}
}));
cljs.core._add_method.call(null,reagent_forms.core.format_type,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_,value){
return value;
}));
if(typeof reagent_forms.core.bind !== 'undefined'){
} else {
reagent_forms.core.bind = (function (){var method_table__20732__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__20733__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__20734__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__20735__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__20736__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"reagent-forms.core","bind"),((function (method_table__20732__auto__,prefer_table__20733__auto__,method_cache__20734__auto__,cached_hierarchy__20735__auto__,hierarchy__20736__auto__){
return (function (p__37223,_){
var map__37224 = p__37223;
var map__37224__$1 = ((((!((map__37224 == null)))?((((map__37224.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37224.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37224):map__37224);
var field = cljs.core.get.call(null,map__37224__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([field], true),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"numeric","numeric",-1495594714),new cljs.core.Keyword(null,"password","password",417022471),new cljs.core.Keyword(null,"email","email",1415816706),new cljs.core.Keyword(null,"tel","tel",224138159),new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.Keyword(null,"textarea","textarea",-650375824)], null)))){
return new cljs.core.Keyword(null,"input-field","input-field",289353943);
} else {
return field;
}
});})(method_table__20732__auto__,prefer_table__20733__auto__,method_cache__20734__auto__,cached_hierarchy__20735__auto__,hierarchy__20736__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__20736__auto__,method_table__20732__auto__,prefer_table__20733__auto__,method_cache__20734__auto__,cached_hierarchy__20735__auto__));
})();
}
cljs.core._add_method.call(null,reagent_forms.core.bind,new cljs.core.Keyword(null,"input-field","input-field",289353943),(function (p__37227,p__37228){
var map__37229 = p__37227;
var map__37229__$1 = ((((!((map__37229 == null)))?((((map__37229.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37229.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37229):map__37229);
var field = cljs.core.get.call(null,map__37229__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var id = cljs.core.get.call(null,map__37229__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var fmt = cljs.core.get.call(null,map__37229__$1,new cljs.core.Keyword(null,"fmt","fmt",332300772));
var map__37230 = p__37228;
var map__37230__$1 = ((((!((map__37230 == null)))?((((map__37230.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37230.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37230):map__37230);
var get = cljs.core.get.call(null,map__37230__$1,new cljs.core.Keyword(null,"get","get",1683182755));
var save_BANG_ = cljs.core.get.call(null,map__37230__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));
var doc = cljs.core.get.call(null,map__37230__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),(function (){var value = (function (){var or__19819__auto__ = get.call(null,id);
if(cljs.core.truth_(or__19819__auto__)){
return or__19819__auto__;
} else {
return "";
}
})();
return reagent_forms.core.format_value.call(null,fmt,value);
})(),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (map__37229,map__37229__$1,field,id,fmt,map__37230,map__37230__$1,get,save_BANG_,doc){
return (function (p1__37226_SHARP_){
return save_BANG_.call(null,id,reagent_forms.core.format_type.call(null,field,reagent_forms.core.value_of.call(null,p1__37226_SHARP_)));
});})(map__37229,map__37229__$1,field,id,fmt,map__37230,map__37230__$1,get,save_BANG_,doc))
], null);
}));
cljs.core._add_method.call(null,reagent_forms.core.bind,new cljs.core.Keyword(null,"checkbox","checkbox",1612615655),(function (p__37233,p__37234){
var map__37235 = p__37233;
var map__37235__$1 = ((((!((map__37235 == null)))?((((map__37235.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37235.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37235):map__37235);
var id = cljs.core.get.call(null,map__37235__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var map__37236 = p__37234;
var map__37236__$1 = ((((!((map__37236 == null)))?((((map__37236.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37236.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37236):map__37236);
var get = cljs.core.get.call(null,map__37236__$1,new cljs.core.Keyword(null,"get","get",1683182755));
var save_BANG_ = cljs.core.get.call(null,map__37236__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"default-checked","default-checked",1039965863),get.call(null,id),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (map__37235,map__37235__$1,id,map__37236,map__37236__$1,get,save_BANG_){
return (function (){
return save_BANG_.call(null,id,cljs.core.not.call(null,get.call(null,id)));
});})(map__37235,map__37235__$1,id,map__37236,map__37236__$1,get,save_BANG_))
], null);
}));
cljs.core._add_method.call(null,reagent_forms.core.bind,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_,___$1){
return null;
}));
reagent_forms.core.set_attrs = (function reagent_forms$core$set_attrs(var_args){
var args__20884__auto__ = [];
var len__20877__auto___37246 = arguments.length;
var i__20878__auto___37247 = (0);
while(true){
if((i__20878__auto___37247 < len__20877__auto___37246)){
args__20884__auto__.push((arguments[i__20878__auto___37247]));

var G__37248 = (i__20878__auto___37247 + (1));
i__20878__auto___37247 = G__37248;
continue;
} else {
}
break;
}

var argseq__20885__auto__ = ((((2) < args__20884__auto__.length))?(new cljs.core.IndexedSeq(args__20884__auto__.slice((2)),(0))):null);
return reagent_forms.core.set_attrs.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__20885__auto__);
});

reagent_forms.core.set_attrs.cljs$core$IFn$_invoke$arity$variadic = (function (p__37242,opts,p__37243){
var vec__37244 = p__37242;
var type = cljs.core.nth.call(null,vec__37244,(0),null);
var attrs = cljs.core.nth.call(null,vec__37244,(1),null);
var body = cljs.core.nthnext.call(null,vec__37244,(2));
var vec__37245 = p__37243;
var default_attrs = cljs.core.nth.call(null,vec__37245,(0),null);
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.call(null,default_attrs,reagent_forms.core.bind.call(null,attrs,opts),attrs)], null),body);
});

reagent_forms.core.set_attrs.cljs$lang$maxFixedArity = (2);

reagent_forms.core.set_attrs.cljs$lang$applyTo = (function (seq37239){
var G__37240 = cljs.core.first.call(null,seq37239);
var seq37239__$1 = cljs.core.next.call(null,seq37239);
var G__37241 = cljs.core.first.call(null,seq37239__$1);
var seq37239__$2 = cljs.core.next.call(null,seq37239__$1);
return reagent_forms.core.set_attrs.cljs$core$IFn$_invoke$arity$variadic(G__37240,G__37241,seq37239__$2);
});
if(typeof reagent_forms.core.init_field !== 'undefined'){
} else {
reagent_forms.core.init_field = (function (){var method_table__20732__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__20733__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__20734__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__20735__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__20736__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"reagent-forms.core","init-field"),((function (method_table__20732__auto__,prefer_table__20733__auto__,method_cache__20734__auto__,cached_hierarchy__20735__auto__,hierarchy__20736__auto__){
return (function (p__37249,_){
var vec__37250 = p__37249;
var ___$1 = cljs.core.nth.call(null,vec__37250,(0),null);
var map__37251 = cljs.core.nth.call(null,vec__37250,(1),null);
var map__37251__$1 = ((((!((map__37251 == null)))?((((map__37251.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37251.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37251):map__37251);
var field = cljs.core.get.call(null,map__37251__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var field__$1 = cljs.core.keyword.call(null,field);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([field__$1], true),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"password","password",417022471),new cljs.core.Keyword(null,"email","email",1415816706),new cljs.core.Keyword(null,"tel","tel",224138159),new cljs.core.Keyword(null,"textarea","textarea",-650375824)], null)))){
return new cljs.core.Keyword(null,"input-field","input-field",289353943);
} else {
return field__$1;
}
});})(method_table__20732__auto__,prefer_table__20733__auto__,method_cache__20734__auto__,cached_hierarchy__20735__auto__,hierarchy__20736__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__20736__auto__,method_table__20732__auto__,prefer_table__20733__auto__,method_cache__20734__auto__,cached_hierarchy__20735__auto__));
})();
}
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"container","container",-1736937707),(function (p__37254,p__37255){
var vec__37256 = p__37254;
var type = cljs.core.nth.call(null,vec__37256,(0),null);
var map__37257 = cljs.core.nth.call(null,vec__37256,(1),null);
var map__37257__$1 = ((((!((map__37257 == null)))?((((map__37257.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37257.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37257):map__37257);
var attrs = map__37257__$1;
var valid_QMARK_ = cljs.core.get.call(null,map__37257__$1,new cljs.core.Keyword(null,"valid?","valid?",-212412379));
var body = cljs.core.nthnext.call(null,vec__37256,(2));
var map__37258 = p__37255;
var map__37258__$1 = ((((!((map__37258 == null)))?((((map__37258.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37258.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37258):map__37258);
var doc = cljs.core.get.call(null,map__37258__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
return ((function (vec__37256,type,map__37257,map__37257__$1,attrs,valid_QMARK_,body,map__37258,map__37258__$1,doc){
return (function (){
var temp__4655__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4655__auto__)){
var visible__21410__auto__ = temp__4655__auto__;
if(cljs.core.truth_(visible__21410__auto__.call(null,cljs.core.deref.call(null,doc)))){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,(function (){var temp__4655__auto____$1 = (cljs.core.truth_(valid_QMARK_)?valid_QMARK_.call(null,cljs.core.deref.call(null,doc)):null);
if(cljs.core.truth_(temp__4655__auto____$1)){
var valid_class = temp__4655__auto____$1;
return cljs.core.update_in.call(null,attrs,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class","class",-2030961996)], null),((function (valid_class,temp__4655__auto____$1,visible__21410__auto__,temp__4655__auto__,vec__37256,type,map__37257,map__37257__$1,attrs,valid_QMARK_,body,map__37258,map__37258__$1,doc){
return (function (p1__37253_SHARP_){
if(!(cljs.core.empty_QMARK_.call(null,p1__37253_SHARP_))){
return [cljs.core.str(p1__37253_SHARP_),cljs.core.str(" "),cljs.core.str(valid_class)].join('');
} else {
return valid_class;
}
});})(valid_class,temp__4655__auto____$1,visible__21410__auto__,temp__4655__auto__,vec__37256,type,map__37257,map__37257__$1,attrs,valid_QMARK_,body,map__37258,map__37258__$1,doc))
);
} else {
return attrs;
}
})()], null),body);
} else {
return null;
}
} else {
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,(function (){var temp__4655__auto____$1 = (cljs.core.truth_(valid_QMARK_)?valid_QMARK_.call(null,cljs.core.deref.call(null,doc)):null);
if(cljs.core.truth_(temp__4655__auto____$1)){
var valid_class = temp__4655__auto____$1;
return cljs.core.update_in.call(null,attrs,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class","class",-2030961996)], null),((function (valid_class,temp__4655__auto____$1,temp__4655__auto__,vec__37256,type,map__37257,map__37257__$1,attrs,valid_QMARK_,body,map__37258,map__37258__$1,doc){
return (function (p1__37253_SHARP_){
if(!(cljs.core.empty_QMARK_.call(null,p1__37253_SHARP_))){
return [cljs.core.str(p1__37253_SHARP_),cljs.core.str(" "),cljs.core.str(valid_class)].join('');
} else {
return valid_class;
}
});})(valid_class,temp__4655__auto____$1,temp__4655__auto__,vec__37256,type,map__37257,map__37257__$1,attrs,valid_QMARK_,body,map__37258,map__37258__$1,doc))
);
} else {
return attrs;
}
})()], null),body);
}
});
;})(vec__37256,type,map__37257,map__37257__$1,attrs,valid_QMARK_,body,map__37258,map__37258__$1,doc))
}));
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"input-field","input-field",289353943),(function (p__37261,p__37262){
var vec__37263 = p__37261;
var _ = cljs.core.nth.call(null,vec__37263,(0),null);
var map__37264 = cljs.core.nth.call(null,vec__37263,(1),null);
var map__37264__$1 = ((((!((map__37264 == null)))?((((map__37264.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37264.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37264):map__37264);
var attrs = map__37264__$1;
var field = cljs.core.get.call(null,map__37264__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var component = vec__37263;
var map__37265 = p__37262;
var map__37265__$1 = ((((!((map__37265 == null)))?((((map__37265.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37265.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37265):map__37265);
var opts = map__37265__$1;
var doc = cljs.core.get.call(null,map__37265__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
return ((function (vec__37263,_,map__37264,map__37264__$1,attrs,field,component,map__37265,map__37265__$1,opts,doc){
return (function (){
var temp__4655__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4655__auto__)){
var visible__21410__auto__ = temp__4655__auto__;
if(cljs.core.truth_(visible__21410__auto__.call(null,cljs.core.deref.call(null,doc)))){
return reagent_forms.core.set_attrs.call(null,component,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),field], null));
} else {
return null;
}
} else {
return reagent_forms.core.set_attrs.call(null,component,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),field], null));
}
});
;})(vec__37263,_,map__37264,map__37264__$1,attrs,field,component,map__37265,map__37265__$1,opts,doc))
}));
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"numeric","numeric",-1495594714),(function (p__37270,p__37271){
var vec__37272 = p__37270;
var type = cljs.core.nth.call(null,vec__37272,(0),null);
var map__37273 = cljs.core.nth.call(null,vec__37272,(1),null);
var map__37273__$1 = ((((!((map__37273 == null)))?((((map__37273.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37273.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37273):map__37273);
var attrs = map__37273__$1;
var id = cljs.core.get.call(null,map__37273__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var fmt = cljs.core.get.call(null,map__37273__$1,new cljs.core.Keyword(null,"fmt","fmt",332300772));
var map__37274 = p__37271;
var map__37274__$1 = ((((!((map__37274 == null)))?((((map__37274.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37274.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37274):map__37274);
var doc = cljs.core.get.call(null,map__37274__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var get = cljs.core.get.call(null,map__37274__$1,new cljs.core.Keyword(null,"get","get",1683182755));
var save_BANG_ = cljs.core.get.call(null,map__37274__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));
var input_value = reagent.core.atom.call(null,null);
return ((function (input_value,vec__37272,type,map__37273,map__37273__$1,attrs,id,fmt,map__37274,map__37274__$1,doc,get,save_BANG_){
return (function (){
var temp__4655__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4655__auto__)){
var visible__21410__auto__ = temp__4655__auto__;
if(cljs.core.truth_(visible__21410__auto__.call(null,cljs.core.deref.call(null,doc)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__19819__auto__ = cljs.core.deref.call(null,input_value);
if(cljs.core.truth_(or__19819__auto__)){
return or__19819__auto__;
} else {
return get.call(null,id,"");
}
})(),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (visible__21410__auto__,temp__4655__auto__,input_value,vec__37272,type,map__37273,map__37273__$1,attrs,id,fmt,map__37274,map__37274__$1,doc,get,save_BANG_){
return (function (p1__37268_SHARP_){
return cljs.core.reset_BANG_.call(null,input_value,reagent_forms.core.value_of.call(null,p1__37268_SHARP_));
});})(visible__21410__auto__,temp__4655__auto__,input_value,vec__37272,type,map__37273,map__37273__$1,attrs,id,fmt,map__37274,map__37274__$1,doc,get,save_BANG_))
,new cljs.core.Keyword(null,"on-blur","on-blur",814300747),((function (visible__21410__auto__,temp__4655__auto__,input_value,vec__37272,type,map__37273,map__37273__$1,attrs,id,fmt,map__37274,map__37274__$1,doc,get,save_BANG_){
return (function (p1__37269_SHARP_){
cljs.core.reset_BANG_.call(null,input_value,null);

return save_BANG_.call(null,id,reagent_forms.core.format_type.call(null,new cljs.core.Keyword(null,"numeric","numeric",-1495594714),reagent_forms.core.format_value.call(null,fmt,reagent_forms.core.value_of.call(null,p1__37269_SHARP_))));
});})(visible__21410__auto__,temp__4655__auto__,input_value,vec__37272,type,map__37273,map__37273__$1,attrs,id,fmt,map__37274,map__37274__$1,doc,get,save_BANG_))
], null),attrs)], null);
} else {
return null;
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__19819__auto__ = cljs.core.deref.call(null,input_value);
if(cljs.core.truth_(or__19819__auto__)){
return or__19819__auto__;
} else {
return get.call(null,id,"");
}
})(),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (temp__4655__auto__,input_value,vec__37272,type,map__37273,map__37273__$1,attrs,id,fmt,map__37274,map__37274__$1,doc,get,save_BANG_){
return (function (p1__37268_SHARP_){
return cljs.core.reset_BANG_.call(null,input_value,reagent_forms.core.value_of.call(null,p1__37268_SHARP_));
});})(temp__4655__auto__,input_value,vec__37272,type,map__37273,map__37273__$1,attrs,id,fmt,map__37274,map__37274__$1,doc,get,save_BANG_))
,new cljs.core.Keyword(null,"on-blur","on-blur",814300747),((function (temp__4655__auto__,input_value,vec__37272,type,map__37273,map__37273__$1,attrs,id,fmt,map__37274,map__37274__$1,doc,get,save_BANG_){
return (function (p1__37269_SHARP_){
cljs.core.reset_BANG_.call(null,input_value,null);

return save_BANG_.call(null,id,reagent_forms.core.format_type.call(null,new cljs.core.Keyword(null,"numeric","numeric",-1495594714),reagent_forms.core.format_value.call(null,fmt,reagent_forms.core.value_of.call(null,p1__37269_SHARP_))));
});})(temp__4655__auto__,input_value,vec__37272,type,map__37273,map__37273__$1,attrs,id,fmt,map__37274,map__37274__$1,doc,get,save_BANG_))
], null),attrs)], null);
}
});
;})(input_value,vec__37272,type,map__37273,map__37273__$1,attrs,id,fmt,map__37274,map__37274__$1,doc,get,save_BANG_))
}));
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"datepicker","datepicker",821741450),(function (p__37278,p__37279){
var vec__37280 = p__37278;
var _ = cljs.core.nth.call(null,vec__37280,(0),null);
var map__37281 = cljs.core.nth.call(null,vec__37280,(1),null);
var map__37281__$1 = ((((!((map__37281 == null)))?((((map__37281.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37281.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37281):map__37281);
var attrs = map__37281__$1;
var id = cljs.core.get.call(null,map__37281__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var date_format = cljs.core.get.call(null,map__37281__$1,new cljs.core.Keyword(null,"date-format","date-format",-557196721));
var inline = cljs.core.get.call(null,map__37281__$1,new cljs.core.Keyword(null,"inline","inline",1399884222));
var auto_close_QMARK_ = cljs.core.get.call(null,map__37281__$1,new cljs.core.Keyword(null,"auto-close?","auto-close?",-1675434568));
var map__37282 = p__37279;
var map__37282__$1 = ((((!((map__37282 == null)))?((((map__37282.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37282.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37282):map__37282);
var doc = cljs.core.get.call(null,map__37282__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var get = cljs.core.get.call(null,map__37282__$1,new cljs.core.Keyword(null,"get","get",1683182755));
var save_BANG_ = cljs.core.get.call(null,map__37282__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));
var fmt = reagent_forms.datepicker.parse_format.call(null,date_format);
var today = (new Date());
var expanded_QMARK_ = reagent.core.atom.call(null,false);
return ((function (fmt,today,expanded_QMARK_,vec__37280,_,map__37281,map__37281__$1,attrs,id,date_format,inline,auto_close_QMARK_,map__37282,map__37282__$1,doc,get,save_BANG_){
return (function (){
var temp__4655__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4655__auto__)){
var visible__21410__auto__ = temp__4655__auto__;
if(cljs.core.truth_(visible__21410__auto__.call(null,cljs.core.deref.call(null,doc)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.datepicker-wrapper","div.datepicker-wrapper",2036556212),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.input-group.date","div.input-group.date",-987970676),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-control","input.form-control",-1123419636),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"read-only","read-only",-191706886),true,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (visible__21410__auto__,temp__4655__auto__,fmt,today,expanded_QMARK_,vec__37280,_,map__37281,map__37281__$1,attrs,id,date_format,inline,auto_close_QMARK_,map__37282,map__37282__$1,doc,get,save_BANG_){
return (function (){
return cljs.core.swap_BANG_.call(null,expanded_QMARK_,cljs.core.not);
});})(visible__21410__auto__,temp__4655__auto__,fmt,today,expanded_QMARK_,vec__37280,_,map__37281,map__37281__$1,attrs,id,date_format,inline,auto_close_QMARK_,map__37282,map__37282__$1,doc,get,save_BANG_))
,new cljs.core.Keyword(null,"value","value",305978217),(function (){var temp__4657__auto__ = get.call(null,id);
if(cljs.core.truth_(temp__4657__auto__)){
var date = temp__4657__auto__;
return reagent_forms.datepicker.format_date.call(null,date,fmt);
} else {
return null;
}
})()], null),attrs)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.input-group-addon","span.input-group-addon",-1300181023),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (visible__21410__auto__,temp__4655__auto__,fmt,today,expanded_QMARK_,vec__37280,_,map__37281,map__37281__$1,attrs,id,date_format,inline,auto_close_QMARK_,map__37282,map__37282__$1,doc,get,save_BANG_){
return (function (){
return cljs.core.swap_BANG_.call(null,expanded_QMARK_,cljs.core.not);
});})(visible__21410__auto__,temp__4655__auto__,fmt,today,expanded_QMARK_,vec__37280,_,map__37281,map__37281__$1,attrs,id,date_format,inline,auto_close_QMARK_,map__37282,map__37282__$1,doc,get,save_BANG_))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.glyphicon.glyphicon-calendar","i.glyphicon.glyphicon-calendar",-1048928069)], null)], null)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.datepicker.datepicker,today.getFullYear(),today.getMonth(),today.getDate(),expanded_QMARK_,auto_close_QMARK_,((function (visible__21410__auto__,temp__4655__auto__,fmt,today,expanded_QMARK_,vec__37280,_,map__37281,map__37281__$1,attrs,id,date_format,inline,auto_close_QMARK_,map__37282,map__37282__$1,doc,get,save_BANG_){
return (function (){
return get.call(null,id);
});})(visible__21410__auto__,temp__4655__auto__,fmt,today,expanded_QMARK_,vec__37280,_,map__37281,map__37281__$1,attrs,id,date_format,inline,auto_close_QMARK_,map__37282,map__37282__$1,doc,get,save_BANG_))
,((function (visible__21410__auto__,temp__4655__auto__,fmt,today,expanded_QMARK_,vec__37280,_,map__37281,map__37281__$1,attrs,id,date_format,inline,auto_close_QMARK_,map__37282,map__37282__$1,doc,get,save_BANG_){
return (function (p1__37277_SHARP_){
return save_BANG_.call(null,id,p1__37277_SHARP_);
});})(visible__21410__auto__,temp__4655__auto__,fmt,today,expanded_QMARK_,vec__37280,_,map__37281,map__37281__$1,attrs,id,date_format,inline,auto_close_QMARK_,map__37282,map__37282__$1,doc,get,save_BANG_))
,inline], null)], null);
} else {
return null;
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.datepicker-wrapper","div.datepicker-wrapper",2036556212),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.input-group.date","div.input-group.date",-987970676),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-control","input.form-control",-1123419636),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"read-only","read-only",-191706886),true,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (temp__4655__auto__,fmt,today,expanded_QMARK_,vec__37280,_,map__37281,map__37281__$1,attrs,id,date_format,inline,auto_close_QMARK_,map__37282,map__37282__$1,doc,get,save_BANG_){
return (function (){
return cljs.core.swap_BANG_.call(null,expanded_QMARK_,cljs.core.not);
});})(temp__4655__auto__,fmt,today,expanded_QMARK_,vec__37280,_,map__37281,map__37281__$1,attrs,id,date_format,inline,auto_close_QMARK_,map__37282,map__37282__$1,doc,get,save_BANG_))
,new cljs.core.Keyword(null,"value","value",305978217),(function (){var temp__4657__auto__ = get.call(null,id);
if(cljs.core.truth_(temp__4657__auto__)){
var date = temp__4657__auto__;
return reagent_forms.datepicker.format_date.call(null,date,fmt);
} else {
return null;
}
})()], null),attrs)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.input-group-addon","span.input-group-addon",-1300181023),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (temp__4655__auto__,fmt,today,expanded_QMARK_,vec__37280,_,map__37281,map__37281__$1,attrs,id,date_format,inline,auto_close_QMARK_,map__37282,map__37282__$1,doc,get,save_BANG_){
return (function (){
return cljs.core.swap_BANG_.call(null,expanded_QMARK_,cljs.core.not);
});})(temp__4655__auto__,fmt,today,expanded_QMARK_,vec__37280,_,map__37281,map__37281__$1,attrs,id,date_format,inline,auto_close_QMARK_,map__37282,map__37282__$1,doc,get,save_BANG_))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.glyphicon.glyphicon-calendar","i.glyphicon.glyphicon-calendar",-1048928069)], null)], null)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.datepicker.datepicker,today.getFullYear(),today.getMonth(),today.getDate(),expanded_QMARK_,auto_close_QMARK_,((function (temp__4655__auto__,fmt,today,expanded_QMARK_,vec__37280,_,map__37281,map__37281__$1,attrs,id,date_format,inline,auto_close_QMARK_,map__37282,map__37282__$1,doc,get,save_BANG_){
return (function (){
return get.call(null,id);
});})(temp__4655__auto__,fmt,today,expanded_QMARK_,vec__37280,_,map__37281,map__37281__$1,attrs,id,date_format,inline,auto_close_QMARK_,map__37282,map__37282__$1,doc,get,save_BANG_))
,((function (temp__4655__auto__,fmt,today,expanded_QMARK_,vec__37280,_,map__37281,map__37281__$1,attrs,id,date_format,inline,auto_close_QMARK_,map__37282,map__37282__$1,doc,get,save_BANG_){
return (function (p1__37277_SHARP_){
return save_BANG_.call(null,id,p1__37277_SHARP_);
});})(temp__4655__auto__,fmt,today,expanded_QMARK_,vec__37280,_,map__37281,map__37281__$1,attrs,id,date_format,inline,auto_close_QMARK_,map__37282,map__37282__$1,doc,get,save_BANG_))
,inline], null)], null);
}
});
;})(fmt,today,expanded_QMARK_,vec__37280,_,map__37281,map__37281__$1,attrs,id,date_format,inline,auto_close_QMARK_,map__37282,map__37282__$1,doc,get,save_BANG_))
}));
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"checkbox","checkbox",1612615655),(function (p__37285,p__37286){
var vec__37287 = p__37285;
var _ = cljs.core.nth.call(null,vec__37287,(0),null);
var map__37288 = cljs.core.nth.call(null,vec__37287,(1),null);
var map__37288__$1 = ((((!((map__37288 == null)))?((((map__37288.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37288.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37288):map__37288);
var attrs = map__37288__$1;
var id = cljs.core.get.call(null,map__37288__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var field = cljs.core.get.call(null,map__37288__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var checked = cljs.core.get.call(null,map__37288__$1,new cljs.core.Keyword(null,"checked","checked",-50955819));
var default_checked = cljs.core.get.call(null,map__37288__$1,new cljs.core.Keyword(null,"default-checked","default-checked",1039965863));
var component = vec__37287;
var map__37289 = p__37286;
var map__37289__$1 = ((((!((map__37289 == null)))?((((map__37289.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37289.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37289):map__37289);
var opts = map__37289__$1;
var doc = cljs.core.get.call(null,map__37289__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var get = cljs.core.get.call(null,map__37289__$1,new cljs.core.Keyword(null,"get","get",1683182755));
var save_BANG_ = cljs.core.get.call(null,map__37289__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));
if(cljs.core.truth_((function (){var or__19819__auto__ = checked;
if(cljs.core.truth_(or__19819__auto__)){
return or__19819__auto__;
} else {
return default_checked;
}
})())){
save_BANG_.call(null,id,true);
} else {
}

return ((function (vec__37287,_,map__37288,map__37288__$1,attrs,id,field,checked,default_checked,component,map__37289,map__37289__$1,opts,doc,get,save_BANG_){
return (function (){
var temp__4655__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4655__auto__)){
var visible__21410__auto__ = temp__4655__auto__;
if(cljs.core.truth_(visible__21410__auto__.call(null,cljs.core.deref.call(null,doc)))){
return reagent_forms.core.set_attrs.call(null,component,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),field], null));
} else {
return null;
}
} else {
return reagent_forms.core.set_attrs.call(null,component,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),field], null));
}
});
;})(vec__37287,_,map__37288,map__37288__$1,attrs,id,field,checked,default_checked,component,map__37289,map__37289__$1,opts,doc,get,save_BANG_))
}));
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"label","label",1718410804),(function (p__37292,p__37293){
var vec__37294 = p__37292;
var type = cljs.core.nth.call(null,vec__37294,(0),null);
var map__37295 = cljs.core.nth.call(null,vec__37294,(1),null);
var map__37295__$1 = ((((!((map__37295 == null)))?((((map__37295.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37295.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37295):map__37295);
var attrs = map__37295__$1;
var id = cljs.core.get.call(null,map__37295__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var preamble = cljs.core.get.call(null,map__37295__$1,new cljs.core.Keyword(null,"preamble","preamble",1641040241));
var postamble = cljs.core.get.call(null,map__37295__$1,new cljs.core.Keyword(null,"postamble","postamble",-500033366));
var placeholder = cljs.core.get.call(null,map__37295__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
var map__37296 = p__37293;
var map__37296__$1 = ((((!((map__37296 == null)))?((((map__37296.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37296.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37296):map__37296);
var doc = cljs.core.get.call(null,map__37296__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var get = cljs.core.get.call(null,map__37296__$1,new cljs.core.Keyword(null,"get","get",1683182755));
return ((function (vec__37294,type,map__37295,map__37295__$1,attrs,id,preamble,postamble,placeholder,map__37296,map__37296__$1,doc,get){
return (function (){
var temp__4655__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4655__auto__)){
var visible__21410__auto__ = temp__4655__auto__;
if(cljs.core.truth_(visible__21410__auto__.call(null,cljs.core.deref.call(null,doc)))){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,attrs,preamble,(function (){var temp__4655__auto____$1 = get.call(null,id);
if(cljs.core.truth_(temp__4655__auto____$1)){
var value = temp__4655__auto____$1;
return [cljs.core.str(value),cljs.core.str(postamble)].join('');
} else {
return placeholder;
}
})()], null);
} else {
return null;
}
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,attrs,preamble,(function (){var temp__4655__auto____$1 = get.call(null,id);
if(cljs.core.truth_(temp__4655__auto____$1)){
var value = temp__4655__auto____$1;
return [cljs.core.str(value),cljs.core.str(postamble)].join('');
} else {
return placeholder;
}
})()], null);
}
});
;})(vec__37294,type,map__37295,map__37295__$1,attrs,id,preamble,postamble,placeholder,map__37296,map__37296__$1,doc,get))
}));
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"alert","alert",-571950580),(function (p__37299,p__37300){
var vec__37301 = p__37299;
var type = cljs.core.nth.call(null,vec__37301,(0),null);
var map__37302 = cljs.core.nth.call(null,vec__37301,(1),null);
var map__37302__$1 = ((((!((map__37302 == null)))?((((map__37302.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37302.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37302):map__37302);
var attrs = map__37302__$1;
var id = cljs.core.get.call(null,map__37302__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var event = cljs.core.get.call(null,map__37302__$1,new cljs.core.Keyword(null,"event","event",301435442));
var touch_event = cljs.core.get.call(null,map__37302__$1,new cljs.core.Keyword(null,"touch-event","touch-event",-1071581783));
var body = cljs.core.nthnext.call(null,vec__37301,(2));
var map__37303 = p__37300;
var map__37303__$1 = ((((!((map__37303 == null)))?((((map__37303.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37303.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37303):map__37303);
var opts = map__37303__$1;
var doc = cljs.core.get.call(null,map__37303__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var get = cljs.core.get.call(null,map__37303__$1,new cljs.core.Keyword(null,"get","get",1683182755));
var save_BANG_ = cljs.core.get.call(null,map__37303__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));
return ((function (vec__37301,type,map__37302,map__37302__$1,attrs,id,event,touch_event,body,map__37303,map__37303__$1,opts,doc,get,save_BANG_){
return (function (){
var temp__4655__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4655__auto__)){
var visible__21410__auto__ = temp__4655__auto__;
if(cljs.core.truth_(visible__21410__auto__.call(null,cljs.core.deref.call(null,doc)))){
if(cljs.core.truth_(event)){
if(cljs.core.truth_(event.call(null,get.call(null,id)))){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.dissoc.call(null,attrs,event)], null),body);
} else {
return null;
}
} else {
var temp__4655__auto____$1 = cljs.core.not_empty.call(null,get.call(null,id));
if(cljs.core.truth_(temp__4655__auto____$1)){
var message = temp__4655__auto____$1;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,attrs,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.close","button.close",-1545560743),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"aria-hidden","aria-hidden",399337029),true,(function (){var or__19819__auto__ = touch_event;
if(cljs.core.truth_(or__19819__auto__)){
return or__19819__auto__;
} else {
return new cljs.core.Keyword(null,"on-click","on-click",1632826543);
}
})(),((function (message,temp__4655__auto____$1,visible__21410__auto__,temp__4655__auto__,vec__37301,type,map__37302,map__37302__$1,attrs,id,event,touch_event,body,map__37303,map__37303__$1,opts,doc,get,save_BANG_){
return (function (){
return save_BANG_.call(null,id,null);
});})(message,temp__4655__auto____$1,visible__21410__auto__,temp__4655__auto__,vec__37301,type,map__37302,map__37302__$1,attrs,id,event,touch_event,body,map__37303,map__37303__$1,opts,doc,get,save_BANG_))
], true, false),"X"], null),message], null);
} else {
return null;
}
}
} else {
return null;
}
} else {
if(cljs.core.truth_(event)){
if(cljs.core.truth_(event.call(null,get.call(null,id)))){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.dissoc.call(null,attrs,event)], null),body);
} else {
return null;
}
} else {
var temp__4655__auto____$1 = cljs.core.not_empty.call(null,get.call(null,id));
if(cljs.core.truth_(temp__4655__auto____$1)){
var message = temp__4655__auto____$1;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,attrs,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.close","button.close",-1545560743),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"aria-hidden","aria-hidden",399337029),true,(function (){var or__19819__auto__ = touch_event;
if(cljs.core.truth_(or__19819__auto__)){
return or__19819__auto__;
} else {
return new cljs.core.Keyword(null,"on-click","on-click",1632826543);
}
})(),((function (message,temp__4655__auto____$1,temp__4655__auto__,vec__37301,type,map__37302,map__37302__$1,attrs,id,event,touch_event,body,map__37303,map__37303__$1,opts,doc,get,save_BANG_){
return (function (){
return save_BANG_.call(null,id,null);
});})(message,temp__4655__auto____$1,temp__4655__auto__,vec__37301,type,map__37302,map__37302__$1,attrs,id,event,touch_event,body,map__37303,map__37303__$1,opts,doc,get,save_BANG_))
], true, false),"X"], null),message], null);
} else {
return null;
}
}
}
});
;})(vec__37301,type,map__37302,map__37302__$1,attrs,id,event,touch_event,body,map__37303,map__37303__$1,opts,doc,get,save_BANG_))
}));
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"radio","radio",1323726374),(function (p__37306,p__37307){
var vec__37308 = p__37306;
var type = cljs.core.nth.call(null,vec__37308,(0),null);
var map__37309 = cljs.core.nth.call(null,vec__37308,(1),null);
var map__37309__$1 = ((((!((map__37309 == null)))?((((map__37309.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37309.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37309):map__37309);
var attrs = map__37309__$1;
var field = cljs.core.get.call(null,map__37309__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var name = cljs.core.get.call(null,map__37309__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var value = cljs.core.get.call(null,map__37309__$1,new cljs.core.Keyword(null,"value","value",305978217));
var checked = cljs.core.get.call(null,map__37309__$1,new cljs.core.Keyword(null,"checked","checked",-50955819));
var default_checked = cljs.core.get.call(null,map__37309__$1,new cljs.core.Keyword(null,"default-checked","default-checked",1039965863));
var body = cljs.core.nthnext.call(null,vec__37308,(2));
var map__37310 = p__37307;
var map__37310__$1 = ((((!((map__37310 == null)))?((((map__37310.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37310.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37310):map__37310);
var doc = cljs.core.get.call(null,map__37310__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var get = cljs.core.get.call(null,map__37310__$1,new cljs.core.Keyword(null,"get","get",1683182755));
var save_BANG_ = cljs.core.get.call(null,map__37310__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));
if(cljs.core.truth_((function (){var or__19819__auto__ = checked;
if(cljs.core.truth_(or__19819__auto__)){
return or__19819__auto__;
} else {
return default_checked;
}
})())){
save_BANG_.call(null,name,value);
} else {
}

return ((function (vec__37308,type,map__37309,map__37309__$1,attrs,field,name,value,checked,default_checked,body,map__37310,map__37310__$1,doc,get,save_BANG_){
return (function (){
var temp__4655__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4655__auto__)){
var visible__21410__auto__ = temp__4655__auto__;
if(cljs.core.truth_(visible__21410__auto__.call(null,cljs.core.deref.call(null,doc)))){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"radio","radio",1323726374),new cljs.core.Keyword(null,"default-checked","default-checked",1039965863),cljs.core._EQ_.call(null,value,get.call(null,name)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (visible__21410__auto__,temp__4655__auto__,vec__37308,type,map__37309,map__37309__$1,attrs,field,name,value,checked,default_checked,body,map__37310,map__37310__$1,doc,get,save_BANG_){
return (function (){
return save_BANG_.call(null,name,value);
});})(visible__21410__auto__,temp__4655__auto__,vec__37308,type,map__37309,map__37309__$1,attrs,field,name,value,checked,default_checked,body,map__37310,map__37310__$1,doc,get,save_BANG_))
], null),attrs)], null),body);
} else {
return null;
}
} else {
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"radio","radio",1323726374),new cljs.core.Keyword(null,"default-checked","default-checked",1039965863),cljs.core._EQ_.call(null,value,get.call(null,name)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (temp__4655__auto__,vec__37308,type,map__37309,map__37309__$1,attrs,field,name,value,checked,default_checked,body,map__37310,map__37310__$1,doc,get,save_BANG_){
return (function (){
return save_BANG_.call(null,name,value);
});})(temp__4655__auto__,vec__37308,type,map__37309,map__37309__$1,attrs,field,name,value,checked,default_checked,body,map__37310,map__37310__$1,doc,get,save_BANG_))
], null),attrs)], null),body);
}
});
;})(vec__37308,type,map__37309,map__37309__$1,attrs,field,name,value,checked,default_checked,body,map__37310,map__37310__$1,doc,get,save_BANG_))
}));
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"typeahead","typeahead",-1364611797),(function (p__37316,p__37317){
var vec__37318 = p__37316;
var type = cljs.core.nth.call(null,vec__37318,(0),null);
var map__37319 = cljs.core.nth.call(null,vec__37318,(1),null);
var map__37319__$1 = ((((!((map__37319 == null)))?((((map__37319.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37319.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37319):map__37319);
var attrs = map__37319__$1;
var result_fn = cljs.core.get.call(null,map__37319__$1,new cljs.core.Keyword(null,"result-fn","result-fn",-726333573),cljs.core.identity);
var item_class = cljs.core.get.call(null,map__37319__$1,new cljs.core.Keyword(null,"item-class","item-class",1277553858));
var input_placeholder = cljs.core.get.call(null,map__37319__$1,new cljs.core.Keyword(null,"input-placeholder","input-placeholder",-965612860));
var highlight_class = cljs.core.get.call(null,map__37319__$1,new cljs.core.Keyword(null,"highlight-class","highlight-class",1738202282));
var list_class = cljs.core.get.call(null,map__37319__$1,new cljs.core.Keyword(null,"list-class","list-class",1412758252));
var data_source = cljs.core.get.call(null,map__37319__$1,new cljs.core.Keyword(null,"data-source","data-source",-658934676));
var input_class = cljs.core.get.call(null,map__37319__$1,new cljs.core.Keyword(null,"input-class","input-class",-62053138));
var clear_on_focus_QMARK_ = cljs.core.get.call(null,map__37319__$1,new cljs.core.Keyword(null,"clear-on-focus?","clear-on-focus?",330213424),true);
var id = cljs.core.get.call(null,map__37319__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var choice_fn = cljs.core.get.call(null,map__37319__$1,new cljs.core.Keyword(null,"choice-fn","choice-fn",-1053191627),cljs.core.identity);
var map__37320 = p__37317;
var map__37320__$1 = ((((!((map__37320 == null)))?((((map__37320.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37320.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37320):map__37320);
var doc = cljs.core.get.call(null,map__37320__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var get = cljs.core.get.call(null,map__37320__$1,new cljs.core.Keyword(null,"get","get",1683182755));
var save_BANG_ = cljs.core.get.call(null,map__37320__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));
var typeahead_hidden_QMARK_ = reagent.core.atom.call(null,true);
var mouse_on_list_QMARK_ = reagent.core.atom.call(null,false);
var selected_index = reagent.core.atom.call(null,(-1));
var selections = reagent.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
var choose_selected = ((function (typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,vec__37318,type,map__37319,map__37319__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__37320,map__37320__$1,doc,get,save_BANG_){
return (function (){
if(cljs.core.truth_((function (){var and__19807__auto__ = cljs.core.not_empty.call(null,cljs.core.deref.call(null,selections));
if(cljs.core.truth_(and__19807__auto__)){
return (cljs.core.deref.call(null,selected_index) > (-1));
} else {
return and__19807__auto__;
}
})())){
var choice = cljs.core.nth.call(null,cljs.core.deref.call(null,selections),cljs.core.deref.call(null,selected_index));
save_BANG_.call(null,id,choice);

choice_fn.call(null,choice);

return cljs.core.reset_BANG_.call(null,typeahead_hidden_QMARK_,true);
} else {
return null;
}
});})(typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,vec__37318,type,map__37319,map__37319__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__37320,map__37320__$1,doc,get,save_BANG_))
;
return ((function (typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__37318,type,map__37319,map__37319__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__37320,map__37320__$1,doc,get,save_BANG_){
return (function (){
var temp__4655__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4655__auto__)){
var visible__21410__auto__ = temp__4655__auto__;
if(cljs.core.truth_(visible__21410__auto__.call(null,cljs.core.deref.call(null,doc)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),input_placeholder,new cljs.core.Keyword(null,"class","class",-2030961996),input_class,new cljs.core.Keyword(null,"value","value",305978217),(function (){var v = get.call(null,id);
if(cljs.core.not.call(null,cljs.core.iterable_QMARK_.call(null,v))){
return v;
} else {
return cljs.core.first.call(null,v);
}
})(),new cljs.core.Keyword(null,"on-focus","on-focus",-13737624),((function (visible__21410__auto__,temp__4655__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__37318,type,map__37319,map__37319__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__37320,map__37320__$1,doc,get,save_BANG_){
return (function (){
if(cljs.core.truth_(clear_on_focus_QMARK_)){
return save_BANG_.call(null,id,null);
} else {
return null;
}
});})(visible__21410__auto__,temp__4655__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__37318,type,map__37319,map__37319__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__37320,map__37320__$1,doc,get,save_BANG_))
,new cljs.core.Keyword(null,"on-blur","on-blur",814300747),((function (visible__21410__auto__,temp__4655__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__37318,type,map__37319,map__37319__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__37320,map__37320__$1,doc,get,save_BANG_){
return (function (){
if(cljs.core.truth_(cljs.core.deref.call(null,mouse_on_list_QMARK_))){
return null;
} else {
cljs.core.reset_BANG_.call(null,typeahead_hidden_QMARK_,true);

return cljs.core.reset_BANG_.call(null,selected_index,(-1));
}
});})(visible__21410__auto__,temp__4655__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__37318,type,map__37319,map__37319__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__37320,map__37320__$1,doc,get,save_BANG_))
,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (visible__21410__auto__,temp__4655__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__37318,type,map__37319,map__37319__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__37320,map__37320__$1,doc,get,save_BANG_){
return (function (p1__37313_SHARP_){
var temp__4657__auto__ = clojure.string.trim.call(null,reagent_forms.core.value_of.call(null,p1__37313_SHARP_));
if(cljs.core.truth_(temp__4657__auto__)){
var value = temp__4657__auto__;
cljs.core.reset_BANG_.call(null,selections,data_source.call(null,value.toLowerCase()));

save_BANG_.call(null,id,reagent_forms.core.value_of.call(null,p1__37313_SHARP_));

cljs.core.reset_BANG_.call(null,typeahead_hidden_QMARK_,false);

return cljs.core.reset_BANG_.call(null,selected_index,(-1));
} else {
return null;
}
});})(visible__21410__auto__,temp__4655__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__37318,type,map__37319,map__37319__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__37320,map__37320__$1,doc,get,save_BANG_))
,new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),((function (visible__21410__auto__,temp__4655__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__37318,type,map__37319,map__37319__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__37320,map__37320__$1,doc,get,save_BANG_){
return (function (p1__37314_SHARP_){
var G__37323 = p1__37314_SHARP_.which;
switch (G__37323) {
case (38):
p1__37314_SHARP_.preventDefault();

if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,selected_index),(0))){
return null;
} else {
return cljs.core.swap_BANG_.call(null,selected_index,cljs.core.dec);
}

break;
case (40):
p1__37314_SHARP_.preventDefault();

if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,selected_index),(cljs.core.count.call(null,cljs.core.deref.call(null,selections)) - (1)))){
return null;
} else {
save_BANG_.call(null,id,reagent_forms.core.value_of.call(null,p1__37314_SHARP_));

return cljs.core.swap_BANG_.call(null,selected_index,cljs.core.inc);
}

break;
case (9):
return choose_selected.call(null);

break;
case (13):
return choose_selected.call(null);

break;
case (27):
cljs.core.reset_BANG_.call(null,typeahead_hidden_QMARK_,true);

return cljs.core.reset_BANG_.call(null,selected_index,(0));

break;
default:
return "default";

}
});})(visible__21410__auto__,temp__4655__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__37318,type,map__37319,map__37319__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__37320,map__37320__$1,doc,get,save_BANG_))
], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),(cljs.core.truth_((function (){var or__19819__auto__ = cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,selections));
if(or__19819__auto__){
return or__19819__auto__;
} else {
return cljs.core.deref.call(null,typeahead_hidden_QMARK_);
}
})())?new cljs.core.Keyword(null,"none","none",1333468478):new cljs.core.Keyword(null,"block","block",664686210))], null),new cljs.core.Keyword(null,"class","class",-2030961996),list_class,new cljs.core.Keyword(null,"on-mouse-enter","on-mouse-enter",-1664921661),((function (visible__21410__auto__,temp__4655__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__37318,type,map__37319,map__37319__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__37320,map__37320__$1,doc,get,save_BANG_){
return (function (){
return cljs.core.reset_BANG_.call(null,mouse_on_list_QMARK_,true);
});})(visible__21410__auto__,temp__4655__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__37318,type,map__37319,map__37319__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__37320,map__37320__$1,doc,get,save_BANG_))
,new cljs.core.Keyword(null,"on-mouse-leave","on-mouse-leave",-1864319528),((function (visible__21410__auto__,temp__4655__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__37318,type,map__37319,map__37319__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__37320,map__37320__$1,doc,get,save_BANG_){
return (function (){
return cljs.core.reset_BANG_.call(null,mouse_on_list_QMARK_,false);
});})(visible__21410__auto__,temp__4655__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__37318,type,map__37319,map__37319__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__37320,map__37320__$1,doc,get,save_BANG_))
], null),cljs.core.doall.call(null,cljs.core.map_indexed.call(null,((function (visible__21410__auto__,temp__4655__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__37318,type,map__37319,map__37319__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__37320,map__37320__$1,doc,get,save_BANG_){
return (function (index,result){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"tab-index","tab-index",895755393),index,new cljs.core.Keyword(null,"key","key",-1516042587),index,new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,cljs.core.deref.call(null,selected_index),index))?highlight_class:item_class),new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (visible__21410__auto__,temp__4655__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__37318,type,map__37319,map__37319__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__37320,map__37320__$1,doc,get,save_BANG_){
return (function (p1__37315_SHARP_){
return cljs.core.reset_BANG_.call(null,selected_index,parseInt(p1__37315_SHARP_.target.getAttribute("tabIndex")));
});})(visible__21410__auto__,temp__4655__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__37318,type,map__37319,map__37319__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__37320,map__37320__$1,doc,get,save_BANG_))
,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (visible__21410__auto__,temp__4655__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__37318,type,map__37319,map__37319__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__37320,map__37320__$1,doc,get,save_BANG_){
return (function (){
cljs.core.reset_BANG_.call(null,typeahead_hidden_QMARK_,true);

save_BANG_.call(null,id,result);

return choice_fn.call(null,result);
});})(visible__21410__auto__,temp__4655__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__37318,type,map__37319,map__37319__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__37320,map__37320__$1,doc,get,save_BANG_))
], null),result_fn.call(null,result)], null);
});})(visible__21410__auto__,temp__4655__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__37318,type,map__37319,map__37319__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__37320,map__37320__$1,doc,get,save_BANG_))
,cljs.core.deref.call(null,selections)))], null)], null);
} else {
return null;
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),input_placeholder,new cljs.core.Keyword(null,"class","class",-2030961996),input_class,new cljs.core.Keyword(null,"value","value",305978217),(function (){var v = get.call(null,id);
if(cljs.core.not.call(null,cljs.core.iterable_QMARK_.call(null,v))){
return v;
} else {
return cljs.core.first.call(null,v);
}
})(),new cljs.core.Keyword(null,"on-focus","on-focus",-13737624),((function (temp__4655__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__37318,type,map__37319,map__37319__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__37320,map__37320__$1,doc,get,save_BANG_){
return (function (){
if(cljs.core.truth_(clear_on_focus_QMARK_)){
return save_BANG_.call(null,id,null);
} else {
return null;
}
});})(temp__4655__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__37318,type,map__37319,map__37319__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__37320,map__37320__$1,doc,get,save_BANG_))
,new cljs.core.Keyword(null,"on-blur","on-blur",814300747),((function (temp__4655__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__37318,type,map__37319,map__37319__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__37320,map__37320__$1,doc,get,save_BANG_){
return (function (){
if(cljs.core.truth_(cljs.core.deref.call(null,mouse_on_list_QMARK_))){
return null;
} else {
cljs.core.reset_BANG_.call(null,typeahead_hidden_QMARK_,true);

return cljs.core.reset_BANG_.call(null,selected_index,(-1));
}
});})(temp__4655__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__37318,type,map__37319,map__37319__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__37320,map__37320__$1,doc,get,save_BANG_))
,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (temp__4655__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__37318,type,map__37319,map__37319__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__37320,map__37320__$1,doc,get,save_BANG_){
return (function (p1__37313_SHARP_){
var temp__4657__auto__ = clojure.string.trim.call(null,reagent_forms.core.value_of.call(null,p1__37313_SHARP_));
if(cljs.core.truth_(temp__4657__auto__)){
var value = temp__4657__auto__;
cljs.core.reset_BANG_.call(null,selections,data_source.call(null,value.toLowerCase()));

save_BANG_.call(null,id,reagent_forms.core.value_of.call(null,p1__37313_SHARP_));

cljs.core.reset_BANG_.call(null,typeahead_hidden_QMARK_,false);

return cljs.core.reset_BANG_.call(null,selected_index,(-1));
} else {
return null;
}
});})(temp__4655__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__37318,type,map__37319,map__37319__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__37320,map__37320__$1,doc,get,save_BANG_))
,new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),((function (temp__4655__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__37318,type,map__37319,map__37319__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__37320,map__37320__$1,doc,get,save_BANG_){
return (function (p1__37314_SHARP_){
var G__37324 = p1__37314_SHARP_.which;
switch (G__37324) {
case (38):
p1__37314_SHARP_.preventDefault();

if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,selected_index),(0))){
return null;
} else {
return cljs.core.swap_BANG_.call(null,selected_index,cljs.core.dec);
}

break;
case (40):
p1__37314_SHARP_.preventDefault();

if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,selected_index),(cljs.core.count.call(null,cljs.core.deref.call(null,selections)) - (1)))){
return null;
} else {
save_BANG_.call(null,id,reagent_forms.core.value_of.call(null,p1__37314_SHARP_));

return cljs.core.swap_BANG_.call(null,selected_index,cljs.core.inc);
}

break;
case (9):
return choose_selected.call(null);

break;
case (13):
return choose_selected.call(null);

break;
case (27):
cljs.core.reset_BANG_.call(null,typeahead_hidden_QMARK_,true);

return cljs.core.reset_BANG_.call(null,selected_index,(0));

break;
default:
return "default";

}
});})(temp__4655__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__37318,type,map__37319,map__37319__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__37320,map__37320__$1,doc,get,save_BANG_))
], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),(cljs.core.truth_((function (){var or__19819__auto__ = cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,selections));
if(or__19819__auto__){
return or__19819__auto__;
} else {
return cljs.core.deref.call(null,typeahead_hidden_QMARK_);
}
})())?new cljs.core.Keyword(null,"none","none",1333468478):new cljs.core.Keyword(null,"block","block",664686210))], null),new cljs.core.Keyword(null,"class","class",-2030961996),list_class,new cljs.core.Keyword(null,"on-mouse-enter","on-mouse-enter",-1664921661),((function (temp__4655__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__37318,type,map__37319,map__37319__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__37320,map__37320__$1,doc,get,save_BANG_){
return (function (){
return cljs.core.reset_BANG_.call(null,mouse_on_list_QMARK_,true);
});})(temp__4655__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__37318,type,map__37319,map__37319__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__37320,map__37320__$1,doc,get,save_BANG_))
,new cljs.core.Keyword(null,"on-mouse-leave","on-mouse-leave",-1864319528),((function (temp__4655__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__37318,type,map__37319,map__37319__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__37320,map__37320__$1,doc,get,save_BANG_){
return (function (){
return cljs.core.reset_BANG_.call(null,mouse_on_list_QMARK_,false);
});})(temp__4655__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__37318,type,map__37319,map__37319__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__37320,map__37320__$1,doc,get,save_BANG_))
], null),cljs.core.doall.call(null,cljs.core.map_indexed.call(null,((function (temp__4655__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__37318,type,map__37319,map__37319__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__37320,map__37320__$1,doc,get,save_BANG_){
return (function (index,result){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"tab-index","tab-index",895755393),index,new cljs.core.Keyword(null,"key","key",-1516042587),index,new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,cljs.core.deref.call(null,selected_index),index))?highlight_class:item_class),new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (temp__4655__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__37318,type,map__37319,map__37319__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__37320,map__37320__$1,doc,get,save_BANG_){
return (function (p1__37315_SHARP_){
return cljs.core.reset_BANG_.call(null,selected_index,parseInt(p1__37315_SHARP_.target.getAttribute("tabIndex")));
});})(temp__4655__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__37318,type,map__37319,map__37319__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__37320,map__37320__$1,doc,get,save_BANG_))
,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (temp__4655__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__37318,type,map__37319,map__37319__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__37320,map__37320__$1,doc,get,save_BANG_){
return (function (){
cljs.core.reset_BANG_.call(null,typeahead_hidden_QMARK_,true);

save_BANG_.call(null,id,result);

return choice_fn.call(null,result);
});})(temp__4655__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__37318,type,map__37319,map__37319__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__37320,map__37320__$1,doc,get,save_BANG_))
], null),result_fn.call(null,result)], null);
});})(temp__4655__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__37318,type,map__37319,map__37319__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__37320,map__37320__$1,doc,get,save_BANG_))
,cljs.core.deref.call(null,selections)))], null)], null);
}
});
;})(typeahead_hidden_QMARK_,mouse_on_list_QMARK_,selected_index,selections,choose_selected,vec__37318,type,map__37319,map__37319__$1,attrs,result_fn,item_class,input_placeholder,highlight_class,list_class,data_source,input_class,clear_on_focus_QMARK_,id,choice_fn,map__37320,map__37320__$1,doc,get,save_BANG_))
}));
reagent_forms.core.group_item = (function reagent_forms$core$group_item(p__37327,p__37328,selections,field,id){
var vec__37334 = p__37327;
var type = cljs.core.nth.call(null,vec__37334,(0),null);
var map__37335 = cljs.core.nth.call(null,vec__37334,(1),null);
var map__37335__$1 = ((((!((map__37335 == null)))?((((map__37335.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37335.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37335):map__37335);
var attrs = map__37335__$1;
var key = cljs.core.get.call(null,map__37335__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var touch_event = cljs.core.get.call(null,map__37335__$1,new cljs.core.Keyword(null,"touch-event","touch-event",-1071581783));
var body = cljs.core.nthnext.call(null,vec__37334,(2));
var map__37336 = p__37328;
var map__37336__$1 = ((((!((map__37336 == null)))?((((map__37336.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37336.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37336):map__37336);
var save_BANG_ = cljs.core.get.call(null,map__37336__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));
var multi_select = cljs.core.get.call(null,map__37336__$1,new cljs.core.Keyword(null,"multi-select","multi-select",-1298511287));
var handle_click_BANG_ = ((function (vec__37334,type,map__37335,map__37335__$1,attrs,key,touch_event,body,map__37336,map__37336__$1,save_BANG_,multi_select){
return (function reagent_forms$core$group_item_$_handle_click_BANG_(){
if(cljs.core.truth_(multi_select)){
cljs.core.swap_BANG_.call(null,selections,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null),cljs.core.not);

return save_BANG_.call(null,id,cljs.core.map.call(null,cljs.core.first,cljs.core.filter.call(null,cljs.core.second,cljs.core.deref.call(null,selections))));
} else {
var value = cljs.core.get.call(null,cljs.core.deref.call(null,selections),key);
cljs.core.reset_BANG_.call(null,selections,cljs.core.PersistentArrayMap.fromArray([key,cljs.core.not.call(null,value)], true, false));

return save_BANG_.call(null,id,(cljs.core.truth_(cljs.core.get.call(null,cljs.core.deref.call(null,selections),key))?key:null));
}
});})(vec__37334,type,map__37335,map__37335__$1,attrs,key,touch_event,body,map__37336,map__37336__$1,save_BANG_,multi_select))
;
return ((function (vec__37334,type,map__37335,map__37335__$1,attrs,key,touch_event,body,map__37336,map__37336__$1,save_BANG_,multi_select){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(cljs.core.get.call(null,cljs.core.deref.call(null,selections),key))?"active":null),(function (){var or__19819__auto__ = touch_event;
if(cljs.core.truth_(or__19819__auto__)){
return or__19819__auto__;
} else {
return new cljs.core.Keyword(null,"on-click","on-click",1632826543);
}
})(),handle_click_BANG_], true, false),attrs),body], null);
});
;})(vec__37334,type,map__37335,map__37335__$1,attrs,key,touch_event,body,map__37336,map__37336__$1,save_BANG_,multi_select))
});
reagent_forms.core.mk_selections = (function reagent_forms$core$mk_selections(id,selectors,p__37339){
var map__37346 = p__37339;
var map__37346__$1 = ((((!((map__37346 == null)))?((((map__37346.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37346.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37346):map__37346);
var get = cljs.core.get.call(null,map__37346__$1,new cljs.core.Keyword(null,"get","get",1683182755));
var multi_select = cljs.core.get.call(null,map__37346__$1,new cljs.core.Keyword(null,"multi-select","multi-select",-1298511287));
var value = get.call(null,id);
return cljs.core.reduce.call(null,((function (value,map__37346,map__37346__$1,get,multi_select){
return (function (m,p__37348){
var vec__37349 = p__37348;
var _ = cljs.core.nth.call(null,vec__37349,(0),null);
var map__37350 = cljs.core.nth.call(null,vec__37349,(1),null);
var map__37350__$1 = ((((!((map__37350 == null)))?((((map__37350.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37350.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37350):map__37350);
var key = cljs.core.get.call(null,map__37350__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
return cljs.core.assoc.call(null,m,key,cljs.core.boolean$.call(null,cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([key], true),(cljs.core.truth_(multi_select)?value:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [value], null)))));
});})(value,map__37346,map__37346__$1,get,multi_select))
,cljs.core.PersistentArrayMap.EMPTY,selectors);
});
/**
 * selectors might be passed in inline or as a collection
 */
reagent_forms.core.extract_selectors = (function reagent_forms$core$extract_selectors(selectors){
if((cljs.core.ffirst.call(null,selectors) instanceof cljs.core.Keyword)){
return selectors;
} else {
return cljs.core.first.call(null,selectors);
}
});
reagent_forms.core.selection_group = (function reagent_forms$core$selection_group(p__37354,p__37355){
var vec__37363 = p__37354;
var type = cljs.core.nth.call(null,vec__37363,(0),null);
var map__37364 = cljs.core.nth.call(null,vec__37363,(1),null);
var map__37364__$1 = ((((!((map__37364 == null)))?((((map__37364.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37364.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37364):map__37364);
var attrs = map__37364__$1;
var field = cljs.core.get.call(null,map__37364__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var id = cljs.core.get.call(null,map__37364__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var selection_items = cljs.core.nthnext.call(null,vec__37363,(2));
var map__37365 = p__37355;
var map__37365__$1 = ((((!((map__37365 == null)))?((((map__37365.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37365.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37365):map__37365);
var opts = map__37365__$1;
var get = cljs.core.get.call(null,map__37365__$1,new cljs.core.Keyword(null,"get","get",1683182755));
var selection_items__$1 = reagent_forms.core.extract_selectors.call(null,selection_items);
var selections = reagent.core.atom.call(null,reagent_forms.core.mk_selections.call(null,id,selection_items__$1,opts));
var selectors = cljs.core.map.call(null,((function (selection_items__$1,selections,vec__37363,type,map__37364,map__37364__$1,attrs,field,id,selection_items,map__37365,map__37365__$1,opts,get){
return (function (item){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"visible?","visible?",2129863715),new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,item)),new cljs.core.Keyword(null,"selector","selector",762528866),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.core.group_item.call(null,item,opts,selections,field,id)], null)], null);
});})(selection_items__$1,selections,vec__37363,type,map__37364,map__37364__$1,attrs,field,id,selection_items,map__37365,map__37365__$1,opts,get))
,selection_items__$1);
return ((function (selection_items__$1,selections,selectors,vec__37363,type,map__37364,map__37364__$1,attrs,field,id,selection_items,map__37365,map__37365__$1,opts,get){
return (function (){
if(cljs.core.truth_(get.call(null,id))){
} else {
cljs.core.swap_BANG_.call(null,selections,((function (selection_items__$1,selections,selectors,vec__37363,type,map__37364,map__37364__$1,attrs,field,id,selection_items,map__37365,map__37365__$1,opts,get){
return (function (p1__37352_SHARP_){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (selection_items__$1,selections,selectors,vec__37363,type,map__37364,map__37364__$1,attrs,field,id,selection_items,map__37365,map__37365__$1,opts,get){
return (function (p__37368){
var vec__37369 = p__37368;
var k = cljs.core.nth.call(null,vec__37369,(0),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,false], null);
});})(selection_items__$1,selections,selectors,vec__37363,type,map__37364,map__37364__$1,attrs,field,id,selection_items,map__37365,map__37365__$1,opts,get))
,p1__37352_SHARP_));
});})(selection_items__$1,selections,selectors,vec__37363,type,map__37364,map__37364__$1,attrs,field,id,selection_items,map__37365,map__37365__$1,opts,get))
);
}

return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,attrs], null),cljs.core.map.call(null,new cljs.core.Keyword(null,"selector","selector",762528866),cljs.core.filter.call(null,((function (selection_items__$1,selections,selectors,vec__37363,type,map__37364,map__37364__$1,attrs,field,id,selection_items,map__37365,map__37365__$1,opts,get){
return (function (p1__37353_SHARP_){
var temp__4655__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(p1__37353_SHARP_);
if(cljs.core.truth_(temp__4655__auto__)){
var visible_QMARK_ = temp__4655__auto__;
return visible_QMARK_.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(opts)));
} else {
return true;
}
});})(selection_items__$1,selections,selectors,vec__37363,type,map__37364,map__37364__$1,attrs,field,id,selection_items,map__37365,map__37365__$1,opts,get))
,selectors)));
});
;})(selection_items__$1,selections,selectors,vec__37363,type,map__37364,map__37364__$1,attrs,field,id,selection_items,map__37365,map__37365__$1,opts,get))
});
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"single-select","single-select",1327691774),(function (p__37370,p__37371){
var vec__37372 = p__37370;
var _ = cljs.core.nth.call(null,vec__37372,(0),null);
var attrs = cljs.core.nth.call(null,vec__37372,(1),null);
var field = vec__37372;
var map__37373 = p__37371;
var map__37373__$1 = ((((!((map__37373 == null)))?((((map__37373.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37373.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37373):map__37373);
var opts = map__37373__$1;
var doc = cljs.core.get.call(null,map__37373__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
return ((function (vec__37372,_,attrs,field,map__37373,map__37373__$1,opts,doc){
return (function (){
var temp__4655__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4655__auto__)){
var visible__21410__auto__ = temp__4655__auto__;
if(cljs.core.truth_(visible__21410__auto__.call(null,cljs.core.deref.call(null,doc)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.core.selection_group,field,opts], null);
} else {
return null;
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.core.selection_group,field,opts], null);
}
});
;})(vec__37372,_,attrs,field,map__37373,map__37373__$1,opts,doc))
}));
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"multi-select","multi-select",-1298511287),(function (p__37375,p__37376){
var vec__37377 = p__37375;
var _ = cljs.core.nth.call(null,vec__37377,(0),null);
var attrs = cljs.core.nth.call(null,vec__37377,(1),null);
var field = vec__37377;
var map__37378 = p__37376;
var map__37378__$1 = ((((!((map__37378 == null)))?((((map__37378.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37378.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37378):map__37378);
var opts = map__37378__$1;
var doc = cljs.core.get.call(null,map__37378__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
return ((function (vec__37377,_,attrs,field,map__37378,map__37378__$1,opts,doc){
return (function (){
var temp__4655__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4655__auto__)){
var visible__21410__auto__ = temp__4655__auto__;
if(cljs.core.truth_(visible__21410__auto__.call(null,cljs.core.deref.call(null,doc)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.core.selection_group,field,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"multi-select","multi-select",-1298511287),true)], null);
} else {
return null;
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.core.selection_group,field,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"multi-select","multi-select",-1298511287),true)], null);
}
});
;})(vec__37377,_,attrs,field,map__37378,map__37378__$1,opts,doc))
}));
reagent_forms.core.map_options = (function reagent_forms$core$map_options(options){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__20591__auto__ = (function reagent_forms$core$map_options_$_iter__37396(s__37397){
return (new cljs.core.LazySeq(null,(function (){
var s__37397__$1 = s__37397;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__37397__$1);
if(temp__4657__auto__){
var s__37397__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__37397__$2)){
var c__20589__auto__ = cljs.core.chunk_first.call(null,s__37397__$2);
var size__20590__auto__ = cljs.core.count.call(null,c__20589__auto__);
var b__37399 = cljs.core.chunk_buffer.call(null,size__20590__auto__);
if((function (){var i__37398 = (0);
while(true){
if((i__37398 < size__20590__auto__)){
var vec__37406 = cljs.core._nth.call(null,c__20589__auto__,i__37398);
var _ = cljs.core.nth.call(null,vec__37406,(0),null);
var map__37407 = cljs.core.nth.call(null,vec__37406,(1),null);
var map__37407__$1 = ((((!((map__37407 == null)))?((((map__37407.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37407.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37407):map__37407);
var key = cljs.core.get.call(null,map__37407__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var label = cljs.core.nth.call(null,vec__37406,(2),null);
cljs.core.chunk_append.call(null,b__37399,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(label)].join(''),key], null));

var G__37412 = (i__37398 + (1));
i__37398 = G__37412;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37399),reagent_forms$core$map_options_$_iter__37396.call(null,cljs.core.chunk_rest.call(null,s__37397__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37399),null);
}
} else {
var vec__37409 = cljs.core.first.call(null,s__37397__$2);
var _ = cljs.core.nth.call(null,vec__37409,(0),null);
var map__37410 = cljs.core.nth.call(null,vec__37409,(1),null);
var map__37410__$1 = ((((!((map__37410 == null)))?((((map__37410.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37410.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37410):map__37410);
var key = cljs.core.get.call(null,map__37410__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var label = cljs.core.nth.call(null,vec__37409,(2),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(label)].join(''),key], null),reagent_forms$core$map_options_$_iter__37396.call(null,cljs.core.rest.call(null,s__37397__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__20591__auto__.call(null,options);
})());
});
reagent_forms.core.default_selection = (function reagent_forms$core$default_selection(options,v){
return cljs.core.last.call(null,cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__37413_SHARP_){
return cljs.core._EQ_.call(null,v,cljs.core.get_in.call(null,p1__37413_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),new cljs.core.Keyword(null,"key","key",-1516042587)], null)));
}),options)));
});
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"list","list",765357683),(function (p__37416,p__37417){
var vec__37418 = p__37416;
var type = cljs.core.nth.call(null,vec__37418,(0),null);
var map__37419 = cljs.core.nth.call(null,vec__37418,(1),null);
var map__37419__$1 = ((((!((map__37419 == null)))?((((map__37419.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37419.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37419):map__37419);
var attrs = map__37419__$1;
var field = cljs.core.get.call(null,map__37419__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var id = cljs.core.get.call(null,map__37419__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var options = cljs.core.nthnext.call(null,vec__37418,(2));
var map__37420 = p__37417;
var map__37420__$1 = ((((!((map__37420 == null)))?((((map__37420.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37420.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37420):map__37420);
var doc = cljs.core.get.call(null,map__37420__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var get = cljs.core.get.call(null,map__37420__$1,new cljs.core.Keyword(null,"get","get",1683182755));
var save_BANG_ = cljs.core.get.call(null,map__37420__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));
var options__$1 = reagent_forms.core.extract_selectors.call(null,options);
var options_lookup = reagent_forms.core.map_options.call(null,options__$1);
var selection = reagent.core.atom.call(null,(function (){var or__19819__auto__ = get.call(null,id);
if(cljs.core.truth_(or__19819__auto__)){
return or__19819__auto__;
} else {
return cljs.core.get_in.call(null,cljs.core.first.call(null,options__$1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),new cljs.core.Keyword(null,"key","key",-1516042587)], null));
}
})());
save_BANG_.call(null,id,cljs.core.deref.call(null,selection));

return ((function (options__$1,options_lookup,selection,vec__37418,type,map__37419,map__37419__$1,attrs,field,id,options,map__37420,map__37420__$1,doc,get,save_BANG_){
return (function (){
var temp__4655__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4655__auto__)){
var visible__21410__auto__ = temp__4655__auto__;
if(cljs.core.truth_(visible__21410__auto__.call(null,cljs.core.deref.call(null,doc)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.call(null,attrs,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"default-value","default-value",232220170),reagent_forms.core.default_selection.call(null,options__$1,cljs.core.deref.call(null,selection)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (visible__21410__auto__,temp__4655__auto__,options__$1,options_lookup,selection,vec__37418,type,map__37419,map__37419__$1,attrs,field,id,options,map__37420,map__37420__$1,doc,get,save_BANG_){
return (function (p1__37414_SHARP_){
return save_BANG_.call(null,id,cljs.core.get.call(null,options_lookup,reagent_forms.core.value_of.call(null,p1__37414_SHARP_)));
});})(visible__21410__auto__,temp__4655__auto__,options__$1,options_lookup,selection,vec__37418,type,map__37419,map__37419__$1,attrs,field,id,options,map__37420,map__37420__$1,doc,get,save_BANG_))
], null)),cljs.core.doall.call(null,cljs.core.filter.call(null,((function (visible__21410__auto__,temp__4655__auto__,options__$1,options_lookup,selection,vec__37418,type,map__37419,map__37419__$1,attrs,field,id,options,map__37420,map__37420__$1,doc,get,save_BANG_){
return (function (p1__37415_SHARP_){
var temp__4655__auto____$1 = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__37415_SHARP_));
if(cljs.core.truth_(temp__4655__auto____$1)){
var visible_QMARK_ = temp__4655__auto____$1;
return visible_QMARK_.call(null,cljs.core.deref.call(null,doc));
} else {
return true;
}
});})(visible__21410__auto__,temp__4655__auto__,options__$1,options_lookup,selection,vec__37418,type,map__37419,map__37419__$1,attrs,field,id,options,map__37420,map__37420__$1,doc,get,save_BANG_))
,options__$1))], null);
} else {
return null;
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.call(null,attrs,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"default-value","default-value",232220170),reagent_forms.core.default_selection.call(null,options__$1,cljs.core.deref.call(null,selection)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (temp__4655__auto__,options__$1,options_lookup,selection,vec__37418,type,map__37419,map__37419__$1,attrs,field,id,options,map__37420,map__37420__$1,doc,get,save_BANG_){
return (function (p1__37414_SHARP_){
return save_BANG_.call(null,id,cljs.core.get.call(null,options_lookup,reagent_forms.core.value_of.call(null,p1__37414_SHARP_)));
});})(temp__4655__auto__,options__$1,options_lookup,selection,vec__37418,type,map__37419,map__37419__$1,attrs,field,id,options,map__37420,map__37420__$1,doc,get,save_BANG_))
], null)),cljs.core.doall.call(null,cljs.core.filter.call(null,((function (temp__4655__auto__,options__$1,options_lookup,selection,vec__37418,type,map__37419,map__37419__$1,attrs,field,id,options,map__37420,map__37420__$1,doc,get,save_BANG_){
return (function (p1__37415_SHARP_){
var temp__4655__auto____$1 = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__37415_SHARP_));
if(cljs.core.truth_(temp__4655__auto____$1)){
var visible_QMARK_ = temp__4655__auto____$1;
return visible_QMARK_.call(null,cljs.core.deref.call(null,doc));
} else {
return true;
}
});})(temp__4655__auto__,options__$1,options_lookup,selection,vec__37418,type,map__37419,map__37419__$1,attrs,field,id,options,map__37420,map__37420__$1,doc,get,save_BANG_))
,options__$1))], null);
}
});
;})(options__$1,options_lookup,selection,vec__37418,type,map__37419,map__37419__$1,attrs,field,id,options,map__37420,map__37420__$1,doc,get,save_BANG_))
}));
reagent_forms.core.field_QMARK_ = (function reagent_forms$core$field_QMARK_(node){
return (cljs.core.coll_QMARK_.call(null,node)) && (cljs.core.map_QMARK_.call(null,cljs.core.second.call(null,node))) && (cljs.core.contains_QMARK_.call(null,cljs.core.second.call(null,node),new cljs.core.Keyword(null,"field","field",-1302436500)));
});
/**
 * creates data bindings between the form fields and the supplied atom
 * form - the form template with the fields
 * doc - the document that the fields will be bound to
 * events - any events that should be triggered when the document state changes
 */
reagent_forms.core.bind_fields = (function reagent_forms$core$bind_fields(var_args){
var args__20884__auto__ = [];
var len__20877__auto___37427 = arguments.length;
var i__20878__auto___37428 = (0);
while(true){
if((i__20878__auto___37428 < len__20877__auto___37427)){
args__20884__auto__.push((arguments[i__20878__auto___37428]));

var G__37429 = (i__20878__auto___37428 + (1));
i__20878__auto___37428 = G__37429;
continue;
} else {
}
break;
}

var argseq__20885__auto__ = ((((2) < args__20884__auto__.length))?(new cljs.core.IndexedSeq(args__20884__auto__.slice((2)),(0))):null);
return reagent_forms.core.bind_fields.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__20885__auto__);
});

reagent_forms.core.bind_fields.cljs$core$IFn$_invoke$arity$variadic = (function (form,doc,events){
var opts = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"doc","doc",1913296891),doc,new cljs.core.Keyword(null,"get","get",1683182755),(function (p1__37423_SHARP_){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,doc),reagent_forms.core.id__GT_path.call(null,p1__37423_SHARP_));
}),new cljs.core.Keyword(null,"save!","save!",-1137373803),reagent_forms.core.mk_save_fn.call(null,doc,events)], null);
var form__$1 = clojure.walk.postwalk.call(null,((function (opts){
return (function (node){
if(cljs.core.truth_(reagent_forms.core.field_QMARK_.call(null,node))){
var opts__$1 = reagent_forms.core.wrap_fns.call(null,opts,node);
var field = reagent_forms.core.init_field.call(null,node,opts__$1);
if(cljs.core.fn_QMARK_.call(null,field)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [field], null);
} else {
return field;
}
} else {
return node;
}
});})(opts))
,form);
return ((function (opts,form__$1){
return (function (){
return form__$1;
});
;})(opts,form__$1))
});

reagent_forms.core.bind_fields.cljs$lang$maxFixedArity = (2);

reagent_forms.core.bind_fields.cljs$lang$applyTo = (function (seq37424){
var G__37425 = cljs.core.first.call(null,seq37424);
var seq37424__$1 = cljs.core.next.call(null,seq37424);
var G__37426 = cljs.core.first.call(null,seq37424__$1);
var seq37424__$2 = cljs.core.next.call(null,seq37424__$1);
return reagent_forms.core.bind_fields.cljs$core$IFn$_invoke$arity$variadic(G__37425,G__37426,seq37424__$2);
});

//# sourceMappingURL=core.js.map