// Compiled by ClojureScript 1.7.122 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t_cljs$core$async26070 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26070 = (function (fn_handler,f,meta26071){
this.fn_handler = fn_handler;
this.f = f;
this.meta26071 = meta26071;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26070.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26072,meta26071__$1){
var self__ = this;
var _26072__$1 = this;
return (new cljs.core.async.t_cljs$core$async26070(self__.fn_handler,self__.f,meta26071__$1));
});

cljs.core.async.t_cljs$core$async26070.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26072){
var self__ = this;
var _26072__$1 = this;
return self__.meta26071;
});

cljs.core.async.t_cljs$core$async26070.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async26070.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async26070.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async26070.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null)))], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta26071","meta26071",1395940289,null)], null);
});

cljs.core.async.t_cljs$core$async26070.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26070.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26070";

cljs.core.async.t_cljs$core$async26070.cljs$lang$ctorPrWriter = (function (this__16916__auto__,writer__16917__auto__,opt__16918__auto__){
return cljs.core._write.call(null,writer__16917__auto__,"cljs.core.async/t_cljs$core$async26070");
});

cljs.core.async.__GT_t_cljs$core$async26070 = (function cljs$core$async$fn_handler_$___GT_t_cljs$core$async26070(fn_handler__$1,f__$1,meta26071){
return (new cljs.core.async.t_cljs$core$async26070(fn_handler__$1,f__$1,meta26071));
});

}

return (new cljs.core.async.t_cljs$core$async26070(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
});
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
var args26075 = [];
var len__17376__auto___26078 = arguments.length;
var i__17377__auto___26079 = (0);
while(true){
if((i__17377__auto___26079 < len__17376__auto___26078)){
args26075.push((arguments[i__17377__auto___26079]));

var G__26080 = (i__17377__auto___26079 + (1));
i__17377__auto___26079 = G__26080;
continue;
} else {
}
break;
}

var G__26077 = args26075.length;
switch (G__26077) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26075.length)].join('')));

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
var args26082 = [];
var len__17376__auto___26085 = arguments.length;
var i__17377__auto___26086 = (0);
while(true){
if((i__17377__auto___26086 < len__17376__auto___26085)){
args26082.push((arguments[i__17377__auto___26086]));

var G__26087 = (i__17377__auto___26086 + (1));
i__17377__auto___26086 = G__26087;
continue;
} else {
}
break;
}

var G__26084 = args26082.length;
switch (G__26084) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26082.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_26089 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_26089);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_26089,ret){
return (function (){
return fn1.call(null,val_26089);
});})(val_26089,ret))
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
var args26090 = [];
var len__17376__auto___26093 = arguments.length;
var i__17377__auto___26094 = (0);
while(true){
if((i__17377__auto___26094 < len__17376__auto___26093)){
args26090.push((arguments[i__17377__auto___26094]));

var G__26095 = (i__17377__auto___26094 + (1));
i__17377__auto___26094 = G__26095;
continue;
} else {
}
break;
}

var G__26092 = args26090.length;
switch (G__26092) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26090.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4423__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4423__auto__))
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
var n__17221__auto___26097 = n;
var x_26098 = (0);
while(true){
if((x_26098 < n__17221__auto___26097)){
(a[x_26098] = (0));

var G__26099 = (x_26098 + (1));
x_26098 = G__26099;
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

var G__26100 = (i + (1));
i = G__26100;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async26104 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26104 = (function (alt_flag,flag,meta26105){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta26105 = meta26105;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26104.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_26106,meta26105__$1){
var self__ = this;
var _26106__$1 = this;
return (new cljs.core.async.t_cljs$core$async26104(self__.alt_flag,self__.flag,meta26105__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async26104.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_26106){
var self__ = this;
var _26106__$1 = this;
return self__.meta26105;
});})(flag))
;

cljs.core.async.t_cljs$core$async26104.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async26104.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async26104.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async26104.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta26105","meta26105",1385472036,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async26104.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26104.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26104";

cljs.core.async.t_cljs$core$async26104.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__16916__auto__,writer__16917__auto__,opt__16918__auto__){
return cljs.core._write.call(null,writer__16917__auto__,"cljs.core.async/t_cljs$core$async26104");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async26104 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async26104(alt_flag__$1,flag__$1,meta26105){
return (new cljs.core.async.t_cljs$core$async26104(alt_flag__$1,flag__$1,meta26105));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async26104(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async26110 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26110 = (function (alt_handler,flag,cb,meta26111){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta26111 = meta26111;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26110.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26112,meta26111__$1){
var self__ = this;
var _26112__$1 = this;
return (new cljs.core.async.t_cljs$core$async26110(self__.alt_handler,self__.flag,self__.cb,meta26111__$1));
});

cljs.core.async.t_cljs$core$async26110.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26112){
var self__ = this;
var _26112__$1 = this;
return self__.meta26111;
});

cljs.core.async.t_cljs$core$async26110.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async26110.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async26110.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async26110.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta26111","meta26111",-123815915,null)], null);
});

cljs.core.async.t_cljs$core$async26110.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26110.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26110";

cljs.core.async.t_cljs$core$async26110.cljs$lang$ctorPrWriter = (function (this__16916__auto__,writer__16917__auto__,opt__16918__auto__){
return cljs.core._write.call(null,writer__16917__auto__,"cljs.core.async/t_cljs$core$async26110");
});

cljs.core.async.__GT_t_cljs$core$async26110 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async26110(alt_handler__$1,flag__$1,cb__$1,meta26111){
return (new cljs.core.async.t_cljs$core$async26110(alt_handler__$1,flag__$1,cb__$1,meta26111));
});

}

