// Compiled by ClojureScript 1.7.122 {}
goog.provide('om_tut.core');
goog.require('cljs.core');
goog.require('om.core');
goog.require('om.dom');
goog.require('clojure.string');
cljs.core.enable_console_print_BANG_.call(null);
om_tut.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"people","people",1443537404),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"student","student",-1899621508),new cljs.core.Keyword(null,"first","first",-644103046),"Ben",new cljs.core.Keyword(null,"last","last",1105735132),"Bitdiddle",new cljs.core.Keyword(null,"email","email",1415816706),"benb@mit.edu"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"student","student",-1899621508),new cljs.core.Keyword(null,"first","first",-644103046),"Alyssa",new cljs.core.Keyword(null,"middle-initial","middle-initial",854677765),"P",new cljs.core.Keyword(null,"last","last",1105735132),"Hacker",new cljs.core.Keyword(null,"email","email",1415816706),"aphacker@mit.edu"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"professor","professor",1388675553),new cljs.core.Keyword(null,"first","first",-644103046),"Gerald",new cljs.core.Keyword(null,"middle","middle",-701029031),"Jay",new cljs.core.Keyword(null,"last","last",1105735132),"Sussman",new cljs.core.Keyword(null,"email","email",1415816706),"metacirc@mit.edu",new cljs.core.Keyword(null,"classes","classes",2037804510),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"6001","6001",1924916439),new cljs.core.Keyword(null,"6946","6946",443412550)], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"student","student",-1899621508),new cljs.core.Keyword(null,"first","first",-644103046),"Eva",new cljs.core.Keyword(null,"middle","middle",-701029031),"Lu",new cljs.core.Keyword(null,"last","last",1105735132),"Ator",new cljs.core.Keyword(null,"email","email",1415816706),"eval@mit.edu"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"student","student",-1899621508),new cljs.core.Keyword(null,"first","first",-644103046),"Louis",new cljs.core.Keyword(null,"last","last",1105735132),"Reasoner",new cljs.core.Keyword(null,"email","email",1415816706),"prolog@mit.edu"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"professor","professor",1388675553),new cljs.core.Keyword(null,"first","first",-644103046),"Hal",new cljs.core.Keyword(null,"last","last",1105735132),"Abelson",new cljs.core.Keyword(null,"email","email",1415816706),"evalapply@mit.edu",new cljs.core.Keyword(null,"classes","classes",2037804510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"6001","6001",1924916439)], null)], null)], null),new cljs.core.Keyword(null,"classes","classes",2037804510),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"6001","6001",1924916439),"The Structure and Interpretation of Computer Programs",new cljs.core.Keyword(null,"6946","6946",443412550),"The Structure and Interpretation of Classical Mechanics",new cljs.core.Keyword(null,"1806","1806",-1667512160),"Linear Algebra"], null)], null));
om_tut.core.display = (function om_tut$core$display(show){
if(cljs.core.truth_(show)){
return {};
} else {
return {"display": "none"};
}
});
om_tut.core.handle_change = (function om_tut$core$handle_change(e,text,owner){
return om.core.transact_BANG_.call(null,text,(function (_){
return e.target.value;
}));
});
om_tut.core.commit_change = (function om_tut$core$commit_change(text,owner){
return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"editing","editing",1365491601),false);
});
String.prototype.cljs$core$ICloneable$ = true;

String.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (s){
var s__$1 = this;
return (new String(s__$1));
});

String.prototype.om$core$IValue$ = true;

String.prototype.om$core$IValue$_value$arity$1 = (function (s){
var s__$1 = this;
return [cljs.core.str(s__$1)].join('');
});
om_tut.core.editable = (function om_tut$core$editable(text,owner){
if(typeof om_tut.core.t_om_tut$core20487 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRenderState}
 * @implements {cljs.core.IMeta}
 * @implements {om.core.IInitState}
 * @implements {cljs.core.IWithMeta}
*/
om_tut.core.t_om_tut$core20487 = (function (editable,text,owner,meta20488){
this.editable = editable;
this.text = text;
this.owner = owner;
this.meta20488 = meta20488;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
om_tut.core.t_om_tut$core20487.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20489,meta20488__$1){
var self__ = this;
var _20489__$1 = this;
return (new om_tut.core.t_om_tut$core20487(self__.editable,self__.text,self__.owner,meta20488__$1));
});

om_tut.core.t_om_tut$core20487.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20489){
var self__ = this;
var _20489__$1 = this;
return self__.meta20488;
});

