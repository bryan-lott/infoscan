// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args37523 = [];
var len__20877__auto___37529 = arguments.length;
var i__20878__auto___37530 = (0);
while(true){
if((i__20878__auto___37530 < len__20877__auto___37529)){
args37523.push((arguments[i__20878__auto___37530]));

var G__37531 = (i__20878__auto___37530 + (1));
i__20878__auto___37530 = G__37531;
continue;
} else {
}
break;
}

var G__37525 = args37523.length;
switch (G__37525) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37523.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async37526 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37526 = (function (f,blockable,meta37527){
this.f = f;
this.blockable = blockable;
this.meta37527 = meta37527;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async37526.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37528,meta37527__$1){
var self__ = this;
var _37528__$1 = this;
return (new cljs.core.async.t_cljs$core$async37526(self__.f,self__.blockable,meta37527__$1));
});

cljs.core.async.t_cljs$core$async37526.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37528){
var self__ = this;
var _37528__$1 = this;
return self__.meta37527;
});

cljs.core.async.t_cljs$core$async37526.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async37526.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async37526.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async37526.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async37526.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta37527","meta37527",-1758071447,null)], null);
});

cljs.core.async.t_cljs$core$async37526.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async37526.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37526";

cljs.core.async.t_cljs$core$async37526.cljs$lang$ctorPrWriter = (function (this__20417__auto__,writer__20418__auto__,opt__20419__auto__){
return cljs.core._write.call(null,writer__20418__auto__,"cljs.core.async/t_cljs$core$async37526");
});

cljs.core.async.__GT_t_cljs$core$async37526 = (function cljs$core$async$__GT_t_cljs$core$async37526(f__$1,blockable__$1,meta37527){
return (new cljs.core.async.t_cljs$core$async37526(f__$1,blockable__$1,meta37527));
});

}

return (new cljs.core.async.t_cljs$core$async37526(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args37535 = [];
var len__20877__auto___37538 = arguments.length;
var i__20878__auto___37539 = (0);
while(true){
if((i__20878__auto___37539 < len__20877__auto___37538)){
args37535.push((arguments[i__20878__auto___37539]));

var G__37540 = (i__20878__auto___37539 + (1));
i__20878__auto___37539 = G__37540;
continue;
} else {
}
break;
}

var G__37537 = args37535.length;
switch (G__37537) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37535.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args37542 = [];
var len__20877__auto___37545 = arguments.length;
var i__20878__auto___37546 = (0);
while(true){
if((i__20878__auto___37546 < len__20877__auto___37545)){
args37542.push((arguments[i__20878__auto___37546]));

var G__37547 = (i__20878__auto___37546 + (1));
i__20878__auto___37546 = G__37547;
continue;
} else {
}
break;
}

var G__37544 = args37542.length;
switch (G__37544) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37542.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args37549 = [];
var len__20877__auto___37552 = arguments.length;
var i__20878__auto___37553 = (0);
while(true){
if((i__20878__auto___37553 < len__20877__auto___37552)){
args37549.push((arguments[i__20878__auto___37553]));

var G__37554 = (i__20878__auto___37553 + (1));
i__20878__auto___37553 = G__37554;
continue;
} else {
}
break;
}

var G__37551 = args37549.length;
switch (G__37551) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37549.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_37556 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_37556);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_37556,ret){
return (function (){
return fn1.call(null,val_37556);
});})(val_37556,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args37557 = [];
var len__20877__auto___37560 = arguments.length;
var i__20878__auto___37561 = (0);
while(true){
if((i__20878__auto___37561 < len__20877__auto___37560)){
args37557.push((arguments[i__20878__auto___37561]));

var G__37562 = (i__20878__auto___37561 + (1));
i__20878__auto___37561 = G__37562;
continue;
} else {
}
break;
}

var G__37559 = args37557.length;
switch (G__37559) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37557.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__20722__auto___37564 = n;
var x_37565 = (0);
while(true){
if((x_37565 < n__20722__auto___37564)){
(a[x_37565] = (0));

var G__37566 = (x_37565 + (1));
x_37565 = G__37566;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__37567 = (i + (1));
i = G__37567;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async37571 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37571 = (function (alt_flag,flag,meta37572){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta37572 = meta37572;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async37571.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_37573,meta37572__$1){
var self__ = this;
var _37573__$1 = this;
return (new cljs.core.async.t_cljs$core$async37571(self__.alt_flag,self__.flag,meta37572__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async37571.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_37573){
var self__ = this;
var _37573__$1 = this;
return self__.meta37572;
});})(flag))
;

cljs.core.async.t_cljs$core$async37571.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async37571.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async37571.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async37571.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async37571.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta37572","meta37572",-1213743226,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async37571.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async37571.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37571";

cljs.core.async.t_cljs$core$async37571.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__20417__auto__,writer__20418__auto__,opt__20419__auto__){
return cljs.core._write.call(null,writer__20418__auto__,"cljs.core.async/t_cljs$core$async37571");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async37571 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async37571(alt_flag__$1,flag__$1,meta37572){
return (new cljs.core.async.t_cljs$core$async37571(alt_flag__$1,flag__$1,meta37572));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async37571(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async37577 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37577 = (function (alt_handler,flag,cb,meta37578){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta37578 = meta37578;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async37577.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37579,meta37578__$1){
var self__ = this;
var _37579__$1 = this;
return (new cljs.core.async.t_cljs$core$async37577(self__.alt_handler,self__.flag,self__.cb,meta37578__$1));
});

cljs.core.async.t_cljs$core$async37577.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37579){
var self__ = this;
var _37579__$1 = this;
return self__.meta37578;
});

cljs.core.async.t_cljs$core$async37577.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async37577.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async37577.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async37577.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async37577.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta37578","meta37578",1046873795,null)], null);
});

cljs.core.async.t_cljs$core$async37577.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async37577.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37577";

cljs.core.async.t_cljs$core$async37577.cljs$lang$ctorPrWriter = (function (this__20417__auto__,writer__20418__auto__,opt__20419__auto__){
return cljs.core._write.call(null,writer__20418__auto__,"cljs.core.async/t_cljs$core$async37577");
});

cljs.core.async.__GT_t_cljs$core$async37577 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async37577(alt_handler__$1,flag__$1,cb__$1,meta37578){
return (new cljs.core.async.t_cljs$core$async37577(alt_handler__$1,flag__$1,cb__$1,meta37578));
});

}

