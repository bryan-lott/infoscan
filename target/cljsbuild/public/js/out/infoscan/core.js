// Compiled by ClojureScript 1.7.170 {}
goog.provide('infoscan.core');
goog.require('cljs.core');
goog.require('secretary.core');
goog.require('reagent.session');
goog.require('reagent.core');
goog.require('reagent_forms.core');
goog.require('accountant.core');
goog.require('clojure.string');
infoscan.core.all_keys = new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pii?","pii?",342791493),new cljs.core.Keyword(null,"merchant","merchant",-1662127621),new cljs.core.Keyword(null,"internal_vendor_id","internal_vendor_id",1044654913),new cljs.core.Keyword(null,"internal_template_id","internal_template_id",784378467),new cljs.core.Keyword(null,"internal_file_id","internal_file_id",1677101242),new cljs.core.Keyword(null,"internal_order_id","internal_order_id",1498546671),new cljs.core.Keyword(null,"product_title","product_title",-1053148453),new cljs.core.Keyword(null,"product_subtitle","product_subtitle",-820629666),new cljs.core.Keyword(null,"receipt_title","receipt_title",-1932428415),new cljs.core.Keyword(null,"crawled_title","crawled_title",760835228),new cljs.core.Keyword(null,"product_sku","product_sku",1189635229),new cljs.core.Keyword(null,"product_when","product_when",119546619),new cljs.core.Keyword(null,"product_where","product_where",-25886548),new cljs.core.Keyword(null,"seller","seller",-715410369),new cljs.core.Keyword(null,"invoice_id","invoice_id",1752318255),new cljs.core.Keyword(null,"orig_n","orig_n",-165952879),new cljs.core.Keyword(null,"rand_n","rand_n",209518849)], null);
infoscan.core.meta_keys = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"internal_vendor_id","internal_vendor_id",1044654913),new cljs.core.Keyword(null,"internal_template_id","internal_template_id",784378467),new cljs.core.Keyword(null,"internal_file_id","internal_file_id",1677101242),new cljs.core.Keyword(null,"internal_order_id","internal_order_id",1498546671),new cljs.core.Keyword(null,"orig_n","orig_n",-165952879),new cljs.core.Keyword(null,"rand_n","rand_n",209518849)], null);
infoscan.core.data_keys = new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pii?","pii?",342791493),new cljs.core.Keyword(null,"merchant","merchant",-1662127621),new cljs.core.Keyword(null,"product_title","product_title",-1053148453),new cljs.core.Keyword(null,"product_subtitle","product_subtitle",-820629666),new cljs.core.Keyword(null,"receipt_title","receipt_title",-1932428415),new cljs.core.Keyword(null,"crawled_title","crawled_title",760835228),new cljs.core.Keyword(null,"product_sku","product_sku",1189635229),new cljs.core.Keyword(null,"product_when","product_when",119546619),new cljs.core.Keyword(null,"product_where","product_where",-25886548),new cljs.core.Keyword(null,"seller","seller",-715410369),new cljs.core.Keyword(null,"invoice_id","invoice_id",1752318255)], null);
infoscan.core.app_state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"sort-val","sort-val",603863657),new cljs.core.Keyword(null,"pii?","pii?",342791493),new cljs.core.Keyword(null,"ascending","ascending",-988350486),true,new cljs.core.Keyword(null,"raw-hive","raw-hive",-1165179520),"",new cljs.core.Keyword(null,"raw-fade","raw-fade",-1668085412),"",new cljs.core.Keyword(null,"raw-highlight","raw-highlight",664676702),"",new cljs.core.Keyword(null,"word-color","word-color",-945039970),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"export","export",214356590),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"table-contents","table-contents",895955790),cljs.core.PersistentVector.EMPTY], null));
/**
 * Change the table sort to the new-val and ascending or descending.
 */
infoscan.core.update_sort_value = (function infoscan$core$update_sort_value(new_val){
if(cljs.core._EQ_.call(null,new_val,new cljs.core.Keyword(null,"sort-val","sort-val",603863657).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,infoscan.core.app_state)))){
cljs.core.swap_BANG_.call(null,infoscan.core.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ascending","ascending",-988350486)], null),cljs.core.not);
} else {
cljs.core.swap_BANG_.call(null,infoscan.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"ascending","ascending",-988350486),true);
}

