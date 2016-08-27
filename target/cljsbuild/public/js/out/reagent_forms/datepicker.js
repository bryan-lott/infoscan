// Compiled by ClojureScript 1.7.170 {}
goog.provide('reagent_forms.datepicker');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('reagent.core');
reagent_forms.datepicker.dates = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"days","days",-1394072564),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], null),new cljs.core.Keyword(null,"days-short","days-short",-443486111),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Su","Mo","Tu","We","Th","Fr","Sa","Su"], null),new cljs.core.Keyword(null,"months","months",-45571637),new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, ["January","February","March","April","May","June","July","August","September","October","November","December"], null),new cljs.core.Keyword(null,"month-short","month-short",-1531335142),new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"], null)], null);
reagent_forms.datepicker.separator_matcher = (function reagent_forms$datepicker$separator_matcher(fmt){
var temp__4655__auto__ = (function (){var or__19819__auto__ = cljs.core.re_find.call(null,/[.\\/\-\s].*?/,fmt);
if(cljs.core.truth_(or__19819__auto__)){
return or__19819__auto__;
} else {
return " ";
}
})();
if(cljs.core.truth_(temp__4655__auto__)){
var separator = temp__4655__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [separator,(function (){var pred__36929 = cljs.core._EQ_;
var expr__36930 = separator;
if(cljs.core.truth_(pred__36929.call(null,".",expr__36930))){
return /\./;
} else {
if(cljs.core.truth_(pred__36929.call(null," ",expr__36930))){
return /W+/;
} else {
return cljs.core.re_pattern.call(null,separator);
}
}
})()], null);
} else {
return null;
}
});
reagent_forms.datepicker.split_parts = (function reagent_forms$datepicker$split_parts(fmt,matcher){
return cljs.core.vec.call(null,cljs.core.map.call(null,cljs.core.keyword,clojure.string.split.call(null,fmt,matcher)));
});
reagent_forms.datepicker.parse_format = (function reagent_forms$datepicker$parse_format(fmt){
var fmt__$1 = (function (){var or__19819__auto__ = fmt;
if(cljs.core.truth_(or__19819__auto__)){
return or__19819__auto__;
} else {
return "mm/dd/yyyy";
}
})();
var vec__36933 = reagent_forms.datepicker.separator_matcher.call(null,fmt__$1);
var separator = cljs.core.nth.call(null,vec__36933,(0),null);
var matcher = cljs.core.nth.call(null,vec__36933,(1),null);
var parts = reagent_forms.datepicker.split_parts.call(null,fmt__$1,matcher);
if(cljs.core.empty_QMARK_.call(null,parts)){
throw (new Error("Invalid date format."));
} else {
}

return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"separator","separator",-1628749125),separator,new cljs.core.Keyword(null,"matcher","matcher",-452768995),matcher,new cljs.core.Keyword(null,"parts","parts",849007691),parts], null);
});
reagent_forms.datepicker.leap_year_QMARK_ = (function reagent_forms$datepicker$leap_year_QMARK_(year){
return ((cljs.core._EQ_.call(null,(0),cljs.core.mod.call(null,year,(4)))) && (cljs.core.not_EQ_.call(null,(0),cljs.core.mod.call(null,year,(100))))) || (cljs.core._EQ_.call(null,(0),cljs.core.mod.call(null,year,(400))));
});
reagent_forms.datepicker.days_in_month = (function reagent_forms$datepicker$days_in_month(year,month){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [(31),(cljs.core.truth_(reagent_forms.datepicker.leap_year_QMARK_.call(null,year))?(29):(28)),(31),(30),(31),(30),(31),(31),(30),(31),(30),(31)], null).call(null,month);
});
reagent_forms.datepicker.blank_date = (function reagent_forms$datepicker$blank_date(){
var G__36935 = (new Date());
G__36935.setHours((0));

G__36935.setMinutes((0));

G__36935.setSeconds((0));

G__36935.setMilliseconds((0));

return G__36935;
});
reagent_forms.datepicker.parse_date = (function reagent_forms$datepicker$parse_date(date,fmt){
var parts = clojure.string.split.call(null,date,new cljs.core.Keyword(null,"matcher","matcher",-452768995).cljs$core$IFn$_invoke$arity$1(fmt));
var date__$1 = reagent_forms.datepicker.blank_date.call(null);
var fmt_parts = cljs.core.count.call(null,new cljs.core.Keyword(null,"parts","parts",849007691).cljs$core$IFn$_invoke$arity$1(fmt));
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,new cljs.core.Keyword(null,"parts","parts",849007691).cljs$core$IFn$_invoke$arity$1(fmt)),cljs.core.count.call(null,parts))){
var year = date__$1.getFullYear();
var month = date__$1.getMonth();
var day = date__$1.getDate();
var i = (0);
while(true){
if(cljs.core.not_EQ_.call(null,i,fmt_parts)){
var val = parseInt(parts.call(null,i),(10));
var val__$1 = (cljs.core.truth_(isNaN(val))?(1):val);
var part = new cljs.core.Keyword(null,"parts","parts",849007691).cljs$core$IFn$_invoke$arity$1(fmt).call(null,i);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([part], true),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"d","d",1972142424),new cljs.core.Keyword(null,"dd","dd",-1340437629)], null)))){
var G__36936 = year;
var G__36937 = month;
var G__36938 = val__$1;
var G__36939 = (i + (1));
year = G__36936;
month = G__36937;
day = G__36938;
i = G__36939;
continue;
} else {
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([part], true),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"m","m",1632677161),new cljs.core.Keyword(null,"mm","mm",-1652850560)], null)))){
var G__36940 = year;
var G__36941 = (val__$1 - (1));
var G__36942 = day;
var G__36943 = (i + (1));
year = G__36940;
month = G__36941;
day = G__36942;
i = G__36943;
continue;
} else {
if(cljs.core._EQ_.call(null,part,new cljs.core.Keyword(null,"yy","yy",-1432012814))){
var G__36944 = ((2000) + val__$1);
var G__36945 = month;
var G__36946 = day;
var G__36947 = (i + (1));
year = G__36944;
month = G__36945;
day = G__36946;
i = G__36947;
continue;
} else {
if(cljs.core._EQ_.call(null,part,new cljs.core.Keyword(null,"yyyy","yyyy",2098225339))){
var G__36948 = val__$1;
var G__36949 = month;
var G__36950 = day;
var G__36951 = (i + (1));
year = G__36948;
month = G__36949;
day = G__36950;
i = G__36951;
continue;
} else {
return null;
}
}
}
}
} else {
return (new Date(year,month,day,(0),(0),(0)));
}
break;
}
} else {
return date__$1;
}
});
reagent_forms.datepicker.formatted_value = (function reagent_forms$datepicker$formatted_value(v){
return [cljs.core.str((((v < (10)))?"0":"")),cljs.core.str(v)].join('');
});
reagent_forms.datepicker.format_date = (function reagent_forms$datepicker$format_date(p__36953,p__36954){
var map__36959 = p__36953;
var map__36959__$1 = ((((!((map__36959 == null)))?((((map__36959.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36959.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36959):map__36959);
var year = cljs.core.get.call(null,map__36959__$1,new cljs.core.Keyword(null,"year","year",335913393));
var month = cljs.core.get.call(null,map__36959__$1,new cljs.core.Keyword(null,"month","month",-1960248533));
var day = cljs.core.get.call(null,map__36959__$1,new cljs.core.Keyword(null,"day","day",-274800446));
var map__36960 = p__36954;
var map__36960__$1 = ((((!((map__36960 == null)))?((((map__36960.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36960.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36960):map__36960);
var separator = cljs.core.get.call(null,map__36960__$1,new cljs.core.Keyword(null,"separator","separator",-1628749125));
var parts = cljs.core.get.call(null,map__36960__$1,new cljs.core.Keyword(null,"parts","parts",849007691));
return clojure.string.join.call(null,separator,cljs.core.map.call(null,((function (map__36959,map__36959__$1,year,month,day,map__36960,map__36960__$1,separator,parts){
return (function (p1__36952_SHARP_){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([p1__36952_SHARP_], true),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"d","d",1972142424),new cljs.core.Keyword(null,"dd","dd",-1340437629)], null)))){
return reagent_forms.datepicker.formatted_value.call(null,day);
} else {
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([p1__36952_SHARP_], true),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"m","m",1632677161),new cljs.core.Keyword(null,"mm","mm",-1652850560)], null)))){
return reagent_forms.datepicker.formatted_value.call(null,month);
} else {
if(cljs.core._EQ_.call(null,p1__36952_SHARP_,new cljs.core.Keyword(null,"yy","yy",-1432012814))){
return [cljs.core.str(year)].join('').substring((2));
} else {
if(cljs.core._EQ_.call(null,p1__36952_SHARP_,new cljs.core.Keyword(null,"yyyy","yyyy",2098225339))){
return year;
} else {
return null;
}
}
}
}
});})(map__36959,map__36959__$1,year,month,day,map__36960,map__36960__$1,separator,parts))
,parts));
});
reagent_forms.datepicker.first_day_of_week = (function reagent_forms$datepicker$first_day_of_week(year,month){
return (new Date(year,month,(1))).getDay();
});
reagent_forms.datepicker.gen_days = (function reagent_forms$datepicker$gen_days(current_date,get,save_BANG_,expanded_QMARK_,auto_close_QMARK_){
var vec__36968 = cljs.core.deref.call(null,current_date);
var year = cljs.core.nth.call(null,vec__36968,(0),null);
var month = cljs.core.nth.call(null,vec__36968,(1),null);
var day = cljs.core.nth.call(null,vec__36968,(2),null);
var num_days = reagent_forms.datepicker.days_in_month.call(null,year,month);
var last_month_days = (((month > (0)))?reagent_forms.datepicker.days_in_month.call(null,year,(month - (1))):null);
var first_day = reagent_forms.datepicker.first_day_of_week.call(null,year,month);
return cljs.core.map.call(null,((function (vec__36968,year,month,day,num_days,last_month_days,first_day){
return (function (week){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null),week);
});})(vec__36968,year,month,day,num_days,last_month_days,first_day))
,cljs.core.partition.call(null,(7),(function (){var iter__20591__auto__ = ((function (vec__36968,year,month,day,num_days,last_month_days,first_day){
return (function reagent_forms$datepicker$gen_days_$_iter__36969(s__36970){
return (new cljs.core.LazySeq(null,((function (vec__36968,year,month,day,num_days,last_month_days,first_day){
return (function (){
var s__36970__$1 = s__36970;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__36970__$1);
if(temp__4657__auto__){
var s__36970__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__36970__$2)){
var c__20589__auto__ = cljs.core.chunk_first.call(null,s__36970__$2);
var size__20590__auto__ = cljs.core.count.call(null,c__20589__auto__);
var b__36972 = cljs.core.chunk_buffer.call(null,size__20590__auto__);
if((function (){var i__36971 = (0);
while(true){
if((i__36971 < size__20590__auto__)){
var i = cljs.core._nth.call(null,c__20589__auto__,i__36971);
cljs.core.chunk_append.call(null,b__36972,(((i < first_day))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.day.old","td.day.old",1008935029),(cljs.core.truth_(last_month_days)?(last_month_days - ((first_day - i) - (1))):null)], null):(((i < (first_day + num_days)))?(function (){var day__$1 = ((i - first_day) + (1));
var date = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"month","month",-1960248533),(month + (1)),new cljs.core.Keyword(null,"day","day",-274800446),day__$1], null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.day","td.day",-943475874),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),(function (){var temp__4657__auto____$1 = get.call(null);
if(cljs.core.truth_(temp__4657__auto____$1)){
var doc_date = temp__4657__auto____$1;
if(cljs.core._EQ_.call(null,doc_date,date)){
return "active";
} else {
return null;
}
} else {
return null;
}
})(),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__36971,day__$1,date,i,c__20589__auto__,size__20590__auto__,b__36972,s__36970__$2,temp__4657__auto__,vec__36968,year,month,day,num_days,last_month_days,first_day){
return (function (){
cljs.core.swap_BANG_.call(null,current_date,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2)], null),day__$1);

if(cljs.core._EQ_.call(null,get.call(null),date)){
save_BANG_.call(null,null);
} else {
save_BANG_.call(null,date);
}

if(cljs.core.truth_(auto_close_QMARK_)){
return cljs.core.reset_BANG_.call(null,expanded_QMARK_,false);
} else {
return null;
}
});})(i__36971,day__$1,date,i,c__20589__auto__,size__20590__auto__,b__36972,s__36970__$2,temp__4657__auto__,vec__36968,year,month,day,num_days,last_month_days,first_day))
], null),day__$1], null);
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.day.new","td.day.new",500967295),(((month < (11)))?((i - (first_day + num_days)) + (1)):null)], null)
)));

var G__36973 = (i__36971 + (1));
i__36971 = G__36973;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36972),reagent_forms$datepicker$gen_days_$_iter__36969.call(null,cljs.core.chunk_rest.call(null,s__36970__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36972),null);
}
} else {
var i = cljs.core.first.call(null,s__36970__$2);
return cljs.core.cons.call(null,(((i < first_day))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.day.old","td.day.old",1008935029),(cljs.core.truth_(last_month_days)?(last_month_days - ((first_day - i) - (1))):null)], null):(((i < (first_day + num_days)))?(function (){var day__$1 = ((i - first_day) + (1));
var date = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"month","month",-1960248533),(month + (1)),new cljs.core.Keyword(null,"day","day",-274800446),day__$1], null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.day","td.day",-943475874),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),(function (){var temp__4657__auto____$1 = get.call(null);
if(cljs.core.truth_(temp__4657__auto____$1)){
var doc_date = temp__4657__auto____$1;
if(cljs.core._EQ_.call(null,doc_date,date)){
return "active";
} else {
return null;
}
} else {
return null;
}
})(),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (day__$1,date,i,s__36970__$2,temp__4657__auto__,vec__36968,year,month,day,num_days,last_month_days,first_day){
return (function (){
cljs.core.swap_BANG_.call(null,current_date,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2)], null),day__$1);

if(cljs.core._EQ_.call(null,get.call(null),date)){
save_BANG_.call(null,null);
} else {
save_BANG_.call(null,date);
}

if(cljs.core.truth_(auto_close_QMARK_)){
return cljs.core.reset_BANG_.call(null,expanded_QMARK_,false);
} else {
return null;
}
});})(day__$1,date,i,s__36970__$2,temp__4657__auto__,vec__36968,year,month,day,num_days,last_month_days,first_day))
], null),day__$1], null);
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.day.new","td.day.new",500967295),(((month < (11)))?((i - (first_day + num_days)) + (1)):null)], null)
)),reagent_forms$datepicker$gen_days_$_iter__36969.call(null,cljs.core.rest.call(null,s__36970__$2)));
}
} else {
return null;
}
break;
}
});})(vec__36968,year,month,day,num_days,last_month_days,first_day))
,null,null));
});})(vec__36968,year,month,day,num_days,last_month_days,first_day))
;
return iter__20591__auto__.call(null,cljs.core.range.call(null,(42)));
})()));
});
reagent_forms.datepicker.last_date = (function reagent_forms$datepicker$last_date(p__36974){
var vec__36976 = p__36974;
var year = cljs.core.nth.call(null,vec__36976,(0),null);
var month = cljs.core.nth.call(null,vec__36976,(1),null);
if((month > (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [year,(month - (1))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(year - (1)),(11)], null);
}
});
reagent_forms.datepicker.next_date = (function reagent_forms$datepicker$next_date(p__36977){
var vec__36979 = p__36977;
var year = cljs.core.nth.call(null,vec__36979,(0),null);
var month = cljs.core.nth.call(null,vec__36979,(1),null);
if(cljs.core._EQ_.call(null,month,(11))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(year + (1)),(0)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [year,(month + (1))], null);
}
});
reagent_forms.datepicker.year_picker = (function reagent_forms$datepicker$year_picker(date,save_BANG_,view_selector){
var start_year = reagent.core.atom.call(null,(cljs.core.first.call(null,cljs.core.deref.call(null,date)) - (10)));
return ((function (start_year){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.table-condensed","table.table-condensed",-470847570),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.prev","th.prev",589654496),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (start_year){
return (function (){
return cljs.core.swap_BANG_.call(null,start_year,cljs.core._,(10));
});})(start_year))
], null),"\u2039"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.switch","th.switch",1141621198),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"col-span","col-span",-232603210),(2)], null),[cljs.core.str(cljs.core.deref.call(null,start_year)),cljs.core.str(" - "),cljs.core.str((cljs.core.deref.call(null,start_year) + (10)))].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.next","th.next",345099302),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (start_year){
return (function (){
return cljs.core.swap_BANG_.call(null,start_year,cljs.core._PLUS_,(10));
});})(start_year))
], null),"\u203A"], null)], null)], null),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300)], null),(function (){var iter__20591__auto__ = ((function (start_year){
return (function reagent_forms$datepicker$year_picker_$_iter__37000(s__37001){
return (new cljs.core.LazySeq(null,((function (start_year){
return (function (){
var s__37001__$1 = s__37001;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__37001__$1);
if(temp__4657__auto__){
var s__37001__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__37001__$2)){
var c__20589__auto__ = cljs.core.chunk_first.call(null,s__37001__$2);
var size__20590__auto__ = cljs.core.count.call(null,c__20589__auto__);
var b__37003 = cljs.core.chunk_buffer.call(null,size__20590__auto__);
if((function (){var i__37002 = (0);
while(true){
if((i__37002 < size__20590__auto__)){
var row = cljs.core._nth.call(null,c__20589__auto__,i__37002);
cljs.core.chunk_append.call(null,b__37003,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null),(function (){var iter__20591__auto__ = ((function (i__37002,row,c__20589__auto__,size__20590__auto__,b__37003,s__37001__$2,temp__4657__auto__,start_year){
return (function reagent_forms$datepicker$year_picker_$_iter__37000_$_iter__37012(s__37013){
return (new cljs.core.LazySeq(null,((function (i__37002,row,c__20589__auto__,size__20590__auto__,b__37003,s__37001__$2,temp__4657__auto__,start_year){
return (function (){
var s__37013__$1 = s__37013;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__37013__$1);
if(temp__4657__auto____$1){
var s__37013__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__37013__$2)){
var c__20589__auto____$1 = cljs.core.chunk_first.call(null,s__37013__$2);
var size__20590__auto____$1 = cljs.core.count.call(null,c__20589__auto____$1);
var b__37015 = cljs.core.chunk_buffer.call(null,size__20590__auto____$1);
if((function (){var i__37014 = (0);
while(true){
if((i__37014 < size__20590__auto____$1)){
var year = cljs.core._nth.call(null,c__20589__auto____$1,i__37014);
cljs.core.chunk_append.call(null,b__37015,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.year","td.year",-1125580353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__37014,i__37002,year,c__20589__auto____$1,size__20590__auto____$1,b__37015,s__37013__$2,temp__4657__auto____$1,row,c__20589__auto__,size__20590__auto__,b__37003,s__37001__$2,temp__4657__auto__,start_year){
return (function (){
cljs.core.swap_BANG_.call(null,date,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null),year);

save_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"year","year",335913393),cljs.core.deref.call(null,date).call(null,(0)),new cljs.core.Keyword(null,"month","month",-1960248533),(cljs.core.deref.call(null,date).call(null,(1)) + (1)),new cljs.core.Keyword(null,"day","day",-274800446),cljs.core.deref.call(null,date).call(null,(2))], null));

return cljs.core.reset_BANG_.call(null,view_selector,new cljs.core.Keyword(null,"month","month",-1960248533));
});})(i__37014,i__37002,year,c__20589__auto____$1,size__20590__auto____$1,b__37015,s__37013__$2,temp__4657__auto____$1,row,c__20589__auto__,size__20590__auto__,b__37003,s__37001__$2,temp__4657__auto__,start_year))
,new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,year,cljs.core.first.call(null,cljs.core.deref.call(null,date))))?"active":null)], null),year], null));

var G__37020 = (i__37014 + (1));
i__37014 = G__37020;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37015),reagent_forms$datepicker$year_picker_$_iter__37000_$_iter__37012.call(null,cljs.core.chunk_rest.call(null,s__37013__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37015),null);
}
} else {
var year = cljs.core.first.call(null,s__37013__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.year","td.year",-1125580353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__37002,year,s__37013__$2,temp__4657__auto____$1,row,c__20589__auto__,size__20590__auto__,b__37003,s__37001__$2,temp__4657__auto__,start_year){
return (function (){
cljs.core.swap_BANG_.call(null,date,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null),year);

save_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"year","year",335913393),cljs.core.deref.call(null,date).call(null,(0)),new cljs.core.Keyword(null,"month","month",-1960248533),(cljs.core.deref.call(null,date).call(null,(1)) + (1)),new cljs.core.Keyword(null,"day","day",-274800446),cljs.core.deref.call(null,date).call(null,(2))], null));

return cljs.core.reset_BANG_.call(null,view_selector,new cljs.core.Keyword(null,"month","month",-1960248533));
});})(i__37002,year,s__37013__$2,temp__4657__auto____$1,row,c__20589__auto__,size__20590__auto__,b__37003,s__37001__$2,temp__4657__auto__,start_year))
,new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,year,cljs.core.first.call(null,cljs.core.deref.call(null,date))))?"active":null)], null),year], null),reagent_forms$datepicker$year_picker_$_iter__37000_$_iter__37012.call(null,cljs.core.rest.call(null,s__37013__$2)));
}
} else {
return null;
}
break;
}
});})(i__37002,row,c__20589__auto__,size__20590__auto__,b__37003,s__37001__$2,temp__4657__auto__,start_year))
,null,null));
});})(i__37002,row,c__20589__auto__,size__20590__auto__,b__37003,s__37001__$2,temp__4657__auto__,start_year))
;
return iter__20591__auto__.call(null,row);
})()));

