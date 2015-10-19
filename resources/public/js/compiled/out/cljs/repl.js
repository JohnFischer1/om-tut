// Compiled by ClojureScript 1.7.122 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
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
var seq__30092_30106 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__30093_30107 = null;
var count__30094_30108 = (0);
var i__30095_30109 = (0);
while(true){
if((i__30095_30109 < count__30094_30108)){
var f_30110 = cljs.core._nth.call(null,chunk__30093_30107,i__30095_30109);
cljs.core.println.call(null,"  ",f_30110);

var G__30111 = seq__30092_30106;
var G__30112 = chunk__30093_30107;
var G__30113 = count__30094_30108;
var G__30114 = (i__30095_30109 + (1));
seq__30092_30106 = G__30111;
chunk__30093_30107 = G__30112;
count__30094_30108 = G__30113;
i__30095_30109 = G__30114;
continue;
} else {
var temp__4425__auto___30115 = cljs.core.seq.call(null,seq__30092_30106);
if(temp__4425__auto___30115){
var seq__30092_30116__$1 = temp__4425__auto___30115;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30092_30116__$1)){
var c__17121__auto___30117 = cljs.core.chunk_first.call(null,seq__30092_30116__$1);
var G__30118 = cljs.core.chunk_rest.call(null,seq__30092_30116__$1);
var G__30119 = c__17121__auto___30117;
var G__30120 = cljs.core.count.call(null,c__17121__auto___30117);
var G__30121 = (0);
seq__30092_30106 = G__30118;
chunk__30093_30107 = G__30119;
count__30094_30108 = G__30120;
i__30095_30109 = G__30121;
continue;
} else {
var f_30122 = cljs.core.first.call(null,seq__30092_30116__$1);
cljs.core.println.call(null,"  ",f_30122);

var G__30123 = cljs.core.next.call(null,seq__30092_30116__$1);
var G__30124 = null;
var G__30125 = (0);
var G__30126 = (0);
seq__30092_30106 = G__30123;
chunk__30093_30107 = G__30124;
count__30094_30108 = G__30125;
i__30095_30109 = G__30126;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_30127 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__16318__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__16318__auto__)){
return or__16318__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_30127);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_30127)))?cljs.core.second.call(null,arglists_30127):arglists_30127));
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
var seq__30096 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__30097 = null;
var count__30098 = (0);
var i__30099 = (0);
while(true){
if((i__30099 < count__30098)){
var vec__30100 = cljs.core._nth.call(null,chunk__30097,i__30099);
var name = cljs.core.nth.call(null,vec__30100,(0),null);
var map__30101 = cljs.core.nth.call(null,vec__30100,(1),null);
var map__30101__$1 = ((((!((map__30101 == null)))?((((map__30101.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30101.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30101):map__30101);
var doc = cljs.core.get.call(null,map__30101__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__30101__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__30128 = seq__30096;
var G__30129 = chunk__30097;
var G__30130 = count__30098;
var G__30131 = (i__30099 + (1));
seq__30096 = G__30128;
chunk__30097 = G__30129;
count__30098 = G__30130;
i__30099 = G__30131;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__30096);
if(temp__4425__auto__){
var seq__30096__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30096__$1)){
var c__17121__auto__ = cljs.core.chunk_first.call(null,seq__30096__$1);
var G__30132 = cljs.core.chunk_rest.call(null,seq__30096__$1);
var G__30133 = c__17121__auto__;
var G__30134 = cljs.core.count.call(null,c__17121__auto__);
var G__30135 = (0);
seq__30096 = G__30132;
chunk__30097 = G__30133;
count__30098 = G__30134;
i__30099 = G__30135;
continue;
} else {
var vec__30103 = cljs.core.first.call(null,seq__30096__$1);
var name = cljs.core.nth.call(null,vec__30103,(0),null);
var map__30104 = cljs.core.nth.call(null,vec__30103,(1),null);
var map__30104__$1 = ((((!((map__30104 == null)))?((((map__30104.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30104.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30104):map__30104);
var doc = cljs.core.get.call(null,map__30104__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__30104__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__30136 = cljs.core.next.call(null,seq__30096__$1);
var G__30137 = null;
var G__30138 = (0);
var G__30139 = (0);
seq__30096 = G__30136;
chunk__30097 = G__30137;
count__30098 = G__30138;
i__30099 = G__30139;
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

//# sourceMappingURL=repl.js.map?rel=1444832567354