return cljs.core.swap_BANG_.call(null,infoscan.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"sort-val","sort-val",603863657),new_val);
});
/**
 * Return a table sorted by the app-state's current :sort-val and :ascending values.
 */
infoscan.core.sorted_contents = (function infoscan$core$sorted_contents(){
var sorted_contents__$1 = cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"sort-val","sort-val",603863657).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,infoscan.core.app_state)),new cljs.core.Keyword(null,"table-contents","table-contents",895955790).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,infoscan.core.app_state)));
if(cljs.core.truth_(new cljs.core.Keyword(null,"ascending","ascending",-988350486).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,infoscan.core.app_state)))){
return sorted_contents__$1;
} else {
return cljs.core.rseq.call(null,sorted_contents__$1);
}
});
/**
 * Change a :keyword back into a regular string w/o the leading colon.
 */
infoscan.core.key__GT_str = (function infoscan$core$key__GT_str(k){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.rest.call(null,[cljs.core.str(k)].join('')));
});
/**
 * Highlight colors win out over fade colors.
 */
infoscan.core.highlight_GT_fade = (function infoscan$core$highlight_GT_fade(w1,w2){
if(cljs.core._EQ_.call(null,w1,"red")){
return w1;
} else {
return w2;
}
});
infoscan.core.color_lookup = (function infoscan$core$color_lookup(word){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,infoscan.core.app_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"word-color","word-color",-945039970),clojure.string.lower_case.call(null,word)], null),"black");
});
/**
 * Cycle the color of the given word in app-state
 */
infoscan.core.color_update_BANG_ = (function infoscan$core$color_update_BANG_(word){
return cljs.core.swap_BANG_.call(null,infoscan.core.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"word-color","word-color",-945039970),clojure.string.lower_case.call(null,word)], null),(function (p1__28697_SHARP_){
var G__28699 = p1__28697_SHARP_;
switch (G__28699) {
case "black":
return "red";

break;
case "red":
return "lightgrey";

break;
case "lightgrey":
return "black";

break;
default:
return "red";

}
}));
});
/**
 * Converts nodelist to (not lazy) seq.
 */
infoscan.core.nodelist_to_seq = (function infoscan$core$nodelist_to_seq(nl){
var result_seq = cljs.core.map.call(null,(function (p1__28701_SHARP_){
return nl.item(p1__28701_SHARP_);
}),cljs.core.range.call(null,nl.length));
return cljs.core.doall.call(null,result_seq);
});
/**
 * Get a handle on all words in the tag.
 */
