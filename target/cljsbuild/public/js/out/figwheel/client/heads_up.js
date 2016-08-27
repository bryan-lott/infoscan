// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('cljs.core.async');
goog.require('goog.string');
figwheel.client.heads_up.clear;

figwheel.client.heads_up.cljs_logo_svg;
figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(var_args){
var args__20884__auto__ = [];
var len__20877__auto___41855 = arguments.length;
var i__20878__auto___41856 = (0);
while(true){
if((i__20878__auto___41856 < len__20877__auto___41855)){
args__20884__auto__.push((arguments[i__20878__auto___41856]));

var G__41857 = (i__20878__auto___41856 + (1));
i__20878__auto___41856 = G__41857;
continue;
} else {
}
break;
}

var argseq__20885__auto__ = ((((2) < args__20884__auto__.length))?(new cljs.core.IndexedSeq(args__20884__auto__.slice((2)),(0))):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__20885__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__41847_41858 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__41848_41859 = null;
var count__41849_41860 = (0);
var i__41850_41861 = (0);
while(true){
if((i__41850_41861 < count__41849_41860)){
var k_41862 = cljs.core._nth.call(null,chunk__41848_41859,i__41850_41861);
e.setAttribute(cljs.core.name.call(null,k_41862),cljs.core.get.call(null,attrs,k_41862));

var G__41863 = seq__41847_41858;
var G__41864 = chunk__41848_41859;
var G__41865 = count__41849_41860;
var G__41866 = (i__41850_41861 + (1));
seq__41847_41858 = G__41863;
chunk__41848_41859 = G__41864;
count__41849_41860 = G__41865;
i__41850_41861 = G__41866;
continue;
} else {
var temp__4657__auto___41867 = cljs.core.seq.call(null,seq__41847_41858);
if(temp__4657__auto___41867){
var seq__41847_41868__$1 = temp__4657__auto___41867;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41847_41868__$1)){
var c__20622__auto___41869 = cljs.core.chunk_first.call(null,seq__41847_41868__$1);
var G__41870 = cljs.core.chunk_rest.call(null,seq__41847_41868__$1);
var G__41871 = c__20622__auto___41869;
var G__41872 = cljs.core.count.call(null,c__20622__auto___41869);
var G__41873 = (0);
seq__41847_41858 = G__41870;
chunk__41848_41859 = G__41871;
count__41849_41860 = G__41872;
i__41850_41861 = G__41873;
continue;
} else {
var k_41874 = cljs.core.first.call(null,seq__41847_41868__$1);
e.setAttribute(cljs.core.name.call(null,k_41874),cljs.core.get.call(null,attrs,k_41874));

var G__41875 = cljs.core.next.call(null,seq__41847_41868__$1);
var G__41876 = null;
var G__41877 = (0);
var G__41878 = (0);
seq__41847_41858 = G__41875;
chunk__41848_41859 = G__41876;
count__41849_41860 = G__41877;
i__41850_41861 = G__41878;
continue;
}
} else {
}
}
break;
}