var G__37021 = (i__37002 + (1));
i__37002 = G__37021;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37003),reagent_forms$datepicker$year_picker_$_iter__37000.call(null,cljs.core.chunk_rest.call(null,s__37001__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37003),null);
}
} else {
var row = cljs.core.first.call(null,s__37001__$2);
return cljs.core.cons.call(null,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null),(function (){var iter__20591__auto__ = ((function (row,s__37001__$2,temp__4657__auto__,start_year){
return (function reagent_forms$datepicker$year_picker_$_iter__37000_$_iter__37016(s__37017){
return (new cljs.core.LazySeq(null,((function (row,s__37001__$2,temp__4657__auto__,start_year){
return (function (){
var s__37017__$1 = s__37017;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__37017__$1);
if(temp__4657__auto____$1){
var s__37017__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__37017__$2)){
var c__20589__auto__ = cljs.core.chunk_first.call(null,s__37017__$2);
var size__20590__auto__ = cljs.core.count.call(null,c__20589__auto__);
var b__37019 = cljs.core.chunk_buffer.call(null,size__20590__auto__);
if((function (){var i__37018 = (0);
while(true){
if((i__37018 < size__20590__auto__)){
var year = cljs.core._nth.call(null,c__20589__auto__,i__37018);
cljs.core.chunk_append.call(null,b__37019,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.year","td.year",-1125580353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__37018,year,c__20589__auto__,size__20590__auto__,b__37019,s__37017__$2,temp__4657__auto____$1,row,s__37001__$2,temp__4657__auto__,start_year){
return (function (){
cljs.core.swap_BANG_.call(null,date,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null),year);

save_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"year","year",335913393),cljs.core.deref.call(null,date).call(null,(0)),new cljs.core.Keyword(null,"month","month",-1960248533),(cljs.core.deref.call(null,date).call(null,(1)) + (1)),new cljs.core.Keyword(null,"day","day",-274800446),cljs.core.deref.call(null,date).call(null,(2))], null));

return cljs.core.reset_BANG_.call(null,view_selector,new cljs.core.Keyword(null,"month","month",-1960248533));
});})(i__37018,year,c__20589__auto__,size__20590__auto__,b__37019,s__37017__$2,temp__4657__auto____$1,row,s__37001__$2,temp__4657__auto__,start_year))
,new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,year,cljs.core.first.call(null,cljs.core.deref.call(null,date))))?"active":null)], null),year], null));

var G__37022 = (i__37018 + (1));
i__37018 = G__37022;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37019),reagent_forms$datepicker$year_picker_$_iter__37000_$_iter__37016.call(null,cljs.core.chunk_rest.call(null,s__37017__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37019),null);
}
} else {
var year = cljs.core.first.call(null,s__37017__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.year","td.year",-1125580353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (year,s__37017__$2,temp__4657__auto____$1,row,s__37001__$2,temp__4657__auto__,start_year){
return (function (){
cljs.core.swap_BANG_.call(null,date,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null),year);

save_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"year","year",335913393),cljs.core.deref.call(null,date).call(null,(0)),new cljs.core.Keyword(null,"month","month",-1960248533),(cljs.core.deref.call(null,date).call(null,(1)) + (1)),new cljs.core.Keyword(null,"day","day",-274800446),cljs.core.deref.call(null,date).call(null,(2))], null));