infoscan.core.q = (function infoscan$core$q(selector){
return infoscan.core.nodelist_to_seq.call(null,document.querySelectorAll(selector));
});
infoscan.core.cycle_word_color_BANG_ = (function infoscan$core$cycle_word_color_BANG_(word){
infoscan.core.color_update_BANG_.call(null,word);

var new_color = infoscan.core.color_lookup.call(null,word);
var words = infoscan.core.q.call(null,[cljs.core.str(".word-"),cljs.core.str(word)].join(''));
var seq__28706 = cljs.core.seq.call(null,words);
var chunk__28707 = null;
var count__28708 = (0);
var i__28709 = (0);
while(true){
if((i__28709 < count__28708)){
var word__$1 = cljs.core._nth.call(null,chunk__28707,i__28709);
(word__$1["style"]["color"] = new_color);

var G__28710 = seq__28706;
var G__28711 = chunk__28707;
var G__28712 = count__28708;
var G__28713 = (i__28709 + (1));
seq__28706 = G__28710;
chunk__28707 = G__28711;
count__28708 = G__28712;
i__28709 = G__28713;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__28706);
if(temp__4657__auto__){
var seq__28706__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28706__$1)){
var c__20622__auto__ = cljs.core.chunk_first.call(null,seq__28706__$1);
var G__28714 = cljs.core.chunk_rest.call(null,seq__28706__$1);
var G__28715 = c__20622__auto__;
var G__28716 = cljs.core.count.call(null,c__20622__auto__);
var G__28717 = (0);
seq__28706 = G__28714;
chunk__28707 = G__28715;
count__28708 = G__28716;
i__28709 = G__28717;
continue;
} else {
var word__$1 = cljs.core.first.call(null,seq__28706__$1);
(word__$1["style"]["color"] = new_color);

var G__28718 = cljs.core.next.call(null,seq__28706__$1);
var G__28719 = null;
var G__28720 = (0);
var G__28721 = (0);
seq__28706 = G__28718;
chunk__28707 = G__28719;
count__28708 = G__28720;
i__28709 = G__28721;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
 * Take a line and convert it to a map with ks as keys.
 */
infoscan.core.line__GT_map = (function infoscan$core$line__GT_map(ks,data){
return cljs.core.zipmap.call(null,ks,cljs.core.apply.call(null,cljs.core.conj,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null),clojure.string.split.call(null,clojure.string.replace.call(null,data,/^\"|\"$/,""),/\",\"/)));
});
/**
 * Assumes that input will be text in a always-quoted csv format
 *   where the first row is a header.  Produces a list of maps.
 */
infoscan.core.raw__GT_map = (function infoscan$core$raw__GT_map(input){
var lines = clojure.string.split_lines.call(null,clojure.string.trim.call(null,input));
var header = cljs.core.map.call(null,cljs.core.keyword,clojure.string.split.call(null,clojure.string.replace.call(null,cljs.core.first.call(null,lines),/^\"|\"$/,""),/\",\"/));
var data = cljs.core.rest.call(null,lines);
return cljs.core.map.call(null,cljs.core.partial.call(null,infoscan.core.line__GT_map,header),data);
});
/**
 * Create a map from a string and color.
 *   Split the string based on newlines and map the words to the provided color.
 */
infoscan.core.raw_word__GT_map = (function infoscan$core$raw_word__GT_map(input,color){
var words = clojure.string.split_lines.call(null,clojure.string.trim.call(null,input));
return cljs.core.zipmap.call(null,words,cljs.core.repeat.call(null,color));
});
infoscan.core.toggle_row_color_BANG_ = (function infoscan$core$toggle_row_color_BANG_(curr_color){
if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,curr_color),"white")){
return cljs.core.reset_BANG_.call(null,curr_color,"peru");
} else {
return cljs.core.reset_BANG_.call(null,curr_color,"white");
}
});
/**
 * Extract as a list, in order, the indices found in i from the vector v
 */
infoscan.core.extract_indices = (function infoscan$core$extract_indices(i,v){
return cljs.core.map.call(null,(function (p1__28722_SHARP_){
return cljs.core.get.call(null,v,p1__28722_SHARP_);
}),i);
});
/**
 * Return a list of the indices of m1 found in m2 (indices returned are the indices in m2)
 */
infoscan.core.list_indices = (function infoscan$core$list_indices(m1,m2){
var arr = cljs.core.to_array.call(null,m2);
return cljs.core.map.call(null,((function (arr){
return (function (p1__28723_SHARP_){
return arr.indexOf(p1__28723_SHARP_);
});})(arr))
,m1);
});
infoscan.core.links = (function infoscan$core$links(pagename){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),pagename], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"/"], null),"Infoscan Home"], null)," - ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"/raw"], null),"Raw Hive Input"], null)," - ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"/scan"], null),"PII Scan"], null)," - ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"/export"], null),"Export"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067)], null)], null);
});
infoscan.core.word_component = (function infoscan$core$word_component(word){
if(cljs.core.truth_(cljs.core.re_find.call(null,/\w+/,word))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str("word-"),cljs.core.str(clojure.string.lower_case.call(null,word))].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return infoscan.core.cycle_word_color_BANG_.call(null,clojure.string.lower_case.call(null,word));
}),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),"black",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null)], null),word], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),word], null);
}
});
infoscan.core.raw_component = (function infoscan$core$raw_component(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),"Raw Hive Input"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea.form-control","textarea.form-control",-1690362789),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"raw-data","raw-data",617791828),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"raw-hive","raw-hive",-1165179520).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,infoscan.core.app_state)),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Paste the output of your Hive query here (csv)",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__28724_SHARP_){
cljs.core.swap_BANG_.call(null,infoscan.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"raw-hive","raw-hive",-1165179520),p1__28724_SHARP_.target.value);