var seq__41851_41879 = cljs.core.seq.call(null,children);
var chunk__41852_41880 = null;
var count__41853_41881 = (0);
var i__41854_41882 = (0);
while(true){
if((i__41854_41882 < count__41853_41881)){
var ch_41883 = cljs.core._nth.call(null,chunk__41852_41880,i__41854_41882);
e.appendChild(ch_41883);

var G__41884 = seq__41851_41879;
var G__41885 = chunk__41852_41880;
var G__41886 = count__41853_41881;
var G__41887 = (i__41854_41882 + (1));
seq__41851_41879 = G__41884;
chunk__41852_41880 = G__41885;
count__41853_41881 = G__41886;
i__41854_41882 = G__41887;
continue;
} else {
var temp__4657__auto___41888 = cljs.core.seq.call(null,seq__41851_41879);
if(temp__4657__auto___41888){
var seq__41851_41889__$1 = temp__4657__auto___41888;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41851_41889__$1)){
var c__20622__auto___41890 = cljs.core.chunk_first.call(null,seq__41851_41889__$1);
var G__41891 = cljs.core.chunk_rest.call(null,seq__41851_41889__$1);
var G__41892 = c__20622__auto___41890;
var G__41893 = cljs.core.count.call(null,c__20622__auto___41890);
var G__41894 = (0);
seq__41851_41879 = G__41891;
chunk__41852_41880 = G__41892;
count__41853_41881 = G__41893;
i__41854_41882 = G__41894;
continue;
} else {
var ch_41895 = cljs.core.first.call(null,seq__41851_41889__$1);
e.appendChild(ch_41895);

var G__41896 = cljs.core.next.call(null,seq__41851_41889__$1);
var G__41897 = null;
var G__41898 = (0);
var G__41899 = (0);
seq__41851_41879 = G__41896;
chunk__41852_41880 = G__41897;
count__41853_41881 = G__41898;
i__41854_41882 = G__41899;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq41844){
var G__41845 = cljs.core.first.call(null,seq41844);
var seq41844__$1 = cljs.core.next.call(null,seq41844);
var G__41846 = cljs.core.first.call(null,seq41844__$1);
var seq41844__$2 = cljs.core.next.call(null,seq41844__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__41845,G__41846,seq41844__$2);
});
if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__20732__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__20733__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__20734__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__20735__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__20736__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__20732__auto__,prefer_table__20733__auto__,method_cache__20734__auto__,cached_hierarchy__20735__auto__,hierarchy__20736__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__20732__auto__,prefer_table__20733__auto__,method_cache__20734__auto__,cached_hierarchy__20735__auto__,hierarchy__20736__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__20736__auto__,method_table__20732__auto__,prefer_table__20733__auto__,method_cache__20734__auto__,cached_hierarchy__20735__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el_41900 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_41900.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_41900.innerHTML = figwheel.client.heads_up.cljs_logo_svg;