return cljs.core.reset_BANG_.call(null,view_selector,new cljs.core.Keyword(null,"month","month",-1960248533));
});})(year,s__37017__$2,temp__4657__auto____$1,row,s__37001__$2,temp__4657__auto__,start_year))
,new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,year,cljs.core.first.call(null,cljs.core.deref.call(null,date))))?"active":null)], null),year], null),reagent_forms$datepicker$year_picker_$_iter__37000_$_iter__37016.call(null,cljs.core.rest.call(null,s__37017__$2)));
}
} else {
return null;
}
break;
}
});})(row,s__37001__$2,temp__4657__auto__,start_year))
,null,null));
});})(row,s__37001__$2,temp__4657__auto__,start_year))
;
return iter__20591__auto__.call(null,row);
})()),reagent_forms$datepicker$year_picker_$_iter__37000.call(null,cljs.core.rest.call(null,s__37001__$2)));
}
} else {
return null;
}
break;
}
});})(start_year))
,null,null));
});})(start_year))
;
return iter__20591__auto__.call(null,cljs.core.partition.call(null,(4),cljs.core.range.call(null,cljs.core.deref.call(null,start_year),(cljs.core.deref.call(null,start_year) + (12)))));
})())], null);
});
;})(start_year))
});
reagent_forms.datepicker.month_picker = (function reagent_forms$datepicker$month_picker(date,save_BANG_,view_selector){
var year = reagent.core.atom.call(null,cljs.core.first.call(null,cljs.core.deref.call(null,date)));
return ((function (year){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.table-condensed","table.table-condensed",-470847570),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.prev","th.prev",589654496),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (year){
return (function (){
return cljs.core.swap_BANG_.call(null,year,cljs.core.dec);
});})(year))
], null),"\u2039"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.switch","th.switch",1141621198),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"col-span","col-span",-232603210),(2),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (year){
return (function (){
return cljs.core.reset_BANG_.call(null,view_selector,new cljs.core.Keyword(null,"year","year",335913393));
});})(year))
], null),cljs.core.deref.call(null,year)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.next","th.next",345099302),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (year){
return (function (){
return cljs.core.swap_BANG_.call(null,year,cljs.core.inc);
});})(year))
], null),"\u203A"], null)], null)], null),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300)], null),(function (){var iter__20591__auto__ = ((function (year){
return (function reagent_forms$datepicker$month_picker_$_iter__37107(s__37108){
return (new cljs.core.LazySeq(null,((function (year){
return (function (){
var s__37108__$1 = s__37108;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__37108__$1);
if(temp__4657__auto__){
var s__37108__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__37108__$2)){
var c__20589__auto__ = cljs.core.chunk_first.call(null,s__37108__$2);
var size__20590__auto__ = cljs.core.count.call(null,c__20589__auto__);
var b__37110 = cljs.core.chunk_buffer.call(null,size__20590__auto__);
if((function (){var i__37109 = (0);
while(true){
if((i__37109 < size__20590__auto__)){
var row = cljs.core._nth.call(null,c__20589__auto__,i__37109);
cljs.core.chunk_append.call(null,b__37110,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null),(function (){var iter__20591__auto__ = ((function (i__37109,row,c__20589__auto__,size__20590__auto__,b__37110,s__37108__$2,temp__4657__auto__,year){
return (function reagent_forms$datepicker$month_picker_$_iter__37107_$_iter__37151(s__37152){
return (new cljs.core.LazySeq(null,((function (i__37109,row,c__20589__auto__,size__20590__auto__,b__37110,s__37108__$2,temp__4657__auto__,year){
return (function (){
var s__37152__$1 = s__37152;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__37152__$1);
if(temp__4657__auto____$1){
var s__37152__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__37152__$2)){
var c__20589__auto____$1 = cljs.core.chunk_first.call(null,s__37152__$2);
var size__20590__auto____$1 = cljs.core.count.call(null,c__20589__auto____$1);
var b__37154 = cljs.core.chunk_buffer.call(null,size__20590__auto____$1);
if((function (){var i__37153 = (0);
while(true){
if((i__37153 < size__20590__auto____$1)){
var vec__37163 = cljs.core._nth.call(null,c__20589__auto____$1,i__37153);
var idx = cljs.core.nth.call(null,vec__37163,(0),null);
var month_name = cljs.core.nth.call(null,vec__37163,(1),null);
cljs.core.chunk_append.call(null,b__37154,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.month","td.month",754894788),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),(function (){var vec__37164 = cljs.core.deref.call(null,date);
var cur_year = cljs.core.nth.call(null,vec__37164,(0),null);
var cur_month = cljs.core.nth.call(null,vec__37164,(1),null);
if((cljs.core._EQ_.call(null,cljs.core.deref.call(null,year),cur_year)) && (cljs.core._EQ_.call(null,idx,cur_month))){
return "active";
} else {
return null;
}
})(),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__37153,i__37109,vec__37163,idx,month_name,c__20589__auto____$1,size__20590__auto____$1,b__37154,s__37152__$2,temp__4657__auto____$1,row,c__20589__auto__,size__20590__auto__,b__37110,s__37108__$2,temp__4657__auto__,year){
return (function (){
cljs.core.swap_BANG_.call(null,date,((function (i__37153,i__37109,vec__37163,idx,month_name,c__20589__auto____$1,size__20590__auto____$1,b__37154,s__37152__$2,temp__4657__auto____$1,row,c__20589__auto__,size__20590__auto__,b__37110,s__37108__$2,temp__4657__auto__,year){
return (function (p__37165){
var vec__37166 = p__37165;
var _ = cljs.core.nth.call(null,vec__37166,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__37166,(1),null);
var day = cljs.core.nth.call(null,vec__37166,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,year),idx,day], null);
});})(i__37153,i__37109,vec__37163,idx,month_name,c__20589__auto____$1,size__20590__auto____$1,b__37154,s__37152__$2,temp__4657__auto____$1,row,c__20589__auto__,size__20590__auto__,b__37110,s__37108__$2,temp__4657__auto__,year))
);

save_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"year","year",335913393),cljs.core.deref.call(null,date).call(null,(0)),new cljs.core.Keyword(null,"month","month",-1960248533),(cljs.core.deref.call(null,date).call(null,(1)) + (1)),new cljs.core.Keyword(null,"day","day",-274800446),cljs.core.deref.call(null,date).call(null,(2))], null));

return cljs.core.reset_BANG_.call(null,view_selector,new cljs.core.Keyword(null,"day","day",-274800446));
});})(i__37153,i__37109,vec__37163,idx,month_name,c__20589__auto____$1,size__20590__auto____$1,b__37154,s__37152__$2,temp__4657__auto____$1,row,c__20589__auto__,size__20590__auto__,b__37110,s__37108__$2,temp__4657__auto__,year))
], null),month_name], null));

var G__37191 = (i__37153 + (1));
i__37153 = G__37191;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37154),reagent_forms$datepicker$month_picker_$_iter__37107_$_iter__37151.call(null,cljs.core.chunk_rest.call(null,s__37152__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37154),null);
}
} else {
var vec__37167 = cljs.core.first.call(null,s__37152__$2);
var idx = cljs.core.nth.call(null,vec__37167,(0),null);
var month_name = cljs.core.nth.call(null,vec__37167,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.month","td.month",754894788),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),(function (){var vec__37168 = cljs.core.deref.call(null,date);
var cur_year = cljs.core.nth.call(null,vec__37168,(0),null);
var cur_month = cljs.core.nth.call(null,vec__37168,(1),null);
if((cljs.core._EQ_.call(null,cljs.core.deref.call(null,year),cur_year)) && (cljs.core._EQ_.call(null,idx,cur_month))){
return "active";
} else {
return null;
}
})(),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__37109,vec__37167,idx,month_name,s__37152__$2,temp__4657__auto____$1,row,c__20589__auto__,size__20590__auto__,b__37110,s__37108__$2,temp__4657__auto__,year){
return (function (){
cljs.core.swap_BANG_.call(null,date,((function (i__37109,vec__37167,idx,month_name,s__37152__$2,temp__4657__auto____$1,row,c__20589__auto__,size__20590__auto__,b__37110,s__37108__$2,temp__4657__auto__,year){
return (function (p__37169){
var vec__37170 = p__37169;
var _ = cljs.core.nth.call(null,vec__37170,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__37170,(1),null);
var day = cljs.core.nth.call(null,vec__37170,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,year),idx,day], null);
});})(i__37109,vec__37167,idx,month_name,s__37152__$2,temp__4657__auto____$1,row,c__20589__auto__,size__20590__auto__,b__37110,s__37108__$2,temp__4657__auto__,year))
);

save_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"year","year",335913393),cljs.core.deref.call(null,date).call(null,(0)),new cljs.core.Keyword(null,"month","month",-1960248533),(cljs.core.deref.call(null,date).call(null,(1)) + (1)),new cljs.core.Keyword(null,"day","day",-274800446),cljs.core.deref.call(null,date).call(null,(2))], null));

return cljs.core.reset_BANG_.call(null,view_selector,new cljs.core.Keyword(null,"day","day",-274800446));
});})(i__37109,vec__37167,idx,month_name,s__37152__$2,temp__4657__auto____$1,row,c__20589__auto__,size__20590__auto__,b__37110,s__37108__$2,temp__4657__auto__,year))
], null),month_name], null),reagent_forms$datepicker$month_picker_$_iter__37107_$_iter__37151.call(null,cljs.core.rest.call(null,s__37152__$2)));
}
} else {
return null;
}
break;
}
});})(i__37109,row,c__20589__auto__,size__20590__auto__,b__37110,s__37108__$2,temp__4657__auto__,year))
,null,null));
});})(i__37109,row,c__20589__auto__,size__20590__auto__,b__37110,s__37108__$2,temp__4657__auto__,year))
;
return iter__20591__auto__.call(null,row);
})()));