om_tut.core.t_om_tut$core20487.prototype.om$core$IInitState$ = true;

om_tut.core.t_om_tut$core20487.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editing","editing",1365491601),false], null);
});

om_tut.core.t_om_tut$core20487.prototype.om$core$IRenderState$ = true;

om_tut.core.t_om_tut$core20487.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__20490){
var self__ = this;
var map__20491 = p__20490;
var map__20491__$1 = ((((!((map__20491 == null)))?((((map__20491.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20491.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20491):map__20491);
var editing = cljs.core.get.call(null,map__20491__$1,new cljs.core.Keyword(null,"editing","editing",1365491601));
var ___$1 = this;
return React.DOM.li(null,React.DOM.span({"style": om_tut.core.display.call(null,cljs.core.not.call(null,editing))},om.core.value.call(null,self__.text)),om.dom.input.call(null,{"style": om_tut.core.display.call(null,editing), "value": om.core.value.call(null,self__.text), "onChange": ((function (___$1,map__20491,map__20491__$1,editing){
return (function (p1__20479_SHARP_){
return om_tut.core.handle_change.call(null,p1__20479_SHARP_,self__.text,self__.owner);
});})(___$1,map__20491,map__20491__$1,editing))
, "onKeyDown": ((function (___$1,map__20491,map__20491__$1,editing){
return (function (p1__20480_SHARP_){
if(cljs.core._EQ_.call(null,p1__20480_SHARP_.key,"Enter")){
return om_tut.core.commit_change.call(null,self__.text,self__.owner);
} else {
return null;
}
});})(___$1,map__20491,map__20491__$1,editing))
, "onBlur": ((function (___$1,map__20491,map__20491__$1,editing){
return (function (e){
return om_tut.core.commit_change.call(null,self__.text,self__.owner);
});})(___$1,map__20491,map__20491__$1,editing))
}),React.DOM.button({"style": om_tut.core.display.call(null,cljs.core.not.call(null,editing)), "onClick": ((function (___$1,map__20491,map__20491__$1,editing){
return (function (){
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"editing","editing",1365491601),true);
});})(___$1,map__20491,map__20491__$1,editing))
},"Edit"));
});

om_tut.core.t_om_tut$core20487.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"editable","editable",-724155443,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"text","text",-150030170,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"text","text",-150030170,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta20488","meta20488",-495966977,null)], null);
});

om_tut.core.t_om_tut$core20487.cljs$lang$type = true;

om_tut.core.t_om_tut$core20487.cljs$lang$ctorStr = "om-tut.core/t_om_tut$core20487";

om_tut.core.t_om_tut$core20487.cljs$lang$ctorPrWriter = (function (this__16916__auto__,writer__16917__auto__,opt__16918__auto__){
return cljs.core._write.call(null,writer__16917__auto__,"om-tut.core/t_om_tut$core20487");
});

om_tut.core.__GT_t_om_tut$core20487 = (function om_tut$core$editable_$___GT_t_om_tut$core20487(editable__$1,text__$1,owner__$1,meta20488){
return (new om_tut.core.t_om_tut$core20487(editable__$1,text__$1,owner__$1,meta20488));
});

}