return cljs.core.swap_BANG_.call(null,infoscan.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"table-contents","table-contents",895955790),infoscan.core.raw__GT_map.call(null,new cljs.core.Keyword(null,"raw-hive","raw-hive",-1165179520).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,infoscan.core.app_state))));
})], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),"Fade Words"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea.form-control","textarea.form-control",-1690362789),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"fade-words","fade-words",-920161867),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"raw-fade","raw-fade",-1668085412).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,infoscan.core.app_state)),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Paste any words you want to \"fade out\" here",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__28725_SHARP_){
cljs.core.swap_BANG_.call(null,infoscan.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"raw-fade","raw-fade",-1668085412),p1__28725_SHARP_.target.value);

return cljs.core.swap_BANG_.call(null,infoscan.core.app_state,cljs.core.merge_with,new cljs.core.Keyword(null,"word-color","word-color",-945039970).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,infoscan.core.app_state)),infoscan.core.raw_word__GT_map.call(null,new cljs.core.Keyword(null,"raw-fade","raw-fade",-1668085412).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,infoscan.core.app_state)),"lightgrey"));
})], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),"Highlight Words"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea.form-control","textarea.form-control",-1690362789),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"highlight-words","highlight-words",940353071),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"raw-highlight","raw-highlight",664676702).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,infoscan.core.app_state)),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Paste any words you want to highlight in red here",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__28726_SHARP_){
cljs.core.swap_BANG_.call(null,infoscan.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"raw-highlight","raw-highlight",664676702),p1__28726_SHARP_.target.value);

