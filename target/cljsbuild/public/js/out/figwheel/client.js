// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__42089 = cljs.core._EQ_;
var expr__42090 = (function (){var or__19819__auto__ = (function (){try{return localStorage.getItem("figwheel_autoload");
}catch (e42093){if((e42093 instanceof Error)){
var e = e42093;
return false;
} else {
throw e42093;

}
}})();
if(cljs.core.truth_(or__19819__auto__)){
return or__19819__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__42089.call(null,"true",expr__42090))){
return true;
} else {
if(cljs.core.truth_(pred__42089.call(null,"false",expr__42090))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__42090)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
try{localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
}catch (e42095){if((e42095 instanceof Error)){
var e = e42095;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e42095;

}
}} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.repl_print_fn = (function figwheel$client$repl_print_fn(var_args){
var args__20884__auto__ = [];
var len__20877__auto___42097 = arguments.length;
var i__20878__auto___42098 = (0);
while(true){
if((i__20878__auto___42098 < len__20877__auto___42097)){
args__20884__auto__.push((arguments[i__20878__auto___42098]));

var G__42099 = (i__20878__auto___42098 + (1));
i__20878__auto___42098 = G__42099;
continue;
} else {
}
break;
}

var argseq__20885__auto__ = ((((0) < args__20884__auto__.length))?(new cljs.core.IndexedSeq(args__20884__auto__.slice((0)),(0))):null);
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__20885__auto__);
});

figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));

return null;
});