return (new om_tut.core.t_om_tut$core20487(om_tut$core$editable,text,owner,cljs.core.PersistentArrayMap.EMPTY));
});
om_tut.core.classes_view = (function om_tut$core$classes_view(data,owner){
if(typeof om_tut.core.t_om_tut$core20497 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
om_tut.core.t_om_tut$core20497 = (function (classes_view,data,owner,meta20498){
this.classes_view = classes_view;
this.data = data;
this.owner = owner;
this.meta20498 = meta20498;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
om_tut.core.t_om_tut$core20497.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20499,meta20498__$1){
var self__ = this;
var _20499__$1 = this;
return (new om_tut.core.t_om_tut$core20497(self__.classes_view,self__.data,self__.owner,meta20498__$1));
});

om_tut.core.t_om_tut$core20497.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20499){
var self__ = this;
var _20499__$1 = this;
return self__.meta20498;
});

om_tut.core.t_om_tut$core20497.prototype.om$core$IRender$ = true;

om_tut.core.t_om_tut$core20497.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return React.DOM.div({"id": "classes"},React.DOM.h2(null,"Classes"),cljs.core.apply.call(null,om.dom.ul,null,cljs.core.map.call(null,((function (___$1){
return (function (p1__20493_SHARP_){
return React.DOM.li(null,p1__20493_SHARP_);
});})(___$1))
,cljs.core.vals.call(null,new cljs.core.Keyword(null,"classes","classes",2037804510).cljs$core$IFn$_invoke$arity$1(self__.data)))));
});

om_tut.core.t_om_tut$core20497.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"classes-view","classes-view",413662425,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta20498","meta20498",-529337175,null)], null);
});

om_tut.core.t_om_tut$core20497.cljs$lang$type = true;

om_tut.core.t_om_tut$core20497.cljs$lang$ctorStr = "om-tut.core/t_om_tut$core20497";

om_tut.core.t_om_tut$core20497.cljs$lang$ctorPrWriter = (function (this__16916__auto__,writer__16917__auto__,opt__16918__auto__){
return cljs.core._write.call(null,writer__16917__auto__,"om-tut.core/t_om_tut$core20497");
});

om_tut.core.__GT_t_om_tut$core20497 = (function om_tut$core$classes_view_$___GT_t_om_tut$core20497(classes_view__$1,data__$1,owner__$1,meta20498){
return (new om_tut.core.t_om_tut$core20497(classes_view__$1,data__$1,owner__$1,meta20498));
});

}