el_41900.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_41900);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__41901,st_map){
var map__41906 = p__41901;
var map__41906__$1 = ((((!((map__41906 == null)))?((((map__41906.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41906.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41906):map__41906);
var container_el = cljs.core.get.call(null,map__41906__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__41906,map__41906__$1,container_el){
return (function (p__41908){
var vec__41909 = p__41908;
var k = cljs.core.nth.call(null,vec__41909,(0),null);
var v = cljs.core.nth.call(null,vec__41909,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__41906,map__41906__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__41910,dom_str){
var map__41913 = p__41910;
var map__41913__$1 = ((((!((map__41913 == null)))?((((map__41913.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41913.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41913):map__41913);
var c = map__41913__$1;
var content_area_el = cljs.core.get.call(null,map__41913__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__41915){
var map__41918 = p__41915;
var map__41918__$1 = ((((!((map__41918 == null)))?((((map__41918.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41918.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41918):map__41918);
var content_area_el = cljs.core.get.call(null,map__41918__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__22319__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22319__auto__){
return (function (){
var f__22320__auto__ = (function (){var switch__22298__auto__ = ((function (c__22319__auto__){
return (function (state_41961){
var state_val_41962 = (state_41961[(1)]);
if((state_val_41962 === (1))){
var inst_41946 = (state_41961[(7)]);
var inst_41946__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_41947 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_41948 = ["10px","10px","100%","68px","1.0"];
var inst_41949 = cljs.core.PersistentHashMap.fromArrays(inst_41947,inst_41948);
var inst_41950 = cljs.core.merge.call(null,inst_41949,style);
var inst_41951 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_41946__$1,inst_41950);
var inst_41952 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_41946__$1,msg);
var inst_41953 = cljs.core.async.timeout.call(null,(300));
var state_41961__$1 = (function (){var statearr_41963 = state_41961;
(statearr_41963[(8)] = inst_41952);

(statearr_41963[(9)] = inst_41951);

(statearr_41963[(7)] = inst_41946__$1);

return statearr_41963;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41961__$1,(2),inst_41953);
} else {
if((state_val_41962 === (2))){
var inst_41946 = (state_41961[(7)]);
var inst_41955 = (state_41961[(2)]);
var inst_41956 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_41957 = ["auto"];
var inst_41958 = cljs.core.PersistentHashMap.fromArrays(inst_41956,inst_41957);
var inst_41959 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_41946,inst_41958);
var state_41961__$1 = (function (){var statearr_41964 = state_41961;
(statearr_41964[(10)] = inst_41955);

return statearr_41964;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41961__$1,inst_41959);
} else {
return null;
}
}
});})(c__22319__auto__))
;
return ((function (switch__22298__auto__,c__22319__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__22299__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__22299__auto____0 = (function (){
var statearr_41968 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_41968[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__22299__auto__);

(statearr_41968[(1)] = (1));

return statearr_41968;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__22299__auto____1 = (function (state_41961){
while(true){
var ret_value__22300__auto__ = (function (){try{while(true){
var result__22301__auto__ = switch__22298__auto__.call(null,state_41961);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22301__auto__;
}
break;
}
}catch (e41969){if((e41969 instanceof Object)){
var ex__22302__auto__ = e41969;
var statearr_41970_41972 = state_41961;
(statearr_41970_41972[(5)] = ex__22302__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41961);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41969;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41973 = state_41961;
state_41961 = G__41973;
continue;
} else {
return ret_value__22300__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__22299__auto__ = function(state_41961){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__22299__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__22299__auto____1.call(this,state_41961);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__22299__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__22299__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__22299__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__22299__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__22299__auto__;
})()
;})(switch__22298__auto__,c__22319__auto__))
})();
var state__22321__auto__ = (function (){var statearr_41971 = f__22320__auto__.call(null);
(statearr_41971[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22319__auto__);

return statearr_41971;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22321__auto__);
});})(c__22319__auto__))
);

return c__22319__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(s){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function figwheel$client$heads_up$file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg){
var msg__$1 = goog.string.htmlEscape(msg);
var temp__4655__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg__$1);
if(cljs.core.truth_(temp__4655__auto__)){
var vec__41975 = temp__4655__auto__;
var f = cljs.core.nth.call(null,vec__41975,(0),null);
var ln = cljs.core.nth.call(null,vec__41975,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg__$1);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg__$1),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__41978 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__41978,(0),null);
var file_line = cljs.core.nth.call(null,vec__41978,(1),null);
var file_column = cljs.core.nth.call(null,vec__41978,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__41978,file_name,file_line,file_column){
return (function (p1__41976_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(goog.string.htmlEscape(p1__41976_SHARP_)),cljs.core.str("</div>")].join('');
});})(vec__41978,file_name,file_line,file_column))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,(function (){var or__19819__auto__ = file_line;
if(cljs.core.truth_(or__19819__auto__)){
return or__19819__auto__;
} else {
var and__19807__auto__ = cause;
if(cljs.core.truth_(and__19807__auto__)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause);
} else {
return and__19807__auto__;
}
}
})(),[cljs.core.str(msg),cljs.core.str((cljs.core.truth_(cause)?[cljs.core.str("Error on file "),cljs.core.str(goog.string.htmlEscape(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause))),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''):""))].join('')))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function figwheel$client$heads_up$append_message(message){
var map__41981 = figwheel.client.heads_up.ensure_container.call(null);
var map__41981__$1 = ((((!((map__41981 == null)))?((((map__41981.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41981.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41981):map__41981);
var content_area_el = cljs.core.get.call(null,map__41981__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__22319__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22319__auto__){
return (function (){
var f__22320__auto__ = (function (){var switch__22298__auto__ = ((function (c__22319__auto__){
return (function (state_42029){
var state_val_42030 = (state_42029[(1)]);
if((state_val_42030 === (1))){
var inst_42012 = (state_42029[(7)]);
var inst_42012__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_42013 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_42014 = ["0.0"];
var inst_42015 = cljs.core.PersistentHashMap.fromArrays(inst_42013,inst_42014);
var inst_42016 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_42012__$1,inst_42015);
var inst_42017 = cljs.core.async.timeout.call(null,(300));
var state_42029__$1 = (function (){var statearr_42031 = state_42029;
(statearr_42031[(7)] = inst_42012__$1);

(statearr_42031[(8)] = inst_42016);

return statearr_42031;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42029__$1,(2),inst_42017);
} else {
if((state_val_42030 === (2))){
var inst_42012 = (state_42029[(7)]);
var inst_42019 = (state_42029[(2)]);
var inst_42020 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_42021 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_42022 = cljs.core.PersistentHashMap.fromArrays(inst_42020,inst_42021);
var inst_42023 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_42012,inst_42022);
var inst_42024 = cljs.core.async.timeout.call(null,(200));
var state_42029__$1 = (function (){var statearr_42032 = state_42029;
(statearr_42032[(9)] = inst_42023);

(statearr_42032[(10)] = inst_42019);

return statearr_42032;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42029__$1,(3),inst_42024);
} else {
if((state_val_42030 === (3))){
var inst_42012 = (state_42029[(7)]);
var inst_42026 = (state_42029[(2)]);
var inst_42027 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_42012,"");
var state_42029__$1 = (function (){var statearr_42033 = state_42029;
(statearr_42033[(11)] = inst_42026);

return statearr_42033;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42029__$1,inst_42027);
} else {
return null;
}
}
}
});})(c__22319__auto__))
;
return ((function (switch__22298__auto__,c__22319__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__22299__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__22299__auto____0 = (function (){
var statearr_42037 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42037[(0)] = figwheel$client$heads_up$clear_$_state_machine__22299__auto__);

(statearr_42037[(1)] = (1));

return statearr_42037;
});
var figwheel$client$heads_up$clear_$_state_machine__22299__auto____1 = (function (state_42029){
while(true){
var ret_value__22300__auto__ = (function (){try{while(true){
var result__22301__auto__ = switch__22298__auto__.call(null,state_42029);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22301__auto__;
}
break;
}
}catch (e42038){if((e42038 instanceof Object)){
var ex__22302__auto__ = e42038;
var statearr_42039_42041 = state_42029;
(statearr_42039_42041[(5)] = ex__22302__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42029);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42038;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42042 = state_42029;
state_42029 = G__42042;
continue;
} else {
return ret_value__22300__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__22299__auto__ = function(state_42029){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__22299__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__22299__auto____1.call(this,state_42029);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__22299__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__22299__auto____0;
figwheel$client$heads_up$clear_$_state_machine__22299__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__22299__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__22299__auto__;
})()
;})(switch__22298__auto__,c__22319__auto__))
})();
var state__22321__auto__ = (function (){var statearr_42040 = f__22320__auto__.call(null);
(statearr_42040[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22319__auto__);

return statearr_42040;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22321__auto__);
});})(c__22319__auto__))
);

return c__22319__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__22319__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22319__auto__){
return (function (){
var f__22320__auto__ = (function (){var switch__22298__auto__ = ((function (c__22319__auto__){
return (function (state_42074){
var state_val_42075 = (state_42074[(1)]);
if((state_val_42075 === (1))){
var inst_42064 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_42074__$1 = state_42074;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42074__$1,(2),inst_42064);
} else {
if((state_val_42075 === (2))){
var inst_42066 = (state_42074[(2)]);
var inst_42067 = cljs.core.async.timeout.call(null,(400));
var state_42074__$1 = (function (){var statearr_42076 = state_42074;
(statearr_42076[(7)] = inst_42066);

return statearr_42076;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42074__$1,(3),inst_42067);
} else {
if((state_val_42075 === (3))){
var inst_42069 = (state_42074[(2)]);
var inst_42070 = figwheel.client.heads_up.clear.call(null);
var state_42074__$1 = (function (){var statearr_42077 = state_42074;
(statearr_42077[(8)] = inst_42069);

return statearr_42077;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42074__$1,(4),inst_42070);
} else {
if((state_val_42075 === (4))){
var inst_42072 = (state_42074[(2)]);
var state_42074__$1 = state_42074;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42074__$1,inst_42072);
} else {
return null;
}
}
}
}
});})(c__22319__auto__))
;
return ((function (switch__22298__auto__,c__22319__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__22299__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__22299__auto____0 = (function (){
var statearr_42081 = [null,null,null,null,null,null,null,null,null];
(statearr_42081[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__22299__auto__);

(statearr_42081[(1)] = (1));

return statearr_42081;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__22299__auto____1 = (function (state_42074){
while(true){
var ret_value__22300__auto__ = (function (){try{while(true){
var result__22301__auto__ = switch__22298__auto__.call(null,state_42074);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22301__auto__;
}
break;
}
}catch (e42082){if((e42082 instanceof Object)){
var ex__22302__auto__ = e42082;
var statearr_42083_42085 = state_42074;
(statearr_42083_42085[(5)] = ex__22302__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42074);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42082;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42086 = state_42074;
state_42074 = G__42086;
continue;
} else {
return ret_value__22300__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__22299__auto__ = function(state_42074){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__22299__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__22299__auto____1.call(this,state_42074);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__22299__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__22299__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__22299__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__22299__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__22299__auto__;
})()
;})(switch__22298__auto__,c__22319__auto__))
})();
var state__22321__auto__ = (function (){var statearr_42084 = f__22320__auto__.call(null);
(statearr_42084[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22319__auto__);

return statearr_42084;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22321__auto__);
});})(c__22319__auto__))
);

return c__22319__auto__;
});
figwheel.client.heads_up.cljs_logo_svg = "<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' style='position:absolute; top:9px; left: 10px;' version='1.1'\n  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'\n  viewBox='0 0 428 428' enable-background='new 0 0 428 428' xml:space='preserve'>\n<circle fill='#fff' cx='213' cy='214' r='213' />\n<g>\n<path fill='#96CA4B' d='M122,266.6c-12.7,0-22.3-3.7-28.9-11.1c-6.6-7.4-9.9-18-9.9-31.8c0-14.1,3.4-24.9,10.3-32.5\n  s16.8-11.4,29.9-11.4c8.8,0,16.8,1.6,23.8,4.9l-5.4,14.3c-7.5-2.9-13.7-4.4-18.6-4.4c-14.5,0-21.7,9.6-21.7,28.8\n  c0,9.4,1.8,16.4,5.4,21.2c3.6,4.7,8.9,7.1,15.9,7.1c7.9,0,15.4-2,22.5-5.9v15.5c-3.2,1.9-6.6,3.2-10.2,4\n  C131.5,266.2,127.1,266.6,122,266.6z'/>\n<path fill='#96CA4B' d='M194.4,265.1h-17.8V147.3h17.8V265.1z'/>\n<path fill='#5F7FBF' d='M222.9,302.3c-5.3,0-9.8-0.6-13.3-1.9v-14.1c3.4,0.9,6.9,1.4,10.5,1.4c7.6,0,11.4-4.3,11.4-12.9v-93.5h17.8\n  v94.7c0,8.6-2.3,15.2-6.8,19.6C237.9,300.1,231.4,302.3,222.9,302.3z M230.4,159.2c0-3.2,0.9-5.6,2.6-7.3c1.7-1.7,4.2-2.6,7.5-2.6\n  c3.1,0,5.6,0.9,7.3,2.6c1.7,1.7,2.6,4.2,2.6,7.3c0,3-0.9,5.4-2.6,7.2c-1.7,1.7-4.2,2.6-7.3,2.6c-3.2,0-5.7-0.9-7.5-2.6\n  C231.2,164.6,230.4,162.2,230.4,159.2z'/>\n<path fill='#5F7FBF' d='M342.5,241.3c0,8.2-3,14.4-8.9,18.8c-6,4.4-14.5,6.5-25.6,6.5c-11.2,0-20.1-1.7-26.9-5.1v-15.4\n  c9.8,4.5,19,6.8,27.5,6.8c10.9,0,16.4-3.3,16.4-9.9c0-2.1-0.6-3.9-1.8-5.3c-1.2-1.4-3.2-2.9-6-4.4c-2.8-1.5-6.6-3.2-11.6-5.1\n  c-9.6-3.7-16.2-7.5-19.6-11.2c-3.4-3.7-5.1-8.6-5.1-14.5c0-7.2,2.9-12.7,8.7-16.7c5.8-4,13.6-5.9,23.6-5.9c9.8,0,19.1,2,27.9,6\n  l-5.8,13.4c-9-3.7-16.6-5.6-22.8-5.6c-9.4,0-14.1,2.7-14.1,8c0,2.6,1.2,4.8,3.7,6.7c2.4,1.8,7.8,4.3,16,7.5\n  c6.9,2.7,11.9,5.1,15.1,7.3c3.1,2.2,5.4,4.8,7,7.7C341.7,233.7,342.5,237.2,342.5,241.3z'/>\n</g>\n<path fill='#96CA4B' stroke='#96CA4B' stroke-width='6' stroke-miterlimit='10' d='M197,392.7c-91.2-8.1-163-85-163-178.3\n  S105.8,44.3,197,36.2V16.1c-102.3,8.2-183,94-183,198.4s80.7,190.2,183,198.4V392.7z'/>\n<path fill='#5F7FBF' stroke='#5F7FBF' stroke-width='6' stroke-miterlimit='10' d='M229,16.1v20.1c91.2,8.1,163,85,163,178.3\n  s-71.8,170.2-163,178.3v20.1c102.3-8.2,183-94,183-198.4S331.3,24.3,229,16.1z'/>\n</svg>";

//# sourceMappingURL=heads_up.js.map