return cljs.core.swap_BANG_.call(null,infoscan.core.app_state,cljs.core.merge_with,new cljs.core.Keyword(null,"word-color","word-color",-945039970).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,infoscan.core.app_state)),infoscan.core.raw_word__GT_map.call(null,new cljs.core.Keyword(null,"raw-highlight","raw-highlight",664676702).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,infoscan.core.app_state)),"red"));
})], null)], null)], null)], null)], null)], null);
});
infoscan.core.line_component = (function infoscan$core$line_component(line){
var row_color = reagent.core.atom.call(null,"white");
return ((function (row_color){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),cljs.core.deref.call(null,row_color)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null),new cljs.core.Keyword(null,"value","value",305978217),"PII",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (row_color){
return (function (){
cljs.core.swap_BANG_.call(null,infoscan.core.app_state,cljs.core.update,new cljs.core.Keyword(null,"export","export",214356590),cljs.core.conj,line);

return infoscan.core.toggle_row_color_BANG_.call(null,row_color);
});})(row_color))
], null)], null)], null),cljs.core.map_indexed.call(null,((function (row_color){
return (function (p1__28728_SHARP_,p2__28727_SHARP_){
return cljs.core.with_meta.call(null,p2__28727_SHARP_,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),p1__28728_SHARP_,new cljs.core.Keyword(null,"data","data",-232669377),p2__28727_SHARP_], null));
});})(row_color))
,(function (){var iter__20591__auto__ = ((function (row_color){
return (function infoscan$core$line_component_$_iter__28751(s__28752){
return (new cljs.core.LazySeq(null,((function (row_color){
return (function (){
var s__28752__$1 = s__28752;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__28752__$1);
if(temp__4657__auto__){
var s__28752__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__28752__$2)){
var c__20589__auto__ = cljs.core.chunk_first.call(null,s__28752__$2);
var size__20590__auto__ = cljs.core.count.call(null,c__20589__auto__);
var b__28754 = cljs.core.chunk_buffer.call(null,size__20590__auto__);
if((function (){var i__28753 = (0);
while(true){
if((i__28753 < size__20590__auto__)){
var k = cljs.core._nth.call(null,c__20589__auto__,i__28753);
cljs.core.chunk_append.call(null,b__28754,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.map_indexed.call(null,((function (i__28753,k,c__20589__auto__,size__20590__auto__,b__28754,s__28752__$2,temp__4657__auto__,row_color){
return (function (p1__28730_SHARP_,p2__28729_SHARP_){
return cljs.core.with_meta.call(null,p2__28729_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),p1__28730_SHARP_], null));
});})(i__28753,k,c__20589__auto__,size__20590__auto__,b__28754,s__28752__$2,temp__4657__auto__,row_color))
,(function (){var iter__20591__auto__ = ((function (i__28753,k,c__20589__auto__,size__20590__auto__,b__28754,s__28752__$2,temp__4657__auto__,row_color){
return (function infoscan$core$line_component_$_iter__28751_$_iter__28763(s__28764){
return (new cljs.core.LazySeq(null,((function (i__28753,k,c__20589__auto__,size__20590__auto__,b__28754,s__28752__$2,temp__4657__auto__,row_color){
return (function (){
var s__28764__$1 = s__28764;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__28764__$1);
if(temp__4657__auto____$1){
var s__28764__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__28764__$2)){
var c__20589__auto____$1 = cljs.core.chunk_first.call(null,s__28764__$2);
var size__20590__auto____$1 = cljs.core.count.call(null,c__20589__auto____$1);
var b__28766 = cljs.core.chunk_buffer.call(null,size__20590__auto____$1);
if((function (){var i__28765 = (0);
while(true){
if((i__28765 < size__20590__auto____$1)){
var word = cljs.core._nth.call(null,c__20589__auto____$1,i__28765);
cljs.core.chunk_append.call(null,b__28766,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [infoscan.core.word_component,word], null));

var G__28771 = (i__28765 + (1));
i__28765 = G__28771;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28766),infoscan$core$line_component_$_iter__28751_$_iter__28763.call(null,cljs.core.chunk_rest.call(null,s__28764__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28766),null);
}
} else {
var word = cljs.core.first.call(null,s__28764__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [infoscan.core.word_component,word], null),infoscan$core$line_component_$_iter__28751_$_iter__28763.call(null,cljs.core.rest.call(null,s__28764__$2)));
}
} else {
return null;
}
break;
}
});})(i__28753,k,c__20589__auto__,size__20590__auto__,b__28754,s__28752__$2,temp__4657__auto__,row_color))
,null,null));
});})(i__28753,k,c__20589__auto__,size__20590__auto__,b__28754,s__28752__$2,temp__4657__auto__,row_color))
;
return iter__20591__auto__.call(null,clojure.string.split.call(null,cljs.core.get.call(null,line,k),/\b/));
})())], null));

var G__28772 = (i__28753 + (1));
i__28753 = G__28772;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28754),infoscan$core$line_component_$_iter__28751.call(null,cljs.core.chunk_rest.call(null,s__28752__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28754),null);
}
} else {
var k = cljs.core.first.call(null,s__28752__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.map_indexed.call(null,((function (k,s__28752__$2,temp__4657__auto__,row_color){
return (function (p1__28730_SHARP_,p2__28729_SHARP_){
return cljs.core.with_meta.call(null,p2__28729_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),p1__28730_SHARP_], null));
});})(k,s__28752__$2,temp__4657__auto__,row_color))
,(function (){var iter__20591__auto__ = ((function (k,s__28752__$2,temp__4657__auto__,row_color){
return (function infoscan$core$line_component_$_iter__28751_$_iter__28767(s__28768){
return (new cljs.core.LazySeq(null,((function (k,s__28752__$2,temp__4657__auto__,row_color){
return (function (){
var s__28768__$1 = s__28768;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__28768__$1);
if(temp__4657__auto____$1){
var s__28768__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__28768__$2)){
var c__20589__auto__ = cljs.core.chunk_first.call(null,s__28768__$2);
var size__20590__auto__ = cljs.core.count.call(null,c__20589__auto__);
var b__28770 = cljs.core.chunk_buffer.call(null,size__20590__auto__);
if((function (){var i__28769 = (0);
while(true){
if((i__28769 < size__20590__auto__)){
var word = cljs.core._nth.call(null,c__20589__auto__,i__28769);
cljs.core.chunk_append.call(null,b__28770,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [infoscan.core.word_component,word], null));

var G__28773 = (i__28769 + (1));
i__28769 = G__28773;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28770),infoscan$core$line_component_$_iter__28751_$_iter__28767.call(null,cljs.core.chunk_rest.call(null,s__28768__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28770),null);
}
} else {
var word = cljs.core.first.call(null,s__28768__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [infoscan.core.word_component,word], null),infoscan$core$line_component_$_iter__28751_$_iter__28767.call(null,cljs.core.rest.call(null,s__28768__$2)));
}
} else {
return null;
}
break;
}
});})(k,s__28752__$2,temp__4657__auto__,row_color))
,null,null));
});})(k,s__28752__$2,temp__4657__auto__,row_color))
;
return iter__20591__auto__.call(null,clojure.string.split.call(null,cljs.core.get.call(null,line,k),/\b/));
})())], null),infoscan$core$line_component_$_iter__28751.call(null,cljs.core.rest.call(null,s__28752__$2)));
}
} else {
return null;
}
break;
}
});})(row_color))
,null,null));
});})(row_color))
;
return iter__20591__auto__.call(null,cljs.core.rest.call(null,infoscan.core.data_keys));
})())], null);
});
;})(row_color))
});
infoscan.core.table = (function infoscan$core$table(){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),cljs.core.map_indexed.call(null,(function (p1__28775_SHARP_,p2__28774_SHARP_){
return cljs.core.with_meta.call(null,p2__28774_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),p1__28775_SHARP_], null));
}),(function (){var iter__20591__auto__ = (function infoscan$core$table_$_iter__28786(s__28787){
return (new cljs.core.LazySeq(null,(function (){
var s__28787__$1 = s__28787;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__28787__$1);
if(temp__4657__auto__){
var s__28787__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__28787__$2)){
var c__20589__auto__ = cljs.core.chunk_first.call(null,s__28787__$2);
var size__20590__auto__ = cljs.core.count.call(null,c__20589__auto__);
var b__28789 = cljs.core.chunk_buffer.call(null,size__20590__auto__);
if((function (){var i__28788 = (0);
while(true){
if((i__28788 < size__20590__auto__)){
var head = cljs.core._nth.call(null,c__20589__auto__,i__28788);
cljs.core.chunk_append.call(null,b__28789,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"200",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__28788,head,c__20589__auto__,size__20590__auto__,b__28789,s__28787__$2,temp__4657__auto__){
return (function (){
return infoscan.core.update_sort_value.call(null,head);
});})(i__28788,head,c__20589__auto__,size__20590__auto__,b__28789,s__28787__$2,temp__4657__auto__))
], null),infoscan.core.key__GT_str.call(null,head)], null));

var G__28794 = (i__28788 + (1));
i__28788 = G__28794;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28789),infoscan$core$table_$_iter__28786.call(null,cljs.core.chunk_rest.call(null,s__28787__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28789),null);
}
} else {
var head = cljs.core.first.call(null,s__28787__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"200",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (head,s__28787__$2,temp__4657__auto__){
return (function (){
return infoscan.core.update_sort_value.call(null,head);
});})(head,s__28787__$2,temp__4657__auto__))
], null),infoscan.core.key__GT_str.call(null,head)], null),infoscan$core$table_$_iter__28786.call(null,cljs.core.rest.call(null,s__28787__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__20591__auto__.call(null,infoscan.core.data_keys);
})())], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),cljs.core.map_indexed.call(null,(function (p1__28777_SHARP_,p2__28776_SHARP_){
return cljs.core.with_meta.call(null,p2__28776_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),p1__28777_SHARP_], null));
}),(function (){var iter__20591__auto__ = (function infoscan$core$table_$_iter__28790(s__28791){
return (new cljs.core.LazySeq(null,(function (){
var s__28791__$1 = s__28791;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__28791__$1);
if(temp__4657__auto__){
var s__28791__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__28791__$2)){
var c__20589__auto__ = cljs.core.chunk_first.call(null,s__28791__$2);
var size__20590__auto__ = cljs.core.count.call(null,c__20589__auto__);
var b__28793 = cljs.core.chunk_buffer.call(null,size__20590__auto__);
if((function (){var i__28792 = (0);
while(true){
if((i__28792 < size__20590__auto__)){
var line = cljs.core._nth.call(null,c__20589__auto__,i__28792);
cljs.core.chunk_append.call(null,b__28793,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [infoscan.core.line_component,line], null));

var G__28795 = (i__28792 + (1));
i__28792 = G__28795;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28793),infoscan$core$table_$_iter__28790.call(null,cljs.core.chunk_rest.call(null,s__28791__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28793),null);
}
} else {
var line = cljs.core.first.call(null,s__28791__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [infoscan.core.line_component,line], null),infoscan$core$table_$_iter__28790.call(null,cljs.core.rest.call(null,s__28791__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__20591__auto__.call(null,infoscan.core.sorted_contents.call(null));
})())], null)], null);
});
});
infoscan.core.home_page = (function infoscan$core$home_page(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [infoscan.core.links,"Infoscan Home"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Infoscan is a faster way of scanning for PII"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"To start, please paste the results of your Hive query into the \"Raw Hive Input\" page"], null)], null);
});
infoscan.core.raw_input_page = (function infoscan$core$raw_input_page(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [infoscan.core.links,"Raw Hive Input"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.core.bind_fields,infoscan.core.raw_component,infoscan.core.app_state], null)], null);
});
infoscan.core.pii_scan_page = (function infoscan$core$pii_scan_page(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [infoscan.core.links,"PII Scan"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.core.bind_fields,infoscan.core.table,infoscan.core.app_state], null)], null);
});
infoscan.core.export_page = (function infoscan$core$export_page(){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [infoscan.core.links,"Export"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Current Fade Words"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea.form-control","textarea.form-control",-1690362789),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"fade-words-export","fade-words-export",-1493511025),new cljs.core.Keyword(null,"readOnly","readOnly",-1749118317),true,new cljs.core.Keyword(null,"value","value",305978217),clojure.string.join.call(null,"\n",cljs.core.keys.call(null,cljs.core.filter.call(null,(function (p1__28796_SHARP_){
return cljs.core._EQ_.call(null,cljs.core.val.call(null,p1__28796_SHARP_),"lightgrey");
}),new cljs.core.Keyword(null,"word-color","word-color",-945039970).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,infoscan.core.app_state)))))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Current Highlight Words"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea.form-control","textarea.form-control",-1690362789),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"highlight-words-export","highlight-words-export",1959253971),new cljs.core.Keyword(null,"readOnly","readOnly",-1749118317),true,new cljs.core.Keyword(null,"value","value",305978217),clojure.string.join.call(null,"\n",cljs.core.keys.call(null,cljs.core.filter.call(null,(function (p1__28797_SHARP_){
return cljs.core._EQ_.call(null,cljs.core.val.call(null,p1__28797_SHARP_),"red");
}),new cljs.core.Keyword(null,"word-color","word-color",-945039970).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,infoscan.core.app_state)))))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Found PII"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),[cljs.core.str(new cljs.core.Keyword(null,"export","export",214356590).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,infoscan.core.app_state)))].join('')], null)], null);
});
infoscan.core.current_page = (function infoscan$core$current_page(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.session.get.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180))], null)], null);
});
var action__21994__auto___28801 = (function (params__21995__auto__){
if(cljs.core.map_QMARK_.call(null,params__21995__auto__)){
var map__28798 = params__21995__auto__;
var map__28798__$1 = ((((!((map__28798 == null)))?((((map__28798.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28798.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28798):map__28798);
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Var(function(){return infoscan.core.home_page;},new cljs.core.Symbol("infoscan.core","home-page","infoscan.core/home-page",-589653013,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"infoscan.core","infoscan.core",-868284862,null),new cljs.core.Symbol(null,"home-page","home-page",-850279575,null),"/home/blott/code/infoscan/src/cljs/infoscan/core.cljs",16,1,292,292,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(infoscan.core.home_page)?infoscan.core.home_page.cljs$lang$test:null)])));
} else {
if(cljs.core.vector_QMARK_.call(null,params__21995__auto__)){
var vec__28800 = params__21995__auto__;
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Var(function(){return infoscan.core.home_page;},new cljs.core.Symbol("infoscan.core","home-page","infoscan.core/home-page",-589653013,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"infoscan.core","infoscan.core",-868284862,null),new cljs.core.Symbol(null,"home-page","home-page",-850279575,null),"/home/blott/code/infoscan/src/cljs/infoscan/core.cljs",16,1,292,292,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(infoscan.core.home_page)?infoscan.core.home_page.cljs$lang$test:null)])));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__21994__auto___28801);