var G__37192 = (i__37109 + (1));
i__37109 = G__37192;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37110),reagent_forms$datepicker$month_picker_$_iter__37107.call(null,cljs.core.chunk_rest.call(null,s__37108__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37110),null);
}
} else {
var row = cljs.core.first.call(null,s__37108__$2);
return cljs.core.cons.call(null,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null),(function (){var iter__20591__auto__ = ((function (row,s__37108__$2,temp__4657__auto__,year){
return (function reagent_forms$datepicker$month_picker_$_iter__37107_$_iter__37171(s__37172){
return (new cljs.core.LazySeq(null,((function (row,s__37108__$2,temp__4657__auto__,year){
return (function (){
var s__37172__$1 = s__37172;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__37172__$1);
if(temp__4657__auto____$1){
var s__37172__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__37172__$2)){
var c__20589__auto__ = cljs.core.chunk_first.call(null,s__37172__$2);
var size__20590__auto__ = cljs.core.count.call(null,c__20589__auto__);
var b__37174 = cljs.core.chunk_buffer.call(null,size__20590__auto__);
if((function (){var i__37173 = (0);
while(true){
if((i__37173 < size__20590__auto__)){
var vec__37183 = cljs.core._nth.call(null,c__20589__auto__,i__37173);
var idx = cljs.core.nth.call(null,vec__37183,(0),null);
var month_name = cljs.core.nth.call(null,vec__37183,(1),null);
cljs.core.chunk_append.call(null,b__37174,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.month","td.month",754894788),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),(function (){var vec__37184 = cljs.core.deref.call(null,date);
var cur_year = cljs.core.nth.call(null,vec__37184,(0),null);
var cur_month = cljs.core.nth.call(null,vec__37184,(1),null);
if((cljs.core._EQ_.call(null,cljs.core.deref.call(null,year),cur_year)) && (cljs.core._EQ_.call(null,idx,cur_month))){
return "active";
} else {
return null;
}
})(),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__37173,vec__37183,idx,month_name,c__20589__auto__,size__20590__auto__,b__37174,s__37172__$2,temp__4657__auto____$1,row,s__37108__$2,temp__4657__auto__,year){
return (function (){
cljs.core.swap_BANG_.call(null,date,((function (i__37173,vec__37183,idx,month_name,c__20589__auto__,size__20590__auto__,b__37174,s__37172__$2,temp__4657__auto____$1,row,s__37108__$2,temp__4657__auto__,year){
return (function (p__37185){
var vec__37186 = p__37185;
var _ = cljs.core.nth.call(null,vec__37186,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__37186,(1),null);
var day = cljs.core.nth.call(null,vec__37186,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,year),idx,day], null);
});})(i__37173,vec__37183,idx,month_name,c__20589__auto__,size__20590__auto__,b__37174,s__37172__$2,temp__4657__auto____$1,row,s__37108__$2,temp__4657__auto__,year))
);

save_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"year","year",335913393),cljs.core.deref.call(null,date).call(null,(0)),new cljs.core.Keyword(null,"month","month",-1960248533),(cljs.core.deref.call(null,date).call(null,(1)) + (1)),new cljs.core.Keyword(null,"day","day",-274800446),cljs.core.deref.call(null,date).call(null,(2))], null));

return cljs.core.reset_BANG_.call(null,view_selector,new cljs.core.Keyword(null,"day","day",-274800446));
});})(i__37173,vec__37183,idx,month_name,c__20589__auto__,size__20590__auto__,b__37174,s__37172__$2,temp__4657__auto____$1,row,s__37108__$2,temp__4657__auto__,year))
], null),month_name], null));

var G__37193 = (i__37173 + (1));
i__37173 = G__37193;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37174),reagent_forms$datepicker$month_picker_$_iter__37107_$_iter__37171.call(null,cljs.core.chunk_rest.call(null,s__37172__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37174),null);
}
} else {
var vec__37187 = cljs.core.first.call(null,s__37172__$2);
var idx = cljs.core.nth.call(null,vec__37187,(0),null);
var month_name = cljs.core.nth.call(null,vec__37187,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.month","td.month",754894788),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),(function (){var vec__37188 = cljs.core.deref.call(null,date);
var cur_year = cljs.core.nth.call(null,vec__37188,(0),null);
var cur_month = cljs.core.nth.call(null,vec__37188,(1),null);
if((cljs.core._EQ_.call(null,cljs.core.deref.call(null,year),cur_year)) && (cljs.core._EQ_.call(null,idx,cur_month))){
return "active";
} else {
return null;
}
})(),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__37187,idx,month_name,s__37172__$2,temp__4657__auto____$1,row,s__37108__$2,temp__4657__auto__,year){
return (function (){
cljs.core.swap_BANG_.call(null,date,((function (vec__37187,idx,month_name,s__37172__$2,temp__4657__auto____$1,row,s__37108__$2,temp__4657__auto__,year){
return (function (p__37189){
var vec__37190 = p__37189;
var _ = cljs.core.nth.call(null,vec__37190,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__37190,(1),null);
var day = cljs.core.nth.call(null,vec__37190,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,year),idx,day], null);
});})(vec__37187,idx,month_name,s__37172__$2,temp__4657__auto____$1,row,s__37108__$2,temp__4657__auto__,year))
);

save_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"year","year",335913393),cljs.core.deref.call(null,date).call(null,(0)),new cljs.core.Keyword(null,"month","month",-1960248533),(cljs.core.deref.call(null,date).call(null,(1)) + (1)),new cljs.core.Keyword(null,"day","day",-274800446),cljs.core.deref.call(null,date).call(null,(2))], null));

