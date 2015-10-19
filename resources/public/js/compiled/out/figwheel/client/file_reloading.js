// Compiled by ClojureScript 1.7.122 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
figwheel.client.file_reloading.queued_file_reload;
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__16318__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__16318__auto__){
return or__16318__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__16318__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__16318__auto__)){
return or__16318__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__30144_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__30144_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__30149 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__30150 = null;
var count__30151 = (0);
var i__30152 = (0);
while(true){
if((i__30152 < count__30151)){
var n = cljs.core._nth.call(null,chunk__30150,i__30152);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__30153 = seq__30149;
var G__30154 = chunk__30150;
var G__30155 = count__30151;
var G__30156 = (i__30152 + (1));
seq__30149 = G__30153;
chunk__30150 = G__30154;
count__30151 = G__30155;
i__30152 = G__30156;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__30149);
if(temp__4425__auto__){
var seq__30149__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30149__$1)){
var c__17121__auto__ = cljs.core.chunk_first.call(null,seq__30149__$1);
var G__30157 = cljs.core.chunk_rest.call(null,seq__30149__$1);
var G__30158 = c__17121__auto__;
var G__30159 = cljs.core.count.call(null,c__17121__auto__);
var G__30160 = (0);
seq__30149 = G__30157;
chunk__30150 = G__30158;
count__30151 = G__30159;
i__30152 = G__30160;
continue;
} else {
var n = cljs.core.first.call(null,seq__30149__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__30161 = cljs.core.next.call(null,seq__30149__$1);
var G__30162 = null;
var G__30163 = (0);
var G__30164 = (0);
seq__30149 = G__30161;
chunk__30150 = G__30162;
count__30151 = G__30163;
i__30152 = G__30164;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__30203_30210 = cljs.core.seq.call(null,deps);
var chunk__30204_30211 = null;
var count__30205_30212 = (0);
var i__30206_30213 = (0);
while(true){
if((i__30206_30213 < count__30205_30212)){
var dep_30214 = cljs.core._nth.call(null,chunk__30204_30211,i__30206_30213);
topo_sort_helper_STAR_.call(null,dep_30214,(depth + (1)),state);

var G__30215 = seq__30203_30210;
var G__30216 = chunk__30204_30211;
var G__30217 = count__30205_30212;
var G__30218 = (i__30206_30213 + (1));
seq__30203_30210 = G__30215;
chunk__30204_30211 = G__30216;
count__30205_30212 = G__30217;
i__30206_30213 = G__30218;
continue;
} else {
var temp__4425__auto___30219 = cljs.core.seq.call(null,seq__30203_30210);
if(temp__4425__auto___30219){
var seq__30203_30220__$1 = temp__4425__auto___30219;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30203_30220__$1)){
var c__17121__auto___30221 = cljs.core.chunk_first.call(null,seq__30203_30220__$1);
var G__30222 = cljs.core.chunk_rest.call(null,seq__30203_30220__$1);
var G__30223 = c__17121__auto___30221;
var G__30224 = cljs.core.count.call(null,c__17121__auto___30221);
var G__30225 = (0);
seq__30203_30210 = G__30222;
chunk__30204_30211 = G__30223;
count__30205_30212 = G__30224;
i__30206_30213 = G__30225;
continue;
} else {
var dep_30226 = cljs.core.first.call(null,seq__30203_30220__$1);
topo_sort_helper_STAR_.call(null,dep_30226,(depth + (1)),state);

var G__30227 = cljs.core.next.call(null,seq__30203_30220__$1);
var G__30228 = null;
var G__30229 = (0);
var G__30230 = (0);
seq__30203_30210 = G__30227;
chunk__30204_30211 = G__30228;
count__30205_30212 = G__30229;
i__30206_30213 = G__30230;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__30207){
var vec__30209 = p__30207;
var x = cljs.core.nth.call(null,vec__30209,(0),null);
var xs = cljs.core.nthnext.call(null,vec__30209,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__30209,x,xs,get_deps__$1){
return (function (p1__30165_SHARP_){
return clojure.set.difference.call(null,p1__30165_SHARP_,x);
});})(vec__30209,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__30243 = cljs.core.seq.call(null,provides);
var chunk__30244 = null;
var count__30245 = (0);
var i__30246 = (0);
while(true){
if((i__30246 < count__30245)){
var prov = cljs.core._nth.call(null,chunk__30244,i__30246);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__30247_30255 = cljs.core.seq.call(null,requires);
var chunk__30248_30256 = null;
var count__30249_30257 = (0);
var i__30250_30258 = (0);
while(true){
if((i__30250_30258 < count__30249_30257)){
var req_30259 = cljs.core._nth.call(null,chunk__30248_30256,i__30250_30258);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30259,prov);

var G__30260 = seq__30247_30255;
var G__30261 = chunk__30248_30256;
var G__30262 = count__30249_30257;
var G__30263 = (i__30250_30258 + (1));
seq__30247_30255 = G__30260;
chunk__30248_30256 = G__30261;
count__30249_30257 = G__30262;
i__30250_30258 = G__30263;
continue;
} else {
var temp__4425__auto___30264 = cljs.core.seq.call(null,seq__30247_30255);
if(temp__4425__auto___30264){
var seq__30247_30265__$1 = temp__4425__auto___30264;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30247_30265__$1)){
var c__17121__auto___30266 = cljs.core.chunk_first.call(null,seq__30247_30265__$1);
var G__30267 = cljs.core.chunk_rest.call(null,seq__30247_30265__$1);
var G__30268 = c__17121__auto___30266;
var G__30269 = cljs.core.count.call(null,c__17121__auto___30266);
var G__30270 = (0);
seq__30247_30255 = G__30267;
chunk__30248_30256 = G__30268;
count__30249_30257 = G__30269;
i__30250_30258 = G__30270;
continue;
} else {
var req_30271 = cljs.core.first.call(null,seq__30247_30265__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30271,prov);

var G__30272 = cljs.core.next.call(null,seq__30247_30265__$1);
var G__30273 = null;
var G__30274 = (0);
var G__30275 = (0);
seq__30247_30255 = G__30272;
chunk__30248_30256 = G__30273;
count__30249_30257 = G__30274;
i__30250_30258 = G__30275;
continue;
}
} else {
}
}
break;
}

var G__30276 = seq__30243;
var G__30277 = chunk__30244;
var G__30278 = count__30245;
var G__30279 = (i__30246 + (1));
seq__30243 = G__30276;
chunk__30244 = G__30277;
count__30245 = G__30278;
i__30246 = G__30279;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__30243);
if(temp__4425__auto__){
var seq__30243__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30243__$1)){
var c__17121__auto__ = cljs.core.chunk_first.call(null,seq__30243__$1);
var G__30280 = cljs.core.chunk_rest.call(null,seq__30243__$1);
var G__30281 = c__17121__auto__;
var G__30282 = cljs.core.count.call(null,c__17121__auto__);
var G__30283 = (0);
seq__30243 = G__30280;
chunk__30244 = G__30281;
count__30245 = G__30282;
i__30246 = G__30283;
continue;
} else {
var prov = cljs.core.first.call(null,seq__30243__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__30251_30284 = cljs.core.seq.call(null,requires);
var chunk__30252_30285 = null;
var count__30253_30286 = (0);
var i__30254_30287 = (0);
while(true){
if((i__30254_30287 < count__30253_30286)){
var req_30288 = cljs.core._nth.call(null,chunk__30252_30285,i__30254_30287);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30288,prov);

var G__30289 = seq__30251_30284;
var G__30290 = chunk__30252_30285;
var G__30291 = count__30253_30286;
var G__30292 = (i__30254_30287 + (1));
seq__30251_30284 = G__30289;
chunk__30252_30285 = G__30290;
count__30253_30286 = G__30291;
i__30254_30287 = G__30292;
continue;
} else {
var temp__4425__auto___30293__$1 = cljs.core.seq.call(null,seq__30251_30284);
if(temp__4425__auto___30293__$1){
var seq__30251_30294__$1 = temp__4425__auto___30293__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30251_30294__$1)){
var c__17121__auto___30295 = cljs.core.chunk_first.call(null,seq__30251_30294__$1);
var G__30296 = cljs.core.chunk_rest.call(null,seq__30251_30294__$1);
var G__30297 = c__17121__auto___30295;
var G__30298 = cljs.core.count.call(null,c__17121__auto___30295);
var G__30299 = (0);
seq__30251_30284 = G__30296;
chunk__30252_30285 = G__30297;
count__30253_30286 = G__30298;
i__30254_30287 = G__30299;
continue;
} else {
var req_30300 = cljs.core.first.call(null,seq__30251_30294__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30300,prov);

var G__30301 = cljs.core.next.call(null,seq__30251_30294__$1);
var G__30302 = null;
var G__30303 = (0);
var G__30304 = (0);
seq__30251_30284 = G__30301;
chunk__30252_30285 = G__30302;
count__30253_30286 = G__30303;
i__30254_30287 = G__30304;
continue;
}
} else {
}
}
break;
}

var G__30305 = cljs.core.next.call(null,seq__30243__$1);
var G__30306 = null;
var G__30307 = (0);
var G__30308 = (0);
seq__30243 = G__30305;
chunk__30244 = G__30306;
count__30245 = G__30307;
i__30246 = G__30308;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__30313_30317 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__30314_30318 = null;
var count__30315_30319 = (0);
var i__30316_30320 = (0);
while(true){
if((i__30316_30320 < count__30315_30319)){
var ns_30321 = cljs.core._nth.call(null,chunk__30314_30318,i__30316_30320);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_30321);

var G__30322 = seq__30313_30317;
var G__30323 = chunk__30314_30318;
var G__30324 = count__30315_30319;
var G__30325 = (i__30316_30320 + (1));
seq__30313_30317 = G__30322;
chunk__30314_30318 = G__30323;
count__30315_30319 = G__30324;
i__30316_30320 = G__30325;
continue;
} else {
var temp__4425__auto___30326 = cljs.core.seq.call(null,seq__30313_30317);
if(temp__4425__auto___30326){
var seq__30313_30327__$1 = temp__4425__auto___30326;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30313_30327__$1)){
var c__17121__auto___30328 = cljs.core.chunk_first.call(null,seq__30313_30327__$1);
var G__30329 = cljs.core.chunk_rest.call(null,seq__30313_30327__$1);
var G__30330 = c__17121__auto___30328;
var G__30331 = cljs.core.count.call(null,c__17121__auto___30328);
var G__30332 = (0);
seq__30313_30317 = G__30329;
chunk__30314_30318 = G__30330;
count__30315_30319 = G__30331;
i__30316_30320 = G__30332;
continue;
} else {
var ns_30333 = cljs.core.first.call(null,seq__30313_30327__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_30333);

var G__30334 = cljs.core.next.call(null,seq__30313_30327__$1);
var G__30335 = null;
var G__30336 = (0);
var G__30337 = (0);
seq__30313_30317 = G__30334;
chunk__30314_30318 = G__30335;
count__30315_30319 = G__30336;
i__30316_30320 = G__30337;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__16318__auto__ = goog.require__;
if(cljs.core.truth_(or__16318__auto__)){
return or__16318__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__30338__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__30338 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30339__i = 0, G__30339__a = new Array(arguments.length -  0);
while (G__30339__i < G__30339__a.length) {G__30339__a[G__30339__i] = arguments[G__30339__i + 0]; ++G__30339__i;}
  args = new cljs.core.IndexedSeq(G__30339__a,0);
} 
return G__30338__delegate.call(this,args);};
G__30338.cljs$lang$maxFixedArity = 0;
G__30338.cljs$lang$applyTo = (function (arglist__30340){
var args = cljs.core.seq(arglist__30340);
return G__30338__delegate(args);
});
G__30338.cljs$core$IFn$_invoke$arity$variadic = G__30338__delegate;
return G__30338;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__30342 = cljs.core._EQ_;
var expr__30343 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__30342.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__30343))){
var path_parts = ((function (pred__30342,expr__30343){
return (function (p1__30341_SHARP_){
return clojure.string.split.call(null,p1__30341_SHARP_,/[\/\\]/);
});})(pred__30342,expr__30343))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__30342,expr__30343){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(clojure.string.join.call(null,"/",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [".","..",request_url], null)));
}catch (e30345){if((e30345 instanceof Error)){
var e = e30345;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e30345;

}
}})());
});
;})(path_parts,sep,root,pred__30342,expr__30343))
} else {
if(cljs.core.truth_(pred__30342.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__30343))){
return ((function (pred__30342,expr__30343){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__30342,expr__30343){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__30342,expr__30343))
);

return deferred.addErrback(((function (deferred,pred__30342,expr__30343){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__30342,expr__30343))
);
});
;})(pred__30342,expr__30343))
} else {
return ((function (pred__30342,expr__30343){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__30342,expr__30343))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__30346,callback){
var map__30349 = p__30346;
var map__30349__$1 = ((((!((map__30349 == null)))?((((map__30349.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30349.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30349):map__30349);
var file_msg = map__30349__$1;
var request_url = cljs.core.get.call(null,map__30349__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__30349,map__30349__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__30349,map__30349__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__20279__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20279__auto__){
return (function (){
var f__20280__auto__ = (function (){var switch__20214__auto__ = ((function (c__20279__auto__){
return (function (state_30373){
var state_val_30374 = (state_30373[(1)]);
if((state_val_30374 === (7))){
var inst_30369 = (state_30373[(2)]);
var state_30373__$1 = state_30373;
var statearr_30375_30395 = state_30373__$1;
(statearr_30375_30395[(2)] = inst_30369);

(statearr_30375_30395[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30374 === (1))){
var state_30373__$1 = state_30373;
var statearr_30376_30396 = state_30373__$1;
(statearr_30376_30396[(2)] = null);

(statearr_30376_30396[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30374 === (4))){
var inst_30353 = (state_30373[(7)]);
var inst_30353__$1 = (state_30373[(2)]);
var state_30373__$1 = (function (){var statearr_30377 = state_30373;
(statearr_30377[(7)] = inst_30353__$1);

return statearr_30377;
})();
if(cljs.core.truth_(inst_30353__$1)){
var statearr_30378_30397 = state_30373__$1;
(statearr_30378_30397[(1)] = (5));

} else {
var statearr_30379_30398 = state_30373__$1;
(statearr_30379_30398[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30374 === (6))){
var state_30373__$1 = state_30373;
var statearr_30380_30399 = state_30373__$1;
(statearr_30380_30399[(2)] = null);

(statearr_30380_30399[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30374 === (3))){
var inst_30371 = (state_30373[(2)]);
var state_30373__$1 = state_30373;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30373__$1,inst_30371);
} else {
if((state_val_30374 === (2))){
var state_30373__$1 = state_30373;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30373__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_30374 === (11))){
var inst_30365 = (state_30373[(2)]);
var state_30373__$1 = (function (){var statearr_30381 = state_30373;
(statearr_30381[(8)] = inst_30365);

return statearr_30381;
})();
var statearr_30382_30400 = state_30373__$1;
(statearr_30382_30400[(2)] = null);

(statearr_30382_30400[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30374 === (9))){
var inst_30357 = (state_30373[(9)]);
var inst_30359 = (state_30373[(10)]);
var inst_30361 = inst_30359.call(null,inst_30357);
var state_30373__$1 = state_30373;
var statearr_30383_30401 = state_30373__$1;
(statearr_30383_30401[(2)] = inst_30361);

(statearr_30383_30401[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30374 === (5))){
var inst_30353 = (state_30373[(7)]);
var inst_30355 = figwheel.client.file_reloading.blocking_load.call(null,inst_30353);
var state_30373__$1 = state_30373;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30373__$1,(8),inst_30355);
} else {
if((state_val_30374 === (10))){
var inst_30357 = (state_30373[(9)]);
var inst_30363 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_30357);
var state_30373__$1 = state_30373;
var statearr_30384_30402 = state_30373__$1;
(statearr_30384_30402[(2)] = inst_30363);

(statearr_30384_30402[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30374 === (8))){
var inst_30353 = (state_30373[(7)]);
var inst_30359 = (state_30373[(10)]);
var inst_30357 = (state_30373[(2)]);
var inst_30358 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_30359__$1 = cljs.core.get.call(null,inst_30358,inst_30353);
var state_30373__$1 = (function (){var statearr_30385 = state_30373;
(statearr_30385[(9)] = inst_30357);

(statearr_30385[(10)] = inst_30359__$1);

return statearr_30385;
})();
if(cljs.core.truth_(inst_30359__$1)){
var statearr_30386_30403 = state_30373__$1;
(statearr_30386_30403[(1)] = (9));

} else {
var statearr_30387_30404 = state_30373__$1;
(statearr_30387_30404[(1)] = (10));

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
});})(c__20279__auto__))
;
return ((function (switch__20214__auto__,c__20279__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__20215__auto__ = null;
var figwheel$client$file_reloading$state_machine__20215__auto____0 = (function (){
var statearr_30391 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30391[(0)] = figwheel$client$file_reloading$state_machine__20215__auto__);

(statearr_30391[(1)] = (1));

return statearr_30391;
});
var figwheel$client$file_reloading$state_machine__20215__auto____1 = (function (state_30373){
while(true){
var ret_value__20216__auto__ = (function (){try{while(true){
var result__20217__auto__ = switch__20214__auto__.call(null,state_30373);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20217__auto__;
}
break;
}
}catch (e30392){if((e30392 instanceof Object)){
var ex__20218__auto__ = e30392;
var statearr_30393_30405 = state_30373;
(statearr_30393_30405[(5)] = ex__20218__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30373);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30392;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20216__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30406 = state_30373;
state_30373 = G__30406;
continue;
} else {
return ret_value__20216__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__20215__auto__ = function(state_30373){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__20215__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__20215__auto____1.call(this,state_30373);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__20215__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__20215__auto____0;
figwheel$client$file_reloading$state_machine__20215__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__20215__auto____1;
return figwheel$client$file_reloading$state_machine__20215__auto__;
})()
;})(switch__20214__auto__,c__20279__auto__))
})();
var state__20281__auto__ = (function (){var statearr_30394 = f__20280__auto__.call(null);
(statearr_30394[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20279__auto__);

return statearr_30394;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20281__auto__);
});})(c__20279__auto__))
);

return c__20279__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__30407,callback){
var map__30410 = p__30407;
var map__30410__$1 = ((((!((map__30410 == null)))?((((map__30410.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30410.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30410):map__30410);
var file_msg = map__30410__$1;
var namespace = cljs.core.get.call(null,map__30410__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__30410,map__30410__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__30410,map__30410__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__30412){
var map__30415 = p__30412;
var map__30415__$1 = ((((!((map__30415 == null)))?((((map__30415.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30415.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30415):map__30415);
var file_msg = map__30415__$1;
var namespace = cljs.core.get.call(null,map__30415__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__16306__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__16306__auto__){
var or__16318__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16318__auto__)){
return or__16318__auto__;
} else {
var or__16318__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16318__auto____$1)){
return or__16318__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__16306__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__30417,callback){
var map__30420 = p__30417;
var map__30420__$1 = ((((!((map__30420 == null)))?((((map__30420.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30420.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30420):map__30420);
var file_msg = map__30420__$1;
var request_url = cljs.core.get.call(null,map__30420__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__30420__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__20279__auto___30508 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20279__auto___30508,out){
return (function (){
var f__20280__auto__ = (function (){var switch__20214__auto__ = ((function (c__20279__auto___30508,out){
return (function (state_30490){
var state_val_30491 = (state_30490[(1)]);
if((state_val_30491 === (1))){
var inst_30468 = cljs.core.nth.call(null,files,(0),null);
var inst_30469 = cljs.core.nthnext.call(null,files,(1));
var inst_30470 = files;
var state_30490__$1 = (function (){var statearr_30492 = state_30490;
(statearr_30492[(7)] = inst_30468);

(statearr_30492[(8)] = inst_30470);

(statearr_30492[(9)] = inst_30469);

return statearr_30492;
})();
var statearr_30493_30509 = state_30490__$1;
(statearr_30493_30509[(2)] = null);

(statearr_30493_30509[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30491 === (2))){
var inst_30473 = (state_30490[(10)]);
var inst_30470 = (state_30490[(8)]);
var inst_30473__$1 = cljs.core.nth.call(null,inst_30470,(0),null);
var inst_30474 = cljs.core.nthnext.call(null,inst_30470,(1));
var inst_30475 = (inst_30473__$1 == null);
var inst_30476 = cljs.core.not.call(null,inst_30475);
var state_30490__$1 = (function (){var statearr_30494 = state_30490;
(statearr_30494[(10)] = inst_30473__$1);

(statearr_30494[(11)] = inst_30474);

return statearr_30494;
})();
if(inst_30476){
var statearr_30495_30510 = state_30490__$1;
(statearr_30495_30510[(1)] = (4));

} else {
var statearr_30496_30511 = state_30490__$1;
(statearr_30496_30511[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30491 === (3))){
var inst_30488 = (state_30490[(2)]);
var state_30490__$1 = state_30490;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30490__$1,inst_30488);
} else {
if((state_val_30491 === (4))){
var inst_30473 = (state_30490[(10)]);
var inst_30478 = figwheel.client.file_reloading.reload_js_file.call(null,inst_30473);
var state_30490__$1 = state_30490;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30490__$1,(7),inst_30478);
} else {
if((state_val_30491 === (5))){
var inst_30484 = cljs.core.async.close_BANG_.call(null,out);
var state_30490__$1 = state_30490;
var statearr_30497_30512 = state_30490__$1;
(statearr_30497_30512[(2)] = inst_30484);

(statearr_30497_30512[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30491 === (6))){
var inst_30486 = (state_30490[(2)]);
var state_30490__$1 = state_30490;
var statearr_30498_30513 = state_30490__$1;
(statearr_30498_30513[(2)] = inst_30486);

(statearr_30498_30513[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30491 === (7))){
var inst_30474 = (state_30490[(11)]);
var inst_30480 = (state_30490[(2)]);
var inst_30481 = cljs.core.async.put_BANG_.call(null,out,inst_30480);
var inst_30470 = inst_30474;
var state_30490__$1 = (function (){var statearr_30499 = state_30490;
(statearr_30499[(12)] = inst_30481);

(statearr_30499[(8)] = inst_30470);

return statearr_30499;
})();
var statearr_30500_30514 = state_30490__$1;
(statearr_30500_30514[(2)] = null);

(statearr_30500_30514[(1)] = (2));


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
});})(c__20279__auto___30508,out))
;
return ((function (switch__20214__auto__,c__20279__auto___30508,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20215__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20215__auto____0 = (function (){
var statearr_30504 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30504[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20215__auto__);

(statearr_30504[(1)] = (1));

return statearr_30504;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20215__auto____1 = (function (state_30490){
while(true){
var ret_value__20216__auto__ = (function (){try{while(true){
var result__20217__auto__ = switch__20214__auto__.call(null,state_30490);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20217__auto__;
}
break;
}
}catch (e30505){if((e30505 instanceof Object)){
var ex__20218__auto__ = e30505;
var statearr_30506_30515 = state_30490;
(statearr_30506_30515[(5)] = ex__20218__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30490);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30505;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20216__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30516 = state_30490;
state_30490 = G__30516;
continue;
} else {
return ret_value__20216__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20215__auto__ = function(state_30490){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20215__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20215__auto____1.call(this,state_30490);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20215__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20215__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20215__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20215__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20215__auto__;
})()
;})(switch__20214__auto__,c__20279__auto___30508,out))
})();
var state__20281__auto__ = (function (){var statearr_30507 = f__20280__auto__.call(null);
(statearr_30507[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20279__auto___30508);

return statearr_30507;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20281__auto__);
});})(c__20279__auto___30508,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__30517,opts){
var map__30521 = p__30517;
var map__30521__$1 = ((((!((map__30521 == null)))?((((map__30521.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30521.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30521):map__30521);
var eval_body__$1 = cljs.core.get.call(null,map__30521__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__30521__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__16306__auto__ = eval_body__$1;
if(cljs.core.truth_(and__16306__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__16306__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e30523){var e = e30523;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4423__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__30524_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__30524_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4423__auto__)){
var file_msg = temp__4423__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__30529){
var vec__30530 = p__30529;
var k = cljs.core.nth.call(null,vec__30530,(0),null);
var v = cljs.core.nth.call(null,vec__30530,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__30531){
var vec__30532 = p__30531;
var k = cljs.core.nth.call(null,vec__30532,(0),null);
var v = cljs.core.nth.call(null,vec__30532,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__30536,p__30537){
var map__30784 = p__30536;
var map__30784__$1 = ((((!((map__30784 == null)))?((((map__30784.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30784.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30784):map__30784);
var opts = map__30784__$1;
var before_jsload = cljs.core.get.call(null,map__30784__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__30784__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__30784__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__30785 = p__30537;
var map__30785__$1 = ((((!((map__30785 == null)))?((((map__30785.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30785.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30785):map__30785);
var msg = map__30785__$1;
var files = cljs.core.get.call(null,map__30785__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__30785__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__30785__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__20279__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20279__auto__,map__30784,map__30784__$1,opts,before_jsload,on_jsload,reload_dependents,map__30785,map__30785__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__20280__auto__ = (function (){var switch__20214__auto__ = ((function (c__20279__auto__,map__30784,map__30784__$1,opts,before_jsload,on_jsload,reload_dependents,map__30785,map__30785__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_30938){
var state_val_30939 = (state_30938[(1)]);
if((state_val_30939 === (7))){
var inst_30799 = (state_30938[(7)]);
var inst_30802 = (state_30938[(8)]);
var inst_30800 = (state_30938[(9)]);
var inst_30801 = (state_30938[(10)]);
var inst_30807 = cljs.core._nth.call(null,inst_30800,inst_30802);
var inst_30808 = figwheel.client.file_reloading.eval_body.call(null,inst_30807,opts);
var inst_30809 = (inst_30802 + (1));
var tmp30940 = inst_30799;
var tmp30941 = inst_30800;
var tmp30942 = inst_30801;
var inst_30799__$1 = tmp30940;
var inst_30800__$1 = tmp30941;
var inst_30801__$1 = tmp30942;
var inst_30802__$1 = inst_30809;
var state_30938__$1 = (function (){var statearr_30943 = state_30938;
(statearr_30943[(11)] = inst_30808);

(statearr_30943[(7)] = inst_30799__$1);

(statearr_30943[(8)] = inst_30802__$1);

(statearr_30943[(9)] = inst_30800__$1);

(statearr_30943[(10)] = inst_30801__$1);

return statearr_30943;
})();
var statearr_30944_31030 = state_30938__$1;
(statearr_30944_31030[(2)] = null);

(statearr_30944_31030[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30939 === (20))){
var inst_30842 = (state_30938[(12)]);
var inst_30850 = figwheel.client.file_reloading.sort_files.call(null,inst_30842);
var state_30938__$1 = state_30938;
var statearr_30945_31031 = state_30938__$1;
(statearr_30945_31031[(2)] = inst_30850);

(statearr_30945_31031[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30939 === (27))){
var state_30938__$1 = state_30938;
var statearr_30946_31032 = state_30938__$1;
(statearr_30946_31032[(2)] = null);

(statearr_30946_31032[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30939 === (1))){
var inst_30791 = (state_30938[(13)]);
var inst_30788 = before_jsload.call(null,files);
var inst_30789 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_30790 = (function (){return ((function (inst_30791,inst_30788,inst_30789,state_val_30939,c__20279__auto__,map__30784,map__30784__$1,opts,before_jsload,on_jsload,reload_dependents,map__30785,map__30785__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__30533_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__30533_SHARP_);
});
;})(inst_30791,inst_30788,inst_30789,state_val_30939,c__20279__auto__,map__30784,map__30784__$1,opts,before_jsload,on_jsload,reload_dependents,map__30785,map__30785__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30791__$1 = cljs.core.filter.call(null,inst_30790,files);
var inst_30792 = cljs.core.not_empty.call(null,inst_30791__$1);
var state_30938__$1 = (function (){var statearr_30947 = state_30938;
(statearr_30947[(14)] = inst_30789);

(statearr_30947[(15)] = inst_30788);

(statearr_30947[(13)] = inst_30791__$1);

return statearr_30947;
})();
if(cljs.core.truth_(inst_30792)){
var statearr_30948_31033 = state_30938__$1;
(statearr_30948_31033[(1)] = (2));

} else {
var statearr_30949_31034 = state_30938__$1;
(statearr_30949_31034[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30939 === (24))){
var state_30938__$1 = state_30938;
var statearr_30950_31035 = state_30938__$1;
(statearr_30950_31035[(2)] = null);

(statearr_30950_31035[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30939 === (39))){
var inst_30892 = (state_30938[(16)]);
var state_30938__$1 = state_30938;
var statearr_30951_31036 = state_30938__$1;
(statearr_30951_31036[(2)] = inst_30892);

(statearr_30951_31036[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30939 === (46))){
var inst_30933 = (state_30938[(2)]);
var state_30938__$1 = state_30938;
var statearr_30952_31037 = state_30938__$1;
(statearr_30952_31037[(2)] = inst_30933);

(statearr_30952_31037[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30939 === (4))){
var inst_30836 = (state_30938[(2)]);
var inst_30837 = cljs.core.List.EMPTY;
var inst_30838 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_30837);
var inst_30839 = (function (){return ((function (inst_30836,inst_30837,inst_30838,state_val_30939,c__20279__auto__,map__30784,map__30784__$1,opts,before_jsload,on_jsload,reload_dependents,map__30785,map__30785__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__30534_SHARP_){
var and__16306__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__30534_SHARP_);
if(cljs.core.truth_(and__16306__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__30534_SHARP_));
} else {
return and__16306__auto__;
}
});
;})(inst_30836,inst_30837,inst_30838,state_val_30939,c__20279__auto__,map__30784,map__30784__$1,opts,before_jsload,on_jsload,reload_dependents,map__30785,map__30785__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30840 = cljs.core.filter.call(null,inst_30839,files);
var inst_30841 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_30842 = cljs.core.concat.call(null,inst_30840,inst_30841);
var state_30938__$1 = (function (){var statearr_30953 = state_30938;
(statearr_30953[(17)] = inst_30836);

(statearr_30953[(12)] = inst_30842);

(statearr_30953[(18)] = inst_30838);

return statearr_30953;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_30954_31038 = state_30938__$1;
(statearr_30954_31038[(1)] = (16));

} else {
var statearr_30955_31039 = state_30938__$1;
(statearr_30955_31039[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30939 === (15))){
var inst_30826 = (state_30938[(2)]);
var state_30938__$1 = state_30938;
var statearr_30956_31040 = state_30938__$1;
(statearr_30956_31040[(2)] = inst_30826);

(statearr_30956_31040[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30939 === (21))){
var inst_30852 = (state_30938[(19)]);
var inst_30852__$1 = (state_30938[(2)]);
var inst_30853 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_30852__$1);
var state_30938__$1 = (function (){var statearr_30957 = state_30938;
(statearr_30957[(19)] = inst_30852__$1);

return statearr_30957;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30938__$1,(22),inst_30853);
} else {
if((state_val_30939 === (31))){
var inst_30936 = (state_30938[(2)]);
var state_30938__$1 = state_30938;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30938__$1,inst_30936);
} else {
if((state_val_30939 === (32))){
var inst_30892 = (state_30938[(16)]);
var inst_30897 = inst_30892.cljs$lang$protocol_mask$partition0$;
var inst_30898 = (inst_30897 & (64));
var inst_30899 = inst_30892.cljs$core$ISeq$;
var inst_30900 = (inst_30898) || (inst_30899);
var state_30938__$1 = state_30938;
if(cljs.core.truth_(inst_30900)){
var statearr_30958_31041 = state_30938__$1;
(statearr_30958_31041[(1)] = (35));

} else {
var statearr_30959_31042 = state_30938__$1;
(statearr_30959_31042[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30939 === (40))){
var inst_30913 = (state_30938[(20)]);
var inst_30912 = (state_30938[(2)]);
var inst_30913__$1 = cljs.core.get.call(null,inst_30912,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_30914 = cljs.core.get.call(null,inst_30912,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_30915 = cljs.core.not_empty.call(null,inst_30913__$1);
var state_30938__$1 = (function (){var statearr_30960 = state_30938;
(statearr_30960[(21)] = inst_30914);

(statearr_30960[(20)] = inst_30913__$1);

return statearr_30960;
})();
if(cljs.core.truth_(inst_30915)){
var statearr_30961_31043 = state_30938__$1;
(statearr_30961_31043[(1)] = (41));

} else {
var statearr_30962_31044 = state_30938__$1;
(statearr_30962_31044[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30939 === (33))){
var state_30938__$1 = state_30938;
var statearr_30963_31045 = state_30938__$1;
(statearr_30963_31045[(2)] = false);

(statearr_30963_31045[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30939 === (13))){
var inst_30812 = (state_30938[(22)]);
var inst_30816 = cljs.core.chunk_first.call(null,inst_30812);
var inst_30817 = cljs.core.chunk_rest.call(null,inst_30812);
var inst_30818 = cljs.core.count.call(null,inst_30816);
var inst_30799 = inst_30817;
var inst_30800 = inst_30816;
var inst_30801 = inst_30818;
var inst_30802 = (0);
var state_30938__$1 = (function (){var statearr_30964 = state_30938;
(statearr_30964[(7)] = inst_30799);

(statearr_30964[(8)] = inst_30802);

(statearr_30964[(9)] = inst_30800);

(statearr_30964[(10)] = inst_30801);

return statearr_30964;
})();
var statearr_30965_31046 = state_30938__$1;
(statearr_30965_31046[(2)] = null);

(statearr_30965_31046[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30939 === (22))){
var inst_30855 = (state_30938[(23)]);
var inst_30860 = (state_30938[(24)]);
var inst_30852 = (state_30938[(19)]);
var inst_30856 = (state_30938[(25)]);
var inst_30855__$1 = (state_30938[(2)]);
var inst_30856__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_30855__$1);
var inst_30857 = (function (){var all_files = inst_30852;
var res_SINGLEQUOTE_ = inst_30855__$1;
var res = inst_30856__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_30855,inst_30860,inst_30852,inst_30856,inst_30855__$1,inst_30856__$1,state_val_30939,c__20279__auto__,map__30784,map__30784__$1,opts,before_jsload,on_jsload,reload_dependents,map__30785,map__30785__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__30535_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__30535_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_30855,inst_30860,inst_30852,inst_30856,inst_30855__$1,inst_30856__$1,state_val_30939,c__20279__auto__,map__30784,map__30784__$1,opts,before_jsload,on_jsload,reload_dependents,map__30785,map__30785__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30858 = cljs.core.filter.call(null,inst_30857,inst_30855__$1);
var inst_30859 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_30860__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_30859);
var inst_30861 = cljs.core.not_empty.call(null,inst_30860__$1);
var state_30938__$1 = (function (){var statearr_30966 = state_30938;
(statearr_30966[(23)] = inst_30855__$1);

(statearr_30966[(26)] = inst_30858);

(statearr_30966[(24)] = inst_30860__$1);

(statearr_30966[(25)] = inst_30856__$1);

return statearr_30966;
})();
if(cljs.core.truth_(inst_30861)){
var statearr_30967_31047 = state_30938__$1;
(statearr_30967_31047[(1)] = (23));

} else {
var statearr_30968_31048 = state_30938__$1;
(statearr_30968_31048[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30939 === (36))){
var state_30938__$1 = state_30938;
var statearr_30969_31049 = state_30938__$1;
(statearr_30969_31049[(2)] = false);

(statearr_30969_31049[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30939 === (41))){
var inst_30913 = (state_30938[(20)]);
var inst_30917 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_30918 = cljs.core.map.call(null,inst_30917,inst_30913);
var inst_30919 = cljs.core.pr_str.call(null,inst_30918);
var inst_30920 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_30919)].join('');
var inst_30921 = figwheel.client.utils.log.call(null,inst_30920);
var state_30938__$1 = state_30938;
var statearr_30970_31050 = state_30938__$1;
(statearr_30970_31050[(2)] = inst_30921);

(statearr_30970_31050[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30939 === (43))){
var inst_30914 = (state_30938[(21)]);
var inst_30924 = (state_30938[(2)]);
var inst_30925 = cljs.core.not_empty.call(null,inst_30914);
var state_30938__$1 = (function (){var statearr_30971 = state_30938;
(statearr_30971[(27)] = inst_30924);

return statearr_30971;
})();
if(cljs.core.truth_(inst_30925)){
var statearr_30972_31051 = state_30938__$1;
(statearr_30972_31051[(1)] = (44));

} else {
var statearr_30973_31052 = state_30938__$1;
(statearr_30973_31052[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30939 === (29))){
var inst_30855 = (state_30938[(23)]);
var inst_30858 = (state_30938[(26)]);
var inst_30892 = (state_30938[(16)]);
var inst_30860 = (state_30938[(24)]);
var inst_30852 = (state_30938[(19)]);
var inst_30856 = (state_30938[(25)]);
var inst_30888 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_30891 = (function (){var all_files = inst_30852;
var res_SINGLEQUOTE_ = inst_30855;
var res = inst_30856;
var files_not_loaded = inst_30858;
var dependencies_that_loaded = inst_30860;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30855,inst_30858,inst_30892,inst_30860,inst_30852,inst_30856,inst_30888,state_val_30939,c__20279__auto__,map__30784,map__30784__$1,opts,before_jsload,on_jsload,reload_dependents,map__30785,map__30785__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__30890){
var map__30974 = p__30890;
var map__30974__$1 = ((((!((map__30974 == null)))?((((map__30974.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30974.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30974):map__30974);
var namespace = cljs.core.get.call(null,map__30974__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30855,inst_30858,inst_30892,inst_30860,inst_30852,inst_30856,inst_30888,state_val_30939,c__20279__auto__,map__30784,map__30784__$1,opts,before_jsload,on_jsload,reload_dependents,map__30785,map__30785__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30892__$1 = cljs.core.group_by.call(null,inst_30891,inst_30858);
var inst_30894 = (inst_30892__$1 == null);
var inst_30895 = cljs.core.not.call(null,inst_30894);
var state_30938__$1 = (function (){var statearr_30976 = state_30938;
(statearr_30976[(28)] = inst_30888);

(statearr_30976[(16)] = inst_30892__$1);

return statearr_30976;
})();
if(inst_30895){
var statearr_30977_31053 = state_30938__$1;
(statearr_30977_31053[(1)] = (32));

} else {
var statearr_30978_31054 = state_30938__$1;
(statearr_30978_31054[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30939 === (44))){
var inst_30914 = (state_30938[(21)]);
var inst_30927 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_30914);
var inst_30928 = cljs.core.pr_str.call(null,inst_30927);
var inst_30929 = [cljs.core.str("not required: "),cljs.core.str(inst_30928)].join('');
var inst_30930 = figwheel.client.utils.log.call(null,inst_30929);
var state_30938__$1 = state_30938;
var statearr_30979_31055 = state_30938__$1;
(statearr_30979_31055[(2)] = inst_30930);

(statearr_30979_31055[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30939 === (6))){
var inst_30833 = (state_30938[(2)]);
var state_30938__$1 = state_30938;
var statearr_30980_31056 = state_30938__$1;
(statearr_30980_31056[(2)] = inst_30833);

(statearr_30980_31056[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30939 === (28))){
var inst_30858 = (state_30938[(26)]);
var inst_30885 = (state_30938[(2)]);
var inst_30886 = cljs.core.not_empty.call(null,inst_30858);
var state_30938__$1 = (function (){var statearr_30981 = state_30938;
(statearr_30981[(29)] = inst_30885);

return statearr_30981;
})();
if(cljs.core.truth_(inst_30886)){
var statearr_30982_31057 = state_30938__$1;
(statearr_30982_31057[(1)] = (29));

} else {
var statearr_30983_31058 = state_30938__$1;
(statearr_30983_31058[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30939 === (25))){
var inst_30856 = (state_30938[(25)]);
var inst_30872 = (state_30938[(2)]);
var inst_30873 = cljs.core.not_empty.call(null,inst_30856);
var state_30938__$1 = (function (){var statearr_30984 = state_30938;
(statearr_30984[(30)] = inst_30872);

return statearr_30984;
})();
if(cljs.core.truth_(inst_30873)){
var statearr_30985_31059 = state_30938__$1;
(statearr_30985_31059[(1)] = (26));

} else {
var statearr_30986_31060 = state_30938__$1;
(statearr_30986_31060[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30939 === (34))){
var inst_30907 = (state_30938[(2)]);
var state_30938__$1 = state_30938;
if(cljs.core.truth_(inst_30907)){
var statearr_30987_31061 = state_30938__$1;
(statearr_30987_31061[(1)] = (38));

} else {
var statearr_30988_31062 = state_30938__$1;
(statearr_30988_31062[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30939 === (17))){
var state_30938__$1 = state_30938;
var statearr_30989_31063 = state_30938__$1;
(statearr_30989_31063[(2)] = recompile_dependents);

(statearr_30989_31063[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30939 === (3))){
var state_30938__$1 = state_30938;
var statearr_30990_31064 = state_30938__$1;
(statearr_30990_31064[(2)] = null);

(statearr_30990_31064[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30939 === (12))){
var inst_30829 = (state_30938[(2)]);
var state_30938__$1 = state_30938;
var statearr_30991_31065 = state_30938__$1;
(statearr_30991_31065[(2)] = inst_30829);

(statearr_30991_31065[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30939 === (2))){
var inst_30791 = (state_30938[(13)]);
var inst_30798 = cljs.core.seq.call(null,inst_30791);
var inst_30799 = inst_30798;
var inst_30800 = null;
var inst_30801 = (0);
var inst_30802 = (0);
var state_30938__$1 = (function (){var statearr_30992 = state_30938;
(statearr_30992[(7)] = inst_30799);

(statearr_30992[(8)] = inst_30802);

(statearr_30992[(9)] = inst_30800);

(statearr_30992[(10)] = inst_30801);

return statearr_30992;
})();
var statearr_30993_31066 = state_30938__$1;
(statearr_30993_31066[(2)] = null);

(statearr_30993_31066[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30939 === (23))){
var inst_30855 = (state_30938[(23)]);
var inst_30858 = (state_30938[(26)]);
var inst_30860 = (state_30938[(24)]);
var inst_30852 = (state_30938[(19)]);
var inst_30856 = (state_30938[(25)]);
var inst_30863 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_30865 = (function (){var all_files = inst_30852;
var res_SINGLEQUOTE_ = inst_30855;
var res = inst_30856;
var files_not_loaded = inst_30858;
var dependencies_that_loaded = inst_30860;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30855,inst_30858,inst_30860,inst_30852,inst_30856,inst_30863,state_val_30939,c__20279__auto__,map__30784,map__30784__$1,opts,before_jsload,on_jsload,reload_dependents,map__30785,map__30785__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__30864){
var map__30994 = p__30864;
var map__30994__$1 = ((((!((map__30994 == null)))?((((map__30994.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30994.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30994):map__30994);
var request_url = cljs.core.get.call(null,map__30994__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30855,inst_30858,inst_30860,inst_30852,inst_30856,inst_30863,state_val_30939,c__20279__auto__,map__30784,map__30784__$1,opts,before_jsload,on_jsload,reload_dependents,map__30785,map__30785__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30866 = cljs.core.reverse.call(null,inst_30860);
var inst_30867 = cljs.core.map.call(null,inst_30865,inst_30866);
var inst_30868 = cljs.core.pr_str.call(null,inst_30867);
var inst_30869 = figwheel.client.utils.log.call(null,inst_30868);
var state_30938__$1 = (function (){var statearr_30996 = state_30938;
(statearr_30996[(31)] = inst_30863);

return statearr_30996;
})();
var statearr_30997_31067 = state_30938__$1;
(statearr_30997_31067[(2)] = inst_30869);

(statearr_30997_31067[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30939 === (35))){
var state_30938__$1 = state_30938;
var statearr_30998_31068 = state_30938__$1;
(statearr_30998_31068[(2)] = true);

(statearr_30998_31068[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30939 === (19))){
var inst_30842 = (state_30938[(12)]);
var inst_30848 = figwheel.client.file_reloading.expand_files.call(null,inst_30842);
var state_30938__$1 = state_30938;
var statearr_30999_31069 = state_30938__$1;
(statearr_30999_31069[(2)] = inst_30848);

(statearr_30999_31069[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30939 === (11))){
var state_30938__$1 = state_30938;
var statearr_31000_31070 = state_30938__$1;
(statearr_31000_31070[(2)] = null);

(statearr_31000_31070[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30939 === (9))){
var inst_30831 = (state_30938[(2)]);
var state_30938__$1 = state_30938;
var statearr_31001_31071 = state_30938__$1;
(statearr_31001_31071[(2)] = inst_30831);

(statearr_31001_31071[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30939 === (5))){
var inst_30802 = (state_30938[(8)]);
var inst_30801 = (state_30938[(10)]);
var inst_30804 = (inst_30802 < inst_30801);
var inst_30805 = inst_30804;
var state_30938__$1 = state_30938;
if(cljs.core.truth_(inst_30805)){
var statearr_31002_31072 = state_30938__$1;
(statearr_31002_31072[(1)] = (7));

} else {
var statearr_31003_31073 = state_30938__$1;
(statearr_31003_31073[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30939 === (14))){
var inst_30812 = (state_30938[(22)]);
var inst_30821 = cljs.core.first.call(null,inst_30812);
var inst_30822 = figwheel.client.file_reloading.eval_body.call(null,inst_30821,opts);
var inst_30823 = cljs.core.next.call(null,inst_30812);
var inst_30799 = inst_30823;
var inst_30800 = null;
var inst_30801 = (0);
var inst_30802 = (0);
var state_30938__$1 = (function (){var statearr_31004 = state_30938;
(statearr_31004[(7)] = inst_30799);

(statearr_31004[(8)] = inst_30802);

(statearr_31004[(9)] = inst_30800);

(statearr_31004[(32)] = inst_30822);

(statearr_31004[(10)] = inst_30801);

return statearr_31004;
})();
var statearr_31005_31074 = state_30938__$1;
(statearr_31005_31074[(2)] = null);

(statearr_31005_31074[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30939 === (45))){
var state_30938__$1 = state_30938;
var statearr_31006_31075 = state_30938__$1;
(statearr_31006_31075[(2)] = null);

(statearr_31006_31075[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30939 === (26))){
var inst_30855 = (state_30938[(23)]);
var inst_30858 = (state_30938[(26)]);
var inst_30860 = (state_30938[(24)]);
var inst_30852 = (state_30938[(19)]);
var inst_30856 = (state_30938[(25)]);
var inst_30875 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_30877 = (function (){var all_files = inst_30852;
var res_SINGLEQUOTE_ = inst_30855;
var res = inst_30856;
var files_not_loaded = inst_30858;
var dependencies_that_loaded = inst_30860;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30855,inst_30858,inst_30860,inst_30852,inst_30856,inst_30875,state_val_30939,c__20279__auto__,map__30784,map__30784__$1,opts,before_jsload,on_jsload,reload_dependents,map__30785,map__30785__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__30876){
var map__31007 = p__30876;
var map__31007__$1 = ((((!((map__31007 == null)))?((((map__31007.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31007.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31007):map__31007);
var namespace = cljs.core.get.call(null,map__31007__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__31007__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30855,inst_30858,inst_30860,inst_30852,inst_30856,inst_30875,state_val_30939,c__20279__auto__,map__30784,map__30784__$1,opts,before_jsload,on_jsload,reload_dependents,map__30785,map__30785__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30878 = cljs.core.map.call(null,inst_30877,inst_30856);
var inst_30879 = cljs.core.pr_str.call(null,inst_30878);
var inst_30880 = figwheel.client.utils.log.call(null,inst_30879);
var inst_30881 = (function (){var all_files = inst_30852;
var res_SINGLEQUOTE_ = inst_30855;
var res = inst_30856;
var files_not_loaded = inst_30858;
var dependencies_that_loaded = inst_30860;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30855,inst_30858,inst_30860,inst_30852,inst_30856,inst_30875,inst_30877,inst_30878,inst_30879,inst_30880,state_val_30939,c__20279__auto__,map__30784,map__30784__$1,opts,before_jsload,on_jsload,reload_dependents,map__30785,map__30785__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30855,inst_30858,inst_30860,inst_30852,inst_30856,inst_30875,inst_30877,inst_30878,inst_30879,inst_30880,state_val_30939,c__20279__auto__,map__30784,map__30784__$1,opts,before_jsload,on_jsload,reload_dependents,map__30785,map__30785__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30882 = setTimeout(inst_30881,(10));
var state_30938__$1 = (function (){var statearr_31009 = state_30938;
(statearr_31009[(33)] = inst_30880);

(statearr_31009[(34)] = inst_30875);

return statearr_31009;
})();
var statearr_31010_31076 = state_30938__$1;
(statearr_31010_31076[(2)] = inst_30882);

(statearr_31010_31076[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30939 === (16))){
var state_30938__$1 = state_30938;
var statearr_31011_31077 = state_30938__$1;
(statearr_31011_31077[(2)] = reload_dependents);

(statearr_31011_31077[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30939 === (38))){
var inst_30892 = (state_30938[(16)]);
var inst_30909 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30892);
var state_30938__$1 = state_30938;
var statearr_31012_31078 = state_30938__$1;
(statearr_31012_31078[(2)] = inst_30909);

(statearr_31012_31078[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30939 === (30))){
var state_30938__$1 = state_30938;
var statearr_31013_31079 = state_30938__$1;
(statearr_31013_31079[(2)] = null);

(statearr_31013_31079[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30939 === (10))){
var inst_30812 = (state_30938[(22)]);
var inst_30814 = cljs.core.chunked_seq_QMARK_.call(null,inst_30812);
var state_30938__$1 = state_30938;
if(inst_30814){
var statearr_31014_31080 = state_30938__$1;
(statearr_31014_31080[(1)] = (13));

} else {
var statearr_31015_31081 = state_30938__$1;
(statearr_31015_31081[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30939 === (18))){
var inst_30846 = (state_30938[(2)]);
var state_30938__$1 = state_30938;
if(cljs.core.truth_(inst_30846)){
var statearr_31016_31082 = state_30938__$1;
(statearr_31016_31082[(1)] = (19));

} else {
var statearr_31017_31083 = state_30938__$1;
(statearr_31017_31083[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30939 === (42))){
var state_30938__$1 = state_30938;
var statearr_31018_31084 = state_30938__$1;
(statearr_31018_31084[(2)] = null);

(statearr_31018_31084[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30939 === (37))){
var inst_30904 = (state_30938[(2)]);
var state_30938__$1 = state_30938;
var statearr_31019_31085 = state_30938__$1;
(statearr_31019_31085[(2)] = inst_30904);

(statearr_31019_31085[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30939 === (8))){
var inst_30799 = (state_30938[(7)]);
var inst_30812 = (state_30938[(22)]);
var inst_30812__$1 = cljs.core.seq.call(null,inst_30799);
var state_30938__$1 = (function (){var statearr_31020 = state_30938;
(statearr_31020[(22)] = inst_30812__$1);

return statearr_31020;
})();
if(inst_30812__$1){
var statearr_31021_31086 = state_30938__$1;
(statearr_31021_31086[(1)] = (10));

} else {
var statearr_31022_31087 = state_30938__$1;
(statearr_31022_31087[(1)] = (11));

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
}
});})(c__20279__auto__,map__30784,map__30784__$1,opts,before_jsload,on_jsload,reload_dependents,map__30785,map__30785__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__20214__auto__,c__20279__auto__,map__30784,map__30784__$1,opts,before_jsload,on_jsload,reload_dependents,map__30785,map__30785__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20215__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20215__auto____0 = (function (){
var statearr_31026 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31026[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__20215__auto__);

(statearr_31026[(1)] = (1));

return statearr_31026;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20215__auto____1 = (function (state_30938){
while(true){
var ret_value__20216__auto__ = (function (){try{while(true){
var result__20217__auto__ = switch__20214__auto__.call(null,state_30938);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20217__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20217__auto__;
}
break;
}
}catch (e31027){if((e31027 instanceof Object)){
var ex__20218__auto__ = e31027;
var statearr_31028_31088 = state_30938;
(statearr_31028_31088[(5)] = ex__20218__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30938);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31027;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20216__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31089 = state_30938;
state_30938 = G__31089;
continue;
} else {
return ret_value__20216__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__20215__auto__ = function(state_30938){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20215__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20215__auto____1.call(this,state_30938);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__20215__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__20215__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__20215__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__20215__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20215__auto__;
})()
;})(switch__20214__auto__,c__20279__auto__,map__30784,map__30784__$1,opts,before_jsload,on_jsload,reload_dependents,map__30785,map__30785__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__20281__auto__ = (function (){var statearr_31029 = f__20280__auto__.call(null);
(statearr_31029[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20279__auto__);

return statearr_31029;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20281__auto__);
});})(c__20279__auto__,map__30784,map__30784__$1,opts,before_jsload,on_jsload,reload_dependents,map__30785,map__30785__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__20279__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__31092,link){
var map__31095 = p__31092;
var map__31095__$1 = ((((!((map__31095 == null)))?((((map__31095.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31095.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31095):map__31095);
var file = cljs.core.get.call(null,map__31095__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__31095,map__31095__$1,file){
return (function (p1__31090_SHARP_,p2__31091_SHARP_){
if(cljs.core._EQ_.call(null,p1__31090_SHARP_,p2__31091_SHARP_)){
return p1__31090_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__31095,map__31095__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__31101){
var map__31102 = p__31101;
var map__31102__$1 = ((((!((map__31102 == null)))?((((map__31102.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31102.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31102):map__31102);
var match_length = cljs.core.get.call(null,map__31102__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__31102__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__31097_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__31097_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4425__auto__)){
var res = temp__4425__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args31104 = [];
var len__17376__auto___31107 = arguments.length;
var i__17377__auto___31108 = (0);
while(true){
if((i__17377__auto___31108 < len__17376__auto___31107)){
args31104.push((arguments[i__17377__auto___31108]));

var G__31109 = (i__17377__auto___31108 + (1));
i__17377__auto___31108 = G__31109;
continue;
} else {
}
break;
}

var G__31106 = args31104.length;
switch (G__31106) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31104.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__31111_SHARP_,p2__31112_SHARP_){
return cljs.core.assoc.call(null,p1__31111_SHARP_,cljs.core.get.call(null,p2__31112_SHARP_,key),p2__31112_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__31113){
var map__31116 = p__31113;
var map__31116__$1 = ((((!((map__31116 == null)))?((((map__31116.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31116.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31116):map__31116);
var f_data = map__31116__$1;
var file = cljs.core.get.call(null,map__31116__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__31118,files_msg){
var map__31125 = p__31118;
var map__31125__$1 = ((((!((map__31125 == null)))?((((map__31125.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31125.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31125):map__31125);
var opts = map__31125__$1;
var on_cssload = cljs.core.get.call(null,map__31125__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__31127_31131 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__31128_31132 = null;
var count__31129_31133 = (0);
var i__31130_31134 = (0);
while(true){
if((i__31130_31134 < count__31129_31133)){
var f_31135 = cljs.core._nth.call(null,chunk__31128_31132,i__31130_31134);
figwheel.client.file_reloading.reload_css_file.call(null,f_31135);

var G__31136 = seq__31127_31131;
var G__31137 = chunk__31128_31132;
var G__31138 = count__31129_31133;
var G__31139 = (i__31130_31134 + (1));
seq__31127_31131 = G__31136;
chunk__31128_31132 = G__31137;
count__31129_31133 = G__31138;
i__31130_31134 = G__31139;
continue;
} else {
var temp__4425__auto___31140 = cljs.core.seq.call(null,seq__31127_31131);
if(temp__4425__auto___31140){
var seq__31127_31141__$1 = temp__4425__auto___31140;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31127_31141__$1)){
var c__17121__auto___31142 = cljs.core.chunk_first.call(null,seq__31127_31141__$1);
var G__31143 = cljs.core.chunk_rest.call(null,seq__31127_31141__$1);
var G__31144 = c__17121__auto___31142;
var G__31145 = cljs.core.count.call(null,c__17121__auto___31142);
var G__31146 = (0);
seq__31127_31131 = G__31143;
chunk__31128_31132 = G__31144;
count__31129_31133 = G__31145;
i__31130_31134 = G__31146;
continue;
} else {
var f_31147 = cljs.core.first.call(null,seq__31127_31141__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_31147);

var G__31148 = cljs.core.next.call(null,seq__31127_31141__$1);
var G__31149 = null;
var G__31150 = (0);
var G__31151 = (0);
seq__31127_31131 = G__31148;
chunk__31128_31132 = G__31149;
count__31129_31133 = G__31150;
i__31130_31134 = G__31151;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__31125,map__31125__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__31125,map__31125__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1444832568082