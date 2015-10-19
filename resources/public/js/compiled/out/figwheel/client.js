// Compiled by ClojureScript 1.7.122 {}
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
var pred__28982 = cljs.core._EQ_;
var expr__28983 = (function (){var or__16318__auto__ = localStorage.getItem("figwheel_autoload");
if(cljs.core.truth_(or__16318__auto__)){
return or__16318__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__28982.call(null,"true",expr__28983))){
return true;
} else {
if(cljs.core.truth_(pred__28982.call(null,"false",expr__28983))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__28983)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__28985__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__28985 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28986__i = 0, G__28986__a = new Array(arguments.length -  0);
while (G__28986__i < G__28986__a.length) {G__28986__a[G__28986__i] = arguments[G__28986__i + 0]; ++G__28986__i;}
  args = new cljs.core.IndexedSeq(G__28986__a,0);
} 
return G__28985__delegate.call(this,args);};
G__28985.cljs$lang$maxFixedArity = 0;
G__28985.cljs$lang$applyTo = (function (arglist__28987){
var args = cljs.core.seq(arglist__28987);
return G__28985__delegate(args);
});
G__28985.cljs$core$IFn$_invoke$arity$variadic = G__28985__delegate;
return G__28985;
})()
;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__28988){
var map__28991 = p__28988;
var map__28991__$1 = ((((!((map__28991 == null)))?((((map__28991.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28991.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28991):map__28991);
var message = cljs.core.get.call(null,map__28991__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__28991__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__16318__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__16318__auto__)){
return or__16318__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__16306__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__16306__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__16306__auto__;
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
var c__20279__auto___29153 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20279__auto___29153,ch){
return (function (){
var f__20280__auto__ = (function (){var switch__20214__auto__ = ((function (c__20279__auto___29153,ch){
return (function (state_29122){
var state_val_29123 = (state_29122[(1)]);
if((state_val_29123 === (7))){
var inst_29118 = (state_29122[(2)]);
var state_29122__$1 = state_29122;
var statearr_29124_29154 = state_29122__$1;
(statearr_29124_29154[(2)] = inst_29118);

(statearr_29124_29154[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29123 === (1))){
var state_29122__$1 = state_29122;
var statearr_29125_29155 = state_29122__$1;
(statearr_29125_29155[(2)] = null);

(statearr_29125_29155[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29123 === (4))){
var inst_29075 = (state_29122[(7)]);
var inst_29075__$1 = (state_29122[(2)]);
var state_29122__$1 = (function (){var statearr_29126 = state_29122;
(statearr_29126[(7)] = inst_29075__$1);

return statearr_29126;
})();
if(cljs.core.truth_(inst_29075__$1)){
var statearr_29127_29156 = state_29122__$1;
(statearr_29127_29156[(1)] = (5));

} else {
var statearr_29128_29157 = state_29122__$1;
(statearr_29128_29157[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29123 === (15))){
var inst_29082 = (state_29122[(8)]);
var inst_29097 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_29082);
var inst_29098 = cljs.core.first.call(null,inst_29097);
var inst_29099 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_29098);
var inst_29100 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_29099)].join('');
var inst_29101 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_29100);
var state_29122__$1 = state_29122;
var statearr_29129_29158 = state_29122__$1;
(statearr_29129_29158[(2)] = inst_29101);

(statearr_29129_29158[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29123 === (13))){
var inst_29106 = (state_29122[(2)]);
var state_29122__$1 = state_29122;
var statearr_29130_29159 = state_29122__$1;
(statearr_29130_29159[(2)] = inst_29106);

(statearr_29130_29159[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29123 === (6))){
var state_29122__$1 = state_29122;
var statearr_29131_29160 = state_29122__$1;
(statearr_29131_29160[(2)] = null);

(statearr_29131_29160[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29123 === (17))){
var inst_29104 = (state_29122[(2)]);
var state_29122__$1 = state_29122;
var statearr_29132_29161 = state_29122__$1;
(statearr_29132_29161[(2)] = inst_29104);

(statearr_29132_29161[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29123 === (3))){
var inst_29120 = (state_29122[(2)]);
var state_29122__$1 = state_29122;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29122__$1,inst_29120);
} else {
if((state_val_29123 === (12))){
var inst_29081 = (state_29122[(9)]);
var inst_29095 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_29081,opts);
var state_29122__$1 = state_29122;
if(cljs.core.truth_(inst_29095)){
var statearr_29133_29162 = state_29122__$1;
(statearr_29133_29162[(1)] = (15));

} else {
var statearr_29134_29163 = state_29122__$1;
(statearr_29134_29163[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29123 === (2))){
var state_29122__$1 = state_29122;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29122__$1,(4),ch);
} else {
if((state_val_29123 === (11))){
var inst_29082 = (state_29122[(8)]);
var inst_29087 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29088 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_29082);
var inst_29089 = cljs.core.async.timeout.call(null,(1000));
var inst_29090 = [inst_29088,inst_29089];
var inst_29091 = (new cljs.core.PersistentVector(null,2,(5),inst_29087,inst_29090,null));
var state_29122__$1 = state_29122;
return cljs.core.async.ioc_alts_BANG_.call(null,state_29122__$1,(14),inst_29091);
} else {
if((state_val_29123 === (9))){
var inst_29082 = (state_29122[(8)]);
var inst_29108 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_29109 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_29082);
var inst_29110 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_29109);
var inst_29111 = [cljs.core.str("Not loading: "),cljs.core.str(inst_29110)].join('');
var inst_29112 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_29111);
var state_29122__$1 = (function (){var statearr_29135 = state_29122;
(statearr_29135[(10)] = inst_29108);

return statearr_29135;
})();
var statearr_29136_29164 = state_29122__$1;
(statearr_29136_29164[(2)] = inst_29112);

(statearr_29136_29164[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29123 === (5))){
var inst_29075 = (state_29122[(7)]);
var inst_29077 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_29078 = (new cljs.core.PersistentArrayMap(null,2,inst_29077,null));
var inst_29079 = (new cljs.core.PersistentHashSet(null,inst_29078,null));
var inst_29080 = figwheel.client.focus_msgs.call(null,inst_29079,inst_29075);
var inst_29081 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_29080);
var inst_29082 = cljs.core.first.call(null,inst_29080);
var inst_29083 = figwheel.client.autoload_QMARK_.call(null);
var state_29122__$1 = (function (){var statearr_29137 = state_29122;
(statearr_29137[(8)] = inst_29082);

(statearr_29137[(9)] = inst_29081);

return statearr_29137;
})();
if(cljs.core.truth_(inst_29083)){
var statearr_29138_29165 = state_29122__$1;
(statearr_29138_29165[(1)] = (8));

} else {
var statearr_29139_29166 = state_29122__$1;
(statearr_29139_29166[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29123 === (14))){
var inst_29093 = (state_29122[(2)]);
var state_29122__$1 = state_29122;
var statearr_29140_29167 = state_29122__$1;
(statearr_29140_29167[(2)] = inst_29093);

(statearr_29140_29167[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29123 === (16))){
var state_29122__$1 = state_29122;
var statearr_29141_29168 = state_29122__$1;
(statearr_29141_29168[(2)] = null);

(statearr_29141_29168[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29123 === (10))){
var inst_29114 = (state_29122[(2)]);
var state_29122__$1 = (function (){var statearr_29142 = state_29122;
(statearr_29142[(11)] = inst_29114);

return statearr_29142;
})();
var statearr_29143_29169 = state_29122__$1;
(statearr_29143_29169[(2)] = null);

(statearr_29143_29169[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29123 === (8))){
var inst_29081 = (state_29122[(9)]);
var inst_29085 = figwheel.client.reload_file_state_QMARK_.call(null,inst_29081,opts);
var state_29122__$1 = state_29122;
if(cljs.core.truth_(inst_29085)){
var statearr_29144_29170 = state_29122__$1;
(statearr_29144_29170[(1)] = (11));

} else {
var statearr_29145_29171 = state_29122__$1;
(statearr_29145_29171[(1)] = (12));

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
});})(c__20279__auto___29153,ch))
;
return ((function (switch__20214__auto__,c__20279__auto___29153,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__20215__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__20215__auto____0 = (function (){
var statearr_29149 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29149[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__20215__auto__);

(statearr_29149[(1)] = (1));

return statearr_29149;
});
var figwheel$client$file_reloader_plugin_$_state_machine__20215__auto____1 = (function (state_29122){
while(true){
var ret_value__20216__auto__ = (function (){try{while(true){
var result__20217__auto__ = switch__20214__auto__.call(null,state_29122);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20217__auto__;
}
break;
}
}catch (e29150){if((e29150 instanceof Object)){
var ex__20218__auto__ = e29150;
var statearr_29151_29172 = state_29122;
(statearr_29151_29172[(5)] = ex__20218__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29122);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29150;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20216__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29173 = state_29122;
state_29122 = G__29173;
continue;
} else {
return ret_value__20216__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__20215__auto__ = function(state_29122){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__20215__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__20215__auto____1.call(this,state_29122);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__20215__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__20215__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__20215__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__20215__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__20215__auto__;
})()
;})(switch__20214__auto__,c__20279__auto___29153,ch))
})();
var state__20281__auto__ = (function (){var statearr_29152 = f__20280__auto__.call(null);
(statearr_29152[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20279__auto___29153);

return statearr_29152;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20281__auto__);
});})(c__20279__auto___29153,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__29174_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__29174_SHARP_));
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
var base_path_29181 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_29181){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_29179 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_29180 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_29179,_STAR_print_newline_STAR_29180,base_path_29181){
return (function() { 
var G__29182__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__29182 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29183__i = 0, G__29183__a = new Array(arguments.length -  0);
while (G__29183__i < G__29183__a.length) {G__29183__a[G__29183__i] = arguments[G__29183__i + 0]; ++G__29183__i;}
  args = new cljs.core.IndexedSeq(G__29183__a,0);
} 
return G__29182__delegate.call(this,args);};
G__29182.cljs$lang$maxFixedArity = 0;
G__29182.cljs$lang$applyTo = (function (arglist__29184){
var args = cljs.core.seq(arglist__29184);
return G__29182__delegate(args);
});
G__29182.cljs$core$IFn$_invoke$arity$variadic = G__29182__delegate;
return G__29182;
})()
;})(_STAR_print_fn_STAR_29179,_STAR_print_newline_STAR_29180,base_path_29181))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(figwheel.client.utils.eval_helper.call(null,code,opts))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_29180;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_29179;
}}catch (e29178){if((e29178 instanceof Error)){
var e = e29178;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_29181], null));
} else {
var e = e29178;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_29181))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__29185){
var map__29192 = p__29185;
var map__29192__$1 = ((((!((map__29192 == null)))?((((map__29192.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29192.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29192):map__29192);
var opts = map__29192__$1;
var build_id = cljs.core.get.call(null,map__29192__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__29192,map__29192__$1,opts,build_id){
return (function (p__29194){
var vec__29195 = p__29194;
var map__29196 = cljs.core.nth.call(null,vec__29195,(0),null);
var map__29196__$1 = ((((!((map__29196 == null)))?((((map__29196.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29196.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29196):map__29196);
var msg = map__29196__$1;
var msg_name = cljs.core.get.call(null,map__29196__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__29195,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__29195,map__29196,map__29196__$1,msg,msg_name,_,map__29192,map__29192__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__29195,map__29196,map__29196__$1,msg,msg_name,_,map__29192,map__29192__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__29192,map__29192__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__29202){
var vec__29203 = p__29202;
var map__29204 = cljs.core.nth.call(null,vec__29203,(0),null);
var map__29204__$1 = ((((!((map__29204 == null)))?((((map__29204.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29204.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29204):map__29204);
var msg = map__29204__$1;
var msg_name = cljs.core.get.call(null,map__29204__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__29203,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__29206){
var map__29216 = p__29206;
var map__29216__$1 = ((((!((map__29216 == null)))?((((map__29216.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29216.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29216):map__29216);
var on_compile_warning = cljs.core.get.call(null,map__29216__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__29216__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__29216,map__29216__$1,on_compile_warning,on_compile_fail){
return (function (p__29218){
var vec__29219 = p__29218;
var map__29220 = cljs.core.nth.call(null,vec__29219,(0),null);
var map__29220__$1 = ((((!((map__29220 == null)))?((((map__29220.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29220.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29220):map__29220);
var msg = map__29220__$1;
var msg_name = cljs.core.get.call(null,map__29220__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__29219,(1));
var pred__29222 = cljs.core._EQ_;
var expr__29223 = msg_name;
if(cljs.core.truth_(pred__29222.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__29223))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__29222.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__29223))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__29216,map__29216__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__20279__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20279__auto__,msg_hist,msg_names,msg){
return (function (){
var f__20280__auto__ = (function (){var switch__20214__auto__ = ((function (c__20279__auto__,msg_hist,msg_names,msg){
return (function (state_29439){
var state_val_29440 = (state_29439[(1)]);
if((state_val_29440 === (7))){
var inst_29363 = (state_29439[(2)]);
var state_29439__$1 = state_29439;
if(cljs.core.truth_(inst_29363)){
var statearr_29441_29487 = state_29439__$1;
(statearr_29441_29487[(1)] = (8));

} else {
var statearr_29442_29488 = state_29439__$1;
(statearr_29442_29488[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29440 === (20))){
var inst_29433 = (state_29439[(2)]);
var state_29439__$1 = state_29439;
var statearr_29443_29489 = state_29439__$1;
(statearr_29443_29489[(2)] = inst_29433);

(statearr_29443_29489[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29440 === (27))){
var inst_29429 = (state_29439[(2)]);
var state_29439__$1 = state_29439;
var statearr_29444_29490 = state_29439__$1;
(statearr_29444_29490[(2)] = inst_29429);

(statearr_29444_29490[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29440 === (1))){
var inst_29356 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_29439__$1 = state_29439;
if(cljs.core.truth_(inst_29356)){
var statearr_29445_29491 = state_29439__$1;
(statearr_29445_29491[(1)] = (2));

} else {
var statearr_29446_29492 = state_29439__$1;
(statearr_29446_29492[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29440 === (24))){
var inst_29431 = (state_29439[(2)]);
var state_29439__$1 = state_29439;
var statearr_29447_29493 = state_29439__$1;
(statearr_29447_29493[(2)] = inst_29431);

(statearr_29447_29493[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29440 === (4))){
var inst_29437 = (state_29439[(2)]);
var state_29439__$1 = state_29439;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29439__$1,inst_29437);
} else {
if((state_val_29440 === (15))){
var inst_29435 = (state_29439[(2)]);
var state_29439__$1 = state_29439;
var statearr_29448_29494 = state_29439__$1;
(statearr_29448_29494[(2)] = inst_29435);

(statearr_29448_29494[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29440 === (21))){
var inst_29394 = (state_29439[(2)]);
var state_29439__$1 = state_29439;
var statearr_29449_29495 = state_29439__$1;
(statearr_29449_29495[(2)] = inst_29394);

(statearr_29449_29495[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29440 === (31))){
var inst_29418 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_29439__$1 = state_29439;
if(cljs.core.truth_(inst_29418)){
var statearr_29450_29496 = state_29439__$1;
(statearr_29450_29496[(1)] = (34));

} else {
var statearr_29451_29497 = state_29439__$1;
(statearr_29451_29497[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29440 === (32))){
var inst_29427 = (state_29439[(2)]);
var state_29439__$1 = state_29439;
var statearr_29452_29498 = state_29439__$1;
(statearr_29452_29498[(2)] = inst_29427);

(statearr_29452_29498[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29440 === (33))){
var inst_29416 = (state_29439[(2)]);
var state_29439__$1 = state_29439;
var statearr_29453_29499 = state_29439__$1;
(statearr_29453_29499[(2)] = inst_29416);

(statearr_29453_29499[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29440 === (13))){
var inst_29377 = figwheel.client.heads_up.clear.call(null);
var state_29439__$1 = state_29439;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29439__$1,(16),inst_29377);
} else {
if((state_val_29440 === (22))){
var inst_29398 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29399 = figwheel.client.heads_up.append_message.call(null,inst_29398);
var state_29439__$1 = state_29439;
var statearr_29454_29500 = state_29439__$1;
(statearr_29454_29500[(2)] = inst_29399);

(statearr_29454_29500[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29440 === (36))){
var inst_29425 = (state_29439[(2)]);
var state_29439__$1 = state_29439;
var statearr_29455_29501 = state_29439__$1;
(statearr_29455_29501[(2)] = inst_29425);

(statearr_29455_29501[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29440 === (29))){
var inst_29409 = (state_29439[(2)]);
var state_29439__$1 = state_29439;
var statearr_29456_29502 = state_29439__$1;
(statearr_29456_29502[(2)] = inst_29409);

(statearr_29456_29502[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29440 === (6))){
var inst_29358 = (state_29439[(7)]);
var state_29439__$1 = state_29439;
var statearr_29457_29503 = state_29439__$1;
(statearr_29457_29503[(2)] = inst_29358);

(statearr_29457_29503[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29440 === (28))){
var inst_29405 = (state_29439[(2)]);
var inst_29406 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29407 = figwheel.client.heads_up.display_warning.call(null,inst_29406);
var state_29439__$1 = (function (){var statearr_29458 = state_29439;
(statearr_29458[(8)] = inst_29405);

return statearr_29458;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29439__$1,(29),inst_29407);
} else {
if((state_val_29440 === (25))){
var inst_29403 = figwheel.client.heads_up.clear.call(null);
var state_29439__$1 = state_29439;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29439__$1,(28),inst_29403);
} else {
if((state_val_29440 === (34))){
var inst_29420 = figwheel.client.heads_up.flash_loaded.call(null);
var state_29439__$1 = state_29439;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29439__$1,(37),inst_29420);
} else {
if((state_val_29440 === (17))){
var inst_29385 = (state_29439[(2)]);
var state_29439__$1 = state_29439;
var statearr_29459_29504 = state_29439__$1;
(statearr_29459_29504[(2)] = inst_29385);

(statearr_29459_29504[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29440 === (3))){
var inst_29375 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_29439__$1 = state_29439;
if(cljs.core.truth_(inst_29375)){
var statearr_29460_29505 = state_29439__$1;
(statearr_29460_29505[(1)] = (13));

} else {
var statearr_29461_29506 = state_29439__$1;
(statearr_29461_29506[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29440 === (12))){
var inst_29371 = (state_29439[(2)]);
var state_29439__$1 = state_29439;
var statearr_29462_29507 = state_29439__$1;
(statearr_29462_29507[(2)] = inst_29371);

(statearr_29462_29507[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29440 === (2))){
var inst_29358 = (state_29439[(7)]);
var inst_29358__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_29439__$1 = (function (){var statearr_29463 = state_29439;
(statearr_29463[(7)] = inst_29358__$1);

return statearr_29463;
})();
if(cljs.core.truth_(inst_29358__$1)){
var statearr_29464_29508 = state_29439__$1;
(statearr_29464_29508[(1)] = (5));

} else {
var statearr_29465_29509 = state_29439__$1;
(statearr_29465_29509[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29440 === (23))){
var inst_29401 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_29439__$1 = state_29439;
if(cljs.core.truth_(inst_29401)){
var statearr_29466_29510 = state_29439__$1;
(statearr_29466_29510[(1)] = (25));

} else {
var statearr_29467_29511 = state_29439__$1;
(statearr_29467_29511[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29440 === (35))){
var state_29439__$1 = state_29439;
var statearr_29468_29512 = state_29439__$1;
(statearr_29468_29512[(2)] = null);

(statearr_29468_29512[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29440 === (19))){
var inst_29396 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_29439__$1 = state_29439;
if(cljs.core.truth_(inst_29396)){
var statearr_29469_29513 = state_29439__$1;
(statearr_29469_29513[(1)] = (22));

} else {
var statearr_29470_29514 = state_29439__$1;
(statearr_29470_29514[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29440 === (11))){
var inst_29367 = (state_29439[(2)]);
var state_29439__$1 = state_29439;
var statearr_29471_29515 = state_29439__$1;
(statearr_29471_29515[(2)] = inst_29367);

(statearr_29471_29515[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29440 === (9))){
var inst_29369 = figwheel.client.heads_up.clear.call(null);
var state_29439__$1 = state_29439;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29439__$1,(12),inst_29369);
} else {
if((state_val_29440 === (5))){
var inst_29360 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_29439__$1 = state_29439;
var statearr_29472_29516 = state_29439__$1;
(statearr_29472_29516[(2)] = inst_29360);

(statearr_29472_29516[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29440 === (14))){
var inst_29387 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_29439__$1 = state_29439;
if(cljs.core.truth_(inst_29387)){
var statearr_29473_29517 = state_29439__$1;
(statearr_29473_29517[(1)] = (18));

} else {
var statearr_29474_29518 = state_29439__$1;
(statearr_29474_29518[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29440 === (26))){
var inst_29411 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_29439__$1 = state_29439;
if(cljs.core.truth_(inst_29411)){
var statearr_29475_29519 = state_29439__$1;
(statearr_29475_29519[(1)] = (30));

} else {
var statearr_29476_29520 = state_29439__$1;
(statearr_29476_29520[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29440 === (16))){
var inst_29379 = (state_29439[(2)]);
var inst_29380 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29381 = figwheel.client.format_messages.call(null,inst_29380);
var inst_29382 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29383 = figwheel.client.heads_up.display_error.call(null,inst_29381,inst_29382);
var state_29439__$1 = (function (){var statearr_29477 = state_29439;
(statearr_29477[(9)] = inst_29379);

return statearr_29477;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29439__$1,(17),inst_29383);
} else {
if((state_val_29440 === (30))){
var inst_29413 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29414 = figwheel.client.heads_up.display_warning.call(null,inst_29413);
var state_29439__$1 = state_29439;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29439__$1,(33),inst_29414);
} else {
if((state_val_29440 === (10))){
var inst_29373 = (state_29439[(2)]);
var state_29439__$1 = state_29439;
var statearr_29478_29521 = state_29439__$1;
(statearr_29478_29521[(2)] = inst_29373);

(statearr_29478_29521[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29440 === (18))){
var inst_29389 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29390 = figwheel.client.format_messages.call(null,inst_29389);
var inst_29391 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29392 = figwheel.client.heads_up.display_error.call(null,inst_29390,inst_29391);
var state_29439__$1 = state_29439;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29439__$1,(21),inst_29392);
} else {
if((state_val_29440 === (37))){
var inst_29422 = (state_29439[(2)]);
var state_29439__$1 = state_29439;
var statearr_29479_29522 = state_29439__$1;
(statearr_29479_29522[(2)] = inst_29422);

(statearr_29479_29522[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29440 === (8))){
var inst_29365 = figwheel.client.heads_up.flash_loaded.call(null);
var state_29439__$1 = state_29439;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29439__$1,(11),inst_29365);
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
});})(c__20279__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__20214__auto__,c__20279__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20215__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20215__auto____0 = (function (){
var statearr_29483 = [null,null,null,null,null,null,null,null,null,null];
(statearr_29483[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20215__auto__);

(statearr_29483[(1)] = (1));

return statearr_29483;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20215__auto____1 = (function (state_29439){
while(true){
var ret_value__20216__auto__ = (function (){try{while(true){
var result__20217__auto__ = switch__20214__auto__.call(null,state_29439);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20217__auto__;
}
break;
}
}catch (e29484){if((e29484 instanceof Object)){
var ex__20218__auto__ = e29484;
var statearr_29485_29523 = state_29439;
(statearr_29485_29523[(5)] = ex__20218__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29439);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29484;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20216__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29524 = state_29439;
state_29439 = G__29524;
continue;
} else {
return ret_value__20216__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20215__auto__ = function(state_29439){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20215__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20215__auto____1.call(this,state_29439);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20215__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20215__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20215__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20215__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20215__auto__;
})()
;})(switch__20214__auto__,c__20279__auto__,msg_hist,msg_names,msg))
})();
var state__20281__auto__ = (function (){var statearr_29486 = f__20280__auto__.call(null);
(statearr_29486[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20279__auto__);

return statearr_29486;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20281__auto__);
});})(c__20279__auto__,msg_hist,msg_names,msg))
);

return c__20279__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__20279__auto___29587 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20279__auto___29587,ch){
return (function (){
var f__20280__auto__ = (function (){var switch__20214__auto__ = ((function (c__20279__auto___29587,ch){
return (function (state_29570){
var state_val_29571 = (state_29570[(1)]);
if((state_val_29571 === (1))){
var state_29570__$1 = state_29570;
var statearr_29572_29588 = state_29570__$1;
(statearr_29572_29588[(2)] = null);

(statearr_29572_29588[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29571 === (2))){
var state_29570__$1 = state_29570;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29570__$1,(4),ch);
} else {
if((state_val_29571 === (3))){
var inst_29568 = (state_29570[(2)]);
var state_29570__$1 = state_29570;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29570__$1,inst_29568);
} else {
if((state_val_29571 === (4))){
var inst_29558 = (state_29570[(7)]);
var inst_29558__$1 = (state_29570[(2)]);
var state_29570__$1 = (function (){var statearr_29573 = state_29570;
(statearr_29573[(7)] = inst_29558__$1);

return statearr_29573;
})();
if(cljs.core.truth_(inst_29558__$1)){
var statearr_29574_29589 = state_29570__$1;
(statearr_29574_29589[(1)] = (5));

} else {
var statearr_29575_29590 = state_29570__$1;
(statearr_29575_29590[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29571 === (5))){
var inst_29558 = (state_29570[(7)]);
var inst_29560 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_29558);
var state_29570__$1 = state_29570;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29570__$1,(8),inst_29560);
} else {
if((state_val_29571 === (6))){
var state_29570__$1 = state_29570;
var statearr_29576_29591 = state_29570__$1;
(statearr_29576_29591[(2)] = null);

(statearr_29576_29591[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29571 === (7))){
var inst_29566 = (state_29570[(2)]);
var state_29570__$1 = state_29570;
var statearr_29577_29592 = state_29570__$1;
(statearr_29577_29592[(2)] = inst_29566);

(statearr_29577_29592[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29571 === (8))){
var inst_29562 = (state_29570[(2)]);
var state_29570__$1 = (function (){var statearr_29578 = state_29570;
(statearr_29578[(8)] = inst_29562);

return statearr_29578;
})();
var statearr_29579_29593 = state_29570__$1;
(statearr_29579_29593[(2)] = null);

(statearr_29579_29593[(1)] = (2));


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
});})(c__20279__auto___29587,ch))
;
return ((function (switch__20214__auto__,c__20279__auto___29587,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__20215__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__20215__auto____0 = (function (){
var statearr_29583 = [null,null,null,null,null,null,null,null,null];
(statearr_29583[(0)] = figwheel$client$heads_up_plugin_$_state_machine__20215__auto__);

(statearr_29583[(1)] = (1));

return statearr_29583;
});
var figwheel$client$heads_up_plugin_$_state_machine__20215__auto____1 = (function (state_29570){
while(true){
var ret_value__20216__auto__ = (function (){try{while(true){
var result__20217__auto__ = switch__20214__auto__.call(null,state_29570);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20217__auto__;
}
break;
}
}catch (e29584){if((e29584 instanceof Object)){
var ex__20218__auto__ = e29584;
var statearr_29585_29594 = state_29570;
(statearr_29585_29594[(5)] = ex__20218__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29570);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29584;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20216__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29595 = state_29570;
state_29570 = G__29595;
continue;
} else {
return ret_value__20216__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__20215__auto__ = function(state_29570){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__20215__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__20215__auto____1.call(this,state_29570);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__20215__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__20215__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__20215__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__20215__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__20215__auto__;
})()
;})(switch__20214__auto__,c__20279__auto___29587,ch))
})();
var state__20281__auto__ = (function (){var statearr_29586 = f__20280__auto__.call(null);
(statearr_29586[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20279__auto___29587);

return statearr_29586;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20281__auto__);
});})(c__20279__auto___29587,ch))
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
var c__20279__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20279__auto__){
return (function (){
var f__20280__auto__ = (function (){var switch__20214__auto__ = ((function (c__20279__auto__){
return (function (state_29616){
var state_val_29617 = (state_29616[(1)]);
if((state_val_29617 === (1))){
var inst_29611 = cljs.core.async.timeout.call(null,(3000));
var state_29616__$1 = state_29616;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29616__$1,(2),inst_29611);
} else {
if((state_val_29617 === (2))){
var inst_29613 = (state_29616[(2)]);
var inst_29614 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_29616__$1 = (function (){var statearr_29618 = state_29616;
(statearr_29618[(7)] = inst_29613);

return statearr_29618;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29616__$1,inst_29614);
} else {
return null;
}
}
});})(c__20279__auto__))
;
return ((function (switch__20214__auto__,c__20279__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__20215__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__20215__auto____0 = (function (){
var statearr_29622 = [null,null,null,null,null,null,null,null];
(statearr_29622[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__20215__auto__);

(statearr_29622[(1)] = (1));

return statearr_29622;
});
var figwheel$client$enforce_project_plugin_$_state_machine__20215__auto____1 = (function (state_29616){
while(true){
var ret_value__20216__auto__ = (function (){try{while(true){
var result__20217__auto__ = switch__20214__auto__.call(null,state_29616);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20217__auto__;
}
break;
}
}catch (e29623){if((e29623 instanceof Object)){
var ex__20218__auto__ = e29623;
var statearr_29624_29626 = state_29616;
(statearr_29624_29626[(5)] = ex__20218__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29616);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29623;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20216__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29627 = state_29616;
state_29616 = G__29627;
continue;
} else {
return ret_value__20216__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__20215__auto__ = function(state_29616){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__20215__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__20215__auto____1.call(this,state_29616);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__20215__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__20215__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__20215__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__20215__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__20215__auto__;
})()
;})(switch__20214__auto__,c__20279__auto__))
})();
var state__20281__auto__ = (function (){var statearr_29625 = f__20280__auto__.call(null);
(statearr_29625[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20279__auto__);

return statearr_29625;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20281__auto__);
});})(c__20279__auto__))
);

return c__20279__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__29628){
var map__29635 = p__29628;
var map__29635__$1 = ((((!((map__29635 == null)))?((((map__29635.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29635.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29635):map__29635);
var ed = map__29635__$1;
var formatted_exception = cljs.core.get.call(null,map__29635__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__29635__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__29635__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__29637_29641 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__29638_29642 = null;
var count__29639_29643 = (0);
var i__29640_29644 = (0);
while(true){
if((i__29640_29644 < count__29639_29643)){
var msg_29645 = cljs.core._nth.call(null,chunk__29638_29642,i__29640_29644);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_29645);

var G__29646 = seq__29637_29641;
var G__29647 = chunk__29638_29642;
var G__29648 = count__29639_29643;
var G__29649 = (i__29640_29644 + (1));
seq__29637_29641 = G__29646;
chunk__29638_29642 = G__29647;
count__29639_29643 = G__29648;
i__29640_29644 = G__29649;
continue;
} else {
var temp__4425__auto___29650 = cljs.core.seq.call(null,seq__29637_29641);
if(temp__4425__auto___29650){
var seq__29637_29651__$1 = temp__4425__auto___29650;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29637_29651__$1)){
var c__17121__auto___29652 = cljs.core.chunk_first.call(null,seq__29637_29651__$1);
var G__29653 = cljs.core.chunk_rest.call(null,seq__29637_29651__$1);
var G__29654 = c__17121__auto___29652;
var G__29655 = cljs.core.count.call(null,c__17121__auto___29652);
var G__29656 = (0);
seq__29637_29641 = G__29653;
chunk__29638_29642 = G__29654;
count__29639_29643 = G__29655;
i__29640_29644 = G__29656;
continue;
} else {
var msg_29657 = cljs.core.first.call(null,seq__29637_29651__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_29657);

var G__29658 = cljs.core.next.call(null,seq__29637_29651__$1);
var G__29659 = null;
var G__29660 = (0);
var G__29661 = (0);
seq__29637_29641 = G__29658;
chunk__29638_29642 = G__29659;
count__29639_29643 = G__29660;
i__29640_29644 = G__29661;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__29662){
var map__29665 = p__29662;
var map__29665__$1 = ((((!((map__29665 == null)))?((((map__29665.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29665.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29665):map__29665);
var w = map__29665__$1;
var message = cljs.core.get.call(null,map__29665__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
if(cljs.core.truth_((function (){var and__16306__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__16306__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__16306__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__29673 = cljs.core.seq.call(null,plugins);
var chunk__29674 = null;
var count__29675 = (0);
var i__29676 = (0);
while(true){
if((i__29676 < count__29675)){
var vec__29677 = cljs.core._nth.call(null,chunk__29674,i__29676);
var k = cljs.core.nth.call(null,vec__29677,(0),null);
var plugin = cljs.core.nth.call(null,vec__29677,(1),null);
if(cljs.core.truth_(plugin)){
var pl_29679 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__29673,chunk__29674,count__29675,i__29676,pl_29679,vec__29677,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_29679.call(null,msg_hist);
});})(seq__29673,chunk__29674,count__29675,i__29676,pl_29679,vec__29677,k,plugin))
);
} else {
}

var G__29680 = seq__29673;
var G__29681 = chunk__29674;
var G__29682 = count__29675;
var G__29683 = (i__29676 + (1));
seq__29673 = G__29680;
chunk__29674 = G__29681;
count__29675 = G__29682;
i__29676 = G__29683;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__29673);
if(temp__4425__auto__){
var seq__29673__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29673__$1)){
var c__17121__auto__ = cljs.core.chunk_first.call(null,seq__29673__$1);
var G__29684 = cljs.core.chunk_rest.call(null,seq__29673__$1);
var G__29685 = c__17121__auto__;
var G__29686 = cljs.core.count.call(null,c__17121__auto__);
var G__29687 = (0);
seq__29673 = G__29684;
chunk__29674 = G__29685;
count__29675 = G__29686;
i__29676 = G__29687;
continue;
} else {
var vec__29678 = cljs.core.first.call(null,seq__29673__$1);
var k = cljs.core.nth.call(null,vec__29678,(0),null);
var plugin = cljs.core.nth.call(null,vec__29678,(1),null);
if(cljs.core.truth_(plugin)){
var pl_29688 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__29673,chunk__29674,count__29675,i__29676,pl_29688,vec__29678,k,plugin,seq__29673__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_29688.call(null,msg_hist);
});})(seq__29673,chunk__29674,count__29675,i__29676,pl_29688,vec__29678,k,plugin,seq__29673__$1,temp__4425__auto__))
);
} else {
}

var G__29689 = cljs.core.next.call(null,seq__29673__$1);
var G__29690 = null;
var G__29691 = (0);
var G__29692 = (0);
seq__29673 = G__29689;
chunk__29674 = G__29690;
count__29675 = G__29691;
i__29676 = G__29692;
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
var args29693 = [];
var len__17376__auto___29696 = arguments.length;
var i__17377__auto___29697 = (0);
while(true){
if((i__17377__auto___29697 < len__17376__auto___29696)){
args29693.push((arguments[i__17377__auto___29697]));

var G__29698 = (i__17377__auto___29697 + (1));
i__17377__auto___29697 = G__29698;
continue;
} else {
}
break;
}

var G__29695 = args29693.length;
switch (G__29695) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29693.length)].join('')));

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
var args__17383__auto__ = [];
var len__17376__auto___29704 = arguments.length;
var i__17377__auto___29705 = (0);
while(true){
if((i__17377__auto___29705 < len__17376__auto___29704)){
args__17383__auto__.push((arguments[i__17377__auto___29705]));

var G__29706 = (i__17377__auto___29705 + (1));
i__17377__auto___29705 = G__29706;
continue;
} else {
}
break;
}

var argseq__17384__auto__ = ((((0) < args__17383__auto__.length))?(new cljs.core.IndexedSeq(args__17383__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__17384__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__29701){
var map__29702 = p__29701;
var map__29702__$1 = ((((!((map__29702 == null)))?((((map__29702.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29702.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29702):map__29702);
var opts = map__29702__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq29700){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29700));
});

//# sourceMappingURL=client.js.map?rel=1444832566417