return cljs.core.reset_BANG_.call(null,view_selector,new cljs.core.Keyword(null,"day","day",-274800446));
});})(vec__37187,idx,month_name,s__37172__$2,temp__4657__auto____$1,row,s__37108__$2,temp__4657__auto__,year))
], null),month_name], null),reagent_forms$datepicker$month_picker_$_iter__37107_$_iter__37171.call(null,cljs.core.rest.call(null,s__37172__$2)));
}
} else {
return null;
}
break;
}
});})(row,s__37108__$2,temp__4657__auto__,year))
,null,null));
});})(row,s__37108__$2,temp__4657__auto__,year))
;
return iter__20591__auto__.call(null,row);
})()),reagent_forms$datepicker$month_picker_$_iter__37107.call(null,cljs.core.rest.call(null,s__37108__$2)));
}
} else {
return null;
}
break;
}
});})(year))
,null,null));
});})(year))
;
return iter__20591__auto__.call(null,cljs.core.partition.call(null,(4),cljs.core.map_indexed.call(null,cljs.core.vector,new cljs.core.Keyword(null,"month-short","month-short",-1531335142).cljs$core$IFn$_invoke$arity$1(reagent_forms.datepicker.dates))));
})())], null);
});
;})(year))
});
reagent_forms.datepicker.day_picker = (function reagent_forms$datepicker$day_picker(date,get,save_BANG_,view_selector,expanded_QMARK_,auto_close_QMARK_){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.table-condensed","table.table-condensed",-470847570),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.prev","th.prev",589654496),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.call(null,date,reagent_forms.datepicker.last_date);
})], null),"\u2039"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.switch","th.switch",1141621198),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"col-span","col-span",-232603210),(5),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_.call(null,view_selector,new cljs.core.Keyword(null,"month","month",-1960248533));
})], null),[cljs.core.str(cljs.core.get_in.call(null,reagent_forms.datepicker.dates,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"months","months",-45571637),cljs.core.second.call(null,cljs.core.deref.call(null,date))], null))),cljs.core.str(" "),cljs.core.str(cljs.core.first.call(null,cljs.core.deref.call(null,date)))].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.next","th.next",345099302),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.call(null,date,reagent_forms.datepicker.next_date);
})], null),"\u203A"], null)], null),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null),(function (){var iter__20591__auto__ = (function reagent_forms$datepicker$day_picker_$_iter__37198(s__37199){
return (new cljs.core.LazySeq(null,(function (){
var s__37199__$1 = s__37199;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__37199__$1);
if(temp__4657__auto__){
var s__37199__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__37199__$2)){
var c__20589__auto__ = cljs.core.chunk_first.call(null,s__37199__$2);
var size__20590__auto__ = cljs.core.count.call(null,c__20589__auto__);
var b__37201 = cljs.core.chunk_buffer.call(null,size__20590__auto__);
if((function (){var i__37200 = (0);
while(true){
if((i__37200 < size__20590__auto__)){
var dow = cljs.core._nth.call(null,c__20589__auto__,i__37200);
cljs.core.chunk_append.call(null,b__37201,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.dow","th.dow",-322111723),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),dow], null),dow], null));

var G__37202 = (i__37200 + (1));
i__37200 = G__37202;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37201),reagent_forms$datepicker$day_picker_$_iter__37198.call(null,cljs.core.chunk_rest.call(null,s__37199__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37201),null);
}
} else {
var dow = cljs.core.first.call(null,s__37199__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.dow","th.dow",-322111723),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),dow], null),dow], null),reagent_forms$datepicker$day_picker_$_iter__37198.call(null,cljs.core.rest.call(null,s__37199__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__20591__auto__.call(null,cljs.core.take.call(null,(7),new cljs.core.Keyword(null,"days-short","days-short",-443486111).cljs$core$IFn$_invoke$arity$1(reagent_forms.datepicker.dates)));
})())], null),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300)], null),reagent_forms.datepicker.gen_days.call(null,date,get,save_BANG_,expanded_QMARK_,auto_close_QMARK_))], null);
});
reagent_forms.datepicker.datepicker = (function reagent_forms$datepicker$datepicker(year,month,day,expanded_QMARK_,auto_close_QMARK_,get,save_BANG_,inline){
var date = reagent.core.atom.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [year,month,day], null));
var view_selector = reagent.core.atom.call(null,new cljs.core.Keyword(null,"day","day",-274800446));
return ((function (date,view_selector){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str("datepicker"),cljs.core.str((cljs.core.truth_(cljs.core.deref.call(null,expanded_QMARK_))?null:" dropdown-menu")),cljs.core.str((cljs.core.truth_(inline)?" dp-inline":" dp-dropdown"))].join('')], null),(function (){var pred__37206 = cljs.core._EQ_;
var expr__37207 = cljs.core.deref.call(null,view_selector);
if(cljs.core.truth_(pred__37206.call(null,new cljs.core.Keyword(null,"day","day",-274800446),expr__37207))){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.datepicker.day_picker,date,get,save_BANG_,view_selector,expanded_QMARK_,auto_close_QMARK_], null);
} else {
if(cljs.core.truth_(pred__37206.call(null,new cljs.core.Keyword(null,"month","month",-1960248533),expr__37207))){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.datepicker.month_picker,date,save_BANG_,view_selector], null);
} else {
if(cljs.core.truth_(pred__37206.call(null,new cljs.core.Keyword(null,"year","year",335913393),expr__37207))){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.datepicker.year_picker,date,save_BANG_,view_selector], null);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__37207)].join('')));
}
}
}
})()], null);
});
;})(date,view_selector))
});

//# sourceMappingURL=datepicker.js.map