figwheel.client.repl_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_print_fn.cljs$lang$applyTo = (function (seq42096){
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42096));
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__42100){
var map__42103 = p__42100;
var map__42103__$1 = ((((!((map__42103 == null)))?((((map__42103.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42103.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42103):map__42103);
var message = cljs.core.get.call(null,map__42103__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__42103__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__19819__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__19819__auto__)){
return or__19819__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__19807__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__19807__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__19807__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__22319__auto___42265 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22319__auto___42265,ch){
return (function (){
var f__22320__auto__ = (function (){var switch__22298__auto__ = ((function (c__22319__auto___42265,ch){
return (function (state_42234){
var state_val_42235 = (state_42234[(1)]);
if((state_val_42235 === (7))){
var inst_42230 = (state_42234[(2)]);
var state_42234__$1 = state_42234;
var statearr_42236_42266 = state_42234__$1;
(statearr_42236_42266[(2)] = inst_42230);

(statearr_42236_42266[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42235 === (1))){
var state_42234__$1 = state_42234;
var statearr_42237_42267 = state_42234__$1;
(statearr_42237_42267[(2)] = null);

(statearr_42237_42267[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42235 === (4))){
var inst_42187 = (state_42234[(7)]);
var inst_42187__$1 = (state_42234[(2)]);
var state_42234__$1 = (function (){var statearr_42238 = state_42234;
(statearr_42238[(7)] = inst_42187__$1);

return statearr_42238;
})();
if(cljs.core.truth_(inst_42187__$1)){
var statearr_42239_42268 = state_42234__$1;
(statearr_42239_42268[(1)] = (5));

} else {
var statearr_42240_42269 = state_42234__$1;
(statearr_42240_42269[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42235 === (15))){
var inst_42194 = (state_42234[(8)]);
var inst_42209 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_42194);
var inst_42210 = cljs.core.first.call(null,inst_42209);
var inst_42211 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_42210);
var inst_42212 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_42211)].join('');
var inst_42213 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_42212);
var state_42234__$1 = state_42234;
var statearr_42241_42270 = state_42234__$1;
(statearr_42241_42270[(2)] = inst_42213);

(statearr_42241_42270[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42235 === (13))){
var inst_42218 = (state_42234[(2)]);
var state_42234__$1 = state_42234;
var statearr_42242_42271 = state_42234__$1;
(statearr_42242_42271[(2)] = inst_42218);

(statearr_42242_42271[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42235 === (6))){
var state_42234__$1 = state_42234;
var statearr_42243_42272 = state_42234__$1;
(statearr_42243_42272[(2)] = null);

(statearr_42243_42272[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42235 === (17))){
var inst_42216 = (state_42234[(2)]);
var state_42234__$1 = state_42234;
var statearr_42244_42273 = state_42234__$1;
(statearr_42244_42273[(2)] = inst_42216);

(statearr_42244_42273[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42235 === (3))){
var inst_42232 = (state_42234[(2)]);
var state_42234__$1 = state_42234;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42234__$1,inst_42232);
} else {
if((state_val_42235 === (12))){
var inst_42193 = (state_42234[(9)]);
var inst_42207 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_42193,opts);
var state_42234__$1 = state_42234;
if(cljs.core.truth_(inst_42207)){
var statearr_42245_42274 = state_42234__$1;
(statearr_42245_42274[(1)] = (15));

} else {
var statearr_42246_42275 = state_42234__$1;
(statearr_42246_42275[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42235 === (2))){
var state_42234__$1 = state_42234;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42234__$1,(4),ch);
} else {
if((state_val_42235 === (11))){
var inst_42194 = (state_42234[(8)]);
var inst_42199 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_42200 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_42194);
var inst_42201 = cljs.core.async.timeout.call(null,(1000));
var inst_42202 = [inst_42200,inst_42201];
var inst_42203 = (new cljs.core.PersistentVector(null,2,(5),inst_42199,inst_42202,null));
var state_42234__$1 = state_42234;
return cljs.core.async.ioc_alts_BANG_.call(null,state_42234__$1,(14),inst_42203);
} else {
if((state_val_42235 === (9))){
var inst_42194 = (state_42234[(8)]);
var inst_42220 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_42221 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_42194);
var inst_42222 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_42221);
var inst_42223 = [cljs.core.str("Not loading: "),cljs.core.str(inst_42222)].join('');
var inst_42224 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_42223);
var state_42234__$1 = (function (){var statearr_42247 = state_42234;
(statearr_42247[(10)] = inst_42220);

return statearr_42247;
})();
var statearr_42248_42276 = state_42234__$1;
(statearr_42248_42276[(2)] = inst_42224);

(statearr_42248_42276[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42235 === (5))){
var inst_42187 = (state_42234[(7)]);
var inst_42189 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_42190 = (new cljs.core.PersistentArrayMap(null,2,inst_42189,null));
var inst_42191 = (new cljs.core.PersistentHashSet(null,inst_42190,null));
var inst_42192 = figwheel.client.focus_msgs.call(null,inst_42191,inst_42187);
var inst_42193 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_42192);
var inst_42194 = cljs.core.first.call(null,inst_42192);
var inst_42195 = figwheel.client.autoload_QMARK_.call(null);
var state_42234__$1 = (function (){var statearr_42249 = state_42234;
(statearr_42249[(9)] = inst_42193);

(statearr_42249[(8)] = inst_42194);

return statearr_42249;
})();
if(cljs.core.truth_(inst_42195)){
var statearr_42250_42277 = state_42234__$1;
(statearr_42250_42277[(1)] = (8));

} else {
var statearr_42251_42278 = state_42234__$1;
(statearr_42251_42278[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42235 === (14))){
var inst_42205 = (state_42234[(2)]);
var state_42234__$1 = state_42234;
var statearr_42252_42279 = state_42234__$1;
(statearr_42252_42279[(2)] = inst_42205);

(statearr_42252_42279[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42235 === (16))){
var state_42234__$1 = state_42234;
var statearr_42253_42280 = state_42234__$1;
(statearr_42253_42280[(2)] = null);

(statearr_42253_42280[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42235 === (10))){
var inst_42226 = (state_42234[(2)]);
var state_42234__$1 = (function (){var statearr_42254 = state_42234;
(statearr_42254[(11)] = inst_42226);

return statearr_42254;
})();
var statearr_42255_42281 = state_42234__$1;
(statearr_42255_42281[(2)] = null);

(statearr_42255_42281[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42235 === (8))){
var inst_42193 = (state_42234[(9)]);
var inst_42197 = figwheel.client.reload_file_state_QMARK_.call(null,inst_42193,opts);
var state_42234__$1 = state_42234;
if(cljs.core.truth_(inst_42197)){
var statearr_42256_42282 = state_42234__$1;
(statearr_42256_42282[(1)] = (11));

} else {
var statearr_42257_42283 = state_42234__$1;
(statearr_42257_42283[(1)] = (12));

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
});})(c__22319__auto___42265,ch))
;
return ((function (switch__22298__auto__,c__22319__auto___42265,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__22299__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__22299__auto____0 = (function (){
var statearr_42261 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42261[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__22299__auto__);

(statearr_42261[(1)] = (1));

return statearr_42261;
});
var figwheel$client$file_reloader_plugin_$_state_machine__22299__auto____1 = (function (state_42234){
while(true){
var ret_value__22300__auto__ = (function (){try{while(true){
var result__22301__auto__ = switch__22298__auto__.call(null,state_42234);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22301__auto__;
}
break;
}
}catch (e42262){if((e42262 instanceof Object)){
var ex__22302__auto__ = e42262;
var statearr_42263_42284 = state_42234;
(statearr_42263_42284[(5)] = ex__22302__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42234);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42262;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42285 = state_42234;
state_42234 = G__42285;
continue;
} else {
return ret_value__22300__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__22299__auto__ = function(state_42234){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__22299__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__22299__auto____1.call(this,state_42234);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__22299__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__22299__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__22299__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__22299__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__22299__auto__;
})()
;})(switch__22298__auto__,c__22319__auto___42265,ch))
})();
var state__22321__auto__ = (function (){var statearr_42264 = f__22320__auto__.call(null);
(statearr_42264[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22319__auto___42265);

return statearr_42264;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22321__auto__);
});})(c__22319__auto___42265,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__42286_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__42286_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_42293 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_42293){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_42291 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_42292 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),figwheel.client.utils.eval_helper.call(null,code,opts)], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_42292;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_42291;
}}catch (e42290){if((e42290 instanceof Error)){
var e = e42290;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_42293], null));
} else {
var e = e42290;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_42293))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__42294){
var map__42301 = p__42294;
var map__42301__$1 = ((((!((map__42301 == null)))?((((map__42301.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42301.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42301):map__42301);
var opts = map__42301__$1;
var build_id = cljs.core.get.call(null,map__42301__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__42301,map__42301__$1,opts,build_id){
return (function (p__42303){
var vec__42304 = p__42303;
var map__42305 = cljs.core.nth.call(null,vec__42304,(0),null);
var map__42305__$1 = ((((!((map__42305 == null)))?((((map__42305.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42305.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42305):map__42305);
var msg = map__42305__$1;
var msg_name = cljs.core.get.call(null,map__42305__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__42304,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__42304,map__42305,map__42305__$1,msg,msg_name,_,map__42301,map__42301__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__42304,map__42305,map__42305__$1,msg,msg_name,_,map__42301,map__42301__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__42301,map__42301__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__42311){
var vec__42312 = p__42311;
var map__42313 = cljs.core.nth.call(null,vec__42312,(0),null);
var map__42313__$1 = ((((!((map__42313 == null)))?((((map__42313.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42313.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42313):map__42313);
var msg = map__42313__$1;
var msg_name = cljs.core.get.call(null,map__42313__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__42312,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__42315){
var map__42325 = p__42315;
var map__42325__$1 = ((((!((map__42325 == null)))?((((map__42325.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42325.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42325):map__42325);
var on_compile_warning = cljs.core.get.call(null,map__42325__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__42325__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__42325,map__42325__$1,on_compile_warning,on_compile_fail){
return (function (p__42327){
var vec__42328 = p__42327;
var map__42329 = cljs.core.nth.call(null,vec__42328,(0),null);
var map__42329__$1 = ((((!((map__42329 == null)))?((((map__42329.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42329.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42329):map__42329);
var msg = map__42329__$1;
var msg_name = cljs.core.get.call(null,map__42329__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__42328,(1));
var pred__42331 = cljs.core._EQ_;
var expr__42332 = msg_name;
if(cljs.core.truth_(pred__42331.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__42332))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__42331.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__42332))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__42325,map__42325__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__22319__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22319__auto__,msg_hist,msg_names,msg){
return (function (){
var f__22320__auto__ = (function (){var switch__22298__auto__ = ((function (c__22319__auto__,msg_hist,msg_names,msg){
return (function (state_42548){
var state_val_42549 = (state_42548[(1)]);
if((state_val_42549 === (7))){
var inst_42472 = (state_42548[(2)]);
var state_42548__$1 = state_42548;
if(cljs.core.truth_(inst_42472)){
var statearr_42550_42596 = state_42548__$1;
(statearr_42550_42596[(1)] = (8));

} else {
var statearr_42551_42597 = state_42548__$1;
(statearr_42551_42597[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42549 === (20))){
var inst_42542 = (state_42548[(2)]);
var state_42548__$1 = state_42548;
var statearr_42552_42598 = state_42548__$1;
(statearr_42552_42598[(2)] = inst_42542);

(statearr_42552_42598[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42549 === (27))){
var inst_42538 = (state_42548[(2)]);
var state_42548__$1 = state_42548;
var statearr_42553_42599 = state_42548__$1;
(statearr_42553_42599[(2)] = inst_42538);

(statearr_42553_42599[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42549 === (1))){
var inst_42465 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_42548__$1 = state_42548;
if(cljs.core.truth_(inst_42465)){
var statearr_42554_42600 = state_42548__$1;
(statearr_42554_42600[(1)] = (2));

} else {
var statearr_42555_42601 = state_42548__$1;
(statearr_42555_42601[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42549 === (24))){
var inst_42540 = (state_42548[(2)]);
var state_42548__$1 = state_42548;
var statearr_42556_42602 = state_42548__$1;
(statearr_42556_42602[(2)] = inst_42540);

(statearr_42556_42602[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42549 === (4))){
var inst_42546 = (state_42548[(2)]);
var state_42548__$1 = state_42548;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42548__$1,inst_42546);
} else {
if((state_val_42549 === (15))){
var inst_42544 = (state_42548[(2)]);
var state_42548__$1 = state_42548;
var statearr_42557_42603 = state_42548__$1;
(statearr_42557_42603[(2)] = inst_42544);

(statearr_42557_42603[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42549 === (21))){
var inst_42503 = (state_42548[(2)]);
var state_42548__$1 = state_42548;
var statearr_42558_42604 = state_42548__$1;
(statearr_42558_42604[(2)] = inst_42503);

(statearr_42558_42604[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42549 === (31))){
var inst_42527 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_42548__$1 = state_42548;
if(cljs.core.truth_(inst_42527)){
var statearr_42559_42605 = state_42548__$1;
(statearr_42559_42605[(1)] = (34));

} else {
var statearr_42560_42606 = state_42548__$1;
(statearr_42560_42606[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42549 === (32))){
var inst_42536 = (state_42548[(2)]);
var state_42548__$1 = state_42548;
var statearr_42561_42607 = state_42548__$1;
(statearr_42561_42607[(2)] = inst_42536);

(statearr_42561_42607[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42549 === (33))){
var inst_42525 = (state_42548[(2)]);
var state_42548__$1 = state_42548;
var statearr_42562_42608 = state_42548__$1;
(statearr_42562_42608[(2)] = inst_42525);

(statearr_42562_42608[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42549 === (13))){
var inst_42486 = figwheel.client.heads_up.clear.call(null);
var state_42548__$1 = state_42548;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42548__$1,(16),inst_42486);
} else {
if((state_val_42549 === (22))){
var inst_42507 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_42508 = figwheel.client.heads_up.append_message.call(null,inst_42507);
var state_42548__$1 = state_42548;
var statearr_42563_42609 = state_42548__$1;
(statearr_42563_42609[(2)] = inst_42508);

(statearr_42563_42609[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42549 === (36))){
var inst_42534 = (state_42548[(2)]);
var state_42548__$1 = state_42548;
var statearr_42564_42610 = state_42548__$1;
(statearr_42564_42610[(2)] = inst_42534);

(statearr_42564_42610[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42549 === (29))){
var inst_42518 = (state_42548[(2)]);
var state_42548__$1 = state_42548;
var statearr_42565_42611 = state_42548__$1;
(statearr_42565_42611[(2)] = inst_42518);

(statearr_42565_42611[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42549 === (6))){
var inst_42467 = (state_42548[(7)]);
var state_42548__$1 = state_42548;
var statearr_42566_42612 = state_42548__$1;
(statearr_42566_42612[(2)] = inst_42467);

(statearr_42566_42612[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42549 === (28))){
var inst_42514 = (state_42548[(2)]);
var inst_42515 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_42516 = figwheel.client.heads_up.display_warning.call(null,inst_42515);
var state_42548__$1 = (function (){var statearr_42567 = state_42548;
(statearr_42567[(8)] = inst_42514);

return statearr_42567;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42548__$1,(29),inst_42516);
} else {
if((state_val_42549 === (25))){
var inst_42512 = figwheel.client.heads_up.clear.call(null);
var state_42548__$1 = state_42548;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42548__$1,(28),inst_42512);
} else {
if((state_val_42549 === (34))){
var inst_42529 = figwheel.client.heads_up.flash_loaded.call(null);
var state_42548__$1 = state_42548;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42548__$1,(37),inst_42529);
} else {
if((state_val_42549 === (17))){
var inst_42494 = (state_42548[(2)]);
var state_42548__$1 = state_42548;
var statearr_42568_42613 = state_42548__$1;
(statearr_42568_42613[(2)] = inst_42494);

(statearr_42568_42613[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42549 === (3))){
var inst_42484 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_42548__$1 = state_42548;
if(cljs.core.truth_(inst_42484)){
var statearr_42569_42614 = state_42548__$1;
(statearr_42569_42614[(1)] = (13));

} else {
var statearr_42570_42615 = state_42548__$1;
(statearr_42570_42615[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42549 === (12))){
var inst_42480 = (state_42548[(2)]);
var state_42548__$1 = state_42548;
var statearr_42571_42616 = state_42548__$1;
(statearr_42571_42616[(2)] = inst_42480);

(statearr_42571_42616[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42549 === (2))){
var inst_42467 = (state_42548[(7)]);
var inst_42467__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_42548__$1 = (function (){var statearr_42572 = state_42548;
(statearr_42572[(7)] = inst_42467__$1);

return statearr_42572;
})();
if(cljs.core.truth_(inst_42467__$1)){
var statearr_42573_42617 = state_42548__$1;
(statearr_42573_42617[(1)] = (5));

} else {
var statearr_42574_42618 = state_42548__$1;
(statearr_42574_42618[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42549 === (23))){
var inst_42510 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_42548__$1 = state_42548;
if(cljs.core.truth_(inst_42510)){
var statearr_42575_42619 = state_42548__$1;
(statearr_42575_42619[(1)] = (25));

} else {
var statearr_42576_42620 = state_42548__$1;
(statearr_42576_42620[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42549 === (35))){
var state_42548__$1 = state_42548;
var statearr_42577_42621 = state_42548__$1;
(statearr_42577_42621[(2)] = null);

(statearr_42577_42621[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42549 === (19))){
var inst_42505 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_42548__$1 = state_42548;
if(cljs.core.truth_(inst_42505)){
var statearr_42578_42622 = state_42548__$1;
(statearr_42578_42622[(1)] = (22));

} else {
var statearr_42579_42623 = state_42548__$1;
(statearr_42579_42623[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42549 === (11))){
var inst_42476 = (state_42548[(2)]);
var state_42548__$1 = state_42548;
var statearr_42580_42624 = state_42548__$1;
(statearr_42580_42624[(2)] = inst_42476);

(statearr_42580_42624[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42549 === (9))){
var inst_42478 = figwheel.client.heads_up.clear.call(null);
var state_42548__$1 = state_42548;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42548__$1,(12),inst_42478);
} else {
if((state_val_42549 === (5))){
var inst_42469 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_42548__$1 = state_42548;
var statearr_42581_42625 = state_42548__$1;
(statearr_42581_42625[(2)] = inst_42469);

(statearr_42581_42625[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42549 === (14))){
var inst_42496 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_42548__$1 = state_42548;
if(cljs.core.truth_(inst_42496)){
var statearr_42582_42626 = state_42548__$1;
(statearr_42582_42626[(1)] = (18));

} else {
var statearr_42583_42627 = state_42548__$1;
(statearr_42583_42627[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42549 === (26))){
var inst_42520 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_42548__$1 = state_42548;
if(cljs.core.truth_(inst_42520)){
var statearr_42584_42628 = state_42548__$1;
(statearr_42584_42628[(1)] = (30));

} else {
var statearr_42585_42629 = state_42548__$1;
(statearr_42585_42629[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42549 === (16))){
var inst_42488 = (state_42548[(2)]);
var inst_42489 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_42490 = figwheel.client.format_messages.call(null,inst_42489);
var inst_42491 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_42492 = figwheel.client.heads_up.display_error.call(null,inst_42490,inst_42491);
var state_42548__$1 = (function (){var statearr_42586 = state_42548;
(statearr_42586[(9)] = inst_42488);

return statearr_42586;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42548__$1,(17),inst_42492);
} else {
if((state_val_42549 === (30))){
var inst_42522 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_42523 = figwheel.client.heads_up.display_warning.call(null,inst_42522);
var state_42548__$1 = state_42548;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42548__$1,(33),inst_42523);
} else {
if((state_val_42549 === (10))){
var inst_42482 = (state_42548[(2)]);
var state_42548__$1 = state_42548;
var statearr_42587_42630 = state_42548__$1;
(statearr_42587_42630[(2)] = inst_42482);

(statearr_42587_42630[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42549 === (18))){
var inst_42498 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_42499 = figwheel.client.format_messages.call(null,inst_42498);
var inst_42500 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_42501 = figwheel.client.heads_up.display_error.call(null,inst_42499,inst_42500);
var state_42548__$1 = state_42548;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42548__$1,(21),inst_42501);
} else {
if((state_val_42549 === (37))){
var inst_42531 = (state_42548[(2)]);
var state_42548__$1 = state_42548;
var statearr_42588_42631 = state_42548__$1;
(statearr_42588_42631[(2)] = inst_42531);

(statearr_42588_42631[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42549 === (8))){
var inst_42474 = figwheel.client.heads_up.flash_loaded.call(null);
var state_42548__$1 = state_42548;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42548__$1,(11),inst_42474);
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
});})(c__22319__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__22298__auto__,c__22319__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22299__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22299__auto____0 = (function (){
var statearr_42592 = [null,null,null,null,null,null,null,null,null,null];
(statearr_42592[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22299__auto__);

(statearr_42592[(1)] = (1));

return statearr_42592;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22299__auto____1 = (function (state_42548){
while(true){
var ret_value__22300__auto__ = (function (){try{while(true){
var result__22301__auto__ = switch__22298__auto__.call(null,state_42548);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22301__auto__;
}
break;
}
}catch (e42593){if((e42593 instanceof Object)){
var ex__22302__auto__ = e42593;
var statearr_42594_42632 = state_42548;
(statearr_42594_42632[(5)] = ex__22302__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42548);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42593;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42633 = state_42548;
state_42548 = G__42633;
continue;
} else {
return ret_value__22300__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22299__auto__ = function(state_42548){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22299__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22299__auto____1.call(this,state_42548);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22299__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22299__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22299__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22299__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22299__auto__;
})()
;})(switch__22298__auto__,c__22319__auto__,msg_hist,msg_names,msg))
})();
var state__22321__auto__ = (function (){var statearr_42595 = f__22320__auto__.call(null);
(statearr_42595[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22319__auto__);

return statearr_42595;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22321__auto__);
});})(c__22319__auto__,msg_hist,msg_names,msg))
);

return c__22319__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__22319__auto___42696 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22319__auto___42696,ch){
return (function (){
var f__22320__auto__ = (function (){var switch__22298__auto__ = ((function (c__22319__auto___42696,ch){
return (function (state_42679){
var state_val_42680 = (state_42679[(1)]);
if((state_val_42680 === (1))){
var state_42679__$1 = state_42679;
var statearr_42681_42697 = state_42679__$1;
(statearr_42681_42697[(2)] = null);

(statearr_42681_42697[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42680 === (2))){
var state_42679__$1 = state_42679;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42679__$1,(4),ch);
} else {
if((state_val_42680 === (3))){
var inst_42677 = (state_42679[(2)]);
var state_42679__$1 = state_42679;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42679__$1,inst_42677);
} else {
if((state_val_42680 === (4))){
var inst_42667 = (state_42679[(7)]);
var inst_42667__$1 = (state_42679[(2)]);
var state_42679__$1 = (function (){var statearr_42682 = state_42679;
(statearr_42682[(7)] = inst_42667__$1);

return statearr_42682;
})();
if(cljs.core.truth_(inst_42667__$1)){
var statearr_42683_42698 = state_42679__$1;
(statearr_42683_42698[(1)] = (5));

} else {
var statearr_42684_42699 = state_42679__$1;
(statearr_42684_42699[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42680 === (5))){
var inst_42667 = (state_42679[(7)]);
var inst_42669 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_42667);
var state_42679__$1 = state_42679;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42679__$1,(8),inst_42669);
} else {
if((state_val_42680 === (6))){
var state_42679__$1 = state_42679;
var statearr_42685_42700 = state_42679__$1;
(statearr_42685_42700[(2)] = null);

(statearr_42685_42700[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42680 === (7))){
var inst_42675 = (state_42679[(2)]);
var state_42679__$1 = state_42679;
var statearr_42686_42701 = state_42679__$1;
(statearr_42686_42701[(2)] = inst_42675);

(statearr_42686_42701[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42680 === (8))){
var inst_42671 = (state_42679[(2)]);
var state_42679__$1 = (function (){var statearr_42687 = state_42679;
(statearr_42687[(8)] = inst_42671);

return statearr_42687;
})();
var statearr_42688_42702 = state_42679__$1;
(statearr_42688_42702[(2)] = null);

(statearr_42688_42702[(1)] = (2));


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
});})(c__22319__auto___42696,ch))
;
return ((function (switch__22298__auto__,c__22319__auto___42696,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__22299__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__22299__auto____0 = (function (){
var statearr_42692 = [null,null,null,null,null,null,null,null,null];
(statearr_42692[(0)] = figwheel$client$heads_up_plugin_$_state_machine__22299__auto__);

(statearr_42692[(1)] = (1));

return statearr_42692;
});
var figwheel$client$heads_up_plugin_$_state_machine__22299__auto____1 = (function (state_42679){
while(true){
var ret_value__22300__auto__ = (function (){try{while(true){
var result__22301__auto__ = switch__22298__auto__.call(null,state_42679);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22301__auto__;
}
break;
}
}catch (e42693){if((e42693 instanceof Object)){
var ex__22302__auto__ = e42693;
var statearr_42694_42703 = state_42679;
(statearr_42694_42703[(5)] = ex__22302__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42679);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42693;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42704 = state_42679;
state_42679 = G__42704;
continue;
} else {
return ret_value__22300__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__22299__auto__ = function(state_42679){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__22299__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__22299__auto____1.call(this,state_42679);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__22299__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__22299__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__22299__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__22299__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__22299__auto__;
})()
;})(switch__22298__auto__,c__22319__auto___42696,ch))
})();
var state__22321__auto__ = (function (){var statearr_42695 = f__22320__auto__.call(null);
(statearr_42695[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22319__auto___42696);

return statearr_42695;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22321__auto__);
});})(c__22319__auto___42696,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__22319__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22319__auto__){
return (function (){
var f__22320__auto__ = (function (){var switch__22298__auto__ = ((function (c__22319__auto__){
return (function (state_42725){
var state_val_42726 = (state_42725[(1)]);
if((state_val_42726 === (1))){
var inst_42720 = cljs.core.async.timeout.call(null,(3000));
var state_42725__$1 = state_42725;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42725__$1,(2),inst_42720);
} else {
if((state_val_42726 === (2))){
var inst_42722 = (state_42725[(2)]);
var inst_42723 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_42725__$1 = (function (){var statearr_42727 = state_42725;
(statearr_42727[(7)] = inst_42722);

return statearr_42727;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42725__$1,inst_42723);
} else {
return null;
}
}
});})(c__22319__auto__))
;
return ((function (switch__22298__auto__,c__22319__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__22299__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__22299__auto____0 = (function (){
var statearr_42731 = [null,null,null,null,null,null,null,null];
(statearr_42731[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__22299__auto__);

(statearr_42731[(1)] = (1));

return statearr_42731;
});
var figwheel$client$enforce_project_plugin_$_state_machine__22299__auto____1 = (function (state_42725){
while(true){
var ret_value__22300__auto__ = (function (){try{while(true){
var result__22301__auto__ = switch__22298__auto__.call(null,state_42725);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22301__auto__;
}
break;
}
}catch (e42732){if((e42732 instanceof Object)){
var ex__22302__auto__ = e42732;
var statearr_42733_42735 = state_42725;
(statearr_42733_42735[(5)] = ex__22302__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42725);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42732;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42736 = state_42725;
state_42725 = G__42736;
continue;
} else {
return ret_value__22300__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__22299__auto__ = function(state_42725){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__22299__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__22299__auto____1.call(this,state_42725);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__22299__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__22299__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__22299__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__22299__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__22299__auto__;
})()
;})(switch__22298__auto__,c__22319__auto__))
})();
var state__22321__auto__ = (function (){var statearr_42734 = f__22320__auto__.call(null);
(statearr_42734[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22319__auto__);

return statearr_42734;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22321__auto__);
});})(c__22319__auto__))
);

return c__22319__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__42737){
var map__42744 = p__42737;
var map__42744__$1 = ((((!((map__42744 == null)))?((((map__42744.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42744.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42744):map__42744);
var ed = map__42744__$1;
var formatted_exception = cljs.core.get.call(null,map__42744__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__42744__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__42744__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__42746_42750 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__42747_42751 = null;
var count__42748_42752 = (0);
var i__42749_42753 = (0);
while(true){
if((i__42749_42753 < count__42748_42752)){
var msg_42754 = cljs.core._nth.call(null,chunk__42747_42751,i__42749_42753);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_42754);

var G__42755 = seq__42746_42750;
var G__42756 = chunk__42747_42751;
var G__42757 = count__42748_42752;
var G__42758 = (i__42749_42753 + (1));
seq__42746_42750 = G__42755;
chunk__42747_42751 = G__42756;
count__42748_42752 = G__42757;
i__42749_42753 = G__42758;
continue;
} else {
var temp__4657__auto___42759 = cljs.core.seq.call(null,seq__42746_42750);
if(temp__4657__auto___42759){
var seq__42746_42760__$1 = temp__4657__auto___42759;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42746_42760__$1)){
var c__20622__auto___42761 = cljs.core.chunk_first.call(null,seq__42746_42760__$1);
var G__42762 = cljs.core.chunk_rest.call(null,seq__42746_42760__$1);
var G__42763 = c__20622__auto___42761;
var G__42764 = cljs.core.count.call(null,c__20622__auto___42761);
var G__42765 = (0);
seq__42746_42750 = G__42762;
chunk__42747_42751 = G__42763;
count__42748_42752 = G__42764;
i__42749_42753 = G__42765;
continue;
} else {
var msg_42766 = cljs.core.first.call(null,seq__42746_42760__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_42766);

var G__42767 = cljs.core.next.call(null,seq__42746_42760__$1);
var G__42768 = null;
var G__42769 = (0);
var G__42770 = (0);
seq__42746_42750 = G__42767;
chunk__42747_42751 = G__42768;
count__42748_42752 = G__42769;
i__42749_42753 = G__42770;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__42771){
var map__42774 = p__42771;
var map__42774__$1 = ((((!((map__42774 == null)))?((((map__42774.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42774.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42774):map__42774);
var w = map__42774__$1;
var message = cljs.core.get.call(null,map__42774__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,true,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__19807__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__19807__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__19807__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__42782 = cljs.core.seq.call(null,plugins);
var chunk__42783 = null;
var count__42784 = (0);
var i__42785 = (0);
while(true){
if((i__42785 < count__42784)){
var vec__42786 = cljs.core._nth.call(null,chunk__42783,i__42785);
var k = cljs.core.nth.call(null,vec__42786,(0),null);
var plugin = cljs.core.nth.call(null,vec__42786,(1),null);
if(cljs.core.truth_(plugin)){
var pl_42788 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__42782,chunk__42783,count__42784,i__42785,pl_42788,vec__42786,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_42788.call(null,msg_hist);
});})(seq__42782,chunk__42783,count__42784,i__42785,pl_42788,vec__42786,k,plugin))
);
} else {
}

var G__42789 = seq__42782;
var G__42790 = chunk__42783;
var G__42791 = count__42784;
var G__42792 = (i__42785 + (1));
seq__42782 = G__42789;
chunk__42783 = G__42790;
count__42784 = G__42791;
i__42785 = G__42792;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__42782);
if(temp__4657__auto__){
var seq__42782__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42782__$1)){
var c__20622__auto__ = cljs.core.chunk_first.call(null,seq__42782__$1);
var G__42793 = cljs.core.chunk_rest.call(null,seq__42782__$1);
var G__42794 = c__20622__auto__;
var G__42795 = cljs.core.count.call(null,c__20622__auto__);
var G__42796 = (0);
seq__42782 = G__42793;
chunk__42783 = G__42794;
count__42784 = G__42795;
i__42785 = G__42796;
continue;
} else {
var vec__42787 = cljs.core.first.call(null,seq__42782__$1);
var k = cljs.core.nth.call(null,vec__42787,(0),null);
var plugin = cljs.core.nth.call(null,vec__42787,(1),null);
if(cljs.core.truth_(plugin)){
var pl_42797 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__42782,chunk__42783,count__42784,i__42785,pl_42797,vec__42787,k,plugin,seq__42782__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_42797.call(null,msg_hist);
});})(seq__42782,chunk__42783,count__42784,i__42785,pl_42797,vec__42787,k,plugin,seq__42782__$1,temp__4657__auto__))
);
} else {
}

var G__42798 = cljs.core.next.call(null,seq__42782__$1);
var G__42799 = null;
var G__42800 = (0);
var G__42801 = (0);
seq__42782 = G__42798;
chunk__42783 = G__42799;
count__42784 = G__42800;
i__42785 = G__42801;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args42802 = [];
var len__20877__auto___42805 = arguments.length;
var i__20878__auto___42806 = (0);
while(true){
if((i__20878__auto___42806 < len__20877__auto___42805)){
args42802.push((arguments[i__20878__auto___42806]));

var G__42807 = (i__20878__auto___42806 + (1));
i__20878__auto___42806 = G__42807;
continue;
} else {
}
break;
}

var G__42804 = args42802.length;
switch (G__42804) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42802.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__20884__auto__ = [];
var len__20877__auto___42813 = arguments.length;
var i__20878__auto___42814 = (0);
while(true){
if((i__20878__auto___42814 < len__20877__auto___42813)){
args__20884__auto__.push((arguments[i__20878__auto___42814]));

var G__42815 = (i__20878__auto___42814 + (1));
i__20878__auto___42814 = G__42815;
continue;
} else {
}
break;
}

var argseq__20885__auto__ = ((((0) < args__20884__auto__.length))?(new cljs.core.IndexedSeq(args__20884__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__20885__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__42810){
var map__42811 = p__42810;
var map__42811__$1 = ((((!((map__42811 == null)))?((((map__42811.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42811.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42811):map__42811);
var opts = map__42811__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq42809){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42809));
});

//# sourceMappingURL=client.js.map