return (new cljs.core.async.t_cljs$core$async37577(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__37580_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__37580_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__37581_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__37581_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__19819__auto__ = wport;
if(cljs.core.truth_(or__19819__auto__)){
return or__19819__auto__;
} else {
return port;
}
})()], null));
} else {
var G__37582 = (i + (1));
i = G__37582;
continue;
}
} else {
return null;
}
break;
}
})();
var or__19819__auto__ = ret;
if(cljs.core.truth_(or__19819__auto__)){
return or__19819__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__19807__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__19807__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__19807__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__20884__auto__ = [];
var len__20877__auto___37588 = arguments.length;
var i__20878__auto___37589 = (0);
while(true){
if((i__20878__auto___37589 < len__20877__auto___37588)){
args__20884__auto__.push((arguments[i__20878__auto___37589]));

var G__37590 = (i__20878__auto___37589 + (1));
i__20878__auto___37589 = G__37590;
continue;
} else {
}
break;
}

var argseq__20885__auto__ = ((((1) < args__20884__auto__.length))?(new cljs.core.IndexedSeq(args__20884__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20885__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__37585){
var map__37586 = p__37585;
var map__37586__$1 = ((((!((map__37586 == null)))?((((map__37586.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37586.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37586):map__37586);
var opts = map__37586__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq37583){
var G__37584 = cljs.core.first.call(null,seq37583);
var seq37583__$1 = cljs.core.next.call(null,seq37583);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__37584,seq37583__$1);
});
/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args37591 = [];
var len__20877__auto___37641 = arguments.length;
var i__20878__auto___37642 = (0);
while(true){
if((i__20878__auto___37642 < len__20877__auto___37641)){
args37591.push((arguments[i__20878__auto___37642]));

var G__37643 = (i__20878__auto___37642 + (1));
i__20878__auto___37642 = G__37643;
continue;
} else {
}
break;
}

var G__37593 = args37591.length;
switch (G__37593) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37591.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__22319__auto___37645 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22319__auto___37645){
return (function (){
var f__22320__auto__ = (function (){var switch__22298__auto__ = ((function (c__22319__auto___37645){
return (function (state_37617){
var state_val_37618 = (state_37617[(1)]);
if((state_val_37618 === (7))){
var inst_37613 = (state_37617[(2)]);
var state_37617__$1 = state_37617;
var statearr_37619_37646 = state_37617__$1;
(statearr_37619_37646[(2)] = inst_37613);

(statearr_37619_37646[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37618 === (1))){
var state_37617__$1 = state_37617;
var statearr_37620_37647 = state_37617__$1;
(statearr_37620_37647[(2)] = null);

(statearr_37620_37647[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37618 === (4))){
var inst_37596 = (state_37617[(7)]);
var inst_37596__$1 = (state_37617[(2)]);
var inst_37597 = (inst_37596__$1 == null);
var state_37617__$1 = (function (){var statearr_37621 = state_37617;
(statearr_37621[(7)] = inst_37596__$1);

return statearr_37621;
})();
if(cljs.core.truth_(inst_37597)){
var statearr_37622_37648 = state_37617__$1;
(statearr_37622_37648[(1)] = (5));

} else {
var statearr_37623_37649 = state_37617__$1;
(statearr_37623_37649[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37618 === (13))){
var state_37617__$1 = state_37617;
var statearr_37624_37650 = state_37617__$1;
(statearr_37624_37650[(2)] = null);

(statearr_37624_37650[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37618 === (6))){
var inst_37596 = (state_37617[(7)]);
var state_37617__$1 = state_37617;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37617__$1,(11),to,inst_37596);
} else {
if((state_val_37618 === (3))){
var inst_37615 = (state_37617[(2)]);
var state_37617__$1 = state_37617;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37617__$1,inst_37615);
} else {
if((state_val_37618 === (12))){
var state_37617__$1 = state_37617;
var statearr_37625_37651 = state_37617__$1;
(statearr_37625_37651[(2)] = null);

(statearr_37625_37651[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37618 === (2))){
var state_37617__$1 = state_37617;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37617__$1,(4),from);
} else {
if((state_val_37618 === (11))){
var inst_37606 = (state_37617[(2)]);
var state_37617__$1 = state_37617;
if(cljs.core.truth_(inst_37606)){
var statearr_37626_37652 = state_37617__$1;
(statearr_37626_37652[(1)] = (12));

} else {
var statearr_37627_37653 = state_37617__$1;
(statearr_37627_37653[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37618 === (9))){
var state_37617__$1 = state_37617;
var statearr_37628_37654 = state_37617__$1;
(statearr_37628_37654[(2)] = null);

(statearr_37628_37654[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37618 === (5))){
var state_37617__$1 = state_37617;
if(cljs.core.truth_(close_QMARK_)){
var statearr_37629_37655 = state_37617__$1;
(statearr_37629_37655[(1)] = (8));

} else {
var statearr_37630_37656 = state_37617__$1;
(statearr_37630_37656[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37618 === (14))){
var inst_37611 = (state_37617[(2)]);
var state_37617__$1 = state_37617;
var statearr_37631_37657 = state_37617__$1;
(statearr_37631_37657[(2)] = inst_37611);

(statearr_37631_37657[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37618 === (10))){
var inst_37603 = (state_37617[(2)]);
var state_37617__$1 = state_37617;
var statearr_37632_37658 = state_37617__$1;
(statearr_37632_37658[(2)] = inst_37603);

(statearr_37632_37658[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37618 === (8))){
var inst_37600 = cljs.core.async.close_BANG_.call(null,to);
var state_37617__$1 = state_37617;
var statearr_37633_37659 = state_37617__$1;
(statearr_37633_37659[(2)] = inst_37600);

(statearr_37633_37659[(1)] = (10));


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
});})(c__22319__auto___37645))
;
return ((function (switch__22298__auto__,c__22319__auto___37645){
return (function() {
var cljs$core$async$state_machine__22299__auto__ = null;
var cljs$core$async$state_machine__22299__auto____0 = (function (){
var statearr_37637 = [null,null,null,null,null,null,null,null];
(statearr_37637[(0)] = cljs$core$async$state_machine__22299__auto__);

(statearr_37637[(1)] = (1));

return statearr_37637;
});
var cljs$core$async$state_machine__22299__auto____1 = (function (state_37617){
while(true){
var ret_value__22300__auto__ = (function (){try{while(true){
var result__22301__auto__ = switch__22298__auto__.call(null,state_37617);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22301__auto__;
}
break;
}
}catch (e37638){if((e37638 instanceof Object)){
var ex__22302__auto__ = e37638;
var statearr_37639_37660 = state_37617;
(statearr_37639_37660[(5)] = ex__22302__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37617);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37638;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37661 = state_37617;
state_37617 = G__37661;
continue;
} else {
return ret_value__22300__auto__;
}
break;
}
});
cljs$core$async$state_machine__22299__auto__ = function(state_37617){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22299__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22299__auto____1.call(this,state_37617);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22299__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22299__auto____0;
cljs$core$async$state_machine__22299__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22299__auto____1;
return cljs$core$async$state_machine__22299__auto__;
})()
;})(switch__22298__auto__,c__22319__auto___37645))
})();
var state__22321__auto__ = (function (){var statearr_37640 = f__22320__auto__.call(null);
(statearr_37640[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22319__auto___37645);

return statearr_37640;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22321__auto__);
});})(c__22319__auto___37645))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__37845){
var vec__37846 = p__37845;
var v = cljs.core.nth.call(null,vec__37846,(0),null);
var p = cljs.core.nth.call(null,vec__37846,(1),null);
var job = vec__37846;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__22319__auto___38028 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22319__auto___38028,res,vec__37846,v,p,job,jobs,results){
return (function (){
var f__22320__auto__ = (function (){var switch__22298__auto__ = ((function (c__22319__auto___38028,res,vec__37846,v,p,job,jobs,results){
return (function (state_37851){
var state_val_37852 = (state_37851[(1)]);
if((state_val_37852 === (1))){
var state_37851__$1 = state_37851;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37851__$1,(2),res,v);
} else {
if((state_val_37852 === (2))){
var inst_37848 = (state_37851[(2)]);
var inst_37849 = cljs.core.async.close_BANG_.call(null,res);
var state_37851__$1 = (function (){var statearr_37853 = state_37851;
(statearr_37853[(7)] = inst_37848);

return statearr_37853;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37851__$1,inst_37849);
} else {
return null;
}
}
});})(c__22319__auto___38028,res,vec__37846,v,p,job,jobs,results))
;
return ((function (switch__22298__auto__,c__22319__auto___38028,res,vec__37846,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22299__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22299__auto____0 = (function (){
var statearr_37857 = [null,null,null,null,null,null,null,null];
(statearr_37857[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22299__auto__);

(statearr_37857[(1)] = (1));

return statearr_37857;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22299__auto____1 = (function (state_37851){
while(true){
var ret_value__22300__auto__ = (function (){try{while(true){
var result__22301__auto__ = switch__22298__auto__.call(null,state_37851);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22301__auto__;
}
break;
}
}catch (e37858){if((e37858 instanceof Object)){
var ex__22302__auto__ = e37858;
var statearr_37859_38029 = state_37851;
(statearr_37859_38029[(5)] = ex__22302__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37851);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37858;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38030 = state_37851;
state_37851 = G__38030;
continue;
} else {
return ret_value__22300__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22299__auto__ = function(state_37851){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22299__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22299__auto____1.call(this,state_37851);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22299__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22299__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22299__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22299__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22299__auto__;
})()
;})(switch__22298__auto__,c__22319__auto___38028,res,vec__37846,v,p,job,jobs,results))
})();
var state__22321__auto__ = (function (){var statearr_37860 = f__22320__auto__.call(null);
(statearr_37860[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22319__auto___38028);

return statearr_37860;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22321__auto__);
});})(c__22319__auto___38028,res,vec__37846,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__37861){
var vec__37862 = p__37861;
var v = cljs.core.nth.call(null,vec__37862,(0),null);
var p = cljs.core.nth.call(null,vec__37862,(1),null);
var job = vec__37862;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__20722__auto___38031 = n;
var __38032 = (0);
while(true){
if((__38032 < n__20722__auto___38031)){
var G__37863_38033 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__37863_38033) {
case "compute":
var c__22319__auto___38035 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__38032,c__22319__auto___38035,G__37863_38033,n__20722__auto___38031,jobs,results,process,async){
return (function (){
var f__22320__auto__ = (function (){var switch__22298__auto__ = ((function (__38032,c__22319__auto___38035,G__37863_38033,n__20722__auto___38031,jobs,results,process,async){
return (function (state_37876){
var state_val_37877 = (state_37876[(1)]);
if((state_val_37877 === (1))){
var state_37876__$1 = state_37876;
var statearr_37878_38036 = state_37876__$1;
(statearr_37878_38036[(2)] = null);

(statearr_37878_38036[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37877 === (2))){
var state_37876__$1 = state_37876;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37876__$1,(4),jobs);
} else {
if((state_val_37877 === (3))){
var inst_37874 = (state_37876[(2)]);
var state_37876__$1 = state_37876;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37876__$1,inst_37874);
} else {
if((state_val_37877 === (4))){
var inst_37866 = (state_37876[(2)]);
var inst_37867 = process.call(null,inst_37866);
var state_37876__$1 = state_37876;
if(cljs.core.truth_(inst_37867)){
var statearr_37879_38037 = state_37876__$1;
(statearr_37879_38037[(1)] = (5));

} else {
var statearr_37880_38038 = state_37876__$1;
(statearr_37880_38038[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37877 === (5))){
var state_37876__$1 = state_37876;
var statearr_37881_38039 = state_37876__$1;
(statearr_37881_38039[(2)] = null);

(statearr_37881_38039[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37877 === (6))){
var state_37876__$1 = state_37876;
var statearr_37882_38040 = state_37876__$1;
(statearr_37882_38040[(2)] = null);

(statearr_37882_38040[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37877 === (7))){
var inst_37872 = (state_37876[(2)]);
var state_37876__$1 = state_37876;
var statearr_37883_38041 = state_37876__$1;
(statearr_37883_38041[(2)] = inst_37872);

(statearr_37883_38041[(1)] = (3));


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
});})(__38032,c__22319__auto___38035,G__37863_38033,n__20722__auto___38031,jobs,results,process,async))
;
return ((function (__38032,switch__22298__auto__,c__22319__auto___38035,G__37863_38033,n__20722__auto___38031,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22299__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22299__auto____0 = (function (){
var statearr_37887 = [null,null,null,null,null,null,null];
(statearr_37887[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22299__auto__);

(statearr_37887[(1)] = (1));

return statearr_37887;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22299__auto____1 = (function (state_37876){
while(true){
var ret_value__22300__auto__ = (function (){try{while(true){
var result__22301__auto__ = switch__22298__auto__.call(null,state_37876);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22301__auto__;
}
break;
}
}catch (e37888){if((e37888 instanceof Object)){
var ex__22302__auto__ = e37888;
var statearr_37889_38042 = state_37876;
(statearr_37889_38042[(5)] = ex__22302__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37876);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37888;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38043 = state_37876;
state_37876 = G__38043;
continue;
} else {
return ret_value__22300__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22299__auto__ = function(state_37876){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22299__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22299__auto____1.call(this,state_37876);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22299__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22299__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22299__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22299__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22299__auto__;
})()
;})(__38032,switch__22298__auto__,c__22319__auto___38035,G__37863_38033,n__20722__auto___38031,jobs,results,process,async))
})();
var state__22321__auto__ = (function (){var statearr_37890 = f__22320__auto__.call(null);
(statearr_37890[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22319__auto___38035);

return statearr_37890;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22321__auto__);
});})(__38032,c__22319__auto___38035,G__37863_38033,n__20722__auto___38031,jobs,results,process,async))
);


break;
case "async":
var c__22319__auto___38044 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__38032,c__22319__auto___38044,G__37863_38033,n__20722__auto___38031,jobs,results,process,async){
return (function (){
var f__22320__auto__ = (function (){var switch__22298__auto__ = ((function (__38032,c__22319__auto___38044,G__37863_38033,n__20722__auto___38031,jobs,results,process,async){
return (function (state_37903){
var state_val_37904 = (state_37903[(1)]);
if((state_val_37904 === (1))){
var state_37903__$1 = state_37903;
var statearr_37905_38045 = state_37903__$1;
(statearr_37905_38045[(2)] = null);

(statearr_37905_38045[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37904 === (2))){
var state_37903__$1 = state_37903;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37903__$1,(4),jobs);
} else {
if((state_val_37904 === (3))){
var inst_37901 = (state_37903[(2)]);
var state_37903__$1 = state_37903;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37903__$1,inst_37901);
} else {
if((state_val_37904 === (4))){
var inst_37893 = (state_37903[(2)]);
var inst_37894 = async.call(null,inst_37893);
var state_37903__$1 = state_37903;
if(cljs.core.truth_(inst_37894)){
var statearr_37906_38046 = state_37903__$1;
(statearr_37906_38046[(1)] = (5));

} else {
var statearr_37907_38047 = state_37903__$1;
(statearr_37907_38047[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37904 === (5))){
var state_37903__$1 = state_37903;
var statearr_37908_38048 = state_37903__$1;
(statearr_37908_38048[(2)] = null);

(statearr_37908_38048[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37904 === (6))){
var state_37903__$1 = state_37903;
var statearr_37909_38049 = state_37903__$1;
(statearr_37909_38049[(2)] = null);

(statearr_37909_38049[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37904 === (7))){
var inst_37899 = (state_37903[(2)]);
var state_37903__$1 = state_37903;
var statearr_37910_38050 = state_37903__$1;
(statearr_37910_38050[(2)] = inst_37899);

(statearr_37910_38050[(1)] = (3));


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
});})(__38032,c__22319__auto___38044,G__37863_38033,n__20722__auto___38031,jobs,results,process,async))
;
return ((function (__38032,switch__22298__auto__,c__22319__auto___38044,G__37863_38033,n__20722__auto___38031,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22299__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22299__auto____0 = (function (){
var statearr_37914 = [null,null,null,null,null,null,null];
(statearr_37914[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22299__auto__);

(statearr_37914[(1)] = (1));

return statearr_37914;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22299__auto____1 = (function (state_37903){
while(true){
var ret_value__22300__auto__ = (function (){try{while(true){
var result__22301__auto__ = switch__22298__auto__.call(null,state_37903);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22301__auto__;
}
break;
}
}catch (e37915){if((e37915 instanceof Object)){
var ex__22302__auto__ = e37915;
var statearr_37916_38051 = state_37903;
(statearr_37916_38051[(5)] = ex__22302__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37903);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37915;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38052 = state_37903;
state_37903 = G__38052;
continue;
} else {
return ret_value__22300__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22299__auto__ = function(state_37903){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22299__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22299__auto____1.call(this,state_37903);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22299__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22299__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22299__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22299__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22299__auto__;
})()
;})(__38032,switch__22298__auto__,c__22319__auto___38044,G__37863_38033,n__20722__auto___38031,jobs,results,process,async))
})();
var state__22321__auto__ = (function (){var statearr_37917 = f__22320__auto__.call(null);
(statearr_37917[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22319__auto___38044);

return statearr_37917;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22321__auto__);
});})(__38032,c__22319__auto___38044,G__37863_38033,n__20722__auto___38031,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__38053 = (__38032 + (1));
__38032 = G__38053;
continue;
} else {
}
break;
}

var c__22319__auto___38054 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22319__auto___38054,jobs,results,process,async){
return (function (){
var f__22320__auto__ = (function (){var switch__22298__auto__ = ((function (c__22319__auto___38054,jobs,results,process,async){
return (function (state_37939){
var state_val_37940 = (state_37939[(1)]);
if((state_val_37940 === (1))){
var state_37939__$1 = state_37939;
var statearr_37941_38055 = state_37939__$1;
(statearr_37941_38055[(2)] = null);

(statearr_37941_38055[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37940 === (2))){
var state_37939__$1 = state_37939;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37939__$1,(4),from);
} else {
if((state_val_37940 === (3))){
var inst_37937 = (state_37939[(2)]);
var state_37939__$1 = state_37939;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37939__$1,inst_37937);
} else {
if((state_val_37940 === (4))){
var inst_37920 = (state_37939[(7)]);
var inst_37920__$1 = (state_37939[(2)]);
var inst_37921 = (inst_37920__$1 == null);
var state_37939__$1 = (function (){var statearr_37942 = state_37939;
(statearr_37942[(7)] = inst_37920__$1);

return statearr_37942;
})();
if(cljs.core.truth_(inst_37921)){
var statearr_37943_38056 = state_37939__$1;
(statearr_37943_38056[(1)] = (5));

} else {
var statearr_37944_38057 = state_37939__$1;
(statearr_37944_38057[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37940 === (5))){
var inst_37923 = cljs.core.async.close_BANG_.call(null,jobs);
var state_37939__$1 = state_37939;
var statearr_37945_38058 = state_37939__$1;
(statearr_37945_38058[(2)] = inst_37923);

(statearr_37945_38058[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37940 === (6))){
var inst_37920 = (state_37939[(7)]);
var inst_37925 = (state_37939[(8)]);
var inst_37925__$1 = cljs.core.async.chan.call(null,(1));
var inst_37926 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37927 = [inst_37920,inst_37925__$1];
var inst_37928 = (new cljs.core.PersistentVector(null,2,(5),inst_37926,inst_37927,null));
var state_37939__$1 = (function (){var statearr_37946 = state_37939;
(statearr_37946[(8)] = inst_37925__$1);

return statearr_37946;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37939__$1,(8),jobs,inst_37928);
} else {
if((state_val_37940 === (7))){
var inst_37935 = (state_37939[(2)]);
var state_37939__$1 = state_37939;
var statearr_37947_38059 = state_37939__$1;
(statearr_37947_38059[(2)] = inst_37935);

(statearr_37947_38059[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37940 === (8))){
var inst_37925 = (state_37939[(8)]);
var inst_37930 = (state_37939[(2)]);
var state_37939__$1 = (function (){var statearr_37948 = state_37939;
(statearr_37948[(9)] = inst_37930);

return statearr_37948;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37939__$1,(9),results,inst_37925);
} else {
if((state_val_37940 === (9))){
var inst_37932 = (state_37939[(2)]);
var state_37939__$1 = (function (){var statearr_37949 = state_37939;
(statearr_37949[(10)] = inst_37932);

return statearr_37949;
})();
var statearr_37950_38060 = state_37939__$1;
(statearr_37950_38060[(2)] = null);

(statearr_37950_38060[(1)] = (2));


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
});})(c__22319__auto___38054,jobs,results,process,async))
;
return ((function (switch__22298__auto__,c__22319__auto___38054,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22299__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22299__auto____0 = (function (){
var statearr_37954 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_37954[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22299__auto__);

(statearr_37954[(1)] = (1));

return statearr_37954;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22299__auto____1 = (function (state_37939){
while(true){
var ret_value__22300__auto__ = (function (){try{while(true){
var result__22301__auto__ = switch__22298__auto__.call(null,state_37939);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22301__auto__;
}
break;
}
}catch (e37955){if((e37955 instanceof Object)){
var ex__22302__auto__ = e37955;
var statearr_37956_38061 = state_37939;
(statearr_37956_38061[(5)] = ex__22302__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37939);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37955;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38062 = state_37939;
state_37939 = G__38062;
continue;
} else {
return ret_value__22300__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22299__auto__ = function(state_37939){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22299__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22299__auto____1.call(this,state_37939);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22299__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22299__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22299__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22299__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22299__auto__;
})()
;})(switch__22298__auto__,c__22319__auto___38054,jobs,results,process,async))
})();
var state__22321__auto__ = (function (){var statearr_37957 = f__22320__auto__.call(null);
(statearr_37957[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22319__auto___38054);

return statearr_37957;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22321__auto__);
});})(c__22319__auto___38054,jobs,results,process,async))
);


var c__22319__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22319__auto__,jobs,results,process,async){
return (function (){
var f__22320__auto__ = (function (){var switch__22298__auto__ = ((function (c__22319__auto__,jobs,results,process,async){
return (function (state_37995){
var state_val_37996 = (state_37995[(1)]);
if((state_val_37996 === (7))){
var inst_37991 = (state_37995[(2)]);
var state_37995__$1 = state_37995;
var statearr_37997_38063 = state_37995__$1;
(statearr_37997_38063[(2)] = inst_37991);

(statearr_37997_38063[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37996 === (20))){
var state_37995__$1 = state_37995;
var statearr_37998_38064 = state_37995__$1;
(statearr_37998_38064[(2)] = null);

(statearr_37998_38064[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37996 === (1))){
var state_37995__$1 = state_37995;
var statearr_37999_38065 = state_37995__$1;
(statearr_37999_38065[(2)] = null);

(statearr_37999_38065[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37996 === (4))){
var inst_37960 = (state_37995[(7)]);
var inst_37960__$1 = (state_37995[(2)]);
var inst_37961 = (inst_37960__$1 == null);
var state_37995__$1 = (function (){var statearr_38000 = state_37995;
(statearr_38000[(7)] = inst_37960__$1);

return statearr_38000;
})();
if(cljs.core.truth_(inst_37961)){
var statearr_38001_38066 = state_37995__$1;
(statearr_38001_38066[(1)] = (5));

} else {
var statearr_38002_38067 = state_37995__$1;
(statearr_38002_38067[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37996 === (15))){
var inst_37973 = (state_37995[(8)]);
var state_37995__$1 = state_37995;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37995__$1,(18),to,inst_37973);
} else {
if((state_val_37996 === (21))){
var inst_37986 = (state_37995[(2)]);
var state_37995__$1 = state_37995;
var statearr_38003_38068 = state_37995__$1;
(statearr_38003_38068[(2)] = inst_37986);

(statearr_38003_38068[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37996 === (13))){
var inst_37988 = (state_37995[(2)]);
var state_37995__$1 = (function (){var statearr_38004 = state_37995;
(statearr_38004[(9)] = inst_37988);

return statearr_38004;
})();
var statearr_38005_38069 = state_37995__$1;
(statearr_38005_38069[(2)] = null);

(statearr_38005_38069[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37996 === (6))){
var inst_37960 = (state_37995[(7)]);
var state_37995__$1 = state_37995;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37995__$1,(11),inst_37960);
} else {
if((state_val_37996 === (17))){
var inst_37981 = (state_37995[(2)]);
var state_37995__$1 = state_37995;
if(cljs.core.truth_(inst_37981)){
var statearr_38006_38070 = state_37995__$1;
(statearr_38006_38070[(1)] = (19));

} else {
var statearr_38007_38071 = state_37995__$1;
(statearr_38007_38071[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37996 === (3))){
var inst_37993 = (state_37995[(2)]);
var state_37995__$1 = state_37995;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37995__$1,inst_37993);
} else {
if((state_val_37996 === (12))){
var inst_37970 = (state_37995[(10)]);
var state_37995__$1 = state_37995;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37995__$1,(14),inst_37970);
} else {
if((state_val_37996 === (2))){
var state_37995__$1 = state_37995;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37995__$1,(4),results);
} else {
if((state_val_37996 === (19))){
var state_37995__$1 = state_37995;
var statearr_38008_38072 = state_37995__$1;
(statearr_38008_38072[(2)] = null);

(statearr_38008_38072[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37996 === (11))){
var inst_37970 = (state_37995[(2)]);
var state_37995__$1 = (function (){var statearr_38009 = state_37995;
(statearr_38009[(10)] = inst_37970);

return statearr_38009;
})();
var statearr_38010_38073 = state_37995__$1;
(statearr_38010_38073[(2)] = null);

(statearr_38010_38073[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37996 === (9))){
var state_37995__$1 = state_37995;
var statearr_38011_38074 = state_37995__$1;
(statearr_38011_38074[(2)] = null);

(statearr_38011_38074[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37996 === (5))){
var state_37995__$1 = state_37995;
if(cljs.core.truth_(close_QMARK_)){
var statearr_38012_38075 = state_37995__$1;
(statearr_38012_38075[(1)] = (8));

} else {
var statearr_38013_38076 = state_37995__$1;
(statearr_38013_38076[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37996 === (14))){
var inst_37975 = (state_37995[(11)]);
var inst_37973 = (state_37995[(8)]);
var inst_37973__$1 = (state_37995[(2)]);
var inst_37974 = (inst_37973__$1 == null);
var inst_37975__$1 = cljs.core.not.call(null,inst_37974);
var state_37995__$1 = (function (){var statearr_38014 = state_37995;
(statearr_38014[(11)] = inst_37975__$1);

(statearr_38014[(8)] = inst_37973__$1);

return statearr_38014;
})();
if(inst_37975__$1){
var statearr_38015_38077 = state_37995__$1;
(statearr_38015_38077[(1)] = (15));

} else {
var statearr_38016_38078 = state_37995__$1;
(statearr_38016_38078[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37996 === (16))){
var inst_37975 = (state_37995[(11)]);
var state_37995__$1 = state_37995;
var statearr_38017_38079 = state_37995__$1;
(statearr_38017_38079[(2)] = inst_37975);

(statearr_38017_38079[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37996 === (10))){
var inst_37967 = (state_37995[(2)]);
var state_37995__$1 = state_37995;
var statearr_38018_38080 = state_37995__$1;
(statearr_38018_38080[(2)] = inst_37967);

(statearr_38018_38080[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37996 === (18))){
var inst_37978 = (state_37995[(2)]);
var state_37995__$1 = state_37995;
var statearr_38019_38081 = state_37995__$1;
(statearr_38019_38081[(2)] = inst_37978);

(statearr_38019_38081[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37996 === (8))){
var inst_37964 = cljs.core.async.close_BANG_.call(null,to);
var state_37995__$1 = state_37995;
var statearr_38020_38082 = state_37995__$1;
(statearr_38020_38082[(2)] = inst_37964);

(statearr_38020_38082[(1)] = (10));


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
});})(c__22319__auto__,jobs,results,process,async))
;
return ((function (switch__22298__auto__,c__22319__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22299__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22299__auto____0 = (function (){
var statearr_38024 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38024[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22299__auto__);

(statearr_38024[(1)] = (1));

return statearr_38024;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22299__auto____1 = (function (state_37995){
while(true){
var ret_value__22300__auto__ = (function (){try{while(true){
var result__22301__auto__ = switch__22298__auto__.call(null,state_37995);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22301__auto__;
}
break;
}
}catch (e38025){if((e38025 instanceof Object)){
var ex__22302__auto__ = e38025;
var statearr_38026_38083 = state_37995;
(statearr_38026_38083[(5)] = ex__22302__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37995);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38025;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38084 = state_37995;
state_37995 = G__38084;
continue;
} else {
return ret_value__22300__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22299__auto__ = function(state_37995){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22299__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22299__auto____1.call(this,state_37995);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22299__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22299__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22299__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22299__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22299__auto__;
})()
;})(switch__22298__auto__,c__22319__auto__,jobs,results,process,async))
})();
var state__22321__auto__ = (function (){var statearr_38027 = f__22320__auto__.call(null);
(statearr_38027[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22319__auto__);

return statearr_38027;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22321__auto__);
});})(c__22319__auto__,jobs,results,process,async))
);

return c__22319__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args38085 = [];
var len__20877__auto___38088 = arguments.length;
var i__20878__auto___38089 = (0);
while(true){
if((i__20878__auto___38089 < len__20877__auto___38088)){
args38085.push((arguments[i__20878__auto___38089]));

var G__38090 = (i__20878__auto___38089 + (1));
i__20878__auto___38089 = G__38090;
continue;
} else {
}
break;
}

var G__38087 = args38085.length;
switch (G__38087) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38085.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args38092 = [];
var len__20877__auto___38095 = arguments.length;
var i__20878__auto___38096 = (0);
while(true){
if((i__20878__auto___38096 < len__20877__auto___38095)){
args38092.push((arguments[i__20878__auto___38096]));

var G__38097 = (i__20878__auto___38096 + (1));
i__20878__auto___38096 = G__38097;
continue;
} else {
}
break;
}

var G__38094 = args38092.length;
switch (G__38094) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38092.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args38099 = [];
var len__20877__auto___38152 = arguments.length;
var i__20878__auto___38153 = (0);
while(true){
if((i__20878__auto___38153 < len__20877__auto___38152)){
args38099.push((arguments[i__20878__auto___38153]));

var G__38154 = (i__20878__auto___38153 + (1));
i__20878__auto___38153 = G__38154;
continue;
} else {
}
break;
}

var G__38101 = args38099.length;
switch (G__38101) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38099.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__22319__auto___38156 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22319__auto___38156,tc,fc){
return (function (){
var f__22320__auto__ = (function (){var switch__22298__auto__ = ((function (c__22319__auto___38156,tc,fc){
return (function (state_38127){
var state_val_38128 = (state_38127[(1)]);
if((state_val_38128 === (7))){
var inst_38123 = (state_38127[(2)]);
var state_38127__$1 = state_38127;
var statearr_38129_38157 = state_38127__$1;
(statearr_38129_38157[(2)] = inst_38123);

(statearr_38129_38157[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38128 === (1))){
var state_38127__$1 = state_38127;
var statearr_38130_38158 = state_38127__$1;
(statearr_38130_38158[(2)] = null);

(statearr_38130_38158[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38128 === (4))){
var inst_38104 = (state_38127[(7)]);
var inst_38104__$1 = (state_38127[(2)]);
var inst_38105 = (inst_38104__$1 == null);
var state_38127__$1 = (function (){var statearr_38131 = state_38127;
(statearr_38131[(7)] = inst_38104__$1);

return statearr_38131;
})();
if(cljs.core.truth_(inst_38105)){
var statearr_38132_38159 = state_38127__$1;
(statearr_38132_38159[(1)] = (5));

} else {
var statearr_38133_38160 = state_38127__$1;
(statearr_38133_38160[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38128 === (13))){
var state_38127__$1 = state_38127;
var statearr_38134_38161 = state_38127__$1;
(statearr_38134_38161[(2)] = null);

(statearr_38134_38161[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38128 === (6))){
var inst_38104 = (state_38127[(7)]);
var inst_38110 = p.call(null,inst_38104);
var state_38127__$1 = state_38127;
if(cljs.core.truth_(inst_38110)){
var statearr_38135_38162 = state_38127__$1;
(statearr_38135_38162[(1)] = (9));

} else {
var statearr_38136_38163 = state_38127__$1;
(statearr_38136_38163[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38128 === (3))){
var inst_38125 = (state_38127[(2)]);
var state_38127__$1 = state_38127;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38127__$1,inst_38125);
} else {
if((state_val_38128 === (12))){
var state_38127__$1 = state_38127;
var statearr_38137_38164 = state_38127__$1;
(statearr_38137_38164[(2)] = null);

(statearr_38137_38164[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38128 === (2))){
var state_38127__$1 = state_38127;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38127__$1,(4),ch);
} else {
if((state_val_38128 === (11))){
var inst_38104 = (state_38127[(7)]);
var inst_38114 = (state_38127[(2)]);
var state_38127__$1 = state_38127;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38127__$1,(8),inst_38114,inst_38104);
} else {
if((state_val_38128 === (9))){
var state_38127__$1 = state_38127;
var statearr_38138_38165 = state_38127__$1;
(statearr_38138_38165[(2)] = tc);

(statearr_38138_38165[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38128 === (5))){
var inst_38107 = cljs.core.async.close_BANG_.call(null,tc);
var inst_38108 = cljs.core.async.close_BANG_.call(null,fc);
var state_38127__$1 = (function (){var statearr_38139 = state_38127;
(statearr_38139[(8)] = inst_38107);

return statearr_38139;
})();
var statearr_38140_38166 = state_38127__$1;
(statearr_38140_38166[(2)] = inst_38108);

(statearr_38140_38166[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38128 === (14))){
var inst_38121 = (state_38127[(2)]);
var state_38127__$1 = state_38127;
var statearr_38141_38167 = state_38127__$1;
(statearr_38141_38167[(2)] = inst_38121);

(statearr_38141_38167[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38128 === (10))){
var state_38127__$1 = state_38127;
var statearr_38142_38168 = state_38127__$1;
(statearr_38142_38168[(2)] = fc);

(statearr_38142_38168[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38128 === (8))){
var inst_38116 = (state_38127[(2)]);
var state_38127__$1 = state_38127;
if(cljs.core.truth_(inst_38116)){
var statearr_38143_38169 = state_38127__$1;
(statearr_38143_38169[(1)] = (12));

} else {
var statearr_38144_38170 = state_38127__$1;
(statearr_38144_38170[(1)] = (13));

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
});})(c__22319__auto___38156,tc,fc))
;
return ((function (switch__22298__auto__,c__22319__auto___38156,tc,fc){
return (function() {
var cljs$core$async$state_machine__22299__auto__ = null;
var cljs$core$async$state_machine__22299__auto____0 = (function (){
var statearr_38148 = [null,null,null,null,null,null,null,null,null];
(statearr_38148[(0)] = cljs$core$async$state_machine__22299__auto__);

(statearr_38148[(1)] = (1));

return statearr_38148;
});
var cljs$core$async$state_machine__22299__auto____1 = (function (state_38127){
while(true){
var ret_value__22300__auto__ = (function (){try{while(true){
var result__22301__auto__ = switch__22298__auto__.call(null,state_38127);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22301__auto__;
}
break;
}
}catch (e38149){if((e38149 instanceof Object)){
var ex__22302__auto__ = e38149;
var statearr_38150_38171 = state_38127;
(statearr_38150_38171[(5)] = ex__22302__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38127);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38149;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38172 = state_38127;
state_38127 = G__38172;
continue;
} else {
return ret_value__22300__auto__;
}
break;
}
});
cljs$core$async$state_machine__22299__auto__ = function(state_38127){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22299__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22299__auto____1.call(this,state_38127);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22299__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22299__auto____0;
cljs$core$async$state_machine__22299__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22299__auto____1;
return cljs$core$async$state_machine__22299__auto__;
})()
;})(switch__22298__auto__,c__22319__auto___38156,tc,fc))
})();
var state__22321__auto__ = (function (){var statearr_38151 = f__22320__auto__.call(null);
(statearr_38151[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22319__auto___38156);

return statearr_38151;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22321__auto__);
});})(c__22319__auto___38156,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__22319__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22319__auto__){
return (function (){
var f__22320__auto__ = (function (){var switch__22298__auto__ = ((function (c__22319__auto__){
return (function (state_38236){
var state_val_38237 = (state_38236[(1)]);
if((state_val_38237 === (7))){
var inst_38232 = (state_38236[(2)]);
var state_38236__$1 = state_38236;
var statearr_38238_38259 = state_38236__$1;
(statearr_38238_38259[(2)] = inst_38232);

(statearr_38238_38259[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38237 === (1))){
var inst_38216 = init;
var state_38236__$1 = (function (){var statearr_38239 = state_38236;
(statearr_38239[(7)] = inst_38216);

return statearr_38239;
})();
var statearr_38240_38260 = state_38236__$1;
(statearr_38240_38260[(2)] = null);

(statearr_38240_38260[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38237 === (4))){
var inst_38219 = (state_38236[(8)]);
var inst_38219__$1 = (state_38236[(2)]);
var inst_38220 = (inst_38219__$1 == null);
var state_38236__$1 = (function (){var statearr_38241 = state_38236;
(statearr_38241[(8)] = inst_38219__$1);

return statearr_38241;
})();
if(cljs.core.truth_(inst_38220)){
var statearr_38242_38261 = state_38236__$1;
(statearr_38242_38261[(1)] = (5));

} else {
var statearr_38243_38262 = state_38236__$1;
(statearr_38243_38262[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38237 === (6))){
var inst_38216 = (state_38236[(7)]);
var inst_38219 = (state_38236[(8)]);
var inst_38223 = (state_38236[(9)]);
var inst_38223__$1 = f.call(null,inst_38216,inst_38219);
var inst_38224 = cljs.core.reduced_QMARK_.call(null,inst_38223__$1);
var state_38236__$1 = (function (){var statearr_38244 = state_38236;
(statearr_38244[(9)] = inst_38223__$1);

return statearr_38244;
})();
if(inst_38224){
var statearr_38245_38263 = state_38236__$1;
(statearr_38245_38263[(1)] = (8));

} else {
var statearr_38246_38264 = state_38236__$1;
(statearr_38246_38264[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38237 === (3))){
var inst_38234 = (state_38236[(2)]);
var state_38236__$1 = state_38236;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38236__$1,inst_38234);
} else {
if((state_val_38237 === (2))){
var state_38236__$1 = state_38236;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38236__$1,(4),ch);
} else {
if((state_val_38237 === (9))){
var inst_38223 = (state_38236[(9)]);
var inst_38216 = inst_38223;
var state_38236__$1 = (function (){var statearr_38247 = state_38236;
(statearr_38247[(7)] = inst_38216);

return statearr_38247;
})();
var statearr_38248_38265 = state_38236__$1;
(statearr_38248_38265[(2)] = null);

(statearr_38248_38265[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38237 === (5))){
var inst_38216 = (state_38236[(7)]);
var state_38236__$1 = state_38236;
var statearr_38249_38266 = state_38236__$1;
(statearr_38249_38266[(2)] = inst_38216);

(statearr_38249_38266[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38237 === (10))){
var inst_38230 = (state_38236[(2)]);
var state_38236__$1 = state_38236;
var statearr_38250_38267 = state_38236__$1;
(statearr_38250_38267[(2)] = inst_38230);

(statearr_38250_38267[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38237 === (8))){
var inst_38223 = (state_38236[(9)]);
var inst_38226 = cljs.core.deref.call(null,inst_38223);
var state_38236__$1 = state_38236;
var statearr_38251_38268 = state_38236__$1;
(statearr_38251_38268[(2)] = inst_38226);

(statearr_38251_38268[(1)] = (10));


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
});})(c__22319__auto__))
;
return ((function (switch__22298__auto__,c__22319__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__22299__auto__ = null;
var cljs$core$async$reduce_$_state_machine__22299__auto____0 = (function (){
var statearr_38255 = [null,null,null,null,null,null,null,null,null,null];
(statearr_38255[(0)] = cljs$core$async$reduce_$_state_machine__22299__auto__);

(statearr_38255[(1)] = (1));

return statearr_38255;
});
var cljs$core$async$reduce_$_state_machine__22299__auto____1 = (function (state_38236){
while(true){
var ret_value__22300__auto__ = (function (){try{while(true){
var result__22301__auto__ = switch__22298__auto__.call(null,state_38236);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22301__auto__;
}
break;
}
}catch (e38256){if((e38256 instanceof Object)){
var ex__22302__auto__ = e38256;
var statearr_38257_38269 = state_38236;
(statearr_38257_38269[(5)] = ex__22302__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38236);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38256;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38270 = state_38236;
state_38236 = G__38270;
continue;
} else {
return ret_value__22300__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__22299__auto__ = function(state_38236){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__22299__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__22299__auto____1.call(this,state_38236);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__22299__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__22299__auto____0;
cljs$core$async$reduce_$_state_machine__22299__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__22299__auto____1;
return cljs$core$async$reduce_$_state_machine__22299__auto__;
})()
;})(switch__22298__auto__,c__22319__auto__))
})();
var state__22321__auto__ = (function (){var statearr_38258 = f__22320__auto__.call(null);
(statearr_38258[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22319__auto__);

return statearr_38258;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22321__auto__);
});})(c__22319__auto__))
);

return c__22319__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args38271 = [];
var len__20877__auto___38323 = arguments.length;
var i__20878__auto___38324 = (0);
while(true){
if((i__20878__auto___38324 < len__20877__auto___38323)){
args38271.push((arguments[i__20878__auto___38324]));

var G__38325 = (i__20878__auto___38324 + (1));
i__20878__auto___38324 = G__38325;
continue;
} else {
}
break;
}

var G__38273 = args38271.length;
switch (G__38273) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38271.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__22319__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22319__auto__){
return (function (){
var f__22320__auto__ = (function (){var switch__22298__auto__ = ((function (c__22319__auto__){
return (function (state_38298){
var state_val_38299 = (state_38298[(1)]);
if((state_val_38299 === (7))){
var inst_38280 = (state_38298[(2)]);
var state_38298__$1 = state_38298;
var statearr_38300_38327 = state_38298__$1;
(statearr_38300_38327[(2)] = inst_38280);

(statearr_38300_38327[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38299 === (1))){
var inst_38274 = cljs.core.seq.call(null,coll);
var inst_38275 = inst_38274;
var state_38298__$1 = (function (){var statearr_38301 = state_38298;
(statearr_38301[(7)] = inst_38275);

return statearr_38301;
})();
var statearr_38302_38328 = state_38298__$1;
(statearr_38302_38328[(2)] = null);

(statearr_38302_38328[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38299 === (4))){
var inst_38275 = (state_38298[(7)]);
var inst_38278 = cljs.core.first.call(null,inst_38275);
var state_38298__$1 = state_38298;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38298__$1,(7),ch,inst_38278);
} else {
if((state_val_38299 === (13))){
var inst_38292 = (state_38298[(2)]);
var state_38298__$1 = state_38298;
var statearr_38303_38329 = state_38298__$1;
(statearr_38303_38329[(2)] = inst_38292);

(statearr_38303_38329[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38299 === (6))){
var inst_38283 = (state_38298[(2)]);
var state_38298__$1 = state_38298;
if(cljs.core.truth_(inst_38283)){
var statearr_38304_38330 = state_38298__$1;
(statearr_38304_38330[(1)] = (8));

} else {
var statearr_38305_38331 = state_38298__$1;
(statearr_38305_38331[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38299 === (3))){
var inst_38296 = (state_38298[(2)]);
var state_38298__$1 = state_38298;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38298__$1,inst_38296);
} else {
if((state_val_38299 === (12))){
var state_38298__$1 = state_38298;
var statearr_38306_38332 = state_38298__$1;
(statearr_38306_38332[(2)] = null);

(statearr_38306_38332[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38299 === (2))){
var inst_38275 = (state_38298[(7)]);
var state_38298__$1 = state_38298;
if(cljs.core.truth_(inst_38275)){
var statearr_38307_38333 = state_38298__$1;
(statearr_38307_38333[(1)] = (4));

} else {
var statearr_38308_38334 = state_38298__$1;
(statearr_38308_38334[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38299 === (11))){
var inst_38289 = cljs.core.async.close_BANG_.call(null,ch);
var state_38298__$1 = state_38298;
var statearr_38309_38335 = state_38298__$1;
(statearr_38309_38335[(2)] = inst_38289);

(statearr_38309_38335[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38299 === (9))){
var state_38298__$1 = state_38298;
if(cljs.core.truth_(close_QMARK_)){
var statearr_38310_38336 = state_38298__$1;
(statearr_38310_38336[(1)] = (11));

} else {
var statearr_38311_38337 = state_38298__$1;
(statearr_38311_38337[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38299 === (5))){
var inst_38275 = (state_38298[(7)]);
var state_38298__$1 = state_38298;
var statearr_38312_38338 = state_38298__$1;
(statearr_38312_38338[(2)] = inst_38275);

(statearr_38312_38338[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38299 === (10))){
var inst_38294 = (state_38298[(2)]);
var state_38298__$1 = state_38298;
var statearr_38313_38339 = state_38298__$1;
(statearr_38313_38339[(2)] = inst_38294);

(statearr_38313_38339[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38299 === (8))){
var inst_38275 = (state_38298[(7)]);
var inst_38285 = cljs.core.next.call(null,inst_38275);
var inst_38275__$1 = inst_38285;
var state_38298__$1 = (function (){var statearr_38314 = state_38298;
(statearr_38314[(7)] = inst_38275__$1);

return statearr_38314;
})();
var statearr_38315_38340 = state_38298__$1;
(statearr_38315_38340[(2)] = null);

(statearr_38315_38340[(1)] = (2));


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
});})(c__22319__auto__))
;
return ((function (switch__22298__auto__,c__22319__auto__){
return (function() {
var cljs$core$async$state_machine__22299__auto__ = null;
var cljs$core$async$state_machine__22299__auto____0 = (function (){
var statearr_38319 = [null,null,null,null,null,null,null,null];
(statearr_38319[(0)] = cljs$core$async$state_machine__22299__auto__);

(statearr_38319[(1)] = (1));

return statearr_38319;
});
var cljs$core$async$state_machine__22299__auto____1 = (function (state_38298){
while(true){
var ret_value__22300__auto__ = (function (){try{while(true){
var result__22301__auto__ = switch__22298__auto__.call(null,state_38298);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22301__auto__;
}
break;
}
}catch (e38320){if((e38320 instanceof Object)){
var ex__22302__auto__ = e38320;
var statearr_38321_38341 = state_38298;
(statearr_38321_38341[(5)] = ex__22302__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38298);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38320;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38342 = state_38298;
state_38298 = G__38342;
continue;
} else {
return ret_value__22300__auto__;
}
break;
}
});
cljs$core$async$state_machine__22299__auto__ = function(state_38298){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22299__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22299__auto____1.call(this,state_38298);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22299__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22299__auto____0;
cljs$core$async$state_machine__22299__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22299__auto____1;
return cljs$core$async$state_machine__22299__auto__;
})()
;})(switch__22298__auto__,c__22319__auto__))
})();
var state__22321__auto__ = (function (){var statearr_38322 = f__22320__auto__.call(null);
(statearr_38322[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22319__auto__);

return statearr_38322;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22321__auto__);
});})(c__22319__auto__))
);

return c__22319__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__20474__auto__ = (((_ == null))?null:_);
var m__20475__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__20474__auto__)]);
if(!((m__20475__auto__ == null))){
return m__20475__auto__.call(null,_);
} else {
var m__20475__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__20475__auto____$1 == null))){
return m__20475__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__20474__auto__ = (((m == null))?null:m);
var m__20475__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__20474__auto__)]);
if(!((m__20475__auto__ == null))){
return m__20475__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__20475__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__20475__auto____$1 == null))){
return m__20475__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__20474__auto__ = (((m == null))?null:m);
var m__20475__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__20474__auto__)]);
if(!((m__20475__auto__ == null))){
return m__20475__auto__.call(null,m,ch);
} else {
var m__20475__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__20475__auto____$1 == null))){
return m__20475__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__20474__auto__ = (((m == null))?null:m);
var m__20475__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__20474__auto__)]);
if(!((m__20475__auto__ == null))){
return m__20475__auto__.call(null,m);
} else {
var m__20475__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__20475__auto____$1 == null))){
return m__20475__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async38564 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38564 = (function (mult,ch,cs,meta38565){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta38565 = meta38565;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async38564.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_38566,meta38565__$1){
var self__ = this;
var _38566__$1 = this;
return (new cljs.core.async.t_cljs$core$async38564(self__.mult,self__.ch,self__.cs,meta38565__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async38564.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_38566){
var self__ = this;
var _38566__$1 = this;
return self__.meta38565;
});})(cs))
;

cljs.core.async.t_cljs$core$async38564.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async38564.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async38564.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async38564.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async38564.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async38564.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async38564.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta38565","meta38565",1575599375,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async38564.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async38564.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38564";

cljs.core.async.t_cljs$core$async38564.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__20417__auto__,writer__20418__auto__,opt__20419__auto__){
return cljs.core._write.call(null,writer__20418__auto__,"cljs.core.async/t_cljs$core$async38564");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async38564 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async38564(mult__$1,ch__$1,cs__$1,meta38565){
return (new cljs.core.async.t_cljs$core$async38564(mult__$1,ch__$1,cs__$1,meta38565));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async38564(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__22319__auto___38785 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22319__auto___38785,cs,m,dchan,dctr,done){
return (function (){
var f__22320__auto__ = (function (){var switch__22298__auto__ = ((function (c__22319__auto___38785,cs,m,dchan,dctr,done){
return (function (state_38697){
var state_val_38698 = (state_38697[(1)]);
if((state_val_38698 === (7))){
var inst_38693 = (state_38697[(2)]);
var state_38697__$1 = state_38697;
var statearr_38699_38786 = state_38697__$1;
(statearr_38699_38786[(2)] = inst_38693);

(statearr_38699_38786[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38698 === (20))){
var inst_38598 = (state_38697[(7)]);
var inst_38608 = cljs.core.first.call(null,inst_38598);
var inst_38609 = cljs.core.nth.call(null,inst_38608,(0),null);
var inst_38610 = cljs.core.nth.call(null,inst_38608,(1),null);
var state_38697__$1 = (function (){var statearr_38700 = state_38697;
(statearr_38700[(8)] = inst_38609);

return statearr_38700;
})();
if(cljs.core.truth_(inst_38610)){
var statearr_38701_38787 = state_38697__$1;
(statearr_38701_38787[(1)] = (22));

} else {
var statearr_38702_38788 = state_38697__$1;
(statearr_38702_38788[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38698 === (27))){
var inst_38569 = (state_38697[(9)]);
var inst_38640 = (state_38697[(10)]);
var inst_38638 = (state_38697[(11)]);
var inst_38645 = (state_38697[(12)]);
var inst_38645__$1 = cljs.core._nth.call(null,inst_38638,inst_38640);
var inst_38646 = cljs.core.async.put_BANG_.call(null,inst_38645__$1,inst_38569,done);
var state_38697__$1 = (function (){var statearr_38703 = state_38697;
(statearr_38703[(12)] = inst_38645__$1);

return statearr_38703;
})();
if(cljs.core.truth_(inst_38646)){
var statearr_38704_38789 = state_38697__$1;
(statearr_38704_38789[(1)] = (30));

} else {
var statearr_38705_38790 = state_38697__$1;
(statearr_38705_38790[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38698 === (1))){
var state_38697__$1 = state_38697;
var statearr_38706_38791 = state_38697__$1;
(statearr_38706_38791[(2)] = null);

(statearr_38706_38791[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38698 === (24))){
var inst_38598 = (state_38697[(7)]);
var inst_38615 = (state_38697[(2)]);
var inst_38616 = cljs.core.next.call(null,inst_38598);
var inst_38578 = inst_38616;
var inst_38579 = null;
var inst_38580 = (0);
var inst_38581 = (0);
var state_38697__$1 = (function (){var statearr_38707 = state_38697;
(statearr_38707[(13)] = inst_38615);

(statearr_38707[(14)] = inst_38581);

(statearr_38707[(15)] = inst_38579);

(statearr_38707[(16)] = inst_38578);

(statearr_38707[(17)] = inst_38580);

return statearr_38707;
})();
var statearr_38708_38792 = state_38697__$1;
(statearr_38708_38792[(2)] = null);

(statearr_38708_38792[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38698 === (39))){
var state_38697__$1 = state_38697;
var statearr_38712_38793 = state_38697__$1;
(statearr_38712_38793[(2)] = null);

(statearr_38712_38793[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38698 === (4))){
var inst_38569 = (state_38697[(9)]);
var inst_38569__$1 = (state_38697[(2)]);
var inst_38570 = (inst_38569__$1 == null);
var state_38697__$1 = (function (){var statearr_38713 = state_38697;
(statearr_38713[(9)] = inst_38569__$1);

return statearr_38713;
})();
if(cljs.core.truth_(inst_38570)){
var statearr_38714_38794 = state_38697__$1;
(statearr_38714_38794[(1)] = (5));

} else {
var statearr_38715_38795 = state_38697__$1;
(statearr_38715_38795[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38698 === (15))){
var inst_38581 = (state_38697[(14)]);
var inst_38579 = (state_38697[(15)]);
var inst_38578 = (state_38697[(16)]);
var inst_38580 = (state_38697[(17)]);
var inst_38594 = (state_38697[(2)]);
var inst_38595 = (inst_38581 + (1));
var tmp38709 = inst_38579;
var tmp38710 = inst_38578;
var tmp38711 = inst_38580;
var inst_38578__$1 = tmp38710;
var inst_38579__$1 = tmp38709;
var inst_38580__$1 = tmp38711;
var inst_38581__$1 = inst_38595;
var state_38697__$1 = (function (){var statearr_38716 = state_38697;
(statearr_38716[(18)] = inst_38594);

(statearr_38716[(14)] = inst_38581__$1);

(statearr_38716[(15)] = inst_38579__$1);

(statearr_38716[(16)] = inst_38578__$1);

(statearr_38716[(17)] = inst_38580__$1);

return statearr_38716;
})();
var statearr_38717_38796 = state_38697__$1;
(statearr_38717_38796[(2)] = null);

(statearr_38717_38796[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38698 === (21))){
var inst_38619 = (state_38697[(2)]);
var state_38697__$1 = state_38697;
var statearr_38721_38797 = state_38697__$1;
(statearr_38721_38797[(2)] = inst_38619);

(statearr_38721_38797[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38698 === (31))){
var inst_38645 = (state_38697[(12)]);
var inst_38649 = done.call(null,null);
var inst_38650 = cljs.core.async.untap_STAR_.call(null,m,inst_38645);
var state_38697__$1 = (function (){var statearr_38722 = state_38697;
(statearr_38722[(19)] = inst_38649);

return statearr_38722;
})();
var statearr_38723_38798 = state_38697__$1;
(statearr_38723_38798[(2)] = inst_38650);

(statearr_38723_38798[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38698 === (32))){
var inst_38640 = (state_38697[(10)]);
var inst_38638 = (state_38697[(11)]);
var inst_38639 = (state_38697[(20)]);
var inst_38637 = (state_38697[(21)]);
var inst_38652 = (state_38697[(2)]);
var inst_38653 = (inst_38640 + (1));
var tmp38718 = inst_38638;
var tmp38719 = inst_38639;
var tmp38720 = inst_38637;
var inst_38637__$1 = tmp38720;
var inst_38638__$1 = tmp38718;
var inst_38639__$1 = tmp38719;
var inst_38640__$1 = inst_38653;
var state_38697__$1 = (function (){var statearr_38724 = state_38697;
(statearr_38724[(22)] = inst_38652);

(statearr_38724[(10)] = inst_38640__$1);

(statearr_38724[(11)] = inst_38638__$1);

(statearr_38724[(20)] = inst_38639__$1);

(statearr_38724[(21)] = inst_38637__$1);

return statearr_38724;
})();
var statearr_38725_38799 = state_38697__$1;
(statearr_38725_38799[(2)] = null);

(statearr_38725_38799[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38698 === (40))){
var inst_38665 = (state_38697[(23)]);
var inst_38669 = done.call(null,null);
var inst_38670 = cljs.core.async.untap_STAR_.call(null,m,inst_38665);
var state_38697__$1 = (function (){var statearr_38726 = state_38697;
(statearr_38726[(24)] = inst_38669);

return statearr_38726;
})();
var statearr_38727_38800 = state_38697__$1;
(statearr_38727_38800[(2)] = inst_38670);

(statearr_38727_38800[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38698 === (33))){
var inst_38656 = (state_38697[(25)]);
var inst_38658 = cljs.core.chunked_seq_QMARK_.call(null,inst_38656);
var state_38697__$1 = state_38697;
if(inst_38658){
var statearr_38728_38801 = state_38697__$1;
(statearr_38728_38801[(1)] = (36));

} else {
var statearr_38729_38802 = state_38697__$1;
(statearr_38729_38802[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38698 === (13))){
var inst_38588 = (state_38697[(26)]);
var inst_38591 = cljs.core.async.close_BANG_.call(null,inst_38588);
var state_38697__$1 = state_38697;
var statearr_38730_38803 = state_38697__$1;
(statearr_38730_38803[(2)] = inst_38591);

(statearr_38730_38803[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38698 === (22))){
var inst_38609 = (state_38697[(8)]);
var inst_38612 = cljs.core.async.close_BANG_.call(null,inst_38609);
var state_38697__$1 = state_38697;
var statearr_38731_38804 = state_38697__$1;
(statearr_38731_38804[(2)] = inst_38612);

(statearr_38731_38804[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38698 === (36))){
var inst_38656 = (state_38697[(25)]);
var inst_38660 = cljs.core.chunk_first.call(null,inst_38656);
var inst_38661 = cljs.core.chunk_rest.call(null,inst_38656);
var inst_38662 = cljs.core.count.call(null,inst_38660);
var inst_38637 = inst_38661;
var inst_38638 = inst_38660;
var inst_38639 = inst_38662;
var inst_38640 = (0);
var state_38697__$1 = (function (){var statearr_38732 = state_38697;
(statearr_38732[(10)] = inst_38640);

(statearr_38732[(11)] = inst_38638);

(statearr_38732[(20)] = inst_38639);

(statearr_38732[(21)] = inst_38637);

return statearr_38732;
})();
var statearr_38733_38805 = state_38697__$1;
(statearr_38733_38805[(2)] = null);

(statearr_38733_38805[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38698 === (41))){
var inst_38656 = (state_38697[(25)]);
var inst_38672 = (state_38697[(2)]);
var inst_38673 = cljs.core.next.call(null,inst_38656);
var inst_38637 = inst_38673;
var inst_38638 = null;
var inst_38639 = (0);
var inst_38640 = (0);
var state_38697__$1 = (function (){var statearr_38734 = state_38697;
(statearr_38734[(27)] = inst_38672);

(statearr_38734[(10)] = inst_38640);

(statearr_38734[(11)] = inst_38638);

(statearr_38734[(20)] = inst_38639);

(statearr_38734[(21)] = inst_38637);

return statearr_38734;
})();
var statearr_38735_38806 = state_38697__$1;
(statearr_38735_38806[(2)] = null);

(statearr_38735_38806[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38698 === (43))){
var state_38697__$1 = state_38697;
var statearr_38736_38807 = state_38697__$1;
(statearr_38736_38807[(2)] = null);

(statearr_38736_38807[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38698 === (29))){
var inst_38681 = (state_38697[(2)]);
var state_38697__$1 = state_38697;
var statearr_38737_38808 = state_38697__$1;
(statearr_38737_38808[(2)] = inst_38681);

(statearr_38737_38808[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38698 === (44))){
var inst_38690 = (state_38697[(2)]);
var state_38697__$1 = (function (){var statearr_38738 = state_38697;
(statearr_38738[(28)] = inst_38690);

return statearr_38738;
})();
var statearr_38739_38809 = state_38697__$1;
(statearr_38739_38809[(2)] = null);

(statearr_38739_38809[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38698 === (6))){
var inst_38629 = (state_38697[(29)]);
var inst_38628 = cljs.core.deref.call(null,cs);
var inst_38629__$1 = cljs.core.keys.call(null,inst_38628);
var inst_38630 = cljs.core.count.call(null,inst_38629__$1);
var inst_38631 = cljs.core.reset_BANG_.call(null,dctr,inst_38630);
var inst_38636 = cljs.core.seq.call(null,inst_38629__$1);
var inst_38637 = inst_38636;
var inst_38638 = null;
var inst_38639 = (0);
var inst_38640 = (0);
var state_38697__$1 = (function (){var statearr_38740 = state_38697;
(statearr_38740[(29)] = inst_38629__$1);

(statearr_38740[(10)] = inst_38640);

(statearr_38740[(11)] = inst_38638);

(statearr_38740[(20)] = inst_38639);

(statearr_38740[(21)] = inst_38637);

(statearr_38740[(30)] = inst_38631);

return statearr_38740;
})();
var statearr_38741_38810 = state_38697__$1;
(statearr_38741_38810[(2)] = null);

(statearr_38741_38810[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38698 === (28))){
var inst_38656 = (state_38697[(25)]);
var inst_38637 = (state_38697[(21)]);
var inst_38656__$1 = cljs.core.seq.call(null,inst_38637);
var state_38697__$1 = (function (){var statearr_38742 = state_38697;
(statearr_38742[(25)] = inst_38656__$1);

return statearr_38742;
})();
if(inst_38656__$1){
var statearr_38743_38811 = state_38697__$1;
(statearr_38743_38811[(1)] = (33));

} else {
var statearr_38744_38812 = state_38697__$1;
(statearr_38744_38812[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38698 === (25))){
var inst_38640 = (state_38697[(10)]);
var inst_38639 = (state_38697[(20)]);
var inst_38642 = (inst_38640 < inst_38639);
var inst_38643 = inst_38642;
var state_38697__$1 = state_38697;
if(cljs.core.truth_(inst_38643)){
var statearr_38745_38813 = state_38697__$1;
(statearr_38745_38813[(1)] = (27));

} else {
var statearr_38746_38814 = state_38697__$1;
(statearr_38746_38814[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38698 === (34))){
var state_38697__$1 = state_38697;
var statearr_38747_38815 = state_38697__$1;
(statearr_38747_38815[(2)] = null);

(statearr_38747_38815[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38698 === (17))){
var state_38697__$1 = state_38697;
var statearr_38748_38816 = state_38697__$1;
(statearr_38748_38816[(2)] = null);

(statearr_38748_38816[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38698 === (3))){
var inst_38695 = (state_38697[(2)]);
var state_38697__$1 = state_38697;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38697__$1,inst_38695);
} else {
if((state_val_38698 === (12))){
var inst_38624 = (state_38697[(2)]);
var state_38697__$1 = state_38697;
var statearr_38749_38817 = state_38697__$1;
(statearr_38749_38817[(2)] = inst_38624);

(statearr_38749_38817[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38698 === (2))){
var state_38697__$1 = state_38697;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38697__$1,(4),ch);
} else {
if((state_val_38698 === (23))){
var state_38697__$1 = state_38697;
var statearr_38750_38818 = state_38697__$1;
(statearr_38750_38818[(2)] = null);

(statearr_38750_38818[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38698 === (35))){
var inst_38679 = (state_38697[(2)]);
var state_38697__$1 = state_38697;
var statearr_38751_38819 = state_38697__$1;
(statearr_38751_38819[(2)] = inst_38679);

(statearr_38751_38819[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38698 === (19))){
var inst_38598 = (state_38697[(7)]);
var inst_38602 = cljs.core.chunk_first.call(null,inst_38598);
var inst_38603 = cljs.core.chunk_rest.call(null,inst_38598);
var inst_38604 = cljs.core.count.call(null,inst_38602);
var inst_38578 = inst_38603;
var inst_38579 = inst_38602;
var inst_38580 = inst_38604;
var inst_38581 = (0);
var state_38697__$1 = (function (){var statearr_38752 = state_38697;
(statearr_38752[(14)] = inst_38581);

(statearr_38752[(15)] = inst_38579);

(statearr_38752[(16)] = inst_38578);

(statearr_38752[(17)] = inst_38580);

return statearr_38752;
})();
var statearr_38753_38820 = state_38697__$1;
(statearr_38753_38820[(2)] = null);

(statearr_38753_38820[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38698 === (11))){
var inst_38598 = (state_38697[(7)]);
var inst_38578 = (state_38697[(16)]);
var inst_38598__$1 = cljs.core.seq.call(null,inst_38578);
var state_38697__$1 = (function (){var statearr_38754 = state_38697;
(statearr_38754[(7)] = inst_38598__$1);

return statearr_38754;
})();
if(inst_38598__$1){
var statearr_38755_38821 = state_38697__$1;
(statearr_38755_38821[(1)] = (16));

} else {
var statearr_38756_38822 = state_38697__$1;
(statearr_38756_38822[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38698 === (9))){
var inst_38626 = (state_38697[(2)]);
var state_38697__$1 = state_38697;
var statearr_38757_38823 = state_38697__$1;
(statearr_38757_38823[(2)] = inst_38626);

(statearr_38757_38823[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38698 === (5))){
var inst_38576 = cljs.core.deref.call(null,cs);
var inst_38577 = cljs.core.seq.call(null,inst_38576);
var inst_38578 = inst_38577;
var inst_38579 = null;
var inst_38580 = (0);
var inst_38581 = (0);
var state_38697__$1 = (function (){var statearr_38758 = state_38697;
(statearr_38758[(14)] = inst_38581);

(statearr_38758[(15)] = inst_38579);

(statearr_38758[(16)] = inst_38578);

(statearr_38758[(17)] = inst_38580);

return statearr_38758;
})();
var statearr_38759_38824 = state_38697__$1;
(statearr_38759_38824[(2)] = null);

(statearr_38759_38824[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38698 === (14))){
var state_38697__$1 = state_38697;
var statearr_38760_38825 = state_38697__$1;
(statearr_38760_38825[(2)] = null);

(statearr_38760_38825[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38698 === (45))){
var inst_38687 = (state_38697[(2)]);
var state_38697__$1 = state_38697;
var statearr_38761_38826 = state_38697__$1;
(statearr_38761_38826[(2)] = inst_38687);

(statearr_38761_38826[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38698 === (26))){
var inst_38629 = (state_38697[(29)]);
var inst_38683 = (state_38697[(2)]);
var inst_38684 = cljs.core.seq.call(null,inst_38629);
var state_38697__$1 = (function (){var statearr_38762 = state_38697;
(statearr_38762[(31)] = inst_38683);

return statearr_38762;
})();
if(inst_38684){
var statearr_38763_38827 = state_38697__$1;
(statearr_38763_38827[(1)] = (42));

} else {
var statearr_38764_38828 = state_38697__$1;
(statearr_38764_38828[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38698 === (16))){
var inst_38598 = (state_38697[(7)]);
var inst_38600 = cljs.core.chunked_seq_QMARK_.call(null,inst_38598);
var state_38697__$1 = state_38697;
if(inst_38600){
var statearr_38765_38829 = state_38697__$1;
(statearr_38765_38829[(1)] = (19));

} else {
var statearr_38766_38830 = state_38697__$1;
(statearr_38766_38830[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38698 === (38))){
var inst_38676 = (state_38697[(2)]);
var state_38697__$1 = state_38697;
var statearr_38767_38831 = state_38697__$1;
(statearr_38767_38831[(2)] = inst_38676);

(statearr_38767_38831[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38698 === (30))){
var state_38697__$1 = state_38697;
var statearr_38768_38832 = state_38697__$1;
(statearr_38768_38832[(2)] = null);

(statearr_38768_38832[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38698 === (10))){
var inst_38581 = (state_38697[(14)]);
var inst_38579 = (state_38697[(15)]);
var inst_38587 = cljs.core._nth.call(null,inst_38579,inst_38581);
var inst_38588 = cljs.core.nth.call(null,inst_38587,(0),null);
var inst_38589 = cljs.core.nth.call(null,inst_38587,(1),null);
var state_38697__$1 = (function (){var statearr_38769 = state_38697;
(statearr_38769[(26)] = inst_38588);

return statearr_38769;
})();
if(cljs.core.truth_(inst_38589)){
var statearr_38770_38833 = state_38697__$1;
(statearr_38770_38833[(1)] = (13));

} else {
var statearr_38771_38834 = state_38697__$1;
(statearr_38771_38834[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38698 === (18))){
var inst_38622 = (state_38697[(2)]);
var state_38697__$1 = state_38697;
var statearr_38772_38835 = state_38697__$1;
(statearr_38772_38835[(2)] = inst_38622);

(statearr_38772_38835[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38698 === (42))){
var state_38697__$1 = state_38697;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38697__$1,(45),dchan);
} else {
if((state_val_38698 === (37))){
var inst_38569 = (state_38697[(9)]);
var inst_38656 = (state_38697[(25)]);
var inst_38665 = (state_38697[(23)]);
var inst_38665__$1 = cljs.core.first.call(null,inst_38656);
var inst_38666 = cljs.core.async.put_BANG_.call(null,inst_38665__$1,inst_38569,done);
var state_38697__$1 = (function (){var statearr_38773 = state_38697;
(statearr_38773[(23)] = inst_38665__$1);

return statearr_38773;
})();
if(cljs.core.truth_(inst_38666)){
var statearr_38774_38836 = state_38697__$1;
(statearr_38774_38836[(1)] = (39));

} else {
var statearr_38775_38837 = state_38697__$1;
(statearr_38775_38837[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38698 === (8))){
var inst_38581 = (state_38697[(14)]);
var inst_38580 = (state_38697[(17)]);
var inst_38583 = (inst_38581 < inst_38580);
var inst_38584 = inst_38583;
var state_38697__$1 = state_38697;
if(cljs.core.truth_(inst_38584)){
var statearr_38776_38838 = state_38697__$1;
(statearr_38776_38838[(1)] = (10));

} else {
var statearr_38777_38839 = state_38697__$1;
(statearr_38777_38839[(1)] = (11));

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
});})(c__22319__auto___38785,cs,m,dchan,dctr,done))
;
return ((function (switch__22298__auto__,c__22319__auto___38785,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__22299__auto__ = null;
var cljs$core$async$mult_$_state_machine__22299__auto____0 = (function (){
var statearr_38781 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38781[(0)] = cljs$core$async$mult_$_state_machine__22299__auto__);

(statearr_38781[(1)] = (1));

return statearr_38781;
});
var cljs$core$async$mult_$_state_machine__22299__auto____1 = (function (state_38697){
while(true){
var ret_value__22300__auto__ = (function (){try{while(true){
var result__22301__auto__ = switch__22298__auto__.call(null,state_38697);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22301__auto__;
}
break;
}
}catch (e38782){if((e38782 instanceof Object)){
var ex__22302__auto__ = e38782;
var statearr_38783_38840 = state_38697;
(statearr_38783_38840[(5)] = ex__22302__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38697);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38782;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38841 = state_38697;
state_38697 = G__38841;
continue;
} else {
return ret_value__22300__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__22299__auto__ = function(state_38697){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__22299__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__22299__auto____1.call(this,state_38697);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__22299__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__22299__auto____0;
cljs$core$async$mult_$_state_machine__22299__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__22299__auto____1;
return cljs$core$async$mult_$_state_machine__22299__auto__;
})()
;})(switch__22298__auto__,c__22319__auto___38785,cs,m,dchan,dctr,done))
})();
var state__22321__auto__ = (function (){var statearr_38784 = f__22320__auto__.call(null);
(statearr_38784[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22319__auto___38785);

return statearr_38784;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22321__auto__);
});})(c__22319__auto___38785,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args38842 = [];
var len__20877__auto___38845 = arguments.length;
var i__20878__auto___38846 = (0);
while(true){
if((i__20878__auto___38846 < len__20877__auto___38845)){
args38842.push((arguments[i__20878__auto___38846]));

var G__38847 = (i__20878__auto___38846 + (1));
i__20878__auto___38846 = G__38847;
continue;
} else {
}
break;
}

var G__38844 = args38842.length;
switch (G__38844) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38842.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__20474__auto__ = (((m == null))?null:m);
var m__20475__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__20474__auto__)]);
if(!((m__20475__auto__ == null))){
return m__20475__auto__.call(null,m,ch);
} else {
var m__20475__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__20475__auto____$1 == null))){
return m__20475__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__20474__auto__ = (((m == null))?null:m);
var m__20475__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__20474__auto__)]);
if(!((m__20475__auto__ == null))){
return m__20475__auto__.call(null,m,ch);
} else {
var m__20475__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__20475__auto____$1 == null))){
return m__20475__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__20474__auto__ = (((m == null))?null:m);
var m__20475__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__20474__auto__)]);
if(!((m__20475__auto__ == null))){
return m__20475__auto__.call(null,m);
} else {
var m__20475__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__20475__auto____$1 == null))){
return m__20475__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__20474__auto__ = (((m == null))?null:m);
var m__20475__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__20474__auto__)]);
if(!((m__20475__auto__ == null))){
return m__20475__auto__.call(null,m,state_map);
} else {
var m__20475__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__20475__auto____$1 == null))){
return m__20475__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__20474__auto__ = (((m == null))?null:m);
var m__20475__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__20474__auto__)]);
if(!((m__20475__auto__ == null))){
return m__20475__auto__.call(null,m,mode);
} else {
var m__20475__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__20475__auto____$1 == null))){
return m__20475__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__20884__auto__ = [];
var len__20877__auto___38859 = arguments.length;
var i__20878__auto___38860 = (0);
while(true){
if((i__20878__auto___38860 < len__20877__auto___38859)){
args__20884__auto__.push((arguments[i__20878__auto___38860]));

var G__38861 = (i__20878__auto___38860 + (1));
i__20878__auto___38860 = G__38861;
continue;
} else {
}
break;
}

var argseq__20885__auto__ = ((((3) < args__20884__auto__.length))?(new cljs.core.IndexedSeq(args__20884__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__20885__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__38853){
var map__38854 = p__38853;
var map__38854__$1 = ((((!((map__38854 == null)))?((((map__38854.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38854.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38854):map__38854);
var opts = map__38854__$1;
var statearr_38856_38862 = state;
(statearr_38856_38862[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__38854,map__38854__$1,opts){
return (function (val){
var statearr_38857_38863 = state;
(statearr_38857_38863[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__38854,map__38854__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_38858_38864 = state;
(statearr_38858_38864[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq38849){
var G__38850 = cljs.core.first.call(null,seq38849);
var seq38849__$1 = cljs.core.next.call(null,seq38849);
var G__38851 = cljs.core.first.call(null,seq38849__$1);
var seq38849__$2 = cljs.core.next.call(null,seq38849__$1);
var G__38852 = cljs.core.first.call(null,seq38849__$2);
var seq38849__$3 = cljs.core.next.call(null,seq38849__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__38850,G__38851,G__38852,seq38849__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async39028 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39028 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta39029){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta39029 = meta39029;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async39028.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_39030,meta39029__$1){
var self__ = this;
var _39030__$1 = this;
return (new cljs.core.async.t_cljs$core$async39028(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta39029__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async39028.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_39030){
var self__ = this;
var _39030__$1 = this;
return self__.meta39029;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async39028.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async39028.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async39028.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async39028.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async39028.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async39028.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async39028.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async39028.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async39028.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta39029","meta39029",1065460351,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async39028.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39028.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39028";

cljs.core.async.t_cljs$core$async39028.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__20417__auto__,writer__20418__auto__,opt__20419__auto__){
return cljs.core._write.call(null,writer__20418__auto__,"cljs.core.async/t_cljs$core$async39028");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async39028 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async39028(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta39029){
return (new cljs.core.async.t_cljs$core$async39028(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta39029));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async39028(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__22319__auto___39191 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22319__auto___39191,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__22320__auto__ = (function (){var switch__22298__auto__ = ((function (c__22319__auto___39191,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_39128){
var state_val_39129 = (state_39128[(1)]);
if((state_val_39129 === (7))){
var inst_39046 = (state_39128[(2)]);
var state_39128__$1 = state_39128;
var statearr_39130_39192 = state_39128__$1;
(statearr_39130_39192[(2)] = inst_39046);

(statearr_39130_39192[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39129 === (20))){
var inst_39058 = (state_39128[(7)]);
var state_39128__$1 = state_39128;
var statearr_39131_39193 = state_39128__$1;
(statearr_39131_39193[(2)] = inst_39058);

(statearr_39131_39193[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39129 === (27))){
var state_39128__$1 = state_39128;
var statearr_39132_39194 = state_39128__$1;
(statearr_39132_39194[(2)] = null);

(statearr_39132_39194[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39129 === (1))){
var inst_39034 = (state_39128[(8)]);
var inst_39034__$1 = calc_state.call(null);
var inst_39036 = (inst_39034__$1 == null);
var inst_39037 = cljs.core.not.call(null,inst_39036);
var state_39128__$1 = (function (){var statearr_39133 = state_39128;
(statearr_39133[(8)] = inst_39034__$1);

return statearr_39133;
})();
if(inst_39037){
var statearr_39134_39195 = state_39128__$1;
(statearr_39134_39195[(1)] = (2));

} else {
var statearr_39135_39196 = state_39128__$1;
(statearr_39135_39196[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39129 === (24))){
var inst_39102 = (state_39128[(9)]);
var inst_39081 = (state_39128[(10)]);
var inst_39088 = (state_39128[(11)]);
var inst_39102__$1 = inst_39081.call(null,inst_39088);
var state_39128__$1 = (function (){var statearr_39136 = state_39128;
(statearr_39136[(9)] = inst_39102__$1);

return statearr_39136;
})();
if(cljs.core.truth_(inst_39102__$1)){
var statearr_39137_39197 = state_39128__$1;
(statearr_39137_39197[(1)] = (29));

} else {
var statearr_39138_39198 = state_39128__$1;
(statearr_39138_39198[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39129 === (4))){
var inst_39049 = (state_39128[(2)]);
var state_39128__$1 = state_39128;
if(cljs.core.truth_(inst_39049)){
var statearr_39139_39199 = state_39128__$1;
(statearr_39139_39199[(1)] = (8));

} else {
var statearr_39140_39200 = state_39128__$1;
(statearr_39140_39200[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39129 === (15))){
var inst_39075 = (state_39128[(2)]);
var state_39128__$1 = state_39128;
if(cljs.core.truth_(inst_39075)){
var statearr_39141_39201 = state_39128__$1;
(statearr_39141_39201[(1)] = (19));

} else {
var statearr_39142_39202 = state_39128__$1;
(statearr_39142_39202[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39129 === (21))){
var inst_39080 = (state_39128[(12)]);
var inst_39080__$1 = (state_39128[(2)]);
var inst_39081 = cljs.core.get.call(null,inst_39080__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_39082 = cljs.core.get.call(null,inst_39080__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_39083 = cljs.core.get.call(null,inst_39080__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_39128__$1 = (function (){var statearr_39143 = state_39128;
(statearr_39143[(13)] = inst_39082);

(statearr_39143[(12)] = inst_39080__$1);

(statearr_39143[(10)] = inst_39081);

return statearr_39143;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_39128__$1,(22),inst_39083);
} else {
if((state_val_39129 === (31))){
var inst_39110 = (state_39128[(2)]);
var state_39128__$1 = state_39128;
if(cljs.core.truth_(inst_39110)){
var statearr_39144_39203 = state_39128__$1;
(statearr_39144_39203[(1)] = (32));

} else {
var statearr_39145_39204 = state_39128__$1;
(statearr_39145_39204[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39129 === (32))){
var inst_39087 = (state_39128[(14)]);
var state_39128__$1 = state_39128;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39128__$1,(35),out,inst_39087);
} else {
if((state_val_39129 === (33))){
var inst_39080 = (state_39128[(12)]);
var inst_39058 = inst_39080;
var state_39128__$1 = (function (){var statearr_39146 = state_39128;
(statearr_39146[(7)] = inst_39058);

return statearr_39146;
})();
var statearr_39147_39205 = state_39128__$1;
(statearr_39147_39205[(2)] = null);

(statearr_39147_39205[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39129 === (13))){
var inst_39058 = (state_39128[(7)]);
var inst_39065 = inst_39058.cljs$lang$protocol_mask$partition0$;
var inst_39066 = (inst_39065 & (64));
var inst_39067 = inst_39058.cljs$core$ISeq$;
var inst_39068 = (inst_39066) || (inst_39067);
var state_39128__$1 = state_39128;
if(cljs.core.truth_(inst_39068)){
var statearr_39148_39206 = state_39128__$1;
(statearr_39148_39206[(1)] = (16));

} else {
var statearr_39149_39207 = state_39128__$1;
(statearr_39149_39207[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39129 === (22))){
var inst_39087 = (state_39128[(14)]);
var inst_39088 = (state_39128[(11)]);
var inst_39086 = (state_39128[(2)]);
var inst_39087__$1 = cljs.core.nth.call(null,inst_39086,(0),null);
var inst_39088__$1 = cljs.core.nth.call(null,inst_39086,(1),null);
var inst_39089 = (inst_39087__$1 == null);
var inst_39090 = cljs.core._EQ_.call(null,inst_39088__$1,change);
var inst_39091 = (inst_39089) || (inst_39090);
var state_39128__$1 = (function (){var statearr_39150 = state_39128;
(statearr_39150[(14)] = inst_39087__$1);

(statearr_39150[(11)] = inst_39088__$1);

return statearr_39150;
})();
if(cljs.core.truth_(inst_39091)){
var statearr_39151_39208 = state_39128__$1;
(statearr_39151_39208[(1)] = (23));

} else {
var statearr_39152_39209 = state_39128__$1;
(statearr_39152_39209[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39129 === (36))){
var inst_39080 = (state_39128[(12)]);
var inst_39058 = inst_39080;
var state_39128__$1 = (function (){var statearr_39153 = state_39128;
(statearr_39153[(7)] = inst_39058);

return statearr_39153;
})();
var statearr_39154_39210 = state_39128__$1;
(statearr_39154_39210[(2)] = null);

(statearr_39154_39210[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39129 === (29))){
var inst_39102 = (state_39128[(9)]);
var state_39128__$1 = state_39128;
var statearr_39155_39211 = state_39128__$1;
(statearr_39155_39211[(2)] = inst_39102);

(statearr_39155_39211[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39129 === (6))){
var state_39128__$1 = state_39128;
var statearr_39156_39212 = state_39128__$1;
(statearr_39156_39212[(2)] = false);

(statearr_39156_39212[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39129 === (28))){
var inst_39098 = (state_39128[(2)]);
var inst_39099 = calc_state.call(null);
var inst_39058 = inst_39099;
var state_39128__$1 = (function (){var statearr_39157 = state_39128;
(statearr_39157[(7)] = inst_39058);

(statearr_39157[(15)] = inst_39098);

return statearr_39157;
})();
var statearr_39158_39213 = state_39128__$1;
(statearr_39158_39213[(2)] = null);

(statearr_39158_39213[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39129 === (25))){
var inst_39124 = (state_39128[(2)]);
var state_39128__$1 = state_39128;
var statearr_39159_39214 = state_39128__$1;
(statearr_39159_39214[(2)] = inst_39124);

(statearr_39159_39214[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39129 === (34))){
var inst_39122 = (state_39128[(2)]);
var state_39128__$1 = state_39128;
var statearr_39160_39215 = state_39128__$1;
(statearr_39160_39215[(2)] = inst_39122);

(statearr_39160_39215[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39129 === (17))){
var state_39128__$1 = state_39128;
var statearr_39161_39216 = state_39128__$1;
(statearr_39161_39216[(2)] = false);

(statearr_39161_39216[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39129 === (3))){
var state_39128__$1 = state_39128;
var statearr_39162_39217 = state_39128__$1;
(statearr_39162_39217[(2)] = false);

(statearr_39162_39217[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39129 === (12))){
var inst_39126 = (state_39128[(2)]);
var state_39128__$1 = state_39128;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39128__$1,inst_39126);
} else {
if((state_val_39129 === (2))){
var inst_39034 = (state_39128[(8)]);
var inst_39039 = inst_39034.cljs$lang$protocol_mask$partition0$;
var inst_39040 = (inst_39039 & (64));
var inst_39041 = inst_39034.cljs$core$ISeq$;
var inst_39042 = (inst_39040) || (inst_39041);
var state_39128__$1 = state_39128;
if(cljs.core.truth_(inst_39042)){
var statearr_39163_39218 = state_39128__$1;
(statearr_39163_39218[(1)] = (5));

} else {
var statearr_39164_39219 = state_39128__$1;
(statearr_39164_39219[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39129 === (23))){
var inst_39087 = (state_39128[(14)]);
var inst_39093 = (inst_39087 == null);
var state_39128__$1 = state_39128;
if(cljs.core.truth_(inst_39093)){
var statearr_39165_39220 = state_39128__$1;
(statearr_39165_39220[(1)] = (26));

} else {
var statearr_39166_39221 = state_39128__$1;
(statearr_39166_39221[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39129 === (35))){
var inst_39113 = (state_39128[(2)]);
var state_39128__$1 = state_39128;
if(cljs.core.truth_(inst_39113)){
var statearr_39167_39222 = state_39128__$1;
(statearr_39167_39222[(1)] = (36));

} else {
var statearr_39168_39223 = state_39128__$1;
(statearr_39168_39223[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39129 === (19))){
var inst_39058 = (state_39128[(7)]);
var inst_39077 = cljs.core.apply.call(null,cljs.core.hash_map,inst_39058);
var state_39128__$1 = state_39128;
var statearr_39169_39224 = state_39128__$1;
(statearr_39169_39224[(2)] = inst_39077);

(statearr_39169_39224[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39129 === (11))){
var inst_39058 = (state_39128[(7)]);
var inst_39062 = (inst_39058 == null);
var inst_39063 = cljs.core.not.call(null,inst_39062);
var state_39128__$1 = state_39128;
if(inst_39063){
var statearr_39170_39225 = state_39128__$1;
(statearr_39170_39225[(1)] = (13));

} else {
var statearr_39171_39226 = state_39128__$1;
(statearr_39171_39226[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39129 === (9))){
var inst_39034 = (state_39128[(8)]);
var state_39128__$1 = state_39128;
var statearr_39172_39227 = state_39128__$1;
(statearr_39172_39227[(2)] = inst_39034);

(statearr_39172_39227[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39129 === (5))){
var state_39128__$1 = state_39128;
var statearr_39173_39228 = state_39128__$1;
(statearr_39173_39228[(2)] = true);

(statearr_39173_39228[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39129 === (14))){
var state_39128__$1 = state_39128;
var statearr_39174_39229 = state_39128__$1;
(statearr_39174_39229[(2)] = false);

(statearr_39174_39229[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39129 === (26))){
var inst_39088 = (state_39128[(11)]);
var inst_39095 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_39088);
var state_39128__$1 = state_39128;
var statearr_39175_39230 = state_39128__$1;
(statearr_39175_39230[(2)] = inst_39095);

(statearr_39175_39230[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39129 === (16))){
var state_39128__$1 = state_39128;
var statearr_39176_39231 = state_39128__$1;
(statearr_39176_39231[(2)] = true);

(statearr_39176_39231[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39129 === (38))){
var inst_39118 = (state_39128[(2)]);
var state_39128__$1 = state_39128;
var statearr_39177_39232 = state_39128__$1;
(statearr_39177_39232[(2)] = inst_39118);

(statearr_39177_39232[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39129 === (30))){
var inst_39082 = (state_39128[(13)]);
var inst_39081 = (state_39128[(10)]);
var inst_39088 = (state_39128[(11)]);
var inst_39105 = cljs.core.empty_QMARK_.call(null,inst_39081);
var inst_39106 = inst_39082.call(null,inst_39088);
var inst_39107 = cljs.core.not.call(null,inst_39106);
var inst_39108 = (inst_39105) && (inst_39107);
var state_39128__$1 = state_39128;
var statearr_39178_39233 = state_39128__$1;
(statearr_39178_39233[(2)] = inst_39108);

(statearr_39178_39233[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39129 === (10))){
var inst_39034 = (state_39128[(8)]);
var inst_39054 = (state_39128[(2)]);
var inst_39055 = cljs.core.get.call(null,inst_39054,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_39056 = cljs.core.get.call(null,inst_39054,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_39057 = cljs.core.get.call(null,inst_39054,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_39058 = inst_39034;
var state_39128__$1 = (function (){var statearr_39179 = state_39128;
(statearr_39179[(16)] = inst_39056);

(statearr_39179[(7)] = inst_39058);

(statearr_39179[(17)] = inst_39057);

(statearr_39179[(18)] = inst_39055);

return statearr_39179;
})();
var statearr_39180_39234 = state_39128__$1;
(statearr_39180_39234[(2)] = null);

(statearr_39180_39234[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39129 === (18))){
var inst_39072 = (state_39128[(2)]);
var state_39128__$1 = state_39128;
var statearr_39181_39235 = state_39128__$1;
(statearr_39181_39235[(2)] = inst_39072);

(statearr_39181_39235[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39129 === (37))){
var state_39128__$1 = state_39128;
var statearr_39182_39236 = state_39128__$1;
(statearr_39182_39236[(2)] = null);

(statearr_39182_39236[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39129 === (8))){
var inst_39034 = (state_39128[(8)]);
var inst_39051 = cljs.core.apply.call(null,cljs.core.hash_map,inst_39034);
var state_39128__$1 = state_39128;
var statearr_39183_39237 = state_39128__$1;
(statearr_39183_39237[(2)] = inst_39051);

(statearr_39183_39237[(1)] = (10));


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
});})(c__22319__auto___39191,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__22298__auto__,c__22319__auto___39191,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__22299__auto__ = null;
var cljs$core$async$mix_$_state_machine__22299__auto____0 = (function (){
var statearr_39187 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39187[(0)] = cljs$core$async$mix_$_state_machine__22299__auto__);

(statearr_39187[(1)] = (1));

return statearr_39187;
});
var cljs$core$async$mix_$_state_machine__22299__auto____1 = (function (state_39128){
while(true){
var ret_value__22300__auto__ = (function (){try{while(true){
var result__22301__auto__ = switch__22298__auto__.call(null,state_39128);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22301__auto__;
}
break;
}
}catch (e39188){if((e39188 instanceof Object)){
var ex__22302__auto__ = e39188;
var statearr_39189_39238 = state_39128;
(statearr_39189_39238[(5)] = ex__22302__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39128);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39188;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39239 = state_39128;
state_39128 = G__39239;
continue;
} else {
return ret_value__22300__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__22299__auto__ = function(state_39128){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__22299__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__22299__auto____1.call(this,state_39128);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__22299__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__22299__auto____0;
cljs$core$async$mix_$_state_machine__22299__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__22299__auto____1;
return cljs$core$async$mix_$_state_machine__22299__auto__;
})()
;})(switch__22298__auto__,c__22319__auto___39191,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__22321__auto__ = (function (){var statearr_39190 = f__22320__auto__.call(null);
(statearr_39190[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22319__auto___39191);

return statearr_39190;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22321__auto__);
});})(c__22319__auto___39191,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__20474__auto__ = (((p == null))?null:p);
var m__20475__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__20474__auto__)]);
if(!((m__20475__auto__ == null))){
return m__20475__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__20475__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__20475__auto____$1 == null))){
return m__20475__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__20474__auto__ = (((p == null))?null:p);
var m__20475__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__20474__auto__)]);
if(!((m__20475__auto__ == null))){
return m__20475__auto__.call(null,p,v,ch);
} else {
var m__20475__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__20475__auto____$1 == null))){
return m__20475__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args39240 = [];
var len__20877__auto___39243 = arguments.length;
var i__20878__auto___39244 = (0);
while(true){
if((i__20878__auto___39244 < len__20877__auto___39243)){
args39240.push((arguments[i__20878__auto___39244]));

var G__39245 = (i__20878__auto___39244 + (1));
i__20878__auto___39244 = G__39245;
continue;
} else {
}
break;
}

var G__39242 = args39240.length;
switch (G__39242) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39240.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__20474__auto__ = (((p == null))?null:p);
var m__20475__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__20474__auto__)]);
if(!((m__20475__auto__ == null))){
return m__20475__auto__.call(null,p);
} else {
var m__20475__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__20475__auto____$1 == null))){
return m__20475__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__20474__auto__ = (((p == null))?null:p);
var m__20475__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__20474__auto__)]);
if(!((m__20475__auto__ == null))){
return m__20475__auto__.call(null,p,v);
} else {
var m__20475__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__20475__auto____$1 == null))){
return m__20475__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args39248 = [];
var len__20877__auto___39373 = arguments.length;
var i__20878__auto___39374 = (0);
while(true){
if((i__20878__auto___39374 < len__20877__auto___39373)){
args39248.push((arguments[i__20878__auto___39374]));

var G__39375 = (i__20878__auto___39374 + (1));
i__20878__auto___39374 = G__39375;
continue;
} else {
}
break;
}

var G__39250 = args39248.length;
switch (G__39250) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39248.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__19819__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__19819__auto__)){
return or__19819__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__19819__auto__,mults){
return (function (p1__39247_SHARP_){
if(cljs.core.truth_(p1__39247_SHARP_.call(null,topic))){
return p1__39247_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__39247_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__19819__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async39251 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39251 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta39252){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta39252 = meta39252;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async39251.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_39253,meta39252__$1){
var self__ = this;
var _39253__$1 = this;
return (new cljs.core.async.t_cljs$core$async39251(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta39252__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async39251.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_39253){
var self__ = this;
var _39253__$1 = this;
return self__.meta39252;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async39251.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async39251.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async39251.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async39251.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async39251.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async39251.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async39251.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async39251.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta39252","meta39252",98596935,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async39251.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39251.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39251";

cljs.core.async.t_cljs$core$async39251.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__20417__auto__,writer__20418__auto__,opt__20419__auto__){
return cljs.core._write.call(null,writer__20418__auto__,"cljs.core.async/t_cljs$core$async39251");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async39251 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async39251(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta39252){
return (new cljs.core.async.t_cljs$core$async39251(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta39252));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async39251(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__22319__auto___39377 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22319__auto___39377,mults,ensure_mult,p){
return (function (){
var f__22320__auto__ = (function (){var switch__22298__auto__ = ((function (c__22319__auto___39377,mults,ensure_mult,p){
return (function (state_39325){
var state_val_39326 = (state_39325[(1)]);
if((state_val_39326 === (7))){
var inst_39321 = (state_39325[(2)]);
var state_39325__$1 = state_39325;
var statearr_39327_39378 = state_39325__$1;
(statearr_39327_39378[(2)] = inst_39321);

(statearr_39327_39378[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39326 === (20))){
var state_39325__$1 = state_39325;
var statearr_39328_39379 = state_39325__$1;
(statearr_39328_39379[(2)] = null);

(statearr_39328_39379[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39326 === (1))){
var state_39325__$1 = state_39325;
var statearr_39329_39380 = state_39325__$1;
(statearr_39329_39380[(2)] = null);

(statearr_39329_39380[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39326 === (24))){
var inst_39304 = (state_39325[(7)]);
var inst_39313 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_39304);
var state_39325__$1 = state_39325;
var statearr_39330_39381 = state_39325__$1;
(statearr_39330_39381[(2)] = inst_39313);

(statearr_39330_39381[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39326 === (4))){
var inst_39256 = (state_39325[(8)]);
var inst_39256__$1 = (state_39325[(2)]);
var inst_39257 = (inst_39256__$1 == null);
var state_39325__$1 = (function (){var statearr_39331 = state_39325;
(statearr_39331[(8)] = inst_39256__$1);

return statearr_39331;
})();
if(cljs.core.truth_(inst_39257)){
var statearr_39332_39382 = state_39325__$1;
(statearr_39332_39382[(1)] = (5));

} else {
var statearr_39333_39383 = state_39325__$1;
(statearr_39333_39383[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39326 === (15))){
var inst_39298 = (state_39325[(2)]);
var state_39325__$1 = state_39325;
var statearr_39334_39384 = state_39325__$1;
(statearr_39334_39384[(2)] = inst_39298);

(statearr_39334_39384[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39326 === (21))){
var inst_39318 = (state_39325[(2)]);
var state_39325__$1 = (function (){var statearr_39335 = state_39325;
(statearr_39335[(9)] = inst_39318);

return statearr_39335;
})();
var statearr_39336_39385 = state_39325__$1;
(statearr_39336_39385[(2)] = null);

(statearr_39336_39385[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39326 === (13))){
var inst_39280 = (state_39325[(10)]);
var inst_39282 = cljs.core.chunked_seq_QMARK_.call(null,inst_39280);
var state_39325__$1 = state_39325;
if(inst_39282){
var statearr_39337_39386 = state_39325__$1;
(statearr_39337_39386[(1)] = (16));

} else {
var statearr_39338_39387 = state_39325__$1;
(statearr_39338_39387[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39326 === (22))){
var inst_39310 = (state_39325[(2)]);
var state_39325__$1 = state_39325;
if(cljs.core.truth_(inst_39310)){
var statearr_39339_39388 = state_39325__$1;
(statearr_39339_39388[(1)] = (23));

} else {
var statearr_39340_39389 = state_39325__$1;
(statearr_39340_39389[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39326 === (6))){
var inst_39256 = (state_39325[(8)]);
var inst_39304 = (state_39325[(7)]);
var inst_39306 = (state_39325[(11)]);
var inst_39304__$1 = topic_fn.call(null,inst_39256);
var inst_39305 = cljs.core.deref.call(null,mults);
var inst_39306__$1 = cljs.core.get.call(null,inst_39305,inst_39304__$1);
var state_39325__$1 = (function (){var statearr_39341 = state_39325;
(statearr_39341[(7)] = inst_39304__$1);

(statearr_39341[(11)] = inst_39306__$1);

return statearr_39341;
})();
if(cljs.core.truth_(inst_39306__$1)){
var statearr_39342_39390 = state_39325__$1;
(statearr_39342_39390[(1)] = (19));

} else {
var statearr_39343_39391 = state_39325__$1;
(statearr_39343_39391[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39326 === (25))){
var inst_39315 = (state_39325[(2)]);
var state_39325__$1 = state_39325;
var statearr_39344_39392 = state_39325__$1;
(statearr_39344_39392[(2)] = inst_39315);

(statearr_39344_39392[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39326 === (17))){
var inst_39280 = (state_39325[(10)]);
var inst_39289 = cljs.core.first.call(null,inst_39280);
var inst_39290 = cljs.core.async.muxch_STAR_.call(null,inst_39289);
var inst_39291 = cljs.core.async.close_BANG_.call(null,inst_39290);
var inst_39292 = cljs.core.next.call(null,inst_39280);
var inst_39266 = inst_39292;
var inst_39267 = null;
var inst_39268 = (0);
var inst_39269 = (0);
var state_39325__$1 = (function (){var statearr_39345 = state_39325;
(statearr_39345[(12)] = inst_39291);

(statearr_39345[(13)] = inst_39266);

(statearr_39345[(14)] = inst_39267);

(statearr_39345[(15)] = inst_39268);

(statearr_39345[(16)] = inst_39269);

return statearr_39345;
})();
var statearr_39346_39393 = state_39325__$1;
(statearr_39346_39393[(2)] = null);

(statearr_39346_39393[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39326 === (3))){
var inst_39323 = (state_39325[(2)]);
var state_39325__$1 = state_39325;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39325__$1,inst_39323);
} else {
if((state_val_39326 === (12))){
var inst_39300 = (state_39325[(2)]);
var state_39325__$1 = state_39325;
var statearr_39347_39394 = state_39325__$1;
(statearr_39347_39394[(2)] = inst_39300);

(statearr_39347_39394[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39326 === (2))){
var state_39325__$1 = state_39325;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39325__$1,(4),ch);
} else {
if((state_val_39326 === (23))){
var state_39325__$1 = state_39325;
var statearr_39348_39395 = state_39325__$1;
(statearr_39348_39395[(2)] = null);

(statearr_39348_39395[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39326 === (19))){
var inst_39256 = (state_39325[(8)]);
var inst_39306 = (state_39325[(11)]);
var inst_39308 = cljs.core.async.muxch_STAR_.call(null,inst_39306);
var state_39325__$1 = state_39325;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39325__$1,(22),inst_39308,inst_39256);
} else {
if((state_val_39326 === (11))){
var inst_39280 = (state_39325[(10)]);
var inst_39266 = (state_39325[(13)]);
var inst_39280__$1 = cljs.core.seq.call(null,inst_39266);
var state_39325__$1 = (function (){var statearr_39349 = state_39325;
(statearr_39349[(10)] = inst_39280__$1);

return statearr_39349;
})();
if(inst_39280__$1){
var statearr_39350_39396 = state_39325__$1;
(statearr_39350_39396[(1)] = (13));

} else {
var statearr_39351_39397 = state_39325__$1;
(statearr_39351_39397[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39326 === (9))){
var inst_39302 = (state_39325[(2)]);
var state_39325__$1 = state_39325;
var statearr_39352_39398 = state_39325__$1;
(statearr_39352_39398[(2)] = inst_39302);

(statearr_39352_39398[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39326 === (5))){
var inst_39263 = cljs.core.deref.call(null,mults);
var inst_39264 = cljs.core.vals.call(null,inst_39263);
var inst_39265 = cljs.core.seq.call(null,inst_39264);
var inst_39266 = inst_39265;
var inst_39267 = null;
var inst_39268 = (0);
var inst_39269 = (0);
var state_39325__$1 = (function (){var statearr_39353 = state_39325;
(statearr_39353[(13)] = inst_39266);

(statearr_39353[(14)] = inst_39267);

(statearr_39353[(15)] = inst_39268);

(statearr_39353[(16)] = inst_39269);

return statearr_39353;
})();
var statearr_39354_39399 = state_39325__$1;
(statearr_39354_39399[(2)] = null);

(statearr_39354_39399[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39326 === (14))){
var state_39325__$1 = state_39325;
var statearr_39358_39400 = state_39325__$1;
(statearr_39358_39400[(2)] = null);

(statearr_39358_39400[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39326 === (16))){
var inst_39280 = (state_39325[(10)]);
var inst_39284 = cljs.core.chunk_first.call(null,inst_39280);
var inst_39285 = cljs.core.chunk_rest.call(null,inst_39280);
var inst_39286 = cljs.core.count.call(null,inst_39284);
var inst_39266 = inst_39285;
var inst_39267 = inst_39284;
var inst_39268 = inst_39286;
var inst_39269 = (0);
var state_39325__$1 = (function (){var statearr_39359 = state_39325;
(statearr_39359[(13)] = inst_39266);

(statearr_39359[(14)] = inst_39267);

(statearr_39359[(15)] = inst_39268);

(statearr_39359[(16)] = inst_39269);

return statearr_39359;
})();
var statearr_39360_39401 = state_39325__$1;
(statearr_39360_39401[(2)] = null);

(statearr_39360_39401[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39326 === (10))){
var inst_39266 = (state_39325[(13)]);
var inst_39267 = (state_39325[(14)]);
var inst_39268 = (state_39325[(15)]);
var inst_39269 = (state_39325[(16)]);
var inst_39274 = cljs.core._nth.call(null,inst_39267,inst_39269);
var inst_39275 = cljs.core.async.muxch_STAR_.call(null,inst_39274);
var inst_39276 = cljs.core.async.close_BANG_.call(null,inst_39275);
var inst_39277 = (inst_39269 + (1));
var tmp39355 = inst_39266;
var tmp39356 = inst_39267;
var tmp39357 = inst_39268;
var inst_39266__$1 = tmp39355;
var inst_39267__$1 = tmp39356;
var inst_39268__$1 = tmp39357;
var inst_39269__$1 = inst_39277;
var state_39325__$1 = (function (){var statearr_39361 = state_39325;
(statearr_39361[(17)] = inst_39276);

(statearr_39361[(13)] = inst_39266__$1);

(statearr_39361[(14)] = inst_39267__$1);

(statearr_39361[(15)] = inst_39268__$1);

(statearr_39361[(16)] = inst_39269__$1);

return statearr_39361;
})();
var statearr_39362_39402 = state_39325__$1;
(statearr_39362_39402[(2)] = null);

(statearr_39362_39402[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39326 === (18))){
var inst_39295 = (state_39325[(2)]);
var state_39325__$1 = state_39325;
var statearr_39363_39403 = state_39325__$1;
(statearr_39363_39403[(2)] = inst_39295);

(statearr_39363_39403[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39326 === (8))){
var inst_39268 = (state_39325[(15)]);
var inst_39269 = (state_39325[(16)]);
var inst_39271 = (inst_39269 < inst_39268);
var inst_39272 = inst_39271;
var state_39325__$1 = state_39325;
if(cljs.core.truth_(inst_39272)){
var statearr_39364_39404 = state_39325__$1;
(statearr_39364_39404[(1)] = (10));

} else {
var statearr_39365_39405 = state_39325__$1;
(statearr_39365_39405[(1)] = (11));

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
});})(c__22319__auto___39377,mults,ensure_mult,p))
;
return ((function (switch__22298__auto__,c__22319__auto___39377,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__22299__auto__ = null;
var cljs$core$async$state_machine__22299__auto____0 = (function (){
var statearr_39369 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39369[(0)] = cljs$core$async$state_machine__22299__auto__);

(statearr_39369[(1)] = (1));

return statearr_39369;
});
var cljs$core$async$state_machine__22299__auto____1 = (function (state_39325){
while(true){
var ret_value__22300__auto__ = (function (){try{while(true){
var result__22301__auto__ = switch__22298__auto__.call(null,state_39325);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22301__auto__;
}
break;
}
}catch (e39370){if((e39370 instanceof Object)){
var ex__22302__auto__ = e39370;
var statearr_39371_39406 = state_39325;
(statearr_39371_39406[(5)] = ex__22302__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39325);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39370;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39407 = state_39325;
state_39325 = G__39407;
continue;
} else {
return ret_value__22300__auto__;
}
break;
}
});
cljs$core$async$state_machine__22299__auto__ = function(state_39325){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22299__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22299__auto____1.call(this,state_39325);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22299__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22299__auto____0;
cljs$core$async$state_machine__22299__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22299__auto____1;
return cljs$core$async$state_machine__22299__auto__;
})()
;})(switch__22298__auto__,c__22319__auto___39377,mults,ensure_mult,p))
})();
var state__22321__auto__ = (function (){var statearr_39372 = f__22320__auto__.call(null);
(statearr_39372[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22319__auto___39377);

return statearr_39372;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22321__auto__);
});})(c__22319__auto___39377,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args39408 = [];
var len__20877__auto___39411 = arguments.length;
var i__20878__auto___39412 = (0);
while(true){
if((i__20878__auto___39412 < len__20877__auto___39411)){
args39408.push((arguments[i__20878__auto___39412]));

var G__39413 = (i__20878__auto___39412 + (1));
i__20878__auto___39412 = G__39413;
continue;
} else {
}
break;
}

var G__39410 = args39408.length;
switch (G__39410) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39408.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args39415 = [];
var len__20877__auto___39418 = arguments.length;
var i__20878__auto___39419 = (0);
while(true){
if((i__20878__auto___39419 < len__20877__auto___39418)){
args39415.push((arguments[i__20878__auto___39419]));

var G__39420 = (i__20878__auto___39419 + (1));
i__20878__auto___39419 = G__39420;
continue;
} else {
}
break;
}

var G__39417 = args39415.length;
switch (G__39417) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39415.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args39422 = [];
var len__20877__auto___39493 = arguments.length;
var i__20878__auto___39494 = (0);
while(true){
if((i__20878__auto___39494 < len__20877__auto___39493)){
args39422.push((arguments[i__20878__auto___39494]));

var G__39495 = (i__20878__auto___39494 + (1));
i__20878__auto___39494 = G__39495;
continue;
} else {
}
break;
}

var G__39424 = args39422.length;
switch (G__39424) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39422.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__22319__auto___39497 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22319__auto___39497,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__22320__auto__ = (function (){var switch__22298__auto__ = ((function (c__22319__auto___39497,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_39463){
var state_val_39464 = (state_39463[(1)]);
if((state_val_39464 === (7))){
var state_39463__$1 = state_39463;
var statearr_39465_39498 = state_39463__$1;
(statearr_39465_39498[(2)] = null);

(statearr_39465_39498[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39464 === (1))){
var state_39463__$1 = state_39463;
var statearr_39466_39499 = state_39463__$1;
(statearr_39466_39499[(2)] = null);

(statearr_39466_39499[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39464 === (4))){
var inst_39427 = (state_39463[(7)]);
var inst_39429 = (inst_39427 < cnt);
var state_39463__$1 = state_39463;
if(cljs.core.truth_(inst_39429)){
var statearr_39467_39500 = state_39463__$1;
(statearr_39467_39500[(1)] = (6));

} else {
var statearr_39468_39501 = state_39463__$1;
(statearr_39468_39501[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39464 === (15))){
var inst_39459 = (state_39463[(2)]);
var state_39463__$1 = state_39463;
var statearr_39469_39502 = state_39463__$1;
(statearr_39469_39502[(2)] = inst_39459);

(statearr_39469_39502[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39464 === (13))){
var inst_39452 = cljs.core.async.close_BANG_.call(null,out);
var state_39463__$1 = state_39463;
var statearr_39470_39503 = state_39463__$1;
(statearr_39470_39503[(2)] = inst_39452);

(statearr_39470_39503[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39464 === (6))){
var state_39463__$1 = state_39463;
var statearr_39471_39504 = state_39463__$1;
(statearr_39471_39504[(2)] = null);

(statearr_39471_39504[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39464 === (3))){
var inst_39461 = (state_39463[(2)]);
var state_39463__$1 = state_39463;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39463__$1,inst_39461);
} else {
if((state_val_39464 === (12))){
var inst_39449 = (state_39463[(8)]);
var inst_39449__$1 = (state_39463[(2)]);
var inst_39450 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_39449__$1);
var state_39463__$1 = (function (){var statearr_39472 = state_39463;
(statearr_39472[(8)] = inst_39449__$1);

return statearr_39472;
})();
if(cljs.core.truth_(inst_39450)){
var statearr_39473_39505 = state_39463__$1;
(statearr_39473_39505[(1)] = (13));

} else {
var statearr_39474_39506 = state_39463__$1;
(statearr_39474_39506[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39464 === (2))){
var inst_39426 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_39427 = (0);
var state_39463__$1 = (function (){var statearr_39475 = state_39463;
(statearr_39475[(9)] = inst_39426);

(statearr_39475[(7)] = inst_39427);

return statearr_39475;
})();
var statearr_39476_39507 = state_39463__$1;
(statearr_39476_39507[(2)] = null);

(statearr_39476_39507[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39464 === (11))){
var inst_39427 = (state_39463[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_39463,(10),Object,null,(9));
var inst_39436 = chs__$1.call(null,inst_39427);
var inst_39437 = done.call(null,inst_39427);
var inst_39438 = cljs.core.async.take_BANG_.call(null,inst_39436,inst_39437);
var state_39463__$1 = state_39463;
var statearr_39477_39508 = state_39463__$1;
(statearr_39477_39508[(2)] = inst_39438);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39463__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39464 === (9))){
var inst_39427 = (state_39463[(7)]);
var inst_39440 = (state_39463[(2)]);
var inst_39441 = (inst_39427 + (1));
var inst_39427__$1 = inst_39441;
var state_39463__$1 = (function (){var statearr_39478 = state_39463;
(statearr_39478[(10)] = inst_39440);

(statearr_39478[(7)] = inst_39427__$1);

return statearr_39478;
})();
var statearr_39479_39509 = state_39463__$1;
(statearr_39479_39509[(2)] = null);

(statearr_39479_39509[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39464 === (5))){
var inst_39447 = (state_39463[(2)]);
var state_39463__$1 = (function (){var statearr_39480 = state_39463;
(statearr_39480[(11)] = inst_39447);

return statearr_39480;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39463__$1,(12),dchan);
} else {
if((state_val_39464 === (14))){
var inst_39449 = (state_39463[(8)]);
var inst_39454 = cljs.core.apply.call(null,f,inst_39449);
var state_39463__$1 = state_39463;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39463__$1,(16),out,inst_39454);
} else {
if((state_val_39464 === (16))){
var inst_39456 = (state_39463[(2)]);
var state_39463__$1 = (function (){var statearr_39481 = state_39463;
(statearr_39481[(12)] = inst_39456);

return statearr_39481;
})();
var statearr_39482_39510 = state_39463__$1;
(statearr_39482_39510[(2)] = null);

(statearr_39482_39510[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39464 === (10))){
var inst_39431 = (state_39463[(2)]);
var inst_39432 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_39463__$1 = (function (){var statearr_39483 = state_39463;
(statearr_39483[(13)] = inst_39431);

return statearr_39483;
})();
var statearr_39484_39511 = state_39463__$1;
(statearr_39484_39511[(2)] = inst_39432);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39463__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39464 === (8))){
var inst_39445 = (state_39463[(2)]);
var state_39463__$1 = state_39463;
var statearr_39485_39512 = state_39463__$1;
(statearr_39485_39512[(2)] = inst_39445);

(statearr_39485_39512[(1)] = (5));


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
});})(c__22319__auto___39497,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__22298__auto__,c__22319__auto___39497,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__22299__auto__ = null;
var cljs$core$async$state_machine__22299__auto____0 = (function (){
var statearr_39489 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39489[(0)] = cljs$core$async$state_machine__22299__auto__);

(statearr_39489[(1)] = (1));

return statearr_39489;
});
var cljs$core$async$state_machine__22299__auto____1 = (function (state_39463){
while(true){
var ret_value__22300__auto__ = (function (){try{while(true){
var result__22301__auto__ = switch__22298__auto__.call(null,state_39463);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22301__auto__;
}
break;
}
}catch (e39490){if((e39490 instanceof Object)){
var ex__22302__auto__ = e39490;
var statearr_39491_39513 = state_39463;
(statearr_39491_39513[(5)] = ex__22302__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39463);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39490;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39514 = state_39463;
state_39463 = G__39514;
continue;
} else {
return ret_value__22300__auto__;
}
break;
}
});
cljs$core$async$state_machine__22299__auto__ = function(state_39463){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22299__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22299__auto____1.call(this,state_39463);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22299__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22299__auto____0;
cljs$core$async$state_machine__22299__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22299__auto____1;
return cljs$core$async$state_machine__22299__auto__;
})()
;})(switch__22298__auto__,c__22319__auto___39497,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__22321__auto__ = (function (){var statearr_39492 = f__22320__auto__.call(null);
(statearr_39492[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22319__auto___39497);

return statearr_39492;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22321__auto__);
});})(c__22319__auto___39497,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args39516 = [];
var len__20877__auto___39572 = arguments.length;
var i__20878__auto___39573 = (0);
while(true){
if((i__20878__auto___39573 < len__20877__auto___39572)){
args39516.push((arguments[i__20878__auto___39573]));

var G__39574 = (i__20878__auto___39573 + (1));
i__20878__auto___39573 = G__39574;
continue;
} else {
}
break;
}

var G__39518 = args39516.length;
switch (G__39518) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39516.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22319__auto___39576 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22319__auto___39576,out){
return (function (){
var f__22320__auto__ = (function (){var switch__22298__auto__ = ((function (c__22319__auto___39576,out){
return (function (state_39548){
var state_val_39549 = (state_39548[(1)]);
if((state_val_39549 === (7))){
var inst_39527 = (state_39548[(7)]);
var inst_39528 = (state_39548[(8)]);
var inst_39527__$1 = (state_39548[(2)]);
var inst_39528__$1 = cljs.core.nth.call(null,inst_39527__$1,(0),null);
var inst_39529 = cljs.core.nth.call(null,inst_39527__$1,(1),null);
var inst_39530 = (inst_39528__$1 == null);
var state_39548__$1 = (function (){var statearr_39550 = state_39548;
(statearr_39550[(9)] = inst_39529);

(statearr_39550[(7)] = inst_39527__$1);

(statearr_39550[(8)] = inst_39528__$1);

return statearr_39550;
})();
if(cljs.core.truth_(inst_39530)){
var statearr_39551_39577 = state_39548__$1;
(statearr_39551_39577[(1)] = (8));

} else {
var statearr_39552_39578 = state_39548__$1;
(statearr_39552_39578[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39549 === (1))){
var inst_39519 = cljs.core.vec.call(null,chs);
var inst_39520 = inst_39519;
var state_39548__$1 = (function (){var statearr_39553 = state_39548;
(statearr_39553[(10)] = inst_39520);

return statearr_39553;
})();
var statearr_39554_39579 = state_39548__$1;
(statearr_39554_39579[(2)] = null);

(statearr_39554_39579[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39549 === (4))){
var inst_39520 = (state_39548[(10)]);
var state_39548__$1 = state_39548;
return cljs.core.async.ioc_alts_BANG_.call(null,state_39548__$1,(7),inst_39520);
} else {
if((state_val_39549 === (6))){
var inst_39544 = (state_39548[(2)]);
var state_39548__$1 = state_39548;
var statearr_39555_39580 = state_39548__$1;
(statearr_39555_39580[(2)] = inst_39544);

(statearr_39555_39580[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39549 === (3))){
var inst_39546 = (state_39548[(2)]);
var state_39548__$1 = state_39548;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39548__$1,inst_39546);
} else {
if((state_val_39549 === (2))){
var inst_39520 = (state_39548[(10)]);
var inst_39522 = cljs.core.count.call(null,inst_39520);
var inst_39523 = (inst_39522 > (0));
var state_39548__$1 = state_39548;
if(cljs.core.truth_(inst_39523)){
var statearr_39557_39581 = state_39548__$1;
(statearr_39557_39581[(1)] = (4));

} else {
var statearr_39558_39582 = state_39548__$1;
(statearr_39558_39582[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39549 === (11))){
var inst_39520 = (state_39548[(10)]);
var inst_39537 = (state_39548[(2)]);
var tmp39556 = inst_39520;
var inst_39520__$1 = tmp39556;
var state_39548__$1 = (function (){var statearr_39559 = state_39548;
(statearr_39559[(10)] = inst_39520__$1);

(statearr_39559[(11)] = inst_39537);

return statearr_39559;
})();
var statearr_39560_39583 = state_39548__$1;
(statearr_39560_39583[(2)] = null);

(statearr_39560_39583[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39549 === (9))){
var inst_39528 = (state_39548[(8)]);
var state_39548__$1 = state_39548;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39548__$1,(11),out,inst_39528);
} else {
if((state_val_39549 === (5))){
var inst_39542 = cljs.core.async.close_BANG_.call(null,out);
var state_39548__$1 = state_39548;
var statearr_39561_39584 = state_39548__$1;
(statearr_39561_39584[(2)] = inst_39542);

(statearr_39561_39584[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39549 === (10))){
var inst_39540 = (state_39548[(2)]);
var state_39548__$1 = state_39548;
var statearr_39562_39585 = state_39548__$1;
(statearr_39562_39585[(2)] = inst_39540);

(statearr_39562_39585[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39549 === (8))){
var inst_39520 = (state_39548[(10)]);
var inst_39529 = (state_39548[(9)]);
var inst_39527 = (state_39548[(7)]);
var inst_39528 = (state_39548[(8)]);
var inst_39532 = (function (){var cs = inst_39520;
var vec__39525 = inst_39527;
var v = inst_39528;
var c = inst_39529;
return ((function (cs,vec__39525,v,c,inst_39520,inst_39529,inst_39527,inst_39528,state_val_39549,c__22319__auto___39576,out){
return (function (p1__39515_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__39515_SHARP_);
});
;})(cs,vec__39525,v,c,inst_39520,inst_39529,inst_39527,inst_39528,state_val_39549,c__22319__auto___39576,out))
})();
var inst_39533 = cljs.core.filterv.call(null,inst_39532,inst_39520);
var inst_39520__$1 = inst_39533;
var state_39548__$1 = (function (){var statearr_39563 = state_39548;
(statearr_39563[(10)] = inst_39520__$1);

return statearr_39563;
})();
var statearr_39564_39586 = state_39548__$1;
(statearr_39564_39586[(2)] = null);

(statearr_39564_39586[(1)] = (2));


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
});})(c__22319__auto___39576,out))
;
return ((function (switch__22298__auto__,c__22319__auto___39576,out){
return (function() {
var cljs$core$async$state_machine__22299__auto__ = null;
var cljs$core$async$state_machine__22299__auto____0 = (function (){
var statearr_39568 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39568[(0)] = cljs$core$async$state_machine__22299__auto__);

(statearr_39568[(1)] = (1));

return statearr_39568;
});
var cljs$core$async$state_machine__22299__auto____1 = (function (state_39548){
while(true){
var ret_value__22300__auto__ = (function (){try{while(true){
var result__22301__auto__ = switch__22298__auto__.call(null,state_39548);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22301__auto__;
}
break;
}
}catch (e39569){if((e39569 instanceof Object)){
var ex__22302__auto__ = e39569;
var statearr_39570_39587 = state_39548;
(statearr_39570_39587[(5)] = ex__22302__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39548);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39569;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39588 = state_39548;
state_39548 = G__39588;
continue;
} else {
return ret_value__22300__auto__;
}
break;
}
});
cljs$core$async$state_machine__22299__auto__ = function(state_39548){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22299__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22299__auto____1.call(this,state_39548);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22299__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22299__auto____0;
cljs$core$async$state_machine__22299__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22299__auto____1;
return cljs$core$async$state_machine__22299__auto__;
})()
;})(switch__22298__auto__,c__22319__auto___39576,out))
})();
var state__22321__auto__ = (function (){var statearr_39571 = f__22320__auto__.call(null);
(statearr_39571[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22319__auto___39576);

return statearr_39571;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22321__auto__);
});})(c__22319__auto___39576,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args39589 = [];
var len__20877__auto___39638 = arguments.length;
var i__20878__auto___39639 = (0);
while(true){
if((i__20878__auto___39639 < len__20877__auto___39638)){
args39589.push((arguments[i__20878__auto___39639]));

var G__39640 = (i__20878__auto___39639 + (1));
i__20878__auto___39639 = G__39640;
continue;
} else {
}
break;
}

var G__39591 = args39589.length;
switch (G__39591) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39589.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22319__auto___39642 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22319__auto___39642,out){
return (function (){
var f__22320__auto__ = (function (){var switch__22298__auto__ = ((function (c__22319__auto___39642,out){
return (function (state_39615){
var state_val_39616 = (state_39615[(1)]);
if((state_val_39616 === (7))){
var inst_39597 = (state_39615[(7)]);
var inst_39597__$1 = (state_39615[(2)]);
var inst_39598 = (inst_39597__$1 == null);
var inst_39599 = cljs.core.not.call(null,inst_39598);
var state_39615__$1 = (function (){var statearr_39617 = state_39615;
(statearr_39617[(7)] = inst_39597__$1);

return statearr_39617;
})();
if(inst_39599){
var statearr_39618_39643 = state_39615__$1;
(statearr_39618_39643[(1)] = (8));

} else {
var statearr_39619_39644 = state_39615__$1;
(statearr_39619_39644[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39616 === (1))){
var inst_39592 = (0);
var state_39615__$1 = (function (){var statearr_39620 = state_39615;
(statearr_39620[(8)] = inst_39592);

return statearr_39620;
})();
var statearr_39621_39645 = state_39615__$1;
(statearr_39621_39645[(2)] = null);

(statearr_39621_39645[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39616 === (4))){
var state_39615__$1 = state_39615;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39615__$1,(7),ch);
} else {
if((state_val_39616 === (6))){
var inst_39610 = (state_39615[(2)]);
var state_39615__$1 = state_39615;
var statearr_39622_39646 = state_39615__$1;
(statearr_39622_39646[(2)] = inst_39610);

(statearr_39622_39646[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39616 === (3))){
var inst_39612 = (state_39615[(2)]);
var inst_39613 = cljs.core.async.close_BANG_.call(null,out);
var state_39615__$1 = (function (){var statearr_39623 = state_39615;
(statearr_39623[(9)] = inst_39612);

return statearr_39623;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39615__$1,inst_39613);
} else {
if((state_val_39616 === (2))){
var inst_39592 = (state_39615[(8)]);
var inst_39594 = (inst_39592 < n);
var state_39615__$1 = state_39615;
if(cljs.core.truth_(inst_39594)){
var statearr_39624_39647 = state_39615__$1;
(statearr_39624_39647[(1)] = (4));

} else {
var statearr_39625_39648 = state_39615__$1;
(statearr_39625_39648[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39616 === (11))){
var inst_39592 = (state_39615[(8)]);
var inst_39602 = (state_39615[(2)]);
var inst_39603 = (inst_39592 + (1));
var inst_39592__$1 = inst_39603;
var state_39615__$1 = (function (){var statearr_39626 = state_39615;
(statearr_39626[(8)] = inst_39592__$1);

(statearr_39626[(10)] = inst_39602);

return statearr_39626;
})();
var statearr_39627_39649 = state_39615__$1;
(statearr_39627_39649[(2)] = null);

(statearr_39627_39649[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39616 === (9))){
var state_39615__$1 = state_39615;
var statearr_39628_39650 = state_39615__$1;
(statearr_39628_39650[(2)] = null);

(statearr_39628_39650[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39616 === (5))){
var state_39615__$1 = state_39615;
var statearr_39629_39651 = state_39615__$1;
(statearr_39629_39651[(2)] = null);

(statearr_39629_39651[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39616 === (10))){
var inst_39607 = (state_39615[(2)]);
var state_39615__$1 = state_39615;
var statearr_39630_39652 = state_39615__$1;
(statearr_39630_39652[(2)] = inst_39607);

(statearr_39630_39652[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39616 === (8))){
var inst_39597 = (state_39615[(7)]);
var state_39615__$1 = state_39615;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39615__$1,(11),out,inst_39597);
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
});})(c__22319__auto___39642,out))
;
return ((function (switch__22298__auto__,c__22319__auto___39642,out){
return (function() {
var cljs$core$async$state_machine__22299__auto__ = null;
var cljs$core$async$state_machine__22299__auto____0 = (function (){
var statearr_39634 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_39634[(0)] = cljs$core$async$state_machine__22299__auto__);

(statearr_39634[(1)] = (1));

return statearr_39634;
});
var cljs$core$async$state_machine__22299__auto____1 = (function (state_39615){
while(true){
var ret_value__22300__auto__ = (function (){try{while(true){
var result__22301__auto__ = switch__22298__auto__.call(null,state_39615);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22301__auto__;
}
break;
}
}catch (e39635){if((e39635 instanceof Object)){
var ex__22302__auto__ = e39635;
var statearr_39636_39653 = state_39615;
(statearr_39636_39653[(5)] = ex__22302__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39615);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39635;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39654 = state_39615;
state_39615 = G__39654;
continue;
} else {
return ret_value__22300__auto__;
}
break;
}
});
cljs$core$async$state_machine__22299__auto__ = function(state_39615){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22299__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22299__auto____1.call(this,state_39615);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22299__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22299__auto____0;
cljs$core$async$state_machine__22299__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22299__auto____1;
return cljs$core$async$state_machine__22299__auto__;
})()
;})(switch__22298__auto__,c__22319__auto___39642,out))
})();
var state__22321__auto__ = (function (){var statearr_39637 = f__22320__auto__.call(null);
(statearr_39637[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22319__auto___39642);

return statearr_39637;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22321__auto__);
});})(c__22319__auto___39642,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async39662 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39662 = (function (map_LT_,f,ch,meta39663){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta39663 = meta39663;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async39662.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39664,meta39663__$1){
var self__ = this;
var _39664__$1 = this;
return (new cljs.core.async.t_cljs$core$async39662(self__.map_LT_,self__.f,self__.ch,meta39663__$1));
});

cljs.core.async.t_cljs$core$async39662.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39664){
var self__ = this;
var _39664__$1 = this;
return self__.meta39663;
});

cljs.core.async.t_cljs$core$async39662.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async39662.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async39662.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async39662.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async39662.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async39665 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39665 = (function (map_LT_,f,ch,meta39663,_,fn1,meta39666){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta39663 = meta39663;
this._ = _;
this.fn1 = fn1;
this.meta39666 = meta39666;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async39665.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_39667,meta39666__$1){
var self__ = this;
var _39667__$1 = this;
return (new cljs.core.async.t_cljs$core$async39665(self__.map_LT_,self__.f,self__.ch,self__.meta39663,self__._,self__.fn1,meta39666__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async39665.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_39667){
var self__ = this;
var _39667__$1 = this;
return self__.meta39666;
});})(___$1))
;

cljs.core.async.t_cljs$core$async39665.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async39665.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async39665.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async39665.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__39655_SHARP_){
return f1.call(null,(((p1__39655_SHARP_ == null))?null:self__.f.call(null,p1__39655_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async39665.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta39663","meta39663",-897261307,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async39662","cljs.core.async/t_cljs$core$async39662",1819212001,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta39666","meta39666",524942310,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async39665.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39665.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39665";

cljs.core.async.t_cljs$core$async39665.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__20417__auto__,writer__20418__auto__,opt__20419__auto__){
return cljs.core._write.call(null,writer__20418__auto__,"cljs.core.async/t_cljs$core$async39665");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async39665 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async39665(map_LT___$1,f__$1,ch__$1,meta39663__$1,___$2,fn1__$1,meta39666){
return (new cljs.core.async.t_cljs$core$async39665(map_LT___$1,f__$1,ch__$1,meta39663__$1,___$2,fn1__$1,meta39666));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async39665(self__.map_LT_,self__.f,self__.ch,self__.meta39663,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__19807__auto__ = ret;
if(cljs.core.truth_(and__19807__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__19807__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async39662.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async39662.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async39662.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta39663","meta39663",-897261307,null)], null);
});

cljs.core.async.t_cljs$core$async39662.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39662.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39662";

cljs.core.async.t_cljs$core$async39662.cljs$lang$ctorPrWriter = (function (this__20417__auto__,writer__20418__auto__,opt__20419__auto__){
return cljs.core._write.call(null,writer__20418__auto__,"cljs.core.async/t_cljs$core$async39662");
});

cljs.core.async.__GT_t_cljs$core$async39662 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async39662(map_LT___$1,f__$1,ch__$1,meta39663){
return (new cljs.core.async.t_cljs$core$async39662(map_LT___$1,f__$1,ch__$1,meta39663));
});

}

return (new cljs.core.async.t_cljs$core$async39662(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async39671 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39671 = (function (map_GT_,f,ch,meta39672){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta39672 = meta39672;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async39671.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39673,meta39672__$1){
var self__ = this;
var _39673__$1 = this;
return (new cljs.core.async.t_cljs$core$async39671(self__.map_GT_,self__.f,self__.ch,meta39672__$1));
});

cljs.core.async.t_cljs$core$async39671.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39673){
var self__ = this;
var _39673__$1 = this;
return self__.meta39672;
});

cljs.core.async.t_cljs$core$async39671.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async39671.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async39671.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async39671.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async39671.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async39671.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async39671.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta39672","meta39672",1831615277,null)], null);
});

cljs.core.async.t_cljs$core$async39671.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39671.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39671";

cljs.core.async.t_cljs$core$async39671.cljs$lang$ctorPrWriter = (function (this__20417__auto__,writer__20418__auto__,opt__20419__auto__){
return cljs.core._write.call(null,writer__20418__auto__,"cljs.core.async/t_cljs$core$async39671");
});

cljs.core.async.__GT_t_cljs$core$async39671 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async39671(map_GT___$1,f__$1,ch__$1,meta39672){
return (new cljs.core.async.t_cljs$core$async39671(map_GT___$1,f__$1,ch__$1,meta39672));
});

}

return (new cljs.core.async.t_cljs$core$async39671(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async39677 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39677 = (function (filter_GT_,p,ch,meta39678){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta39678 = meta39678;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async39677.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39679,meta39678__$1){
var self__ = this;
var _39679__$1 = this;
return (new cljs.core.async.t_cljs$core$async39677(self__.filter_GT_,self__.p,self__.ch,meta39678__$1));
});

cljs.core.async.t_cljs$core$async39677.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39679){
var self__ = this;
var _39679__$1 = this;
return self__.meta39678;
});

cljs.core.async.t_cljs$core$async39677.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async39677.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async39677.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async39677.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async39677.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async39677.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async39677.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async39677.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta39678","meta39678",976095060,null)], null);
});

cljs.core.async.t_cljs$core$async39677.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39677.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39677";

cljs.core.async.t_cljs$core$async39677.cljs$lang$ctorPrWriter = (function (this__20417__auto__,writer__20418__auto__,opt__20419__auto__){
return cljs.core._write.call(null,writer__20418__auto__,"cljs.core.async/t_cljs$core$async39677");
});

cljs.core.async.__GT_t_cljs$core$async39677 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async39677(filter_GT___$1,p__$1,ch__$1,meta39678){
return (new cljs.core.async.t_cljs$core$async39677(filter_GT___$1,p__$1,ch__$1,meta39678));
});

}

return (new cljs.core.async.t_cljs$core$async39677(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args39680 = [];
var len__20877__auto___39724 = arguments.length;
var i__20878__auto___39725 = (0);
while(true){
if((i__20878__auto___39725 < len__20877__auto___39724)){
args39680.push((arguments[i__20878__auto___39725]));

var G__39726 = (i__20878__auto___39725 + (1));
i__20878__auto___39725 = G__39726;
continue;
} else {
}
break;
}

var G__39682 = args39680.length;
switch (G__39682) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39680.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22319__auto___39728 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22319__auto___39728,out){
return (function (){
var f__22320__auto__ = (function (){var switch__22298__auto__ = ((function (c__22319__auto___39728,out){
return (function (state_39703){
var state_val_39704 = (state_39703[(1)]);
if((state_val_39704 === (7))){
var inst_39699 = (state_39703[(2)]);
var state_39703__$1 = state_39703;
var statearr_39705_39729 = state_39703__$1;
(statearr_39705_39729[(2)] = inst_39699);

(statearr_39705_39729[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39704 === (1))){
var state_39703__$1 = state_39703;
var statearr_39706_39730 = state_39703__$1;
(statearr_39706_39730[(2)] = null);

(statearr_39706_39730[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39704 === (4))){
var inst_39685 = (state_39703[(7)]);
var inst_39685__$1 = (state_39703[(2)]);
var inst_39686 = (inst_39685__$1 == null);
var state_39703__$1 = (function (){var statearr_39707 = state_39703;
(statearr_39707[(7)] = inst_39685__$1);

return statearr_39707;
})();
if(cljs.core.truth_(inst_39686)){
var statearr_39708_39731 = state_39703__$1;
(statearr_39708_39731[(1)] = (5));

} else {
var statearr_39709_39732 = state_39703__$1;
(statearr_39709_39732[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39704 === (6))){
var inst_39685 = (state_39703[(7)]);
var inst_39690 = p.call(null,inst_39685);
var state_39703__$1 = state_39703;
if(cljs.core.truth_(inst_39690)){
var statearr_39710_39733 = state_39703__$1;
(statearr_39710_39733[(1)] = (8));

} else {
var statearr_39711_39734 = state_39703__$1;
(statearr_39711_39734[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39704 === (3))){
var inst_39701 = (state_39703[(2)]);
var state_39703__$1 = state_39703;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39703__$1,inst_39701);
} else {
if((state_val_39704 === (2))){
var state_39703__$1 = state_39703;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39703__$1,(4),ch);
} else {
if((state_val_39704 === (11))){
var inst_39693 = (state_39703[(2)]);
var state_39703__$1 = state_39703;
var statearr_39712_39735 = state_39703__$1;
(statearr_39712_39735[(2)] = inst_39693);

(statearr_39712_39735[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39704 === (9))){
var state_39703__$1 = state_39703;
var statearr_39713_39736 = state_39703__$1;
(statearr_39713_39736[(2)] = null);

(statearr_39713_39736[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39704 === (5))){
var inst_39688 = cljs.core.async.close_BANG_.call(null,out);
var state_39703__$1 = state_39703;
var statearr_39714_39737 = state_39703__$1;
(statearr_39714_39737[(2)] = inst_39688);

(statearr_39714_39737[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39704 === (10))){
var inst_39696 = (state_39703[(2)]);
var state_39703__$1 = (function (){var statearr_39715 = state_39703;
(statearr_39715[(8)] = inst_39696);

return statearr_39715;
})();
var statearr_39716_39738 = state_39703__$1;
(statearr_39716_39738[(2)] = null);

(statearr_39716_39738[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39704 === (8))){
var inst_39685 = (state_39703[(7)]);
var state_39703__$1 = state_39703;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39703__$1,(11),out,inst_39685);
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
});})(c__22319__auto___39728,out))
;
return ((function (switch__22298__auto__,c__22319__auto___39728,out){
return (function() {
var cljs$core$async$state_machine__22299__auto__ = null;
var cljs$core$async$state_machine__22299__auto____0 = (function (){
var statearr_39720 = [null,null,null,null,null,null,null,null,null];
(statearr_39720[(0)] = cljs$core$async$state_machine__22299__auto__);

(statearr_39720[(1)] = (1));

return statearr_39720;
});
var cljs$core$async$state_machine__22299__auto____1 = (function (state_39703){
while(true){
var ret_value__22300__auto__ = (function (){try{while(true){
var result__22301__auto__ = switch__22298__auto__.call(null,state_39703);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22301__auto__;
}
break;
}
}catch (e39721){if((e39721 instanceof Object)){
var ex__22302__auto__ = e39721;
var statearr_39722_39739 = state_39703;
(statearr_39722_39739[(5)] = ex__22302__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39703);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39721;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39740 = state_39703;
state_39703 = G__39740;
continue;
} else {
return ret_value__22300__auto__;
}
break;
}
});
cljs$core$async$state_machine__22299__auto__ = function(state_39703){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22299__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22299__auto____1.call(this,state_39703);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22299__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22299__auto____0;
cljs$core$async$state_machine__22299__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22299__auto____1;
return cljs$core$async$state_machine__22299__auto__;
})()
;})(switch__22298__auto__,c__22319__auto___39728,out))
})();
var state__22321__auto__ = (function (){var statearr_39723 = f__22320__auto__.call(null);
(statearr_39723[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22319__auto___39728);

return statearr_39723;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22321__auto__);
});})(c__22319__auto___39728,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args39741 = [];
var len__20877__auto___39744 = arguments.length;
var i__20878__auto___39745 = (0);
while(true){
if((i__20878__auto___39745 < len__20877__auto___39744)){
args39741.push((arguments[i__20878__auto___39745]));

var G__39746 = (i__20878__auto___39745 + (1));
i__20878__auto___39745 = G__39746;
continue;
} else {
}
break;
}

var G__39743 = args39741.length;
switch (G__39743) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39741.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__22319__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22319__auto__){
return (function (){
var f__22320__auto__ = (function (){var switch__22298__auto__ = ((function (c__22319__auto__){
return (function (state_39913){
var state_val_39914 = (state_39913[(1)]);
if((state_val_39914 === (7))){
var inst_39909 = (state_39913[(2)]);
var state_39913__$1 = state_39913;
var statearr_39915_39956 = state_39913__$1;
(statearr_39915_39956[(2)] = inst_39909);

(statearr_39915_39956[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39914 === (20))){
var inst_39879 = (state_39913[(7)]);
var inst_39890 = (state_39913[(2)]);
var inst_39891 = cljs.core.next.call(null,inst_39879);
var inst_39865 = inst_39891;
var inst_39866 = null;
var inst_39867 = (0);
var inst_39868 = (0);
var state_39913__$1 = (function (){var statearr_39916 = state_39913;
(statearr_39916[(8)] = inst_39868);

(statearr_39916[(9)] = inst_39867);

(statearr_39916[(10)] = inst_39865);

(statearr_39916[(11)] = inst_39890);

(statearr_39916[(12)] = inst_39866);

return statearr_39916;
})();
var statearr_39917_39957 = state_39913__$1;
(statearr_39917_39957[(2)] = null);

(statearr_39917_39957[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39914 === (1))){
var state_39913__$1 = state_39913;
var statearr_39918_39958 = state_39913__$1;
(statearr_39918_39958[(2)] = null);

(statearr_39918_39958[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39914 === (4))){
var inst_39854 = (state_39913[(13)]);
var inst_39854__$1 = (state_39913[(2)]);
var inst_39855 = (inst_39854__$1 == null);
var state_39913__$1 = (function (){var statearr_39919 = state_39913;
(statearr_39919[(13)] = inst_39854__$1);

return statearr_39919;
})();
if(cljs.core.truth_(inst_39855)){
var statearr_39920_39959 = state_39913__$1;
(statearr_39920_39959[(1)] = (5));

} else {
var statearr_39921_39960 = state_39913__$1;
(statearr_39921_39960[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39914 === (15))){
var state_39913__$1 = state_39913;
var statearr_39925_39961 = state_39913__$1;
(statearr_39925_39961[(2)] = null);

(statearr_39925_39961[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39914 === (21))){
var state_39913__$1 = state_39913;
var statearr_39926_39962 = state_39913__$1;
(statearr_39926_39962[(2)] = null);

(statearr_39926_39962[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39914 === (13))){
var inst_39868 = (state_39913[(8)]);
var inst_39867 = (state_39913[(9)]);
var inst_39865 = (state_39913[(10)]);
var inst_39866 = (state_39913[(12)]);
var inst_39875 = (state_39913[(2)]);
var inst_39876 = (inst_39868 + (1));
var tmp39922 = inst_39867;
var tmp39923 = inst_39865;
var tmp39924 = inst_39866;
var inst_39865__$1 = tmp39923;
var inst_39866__$1 = tmp39924;
var inst_39867__$1 = tmp39922;
var inst_39868__$1 = inst_39876;
var state_39913__$1 = (function (){var statearr_39927 = state_39913;
(statearr_39927[(8)] = inst_39868__$1);

(statearr_39927[(9)] = inst_39867__$1);

(statearr_39927[(10)] = inst_39865__$1);

(statearr_39927[(12)] = inst_39866__$1);

(statearr_39927[(14)] = inst_39875);

return statearr_39927;
})();
var statearr_39928_39963 = state_39913__$1;
(statearr_39928_39963[(2)] = null);

(statearr_39928_39963[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39914 === (22))){
var state_39913__$1 = state_39913;
var statearr_39929_39964 = state_39913__$1;
(statearr_39929_39964[(2)] = null);

(statearr_39929_39964[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39914 === (6))){
var inst_39854 = (state_39913[(13)]);
var inst_39863 = f.call(null,inst_39854);
var inst_39864 = cljs.core.seq.call(null,inst_39863);
var inst_39865 = inst_39864;
var inst_39866 = null;
var inst_39867 = (0);
var inst_39868 = (0);
var state_39913__$1 = (function (){var statearr_39930 = state_39913;
(statearr_39930[(8)] = inst_39868);

(statearr_39930[(9)] = inst_39867);

(statearr_39930[(10)] = inst_39865);

(statearr_39930[(12)] = inst_39866);

return statearr_39930;
})();
var statearr_39931_39965 = state_39913__$1;
(statearr_39931_39965[(2)] = null);

(statearr_39931_39965[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39914 === (17))){
var inst_39879 = (state_39913[(7)]);
var inst_39883 = cljs.core.chunk_first.call(null,inst_39879);
var inst_39884 = cljs.core.chunk_rest.call(null,inst_39879);
var inst_39885 = cljs.core.count.call(null,inst_39883);
var inst_39865 = inst_39884;
var inst_39866 = inst_39883;
var inst_39867 = inst_39885;
var inst_39868 = (0);
var state_39913__$1 = (function (){var statearr_39932 = state_39913;
(statearr_39932[(8)] = inst_39868);

(statearr_39932[(9)] = inst_39867);

(statearr_39932[(10)] = inst_39865);

(statearr_39932[(12)] = inst_39866);

return statearr_39932;
})();
var statearr_39933_39966 = state_39913__$1;
(statearr_39933_39966[(2)] = null);

(statearr_39933_39966[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39914 === (3))){
var inst_39911 = (state_39913[(2)]);
var state_39913__$1 = state_39913;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39913__$1,inst_39911);
} else {
if((state_val_39914 === (12))){
var inst_39899 = (state_39913[(2)]);
var state_39913__$1 = state_39913;
var statearr_39934_39967 = state_39913__$1;
(statearr_39934_39967[(2)] = inst_39899);

(statearr_39934_39967[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39914 === (2))){
var state_39913__$1 = state_39913;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39913__$1,(4),in$);
} else {
if((state_val_39914 === (23))){
var inst_39907 = (state_39913[(2)]);
var state_39913__$1 = state_39913;
var statearr_39935_39968 = state_39913__$1;
(statearr_39935_39968[(2)] = inst_39907);

(statearr_39935_39968[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39914 === (19))){
var inst_39894 = (state_39913[(2)]);
var state_39913__$1 = state_39913;
var statearr_39936_39969 = state_39913__$1;
(statearr_39936_39969[(2)] = inst_39894);

(statearr_39936_39969[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39914 === (11))){
var inst_39879 = (state_39913[(7)]);
var inst_39865 = (state_39913[(10)]);
var inst_39879__$1 = cljs.core.seq.call(null,inst_39865);
var state_39913__$1 = (function (){var statearr_39937 = state_39913;
(statearr_39937[(7)] = inst_39879__$1);

return statearr_39937;
})();
if(inst_39879__$1){
var statearr_39938_39970 = state_39913__$1;
(statearr_39938_39970[(1)] = (14));

} else {
var statearr_39939_39971 = state_39913__$1;
(statearr_39939_39971[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39914 === (9))){
var inst_39901 = (state_39913[(2)]);
var inst_39902 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_39913__$1 = (function (){var statearr_39940 = state_39913;
(statearr_39940[(15)] = inst_39901);

return statearr_39940;
})();
if(cljs.core.truth_(inst_39902)){
var statearr_39941_39972 = state_39913__$1;
(statearr_39941_39972[(1)] = (21));

} else {
var statearr_39942_39973 = state_39913__$1;
(statearr_39942_39973[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39914 === (5))){
var inst_39857 = cljs.core.async.close_BANG_.call(null,out);
var state_39913__$1 = state_39913;
var statearr_39943_39974 = state_39913__$1;
(statearr_39943_39974[(2)] = inst_39857);

(statearr_39943_39974[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39914 === (14))){
var inst_39879 = (state_39913[(7)]);
var inst_39881 = cljs.core.chunked_seq_QMARK_.call(null,inst_39879);
var state_39913__$1 = state_39913;
if(inst_39881){
var statearr_39944_39975 = state_39913__$1;
(statearr_39944_39975[(1)] = (17));

} else {
var statearr_39945_39976 = state_39913__$1;
(statearr_39945_39976[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39914 === (16))){
var inst_39897 = (state_39913[(2)]);
var state_39913__$1 = state_39913;
var statearr_39946_39977 = state_39913__$1;
(statearr_39946_39977[(2)] = inst_39897);

(statearr_39946_39977[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39914 === (10))){
var inst_39868 = (state_39913[(8)]);
var inst_39866 = (state_39913[(12)]);
var inst_39873 = cljs.core._nth.call(null,inst_39866,inst_39868);
var state_39913__$1 = state_39913;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39913__$1,(13),out,inst_39873);
} else {
if((state_val_39914 === (18))){
var inst_39879 = (state_39913[(7)]);
var inst_39888 = cljs.core.first.call(null,inst_39879);
var state_39913__$1 = state_39913;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39913__$1,(20),out,inst_39888);
} else {
if((state_val_39914 === (8))){
var inst_39868 = (state_39913[(8)]);
var inst_39867 = (state_39913[(9)]);
var inst_39870 = (inst_39868 < inst_39867);
var inst_39871 = inst_39870;
var state_39913__$1 = state_39913;
if(cljs.core.truth_(inst_39871)){
var statearr_39947_39978 = state_39913__$1;
(statearr_39947_39978[(1)] = (10));

} else {
var statearr_39948_39979 = state_39913__$1;
(statearr_39948_39979[(1)] = (11));

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
});})(c__22319__auto__))
;
return ((function (switch__22298__auto__,c__22319__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__22299__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__22299__auto____0 = (function (){
var statearr_39952 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39952[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__22299__auto__);

(statearr_39952[(1)] = (1));

return statearr_39952;
});
var cljs$core$async$mapcat_STAR__$_state_machine__22299__auto____1 = (function (state_39913){
while(true){
var ret_value__22300__auto__ = (function (){try{while(true){
var result__22301__auto__ = switch__22298__auto__.call(null,state_39913);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22301__auto__;
}
break;
}
}catch (e39953){if((e39953 instanceof Object)){
var ex__22302__auto__ = e39953;
var statearr_39954_39980 = state_39913;
(statearr_39954_39980[(5)] = ex__22302__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39913);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39953;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39981 = state_39913;
state_39913 = G__39981;
continue;
} else {
return ret_value__22300__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__22299__auto__ = function(state_39913){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__22299__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__22299__auto____1.call(this,state_39913);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__22299__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__22299__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__22299__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__22299__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__22299__auto__;
})()
;})(switch__22298__auto__,c__22319__auto__))
})();
var state__22321__auto__ = (function (){var statearr_39955 = f__22320__auto__.call(null);
(statearr_39955[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22319__auto__);

return statearr_39955;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22321__auto__);
});})(c__22319__auto__))
);

return c__22319__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args39982 = [];
var len__20877__auto___39985 = arguments.length;
var i__20878__auto___39986 = (0);
while(true){
if((i__20878__auto___39986 < len__20877__auto___39985)){
args39982.push((arguments[i__20878__auto___39986]));

var G__39987 = (i__20878__auto___39986 + (1));
i__20878__auto___39986 = G__39987;
continue;
} else {
}
break;
}

var G__39984 = args39982.length;
switch (G__39984) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39982.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args39989 = [];
var len__20877__auto___39992 = arguments.length;
var i__20878__auto___39993 = (0);
while(true){
if((i__20878__auto___39993 < len__20877__auto___39992)){
args39989.push((arguments[i__20878__auto___39993]));

var G__39994 = (i__20878__auto___39993 + (1));
i__20878__auto___39993 = G__39994;
continue;
} else {
}
break;
}

var G__39991 = args39989.length;
switch (G__39991) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39989.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args39996 = [];
var len__20877__auto___40047 = arguments.length;
var i__20878__auto___40048 = (0);
while(true){
if((i__20878__auto___40048 < len__20877__auto___40047)){
args39996.push((arguments[i__20878__auto___40048]));

var G__40049 = (i__20878__auto___40048 + (1));
i__20878__auto___40048 = G__40049;
continue;
} else {
}
break;
}

var G__39998 = args39996.length;
switch (G__39998) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39996.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22319__auto___40051 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22319__auto___40051,out){
return (function (){
var f__22320__auto__ = (function (){var switch__22298__auto__ = ((function (c__22319__auto___40051,out){
return (function (state_40022){
var state_val_40023 = (state_40022[(1)]);
if((state_val_40023 === (7))){
var inst_40017 = (state_40022[(2)]);
var state_40022__$1 = state_40022;
var statearr_40024_40052 = state_40022__$1;
(statearr_40024_40052[(2)] = inst_40017);

(statearr_40024_40052[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40023 === (1))){
var inst_39999 = null;
var state_40022__$1 = (function (){var statearr_40025 = state_40022;
(statearr_40025[(7)] = inst_39999);

return statearr_40025;
})();
var statearr_40026_40053 = state_40022__$1;
(statearr_40026_40053[(2)] = null);

(statearr_40026_40053[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40023 === (4))){
var inst_40002 = (state_40022[(8)]);
var inst_40002__$1 = (state_40022[(2)]);
var inst_40003 = (inst_40002__$1 == null);
var inst_40004 = cljs.core.not.call(null,inst_40003);
var state_40022__$1 = (function (){var statearr_40027 = state_40022;
(statearr_40027[(8)] = inst_40002__$1);

return statearr_40027;
})();
if(inst_40004){
var statearr_40028_40054 = state_40022__$1;
(statearr_40028_40054[(1)] = (5));

} else {
var statearr_40029_40055 = state_40022__$1;
(statearr_40029_40055[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40023 === (6))){
var state_40022__$1 = state_40022;
var statearr_40030_40056 = state_40022__$1;
(statearr_40030_40056[(2)] = null);

(statearr_40030_40056[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40023 === (3))){
var inst_40019 = (state_40022[(2)]);
var inst_40020 = cljs.core.async.close_BANG_.call(null,out);
var state_40022__$1 = (function (){var statearr_40031 = state_40022;
(statearr_40031[(9)] = inst_40019);

return statearr_40031;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40022__$1,inst_40020);
} else {
if((state_val_40023 === (2))){
var state_40022__$1 = state_40022;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40022__$1,(4),ch);
} else {
if((state_val_40023 === (11))){
var inst_40002 = (state_40022[(8)]);
var inst_40011 = (state_40022[(2)]);
var inst_39999 = inst_40002;
var state_40022__$1 = (function (){var statearr_40032 = state_40022;
(statearr_40032[(7)] = inst_39999);

(statearr_40032[(10)] = inst_40011);

return statearr_40032;
})();
var statearr_40033_40057 = state_40022__$1;
(statearr_40033_40057[(2)] = null);

(statearr_40033_40057[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40023 === (9))){
var inst_40002 = (state_40022[(8)]);
var state_40022__$1 = state_40022;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40022__$1,(11),out,inst_40002);
} else {
if((state_val_40023 === (5))){
var inst_39999 = (state_40022[(7)]);
var inst_40002 = (state_40022[(8)]);
var inst_40006 = cljs.core._EQ_.call(null,inst_40002,inst_39999);
var state_40022__$1 = state_40022;
if(inst_40006){
var statearr_40035_40058 = state_40022__$1;
(statearr_40035_40058[(1)] = (8));

} else {
var statearr_40036_40059 = state_40022__$1;
(statearr_40036_40059[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40023 === (10))){
var inst_40014 = (state_40022[(2)]);
var state_40022__$1 = state_40022;
var statearr_40037_40060 = state_40022__$1;
(statearr_40037_40060[(2)] = inst_40014);

(statearr_40037_40060[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40023 === (8))){
var inst_39999 = (state_40022[(7)]);
var tmp40034 = inst_39999;
var inst_39999__$1 = tmp40034;
var state_40022__$1 = (function (){var statearr_40038 = state_40022;
(statearr_40038[(7)] = inst_39999__$1);

return statearr_40038;
})();
var statearr_40039_40061 = state_40022__$1;
(statearr_40039_40061[(2)] = null);

(statearr_40039_40061[(1)] = (2));


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
});})(c__22319__auto___40051,out))
;
return ((function (switch__22298__auto__,c__22319__auto___40051,out){
return (function() {
var cljs$core$async$state_machine__22299__auto__ = null;
var cljs$core$async$state_machine__22299__auto____0 = (function (){
var statearr_40043 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_40043[(0)] = cljs$core$async$state_machine__22299__auto__);

(statearr_40043[(1)] = (1));

return statearr_40043;
});
var cljs$core$async$state_machine__22299__auto____1 = (function (state_40022){
while(true){
var ret_value__22300__auto__ = (function (){try{while(true){
var result__22301__auto__ = switch__22298__auto__.call(null,state_40022);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22301__auto__;
}
break;
}
}catch (e40044){if((e40044 instanceof Object)){
var ex__22302__auto__ = e40044;
var statearr_40045_40062 = state_40022;
(statearr_40045_40062[(5)] = ex__22302__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40022);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40044;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40063 = state_40022;
state_40022 = G__40063;
continue;
} else {
return ret_value__22300__auto__;
}
break;
}
});
cljs$core$async$state_machine__22299__auto__ = function(state_40022){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22299__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22299__auto____1.call(this,state_40022);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22299__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22299__auto____0;
cljs$core$async$state_machine__22299__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22299__auto____1;
return cljs$core$async$state_machine__22299__auto__;
})()
;})(switch__22298__auto__,c__22319__auto___40051,out))
})();
var state__22321__auto__ = (function (){var statearr_40046 = f__22320__auto__.call(null);
(statearr_40046[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22319__auto___40051);

return statearr_40046;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22321__auto__);
});})(c__22319__auto___40051,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args40064 = [];
var len__20877__auto___40134 = arguments.length;
var i__20878__auto___40135 = (0);
while(true){
if((i__20878__auto___40135 < len__20877__auto___40134)){
args40064.push((arguments[i__20878__auto___40135]));

var G__40136 = (i__20878__auto___40135 + (1));
i__20878__auto___40135 = G__40136;
continue;
} else {
}
break;
}

var G__40066 = args40064.length;
switch (G__40066) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40064.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22319__auto___40138 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22319__auto___40138,out){
return (function (){
var f__22320__auto__ = (function (){var switch__22298__auto__ = ((function (c__22319__auto___40138,out){
return (function (state_40104){
var state_val_40105 = (state_40104[(1)]);
if((state_val_40105 === (7))){
var inst_40100 = (state_40104[(2)]);
var state_40104__$1 = state_40104;
var statearr_40106_40139 = state_40104__$1;
(statearr_40106_40139[(2)] = inst_40100);

(statearr_40106_40139[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40105 === (1))){
var inst_40067 = (new Array(n));
var inst_40068 = inst_40067;
var inst_40069 = (0);
var state_40104__$1 = (function (){var statearr_40107 = state_40104;
(statearr_40107[(7)] = inst_40069);

(statearr_40107[(8)] = inst_40068);

return statearr_40107;
})();
var statearr_40108_40140 = state_40104__$1;
(statearr_40108_40140[(2)] = null);

(statearr_40108_40140[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40105 === (4))){
var inst_40072 = (state_40104[(9)]);
var inst_40072__$1 = (state_40104[(2)]);
var inst_40073 = (inst_40072__$1 == null);
var inst_40074 = cljs.core.not.call(null,inst_40073);
var state_40104__$1 = (function (){var statearr_40109 = state_40104;
(statearr_40109[(9)] = inst_40072__$1);

return statearr_40109;
})();
if(inst_40074){
var statearr_40110_40141 = state_40104__$1;
(statearr_40110_40141[(1)] = (5));

} else {
var statearr_40111_40142 = state_40104__$1;
(statearr_40111_40142[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40105 === (15))){
var inst_40094 = (state_40104[(2)]);
var state_40104__$1 = state_40104;
var statearr_40112_40143 = state_40104__$1;
(statearr_40112_40143[(2)] = inst_40094);

(statearr_40112_40143[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40105 === (13))){
var state_40104__$1 = state_40104;
var statearr_40113_40144 = state_40104__$1;
(statearr_40113_40144[(2)] = null);

(statearr_40113_40144[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40105 === (6))){
var inst_40069 = (state_40104[(7)]);
var inst_40090 = (inst_40069 > (0));
var state_40104__$1 = state_40104;
if(cljs.core.truth_(inst_40090)){
var statearr_40114_40145 = state_40104__$1;
(statearr_40114_40145[(1)] = (12));

} else {
var statearr_40115_40146 = state_40104__$1;
(statearr_40115_40146[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40105 === (3))){
var inst_40102 = (state_40104[(2)]);
var state_40104__$1 = state_40104;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40104__$1,inst_40102);
} else {
if((state_val_40105 === (12))){
var inst_40068 = (state_40104[(8)]);
var inst_40092 = cljs.core.vec.call(null,inst_40068);
var state_40104__$1 = state_40104;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40104__$1,(15),out,inst_40092);
} else {
if((state_val_40105 === (2))){
var state_40104__$1 = state_40104;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40104__$1,(4),ch);
} else {
if((state_val_40105 === (11))){
var inst_40084 = (state_40104[(2)]);
var inst_40085 = (new Array(n));
var inst_40068 = inst_40085;
var inst_40069 = (0);
var state_40104__$1 = (function (){var statearr_40116 = state_40104;
(statearr_40116[(10)] = inst_40084);

(statearr_40116[(7)] = inst_40069);

(statearr_40116[(8)] = inst_40068);

return statearr_40116;
})();
var statearr_40117_40147 = state_40104__$1;
(statearr_40117_40147[(2)] = null);

(statearr_40117_40147[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40105 === (9))){
var inst_40068 = (state_40104[(8)]);
var inst_40082 = cljs.core.vec.call(null,inst_40068);
var state_40104__$1 = state_40104;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40104__$1,(11),out,inst_40082);
} else {
if((state_val_40105 === (5))){
var inst_40072 = (state_40104[(9)]);
var inst_40069 = (state_40104[(7)]);
var inst_40068 = (state_40104[(8)]);
var inst_40077 = (state_40104[(11)]);
var inst_40076 = (inst_40068[inst_40069] = inst_40072);
var inst_40077__$1 = (inst_40069 + (1));
var inst_40078 = (inst_40077__$1 < n);
var state_40104__$1 = (function (){var statearr_40118 = state_40104;
(statearr_40118[(12)] = inst_40076);

(statearr_40118[(11)] = inst_40077__$1);

return statearr_40118;
})();
if(cljs.core.truth_(inst_40078)){
var statearr_40119_40148 = state_40104__$1;
(statearr_40119_40148[(1)] = (8));

} else {
var statearr_40120_40149 = state_40104__$1;
(statearr_40120_40149[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40105 === (14))){
var inst_40097 = (state_40104[(2)]);
var inst_40098 = cljs.core.async.close_BANG_.call(null,out);
var state_40104__$1 = (function (){var statearr_40122 = state_40104;
(statearr_40122[(13)] = inst_40097);

return statearr_40122;
})();
var statearr_40123_40150 = state_40104__$1;
(statearr_40123_40150[(2)] = inst_40098);

(statearr_40123_40150[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40105 === (10))){
var inst_40088 = (state_40104[(2)]);
var state_40104__$1 = state_40104;
var statearr_40124_40151 = state_40104__$1;
(statearr_40124_40151[(2)] = inst_40088);

(statearr_40124_40151[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40105 === (8))){
var inst_40068 = (state_40104[(8)]);
var inst_40077 = (state_40104[(11)]);
var tmp40121 = inst_40068;
var inst_40068__$1 = tmp40121;
var inst_40069 = inst_40077;
var state_40104__$1 = (function (){var statearr_40125 = state_40104;
(statearr_40125[(7)] = inst_40069);

(statearr_40125[(8)] = inst_40068__$1);

return statearr_40125;
})();
var statearr_40126_40152 = state_40104__$1;
(statearr_40126_40152[(2)] = null);

(statearr_40126_40152[(1)] = (2));


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
});})(c__22319__auto___40138,out))
;
return ((function (switch__22298__auto__,c__22319__auto___40138,out){
return (function() {
var cljs$core$async$state_machine__22299__auto__ = null;
var cljs$core$async$state_machine__22299__auto____0 = (function (){
var statearr_40130 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40130[(0)] = cljs$core$async$state_machine__22299__auto__);

(statearr_40130[(1)] = (1));

return statearr_40130;
});
var cljs$core$async$state_machine__22299__auto____1 = (function (state_40104){
while(true){
var ret_value__22300__auto__ = (function (){try{while(true){
var result__22301__auto__ = switch__22298__auto__.call(null,state_40104);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22301__auto__;
}
break;
}
}catch (e40131){if((e40131 instanceof Object)){
var ex__22302__auto__ = e40131;
var statearr_40132_40153 = state_40104;
(statearr_40132_40153[(5)] = ex__22302__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40104);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40131;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40154 = state_40104;
state_40104 = G__40154;
continue;
} else {
return ret_value__22300__auto__;
}
break;
}
});
cljs$core$async$state_machine__22299__auto__ = function(state_40104){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22299__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22299__auto____1.call(this,state_40104);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22299__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22299__auto____0;
cljs$core$async$state_machine__22299__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22299__auto____1;
return cljs$core$async$state_machine__22299__auto__;
})()
;})(switch__22298__auto__,c__22319__auto___40138,out))
})();
var state__22321__auto__ = (function (){var statearr_40133 = f__22320__auto__.call(null);
(statearr_40133[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22319__auto___40138);

return statearr_40133;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22321__auto__);
});})(c__22319__auto___40138,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args40155 = [];
var len__20877__auto___40229 = arguments.length;
var i__20878__auto___40230 = (0);
while(true){
if((i__20878__auto___40230 < len__20877__auto___40229)){
args40155.push((arguments[i__20878__auto___40230]));

var G__40231 = (i__20878__auto___40230 + (1));
i__20878__auto___40230 = G__40231;
continue;
} else {
}
break;
}

var G__40157 = args40155.length;
switch (G__40157) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40155.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22319__auto___40233 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22319__auto___40233,out){
return (function (){
var f__22320__auto__ = (function (){var switch__22298__auto__ = ((function (c__22319__auto___40233,out){
return (function (state_40199){
var state_val_40200 = (state_40199[(1)]);
if((state_val_40200 === (7))){
var inst_40195 = (state_40199[(2)]);
var state_40199__$1 = state_40199;
var statearr_40201_40234 = state_40199__$1;
(statearr_40201_40234[(2)] = inst_40195);

(statearr_40201_40234[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40200 === (1))){
var inst_40158 = [];
var inst_40159 = inst_40158;
var inst_40160 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_40199__$1 = (function (){var statearr_40202 = state_40199;
(statearr_40202[(7)] = inst_40159);

(statearr_40202[(8)] = inst_40160);

return statearr_40202;
})();
var statearr_40203_40235 = state_40199__$1;
(statearr_40203_40235[(2)] = null);

(statearr_40203_40235[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40200 === (4))){
var inst_40163 = (state_40199[(9)]);
var inst_40163__$1 = (state_40199[(2)]);
var inst_40164 = (inst_40163__$1 == null);
var inst_40165 = cljs.core.not.call(null,inst_40164);
var state_40199__$1 = (function (){var statearr_40204 = state_40199;
(statearr_40204[(9)] = inst_40163__$1);

return statearr_40204;
})();
if(inst_40165){
var statearr_40205_40236 = state_40199__$1;
(statearr_40205_40236[(1)] = (5));

} else {
var statearr_40206_40237 = state_40199__$1;
(statearr_40206_40237[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40200 === (15))){
var inst_40189 = (state_40199[(2)]);
var state_40199__$1 = state_40199;
var statearr_40207_40238 = state_40199__$1;
(statearr_40207_40238[(2)] = inst_40189);

(statearr_40207_40238[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40200 === (13))){
var state_40199__$1 = state_40199;
var statearr_40208_40239 = state_40199__$1;
(statearr_40208_40239[(2)] = null);

(statearr_40208_40239[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40200 === (6))){
var inst_40159 = (state_40199[(7)]);
var inst_40184 = inst_40159.length;
var inst_40185 = (inst_40184 > (0));
var state_40199__$1 = state_40199;
if(cljs.core.truth_(inst_40185)){
var statearr_40209_40240 = state_40199__$1;
(statearr_40209_40240[(1)] = (12));

} else {
var statearr_40210_40241 = state_40199__$1;
(statearr_40210_40241[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40200 === (3))){
var inst_40197 = (state_40199[(2)]);
var state_40199__$1 = state_40199;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40199__$1,inst_40197);
} else {
if((state_val_40200 === (12))){
var inst_40159 = (state_40199[(7)]);
var inst_40187 = cljs.core.vec.call(null,inst_40159);
var state_40199__$1 = state_40199;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40199__$1,(15),out,inst_40187);
} else {
if((state_val_40200 === (2))){
var state_40199__$1 = state_40199;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40199__$1,(4),ch);
} else {
if((state_val_40200 === (11))){
var inst_40167 = (state_40199[(10)]);
var inst_40163 = (state_40199[(9)]);
var inst_40177 = (state_40199[(2)]);
var inst_40178 = [];
var inst_40179 = inst_40178.push(inst_40163);
var inst_40159 = inst_40178;
var inst_40160 = inst_40167;
var state_40199__$1 = (function (){var statearr_40211 = state_40199;
(statearr_40211[(7)] = inst_40159);

(statearr_40211[(11)] = inst_40179);

(statearr_40211[(12)] = inst_40177);

(statearr_40211[(8)] = inst_40160);

return statearr_40211;
})();
var statearr_40212_40242 = state_40199__$1;
(statearr_40212_40242[(2)] = null);

(statearr_40212_40242[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40200 === (9))){
var inst_40159 = (state_40199[(7)]);
var inst_40175 = cljs.core.vec.call(null,inst_40159);
var state_40199__$1 = state_40199;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40199__$1,(11),out,inst_40175);
} else {
if((state_val_40200 === (5))){
var inst_40167 = (state_40199[(10)]);
var inst_40160 = (state_40199[(8)]);
var inst_40163 = (state_40199[(9)]);
var inst_40167__$1 = f.call(null,inst_40163);
var inst_40168 = cljs.core._EQ_.call(null,inst_40167__$1,inst_40160);
var inst_40169 = cljs.core.keyword_identical_QMARK_.call(null,inst_40160,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_40170 = (inst_40168) || (inst_40169);
var state_40199__$1 = (function (){var statearr_40213 = state_40199;
(statearr_40213[(10)] = inst_40167__$1);

return statearr_40213;
})();
if(cljs.core.truth_(inst_40170)){
var statearr_40214_40243 = state_40199__$1;
(statearr_40214_40243[(1)] = (8));

} else {
var statearr_40215_40244 = state_40199__$1;
(statearr_40215_40244[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40200 === (14))){
var inst_40192 = (state_40199[(2)]);
var inst_40193 = cljs.core.async.close_BANG_.call(null,out);
var state_40199__$1 = (function (){var statearr_40217 = state_40199;
(statearr_40217[(13)] = inst_40192);

return statearr_40217;
})();
var statearr_40218_40245 = state_40199__$1;
(statearr_40218_40245[(2)] = inst_40193);

(statearr_40218_40245[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40200 === (10))){
var inst_40182 = (state_40199[(2)]);
var state_40199__$1 = state_40199;
var statearr_40219_40246 = state_40199__$1;
(statearr_40219_40246[(2)] = inst_40182);

(statearr_40219_40246[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40200 === (8))){
var inst_40159 = (state_40199[(7)]);
var inst_40167 = (state_40199[(10)]);
var inst_40163 = (state_40199[(9)]);
var inst_40172 = inst_40159.push(inst_40163);
var tmp40216 = inst_40159;
var inst_40159__$1 = tmp40216;
var inst_40160 = inst_40167;
var state_40199__$1 = (function (){var statearr_40220 = state_40199;
(statearr_40220[(7)] = inst_40159__$1);

(statearr_40220[(14)] = inst_40172);

(statearr_40220[(8)] = inst_40160);

return statearr_40220;
})();
var statearr_40221_40247 = state_40199__$1;
(statearr_40221_40247[(2)] = null);

(statearr_40221_40247[(1)] = (2));


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
});})(c__22319__auto___40233,out))
;
return ((function (switch__22298__auto__,c__22319__auto___40233,out){
return (function() {
var cljs$core$async$state_machine__22299__auto__ = null;
var cljs$core$async$state_machine__22299__auto____0 = (function (){
var statearr_40225 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40225[(0)] = cljs$core$async$state_machine__22299__auto__);

(statearr_40225[(1)] = (1));

return statearr_40225;
});
var cljs$core$async$state_machine__22299__auto____1 = (function (state_40199){
while(true){
var ret_value__22300__auto__ = (function (){try{while(true){
var result__22301__auto__ = switch__22298__auto__.call(null,state_40199);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22301__auto__;
}
break;
}
}catch (e40226){if((e40226 instanceof Object)){
var ex__22302__auto__ = e40226;
var statearr_40227_40248 = state_40199;
(statearr_40227_40248[(5)] = ex__22302__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40199);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40226;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40249 = state_40199;
state_40199 = G__40249;
continue;
} else {
return ret_value__22300__auto__;
}
break;
}
});
cljs$core$async$state_machine__22299__auto__ = function(state_40199){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22299__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22299__auto____1.call(this,state_40199);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22299__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22299__auto____0;
cljs$core$async$state_machine__22299__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22299__auto____1;
return cljs$core$async$state_machine__22299__auto__;
})()
;})(switch__22298__auto__,c__22319__auto___40233,out))
})();
var state__22321__auto__ = (function (){var statearr_40228 = f__22320__auto__.call(null);
(statearr_40228[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22319__auto___40233);

return statearr_40228;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22321__auto__);
});})(c__22319__auto___40233,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map