var action__21994__auto___28805 = (function (params__21995__auto__){
if(cljs.core.map_QMARK_.call(null,params__21995__auto__)){
var map__28802 = params__21995__auto__;
var map__28802__$1 = ((((!((map__28802 == null)))?((((map__28802.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28802.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28802):map__28802);
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Var(function(){return infoscan.core.raw_input_page;},new cljs.core.Symbol("infoscan.core","raw-input-page","infoscan.core/raw-input-page",-266801064,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"infoscan.core","infoscan.core",-868284862,null),new cljs.core.Symbol(null,"raw-input-page","raw-input-page",-6530906,null),"/home/blott/code/infoscan/src/cljs/infoscan/core.cljs",21,1,298,298,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(infoscan.core.raw_input_page)?infoscan.core.raw_input_page.cljs$lang$test:null)])));
} else {
if(cljs.core.vector_QMARK_.call(null,params__21995__auto__)){
var vec__28804 = params__21995__auto__;
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Var(function(){return infoscan.core.raw_input_page;},new cljs.core.Symbol("infoscan.core","raw-input-page","infoscan.core/raw-input-page",-266801064,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"infoscan.core","infoscan.core",-868284862,null),new cljs.core.Symbol(null,"raw-input-page","raw-input-page",-6530906,null),"/home/blott/code/infoscan/src/cljs/infoscan/core.cljs",21,1,298,298,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(infoscan.core.raw_input_page)?infoscan.core.raw_input_page.cljs$lang$test:null)])));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/raw",action__21994__auto___28805);

var action__21994__auto___28809 = (function (params__21995__auto__){
if(cljs.core.map_QMARK_.call(null,params__21995__auto__)){
var map__28806 = params__21995__auto__;
var map__28806__$1 = ((((!((map__28806 == null)))?((((map__28806.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28806.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28806):map__28806);
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Var(function(){return infoscan.core.pii_scan_page;},new cljs.core.Symbol("infoscan.core","pii-scan-page","infoscan.core/pii-scan-page",-1820056484,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"infoscan.core","infoscan.core",-868284862,null),new cljs.core.Symbol(null,"pii-scan-page","pii-scan-page",1694760158,null),"/home/blott/code/infoscan/src/cljs/infoscan/core.cljs",20,1,303,303,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(infoscan.core.pii_scan_page)?infoscan.core.pii_scan_page.cljs$lang$test:null)])));
} else {
if(cljs.core.vector_QMARK_.call(null,params__21995__auto__)){
var vec__28808 = params__21995__auto__;
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Var(function(){return infoscan.core.pii_scan_page;},new cljs.core.Symbol("infoscan.core","pii-scan-page","infoscan.core/pii-scan-page",-1820056484,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"infoscan.core","infoscan.core",-868284862,null),new cljs.core.Symbol(null,"pii-scan-page","pii-scan-page",1694760158,null),"/home/blott/code/infoscan/src/cljs/infoscan/core.cljs",20,1,303,303,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(infoscan.core.pii_scan_page)?infoscan.core.pii_scan_page.cljs$lang$test:null)])));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/scan",action__21994__auto___28809);

var action__21994__auto___28813 = (function (params__21995__auto__){
if(cljs.core.map_QMARK_.call(null,params__21995__auto__)){
var map__28810 = params__21995__auto__;
var map__28810__$1 = ((((!((map__28810 == null)))?((((map__28810.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28810.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28810):map__28810);
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Var(function(){return infoscan.core.export_page;},new cljs.core.Symbol("infoscan.core","export-page","infoscan.core/export-page",-354637327,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"infoscan.core","infoscan.core",-868284862,null),new cljs.core.Symbol(null,"export-page","export-page",-447090057,null),"/home/blott/code/infoscan/src/cljs/infoscan/core.cljs",18,1,308,308,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(infoscan.core.export_page)?infoscan.core.export_page.cljs$lang$test:null)])));
} else {
if(cljs.core.vector_QMARK_.call(null,params__21995__auto__)){
var vec__28812 = params__21995__auto__;
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Var(function(){return infoscan.core.export_page;},new cljs.core.Symbol("infoscan.core","export-page","infoscan.core/export-page",-354637327,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"infoscan.core","infoscan.core",-868284862,null),new cljs.core.Symbol(null,"export-page","export-page",-447090057,null),"/home/blott/code/infoscan/src/cljs/infoscan/core.cljs",18,1,308,308,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(infoscan.core.export_page)?infoscan.core.export_page.cljs$lang$test:null)])));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/export",action__21994__auto___28813);

infoscan.core.mount_root = (function infoscan$core$mount_root(){
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [infoscan.core.current_page], null),document.getElementById("app"));
});
infoscan.core.init_BANG_ = (function infoscan$core$init_BANG_(){
accountant.core.configure_navigation_BANG_.call(null);

accountant.core.dispatch_current_BANG_.call(null);

return infoscan.core.mount_root.call(null);
});

//# sourceMappingURL=core.js.map