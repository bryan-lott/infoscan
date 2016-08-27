// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__41670_41684 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__41671_41685 = null;
var count__41672_41686 = (0);
var i__41673_41687 = (0);
while(true){
if((i__41673_41687 < count__41672_41686)){
var f_41688 = cljs.core._nth.call(null,chunk__41671_41685,i__41673_41687);
cljs.core.println.call(null,"  ",f_41688);

var G__41689 = seq__41670_41684;
var G__41690 = chunk__41671_41685;
var G__41691 = count__41672_41686;
var G__41692 = (i__41673_41687 + (1));
seq__41670_41684 = G__41689;
chunk__41671_41685 = G__41690;
count__41672_41686 = G__41691;
i__41673_41687 = G__41692;
continue;
} else {
var temp__4657__auto___41693 = cljs.core.seq.call(null,seq__41670_41684);
if(temp__4657__auto___41693){
var seq__41670_41694__$1 = temp__4657__auto___41693;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41670_41694__$1)){
var c__20622__auto___41695 = cljs.core.chunk_first.call(null,seq__41670_41694__$1);
var G__41696 = cljs.core.chunk_rest.call(null,seq__41670_41694__$1);
var G__41697 = c__20622__auto___41695;
var G__41698 = cljs.core.count.call(null,c__20622__auto___41695);
var G__41699 = (0);
seq__41670_41684 = G__41696;
chunk__41671_41685 = G__41697;
count__41672_41686 = G__41698;
i__41673_41687 = G__41699;
continue;
} else {
var f_41700 = cljs.core.first.call(null,seq__41670_41694__$1);
cljs.core.println.call(null,"  ",f_41700);

var G__41701 = cljs.core.next.call(null,seq__41670_41694__$1);
var G__41702 = null;
var G__41703 = (0);
var G__41704 = (0);
seq__41670_41684 = G__41701;
chunk__41671_41685 = G__41702;
count__41672_41686 = G__41703;
i__41673_41687 = G__41704;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_41705 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__19819__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__19819__auto__)){
return or__19819__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_41705);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_41705)))?cljs.core.second.call(null,arglists_41705):arglists_41705));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__41674 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__41675 = null;
var count__41676 = (0);
var i__41677 = (0);
while(true){
if((i__41677 < count__41676)){
var vec__41678 = cljs.core._nth.call(null,chunk__41675,i__41677);
var name = cljs.core.nth.call(null,vec__41678,(0),null);
var map__41679 = cljs.core.nth.call(null,vec__41678,(1),null);
var map__41679__$1 = ((((!((map__41679 == null)))?((((map__41679.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41679.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41679):map__41679);
var doc = cljs.core.get.call(null,map__41679__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__41679__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__41706 = seq__41674;
var G__41707 = chunk__41675;
var G__41708 = count__41676;
var G__41709 = (i__41677 + (1));
seq__41674 = G__41706;
chunk__41675 = G__41707;
count__41676 = G__41708;
i__41677 = G__41709;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__41674);
if(temp__4657__auto__){
var seq__41674__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41674__$1)){
var c__20622__auto__ = cljs.core.chunk_first.call(null,seq__41674__$1);
var G__41710 = cljs.core.chunk_rest.call(null,seq__41674__$1);
var G__41711 = c__20622__auto__;
var G__41712 = cljs.core.count.call(null,c__20622__auto__);
var G__41713 = (0);
seq__41674 = G__41710;
chunk__41675 = G__41711;
count__41676 = G__41712;
i__41677 = G__41713;
continue;
} else {
var vec__41681 = cljs.core.first.call(null,seq__41674__$1);
var name = cljs.core.nth.call(null,vec__41681,(0),null);
var map__41682 = cljs.core.nth.call(null,vec__41681,(1),null);
var map__41682__$1 = ((((!((map__41682 == null)))?((((map__41682.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41682.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41682):map__41682);
var doc = cljs.core.get.call(null,map__41682__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__41682__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__41714 = cljs.core.next.call(null,seq__41674__$1);
var G__41715 = null;
var G__41716 = (0);
var G__41717 = (0);
seq__41674 = G__41714;
chunk__41675 = G__41715;
count__41676 = G__41716;
i__41677 = G__41717;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map