return (new cljs.core.async.t_cljs$core$async26110(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__26113_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26113_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__26114_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26114_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__16318__auto__ = wport;
if(cljs.core.truth_(or__16318__auto__)){
return or__16318__auto__;
} else {
return port;
}
})()], null));
} else {
var G__26115 = (i + (1));
i = G__26115;
continue;
}
} else {
return null;
}
break;
}
})();
var or__16318__auto__ = ret;
if(cljs.core.truth_(or__16318__auto__)){
return or__16318__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__16306__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__16306__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__16306__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
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
var args__17383__auto__ = [];
var len__17376__auto___26121 = arguments.length;
var i__17377__auto___26122 = (0);
while(true){
if((i__17377__auto___26122 < len__17376__auto___26121)){
args__17383__auto__.push((arguments[i__17377__auto___26122]));

var G__26123 = (i__17377__auto___26122 + (1));
i__17377__auto___26122 = G__26123;
continue;
} else {
}
break;
}

var argseq__17384__auto__ = ((((1) < args__17383__auto__.length))?(new cljs.core.IndexedSeq(args__17383__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17384__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__26118){
var map__26119 = p__26118;
var map__26119__$1 = ((((!((map__26119 == null)))?((((map__26119.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26119.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26119):map__26119);
var opts = map__26119__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq26116){
var G__26117 = cljs.core.first.call(null,seq26116);
var seq26116__$1 = cljs.core.next.call(null,seq26116);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__26117,seq26116__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args26124 = [];
var len__17376__auto___26174 = arguments.length;
var i__17377__auto___26175 = (0);
while(true){
if((i__17377__auto___26175 < len__17376__auto___26174)){
args26124.push((arguments[i__17377__auto___26175]));

var G__26176 = (i__17377__auto___26175 + (1));
i__17377__auto___26175 = G__26176;
continue;
} else {
}
break;
}

var G__26126 = args26124.length;
switch (G__26126) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26124.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__20279__auto___26178 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20279__auto___26178){
return (function (){
var f__20280__auto__ = (function (){var switch__20214__auto__ = ((function (c__20279__auto___26178){
return (function (state_26150){
var state_val_26151 = (state_26150[(1)]);
if((state_val_26151 === (7))){
var inst_26146 = (state_26150[(2)]);
var state_26150__$1 = state_26150;
var statearr_26152_26179 = state_26150__$1;
(statearr_26152_26179[(2)] = inst_26146);

(statearr_26152_26179[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26151 === (1))){
var state_26150__$1 = state_26150;
var statearr_26153_26180 = state_26150__$1;
(statearr_26153_26180[(2)] = null);

(statearr_26153_26180[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26151 === (4))){
var inst_26129 = (state_26150[(7)]);
var inst_26129__$1 = (state_26150[(2)]);
var inst_26130 = (inst_26129__$1 == null);
var state_26150__$1 = (function (){var statearr_26154 = state_26150;
(statearr_26154[(7)] = inst_26129__$1);

return statearr_26154;
})();
if(cljs.core.truth_(inst_26130)){
var statearr_26155_26181 = state_26150__$1;
(statearr_26155_26181[(1)] = (5));

} else {
var statearr_26156_26182 = state_26150__$1;
(statearr_26156_26182[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26151 === (13))){
var state_26150__$1 = state_26150;
var statearr_26157_26183 = state_26150__$1;
(statearr_26157_26183[(2)] = null);

(statearr_26157_26183[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26151 === (6))){
var inst_26129 = (state_26150[(7)]);
var state_26150__$1 = state_26150;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26150__$1,(11),to,inst_26129);
} else {
if((state_val_26151 === (3))){
var inst_26148 = (state_26150[(2)]);
var state_26150__$1 = state_26150;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26150__$1,inst_26148);
} else {
if((state_val_26151 === (12))){
var state_26150__$1 = state_26150;
var statearr_26158_26184 = state_26150__$1;
(statearr_26158_26184[(2)] = null);

(statearr_26158_26184[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26151 === (2))){
var state_26150__$1 = state_26150;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26150__$1,(4),from);
} else {
if((state_val_26151 === (11))){
var inst_26139 = (state_26150[(2)]);
var state_26150__$1 = state_26150;
if(cljs.core.truth_(inst_26139)){
var statearr_26159_26185 = state_26150__$1;
(statearr_26159_26185[(1)] = (12));

} else {
var statearr_26160_26186 = state_26150__$1;
(statearr_26160_26186[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26151 === (9))){
var state_26150__$1 = state_26150;
var statearr_26161_26187 = state_26150__$1;
(statearr_26161_26187[(2)] = null);

(statearr_26161_26187[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26151 === (5))){
var state_26150__$1 = state_26150;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26162_26188 = state_26150__$1;
(statearr_26162_26188[(1)] = (8));

} else {
var statearr_26163_26189 = state_26150__$1;
(statearr_26163_26189[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26151 === (14))){
var inst_26144 = (state_26150[(2)]);
var state_26150__$1 = state_26150;
var statearr_26164_26190 = state_26150__$1;
(statearr_26164_26190[(2)] = inst_26144);

(statearr_26164_26190[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26151 === (10))){
var inst_26136 = (state_26150[(2)]);
var state_26150__$1 = state_26150;
var statearr_26165_26191 = state_26150__$1;
(statearr_26165_26191[(2)] = inst_26136);

(statearr_26165_26191[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26151 === (8))){
var inst_26133 = cljs.core.async.close_BANG_.call(null,to);
var state_26150__$1 = state_26150;
var statearr_26166_26192 = state_26150__$1;
(statearr_26166_26192[(2)] = inst_26133);

(statearr_26166_26192[(1)] = (10));


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
});})(c__20279__auto___26178))
;
return ((function (switch__20214__auto__,c__20279__auto___26178){
return (function() {
var cljs$core$async$state_machine__20215__auto__ = null;
var cljs$core$async$state_machine__20215__auto____0 = (function (){
var statearr_26170 = [null,null,null,null,null,null,null,null];
(statearr_26170[(0)] = cljs$core$async$state_machine__20215__auto__);

(statearr_26170[(1)] = (1));

return statearr_26170;
});
var cljs$core$async$state_machine__20215__auto____1 = (function (state_26150){
while(true){
var ret_value__20216__auto__ = (function (){try{while(true){
var result__20217__auto__ = switch__20214__auto__.call(null,state_26150);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20217__auto__;
}
break;
}
}catch (e26171){if((e26171 instanceof Object)){
var ex__20218__auto__ = e26171;
var statearr_26172_26193 = state_26150;
(statearr_26172_26193[(5)] = ex__20218__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26150);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26171;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20216__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26194 = state_26150;
state_26150 = G__26194;
continue;
} else {
return ret_value__20216__auto__;
}
break;
}
});
cljs$core$async$state_machine__20215__auto__ = function(state_26150){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20215__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20215__auto____1.call(this,state_26150);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20215__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20215__auto____0;
cljs$core$async$state_machine__20215__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20215__auto____1;
return cljs$core$async$state_machine__20215__auto__;
})()
;})(switch__20214__auto__,c__20279__auto___26178))
})();
var state__20281__auto__ = (function (){var statearr_26173 = f__20280__auto__.call(null);
(statearr_26173[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20279__auto___26178);

return statearr_26173;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20281__auto__);
});})(c__20279__auto___26178))
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
return (function (p__26378){
var vec__26379 = p__26378;
var v = cljs.core.nth.call(null,vec__26379,(0),null);
var p = cljs.core.nth.call(null,vec__26379,(1),null);
var job = vec__26379;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__20279__auto___26561 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20279__auto___26561,res,vec__26379,v,p,job,jobs,results){
return (function (){
var f__20280__auto__ = (function (){var switch__20214__auto__ = ((function (c__20279__auto___26561,res,vec__26379,v,p,job,jobs,results){
return (function (state_26384){
var state_val_26385 = (state_26384[(1)]);
if((state_val_26385 === (1))){
var state_26384__$1 = state_26384;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26384__$1,(2),res,v);
} else {
if((state_val_26385 === (2))){
var inst_26381 = (state_26384[(2)]);
var inst_26382 = cljs.core.async.close_BANG_.call(null,res);
var state_26384__$1 = (function (){var statearr_26386 = state_26384;
(statearr_26386[(7)] = inst_26381);

return statearr_26386;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26384__$1,inst_26382);
} else {
return null;
}
}
});})(c__20279__auto___26561,res,vec__26379,v,p,job,jobs,results))
;
return ((function (switch__20214__auto__,c__20279__auto___26561,res,vec__26379,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20215__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20215__auto____0 = (function (){
var statearr_26390 = [null,null,null,null,null,null,null,null];
(statearr_26390[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20215__auto__);

(statearr_26390[(1)] = (1));

return statearr_26390;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20215__auto____1 = (function (state_26384){
while(true){
var ret_value__20216__auto__ = (function (){try{while(true){
var result__20217__auto__ = switch__20214__auto__.call(null,state_26384);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20217__auto__;
}
break;
}
}catch (e26391){if((e26391 instanceof Object)){
var ex__20218__auto__ = e26391;
var statearr_26392_26562 = state_26384;
(statearr_26392_26562[(5)] = ex__20218__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26384);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26391;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20216__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26563 = state_26384;
state_26384 = G__26563;
continue;
} else {
return ret_value__20216__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20215__auto__ = function(state_26384){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20215__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20215__auto____1.call(this,state_26384);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20215__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20215__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20215__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20215__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20215__auto__;
})()
;})(switch__20214__auto__,c__20279__auto___26561,res,vec__26379,v,p,job,jobs,results))
})();
var state__20281__auto__ = (function (){var statearr_26393 = f__20280__auto__.call(null);
(statearr_26393[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20279__auto___26561);

return statearr_26393;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20281__auto__);
});})(c__20279__auto___26561,res,vec__26379,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__26394){
var vec__26395 = p__26394;
var v = cljs.core.nth.call(null,vec__26395,(0),null);
var p = cljs.core.nth.call(null,vec__26395,(1),null);
var job = vec__26395;
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
var n__17221__auto___26564 = n;
var __26565 = (0);
while(true){
if((__26565 < n__17221__auto___26564)){
var G__26396_26566 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__26396_26566) {
case "compute":
var c__20279__auto___26568 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__26565,c__20279__auto___26568,G__26396_26566,n__17221__auto___26564,jobs,results,process,async){
return (function (){
var f__20280__auto__ = (function (){var switch__20214__auto__ = ((function (__26565,c__20279__auto___26568,G__26396_26566,n__17221__auto___26564,jobs,results,process,async){
return (function (state_26409){
var state_val_26410 = (state_26409[(1)]);
if((state_val_26410 === (1))){
var state_26409__$1 = state_26409;
var statearr_26411_26569 = state_26409__$1;
(statearr_26411_26569[(2)] = null);

(statearr_26411_26569[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26410 === (2))){
var state_26409__$1 = state_26409;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26409__$1,(4),jobs);
} else {
if((state_val_26410 === (3))){
var inst_26407 = (state_26409[(2)]);
var state_26409__$1 = state_26409;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26409__$1,inst_26407);
} else {
if((state_val_26410 === (4))){
var inst_26399 = (state_26409[(2)]);
var inst_26400 = process.call(null,inst_26399);
var state_26409__$1 = state_26409;
if(cljs.core.truth_(inst_26400)){
var statearr_26412_26570 = state_26409__$1;
(statearr_26412_26570[(1)] = (5));

} else {
var statearr_26413_26571 = state_26409__$1;
(statearr_26413_26571[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26410 === (5))){
var state_26409__$1 = state_26409;
var statearr_26414_26572 = state_26409__$1;
(statearr_26414_26572[(2)] = null);

(statearr_26414_26572[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26410 === (6))){
var state_26409__$1 = state_26409;
var statearr_26415_26573 = state_26409__$1;
(statearr_26415_26573[(2)] = null);

(statearr_26415_26573[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26410 === (7))){
var inst_26405 = (state_26409[(2)]);
var state_26409__$1 = state_26409;
var statearr_26416_26574 = state_26409__$1;
(statearr_26416_26574[(2)] = inst_26405);

(statearr_26416_26574[(1)] = (3));


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
});})(__26565,c__20279__auto___26568,G__26396_26566,n__17221__auto___26564,jobs,results,process,async))
;
return ((function (__26565,switch__20214__auto__,c__20279__auto___26568,G__26396_26566,n__17221__auto___26564,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20215__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20215__auto____0 = (function (){
var statearr_26420 = [null,null,null,null,null,null,null];
(statearr_26420[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20215__auto__);

(statearr_26420[(1)] = (1));

return statearr_26420;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20215__auto____1 = (function (state_26409){
while(true){
var ret_value__20216__auto__ = (function (){try{while(true){
var result__20217__auto__ = switch__20214__auto__.call(null,state_26409);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20217__auto__;
}
break;
}
}catch (e26421){if((e26421 instanceof Object)){
var ex__20218__auto__ = e26421;
var statearr_26422_26575 = state_26409;
(statearr_26422_26575[(5)] = ex__20218__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26409);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26421;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20216__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26576 = state_26409;
state_26409 = G__26576;
continue;
} else {
return ret_value__20216__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20215__auto__ = function(state_26409){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20215__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20215__auto____1.call(this,state_26409);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20215__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20215__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20215__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20215__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20215__auto__;
})()
;})(__26565,switch__20214__auto__,c__20279__auto___26568,G__26396_26566,n__17221__auto___26564,jobs,results,process,async))
})();
var state__20281__auto__ = (function (){var statearr_26423 = f__20280__auto__.call(null);
(statearr_26423[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20279__auto___26568);

return statearr_26423;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20281__auto__);
});})(__26565,c__20279__auto___26568,G__26396_26566,n__17221__auto___26564,jobs,results,process,async))
);


break;
case "async":
var c__20279__auto___26577 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__26565,c__20279__auto___26577,G__26396_26566,n__17221__auto___26564,jobs,results,process,async){
return (function (){
var f__20280__auto__ = (function (){var switch__20214__auto__ = ((function (__26565,c__20279__auto___26577,G__26396_26566,n__17221__auto___26564,jobs,results,process,async){
return (function (state_26436){
var state_val_26437 = (state_26436[(1)]);
if((state_val_26437 === (1))){
var state_26436__$1 = state_26436;
var statearr_26438_26578 = state_26436__$1;
(statearr_26438_26578[(2)] = null);

(statearr_26438_26578[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26437 === (2))){
var state_26436__$1 = state_26436;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26436__$1,(4),jobs);
} else {
if((state_val_26437 === (3))){
var inst_26434 = (state_26436[(2)]);
var state_26436__$1 = state_26436;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26436__$1,inst_26434);
} else {
if((state_val_26437 === (4))){
var inst_26426 = (state_26436[(2)]);
var inst_26427 = async.call(null,inst_26426);
var state_26436__$1 = state_26436;
if(cljs.core.truth_(inst_26427)){
var statearr_26439_26579 = state_26436__$1;
(statearr_26439_26579[(1)] = (5));

} else {
var statearr_26440_26580 = state_26436__$1;
(statearr_26440_26580[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26437 === (5))){
var state_26436__$1 = state_26436;
var statearr_26441_26581 = state_26436__$1;
(statearr_26441_26581[(2)] = null);

(statearr_26441_26581[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26437 === (6))){
var state_26436__$1 = state_26436;
var statearr_26442_26582 = state_26436__$1;
(statearr_26442_26582[(2)] = null);

(statearr_26442_26582[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26437 === (7))){
var inst_26432 = (state_26436[(2)]);
var state_26436__$1 = state_26436;
var statearr_26443_26583 = state_26436__$1;
(statearr_26443_26583[(2)] = inst_26432);

(statearr_26443_26583[(1)] = (3));


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
});})(__26565,c__20279__auto___26577,G__26396_26566,n__17221__auto___26564,jobs,results,process,async))
;
return ((function (__26565,switch__20214__auto__,c__20279__auto___26577,G__26396_26566,n__17221__auto___26564,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20215__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20215__auto____0 = (function (){
var statearr_26447 = [null,null,null,null,null,null,null];
(statearr_26447[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20215__auto__);

(statearr_26447[(1)] = (1));

return statearr_26447;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20215__auto____1 = (function (state_26436){
while(true){
var ret_value__20216__auto__ = (function (){try{while(true){
var result__20217__auto__ = switch__20214__auto__.call(null,state_26436);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20217__auto__;
}
break;
}
}catch (e26448){if((e26448 instanceof Object)){
var ex__20218__auto__ = e26448;
var statearr_26449_26584 = state_26436;
(statearr_26449_26584[(5)] = ex__20218__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26436);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26448;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20216__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26585 = state_26436;
state_26436 = G__26585;
continue;
} else {
return ret_value__20216__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20215__auto__ = function(state_26436){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20215__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20215__auto____1.call(this,state_26436);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20215__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20215__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20215__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20215__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20215__auto__;
})()
;})(__26565,switch__20214__auto__,c__20279__auto___26577,G__26396_26566,n__17221__auto___26564,jobs,results,process,async))
})();
var state__20281__auto__ = (function (){var statearr_26450 = f__20280__auto__.call(null);
(statearr_26450[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20279__auto___26577);

return statearr_26450;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20281__auto__);
});})(__26565,c__20279__auto___26577,G__26396_26566,n__17221__auto___26564,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__26586 = (__26565 + (1));
__26565 = G__26586;
continue;
} else {
}
break;
}

var c__20279__auto___26587 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20279__auto___26587,jobs,results,process,async){
return (function (){
var f__20280__auto__ = (function (){var switch__20214__auto__ = ((function (c__20279__auto___26587,jobs,results,process,async){
return (function (state_26472){
var state_val_26473 = (state_26472[(1)]);
if((state_val_26473 === (1))){
var state_26472__$1 = state_26472;
var statearr_26474_26588 = state_26472__$1;
(statearr_26474_26588[(2)] = null);

(statearr_26474_26588[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26473 === (2))){
var state_26472__$1 = state_26472;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26472__$1,(4),from);
} else {
if((state_val_26473 === (3))){
var inst_26470 = (state_26472[(2)]);
var state_26472__$1 = state_26472;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26472__$1,inst_26470);
} else {
if((state_val_26473 === (4))){
var inst_26453 = (state_26472[(7)]);
var inst_26453__$1 = (state_26472[(2)]);
var inst_26454 = (inst_26453__$1 == null);
var state_26472__$1 = (function (){var statearr_26475 = state_26472;
(statearr_26475[(7)] = inst_26453__$1);

return statearr_26475;
})();
if(cljs.core.truth_(inst_26454)){
var statearr_26476_26589 = state_26472__$1;
(statearr_26476_26589[(1)] = (5));

} else {
var statearr_26477_26590 = state_26472__$1;
(statearr_26477_26590[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26473 === (5))){
var inst_26456 = cljs.core.async.close_BANG_.call(null,jobs);
var state_26472__$1 = state_26472;
var statearr_26478_26591 = state_26472__$1;
(statearr_26478_26591[(2)] = inst_26456);

(statearr_26478_26591[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26473 === (6))){
var inst_26453 = (state_26472[(7)]);
var inst_26458 = (state_26472[(8)]);
var inst_26458__$1 = cljs.core.async.chan.call(null,(1));
var inst_26459 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26460 = [inst_26453,inst_26458__$1];
var inst_26461 = (new cljs.core.PersistentVector(null,2,(5),inst_26459,inst_26460,null));
var state_26472__$1 = (function (){var statearr_26479 = state_26472;
(statearr_26479[(8)] = inst_26458__$1);

return statearr_26479;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26472__$1,(8),jobs,inst_26461);
} else {
if((state_val_26473 === (7))){
var inst_26468 = (state_26472[(2)]);
var state_26472__$1 = state_26472;
var statearr_26480_26592 = state_26472__$1;
(statearr_26480_26592[(2)] = inst_26468);

(statearr_26480_26592[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26473 === (8))){
var inst_26458 = (state_26472[(8)]);
var inst_26463 = (state_26472[(2)]);
var state_26472__$1 = (function (){var statearr_26481 = state_26472;
(statearr_26481[(9)] = inst_26463);

return statearr_26481;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26472__$1,(9),results,inst_26458);
} else {
if((state_val_26473 === (9))){
var inst_26465 = (state_26472[(2)]);
var state_26472__$1 = (function (){var statearr_26482 = state_26472;
(statearr_26482[(10)] = inst_26465);

return statearr_26482;
})();
var statearr_26483_26593 = state_26472__$1;
(statearr_26483_26593[(2)] = null);

(statearr_26483_26593[(1)] = (2));


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
});})(c__20279__auto___26587,jobs,results,process,async))
;
return ((function (switch__20214__auto__,c__20279__auto___26587,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20215__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20215__auto____0 = (function (){
var statearr_26487 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26487[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20215__auto__);

(statearr_26487[(1)] = (1));

return statearr_26487;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20215__auto____1 = (function (state_26472){
while(true){
var ret_value__20216__auto__ = (function (){try{while(true){
var result__20217__auto__ = switch__20214__auto__.call(null,state_26472);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20217__auto__;
}
break;
}
}catch (e26488){if((e26488 instanceof Object)){
var ex__20218__auto__ = e26488;
var statearr_26489_26594 = state_26472;
(statearr_26489_26594[(5)] = ex__20218__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26472);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26488;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20216__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26595 = state_26472;
state_26472 = G__26595;
continue;
} else {
return ret_value__20216__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20215__auto__ = function(state_26472){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20215__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20215__auto____1.call(this,state_26472);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20215__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20215__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20215__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20215__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20215__auto__;
})()
;})(switch__20214__auto__,c__20279__auto___26587,jobs,results,process,async))
})();
var state__20281__auto__ = (function (){var statearr_26490 = f__20280__auto__.call(null);
(statearr_26490[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20279__auto___26587);

return statearr_26490;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20281__auto__);
});})(c__20279__auto___26587,jobs,results,process,async))
);


var c__20279__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20279__auto__,jobs,results,process,async){
return (function (){
var f__20280__auto__ = (function (){var switch__20214__auto__ = ((function (c__20279__auto__,jobs,results,process,async){
return (function (state_26528){
var state_val_26529 = (state_26528[(1)]);
if((state_val_26529 === (7))){
var inst_26524 = (state_26528[(2)]);
var state_26528__$1 = state_26528;
var statearr_26530_26596 = state_26528__$1;
(statearr_26530_26596[(2)] = inst_26524);

(statearr_26530_26596[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26529 === (20))){
var state_26528__$1 = state_26528;
var statearr_26531_26597 = state_26528__$1;
(statearr_26531_26597[(2)] = null);

(statearr_26531_26597[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26529 === (1))){
var state_26528__$1 = state_26528;
var statearr_26532_26598 = state_26528__$1;
(statearr_26532_26598[(2)] = null);

(statearr_26532_26598[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26529 === (4))){
var inst_26493 = (state_26528[(7)]);
var inst_26493__$1 = (state_26528[(2)]);
var inst_26494 = (inst_26493__$1 == null);
var state_26528__$1 = (function (){var statearr_26533 = state_26528;
(statearr_26533[(7)] = inst_26493__$1);

return statearr_26533;
})();
if(cljs.core.truth_(inst_26494)){
var statearr_26534_26599 = state_26528__$1;
(statearr_26534_26599[(1)] = (5));

} else {
var statearr_26535_26600 = state_26528__$1;
(statearr_26535_26600[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26529 === (15))){
var inst_26506 = (state_26528[(8)]);
var state_26528__$1 = state_26528;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26528__$1,(18),to,inst_26506);
} else {
if((state_val_26529 === (21))){
var inst_26519 = (state_26528[(2)]);
var state_26528__$1 = state_26528;
var statearr_26536_26601 = state_26528__$1;
(statearr_26536_26601[(2)] = inst_26519);

(statearr_26536_26601[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26529 === (13))){
var inst_26521 = (state_26528[(2)]);
var state_26528__$1 = (function (){var statearr_26537 = state_26528;
(statearr_26537[(9)] = inst_26521);

return statearr_26537;
})();
var statearr_26538_26602 = state_26528__$1;
(statearr_26538_26602[(2)] = null);

(statearr_26538_26602[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26529 === (6))){
var inst_26493 = (state_26528[(7)]);
var state_26528__$1 = state_26528;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26528__$1,(11),inst_26493);
} else {
if((state_val_26529 === (17))){
var inst_26514 = (state_26528[(2)]);
var state_26528__$1 = state_26528;
if(cljs.core.truth_(inst_26514)){
var statearr_26539_26603 = state_26528__$1;
(statearr_26539_26603[(1)] = (19));

} else {
var statearr_26540_26604 = state_26528__$1;
(statearr_26540_26604[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26529 === (3))){
var inst_26526 = (state_26528[(2)]);
var state_26528__$1 = state_26528;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26528__$1,inst_26526);
} else {
if((state_val_26529 === (12))){
var inst_26503 = (state_26528[(10)]);
var state_26528__$1 = state_26528;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26528__$1,(14),inst_26503);
} else {
if((state_val_26529 === (2))){
var state_26528__$1 = state_26528;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26528__$1,(4),results);
} else {
if((state_val_26529 === (19))){
var state_26528__$1 = state_26528;
var statearr_26541_26605 = state_26528__$1;
(statearr_26541_26605[(2)] = null);

(statearr_26541_26605[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26529 === (11))){
var inst_26503 = (state_26528[(2)]);
var state_26528__$1 = (function (){var statearr_26542 = state_26528;
(statearr_26542[(10)] = inst_26503);

return statearr_26542;
})();
var statearr_26543_26606 = state_26528__$1;
(statearr_26543_26606[(2)] = null);

(statearr_26543_26606[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26529 === (9))){
var state_26528__$1 = state_26528;
var statearr_26544_26607 = state_26528__$1;
(statearr_26544_26607[(2)] = null);

(statearr_26544_26607[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26529 === (5))){
var state_26528__$1 = state_26528;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26545_26608 = state_26528__$1;
(statearr_26545_26608[(1)] = (8));

} else {
var statearr_26546_26609 = state_26528__$1;
(statearr_26546_26609[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26529 === (14))){
var inst_26506 = (state_26528[(8)]);
var inst_26508 = (state_26528[(11)]);
var inst_26506__$1 = (state_26528[(2)]);
var inst_26507 = (inst_26506__$1 == null);
var inst_26508__$1 = cljs.core.not.call(null,inst_26507);
var state_26528__$1 = (function (){var statearr_26547 = state_26528;
(statearr_26547[(8)] = inst_26506__$1);

(statearr_26547[(11)] = inst_26508__$1);

return statearr_26547;
})();
if(inst_26508__$1){
var statearr_26548_26610 = state_26528__$1;
(statearr_26548_26610[(1)] = (15));

} else {
var statearr_26549_26611 = state_26528__$1;
(statearr_26549_26611[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26529 === (16))){
var inst_26508 = (state_26528[(11)]);
var state_26528__$1 = state_26528;
var statearr_26550_26612 = state_26528__$1;
(statearr_26550_26612[(2)] = inst_26508);

(statearr_26550_26612[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26529 === (10))){
var inst_26500 = (state_26528[(2)]);
var state_26528__$1 = state_26528;
var statearr_26551_26613 = state_26528__$1;
(statearr_26551_26613[(2)] = inst_26500);

(statearr_26551_26613[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26529 === (18))){
var inst_26511 = (state_26528[(2)]);
var state_26528__$1 = state_26528;
var statearr_26552_26614 = state_26528__$1;
(statearr_26552_26614[(2)] = inst_26511);

(statearr_26552_26614[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26529 === (8))){
var inst_26497 = cljs.core.async.close_BANG_.call(null,to);
var state_26528__$1 = state_26528;
var statearr_26553_26615 = state_26528__$1;
(statearr_26553_26615[(2)] = inst_26497);

(statearr_26553_26615[(1)] = (10));


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
});})(c__20279__auto__,jobs,results,process,async))
;
return ((function (switch__20214__auto__,c__20279__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20215__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20215__auto____0 = (function (){
var statearr_26557 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26557[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20215__auto__);

(statearr_26557[(1)] = (1));

return statearr_26557;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20215__auto____1 = (function (state_26528){
while(true){
var ret_value__20216__auto__ = (function (){try{while(true){
var result__20217__auto__ = switch__20214__auto__.call(null,state_26528);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20217__auto__;
}
break;
}
}catch (e26558){if((e26558 instanceof Object)){
var ex__20218__auto__ = e26558;
var statearr_26559_26616 = state_26528;
(statearr_26559_26616[(5)] = ex__20218__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26528);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26558;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20216__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26617 = state_26528;
state_26528 = G__26617;
continue;
} else {
return ret_value__20216__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20215__auto__ = function(state_26528){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20215__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20215__auto____1.call(this,state_26528);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20215__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20215__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20215__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20215__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20215__auto__;
})()
;})(switch__20214__auto__,c__20279__auto__,jobs,results,process,async))
})();
var state__20281__auto__ = (function (){var statearr_26560 = f__20280__auto__.call(null);
(statearr_26560[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20279__auto__);

return statearr_26560;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20281__auto__);
});})(c__20279__auto__,jobs,results,process,async))
);

return c__20279__auto__;
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
var args26618 = [];
var len__17376__auto___26621 = arguments.length;
var i__17377__auto___26622 = (0);
while(true){
if((i__17377__auto___26622 < len__17376__auto___26621)){
args26618.push((arguments[i__17377__auto___26622]));

var G__26623 = (i__17377__auto___26622 + (1));
i__17377__auto___26622 = G__26623;
continue;
} else {
}
break;
}

var G__26620 = args26618.length;
switch (G__26620) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26618.length)].join('')));

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
var args26625 = [];
var len__17376__auto___26628 = arguments.length;
var i__17377__auto___26629 = (0);
while(true){
if((i__17377__auto___26629 < len__17376__auto___26628)){
args26625.push((arguments[i__17377__auto___26629]));

var G__26630 = (i__17377__auto___26629 + (1));
i__17377__auto___26629 = G__26630;
continue;
} else {
}
break;
}

var G__26627 = args26625.length;
switch (G__26627) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26625.length)].join('')));

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
var args26632 = [];
var len__17376__auto___26685 = arguments.length;
var i__17377__auto___26686 = (0);
while(true){
if((i__17377__auto___26686 < len__17376__auto___26685)){
args26632.push((arguments[i__17377__auto___26686]));

var G__26687 = (i__17377__auto___26686 + (1));
i__17377__auto___26686 = G__26687;
continue;
} else {
}
break;
}

var G__26634 = args26632.length;
switch (G__26634) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26632.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__20279__auto___26689 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20279__auto___26689,tc,fc){
return (function (){
var f__20280__auto__ = (function (){var switch__20214__auto__ = ((function (c__20279__auto___26689,tc,fc){
return (function (state_26660){
var state_val_26661 = (state_26660[(1)]);
if((state_val_26661 === (7))){
var inst_26656 = (state_26660[(2)]);
var state_26660__$1 = state_26660;
var statearr_26662_26690 = state_26660__$1;
(statearr_26662_26690[(2)] = inst_26656);

(statearr_26662_26690[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26661 === (1))){
var state_26660__$1 = state_26660;
var statearr_26663_26691 = state_26660__$1;
(statearr_26663_26691[(2)] = null);

(statearr_26663_26691[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26661 === (4))){
var inst_26637 = (state_26660[(7)]);
var inst_26637__$1 = (state_26660[(2)]);
var inst_26638 = (inst_26637__$1 == null);
var state_26660__$1 = (function (){var statearr_26664 = state_26660;
(statearr_26664[(7)] = inst_26637__$1);

return statearr_26664;
})();
if(cljs.core.truth_(inst_26638)){
var statearr_26665_26692 = state_26660__$1;
(statearr_26665_26692[(1)] = (5));

} else {
var statearr_26666_26693 = state_26660__$1;
(statearr_26666_26693[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26661 === (13))){
var state_26660__$1 = state_26660;
var statearr_26667_26694 = state_26660__$1;
(statearr_26667_26694[(2)] = null);

(statearr_26667_26694[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26661 === (6))){
var inst_26637 = (state_26660[(7)]);
var inst_26643 = p.call(null,inst_26637);
var state_26660__$1 = state_26660;
if(cljs.core.truth_(inst_26643)){
var statearr_26668_26695 = state_26660__$1;
(statearr_26668_26695[(1)] = (9));

} else {
var statearr_26669_26696 = state_26660__$1;
(statearr_26669_26696[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26661 === (3))){
var inst_26658 = (state_26660[(2)]);
var state_26660__$1 = state_26660;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26660__$1,inst_26658);
} else {
if((state_val_26661 === (12))){
var state_26660__$1 = state_26660;
var statearr_26670_26697 = state_26660__$1;
(statearr_26670_26697[(2)] = null);

(statearr_26670_26697[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26661 === (2))){
var state_26660__$1 = state_26660;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26660__$1,(4),ch);
} else {
if((state_val_26661 === (11))){
var inst_26637 = (state_26660[(7)]);
var inst_26647 = (state_26660[(2)]);
var state_26660__$1 = state_26660;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26660__$1,(8),inst_26647,inst_26637);
} else {
if((state_val_26661 === (9))){
var state_26660__$1 = state_26660;
var statearr_26671_26698 = state_26660__$1;
(statearr_26671_26698[(2)] = tc);

(statearr_26671_26698[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26661 === (5))){
var inst_26640 = cljs.core.async.close_BANG_.call(null,tc);
var inst_26641 = cljs.core.async.close_BANG_.call(null,fc);
var state_26660__$1 = (function (){var statearr_26672 = state_26660;
(statearr_26672[(8)] = inst_26640);

return statearr_26672;
})();
var statearr_26673_26699 = state_26660__$1;
(statearr_26673_26699[(2)] = inst_26641);

(statearr_26673_26699[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26661 === (14))){
var inst_26654 = (state_26660[(2)]);
var state_26660__$1 = state_26660;
var statearr_26674_26700 = state_26660__$1;
(statearr_26674_26700[(2)] = inst_26654);

(statearr_26674_26700[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26661 === (10))){
var state_26660__$1 = state_26660;
var statearr_26675_26701 = state_26660__$1;
(statearr_26675_26701[(2)] = fc);

(statearr_26675_26701[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26661 === (8))){
var inst_26649 = (state_26660[(2)]);
var state_26660__$1 = state_26660;
if(cljs.core.truth_(inst_26649)){
var statearr_26676_26702 = state_26660__$1;
(statearr_26676_26702[(1)] = (12));

} else {
var statearr_26677_26703 = state_26660__$1;
(statearr_26677_26703[(1)] = (13));

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
});})(c__20279__auto___26689,tc,fc))
;
return ((function (switch__20214__auto__,c__20279__auto___26689,tc,fc){
return (function() {
var cljs$core$async$state_machine__20215__auto__ = null;
var cljs$core$async$state_machine__20215__auto____0 = (function (){
var statearr_26681 = [null,null,null,null,null,null,null,null,null];
(statearr_26681[(0)] = cljs$core$async$state_machine__20215__auto__);

(statearr_26681[(1)] = (1));

return statearr_26681;
});
var cljs$core$async$state_machine__20215__auto____1 = (function (state_26660){
while(true){
var ret_value__20216__auto__ = (function (){try{while(true){
var result__20217__auto__ = switch__20214__auto__.call(null,state_26660);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20217__auto__;
}
break;
}
}catch (e26682){if((e26682 instanceof Object)){
var ex__20218__auto__ = e26682;
var statearr_26683_26704 = state_26660;
(statearr_26683_26704[(5)] = ex__20218__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26660);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26682;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20216__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26705 = state_26660;
state_26660 = G__26705;
continue;
} else {
return ret_value__20216__auto__;
}
break;
}
});
cljs$core$async$state_machine__20215__auto__ = function(state_26660){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20215__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20215__auto____1.call(this,state_26660);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20215__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20215__auto____0;
cljs$core$async$state_machine__20215__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20215__auto____1;
return cljs$core$async$state_machine__20215__auto__;
})()
;})(switch__20214__auto__,c__20279__auto___26689,tc,fc))
})();
var state__20281__auto__ = (function (){var statearr_26684 = f__20280__auto__.call(null);
(statearr_26684[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20279__auto___26689);

return statearr_26684;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20281__auto__);
});})(c__20279__auto___26689,tc,fc))
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
var c__20279__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20279__auto__){
return (function (){
var f__20280__auto__ = (function (){var switch__20214__auto__ = ((function (c__20279__auto__){
return (function (state_26752){
var state_val_26753 = (state_26752[(1)]);
if((state_val_26753 === (1))){
var inst_26738 = init;
var state_26752__$1 = (function (){var statearr_26754 = state_26752;
(statearr_26754[(7)] = inst_26738);

return statearr_26754;
})();
var statearr_26755_26770 = state_26752__$1;
(statearr_26755_26770[(2)] = null);

(statearr_26755_26770[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26753 === (2))){
var state_26752__$1 = state_26752;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26752__$1,(4),ch);
} else {
if((state_val_26753 === (3))){
var inst_26750 = (state_26752[(2)]);
var state_26752__$1 = state_26752;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26752__$1,inst_26750);
} else {
if((state_val_26753 === (4))){
var inst_26741 = (state_26752[(8)]);
var inst_26741__$1 = (state_26752[(2)]);
var inst_26742 = (inst_26741__$1 == null);
var state_26752__$1 = (function (){var statearr_26756 = state_26752;
(statearr_26756[(8)] = inst_26741__$1);

return statearr_26756;
})();
if(cljs.core.truth_(inst_26742)){
var statearr_26757_26771 = state_26752__$1;
(statearr_26757_26771[(1)] = (5));

} else {
var statearr_26758_26772 = state_26752__$1;
(statearr_26758_26772[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26753 === (5))){
var inst_26738 = (state_26752[(7)]);
var state_26752__$1 = state_26752;
var statearr_26759_26773 = state_26752__$1;
(statearr_26759_26773[(2)] = inst_26738);

(statearr_26759_26773[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26753 === (6))){
var inst_26738 = (state_26752[(7)]);
var inst_26741 = (state_26752[(8)]);
var inst_26745 = f.call(null,inst_26738,inst_26741);
var inst_26738__$1 = inst_26745;
var state_26752__$1 = (function (){var statearr_26760 = state_26752;
(statearr_26760[(7)] = inst_26738__$1);

return statearr_26760;
})();
var statearr_26761_26774 = state_26752__$1;
(statearr_26761_26774[(2)] = null);

(statearr_26761_26774[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26753 === (7))){
var inst_26748 = (state_26752[(2)]);
var state_26752__$1 = state_26752;
var statearr_26762_26775 = state_26752__$1;
(statearr_26762_26775[(2)] = inst_26748);

(statearr_26762_26775[(1)] = (3));


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
});})(c__20279__auto__))
;
return ((function (switch__20214__auto__,c__20279__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__20215__auto__ = null;
var cljs$core$async$reduce_$_state_machine__20215__auto____0 = (function (){
var statearr_26766 = [null,null,null,null,null,null,null,null,null];
(statearr_26766[(0)] = cljs$core$async$reduce_$_state_machine__20215__auto__);

(statearr_26766[(1)] = (1));

return statearr_26766;
});
var cljs$core$async$reduce_$_state_machine__20215__auto____1 = (function (state_26752){
while(true){
var ret_value__20216__auto__ = (function (){try{while(true){
var result__20217__auto__ = switch__20214__auto__.call(null,state_26752);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20217__auto__;
}
break;
}
}catch (e26767){if((e26767 instanceof Object)){
var ex__20218__auto__ = e26767;
var statearr_26768_26776 = state_26752;
(statearr_26768_26776[(5)] = ex__20218__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26752);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26767;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20216__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26777 = state_26752;
state_26752 = G__26777;
continue;
} else {
return ret_value__20216__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__20215__auto__ = function(state_26752){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__20215__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__20215__auto____1.call(this,state_26752);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__20215__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__20215__auto____0;
cljs$core$async$reduce_$_state_machine__20215__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__20215__auto____1;
return cljs$core$async$reduce_$_state_machine__20215__auto__;
})()
;})(switch__20214__auto__,c__20279__auto__))
})();
var state__20281__auto__ = (function (){var statearr_26769 = f__20280__auto__.call(null);
(statearr_26769[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20279__auto__);

return statearr_26769;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20281__auto__);
});})(c__20279__auto__))
);

return c__20279__auto__;
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
var args26778 = [];
var len__17376__auto___26830 = arguments.length;
var i__17377__auto___26831 = (0);
while(true){
if((i__17377__auto___26831 < len__17376__auto___26830)){
args26778.push((arguments[i__17377__auto___26831]));

var G__26832 = (i__17377__auto___26831 + (1));
i__17377__auto___26831 = G__26832;
continue;
} else {
}
break;
}

var G__26780 = args26778.length;
switch (G__26780) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26778.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__20279__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20279__auto__){
return (function (){
var f__20280__auto__ = (function (){var switch__20214__auto__ = ((function (c__20279__auto__){
return (function (state_26805){
var state_val_26806 = (state_26805[(1)]);
if((state_val_26806 === (7))){
var inst_26787 = (state_26805[(2)]);
var state_26805__$1 = state_26805;
var statearr_26807_26834 = state_26805__$1;
(statearr_26807_26834[(2)] = inst_26787);

(statearr_26807_26834[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26806 === (1))){
var inst_26781 = cljs.core.seq.call(null,coll);
var inst_26782 = inst_26781;
var state_26805__$1 = (function (){var statearr_26808 = state_26805;
(statearr_26808[(7)] = inst_26782);

return statearr_26808;
})();
var statearr_26809_26835 = state_26805__$1;
(statearr_26809_26835[(2)] = null);

(statearr_26809_26835[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26806 === (4))){
var inst_26782 = (state_26805[(7)]);
var inst_26785 = cljs.core.first.call(null,inst_26782);
var state_26805__$1 = state_26805;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26805__$1,(7),ch,inst_26785);
} else {
if((state_val_26806 === (13))){
var inst_26799 = (state_26805[(2)]);
var state_26805__$1 = state_26805;
var statearr_26810_26836 = state_26805__$1;
(statearr_26810_26836[(2)] = inst_26799);

(statearr_26810_26836[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26806 === (6))){
var inst_26790 = (state_26805[(2)]);
var state_26805__$1 = state_26805;
if(cljs.core.truth_(inst_26790)){
var statearr_26811_26837 = state_26805__$1;
(statearr_26811_26837[(1)] = (8));

} else {
var statearr_26812_26838 = state_26805__$1;
(statearr_26812_26838[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26806 === (3))){
var inst_26803 = (state_26805[(2)]);
var state_26805__$1 = state_26805;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26805__$1,inst_26803);
} else {
if((state_val_26806 === (12))){
var state_26805__$1 = state_26805;
var statearr_26813_26839 = state_26805__$1;
(statearr_26813_26839[(2)] = null);

(statearr_26813_26839[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26806 === (2))){
var inst_26782 = (state_26805[(7)]);
var state_26805__$1 = state_26805;
if(cljs.core.truth_(inst_26782)){
var statearr_26814_26840 = state_26805__$1;
(statearr_26814_26840[(1)] = (4));

} else {
var statearr_26815_26841 = state_26805__$1;
(statearr_26815_26841[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26806 === (11))){
var inst_26796 = cljs.core.async.close_BANG_.call(null,ch);
var state_26805__$1 = state_26805;
var statearr_26816_26842 = state_26805__$1;
(statearr_26816_26842[(2)] = inst_26796);

(statearr_26816_26842[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26806 === (9))){
var state_26805__$1 = state_26805;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26817_26843 = state_26805__$1;
(statearr_26817_26843[(1)] = (11));

} else {
var statearr_26818_26844 = state_26805__$1;
(statearr_26818_26844[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26806 === (5))){
var inst_26782 = (state_26805[(7)]);
var state_26805__$1 = state_26805;
var statearr_26819_26845 = state_26805__$1;
(statearr_26819_26845[(2)] = inst_26782);

(statearr_26819_26845[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26806 === (10))){
var inst_26801 = (state_26805[(2)]);
var state_26805__$1 = state_26805;
var statearr_26820_26846 = state_26805__$1;
(statearr_26820_26846[(2)] = inst_26801);

(statearr_26820_26846[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26806 === (8))){
var inst_26782 = (state_26805[(7)]);
var inst_26792 = cljs.core.next.call(null,inst_26782);
var inst_26782__$1 = inst_26792;
var state_26805__$1 = (function (){var statearr_26821 = state_26805;
(statearr_26821[(7)] = inst_26782__$1);

return statearr_26821;
})();
var statearr_26822_26847 = state_26805__$1;
(statearr_26822_26847[(2)] = null);

(statearr_26822_26847[(1)] = (2));


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
});})(c__20279__auto__))
;
return ((function (switch__20214__auto__,c__20279__auto__){
return (function() {
var cljs$core$async$state_machine__20215__auto__ = null;
var cljs$core$async$state_machine__20215__auto____0 = (function (){
var statearr_26826 = [null,null,null,null,null,null,null,null];
(statearr_26826[(0)] = cljs$core$async$state_machine__20215__auto__);

(statearr_26826[(1)] = (1));

return statearr_26826;
});
var cljs$core$async$state_machine__20215__auto____1 = (function (state_26805){
while(true){
var ret_value__20216__auto__ = (function (){try{while(true){
var result__20217__auto__ = switch__20214__auto__.call(null,state_26805);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20217__auto__;
}
break;
}
}catch (e26827){if((e26827 instanceof Object)){
var ex__20218__auto__ = e26827;
var statearr_26828_26848 = state_26805;
(statearr_26828_26848[(5)] = ex__20218__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26805);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26827;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20216__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26849 = state_26805;
state_26805 = G__26849;
continue;
} else {
return ret_value__20216__auto__;
}
break;
}
});
cljs$core$async$state_machine__20215__auto__ = function(state_26805){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20215__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20215__auto____1.call(this,state_26805);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20215__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20215__auto____0;
cljs$core$async$state_machine__20215__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20215__auto____1;
return cljs$core$async$state_machine__20215__auto__;
})()
;})(switch__20214__auto__,c__20279__auto__))
})();
var state__20281__auto__ = (function (){var statearr_26829 = f__20280__auto__.call(null);
(statearr_26829[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20279__auto__);

return statearr_26829;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20281__auto__);
});})(c__20279__auto__))
);

return c__20279__auto__;
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
var x__16973__auto__ = (((_ == null))?null:_);
var m__16974__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__16973__auto__)]);
if(!((m__16974__auto__ == null))){
return m__16974__auto__.call(null,_);
} else {
var m__16974__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__16974__auto____$1 == null))){
return m__16974__auto____$1.call(null,_);
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
var x__16973__auto__ = (((m == null))?null:m);
var m__16974__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__16973__auto__)]);
if(!((m__16974__auto__ == null))){
return m__16974__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__16974__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__16974__auto____$1 == null))){
return m__16974__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__16973__auto__ = (((m == null))?null:m);
var m__16974__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__16973__auto__)]);
if(!((m__16974__auto__ == null))){
return m__16974__auto__.call(null,m,ch);
} else {
var m__16974__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__16974__auto____$1 == null))){
return m__16974__auto____$1.call(null,m,ch);
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
var x__16973__auto__ = (((m == null))?null:m);
var m__16974__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__16973__auto__)]);
if(!((m__16974__auto__ == null))){
return m__16974__auto__.call(null,m);
} else {
var m__16974__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__16974__auto____$1 == null))){
return m__16974__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async27071 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27071 = (function (mult,ch,cs,meta27072){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta27072 = meta27072;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27071.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_27073,meta27072__$1){
var self__ = this;
var _27073__$1 = this;
return (new cljs.core.async.t_cljs$core$async27071(self__.mult,self__.ch,self__.cs,meta27072__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async27071.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_27073){
var self__ = this;
var _27073__$1 = this;
return self__.meta27072;
});})(cs))
;

cljs.core.async.t_cljs$core$async27071.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async27071.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async27071.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async27071.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async27071.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async27071.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async27071.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta27072","meta27072",1308492625,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async27071.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27071.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27071";

cljs.core.async.t_cljs$core$async27071.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__16916__auto__,writer__16917__auto__,opt__16918__auto__){
return cljs.core._write.call(null,writer__16917__auto__,"cljs.core.async/t_cljs$core$async27071");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async27071 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async27071(mult__$1,ch__$1,cs__$1,meta27072){
return (new cljs.core.async.t_cljs$core$async27071(mult__$1,ch__$1,cs__$1,meta27072));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async27071(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__20279__auto___27292 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20279__auto___27292,cs,m,dchan,dctr,done){
return (function (){
var f__20280__auto__ = (function (){var switch__20214__auto__ = ((function (c__20279__auto___27292,cs,m,dchan,dctr,done){
return (function (state_27204){
var state_val_27205 = (state_27204[(1)]);
if((state_val_27205 === (7))){
var inst_27200 = (state_27204[(2)]);
var state_27204__$1 = state_27204;
var statearr_27206_27293 = state_27204__$1;
(statearr_27206_27293[(2)] = inst_27200);

(statearr_27206_27293[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27205 === (20))){
var inst_27105 = (state_27204[(7)]);
var inst_27115 = cljs.core.first.call(null,inst_27105);
var inst_27116 = cljs.core.nth.call(null,inst_27115,(0),null);
var inst_27117 = cljs.core.nth.call(null,inst_27115,(1),null);
var state_27204__$1 = (function (){var statearr_27207 = state_27204;
(statearr_27207[(8)] = inst_27116);

return statearr_27207;
})();
if(cljs.core.truth_(inst_27117)){
var statearr_27208_27294 = state_27204__$1;
(statearr_27208_27294[(1)] = (22));

} else {
var statearr_27209_27295 = state_27204__$1;
(statearr_27209_27295[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27205 === (27))){
var inst_27076 = (state_27204[(9)]);
var inst_27145 = (state_27204[(10)]);
var inst_27147 = (state_27204[(11)]);
var inst_27152 = (state_27204[(12)]);
var inst_27152__$1 = cljs.core._nth.call(null,inst_27145,inst_27147);
var inst_27153 = cljs.core.async.put_BANG_.call(null,inst_27152__$1,inst_27076,done);
var state_27204__$1 = (function (){var statearr_27210 = state_27204;
(statearr_27210[(12)] = inst_27152__$1);

return statearr_27210;
})();
if(cljs.core.truth_(inst_27153)){
var statearr_27211_27296 = state_27204__$1;
(statearr_27211_27296[(1)] = (30));

} else {
var statearr_27212_27297 = state_27204__$1;
(statearr_27212_27297[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27205 === (1))){
var state_27204__$1 = state_27204;
var statearr_27213_27298 = state_27204__$1;
(statearr_27213_27298[(2)] = null);

(statearr_27213_27298[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27205 === (24))){
var inst_27105 = (state_27204[(7)]);
var inst_27122 = (state_27204[(2)]);
var inst_27123 = cljs.core.next.call(null,inst_27105);
var inst_27085 = inst_27123;
var inst_27086 = null;
var inst_27087 = (0);
var inst_27088 = (0);
var state_27204__$1 = (function (){var statearr_27214 = state_27204;
(statearr_27214[(13)] = inst_27087);

(statearr_27214[(14)] = inst_27088);

(statearr_27214[(15)] = inst_27086);

(statearr_27214[(16)] = inst_27122);

(statearr_27214[(17)] = inst_27085);

return statearr_27214;
})();
var statearr_27215_27299 = state_27204__$1;
(statearr_27215_27299[(2)] = null);

(statearr_27215_27299[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27205 === (39))){
var state_27204__$1 = state_27204;
var statearr_27219_27300 = state_27204__$1;
(statearr_27219_27300[(2)] = null);

(statearr_27219_27300[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27205 === (4))){
var inst_27076 = (state_27204[(9)]);
var inst_27076__$1 = (state_27204[(2)]);
var inst_27077 = (inst_27076__$1 == null);
var state_27204__$1 = (function (){var statearr_27220 = state_27204;
(statearr_27220[(9)] = inst_27076__$1);

return statearr_27220;
})();
if(cljs.core.truth_(inst_27077)){
var statearr_27221_27301 = state_27204__$1;
(statearr_27221_27301[(1)] = (5));

} else {
var statearr_27222_27302 = state_27204__$1;
(statearr_27222_27302[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27205 === (15))){
var inst_27087 = (state_27204[(13)]);
var inst_27088 = (state_27204[(14)]);
var inst_27086 = (state_27204[(15)]);
var inst_27085 = (state_27204[(17)]);
var inst_27101 = (state_27204[(2)]);
var inst_27102 = (inst_27088 + (1));
var tmp27216 = inst_27087;
var tmp27217 = inst_27086;
var tmp27218 = inst_27085;
var inst_27085__$1 = tmp27218;
var inst_27086__$1 = tmp27217;
var inst_27087__$1 = tmp27216;
var inst_27088__$1 = inst_27102;
var state_27204__$1 = (function (){var statearr_27223 = state_27204;
(statearr_27223[(13)] = inst_27087__$1);

(statearr_27223[(14)] = inst_27088__$1);

(statearr_27223[(15)] = inst_27086__$1);

(statearr_27223[(17)] = inst_27085__$1);

(statearr_27223[(18)] = inst_27101);

return statearr_27223;
})();
var statearr_27224_27303 = state_27204__$1;
(statearr_27224_27303[(2)] = null);

(statearr_27224_27303[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27205 === (21))){
var inst_27126 = (state_27204[(2)]);
var state_27204__$1 = state_27204;
var statearr_27228_27304 = state_27204__$1;
(statearr_27228_27304[(2)] = inst_27126);

(statearr_27228_27304[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27205 === (31))){
var inst_27152 = (state_27204[(12)]);
var inst_27156 = done.call(null,null);
var inst_27157 = cljs.core.async.untap_STAR_.call(null,m,inst_27152);
var state_27204__$1 = (function (){var statearr_27229 = state_27204;
(statearr_27229[(19)] = inst_27156);

return statearr_27229;
})();
var statearr_27230_27305 = state_27204__$1;
(statearr_27230_27305[(2)] = inst_27157);

(statearr_27230_27305[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27205 === (32))){
var inst_27144 = (state_27204[(20)]);
var inst_27146 = (state_27204[(21)]);
var inst_27145 = (state_27204[(10)]);
var inst_27147 = (state_27204[(11)]);
var inst_27159 = (state_27204[(2)]);
var inst_27160 = (inst_27147 + (1));
var tmp27225 = inst_27144;
var tmp27226 = inst_27146;
var tmp27227 = inst_27145;
var inst_27144__$1 = tmp27225;
var inst_27145__$1 = tmp27227;
var inst_27146__$1 = tmp27226;
var inst_27147__$1 = inst_27160;
var state_27204__$1 = (function (){var statearr_27231 = state_27204;
(statearr_27231[(20)] = inst_27144__$1);

(statearr_27231[(21)] = inst_27146__$1);

(statearr_27231[(10)] = inst_27145__$1);

(statearr_27231[(22)] = inst_27159);

(statearr_27231[(11)] = inst_27147__$1);

return statearr_27231;
})();
var statearr_27232_27306 = state_27204__$1;
(statearr_27232_27306[(2)] = null);

(statearr_27232_27306[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27205 === (40))){
var inst_27172 = (state_27204[(23)]);
var inst_27176 = done.call(null,null);
var inst_27177 = cljs.core.async.untap_STAR_.call(null,m,inst_27172);
var state_27204__$1 = (function (){var statearr_27233 = state_27204;
(statearr_27233[(24)] = inst_27176);

return statearr_27233;
})();
var statearr_27234_27307 = state_27204__$1;
(statearr_27234_27307[(2)] = inst_27177);

(statearr_27234_27307[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27205 === (33))){
var inst_27163 = (state_27204[(25)]);
var inst_27165 = cljs.core.chunked_seq_QMARK_.call(null,inst_27163);
var state_27204__$1 = state_27204;
if(inst_27165){
var statearr_27235_27308 = state_27204__$1;
(statearr_27235_27308[(1)] = (36));

} else {
var statearr_27236_27309 = state_27204__$1;
(statearr_27236_27309[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27205 === (13))){
var inst_27095 = (state_27204[(26)]);
var inst_27098 = cljs.core.async.close_BANG_.call(null,inst_27095);
var state_27204__$1 = state_27204;
var statearr_27237_27310 = state_27204__$1;
(statearr_27237_27310[(2)] = inst_27098);

(statearr_27237_27310[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27205 === (22))){
var inst_27116 = (state_27204[(8)]);
var inst_27119 = cljs.core.async.close_BANG_.call(null,inst_27116);
var state_27204__$1 = state_27204;
var statearr_27238_27311 = state_27204__$1;
(statearr_27238_27311[(2)] = inst_27119);

(statearr_27238_27311[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27205 === (36))){
var inst_27163 = (state_27204[(25)]);
var inst_27167 = cljs.core.chunk_first.call(null,inst_27163);
var inst_27168 = cljs.core.chunk_rest.call(null,inst_27163);
var inst_27169 = cljs.core.count.call(null,inst_27167);
var inst_27144 = inst_27168;
var inst_27145 = inst_27167;
var inst_27146 = inst_27169;
var inst_27147 = (0);
var state_27204__$1 = (function (){var statearr_27239 = state_27204;
(statearr_27239[(20)] = inst_27144);

(statearr_27239[(21)] = inst_27146);

(statearr_27239[(10)] = inst_27145);

(statearr_27239[(11)] = inst_27147);

return statearr_27239;
})();
var statearr_27240_27312 = state_27204__$1;
(statearr_27240_27312[(2)] = null);

(statearr_27240_27312[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27205 === (41))){
var inst_27163 = (state_27204[(25)]);
var inst_27179 = (state_27204[(2)]);
var inst_27180 = cljs.core.next.call(null,inst_27163);
var inst_27144 = inst_27180;
var inst_27145 = null;
var inst_27146 = (0);
var inst_27147 = (0);
var state_27204__$1 = (function (){var statearr_27241 = state_27204;
(statearr_27241[(27)] = inst_27179);

(statearr_27241[(20)] = inst_27144);

(statearr_27241[(21)] = inst_27146);

(statearr_27241[(10)] = inst_27145);

(statearr_27241[(11)] = inst_27147);

return statearr_27241;
})();
var statearr_27242_27313 = state_27204__$1;
(statearr_27242_27313[(2)] = null);

(statearr_27242_27313[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27205 === (43))){
var state_27204__$1 = state_27204;
var statearr_27243_27314 = state_27204__$1;
(statearr_27243_27314[(2)] = null);

(statearr_27243_27314[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27205 === (29))){
var inst_27188 = (state_27204[(2)]);
var state_27204__$1 = state_27204;
var statearr_27244_27315 = state_27204__$1;
(statearr_27244_27315[(2)] = inst_27188);

(statearr_27244_27315[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27205 === (44))){
var inst_27197 = (state_27204[(2)]);
var state_27204__$1 = (function (){var statearr_27245 = state_27204;
(statearr_27245[(28)] = inst_27197);

return statearr_27245;
})();
var statearr_27246_27316 = state_27204__$1;
(statearr_27246_27316[(2)] = null);

(statearr_27246_27316[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27205 === (6))){
var inst_27136 = (state_27204[(29)]);
var inst_27135 = cljs.core.deref.call(null,cs);
var inst_27136__$1 = cljs.core.keys.call(null,inst_27135);
var inst_27137 = cljs.core.count.call(null,inst_27136__$1);
var inst_27138 = cljs.core.reset_BANG_.call(null,dctr,inst_27137);
var inst_27143 = cljs.core.seq.call(null,inst_27136__$1);
var inst_27144 = inst_27143;
var inst_27145 = null;
var inst_27146 = (0);
var inst_27147 = (0);
var state_27204__$1 = (function (){var statearr_27247 = state_27204;
(statearr_27247[(29)] = inst_27136__$1);

(statearr_27247[(20)] = inst_27144);

(statearr_27247[(21)] = inst_27146);

(statearr_27247[(10)] = inst_27145);

(statearr_27247[(11)] = inst_27147);

(statearr_27247[(30)] = inst_27138);

return statearr_27247;
})();
var statearr_27248_27317 = state_27204__$1;
(statearr_27248_27317[(2)] = null);

(statearr_27248_27317[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27205 === (28))){
var inst_27144 = (state_27204[(20)]);
var inst_27163 = (state_27204[(25)]);
var inst_27163__$1 = cljs.core.seq.call(null,inst_27144);
var state_27204__$1 = (function (){var statearr_27249 = state_27204;
(statearr_27249[(25)] = inst_27163__$1);

return statearr_27249;
})();
if(inst_27163__$1){
var statearr_27250_27318 = state_27204__$1;
(statearr_27250_27318[(1)] = (33));

} else {
var statearr_27251_27319 = state_27204__$1;
(statearr_27251_27319[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27205 === (25))){
var inst_27146 = (state_27204[(21)]);
var inst_27147 = (state_27204[(11)]);
var inst_27149 = (inst_27147 < inst_27146);
var inst_27150 = inst_27149;
var state_27204__$1 = state_27204;
if(cljs.core.truth_(inst_27150)){
var statearr_27252_27320 = state_27204__$1;
(statearr_27252_27320[(1)] = (27));

} else {
var statearr_27253_27321 = state_27204__$1;
(statearr_27253_27321[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27205 === (34))){
var state_27204__$1 = state_27204;
var statearr_27254_27322 = state_27204__$1;
(statearr_27254_27322[(2)] = null);

(statearr_27254_27322[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27205 === (17))){
var state_27204__$1 = state_27204;
var statearr_27255_27323 = state_27204__$1;
(statearr_27255_27323[(2)] = null);

(statearr_27255_27323[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27205 === (3))){
var inst_27202 = (state_27204[(2)]);
var state_27204__$1 = state_27204;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27204__$1,inst_27202);
} else {
if((state_val_27205 === (12))){
var inst_27131 = (state_27204[(2)]);
var state_27204__$1 = state_27204;
var statearr_27256_27324 = state_27204__$1;
(statearr_27256_27324[(2)] = inst_27131);

(statearr_27256_27324[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27205 === (2))){
var state_27204__$1 = state_27204;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27204__$1,(4),ch);
} else {
if((state_val_27205 === (23))){
var state_27204__$1 = state_27204;
var statearr_27257_27325 = state_27204__$1;
(statearr_27257_27325[(2)] = null);

(statearr_27257_27325[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27205 === (35))){
var inst_27186 = (state_27204[(2)]);
var state_27204__$1 = state_27204;
var statearr_27258_27326 = state_27204__$1;
(statearr_27258_27326[(2)] = inst_27186);

(statearr_27258_27326[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27205 === (19))){
var inst_27105 = (state_27204[(7)]);
var inst_27109 = cljs.core.chunk_first.call(null,inst_27105);
var inst_27110 = cljs.core.chunk_rest.call(null,inst_27105);
var inst_27111 = cljs.core.count.call(null,inst_27109);
var inst_27085 = inst_27110;
var inst_27086 = inst_27109;
var inst_27087 = inst_27111;
var inst_27088 = (0);
var state_27204__$1 = (function (){var statearr_27259 = state_27204;
(statearr_27259[(13)] = inst_27087);

(statearr_27259[(14)] = inst_27088);

(statearr_27259[(15)] = inst_27086);

(statearr_27259[(17)] = inst_27085);

return statearr_27259;
})();
var statearr_27260_27327 = state_27204__$1;
(statearr_27260_27327[(2)] = null);

(statearr_27260_27327[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27205 === (11))){
var inst_27105 = (state_27204[(7)]);
var inst_27085 = (state_27204[(17)]);
var inst_27105__$1 = cljs.core.seq.call(null,inst_27085);
var state_27204__$1 = (function (){var statearr_27261 = state_27204;
(statearr_27261[(7)] = inst_27105__$1);

return statearr_27261;
})();
if(inst_27105__$1){
var statearr_27262_27328 = state_27204__$1;
(statearr_27262_27328[(1)] = (16));

} else {
var statearr_27263_27329 = state_27204__$1;
(statearr_27263_27329[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27205 === (9))){
var inst_27133 = (state_27204[(2)]);
var state_27204__$1 = state_27204;
var statearr_27264_27330 = state_27204__$1;
(statearr_27264_27330[(2)] = inst_27133);

(statearr_27264_27330[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27205 === (5))){
var inst_27083 = cljs.core.deref.call(null,cs);
var inst_27084 = cljs.core.seq.call(null,inst_27083);
var inst_27085 = inst_27084;
var inst_27086 = null;
var inst_27087 = (0);
var inst_27088 = (0);
var state_27204__$1 = (function (){var statearr_27265 = state_27204;
(statearr_27265[(13)] = inst_27087);

(statearr_27265[(14)] = inst_27088);

(statearr_27265[(15)] = inst_27086);

(statearr_27265[(17)] = inst_27085);

return statearr_27265;
})();
var statearr_27266_27331 = state_27204__$1;
(statearr_27266_27331[(2)] = null);

(statearr_27266_27331[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27205 === (14))){
var state_27204__$1 = state_27204;
var statearr_27267_27332 = state_27204__$1;
(statearr_27267_27332[(2)] = null);

(statearr_27267_27332[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27205 === (45))){
var inst_27194 = (state_27204[(2)]);
var state_27204__$1 = state_27204;
var statearr_27268_27333 = state_27204__$1;
(statearr_27268_27333[(2)] = inst_27194);

(statearr_27268_27333[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27205 === (26))){
var inst_27136 = (state_27204[(29)]);
var inst_27190 = (state_27204[(2)]);
var inst_27191 = cljs.core.seq.call(null,inst_27136);
var state_27204__$1 = (function (){var statearr_27269 = state_27204;
(statearr_27269[(31)] = inst_27190);

return statearr_27269;
})();
if(inst_27191){
var statearr_27270_27334 = state_27204__$1;
(statearr_27270_27334[(1)] = (42));

} else {
var statearr_27271_27335 = state_27204__$1;
(statearr_27271_27335[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27205 === (16))){
var inst_27105 = (state_27204[(7)]);
var inst_27107 = cljs.core.chunked_seq_QMARK_.call(null,inst_27105);
var state_27204__$1 = state_27204;
if(inst_27107){
var statearr_27272_27336 = state_27204__$1;
(statearr_27272_27336[(1)] = (19));

} else {
var statearr_27273_27337 = state_27204__$1;
(statearr_27273_27337[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27205 === (38))){
var inst_27183 = (state_27204[(2)]);
var state_27204__$1 = state_27204;
var statearr_27274_27338 = state_27204__$1;
(statearr_27274_27338[(2)] = inst_27183);

(statearr_27274_27338[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27205 === (30))){
var state_27204__$1 = state_27204;
var statearr_27275_27339 = state_27204__$1;
(statearr_27275_27339[(2)] = null);

(statearr_27275_27339[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27205 === (10))){
var inst_27088 = (state_27204[(14)]);
var inst_27086 = (state_27204[(15)]);
var inst_27094 = cljs.core._nth.call(null,inst_27086,inst_27088);
var inst_27095 = cljs.core.nth.call(null,inst_27094,(0),null);
var inst_27096 = cljs.core.nth.call(null,inst_27094,(1),null);
var state_27204__$1 = (function (){var statearr_27276 = state_27204;
(statearr_27276[(26)] = inst_27095);

return statearr_27276;
})();
if(cljs.core.truth_(inst_27096)){
var statearr_27277_27340 = state_27204__$1;
(statearr_27277_27340[(1)] = (13));

} else {
var statearr_27278_27341 = state_27204__$1;
(statearr_27278_27341[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27205 === (18))){
var inst_27129 = (state_27204[(2)]);
var state_27204__$1 = state_27204;
var statearr_27279_27342 = state_27204__$1;
(statearr_27279_27342[(2)] = inst_27129);

(statearr_27279_27342[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27205 === (42))){
var state_27204__$1 = state_27204;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27204__$1,(45),dchan);
} else {
if((state_val_27205 === (37))){
var inst_27076 = (state_27204[(9)]);
var inst_27163 = (state_27204[(25)]);
var inst_27172 = (state_27204[(23)]);
var inst_27172__$1 = cljs.core.first.call(null,inst_27163);
var inst_27173 = cljs.core.async.put_BANG_.call(null,inst_27172__$1,inst_27076,done);
var state_27204__$1 = (function (){var statearr_27280 = state_27204;
(statearr_27280[(23)] = inst_27172__$1);

return statearr_27280;
})();
if(cljs.core.truth_(inst_27173)){
var statearr_27281_27343 = state_27204__$1;
(statearr_27281_27343[(1)] = (39));

} else {
var statearr_27282_27344 = state_27204__$1;
(statearr_27282_27344[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27205 === (8))){
var inst_27087 = (state_27204[(13)]);
var inst_27088 = (state_27204[(14)]);
var inst_27090 = (inst_27088 < inst_27087);
var inst_27091 = inst_27090;
var state_27204__$1 = state_27204;
if(cljs.core.truth_(inst_27091)){
var statearr_27283_27345 = state_27204__$1;
(statearr_27283_27345[(1)] = (10));

} else {
var statearr_27284_27346 = state_27204__$1;
(statearr_27284_27346[(1)] = (11));

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
});})(c__20279__auto___27292,cs,m,dchan,dctr,done))
;
return ((function (switch__20214__auto__,c__20279__auto___27292,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__20215__auto__ = null;
var cljs$core$async$mult_$_state_machine__20215__auto____0 = (function (){
var statearr_27288 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27288[(0)] = cljs$core$async$mult_$_state_machine__20215__auto__);

(statearr_27288[(1)] = (1));

return statearr_27288;
});
var cljs$core$async$mult_$_state_machine__20215__auto____1 = (function (state_27204){
while(true){
var ret_value__20216__auto__ = (function (){try{while(true){
var result__20217__auto__ = switch__20214__auto__.call(null,state_27204);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20217__auto__;
}
break;
}
}catch (e27289){if((e27289 instanceof Object)){
var ex__20218__auto__ = e27289;
var statearr_27290_27347 = state_27204;
(statearr_27290_27347[(5)] = ex__20218__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27204);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27289;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20216__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27348 = state_27204;
state_27204 = G__27348;
continue;
} else {
return ret_value__20216__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__20215__auto__ = function(state_27204){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__20215__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__20215__auto____1.call(this,state_27204);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__20215__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__20215__auto____0;
cljs$core$async$mult_$_state_machine__20215__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__20215__auto____1;
return cljs$core$async$mult_$_state_machine__20215__auto__;
})()
;})(switch__20214__auto__,c__20279__auto___27292,cs,m,dchan,dctr,done))
})();
var state__20281__auto__ = (function (){var statearr_27291 = f__20280__auto__.call(null);
(statearr_27291[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20279__auto___27292);

return statearr_27291;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20281__auto__);
});})(c__20279__auto___27292,cs,m,dchan,dctr,done))
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
var args27349 = [];
var len__17376__auto___27352 = arguments.length;
var i__17377__auto___27353 = (0);
while(true){
if((i__17377__auto___27353 < len__17376__auto___27352)){
args27349.push((arguments[i__17377__auto___27353]));

var G__27354 = (i__17377__auto___27353 + (1));
i__17377__auto___27353 = G__27354;
continue;
} else {
}
break;
}

var G__27351 = args27349.length;
switch (G__27351) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27349.length)].join('')));

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
var x__16973__auto__ = (((m == null))?null:m);
var m__16974__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__16973__auto__)]);
if(!((m__16974__auto__ == null))){
return m__16974__auto__.call(null,m,ch);
} else {
var m__16974__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__16974__auto____$1 == null))){
return m__16974__auto____$1.call(null,m,ch);
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
var x__16973__auto__ = (((m == null))?null:m);
var m__16974__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__16973__auto__)]);
if(!((m__16974__auto__ == null))){
return m__16974__auto__.call(null,m,ch);
} else {
var m__16974__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__16974__auto____$1 == null))){
return m__16974__auto____$1.call(null,m,ch);
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
var x__16973__auto__ = (((m == null))?null:m);
var m__16974__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__16973__auto__)]);
if(!((m__16974__auto__ == null))){
return m__16974__auto__.call(null,m);
} else {
var m__16974__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__16974__auto____$1 == null))){
return m__16974__auto____$1.call(null,m);
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
var x__16973__auto__ = (((m == null))?null:m);
var m__16974__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__16973__auto__)]);
if(!((m__16974__auto__ == null))){
return m__16974__auto__.call(null,m,state_map);
} else {
var m__16974__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__16974__auto____$1 == null))){
return m__16974__auto____$1.call(null,m,state_map);
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
var x__16973__auto__ = (((m == null))?null:m);
var m__16974__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__16973__auto__)]);
if(!((m__16974__auto__ == null))){
return m__16974__auto__.call(null,m,mode);
} else {
var m__16974__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__16974__auto____$1 == null))){
return m__16974__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__17383__auto__ = [];
var len__17376__auto___27366 = arguments.length;
var i__17377__auto___27367 = (0);
while(true){
if((i__17377__auto___27367 < len__17376__auto___27366)){
args__17383__auto__.push((arguments[i__17377__auto___27367]));

var G__27368 = (i__17377__auto___27367 + (1));
i__17377__auto___27367 = G__27368;
continue;
} else {
}
break;
}

var argseq__17384__auto__ = ((((3) < args__17383__auto__.length))?(new cljs.core.IndexedSeq(args__17383__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17384__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__27360){
var map__27361 = p__27360;
var map__27361__$1 = ((((!((map__27361 == null)))?((((map__27361.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27361.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27361):map__27361);
var opts = map__27361__$1;
var statearr_27363_27369 = state;
(statearr_27363_27369[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__27361,map__27361__$1,opts){
return (function (val){
var statearr_27364_27370 = state;
(statearr_27364_27370[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__27361,map__27361__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_27365_27371 = state;
(statearr_27365_27371[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq27356){
var G__27357 = cljs.core.first.call(null,seq27356);
var seq27356__$1 = cljs.core.next.call(null,seq27356);
var G__27358 = cljs.core.first.call(null,seq27356__$1);
var seq27356__$2 = cljs.core.next.call(null,seq27356__$1);
var G__27359 = cljs.core.first.call(null,seq27356__$2);
var seq27356__$3 = cljs.core.next.call(null,seq27356__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__27357,G__27358,G__27359,seq27356__$3);
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
if(typeof cljs.core.async.t_cljs$core$async27535 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27535 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta27536){
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
this.meta27536 = meta27536;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27535.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_27537,meta27536__$1){
var self__ = this;
var _27537__$1 = this;
return (new cljs.core.async.t_cljs$core$async27535(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta27536__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27535.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_27537){
var self__ = this;
var _27537__$1 = this;
return self__.meta27536;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27535.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async27535.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27535.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async27535.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27535.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27535.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27535.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27535.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async27535.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta27536","meta27536",1353168040,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27535.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27535.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27535";

cljs.core.async.t_cljs$core$async27535.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__16916__auto__,writer__16917__auto__,opt__16918__auto__){
return cljs.core._write.call(null,writer__16917__auto__,"cljs.core.async/t_cljs$core$async27535");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async27535 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async27535(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta27536){
return (new cljs.core.async.t_cljs$core$async27535(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta27536));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async27535(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__20279__auto___27698 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20279__auto___27698,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__20280__auto__ = (function (){var switch__20214__auto__ = ((function (c__20279__auto___27698,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_27635){
var state_val_27636 = (state_27635[(1)]);
if((state_val_27636 === (7))){
var inst_27553 = (state_27635[(2)]);
var state_27635__$1 = state_27635;
var statearr_27637_27699 = state_27635__$1;
(statearr_27637_27699[(2)] = inst_27553);

(statearr_27637_27699[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27636 === (20))){
var inst_27565 = (state_27635[(7)]);
var state_27635__$1 = state_27635;
var statearr_27638_27700 = state_27635__$1;
(statearr_27638_27700[(2)] = inst_27565);

(statearr_27638_27700[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27636 === (27))){
var state_27635__$1 = state_27635;
var statearr_27639_27701 = state_27635__$1;
(statearr_27639_27701[(2)] = null);

(statearr_27639_27701[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27636 === (1))){
var inst_27541 = (state_27635[(8)]);
var inst_27541__$1 = calc_state.call(null);
var inst_27543 = (inst_27541__$1 == null);
var inst_27544 = cljs.core.not.call(null,inst_27543);
var state_27635__$1 = (function (){var statearr_27640 = state_27635;
(statearr_27640[(8)] = inst_27541__$1);

return statearr_27640;
})();
if(inst_27544){
var statearr_27641_27702 = state_27635__$1;
(statearr_27641_27702[(1)] = (2));

} else {
var statearr_27642_27703 = state_27635__$1;
(statearr_27642_27703[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27636 === (24))){
var inst_27588 = (state_27635[(9)]);
var inst_27609 = (state_27635[(10)]);
var inst_27595 = (state_27635[(11)]);
var inst_27609__$1 = inst_27588.call(null,inst_27595);
var state_27635__$1 = (function (){var statearr_27643 = state_27635;
(statearr_27643[(10)] = inst_27609__$1);

return statearr_27643;
})();
if(cljs.core.truth_(inst_27609__$1)){
var statearr_27644_27704 = state_27635__$1;
(statearr_27644_27704[(1)] = (29));

} else {
var statearr_27645_27705 = state_27635__$1;
(statearr_27645_27705[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27636 === (4))){
var inst_27556 = (state_27635[(2)]);
var state_27635__$1 = state_27635;
if(cljs.core.truth_(inst_27556)){
var statearr_27646_27706 = state_27635__$1;
(statearr_27646_27706[(1)] = (8));

} else {
var statearr_27647_27707 = state_27635__$1;
(statearr_27647_27707[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27636 === (15))){
var inst_27582 = (state_27635[(2)]);
var state_27635__$1 = state_27635;
if(cljs.core.truth_(inst_27582)){
var statearr_27648_27708 = state_27635__$1;
(statearr_27648_27708[(1)] = (19));

} else {
var statearr_27649_27709 = state_27635__$1;
(statearr_27649_27709[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27636 === (21))){
var inst_27587 = (state_27635[(12)]);
var inst_27587__$1 = (state_27635[(2)]);
var inst_27588 = cljs.core.get.call(null,inst_27587__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_27589 = cljs.core.get.call(null,inst_27587__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_27590 = cljs.core.get.call(null,inst_27587__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_27635__$1 = (function (){var statearr_27650 = state_27635;
(statearr_27650[(12)] = inst_27587__$1);

(statearr_27650[(9)] = inst_27588);

(statearr_27650[(13)] = inst_27589);

return statearr_27650;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_27635__$1,(22),inst_27590);
} else {
if((state_val_27636 === (31))){
var inst_27617 = (state_27635[(2)]);
var state_27635__$1 = state_27635;
if(cljs.core.truth_(inst_27617)){
var statearr_27651_27710 = state_27635__$1;
(statearr_27651_27710[(1)] = (32));

} else {
var statearr_27652_27711 = state_27635__$1;
(statearr_27652_27711[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27636 === (32))){
var inst_27594 = (state_27635[(14)]);
var state_27635__$1 = state_27635;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27635__$1,(35),out,inst_27594);
} else {
if((state_val_27636 === (33))){
var inst_27587 = (state_27635[(12)]);
var inst_27565 = inst_27587;
var state_27635__$1 = (function (){var statearr_27653 = state_27635;
(statearr_27653[(7)] = inst_27565);

return statearr_27653;
})();
var statearr_27654_27712 = state_27635__$1;
(statearr_27654_27712[(2)] = null);

(statearr_27654_27712[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27636 === (13))){
var inst_27565 = (state_27635[(7)]);
var inst_27572 = inst_27565.cljs$lang$protocol_mask$partition0$;
var inst_27573 = (inst_27572 & (64));
var inst_27574 = inst_27565.cljs$core$ISeq$;
var inst_27575 = (inst_27573) || (inst_27574);
var state_27635__$1 = state_27635;
if(cljs.core.truth_(inst_27575)){
var statearr_27655_27713 = state_27635__$1;
(statearr_27655_27713[(1)] = (16));

} else {
var statearr_27656_27714 = state_27635__$1;
(statearr_27656_27714[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27636 === (22))){
var inst_27594 = (state_27635[(14)]);
var inst_27595 = (state_27635[(11)]);
var inst_27593 = (state_27635[(2)]);
var inst_27594__$1 = cljs.core.nth.call(null,inst_27593,(0),null);
var inst_27595__$1 = cljs.core.nth.call(null,inst_27593,(1),null);
var inst_27596 = (inst_27594__$1 == null);
var inst_27597 = cljs.core._EQ_.call(null,inst_27595__$1,change);
var inst_27598 = (inst_27596) || (inst_27597);
var state_27635__$1 = (function (){var statearr_27657 = state_27635;
(statearr_27657[(14)] = inst_27594__$1);

(statearr_27657[(11)] = inst_27595__$1);

return statearr_27657;
})();
if(cljs.core.truth_(inst_27598)){
var statearr_27658_27715 = state_27635__$1;
(statearr_27658_27715[(1)] = (23));

} else {
var statearr_27659_27716 = state_27635__$1;
(statearr_27659_27716[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27636 === (36))){
var inst_27587 = (state_27635[(12)]);
var inst_27565 = inst_27587;
var state_27635__$1 = (function (){var statearr_27660 = state_27635;
(statearr_27660[(7)] = inst_27565);

return statearr_27660;
})();
var statearr_27661_27717 = state_27635__$1;
(statearr_27661_27717[(2)] = null);

(statearr_27661_27717[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27636 === (29))){
var inst_27609 = (state_27635[(10)]);
var state_27635__$1 = state_27635;
var statearr_27662_27718 = state_27635__$1;
(statearr_27662_27718[(2)] = inst_27609);

(statearr_27662_27718[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27636 === (6))){
var state_27635__$1 = state_27635;
var statearr_27663_27719 = state_27635__$1;
(statearr_27663_27719[(2)] = false);

(statearr_27663_27719[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27636 === (28))){
var inst_27605 = (state_27635[(2)]);
var inst_27606 = calc_state.call(null);
var inst_27565 = inst_27606;
var state_27635__$1 = (function (){var statearr_27664 = state_27635;
(statearr_27664[(15)] = inst_27605);

(statearr_27664[(7)] = inst_27565);

return statearr_27664;
})();
var statearr_27665_27720 = state_27635__$1;
(statearr_27665_27720[(2)] = null);

(statearr_27665_27720[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27636 === (25))){
var inst_27631 = (state_27635[(2)]);
var state_27635__$1 = state_27635;
var statearr_27666_27721 = state_27635__$1;
(statearr_27666_27721[(2)] = inst_27631);

(statearr_27666_27721[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27636 === (34))){
var inst_27629 = (state_27635[(2)]);
var state_27635__$1 = state_27635;
var statearr_27667_27722 = state_27635__$1;
(statearr_27667_27722[(2)] = inst_27629);

(statearr_27667_27722[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27636 === (17))){
var state_27635__$1 = state_27635;
var statearr_27668_27723 = state_27635__$1;
(statearr_27668_27723[(2)] = false);

(statearr_27668_27723[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27636 === (3))){
var state_27635__$1 = state_27635;
var statearr_27669_27724 = state_27635__$1;
(statearr_27669_27724[(2)] = false);

(statearr_27669_27724[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27636 === (12))){
var inst_27633 = (state_27635[(2)]);
var state_27635__$1 = state_27635;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27635__$1,inst_27633);
} else {
if((state_val_27636 === (2))){
var inst_27541 = (state_27635[(8)]);
var inst_27546 = inst_27541.cljs$lang$protocol_mask$partition0$;
var inst_27547 = (inst_27546 & (64));
var inst_27548 = inst_27541.cljs$core$ISeq$;
var inst_27549 = (inst_27547) || (inst_27548);
var state_27635__$1 = state_27635;
if(cljs.core.truth_(inst_27549)){
var statearr_27670_27725 = state_27635__$1;
(statearr_27670_27725[(1)] = (5));

} else {
var statearr_27671_27726 = state_27635__$1;
(statearr_27671_27726[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27636 === (23))){
var inst_27594 = (state_27635[(14)]);
var inst_27600 = (inst_27594 == null);
var state_27635__$1 = state_27635;
if(cljs.core.truth_(inst_27600)){
var statearr_27672_27727 = state_27635__$1;
(statearr_27672_27727[(1)] = (26));

} else {
var statearr_27673_27728 = state_27635__$1;
(statearr_27673_27728[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27636 === (35))){
var inst_27620 = (state_27635[(2)]);
var state_27635__$1 = state_27635;
if(cljs.core.truth_(inst_27620)){
var statearr_27674_27729 = state_27635__$1;
(statearr_27674_27729[(1)] = (36));

} else {
var statearr_27675_27730 = state_27635__$1;
(statearr_27675_27730[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27636 === (19))){
var inst_27565 = (state_27635[(7)]);
var inst_27584 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27565);
var state_27635__$1 = state_27635;
var statearr_27676_27731 = state_27635__$1;
(statearr_27676_27731[(2)] = inst_27584);

(statearr_27676_27731[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27636 === (11))){
var inst_27565 = (state_27635[(7)]);
var inst_27569 = (inst_27565 == null);
var inst_27570 = cljs.core.not.call(null,inst_27569);
var state_27635__$1 = state_27635;
if(inst_27570){
var statearr_27677_27732 = state_27635__$1;
(statearr_27677_27732[(1)] = (13));

} else {
var statearr_27678_27733 = state_27635__$1;
(statearr_27678_27733[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27636 === (9))){
var inst_27541 = (state_27635[(8)]);
var state_27635__$1 = state_27635;
var statearr_27679_27734 = state_27635__$1;
(statearr_27679_27734[(2)] = inst_27541);

(statearr_27679_27734[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27636 === (5))){
var state_27635__$1 = state_27635;
var statearr_27680_27735 = state_27635__$1;
(statearr_27680_27735[(2)] = true);

(statearr_27680_27735[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27636 === (14))){
var state_27635__$1 = state_27635;
var statearr_27681_27736 = state_27635__$1;
(statearr_27681_27736[(2)] = false);

(statearr_27681_27736[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27636 === (26))){
var inst_27595 = (state_27635[(11)]);
var inst_27602 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_27595);
var state_27635__$1 = state_27635;
var statearr_27682_27737 = state_27635__$1;
(statearr_27682_27737[(2)] = inst_27602);

(statearr_27682_27737[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27636 === (16))){
var state_27635__$1 = state_27635;
var statearr_27683_27738 = state_27635__$1;
(statearr_27683_27738[(2)] = true);

(statearr_27683_27738[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27636 === (38))){
var inst_27625 = (state_27635[(2)]);
var state_27635__$1 = state_27635;
var statearr_27684_27739 = state_27635__$1;
(statearr_27684_27739[(2)] = inst_27625);

(statearr_27684_27739[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27636 === (30))){
var inst_27588 = (state_27635[(9)]);
var inst_27589 = (state_27635[(13)]);
var inst_27595 = (state_27635[(11)]);
var inst_27612 = cljs.core.empty_QMARK_.call(null,inst_27588);
var inst_27613 = inst_27589.call(null,inst_27595);
var inst_27614 = cljs.core.not.call(null,inst_27613);
var inst_27615 = (inst_27612) && (inst_27614);
var state_27635__$1 = state_27635;
var statearr_27685_27740 = state_27635__$1;
(statearr_27685_27740[(2)] = inst_27615);

(statearr_27685_27740[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27636 === (10))){
var inst_27541 = (state_27635[(8)]);
var inst_27561 = (state_27635[(2)]);
var inst_27562 = cljs.core.get.call(null,inst_27561,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_27563 = cljs.core.get.call(null,inst_27561,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_27564 = cljs.core.get.call(null,inst_27561,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_27565 = inst_27541;
var state_27635__$1 = (function (){var statearr_27686 = state_27635;
(statearr_27686[(16)] = inst_27563);

(statearr_27686[(17)] = inst_27564);

(statearr_27686[(7)] = inst_27565);

(statearr_27686[(18)] = inst_27562);

return statearr_27686;
})();
var statearr_27687_27741 = state_27635__$1;
(statearr_27687_27741[(2)] = null);

(statearr_27687_27741[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27636 === (18))){
var inst_27579 = (state_27635[(2)]);
var state_27635__$1 = state_27635;
var statearr_27688_27742 = state_27635__$1;
(statearr_27688_27742[(2)] = inst_27579);

(statearr_27688_27742[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27636 === (37))){
var state_27635__$1 = state_27635;
var statearr_27689_27743 = state_27635__$1;
(statearr_27689_27743[(2)] = null);

(statearr_27689_27743[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27636 === (8))){
var inst_27541 = (state_27635[(8)]);
var inst_27558 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27541);
var state_27635__$1 = state_27635;
var statearr_27690_27744 = state_27635__$1;
(statearr_27690_27744[(2)] = inst_27558);

(statearr_27690_27744[(1)] = (10));


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
});})(c__20279__auto___27698,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__20214__auto__,c__20279__auto___27698,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__20215__auto__ = null;
var cljs$core$async$mix_$_state_machine__20215__auto____0 = (function (){
var statearr_27694 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27694[(0)] = cljs$core$async$mix_$_state_machine__20215__auto__);

(statearr_27694[(1)] = (1));

return statearr_27694;
});
var cljs$core$async$mix_$_state_machine__20215__auto____1 = (function (state_27635){
while(true){
var ret_value__20216__auto__ = (function (){try{while(true){
var result__20217__auto__ = switch__20214__auto__.call(null,state_27635);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20217__auto__;
}
break;
}
}catch (e27695){if((e27695 instanceof Object)){
var ex__20218__auto__ = e27695;
var statearr_27696_27745 = state_27635;
(statearr_27696_27745[(5)] = ex__20218__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27635);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27695;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20216__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27746 = state_27635;
state_27635 = G__27746;
continue;
} else {
return ret_value__20216__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__20215__auto__ = function(state_27635){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__20215__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__20215__auto____1.call(this,state_27635);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__20215__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__20215__auto____0;
cljs$core$async$mix_$_state_machine__20215__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__20215__auto____1;
return cljs$core$async$mix_$_state_machine__20215__auto__;
})()
;})(switch__20214__auto__,c__20279__auto___27698,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__20281__auto__ = (function (){var statearr_27697 = f__20280__auto__.call(null);
(statearr_27697[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20279__auto___27698);

return statearr_27697;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20281__auto__);
});})(c__20279__auto___27698,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__16973__auto__ = (((p == null))?null:p);
var m__16974__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__16973__auto__)]);
if(!((m__16974__auto__ == null))){
return m__16974__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__16974__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__16974__auto____$1 == null))){
return m__16974__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__16973__auto__ = (((p == null))?null:p);
var m__16974__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__16973__auto__)]);
if(!((m__16974__auto__ == null))){
return m__16974__auto__.call(null,p,v,ch);
} else {
var m__16974__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__16974__auto____$1 == null))){
return m__16974__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args27747 = [];
var len__17376__auto___27750 = arguments.length;
var i__17377__auto___27751 = (0);
while(true){
if((i__17377__auto___27751 < len__17376__auto___27750)){
args27747.push((arguments[i__17377__auto___27751]));

var G__27752 = (i__17377__auto___27751 + (1));
i__17377__auto___27751 = G__27752;
continue;
} else {
}
break;
}

var G__27749 = args27747.length;
switch (G__27749) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27747.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__16973__auto__ = (((p == null))?null:p);
var m__16974__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__16973__auto__)]);
if(!((m__16974__auto__ == null))){
return m__16974__auto__.call(null,p);
} else {
var m__16974__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__16974__auto____$1 == null))){
return m__16974__auto____$1.call(null,p);
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
var x__16973__auto__ = (((p == null))?null:p);
var m__16974__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__16973__auto__)]);
if(!((m__16974__auto__ == null))){
return m__16974__auto__.call(null,p,v);
} else {
var m__16974__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__16974__auto____$1 == null))){
return m__16974__auto____$1.call(null,p,v);
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
var args27755 = [];
var len__17376__auto___27880 = arguments.length;
var i__17377__auto___27881 = (0);
while(true){
if((i__17377__auto___27881 < len__17376__auto___27880)){
args27755.push((arguments[i__17377__auto___27881]));

var G__27882 = (i__17377__auto___27881 + (1));
i__17377__auto___27881 = G__27882;
continue;
} else {
}
break;
}

var G__27757 = args27755.length;
switch (G__27757) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27755.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__16318__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__16318__auto__)){
return or__16318__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__16318__auto__,mults){
return (function (p1__27754_SHARP_){
if(cljs.core.truth_(p1__27754_SHARP_.call(null,topic))){
return p1__27754_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__27754_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__16318__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async27758 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27758 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta27759){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta27759 = meta27759;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27758.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_27760,meta27759__$1){
var self__ = this;
var _27760__$1 = this;
return (new cljs.core.async.t_cljs$core$async27758(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta27759__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27758.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_27760){
var self__ = this;
var _27760__$1 = this;
return self__.meta27759;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27758.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async27758.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27758.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async27758.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27758.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27758.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27758.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27758.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta27759","meta27759",-804264552,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27758.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27758.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27758";

cljs.core.async.t_cljs$core$async27758.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__16916__auto__,writer__16917__auto__,opt__16918__auto__){
return cljs.core._write.call(null,writer__16917__auto__,"cljs.core.async/t_cljs$core$async27758");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async27758 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async27758(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta27759){
return (new cljs.core.async.t_cljs$core$async27758(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta27759));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async27758(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__20279__auto___27884 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20279__auto___27884,mults,ensure_mult,p){
return (function (){
var f__20280__auto__ = (function (){var switch__20214__auto__ = ((function (c__20279__auto___27884,mults,ensure_mult,p){
return (function (state_27832){
var state_val_27833 = (state_27832[(1)]);
if((state_val_27833 === (7))){
var inst_27828 = (state_27832[(2)]);
var state_27832__$1 = state_27832;
var statearr_27834_27885 = state_27832__$1;
(statearr_27834_27885[(2)] = inst_27828);

(statearr_27834_27885[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27833 === (20))){
var state_27832__$1 = state_27832;
var statearr_27835_27886 = state_27832__$1;
(statearr_27835_27886[(2)] = null);

(statearr_27835_27886[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27833 === (1))){
var state_27832__$1 = state_27832;
var statearr_27836_27887 = state_27832__$1;
(statearr_27836_27887[(2)] = null);

(statearr_27836_27887[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27833 === (24))){
var inst_27811 = (state_27832[(7)]);
var inst_27820 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_27811);
var state_27832__$1 = state_27832;
var statearr_27837_27888 = state_27832__$1;
(statearr_27837_27888[(2)] = inst_27820);

(statearr_27837_27888[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27833 === (4))){
var inst_27763 = (state_27832[(8)]);
var inst_27763__$1 = (state_27832[(2)]);
var inst_27764 = (inst_27763__$1 == null);
var state_27832__$1 = (function (){var statearr_27838 = state_27832;
(statearr_27838[(8)] = inst_27763__$1);

return statearr_27838;
})();
if(cljs.core.truth_(inst_27764)){
var statearr_27839_27889 = state_27832__$1;
(statearr_27839_27889[(1)] = (5));

} else {
var statearr_27840_27890 = state_27832__$1;
(statearr_27840_27890[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27833 === (15))){
var inst_27805 = (state_27832[(2)]);
var state_27832__$1 = state_27832;
var statearr_27841_27891 = state_27832__$1;
(statearr_27841_27891[(2)] = inst_27805);

(statearr_27841_27891[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27833 === (21))){
var inst_27825 = (state_27832[(2)]);
var state_27832__$1 = (function (){var statearr_27842 = state_27832;
(statearr_27842[(9)] = inst_27825);

return statearr_27842;
})();
var statearr_27843_27892 = state_27832__$1;
(statearr_27843_27892[(2)] = null);

(statearr_27843_27892[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27833 === (13))){
var inst_27787 = (state_27832[(10)]);
var inst_27789 = cljs.core.chunked_seq_QMARK_.call(null,inst_27787);
var state_27832__$1 = state_27832;
if(inst_27789){
var statearr_27844_27893 = state_27832__$1;
(statearr_27844_27893[(1)] = (16));

} else {
var statearr_27845_27894 = state_27832__$1;
(statearr_27845_27894[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27833 === (22))){
var inst_27817 = (state_27832[(2)]);
var state_27832__$1 = state_27832;
if(cljs.core.truth_(inst_27817)){
var statearr_27846_27895 = state_27832__$1;
(statearr_27846_27895[(1)] = (23));

} else {
var statearr_27847_27896 = state_27832__$1;
(statearr_27847_27896[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27833 === (6))){
var inst_27811 = (state_27832[(7)]);
var inst_27813 = (state_27832[(11)]);
var inst_27763 = (state_27832[(8)]);
var inst_27811__$1 = topic_fn.call(null,inst_27763);
var inst_27812 = cljs.core.deref.call(null,mults);
var inst_27813__$1 = cljs.core.get.call(null,inst_27812,inst_27811__$1);
var state_27832__$1 = (function (){var statearr_27848 = state_27832;
(statearr_27848[(7)] = inst_27811__$1);

(statearr_27848[(11)] = inst_27813__$1);

return statearr_27848;
})();
if(cljs.core.truth_(inst_27813__$1)){
var statearr_27849_27897 = state_27832__$1;
(statearr_27849_27897[(1)] = (19));

} else {
var statearr_27850_27898 = state_27832__$1;
(statearr_27850_27898[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27833 === (25))){
var inst_27822 = (state_27832[(2)]);
var state_27832__$1 = state_27832;
var statearr_27851_27899 = state_27832__$1;
(statearr_27851_27899[(2)] = inst_27822);

(statearr_27851_27899[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27833 === (17))){
var inst_27787 = (state_27832[(10)]);
var inst_27796 = cljs.core.first.call(null,inst_27787);
var inst_27797 = cljs.core.async.muxch_STAR_.call(null,inst_27796);
var inst_27798 = cljs.core.async.close_BANG_.call(null,inst_27797);
var inst_27799 = cljs.core.next.call(null,inst_27787);
var inst_27773 = inst_27799;
var inst_27774 = null;
var inst_27775 = (0);
var inst_27776 = (0);
var state_27832__$1 = (function (){var statearr_27852 = state_27832;
(statearr_27852[(12)] = inst_27774);

(statearr_27852[(13)] = inst_27775);

(statearr_27852[(14)] = inst_27776);

(statearr_27852[(15)] = inst_27798);

(statearr_27852[(16)] = inst_27773);

return statearr_27852;
})();
var statearr_27853_27900 = state_27832__$1;
(statearr_27853_27900[(2)] = null);

(statearr_27853_27900[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27833 === (3))){
var inst_27830 = (state_27832[(2)]);
var state_27832__$1 = state_27832;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27832__$1,inst_27830);
} else {
if((state_val_27833 === (12))){
var inst_27807 = (state_27832[(2)]);
var state_27832__$1 = state_27832;
var statearr_27854_27901 = state_27832__$1;
(statearr_27854_27901[(2)] = inst_27807);

(statearr_27854_27901[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27833 === (2))){
var state_27832__$1 = state_27832;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27832__$1,(4),ch);
} else {
if((state_val_27833 === (23))){
var state_27832__$1 = state_27832;
var statearr_27855_27902 = state_27832__$1;
(statearr_27855_27902[(2)] = null);

(statearr_27855_27902[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27833 === (19))){
var inst_27813 = (state_27832[(11)]);
var inst_27763 = (state_27832[(8)]);
var inst_27815 = cljs.core.async.muxch_STAR_.call(null,inst_27813);
var state_27832__$1 = state_27832;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27832__$1,(22),inst_27815,inst_27763);
} else {
if((state_val_27833 === (11))){
var inst_27787 = (state_27832[(10)]);
var inst_27773 = (state_27832[(16)]);
var inst_27787__$1 = cljs.core.seq.call(null,inst_27773);
var state_27832__$1 = (function (){var statearr_27856 = state_27832;
(statearr_27856[(10)] = inst_27787__$1);

return statearr_27856;
})();
if(inst_27787__$1){
var statearr_27857_27903 = state_27832__$1;
(statearr_27857_27903[(1)] = (13));

} else {
var statearr_27858_27904 = state_27832__$1;
(statearr_27858_27904[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27833 === (9))){
var inst_27809 = (state_27832[(2)]);
var state_27832__$1 = state_27832;
var statearr_27859_27905 = state_27832__$1;
(statearr_27859_27905[(2)] = inst_27809);

(statearr_27859_27905[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27833 === (5))){
var inst_27770 = cljs.core.deref.call(null,mults);
var inst_27771 = cljs.core.vals.call(null,inst_27770);
var inst_27772 = cljs.core.seq.call(null,inst_27771);
var inst_27773 = inst_27772;
var inst_27774 = null;
var inst_27775 = (0);
var inst_27776 = (0);
var state_27832__$1 = (function (){var statearr_27860 = state_27832;
(statearr_27860[(12)] = inst_27774);

(statearr_27860[(13)] = inst_27775);

(statearr_27860[(14)] = inst_27776);

(statearr_27860[(16)] = inst_27773);

return statearr_27860;
})();
var statearr_27861_27906 = state_27832__$1;
(statearr_27861_27906[(2)] = null);

(statearr_27861_27906[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27833 === (14))){
var state_27832__$1 = state_27832;
var statearr_27865_27907 = state_27832__$1;
(statearr_27865_27907[(2)] = null);

(statearr_27865_27907[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27833 === (16))){
var inst_27787 = (state_27832[(10)]);
var inst_27791 = cljs.core.chunk_first.call(null,inst_27787);
var inst_27792 = cljs.core.chunk_rest.call(null,inst_27787);
var inst_27793 = cljs.core.count.call(null,inst_27791);
var inst_27773 = inst_27792;
var inst_27774 = inst_27791;
var inst_27775 = inst_27793;
var inst_27776 = (0);
var state_27832__$1 = (function (){var statearr_27866 = state_27832;
(statearr_27866[(12)] = inst_27774);

(statearr_27866[(13)] = inst_27775);

(statearr_27866[(14)] = inst_27776);

(statearr_27866[(16)] = inst_27773);

return statearr_27866;
})();
var statearr_27867_27908 = state_27832__$1;
(statearr_27867_27908[(2)] = null);

(statearr_27867_27908[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27833 === (10))){
var inst_27774 = (state_27832[(12)]);
var inst_27775 = (state_27832[(13)]);
var inst_27776 = (state_27832[(14)]);
var inst_27773 = (state_27832[(16)]);
var inst_27781 = cljs.core._nth.call(null,inst_27774,inst_27776);
var inst_27782 = cljs.core.async.muxch_STAR_.call(null,inst_27781);
var inst_27783 = cljs.core.async.close_BANG_.call(null,inst_27782);
var inst_27784 = (inst_27776 + (1));
var tmp27862 = inst_27774;
var tmp27863 = inst_27775;
var tmp27864 = inst_27773;
var inst_27773__$1 = tmp27864;
var inst_27774__$1 = tmp27862;
var inst_27775__$1 = tmp27863;
var inst_27776__$1 = inst_27784;
var state_27832__$1 = (function (){var statearr_27868 = state_27832;
(statearr_27868[(12)] = inst_27774__$1);

(statearr_27868[(13)] = inst_27775__$1);

(statearr_27868[(14)] = inst_27776__$1);

(statearr_27868[(16)] = inst_27773__$1);

(statearr_27868[(17)] = inst_27783);

return statearr_27868;
})();
var statearr_27869_27909 = state_27832__$1;
(statearr_27869_27909[(2)] = null);

(statearr_27869_27909[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27833 === (18))){
var inst_27802 = (state_27832[(2)]);
var state_27832__$1 = state_27832;
var statearr_27870_27910 = state_27832__$1;
(statearr_27870_27910[(2)] = inst_27802);

(statearr_27870_27910[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27833 === (8))){
var inst_27775 = (state_27832[(13)]);
var inst_27776 = (state_27832[(14)]);
var inst_27778 = (inst_27776 < inst_27775);
var inst_27779 = inst_27778;
var state_27832__$1 = state_27832;
if(cljs.core.truth_(inst_27779)){
var statearr_27871_27911 = state_27832__$1;
(statearr_27871_27911[(1)] = (10));

} else {
var statearr_27872_27912 = state_27832__$1;
(statearr_27872_27912[(1)] = (11));

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
});})(c__20279__auto___27884,mults,ensure_mult,p))
;
return ((function (switch__20214__auto__,c__20279__auto___27884,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__20215__auto__ = null;
var cljs$core$async$state_machine__20215__auto____0 = (function (){
var statearr_27876 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27876[(0)] = cljs$core$async$state_machine__20215__auto__);

(statearr_27876[(1)] = (1));

return statearr_27876;
});
var cljs$core$async$state_machine__20215__auto____1 = (function (state_27832){
while(true){
var ret_value__20216__auto__ = (function (){try{while(true){
var result__20217__auto__ = switch__20214__auto__.call(null,state_27832);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20217__auto__;
}
break;
}
}catch (e27877){if((e27877 instanceof Object)){
var ex__20218__auto__ = e27877;
var statearr_27878_27913 = state_27832;
(statearr_27878_27913[(5)] = ex__20218__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27832);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27877;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20216__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27914 = state_27832;
state_27832 = G__27914;
continue;
} else {
return ret_value__20216__auto__;
}
break;
}
});
cljs$core$async$state_machine__20215__auto__ = function(state_27832){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20215__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20215__auto____1.call(this,state_27832);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20215__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20215__auto____0;
cljs$core$async$state_machine__20215__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20215__auto____1;
return cljs$core$async$state_machine__20215__auto__;
})()
;})(switch__20214__auto__,c__20279__auto___27884,mults,ensure_mult,p))
})();
var state__20281__auto__ = (function (){var statearr_27879 = f__20280__auto__.call(null);
(statearr_27879[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20279__auto___27884);

return statearr_27879;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20281__auto__);
});})(c__20279__auto___27884,mults,ensure_mult,p))
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
var args27915 = [];
var len__17376__auto___27918 = arguments.length;
var i__17377__auto___27919 = (0);
while(true){
if((i__17377__auto___27919 < len__17376__auto___27918)){
args27915.push((arguments[i__17377__auto___27919]));

var G__27920 = (i__17377__auto___27919 + (1));
i__17377__auto___27919 = G__27920;
continue;
} else {
}
break;
}

var G__27917 = args27915.length;
switch (G__27917) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27915.length)].join('')));

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
var args27922 = [];
var len__17376__auto___27925 = arguments.length;
var i__17377__auto___27926 = (0);
while(true){
if((i__17377__auto___27926 < len__17376__auto___27925)){
args27922.push((arguments[i__17377__auto___27926]));

var G__27927 = (i__17377__auto___27926 + (1));
i__17377__auto___27926 = G__27927;
continue;
} else {
}
break;
}

var G__27924 = args27922.length;
switch (G__27924) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27922.length)].join('')));

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
var args27929 = [];
var len__17376__auto___28000 = arguments.length;
var i__17377__auto___28001 = (0);
while(true){
if((i__17377__auto___28001 < len__17376__auto___28000)){
args27929.push((arguments[i__17377__auto___28001]));

var G__28002 = (i__17377__auto___28001 + (1));
i__17377__auto___28001 = G__28002;
continue;
} else {
}
break;
}

var G__27931 = args27929.length;
switch (G__27931) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27929.length)].join('')));

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
var c__20279__auto___28004 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20279__auto___28004,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__20280__auto__ = (function (){var switch__20214__auto__ = ((function (c__20279__auto___28004,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_27970){
var state_val_27971 = (state_27970[(1)]);
if((state_val_27971 === (7))){
var state_27970__$1 = state_27970;
var statearr_27972_28005 = state_27970__$1;
(statearr_27972_28005[(2)] = null);

(statearr_27972_28005[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27971 === (1))){
var state_27970__$1 = state_27970;
var statearr_27973_28006 = state_27970__$1;
(statearr_27973_28006[(2)] = null);

(statearr_27973_28006[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27971 === (4))){
var inst_27934 = (state_27970[(7)]);
var inst_27936 = (inst_27934 < cnt);
var state_27970__$1 = state_27970;
if(cljs.core.truth_(inst_27936)){
var statearr_27974_28007 = state_27970__$1;
(statearr_27974_28007[(1)] = (6));

} else {
var statearr_27975_28008 = state_27970__$1;
(statearr_27975_28008[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27971 === (15))){
var inst_27966 = (state_27970[(2)]);
var state_27970__$1 = state_27970;
var statearr_27976_28009 = state_27970__$1;
(statearr_27976_28009[(2)] = inst_27966);

(statearr_27976_28009[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27971 === (13))){
var inst_27959 = cljs.core.async.close_BANG_.call(null,out);
var state_27970__$1 = state_27970;
var statearr_27977_28010 = state_27970__$1;
(statearr_27977_28010[(2)] = inst_27959);

(statearr_27977_28010[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27971 === (6))){
var state_27970__$1 = state_27970;
var statearr_27978_28011 = state_27970__$1;
(statearr_27978_28011[(2)] = null);

(statearr_27978_28011[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27971 === (3))){
var inst_27968 = (state_27970[(2)]);
var state_27970__$1 = state_27970;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27970__$1,inst_27968);
} else {
if((state_val_27971 === (12))){
var inst_27956 = (state_27970[(8)]);
var inst_27956__$1 = (state_27970[(2)]);
var inst_27957 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_27956__$1);
var state_27970__$1 = (function (){var statearr_27979 = state_27970;
(statearr_27979[(8)] = inst_27956__$1);

return statearr_27979;
})();
if(cljs.core.truth_(inst_27957)){
var statearr_27980_28012 = state_27970__$1;
(statearr_27980_28012[(1)] = (13));

} else {
var statearr_27981_28013 = state_27970__$1;
(statearr_27981_28013[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27971 === (2))){
var inst_27933 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_27934 = (0);
var state_27970__$1 = (function (){var statearr_27982 = state_27970;
(statearr_27982[(7)] = inst_27934);

(statearr_27982[(9)] = inst_27933);

return statearr_27982;
})();
var statearr_27983_28014 = state_27970__$1;
(statearr_27983_28014[(2)] = null);

(statearr_27983_28014[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27971 === (11))){
var inst_27934 = (state_27970[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_27970,(10),Object,null,(9));
var inst_27943 = chs__$1.call(null,inst_27934);
var inst_27944 = done.call(null,inst_27934);
var inst_27945 = cljs.core.async.take_BANG_.call(null,inst_27943,inst_27944);
var state_27970__$1 = state_27970;
var statearr_27984_28015 = state_27970__$1;
(statearr_27984_28015[(2)] = inst_27945);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27970__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27971 === (9))){
var inst_27934 = (state_27970[(7)]);
var inst_27947 = (state_27970[(2)]);
var inst_27948 = (inst_27934 + (1));
var inst_27934__$1 = inst_27948;
var state_27970__$1 = (function (){var statearr_27985 = state_27970;
(statearr_27985[(7)] = inst_27934__$1);

(statearr_27985[(10)] = inst_27947);

return statearr_27985;
})();
var statearr_27986_28016 = state_27970__$1;
(statearr_27986_28016[(2)] = null);

(statearr_27986_28016[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27971 === (5))){
var inst_27954 = (state_27970[(2)]);
var state_27970__$1 = (function (){var statearr_27987 = state_27970;
(statearr_27987[(11)] = inst_27954);

return statearr_27987;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27970__$1,(12),dchan);
} else {
if((state_val_27971 === (14))){
var inst_27956 = (state_27970[(8)]);
var inst_27961 = cljs.core.apply.call(null,f,inst_27956);
var state_27970__$1 = state_27970;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27970__$1,(16),out,inst_27961);
} else {
if((state_val_27971 === (16))){
var inst_27963 = (state_27970[(2)]);
var state_27970__$1 = (function (){var statearr_27988 = state_27970;
(statearr_27988[(12)] = inst_27963);

return statearr_27988;
})();
var statearr_27989_28017 = state_27970__$1;
(statearr_27989_28017[(2)] = null);

(statearr_27989_28017[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27971 === (10))){
var inst_27938 = (state_27970[(2)]);
var inst_27939 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_27970__$1 = (function (){var statearr_27990 = state_27970;
(statearr_27990[(13)] = inst_27938);

return statearr_27990;
})();
var statearr_27991_28018 = state_27970__$1;
(statearr_27991_28018[(2)] = inst_27939);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27970__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27971 === (8))){
var inst_27952 = (state_27970[(2)]);
var state_27970__$1 = state_27970;
var statearr_27992_28019 = state_27970__$1;
(statearr_27992_28019[(2)] = inst_27952);

(statearr_27992_28019[(1)] = (5));


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
});})(c__20279__auto___28004,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__20214__auto__,c__20279__auto___28004,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__20215__auto__ = null;
var cljs$core$async$state_machine__20215__auto____0 = (function (){
var statearr_27996 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27996[(0)] = cljs$core$async$state_machine__20215__auto__);

(statearr_27996[(1)] = (1));

return statearr_27996;
});
var cljs$core$async$state_machine__20215__auto____1 = (function (state_27970){
while(true){
var ret_value__20216__auto__ = (function (){try{while(true){
var result__20217__auto__ = switch__20214__auto__.call(null,state_27970);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20217__auto__;
}
break;
}
}catch (e27997){if((e27997 instanceof Object)){
var ex__20218__auto__ = e27997;
var statearr_27998_28020 = state_27970;
(statearr_27998_28020[(5)] = ex__20218__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27970);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27997;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20216__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28021 = state_27970;
state_27970 = G__28021;
continue;
} else {
return ret_value__20216__auto__;
}
break;
}
});
cljs$core$async$state_machine__20215__auto__ = function(state_27970){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20215__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20215__auto____1.call(this,state_27970);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20215__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20215__auto____0;
cljs$core$async$state_machine__20215__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20215__auto____1;
return cljs$core$async$state_machine__20215__auto__;
})()
;})(switch__20214__auto__,c__20279__auto___28004,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__20281__auto__ = (function (){var statearr_27999 = f__20280__auto__.call(null);
(statearr_27999[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20279__auto___28004);

return statearr_27999;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20281__auto__);
});})(c__20279__auto___28004,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args28023 = [];
var len__17376__auto___28079 = arguments.length;
var i__17377__auto___28080 = (0);
while(true){
if((i__17377__auto___28080 < len__17376__auto___28079)){
args28023.push((arguments[i__17377__auto___28080]));

var G__28081 = (i__17377__auto___28080 + (1));
i__17377__auto___28080 = G__28081;
continue;
} else {
}
break;
}

var G__28025 = args28023.length;
switch (G__28025) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28023.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20279__auto___28083 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20279__auto___28083,out){
return (function (){
var f__20280__auto__ = (function (){var switch__20214__auto__ = ((function (c__20279__auto___28083,out){
return (function (state_28055){
var state_val_28056 = (state_28055[(1)]);
if((state_val_28056 === (7))){
var inst_28035 = (state_28055[(7)]);
var inst_28034 = (state_28055[(8)]);
var inst_28034__$1 = (state_28055[(2)]);
var inst_28035__$1 = cljs.core.nth.call(null,inst_28034__$1,(0),null);
var inst_28036 = cljs.core.nth.call(null,inst_28034__$1,(1),null);
var inst_28037 = (inst_28035__$1 == null);
var state_28055__$1 = (function (){var statearr_28057 = state_28055;
(statearr_28057[(9)] = inst_28036);

(statearr_28057[(7)] = inst_28035__$1);

(statearr_28057[(8)] = inst_28034__$1);

return statearr_28057;
})();
if(cljs.core.truth_(inst_28037)){
var statearr_28058_28084 = state_28055__$1;
(statearr_28058_28084[(1)] = (8));

} else {
var statearr_28059_28085 = state_28055__$1;
(statearr_28059_28085[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28056 === (1))){
var inst_28026 = cljs.core.vec.call(null,chs);
var inst_28027 = inst_28026;
var state_28055__$1 = (function (){var statearr_28060 = state_28055;
(statearr_28060[(10)] = inst_28027);

return statearr_28060;
})();
var statearr_28061_28086 = state_28055__$1;
(statearr_28061_28086[(2)] = null);

(statearr_28061_28086[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28056 === (4))){
var inst_28027 = (state_28055[(10)]);
var state_28055__$1 = state_28055;
return cljs.core.async.ioc_alts_BANG_.call(null,state_28055__$1,(7),inst_28027);
} else {
if((state_val_28056 === (6))){
var inst_28051 = (state_28055[(2)]);
var state_28055__$1 = state_28055;
var statearr_28062_28087 = state_28055__$1;
(statearr_28062_28087[(2)] = inst_28051);

(statearr_28062_28087[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28056 === (3))){
var inst_28053 = (state_28055[(2)]);
var state_28055__$1 = state_28055;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28055__$1,inst_28053);
} else {
if((state_val_28056 === (2))){
var inst_28027 = (state_28055[(10)]);
var inst_28029 = cljs.core.count.call(null,inst_28027);
var inst_28030 = (inst_28029 > (0));
var state_28055__$1 = state_28055;
if(cljs.core.truth_(inst_28030)){
var statearr_28064_28088 = state_28055__$1;
(statearr_28064_28088[(1)] = (4));

} else {
var statearr_28065_28089 = state_28055__$1;
(statearr_28065_28089[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28056 === (11))){
var inst_28027 = (state_28055[(10)]);
var inst_28044 = (state_28055[(2)]);
var tmp28063 = inst_28027;
var inst_28027__$1 = tmp28063;
var state_28055__$1 = (function (){var statearr_28066 = state_28055;
(statearr_28066[(10)] = inst_28027__$1);

(statearr_28066[(11)] = inst_28044);

return statearr_28066;
})();
var statearr_28067_28090 = state_28055__$1;
(statearr_28067_28090[(2)] = null);

(statearr_28067_28090[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28056 === (9))){
var inst_28035 = (state_28055[(7)]);
var state_28055__$1 = state_28055;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28055__$1,(11),out,inst_28035);
} else {
if((state_val_28056 === (5))){
var inst_28049 = cljs.core.async.close_BANG_.call(null,out);
var state_28055__$1 = state_28055;
var statearr_28068_28091 = state_28055__$1;
(statearr_28068_28091[(2)] = inst_28049);

(statearr_28068_28091[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28056 === (10))){
var inst_28047 = (state_28055[(2)]);
var state_28055__$1 = state_28055;
var statearr_28069_28092 = state_28055__$1;
(statearr_28069_28092[(2)] = inst_28047);

(statearr_28069_28092[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28056 === (8))){
var inst_28027 = (state_28055[(10)]);
var inst_28036 = (state_28055[(9)]);
var inst_28035 = (state_28055[(7)]);
var inst_28034 = (state_28055[(8)]);
var inst_28039 = (function (){var cs = inst_28027;
var vec__28032 = inst_28034;
var v = inst_28035;
var c = inst_28036;
return ((function (cs,vec__28032,v,c,inst_28027,inst_28036,inst_28035,inst_28034,state_val_28056,c__20279__auto___28083,out){
return (function (p1__28022_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__28022_SHARP_);
});
;})(cs,vec__28032,v,c,inst_28027,inst_28036,inst_28035,inst_28034,state_val_28056,c__20279__auto___28083,out))
})();
var inst_28040 = cljs.core.filterv.call(null,inst_28039,inst_28027);
var inst_28027__$1 = inst_28040;
var state_28055__$1 = (function (){var statearr_28070 = state_28055;
(statearr_28070[(10)] = inst_28027__$1);

return statearr_28070;
})();
var statearr_28071_28093 = state_28055__$1;
(statearr_28071_28093[(2)] = null);

(statearr_28071_28093[(1)] = (2));


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
});})(c__20279__auto___28083,out))
;
return ((function (switch__20214__auto__,c__20279__auto___28083,out){
return (function() {
var cljs$core$async$state_machine__20215__auto__ = null;
var cljs$core$async$state_machine__20215__auto____0 = (function (){
var statearr_28075 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28075[(0)] = cljs$core$async$state_machine__20215__auto__);

(statearr_28075[(1)] = (1));

return statearr_28075;
});
var cljs$core$async$state_machine__20215__auto____1 = (function (state_28055){
while(true){
var ret_value__20216__auto__ = (function (){try{while(true){
var result__20217__auto__ = switch__20214__auto__.call(null,state_28055);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20217__auto__;
}
break;
}
}catch (e28076){if((e28076 instanceof Object)){
var ex__20218__auto__ = e28076;
var statearr_28077_28094 = state_28055;
(statearr_28077_28094[(5)] = ex__20218__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28055);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28076;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20216__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28095 = state_28055;
state_28055 = G__28095;
continue;
} else {
return ret_value__20216__auto__;
}
break;
}
});
cljs$core$async$state_machine__20215__auto__ = function(state_28055){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20215__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20215__auto____1.call(this,state_28055);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20215__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20215__auto____0;
cljs$core$async$state_machine__20215__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20215__auto____1;
return cljs$core$async$state_machine__20215__auto__;
})()
;})(switch__20214__auto__,c__20279__auto___28083,out))
})();
var state__20281__auto__ = (function (){var statearr_28078 = f__20280__auto__.call(null);
(statearr_28078[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20279__auto___28083);

return statearr_28078;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20281__auto__);
});})(c__20279__auto___28083,out))
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
var args28096 = [];
var len__17376__auto___28145 = arguments.length;
var i__17377__auto___28146 = (0);
while(true){
if((i__17377__auto___28146 < len__17376__auto___28145)){
args28096.push((arguments[i__17377__auto___28146]));

var G__28147 = (i__17377__auto___28146 + (1));
i__17377__auto___28146 = G__28147;
continue;
} else {
}
break;
}

var G__28098 = args28096.length;
switch (G__28098) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28096.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20279__auto___28149 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20279__auto___28149,out){
return (function (){
var f__20280__auto__ = (function (){var switch__20214__auto__ = ((function (c__20279__auto___28149,out){
return (function (state_28122){
var state_val_28123 = (state_28122[(1)]);
if((state_val_28123 === (7))){
var inst_28104 = (state_28122[(7)]);
var inst_28104__$1 = (state_28122[(2)]);
var inst_28105 = (inst_28104__$1 == null);
var inst_28106 = cljs.core.not.call(null,inst_28105);
var state_28122__$1 = (function (){var statearr_28124 = state_28122;
(statearr_28124[(7)] = inst_28104__$1);

return statearr_28124;
})();
if(inst_28106){
var statearr_28125_28150 = state_28122__$1;
(statearr_28125_28150[(1)] = (8));

} else {
var statearr_28126_28151 = state_28122__$1;
(statearr_28126_28151[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28123 === (1))){
var inst_28099 = (0);
var state_28122__$1 = (function (){var statearr_28127 = state_28122;
(statearr_28127[(8)] = inst_28099);

return statearr_28127;
})();
var statearr_28128_28152 = state_28122__$1;
(statearr_28128_28152[(2)] = null);

(statearr_28128_28152[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28123 === (4))){
var state_28122__$1 = state_28122;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28122__$1,(7),ch);
} else {
if((state_val_28123 === (6))){
var inst_28117 = (state_28122[(2)]);
var state_28122__$1 = state_28122;
var statearr_28129_28153 = state_28122__$1;
(statearr_28129_28153[(2)] = inst_28117);

(statearr_28129_28153[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28123 === (3))){
var inst_28119 = (state_28122[(2)]);
var inst_28120 = cljs.core.async.close_BANG_.call(null,out);
var state_28122__$1 = (function (){var statearr_28130 = state_28122;
(statearr_28130[(9)] = inst_28119);

return statearr_28130;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28122__$1,inst_28120);
} else {
if((state_val_28123 === (2))){
var inst_28099 = (state_28122[(8)]);
var inst_28101 = (inst_28099 < n);
var state_28122__$1 = state_28122;
if(cljs.core.truth_(inst_28101)){
var statearr_28131_28154 = state_28122__$1;
(statearr_28131_28154[(1)] = (4));

} else {
var statearr_28132_28155 = state_28122__$1;
(statearr_28132_28155[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28123 === (11))){
var inst_28099 = (state_28122[(8)]);
var inst_28109 = (state_28122[(2)]);
var inst_28110 = (inst_28099 + (1));
var inst_28099__$1 = inst_28110;
var state_28122__$1 = (function (){var statearr_28133 = state_28122;
(statearr_28133[(8)] = inst_28099__$1);

(statearr_28133[(10)] = inst_28109);

return statearr_28133;
})();
var statearr_28134_28156 = state_28122__$1;
(statearr_28134_28156[(2)] = null);

(statearr_28134_28156[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28123 === (9))){
var state_28122__$1 = state_28122;
var statearr_28135_28157 = state_28122__$1;
(statearr_28135_28157[(2)] = null);

(statearr_28135_28157[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28123 === (5))){
var state_28122__$1 = state_28122;
var statearr_28136_28158 = state_28122__$1;
(statearr_28136_28158[(2)] = null);

(statearr_28136_28158[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28123 === (10))){
var inst_28114 = (state_28122[(2)]);
var state_28122__$1 = state_28122;
var statearr_28137_28159 = state_28122__$1;
(statearr_28137_28159[(2)] = inst_28114);

(statearr_28137_28159[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28123 === (8))){
var inst_28104 = (state_28122[(7)]);
var state_28122__$1 = state_28122;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28122__$1,(11),out,inst_28104);
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
});})(c__20279__auto___28149,out))
;
return ((function (switch__20214__auto__,c__20279__auto___28149,out){
return (function() {
var cljs$core$async$state_machine__20215__auto__ = null;
var cljs$core$async$state_machine__20215__auto____0 = (function (){
var statearr_28141 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28141[(0)] = cljs$core$async$state_machine__20215__auto__);

(statearr_28141[(1)] = (1));

return statearr_28141;
});
var cljs$core$async$state_machine__20215__auto____1 = (function (state_28122){
while(true){
var ret_value__20216__auto__ = (function (){try{while(true){
var result__20217__auto__ = switch__20214__auto__.call(null,state_28122);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20217__auto__;
}
break;
}
}catch (e28142){if((e28142 instanceof Object)){
var ex__20218__auto__ = e28142;
var statearr_28143_28160 = state_28122;
(statearr_28143_28160[(5)] = ex__20218__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28122);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28142;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20216__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28161 = state_28122;
state_28122 = G__28161;
continue;
} else {
return ret_value__20216__auto__;
}
break;
}
});
cljs$core$async$state_machine__20215__auto__ = function(state_28122){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20215__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20215__auto____1.call(this,state_28122);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20215__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20215__auto____0;
cljs$core$async$state_machine__20215__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20215__auto____1;
return cljs$core$async$state_machine__20215__auto__;
})()
;})(switch__20214__auto__,c__20279__auto___28149,out))
})();
var state__20281__auto__ = (function (){var statearr_28144 = f__20280__auto__.call(null);
(statearr_28144[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20279__auto___28149);

return statearr_28144;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20281__auto__);
});})(c__20279__auto___28149,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async28169 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28169 = (function (map_LT_,f,ch,meta28170){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta28170 = meta28170;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28169.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28171,meta28170__$1){
var self__ = this;
var _28171__$1 = this;
return (new cljs.core.async.t_cljs$core$async28169(self__.map_LT_,self__.f,self__.ch,meta28170__$1));
});

cljs.core.async.t_cljs$core$async28169.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28171){
var self__ = this;
var _28171__$1 = this;
return self__.meta28170;
});

cljs.core.async.t_cljs$core$async28169.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async28169.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28169.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28169.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async28169.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async28172 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28172 = (function (map_LT_,f,ch,meta28170,_,fn1,meta28173){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta28170 = meta28170;
this._ = _;
this.fn1 = fn1;
this.meta28173 = meta28173;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28172.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_28174,meta28173__$1){
var self__ = this;
var _28174__$1 = this;
return (new cljs.core.async.t_cljs$core$async28172(self__.map_LT_,self__.f,self__.ch,self__.meta28170,self__._,self__.fn1,meta28173__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async28172.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_28174){
var self__ = this;
var _28174__$1 = this;
return self__.meta28173;
});})(___$1))
;

cljs.core.async.t_cljs$core$async28172.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async28172.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async28172.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__28162_SHARP_){
return f1.call(null,(((p1__28162_SHARP_ == null))?null:self__.f.call(null,p1__28162_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async28172.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28170","meta28170",1383635354,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async28169","cljs.core.async/t_cljs$core$async28169",-513233487,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta28173","meta28173",-211626837,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async28172.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28172.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28172";

cljs.core.async.t_cljs$core$async28172.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__16916__auto__,writer__16917__auto__,opt__16918__auto__){
return cljs.core._write.call(null,writer__16917__auto__,"cljs.core.async/t_cljs$core$async28172");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async28172 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async28172(map_LT___$1,f__$1,ch__$1,meta28170__$1,___$2,fn1__$1,meta28173){
return (new cljs.core.async.t_cljs$core$async28172(map_LT___$1,f__$1,ch__$1,meta28170__$1,___$2,fn1__$1,meta28173));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async28172(self__.map_LT_,self__.f,self__.ch,self__.meta28170,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__16306__auto__ = ret;
if(cljs.core.truth_(and__16306__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__16306__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async28169.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async28169.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async28169.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28170","meta28170",1383635354,null)], null);
});

cljs.core.async.t_cljs$core$async28169.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28169.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28169";

cljs.core.async.t_cljs$core$async28169.cljs$lang$ctorPrWriter = (function (this__16916__auto__,writer__16917__auto__,opt__16918__auto__){
return cljs.core._write.call(null,writer__16917__auto__,"cljs.core.async/t_cljs$core$async28169");
});

cljs.core.async.__GT_t_cljs$core$async28169 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async28169(map_LT___$1,f__$1,ch__$1,meta28170){
return (new cljs.core.async.t_cljs$core$async28169(map_LT___$1,f__$1,ch__$1,meta28170));
});

}

return (new cljs.core.async.t_cljs$core$async28169(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async28178 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28178 = (function (map_GT_,f,ch,meta28179){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta28179 = meta28179;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28178.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28180,meta28179__$1){
var self__ = this;
var _28180__$1 = this;
return (new cljs.core.async.t_cljs$core$async28178(self__.map_GT_,self__.f,self__.ch,meta28179__$1));
});

cljs.core.async.t_cljs$core$async28178.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28180){
var self__ = this;
var _28180__$1 = this;
return self__.meta28179;
});

cljs.core.async.t_cljs$core$async28178.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async28178.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28178.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async28178.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async28178.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async28178.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async28178.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28179","meta28179",723310136,null)], null);
});

cljs.core.async.t_cljs$core$async28178.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28178.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28178";

cljs.core.async.t_cljs$core$async28178.cljs$lang$ctorPrWriter = (function (this__16916__auto__,writer__16917__auto__,opt__16918__auto__){
return cljs.core._write.call(null,writer__16917__auto__,"cljs.core.async/t_cljs$core$async28178");
});

cljs.core.async.__GT_t_cljs$core$async28178 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async28178(map_GT___$1,f__$1,ch__$1,meta28179){
return (new cljs.core.async.t_cljs$core$async28178(map_GT___$1,f__$1,ch__$1,meta28179));
});

}

return (new cljs.core.async.t_cljs$core$async28178(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async28184 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28184 = (function (filter_GT_,p,ch,meta28185){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta28185 = meta28185;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28184.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28186,meta28185__$1){
var self__ = this;
var _28186__$1 = this;
return (new cljs.core.async.t_cljs$core$async28184(self__.filter_GT_,self__.p,self__.ch,meta28185__$1));
});

cljs.core.async.t_cljs$core$async28184.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28186){
var self__ = this;
var _28186__$1 = this;
return self__.meta28185;
});

cljs.core.async.t_cljs$core$async28184.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async28184.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28184.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28184.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async28184.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async28184.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async28184.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async28184.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28185","meta28185",-1854548780,null)], null);
});

cljs.core.async.t_cljs$core$async28184.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28184.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28184";

cljs.core.async.t_cljs$core$async28184.cljs$lang$ctorPrWriter = (function (this__16916__auto__,writer__16917__auto__,opt__16918__auto__){
return cljs.core._write.call(null,writer__16917__auto__,"cljs.core.async/t_cljs$core$async28184");
});

cljs.core.async.__GT_t_cljs$core$async28184 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async28184(filter_GT___$1,p__$1,ch__$1,meta28185){
return (new cljs.core.async.t_cljs$core$async28184(filter_GT___$1,p__$1,ch__$1,meta28185));
});

}

return (new cljs.core.async.t_cljs$core$async28184(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args28187 = [];
var len__17376__auto___28231 = arguments.length;
var i__17377__auto___28232 = (0);
while(true){
if((i__17377__auto___28232 < len__17376__auto___28231)){
args28187.push((arguments[i__17377__auto___28232]));

var G__28233 = (i__17377__auto___28232 + (1));
i__17377__auto___28232 = G__28233;
continue;
} else {
}
break;
}

var G__28189 = args28187.length;
switch (G__28189) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28187.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20279__auto___28235 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20279__auto___28235,out){
return (function (){
var f__20280__auto__ = (function (){var switch__20214__auto__ = ((function (c__20279__auto___28235,out){
return (function (state_28210){
var state_val_28211 = (state_28210[(1)]);
if((state_val_28211 === (7))){
var inst_28206 = (state_28210[(2)]);
var state_28210__$1 = state_28210;
var statearr_28212_28236 = state_28210__$1;
(statearr_28212_28236[(2)] = inst_28206);

(statearr_28212_28236[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28211 === (1))){
var state_28210__$1 = state_28210;
var statearr_28213_28237 = state_28210__$1;
(statearr_28213_28237[(2)] = null);

(statearr_28213_28237[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28211 === (4))){
var inst_28192 = (state_28210[(7)]);
var inst_28192__$1 = (state_28210[(2)]);
var inst_28193 = (inst_28192__$1 == null);
var state_28210__$1 = (function (){var statearr_28214 = state_28210;
(statearr_28214[(7)] = inst_28192__$1);

return statearr_28214;
})();
if(cljs.core.truth_(inst_28193)){
var statearr_28215_28238 = state_28210__$1;
(statearr_28215_28238[(1)] = (5));

} else {
var statearr_28216_28239 = state_28210__$1;
(statearr_28216_28239[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28211 === (6))){
var inst_28192 = (state_28210[(7)]);
var inst_28197 = p.call(null,inst_28192);
var state_28210__$1 = state_28210;
if(cljs.core.truth_(inst_28197)){
var statearr_28217_28240 = state_28210__$1;
(statearr_28217_28240[(1)] = (8));

} else {
var statearr_28218_28241 = state_28210__$1;
(statearr_28218_28241[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28211 === (3))){
var inst_28208 = (state_28210[(2)]);
var state_28210__$1 = state_28210;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28210__$1,inst_28208);
} else {
if((state_val_28211 === (2))){
var state_28210__$1 = state_28210;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28210__$1,(4),ch);
} else {
if((state_val_28211 === (11))){
var inst_28200 = (state_28210[(2)]);
var state_28210__$1 = state_28210;
var statearr_28219_28242 = state_28210__$1;
(statearr_28219_28242[(2)] = inst_28200);

(statearr_28219_28242[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28211 === (9))){
var state_28210__$1 = state_28210;
var statearr_28220_28243 = state_28210__$1;
(statearr_28220_28243[(2)] = null);

(statearr_28220_28243[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28211 === (5))){
var inst_28195 = cljs.core.async.close_BANG_.call(null,out);
var state_28210__$1 = state_28210;
var statearr_28221_28244 = state_28210__$1;
(statearr_28221_28244[(2)] = inst_28195);

(statearr_28221_28244[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28211 === (10))){
var inst_28203 = (state_28210[(2)]);
var state_28210__$1 = (function (){var statearr_28222 = state_28210;
(statearr_28222[(8)] = inst_28203);

return statearr_28222;
})();
var statearr_28223_28245 = state_28210__$1;
(statearr_28223_28245[(2)] = null);

(statearr_28223_28245[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28211 === (8))){
var inst_28192 = (state_28210[(7)]);
var state_28210__$1 = state_28210;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28210__$1,(11),out,inst_28192);
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
});})(c__20279__auto___28235,out))
;
return ((function (switch__20214__auto__,c__20279__auto___28235,out){
return (function() {
var cljs$core$async$state_machine__20215__auto__ = null;
var cljs$core$async$state_machine__20215__auto____0 = (function (){
var statearr_28227 = [null,null,null,null,null,null,null,null,null];
(statearr_28227[(0)] = cljs$core$async$state_machine__20215__auto__);

(statearr_28227[(1)] = (1));

return statearr_28227;
});
var cljs$core$async$state_machine__20215__auto____1 = (function (state_28210){
while(true){
var ret_value__20216__auto__ = (function (){try{while(true){
var result__20217__auto__ = switch__20214__auto__.call(null,state_28210);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20217__auto__;
}
break;
}
}catch (e28228){if((e28228 instanceof Object)){
var ex__20218__auto__ = e28228;
var statearr_28229_28246 = state_28210;
(statearr_28229_28246[(5)] = ex__20218__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28210);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28228;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20216__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28247 = state_28210;
state_28210 = G__28247;
continue;
} else {
return ret_value__20216__auto__;
}
break;
}
});
cljs$core$async$state_machine__20215__auto__ = function(state_28210){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20215__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20215__auto____1.call(this,state_28210);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20215__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20215__auto____0;
cljs$core$async$state_machine__20215__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20215__auto____1;
return cljs$core$async$state_machine__20215__auto__;
})()
;})(switch__20214__auto__,c__20279__auto___28235,out))
})();
var state__20281__auto__ = (function (){var statearr_28230 = f__20280__auto__.call(null);
(statearr_28230[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20279__auto___28235);

return statearr_28230;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20281__auto__);
});})(c__20279__auto___28235,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args28248 = [];
var len__17376__auto___28251 = arguments.length;
var i__17377__auto___28252 = (0);
while(true){
if((i__17377__auto___28252 < len__17376__auto___28251)){
args28248.push((arguments[i__17377__auto___28252]));

var G__28253 = (i__17377__auto___28252 + (1));
i__17377__auto___28252 = G__28253;
continue;
} else {
}
break;
}

var G__28250 = args28248.length;
switch (G__28250) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28248.length)].join('')));

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
var c__20279__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20279__auto__){
return (function (){
var f__20280__auto__ = (function (){var switch__20214__auto__ = ((function (c__20279__auto__){
return (function (state_28420){
var state_val_28421 = (state_28420[(1)]);
if((state_val_28421 === (7))){
var inst_28416 = (state_28420[(2)]);
var state_28420__$1 = state_28420;
var statearr_28422_28463 = state_28420__$1;
(statearr_28422_28463[(2)] = inst_28416);

(statearr_28422_28463[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28421 === (20))){
var inst_28386 = (state_28420[(7)]);
var inst_28397 = (state_28420[(2)]);
var inst_28398 = cljs.core.next.call(null,inst_28386);
var inst_28372 = inst_28398;
var inst_28373 = null;
var inst_28374 = (0);
var inst_28375 = (0);
var state_28420__$1 = (function (){var statearr_28423 = state_28420;
(statearr_28423[(8)] = inst_28372);

(statearr_28423[(9)] = inst_28373);

(statearr_28423[(10)] = inst_28375);

(statearr_28423[(11)] = inst_28397);

(statearr_28423[(12)] = inst_28374);

return statearr_28423;
})();
var statearr_28424_28464 = state_28420__$1;
(statearr_28424_28464[(2)] = null);

(statearr_28424_28464[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28421 === (1))){
var state_28420__$1 = state_28420;
var statearr_28425_28465 = state_28420__$1;
(statearr_28425_28465[(2)] = null);

(statearr_28425_28465[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28421 === (4))){
var inst_28361 = (state_28420[(13)]);
var inst_28361__$1 = (state_28420[(2)]);
var inst_28362 = (inst_28361__$1 == null);
var state_28420__$1 = (function (){var statearr_28426 = state_28420;
(statearr_28426[(13)] = inst_28361__$1);

return statearr_28426;
})();
if(cljs.core.truth_(inst_28362)){
var statearr_28427_28466 = state_28420__$1;
(statearr_28427_28466[(1)] = (5));

} else {
var statearr_28428_28467 = state_28420__$1;
(statearr_28428_28467[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28421 === (15))){
var state_28420__$1 = state_28420;
var statearr_28432_28468 = state_28420__$1;
(statearr_28432_28468[(2)] = null);

(statearr_28432_28468[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28421 === (21))){
var state_28420__$1 = state_28420;
var statearr_28433_28469 = state_28420__$1;
(statearr_28433_28469[(2)] = null);

(statearr_28433_28469[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28421 === (13))){
var inst_28372 = (state_28420[(8)]);
var inst_28373 = (state_28420[(9)]);
var inst_28375 = (state_28420[(10)]);
var inst_28374 = (state_28420[(12)]);
var inst_28382 = (state_28420[(2)]);
var inst_28383 = (inst_28375 + (1));
var tmp28429 = inst_28372;
var tmp28430 = inst_28373;
var tmp28431 = inst_28374;
var inst_28372__$1 = tmp28429;
var inst_28373__$1 = tmp28430;
var inst_28374__$1 = tmp28431;
var inst_28375__$1 = inst_28383;
var state_28420__$1 = (function (){var statearr_28434 = state_28420;
(statearr_28434[(8)] = inst_28372__$1);

(statearr_28434[(9)] = inst_28373__$1);

(statearr_28434[(10)] = inst_28375__$1);

(statearr_28434[(14)] = inst_28382);

(statearr_28434[(12)] = inst_28374__$1);

return statearr_28434;
})();
var statearr_28435_28470 = state_28420__$1;
(statearr_28435_28470[(2)] = null);

(statearr_28435_28470[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28421 === (22))){
var state_28420__$1 = state_28420;
var statearr_28436_28471 = state_28420__$1;
(statearr_28436_28471[(2)] = null);

(statearr_28436_28471[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28421 === (6))){
var inst_28361 = (state_28420[(13)]);
var inst_28370 = f.call(null,inst_28361);
var inst_28371 = cljs.core.seq.call(null,inst_28370);
var inst_28372 = inst_28371;
var inst_28373 = null;
var inst_28374 = (0);
var inst_28375 = (0);
var state_28420__$1 = (function (){var statearr_28437 = state_28420;
(statearr_28437[(8)] = inst_28372);

(statearr_28437[(9)] = inst_28373);

(statearr_28437[(10)] = inst_28375);

(statearr_28437[(12)] = inst_28374);

return statearr_28437;
})();
var statearr_28438_28472 = state_28420__$1;
(statearr_28438_28472[(2)] = null);

(statearr_28438_28472[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28421 === (17))){
var inst_28386 = (state_28420[(7)]);
var inst_28390 = cljs.core.chunk_first.call(null,inst_28386);
var inst_28391 = cljs.core.chunk_rest.call(null,inst_28386);
var inst_28392 = cljs.core.count.call(null,inst_28390);
var inst_28372 = inst_28391;
var inst_28373 = inst_28390;
var inst_28374 = inst_28392;
var inst_28375 = (0);
var state_28420__$1 = (function (){var statearr_28439 = state_28420;
(statearr_28439[(8)] = inst_28372);

(statearr_28439[(9)] = inst_28373);

(statearr_28439[(10)] = inst_28375);

(statearr_28439[(12)] = inst_28374);

return statearr_28439;
})();
var statearr_28440_28473 = state_28420__$1;
(statearr_28440_28473[(2)] = null);

(statearr_28440_28473[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28421 === (3))){
var inst_28418 = (state_28420[(2)]);
var state_28420__$1 = state_28420;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28420__$1,inst_28418);
} else {
if((state_val_28421 === (12))){
var inst_28406 = (state_28420[(2)]);
var state_28420__$1 = state_28420;
var statearr_28441_28474 = state_28420__$1;
(statearr_28441_28474[(2)] = inst_28406);

(statearr_28441_28474[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28421 === (2))){
var state_28420__$1 = state_28420;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28420__$1,(4),in$);
} else {
if((state_val_28421 === (23))){
var inst_28414 = (state_28420[(2)]);
var state_28420__$1 = state_28420;
var statearr_28442_28475 = state_28420__$1;
(statearr_28442_28475[(2)] = inst_28414);

(statearr_28442_28475[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28421 === (19))){
var inst_28401 = (state_28420[(2)]);
var state_28420__$1 = state_28420;
var statearr_28443_28476 = state_28420__$1;
(statearr_28443_28476[(2)] = inst_28401);

(statearr_28443_28476[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28421 === (11))){
var inst_28372 = (state_28420[(8)]);
var inst_28386 = (state_28420[(7)]);
var inst_28386__$1 = cljs.core.seq.call(null,inst_28372);
var state_28420__$1 = (function (){var statearr_28444 = state_28420;
(statearr_28444[(7)] = inst_28386__$1);

return statearr_28444;
})();
if(inst_28386__$1){
var statearr_28445_28477 = state_28420__$1;
(statearr_28445_28477[(1)] = (14));

} else {
var statearr_28446_28478 = state_28420__$1;
(statearr_28446_28478[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28421 === (9))){
var inst_28408 = (state_28420[(2)]);
var inst_28409 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_28420__$1 = (function (){var statearr_28447 = state_28420;
(statearr_28447[(15)] = inst_28408);

return statearr_28447;
})();
if(cljs.core.truth_(inst_28409)){
var statearr_28448_28479 = state_28420__$1;
(statearr_28448_28479[(1)] = (21));

} else {
var statearr_28449_28480 = state_28420__$1;
(statearr_28449_28480[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28421 === (5))){
var inst_28364 = cljs.core.async.close_BANG_.call(null,out);
var state_28420__$1 = state_28420;
var statearr_28450_28481 = state_28420__$1;
(statearr_28450_28481[(2)] = inst_28364);

(statearr_28450_28481[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28421 === (14))){
var inst_28386 = (state_28420[(7)]);
var inst_28388 = cljs.core.chunked_seq_QMARK_.call(null,inst_28386);
var state_28420__$1 = state_28420;
if(inst_28388){
var statearr_28451_28482 = state_28420__$1;
(statearr_28451_28482[(1)] = (17));

} else {
var statearr_28452_28483 = state_28420__$1;
(statearr_28452_28483[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28421 === (16))){
var inst_28404 = (state_28420[(2)]);
var state_28420__$1 = state_28420;
var statearr_28453_28484 = state_28420__$1;
(statearr_28453_28484[(2)] = inst_28404);

(statearr_28453_28484[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28421 === (10))){
var inst_28373 = (state_28420[(9)]);
var inst_28375 = (state_28420[(10)]);
var inst_28380 = cljs.core._nth.call(null,inst_28373,inst_28375);
var state_28420__$1 = state_28420;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28420__$1,(13),out,inst_28380);
} else {
if((state_val_28421 === (18))){
var inst_28386 = (state_28420[(7)]);
var inst_28395 = cljs.core.first.call(null,inst_28386);
var state_28420__$1 = state_28420;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28420__$1,(20),out,inst_28395);
} else {
if((state_val_28421 === (8))){
var inst_28375 = (state_28420[(10)]);
var inst_28374 = (state_28420[(12)]);
var inst_28377 = (inst_28375 < inst_28374);
var inst_28378 = inst_28377;
var state_28420__$1 = state_28420;
if(cljs.core.truth_(inst_28378)){
var statearr_28454_28485 = state_28420__$1;
(statearr_28454_28485[(1)] = (10));

} else {
var statearr_28455_28486 = state_28420__$1;
(statearr_28455_28486[(1)] = (11));

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
});})(c__20279__auto__))
;
return ((function (switch__20214__auto__,c__20279__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__20215__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__20215__auto____0 = (function (){
var statearr_28459 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28459[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__20215__auto__);

(statearr_28459[(1)] = (1));

return statearr_28459;
});
var cljs$core$async$mapcat_STAR__$_state_machine__20215__auto____1 = (function (state_28420){
while(true){
var ret_value__20216__auto__ = (function (){try{while(true){
var result__20217__auto__ = switch__20214__auto__.call(null,state_28420);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20217__auto__;
}
break;
}
}catch (e28460){if((e28460 instanceof Object)){
var ex__20218__auto__ = e28460;
var statearr_28461_28487 = state_28420;
(statearr_28461_28487[(5)] = ex__20218__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28420);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28460;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20216__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28488 = state_28420;
state_28420 = G__28488;
continue;
} else {
return ret_value__20216__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__20215__auto__ = function(state_28420){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__20215__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__20215__auto____1.call(this,state_28420);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__20215__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__20215__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__20215__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__20215__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__20215__auto__;
})()
;})(switch__20214__auto__,c__20279__auto__))
})();
var state__20281__auto__ = (function (){var statearr_28462 = f__20280__auto__.call(null);
(statearr_28462[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20279__auto__);

return statearr_28462;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20281__auto__);
});})(c__20279__auto__))
);

return c__20279__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args28489 = [];
var len__17376__auto___28492 = arguments.length;
var i__17377__auto___28493 = (0);
while(true){
if((i__17377__auto___28493 < len__17376__auto___28492)){
args28489.push((arguments[i__17377__auto___28493]));

var G__28494 = (i__17377__auto___28493 + (1));
i__17377__auto___28493 = G__28494;
continue;
} else {
}
break;
}

var G__28491 = args28489.length;
switch (G__28491) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28489.length)].join('')));

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
var args28496 = [];
var len__17376__auto___28499 = arguments.length;
var i__17377__auto___28500 = (0);
while(true){
if((i__17377__auto___28500 < len__17376__auto___28499)){
args28496.push((arguments[i__17377__auto___28500]));

var G__28501 = (i__17377__auto___28500 + (1));
i__17377__auto___28500 = G__28501;
continue;
} else {
}
break;
}

var G__28498 = args28496.length;
switch (G__28498) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28496.length)].join('')));

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
var args28503 = [];
var len__17376__auto___28554 = arguments.length;
var i__17377__auto___28555 = (0);
while(true){
if((i__17377__auto___28555 < len__17376__auto___28554)){
args28503.push((arguments[i__17377__auto___28555]));

var G__28556 = (i__17377__auto___28555 + (1));
i__17377__auto___28555 = G__28556;
continue;
} else {
}
break;
}

var G__28505 = args28503.length;
switch (G__28505) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28503.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20279__auto___28558 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20279__auto___28558,out){
return (function (){
var f__20280__auto__ = (function (){var switch__20214__auto__ = ((function (c__20279__auto___28558,out){
return (function (state_28529){
var state_val_28530 = (state_28529[(1)]);
if((state_val_28530 === (7))){
var inst_28524 = (state_28529[(2)]);
var state_28529__$1 = state_28529;
var statearr_28531_28559 = state_28529__$1;
(statearr_28531_28559[(2)] = inst_28524);

(statearr_28531_28559[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28530 === (1))){
var inst_28506 = null;
var state_28529__$1 = (function (){var statearr_28532 = state_28529;
(statearr_28532[(7)] = inst_28506);

return statearr_28532;
})();
var statearr_28533_28560 = state_28529__$1;
(statearr_28533_28560[(2)] = null);

(statearr_28533_28560[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28530 === (4))){
var inst_28509 = (state_28529[(8)]);
var inst_28509__$1 = (state_28529[(2)]);
var inst_28510 = (inst_28509__$1 == null);
var inst_28511 = cljs.core.not.call(null,inst_28510);
var state_28529__$1 = (function (){var statearr_28534 = state_28529;
(statearr_28534[(8)] = inst_28509__$1);

return statearr_28534;
})();
if(inst_28511){
var statearr_28535_28561 = state_28529__$1;
(statearr_28535_28561[(1)] = (5));

} else {
var statearr_28536_28562 = state_28529__$1;
(statearr_28536_28562[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28530 === (6))){
var state_28529__$1 = state_28529;
var statearr_28537_28563 = state_28529__$1;
(statearr_28537_28563[(2)] = null);

(statearr_28537_28563[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28530 === (3))){
var inst_28526 = (state_28529[(2)]);
var inst_28527 = cljs.core.async.close_BANG_.call(null,out);
var state_28529__$1 = (function (){var statearr_28538 = state_28529;
(statearr_28538[(9)] = inst_28526);

return statearr_28538;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28529__$1,inst_28527);
} else {
if((state_val_28530 === (2))){
var state_28529__$1 = state_28529;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28529__$1,(4),ch);
} else {
if((state_val_28530 === (11))){
var inst_28509 = (state_28529[(8)]);
var inst_28518 = (state_28529[(2)]);
var inst_28506 = inst_28509;
var state_28529__$1 = (function (){var statearr_28539 = state_28529;
(statearr_28539[(10)] = inst_28518);

(statearr_28539[(7)] = inst_28506);

return statearr_28539;
})();
var statearr_28540_28564 = state_28529__$1;
(statearr_28540_28564[(2)] = null);

(statearr_28540_28564[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28530 === (9))){
var inst_28509 = (state_28529[(8)]);
var state_28529__$1 = state_28529;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28529__$1,(11),out,inst_28509);
} else {
if((state_val_28530 === (5))){
var inst_28509 = (state_28529[(8)]);
var inst_28506 = (state_28529[(7)]);
var inst_28513 = cljs.core._EQ_.call(null,inst_28509,inst_28506);
var state_28529__$1 = state_28529;
if(inst_28513){
var statearr_28542_28565 = state_28529__$1;
(statearr_28542_28565[(1)] = (8));

} else {
var statearr_28543_28566 = state_28529__$1;
(statearr_28543_28566[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28530 === (10))){
var inst_28521 = (state_28529[(2)]);
var state_28529__$1 = state_28529;
var statearr_28544_28567 = state_28529__$1;
(statearr_28544_28567[(2)] = inst_28521);

(statearr_28544_28567[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28530 === (8))){
var inst_28506 = (state_28529[(7)]);
var tmp28541 = inst_28506;
var inst_28506__$1 = tmp28541;
var state_28529__$1 = (function (){var statearr_28545 = state_28529;
(statearr_28545[(7)] = inst_28506__$1);

return statearr_28545;
})();
var statearr_28546_28568 = state_28529__$1;
(statearr_28546_28568[(2)] = null);

(statearr_28546_28568[(1)] = (2));


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
});})(c__20279__auto___28558,out))
;
return ((function (switch__20214__auto__,c__20279__auto___28558,out){
return (function() {
var cljs$core$async$state_machine__20215__auto__ = null;
var cljs$core$async$state_machine__20215__auto____0 = (function (){
var statearr_28550 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28550[(0)] = cljs$core$async$state_machine__20215__auto__);

(statearr_28550[(1)] = (1));

return statearr_28550;
});
var cljs$core$async$state_machine__20215__auto____1 = (function (state_28529){
while(true){
var ret_value__20216__auto__ = (function (){try{while(true){
var result__20217__auto__ = switch__20214__auto__.call(null,state_28529);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20217__auto__;
}
break;
}
}catch (e28551){if((e28551 instanceof Object)){
var ex__20218__auto__ = e28551;
var statearr_28552_28569 = state_28529;
(statearr_28552_28569[(5)] = ex__20218__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28529);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28551;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20216__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28570 = state_28529;
state_28529 = G__28570;
continue;
} else {
return ret_value__20216__auto__;
}
break;
}
});
cljs$core$async$state_machine__20215__auto__ = function(state_28529){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20215__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20215__auto____1.call(this,state_28529);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20215__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20215__auto____0;
cljs$core$async$state_machine__20215__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20215__auto____1;
return cljs$core$async$state_machine__20215__auto__;
})()
;})(switch__20214__auto__,c__20279__auto___28558,out))
})();
var state__20281__auto__ = (function (){var statearr_28553 = f__20280__auto__.call(null);
(statearr_28553[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20279__auto___28558);

return statearr_28553;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20281__auto__);
});})(c__20279__auto___28558,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args28571 = [];
var len__17376__auto___28641 = arguments.length;
var i__17377__auto___28642 = (0);
while(true){
if((i__17377__auto___28642 < len__17376__auto___28641)){
args28571.push((arguments[i__17377__auto___28642]));

var G__28643 = (i__17377__auto___28642 + (1));
i__17377__auto___28642 = G__28643;
continue;
} else {
}
break;
}

var G__28573 = args28571.length;
switch (G__28573) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28571.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20279__auto___28645 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20279__auto___28645,out){
return (function (){
var f__20280__auto__ = (function (){var switch__20214__auto__ = ((function (c__20279__auto___28645,out){
return (function (state_28611){
var state_val_28612 = (state_28611[(1)]);
if((state_val_28612 === (7))){
var inst_28607 = (state_28611[(2)]);
var state_28611__$1 = state_28611;
var statearr_28613_28646 = state_28611__$1;
(statearr_28613_28646[(2)] = inst_28607);

(statearr_28613_28646[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28612 === (1))){
var inst_28574 = (new Array(n));
var inst_28575 = inst_28574;
var inst_28576 = (0);
var state_28611__$1 = (function (){var statearr_28614 = state_28611;
(statearr_28614[(7)] = inst_28576);

(statearr_28614[(8)] = inst_28575);

return statearr_28614;
})();
var statearr_28615_28647 = state_28611__$1;
(statearr_28615_28647[(2)] = null);

(statearr_28615_28647[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28612 === (4))){
var inst_28579 = (state_28611[(9)]);
var inst_28579__$1 = (state_28611[(2)]);
var inst_28580 = (inst_28579__$1 == null);
var inst_28581 = cljs.core.not.call(null,inst_28580);
var state_28611__$1 = (function (){var statearr_28616 = state_28611;
(statearr_28616[(9)] = inst_28579__$1);

return statearr_28616;
})();
if(inst_28581){
var statearr_28617_28648 = state_28611__$1;
(statearr_28617_28648[(1)] = (5));

} else {
var statearr_28618_28649 = state_28611__$1;
(statearr_28618_28649[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28612 === (15))){
var inst_28601 = (state_28611[(2)]);
var state_28611__$1 = state_28611;
var statearr_28619_28650 = state_28611__$1;
(statearr_28619_28650[(2)] = inst_28601);

(statearr_28619_28650[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28612 === (13))){
var state_28611__$1 = state_28611;
var statearr_28620_28651 = state_28611__$1;
(statearr_28620_28651[(2)] = null);

(statearr_28620_28651[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28612 === (6))){
var inst_28576 = (state_28611[(7)]);
var inst_28597 = (inst_28576 > (0));
var state_28611__$1 = state_28611;
if(cljs.core.truth_(inst_28597)){
var statearr_28621_28652 = state_28611__$1;
(statearr_28621_28652[(1)] = (12));

} else {
var statearr_28622_28653 = state_28611__$1;
(statearr_28622_28653[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28612 === (3))){
var inst_28609 = (state_28611[(2)]);
var state_28611__$1 = state_28611;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28611__$1,inst_28609);
} else {
if((state_val_28612 === (12))){
var inst_28575 = (state_28611[(8)]);
var inst_28599 = cljs.core.vec.call(null,inst_28575);
var state_28611__$1 = state_28611;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28611__$1,(15),out,inst_28599);
} else {
if((state_val_28612 === (2))){
var state_28611__$1 = state_28611;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28611__$1,(4),ch);
} else {
if((state_val_28612 === (11))){
var inst_28591 = (state_28611[(2)]);
var inst_28592 = (new Array(n));
var inst_28575 = inst_28592;
var inst_28576 = (0);
var state_28611__$1 = (function (){var statearr_28623 = state_28611;
(statearr_28623[(7)] = inst_28576);

(statearr_28623[(10)] = inst_28591);

(statearr_28623[(8)] = inst_28575);

return statearr_28623;
})();
var statearr_28624_28654 = state_28611__$1;
(statearr_28624_28654[(2)] = null);

(statearr_28624_28654[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28612 === (9))){
var inst_28575 = (state_28611[(8)]);
var inst_28589 = cljs.core.vec.call(null,inst_28575);
var state_28611__$1 = state_28611;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28611__$1,(11),out,inst_28589);
} else {
if((state_val_28612 === (5))){
var inst_28576 = (state_28611[(7)]);
var inst_28579 = (state_28611[(9)]);
var inst_28575 = (state_28611[(8)]);
var inst_28584 = (state_28611[(11)]);
var inst_28583 = (inst_28575[inst_28576] = inst_28579);
var inst_28584__$1 = (inst_28576 + (1));
var inst_28585 = (inst_28584__$1 < n);
var state_28611__$1 = (function (){var statearr_28625 = state_28611;
(statearr_28625[(11)] = inst_28584__$1);

(statearr_28625[(12)] = inst_28583);

return statearr_28625;
})();
if(cljs.core.truth_(inst_28585)){
var statearr_28626_28655 = state_28611__$1;
(statearr_28626_28655[(1)] = (8));

} else {
var statearr_28627_28656 = state_28611__$1;
(statearr_28627_28656[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28612 === (14))){
var inst_28604 = (state_28611[(2)]);
var inst_28605 = cljs.core.async.close_BANG_.call(null,out);
var state_28611__$1 = (function (){var statearr_28629 = state_28611;
(statearr_28629[(13)] = inst_28604);

return statearr_28629;
})();
var statearr_28630_28657 = state_28611__$1;
(statearr_28630_28657[(2)] = inst_28605);

(statearr_28630_28657[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28612 === (10))){
var inst_28595 = (state_28611[(2)]);
var state_28611__$1 = state_28611;
var statearr_28631_28658 = state_28611__$1;
(statearr_28631_28658[(2)] = inst_28595);

(statearr_28631_28658[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28612 === (8))){
var inst_28575 = (state_28611[(8)]);
var inst_28584 = (state_28611[(11)]);
var tmp28628 = inst_28575;
var inst_28575__$1 = tmp28628;
var inst_28576 = inst_28584;
var state_28611__$1 = (function (){var statearr_28632 = state_28611;
(statearr_28632[(7)] = inst_28576);

(statearr_28632[(8)] = inst_28575__$1);

return statearr_28632;
})();
var statearr_28633_28659 = state_28611__$1;
(statearr_28633_28659[(2)] = null);

(statearr_28633_28659[(1)] = (2));


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
});})(c__20279__auto___28645,out))
;
return ((function (switch__20214__auto__,c__20279__auto___28645,out){
return (function() {
var cljs$core$async$state_machine__20215__auto__ = null;
var cljs$core$async$state_machine__20215__auto____0 = (function (){
var statearr_28637 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28637[(0)] = cljs$core$async$state_machine__20215__auto__);

(statearr_28637[(1)] = (1));

return statearr_28637;
});
var cljs$core$async$state_machine__20215__auto____1 = (function (state_28611){
while(true){
var ret_value__20216__auto__ = (function (){try{while(true){
var result__20217__auto__ = switch__20214__auto__.call(null,state_28611);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20217__auto__;
}
break;
}
}catch (e28638){if((e28638 instanceof Object)){
var ex__20218__auto__ = e28638;
var statearr_28639_28660 = state_28611;
(statearr_28639_28660[(5)] = ex__20218__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28611);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28638;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20216__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28661 = state_28611;
state_28611 = G__28661;
continue;
} else {
return ret_value__20216__auto__;
}
break;
}
});
cljs$core$async$state_machine__20215__auto__ = function(state_28611){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20215__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20215__auto____1.call(this,state_28611);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20215__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20215__auto____0;
cljs$core$async$state_machine__20215__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20215__auto____1;
return cljs$core$async$state_machine__20215__auto__;
})()
;})(switch__20214__auto__,c__20279__auto___28645,out))
})();
var state__20281__auto__ = (function (){var statearr_28640 = f__20280__auto__.call(null);
(statearr_28640[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20279__auto___28645);

return statearr_28640;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20281__auto__);
});})(c__20279__auto___28645,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args28662 = [];
var len__17376__auto___28736 = arguments.length;
var i__17377__auto___28737 = (0);
while(true){
if((i__17377__auto___28737 < len__17376__auto___28736)){
args28662.push((arguments[i__17377__auto___28737]));

var G__28738 = (i__17377__auto___28737 + (1));
i__17377__auto___28737 = G__28738;
continue;
} else {
}
break;
}

var G__28664 = args28662.length;
switch (G__28664) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28662.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20279__auto___28740 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20279__auto___28740,out){
return (function (){
var f__20280__auto__ = (function (){var switch__20214__auto__ = ((function (c__20279__auto___28740,out){
return (function (state_28706){
var state_val_28707 = (state_28706[(1)]);
if((state_val_28707 === (7))){
var inst_28702 = (state_28706[(2)]);
var state_28706__$1 = state_28706;
var statearr_28708_28741 = state_28706__$1;
(statearr_28708_28741[(2)] = inst_28702);

(statearr_28708_28741[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28707 === (1))){
var inst_28665 = [];
var inst_28666 = inst_28665;
var inst_28667 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_28706__$1 = (function (){var statearr_28709 = state_28706;
(statearr_28709[(7)] = inst_28667);

(statearr_28709[(8)] = inst_28666);

return statearr_28709;
})();
var statearr_28710_28742 = state_28706__$1;
(statearr_28710_28742[(2)] = null);

(statearr_28710_28742[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28707 === (4))){
var inst_28670 = (state_28706[(9)]);
var inst_28670__$1 = (state_28706[(2)]);
var inst_28671 = (inst_28670__$1 == null);
var inst_28672 = cljs.core.not.call(null,inst_28671);
var state_28706__$1 = (function (){var statearr_28711 = state_28706;
(statearr_28711[(9)] = inst_28670__$1);

return statearr_28711;
})();
if(inst_28672){
var statearr_28712_28743 = state_28706__$1;
(statearr_28712_28743[(1)] = (5));

} else {
var statearr_28713_28744 = state_28706__$1;
(statearr_28713_28744[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28707 === (15))){
var inst_28696 = (state_28706[(2)]);
var state_28706__$1 = state_28706;
var statearr_28714_28745 = state_28706__$1;
(statearr_28714_28745[(2)] = inst_28696);

(statearr_28714_28745[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28707 === (13))){
var state_28706__$1 = state_28706;
var statearr_28715_28746 = state_28706__$1;
(statearr_28715_28746[(2)] = null);

(statearr_28715_28746[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28707 === (6))){
var inst_28666 = (state_28706[(8)]);
var inst_28691 = inst_28666.length;
var inst_28692 = (inst_28691 > (0));
var state_28706__$1 = state_28706;
if(cljs.core.truth_(inst_28692)){
var statearr_28716_28747 = state_28706__$1;
(statearr_28716_28747[(1)] = (12));

} else {
var statearr_28717_28748 = state_28706__$1;
(statearr_28717_28748[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28707 === (3))){
var inst_28704 = (state_28706[(2)]);
var state_28706__$1 = state_28706;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28706__$1,inst_28704);
} else {
if((state_val_28707 === (12))){
var inst_28666 = (state_28706[(8)]);
var inst_28694 = cljs.core.vec.call(null,inst_28666);
var state_28706__$1 = state_28706;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28706__$1,(15),out,inst_28694);
} else {
if((state_val_28707 === (2))){
var state_28706__$1 = state_28706;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28706__$1,(4),ch);
} else {
if((state_val_28707 === (11))){
var inst_28674 = (state_28706[(10)]);
var inst_28670 = (state_28706[(9)]);
var inst_28684 = (state_28706[(2)]);
var inst_28685 = [];
var inst_28686 = inst_28685.push(inst_28670);
var inst_28666 = inst_28685;
var inst_28667 = inst_28674;
var state_28706__$1 = (function (){var statearr_28718 = state_28706;
(statearr_28718[(7)] = inst_28667);

(statearr_28718[(11)] = inst_28686);

(statearr_28718[(8)] = inst_28666);

(statearr_28718[(12)] = inst_28684);

return statearr_28718;
})();
var statearr_28719_28749 = state_28706__$1;
(statearr_28719_28749[(2)] = null);

(statearr_28719_28749[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28707 === (9))){
var inst_28666 = (state_28706[(8)]);
var inst_28682 = cljs.core.vec.call(null,inst_28666);
var state_28706__$1 = state_28706;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28706__$1,(11),out,inst_28682);
} else {
if((state_val_28707 === (5))){
var inst_28667 = (state_28706[(7)]);
var inst_28674 = (state_28706[(10)]);
var inst_28670 = (state_28706[(9)]);
var inst_28674__$1 = f.call(null,inst_28670);
var inst_28675 = cljs.core._EQ_.call(null,inst_28674__$1,inst_28667);
var inst_28676 = cljs.core.keyword_identical_QMARK_.call(null,inst_28667,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_28677 = (inst_28675) || (inst_28676);
var state_28706__$1 = (function (){var statearr_28720 = state_28706;
(statearr_28720[(10)] = inst_28674__$1);

return statearr_28720;
})();
if(cljs.core.truth_(inst_28677)){
var statearr_28721_28750 = state_28706__$1;
(statearr_28721_28750[(1)] = (8));

} else {
var statearr_28722_28751 = state_28706__$1;
(statearr_28722_28751[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28707 === (14))){
var inst_28699 = (state_28706[(2)]);
var inst_28700 = cljs.core.async.close_BANG_.call(null,out);
var state_28706__$1 = (function (){var statearr_28724 = state_28706;
(statearr_28724[(13)] = inst_28699);

return statearr_28724;
})();
var statearr_28725_28752 = state_28706__$1;
(statearr_28725_28752[(2)] = inst_28700);

(statearr_28725_28752[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28707 === (10))){
var inst_28689 = (state_28706[(2)]);
var state_28706__$1 = state_28706;
var statearr_28726_28753 = state_28706__$1;
(statearr_28726_28753[(2)] = inst_28689);

(statearr_28726_28753[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28707 === (8))){
var inst_28674 = (state_28706[(10)]);
var inst_28666 = (state_28706[(8)]);
var inst_28670 = (state_28706[(9)]);
var inst_28679 = inst_28666.push(inst_28670);
var tmp28723 = inst_28666;
var inst_28666__$1 = tmp28723;
var inst_28667 = inst_28674;
var state_28706__$1 = (function (){var statearr_28727 = state_28706;
(statearr_28727[(7)] = inst_28667);

(statearr_28727[(14)] = inst_28679);

(statearr_28727[(8)] = inst_28666__$1);

return statearr_28727;
})();
var statearr_28728_28754 = state_28706__$1;
(statearr_28728_28754[(2)] = null);

(statearr_28728_28754[(1)] = (2));


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
});})(c__20279__auto___28740,out))
;
return ((function (switch__20214__auto__,c__20279__auto___28740,out){
return (function() {
var cljs$core$async$state_machine__20215__auto__ = null;
var cljs$core$async$state_machine__20215__auto____0 = (function (){
var statearr_28732 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28732[(0)] = cljs$core$async$state_machine__20215__auto__);

(statearr_28732[(1)] = (1));

return statearr_28732;
});
var cljs$core$async$state_machine__20215__auto____1 = (function (state_28706){
while(true){
var ret_value__20216__auto__ = (function (){try{while(true){
var result__20217__auto__ = switch__20214__auto__.call(null,state_28706);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20217__auto__;
}
break;
}
}catch (e28733){if((e28733 instanceof Object)){
var ex__20218__auto__ = e28733;
var statearr_28734_28755 = state_28706;
(statearr_28734_28755[(5)] = ex__20218__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28706);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28733;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20216__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28756 = state_28706;
state_28706 = G__28756;
continue;
} else {
return ret_value__20216__auto__;
}
break;
}
});
cljs$core$async$state_machine__20215__auto__ = function(state_28706){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20215__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20215__auto____1.call(this,state_28706);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20215__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20215__auto____0;
cljs$core$async$state_machine__20215__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20215__auto____1;
return cljs$core$async$state_machine__20215__auto__;
})()
;})(switch__20214__auto__,c__20279__auto___28740,out))
})();
var state__20281__auto__ = (function (){var statearr_28735 = f__20280__auto__.call(null);
(statearr_28735[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20279__auto___28740);

return statearr_28735;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20281__auto__);
});})(c__20279__auto___28740,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1444832563337