return (new om_tut.core.t_om_tut$core20497(om_tut$core$classes_view,data,owner,cljs.core.PersistentArrayMap.EMPTY));
});
om_tut.core.middle_name = (function om_tut$core$middle_name(p__20500){
var map__20503 = p__20500;
var map__20503__$1 = ((((!((map__20503 == null)))?((((map__20503.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20503.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20503):map__20503);
var middle = cljs.core.get.call(null,map__20503__$1,new cljs.core.Keyword(null,"middle","middle",-701029031));
var middle_initial = cljs.core.get.call(null,map__20503__$1,new cljs.core.Keyword(null,"middle-initial","middle-initial",854677765));
if(cljs.core.truth_(middle)){
return [cljs.core.str(" "),cljs.core.str(middle)].join('');
} else {
if(cljs.core.truth_(middle_initial)){
return [cljs.core.str(" "),cljs.core.str(middle_initial),cljs.core.str(".")].join('');
} else {
return null;
}
}
});
om_tut.core.display_name = (function om_tut$core$display_name(p__20505){
var map__20508 = p__20505;
var map__20508__$1 = ((((!((map__20508 == null)))?((((map__20508.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20508.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20508):map__20508);
var contact = map__20508__$1;
var first = cljs.core.get.call(null,map__20508__$1,new cljs.core.Keyword(null,"first","first",-644103046));
var last = cljs.core.get.call(null,map__20508__$1,new cljs.core.Keyword(null,"last","last",1105735132));
return [cljs.core.str(last),cljs.core.str(", "),cljs.core.str(first),cljs.core.str(om_tut.core.middle_name.call(null,contact))].join('');
});
om_tut.core.student_view = (function om_tut$core$student_view(student,owner){
if(typeof om_tut.core.t_om_tut$core20513 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
om_tut.core.t_om_tut$core20513 = (function (student_view,student,owner,meta20514){
this.student_view = student_view;
this.student = student;
this.owner = owner;
this.meta20514 = meta20514;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
om_tut.core.t_om_tut$core20513.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20515,meta20514__$1){
var self__ = this;
var _20515__$1 = this;
return (new om_tut.core.t_om_tut$core20513(self__.student_view,self__.student,self__.owner,meta20514__$1));
});

om_tut.core.t_om_tut$core20513.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20515){
var self__ = this;
var _20515__$1 = this;
return self__.meta20514;
});

om_tut.core.t_om_tut$core20513.prototype.om$core$IRender$ = true;

om_tut.core.t_om_tut$core20513.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return React.DOM.li(null,om_tut.core.display_name.call(null,self__.student));
});

om_tut.core.t_om_tut$core20513.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"student-view","student-view",-390481192,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"student","student",-259089981,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"student","student",-259089981,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta20514","meta20514",-787224964,null)], null);
});

om_tut.core.t_om_tut$core20513.cljs$lang$type = true;

om_tut.core.t_om_tut$core20513.cljs$lang$ctorStr = "om-tut.core/t_om_tut$core20513";

om_tut.core.t_om_tut$core20513.cljs$lang$ctorPrWriter = (function (this__16916__auto__,writer__16917__auto__,opt__16918__auto__){
return cljs.core._write.call(null,writer__16917__auto__,"om-tut.core/t_om_tut$core20513");
});

om_tut.core.__GT_t_om_tut$core20513 = (function om_tut$core$student_view_$___GT_t_om_tut$core20513(student_view__$1,student__$1,owner__$1,meta20514){
return (new om_tut.core.t_om_tut$core20513(student_view__$1,student__$1,owner__$1,meta20514));
});

}

return (new om_tut.core.t_om_tut$core20513(om_tut$core$student_view,student,owner,cljs.core.PersistentArrayMap.EMPTY));
});
om_tut.core.professor_view = (function om_tut$core$professor_view(professor,owner){
if(typeof om_tut.core.t_om_tut$core20520 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
om_tut.core.t_om_tut$core20520 = (function (professor_view,professor,owner,meta20521){
this.professor_view = professor_view;
this.professor = professor;
this.owner = owner;
this.meta20521 = meta20521;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
om_tut.core.t_om_tut$core20520.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20522,meta20521__$1){
var self__ = this;
var _20522__$1 = this;
return (new om_tut.core.t_om_tut$core20520(self__.professor_view,self__.professor,self__.owner,meta20521__$1));
});

om_tut.core.t_om_tut$core20520.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20522){
var self__ = this;
var _20522__$1 = this;
return self__.meta20521;
});

om_tut.core.t_om_tut$core20520.prototype.om$core$IRender$ = true;

om_tut.core.t_om_tut$core20520.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return React.DOM.li(null,React.DOM.div(null,om_tut.core.display_name.call(null,self__.professor)),React.DOM.label(null,"Classes"),cljs.core.apply.call(null,om.dom.ul,null,cljs.core.map.call(null,((function (___$1){
return (function (p1__20516_SHARP_){
return React.DOM.li(null,om.core.value.call(null,p1__20516_SHARP_));
});})(___$1))
,new cljs.core.Keyword(null,"classes","classes",2037804510).cljs$core$IFn$_invoke$arity$1(self__.professor))));
});

om_tut.core.t_om_tut$core20520.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"professor-view","professor-view",-323548855,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"professor","professor",-1265760216,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"professor","professor",-1265760216,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta20521","meta20521",-629756022,null)], null);
});

om_tut.core.t_om_tut$core20520.cljs$lang$type = true;

om_tut.core.t_om_tut$core20520.cljs$lang$ctorStr = "om-tut.core/t_om_tut$core20520";

om_tut.core.t_om_tut$core20520.cljs$lang$ctorPrWriter = (function (this__16916__auto__,writer__16917__auto__,opt__16918__auto__){
return cljs.core._write.call(null,writer__16917__auto__,"om-tut.core/t_om_tut$core20520");
});

om_tut.core.__GT_t_om_tut$core20520 = (function om_tut$core$professor_view_$___GT_t_om_tut$core20520(professor_view__$1,professor__$1,owner__$1,meta20521){
return (new om_tut.core.t_om_tut$core20520(professor_view__$1,professor__$1,owner__$1,meta20521));
});

}

return (new om_tut.core.t_om_tut$core20520(om_tut$core$professor_view,professor,owner,cljs.core.PersistentArrayMap.EMPTY));
});
if(typeof om_tut.core.entry_view !== 'undefined'){
} else {
om_tut.core.entry_view = (function (){var method_table__17231__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17232__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17233__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17234__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17235__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"om-tut.core","entry-view"),((function (method_table__17231__auto__,prefer_table__17232__auto__,method_cache__17233__auto__,cached_hierarchy__17234__auto__,hierarchy__17235__auto__){
return (function (person,_){
return new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(person);
});})(method_table__17231__auto__,prefer_table__17232__auto__,method_cache__17233__auto__,cached_hierarchy__17234__auto__,hierarchy__17235__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17235__auto__,method_table__17231__auto__,prefer_table__17232__auto__,method_cache__17233__auto__,cached_hierarchy__17234__auto__));
})();
}
cljs.core._add_method.call(null,om_tut.core.entry_view,new cljs.core.Keyword(null,"student","student",-1899621508),(function (person,owner){
return om_tut.core.student_view.call(null,person,owner);
}));
cljs.core._add_method.call(null,om_tut.core.entry_view,new cljs.core.Keyword(null,"professor","professor",1388675553),(function (person,owner){
return om_tut.core.professor_view.call(null,person,owner);
}));
om_tut.core.people = (function om_tut$core$people(data){
return cljs.core.mapv.call(null,(function (x){
if(cljs.core.truth_(new cljs.core.Keyword(null,"classes","classes",2037804510).cljs$core$IFn$_invoke$arity$1(x))){
return cljs.core.update_in.call(null,x,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"classes","classes",2037804510)], null),(function (cs){
return cljs.core.mapv.call(null,new cljs.core.Keyword(null,"classes","classes",2037804510).cljs$core$IFn$_invoke$arity$1(data),cs);
}));
} else {
return x;
}
}),new cljs.core.Keyword(null,"people","people",1443537404).cljs$core$IFn$_invoke$arity$1(data));
});
om_tut.core.registry_view = (function om_tut$core$registry_view(data,owner){
if(typeof om_tut.core.t_om_tut$core20526 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
om_tut.core.t_om_tut$core20526 = (function (registry_view,data,owner,meta20527){
this.registry_view = registry_view;
this.data = data;
this.owner = owner;
this.meta20527 = meta20527;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
om_tut.core.t_om_tut$core20526.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20528,meta20527__$1){
var self__ = this;
var _20528__$1 = this;
return (new om_tut.core.t_om_tut$core20526(self__.registry_view,self__.data,self__.owner,meta20527__$1));
});

om_tut.core.t_om_tut$core20526.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20528){
var self__ = this;
var _20528__$1 = this;
return self__.meta20527;
});

om_tut.core.t_om_tut$core20526.prototype.om$core$IRender$ = true;

om_tut.core.t_om_tut$core20526.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return React.DOM.div({"id": "registry"},React.DOM.h2(null,"Registry"),cljs.core.apply.call(null,om.dom.ul,null,om.core.build_all.call(null,om_tut.core.entry_view,om_tut.core.people.call(null,self__.data))));
});

om_tut.core.t_om_tut$core20526.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"registry-view","registry-view",-1679887188,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta20527","meta20527",1741897128,null)], null);
});

om_tut.core.t_om_tut$core20526.cljs$lang$type = true;

om_tut.core.t_om_tut$core20526.cljs$lang$ctorStr = "om-tut.core/t_om_tut$core20526";

om_tut.core.t_om_tut$core20526.cljs$lang$ctorPrWriter = (function (this__16916__auto__,writer__16917__auto__,opt__16918__auto__){
return cljs.core._write.call(null,writer__16917__auto__,"om-tut.core/t_om_tut$core20526");
});

om_tut.core.__GT_t_om_tut$core20526 = (function om_tut$core$registry_view_$___GT_t_om_tut$core20526(registry_view__$1,data__$1,owner__$1,meta20527){
return (new om_tut.core.t_om_tut$core20526(registry_view__$1,data__$1,owner__$1,meta20527));
});

}

return (new om_tut.core.t_om_tut$core20526(om_tut$core$registry_view,data,owner,cljs.core.PersistentArrayMap.EMPTY));
});
om.core.root.call(null,om_tut.core.registry_view,om_tut.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("registry")], null));
om.core.root.call(null,om_tut.core.classes_view,om_tut.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("classes")], null));
om_tut.core.on_js_reload = (function om_tut$core$on_js_reload(){
return null;
});

//# sourceMappingURL=core.js.map?rel=1444836212525