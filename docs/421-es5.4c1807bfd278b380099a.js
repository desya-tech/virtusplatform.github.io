!function(){"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function i(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}(self.webpackChunkappdemo_ng12=self.webpackChunkappdemo_ng12||[]).push([[421],{421:function(t,n,r){r.r(n),r.d(n,{QueryViewModule:function(){return G}});var u=r(2224),a=r(8127),s=r(30),o=r(7749),l=r(7112),c=r(5688),d=r(7147),f=r(7755),g=r(1569);function Z(e,t){1&e&&(d.TgZ(0,"h2",25),d._uU(1,"New Query View"),d.qZA())}function v(e,t){1&e&&(d.TgZ(0,"h2",25),d._uU(1,"Edit Query View"),d.qZA())}function p(e,t){if(1&e&&(d.TgZ(0,"option",30),d._uU(1),d.qZA()),2&e){var i=t.$implicit;d.s9C("value",i.TYPE_ID),d.xp6(1),d.Oqu(i.TYPE_NAME)}}function h(e,t){1&e&&(d.TgZ(0,"div",18),d._uU(1,"*Type required"),d.qZA())}function q(e,t){if(1&e&&(d.TgZ(0,"div"),d.YNc(1,h,2,0,"div",31),d.qZA()),2&e){var i=d.oxw(2);d.xp6(1),d.Q6J("ngIf",i.f.TYPE_ID.errors.required)}}var A=function(e){return{"is-invalid":e}};function m(e,t){if(1&e){var i=d.EpF();d.TgZ(0,"div",26),d.TgZ(1,"label"),d._uU(2,"Type Point"),d.qZA(),d.TgZ(3,"div",27),d.TgZ(4,"select",28),d.NdJ("change",function(e){return d.CHM(i),d.oxw().onSelectClick(e.target.value)}),d.YNc(5,p,2,2,"option",29),d.qZA(),d.qZA(),d.YNc(6,q,2,1,"div",13),d.qZA()}if(2&e){var n=d.oxw();d.xp6(4),d.Q6J("ngClass",d.VKq(3,A,n.submitted&&n.f.TYPE_ID.errors)),d.xp6(1),d.Q6J("ngForOf",n.type),d.xp6(1),d.Q6J("ngIf",n.submitted&&n.f.TYPE_ID.errors)}}function b(e,t){if(1&e&&(d.TgZ(0,"div",11),d.TgZ(1,"label"),d._uU(2,"Query Name/Table View Name"),d.qZA(),d._UZ(3,"input",32),d.qZA()),2&e){var i=d.oxw();d.xp6(3),d.Q6J("ngClass",d.VKq(1,A,i.submitted&&i.f.QUERY_VIEW_NAME.errors))}}function T(e,t){1&e&&(d.TgZ(0,"div",18),d._uU(1,"*required"),d.qZA())}function y(e,t){if(1&e&&(d.TgZ(0,"div"),d.YNc(1,T,2,0,"div",31),d.qZA()),2&e){var i=d.oxw(2);d.xp6(1),d.Q6J("ngIf",i.f.QUERY_VIEW_NAME.errors.required)}}function _(e,t){1&e&&(d.TgZ(0,"div",18),d._uU(1,"*name sudah digunakan"),d.qZA())}function w(e,t){1&e&&(d.TgZ(0,"div",18),d._uU(1,"*tidak boleh space&special character exept _ "),d.qZA())}function E(e,t){if(1&e&&(d.TgZ(0,"div",11),d.TgZ(1,"label"),d._uU(2,"Query Name/Table View Name"),d.qZA(),d._UZ(3,"input",33),d.YNc(4,y,2,1,"div",13),d.YNc(5,_,2,0,"div",31),d.YNc(6,w,2,0,"div",31),d.qZA()),2&e){var i=d.oxw();d.xp6(3),d.Q6J("ngClass",d.VKq(4,A,i.submitted&&i.f.QUERY_VIEW_NAME.errors)),d.xp6(1),d.Q6J("ngIf",i.submitted&&i.f.QUERY_VIEW_NAME.errors),d.xp6(1),d.Q6J("ngIf",!0===i.notuniqueTableName),d.xp6(1),d.Q6J("ngIf",!0===i.forformatTableName)}}function x(e,t){1&e&&(d.TgZ(0,"div",18),d._uU(1,"*query required"),d.qZA())}function N(e,t){if(1&e&&(d.TgZ(0,"div"),d.YNc(1,x,2,0,"div",31),d.qZA()),2&e){var i=d.oxw();d.xp6(1),d.Q6J("ngIf",i.f.QUERY.errors.required)}}function U(e,t){1&e&&(d.TgZ(0,"div",34),d._uU(1," Query Succesfuly! but not required column"),d.qZA())}function Y(e,t){1&e&&(d.TgZ(0,"div",35),d._uU(1," Query Succesfuly!"),d.qZA())}function I(e,t){1&e&&(d.TgZ(0,"div",36),d._uU(1," Query Failed!"),d.qZA())}function Q(e,t){1&e&&(d.TgZ(0,"div"),d._uU(1,"table must have column : EMAIL, COMPANY_NAME, VALUE"),d.qZA())}function k(e,t){1&e&&(d.TgZ(0,"div"),d._uU(1,"table must have column : COMPANY_NAME, VALUE"),d.qZA())}function J(e,t){1&e&&d._UZ(0,"span")}function M(e,t){if(1&e){var i=d.EpF();d.TgZ(0,"button",37),d.NdJ("click",function(){return d.CHM(i),d.oxw().onNextClick()}),d.YNc(1,J,1,0,"span",13),d._uU(2," \xa0Save\xa0 "),d.qZA()}if(2&e){var n=d.oxw();d.Q6J("disabled",n.loading),d.xp6(1),d.Q6J("ngIf",n.loading)}}function C(e,t){if(1&e&&(d.TgZ(0,"th"),d.TgZ(1,"h6"),d._uU(2),d.qZA(),d.qZA()),2&e){var i=t.$implicit;d.xp6(2),d.Oqu(i)}}function V(e,t){if(1&e&&(d.TgZ(0,"td",39),d.TgZ(1,"p"),d._uU(2),d.qZA(),d.qZA()),2&e){var i=t.$implicit,n=d.oxw().$implicit,r=d.oxw();d.xp6(2),d.Oqu(r.getvalue(i,n))}}function S(e,t){if(1&e&&(d.TgZ(0,"tr"),d.YNc(1,V,3,1,"td",38),d.qZA()),2&e){var i=d.oxw();d.xp6(1),d.Q6J("ngForOf",i.fieldlist)}}var P,O=((P=function(){function t(i,n,r,u,a){e(this,t),this.formBuilder=i,this.route=n,this.router=r,this.queryViewService=u,this.alertService=a,this.subs=new c.Y,this.loading=!1,this.submitted=!1,this.data=null,this.value=null,this.fieldlist=null,this.tablename=null,this.type=[{TYPE_ID:1,TYPE_NAME:"USER"},{TYPE_ID:2,TYPE_NAME:"COMPANY"}],this.tablelist=null}return i(t,[{key:"ngOnInit",value:function(){var e=this;this.id=this.route.snapshot.params.id,this.isAddMode=!this.id,this.form=this.formBuilder.group({QUERY_VIEW_NAME:["",a.kI.required],QUERY:["",a.kI.required],TYPE_ID:["",a.kI.required]}),this.subs.add(this.queryViewService.getByTableName().subscribe(function(t){e.tablelist=t})),this.isAddMode||this.subs.add(this.queryViewService.getById(this.id).pipe((0,l.P)()).subscribe(function(t){e.form.patchValue(t),e.note=1===t.TYPE_ID}))}},{key:"f",get:function(){return this.form.controls}},{key:"onSubmit",value:function(){if(this.nextClicked){if(this.submitted=!0,this.alertService.clear(),this.isAddMode){if(this.uniqueTableName(this.tablelist,this.form.value.QUERY_VIEW_NAME),this.formatTableName(this.form.value.QUERY_VIEW_NAME),console.log(this.notuniqueTableName,"tablenameuniq"),console.log(this.forformatTableName,"tableformat"),this.form.invalid||!0===this.notuniqueTableName||!0===this.forformatTableName)return}else if(this.form.invalid)return;this.loading=!0,this.isAddMode?this.create():this.update()}else{if(this.submitted=!0,this.form.invalid)return;this.querytesting(this.note)}}},{key:"create",value:function(){var e=this;this.subs.add(this.queryViewService.create(this.form.value).pipe((0,l.P)()).subscribe({next:function(){e.alertService.success(),e.router.navigate(["../"],{relativeTo:e.route})},error:function(t){e.alertService.error(t),e.loading=!1}}))}},{key:"update",value:function(){var e=this;this.alertService.loading(),this.subs.add(this.queryViewService.update(this.id,this.form.value).pipe((0,l.P)()).subscribe({next:function(){e.alertService.success(),e.router.navigate(["../../"],{relativeTo:e.route})},error:function(t){e.alertService.error(t),e.loading=!1}}))}},{key:"querytesting",value:function(e){var t=this;this.subs.add(this.queryViewService.querytesting(this.form.value).pipe((0,l.P)()).subscribe(function(i){t.value=i,t.fieldlist=Object.keys(i[0]);var n=t.fieldlist.filter(function(t){return 1==e?"EMAIL"===t||"VALUE"===t||"COMPANY_NAME"===t:0==e?"VALUE"===t||"COMPANY_NAME"===t:void 0});3===n.length&&!0===e||2===n.length&&!1===e?(t.queryviewstatus=!0,t.queryviewstatuswarning=null):(t.queryviewstatuswarning=!0,t.queryviewstatus=null)},function(e){t.queryviewstatus=!1,t.queryviewstatuswarning=!1,t.value=null,t.fieldlist=null}))}},{key:"onNextClick",value:function(){this.nextClicked=!0}},{key:"onPreviousClick",value:function(){this.nextClicked=!1}},{key:"onSelectClick",value:function(e){""!=this.form.value.QUERY&&(this.value=null,this.fieldlist=null,this.queryviewstatuswarning=!1,this.queryviewstatus=null),1===parseInt(e)&&(this.note=!0),2===parseInt(e)&&(this.note=!1)}},{key:"getvalue",value:function(e,t){return t[e]}},{key:"uniqueTableName",value:function(e,t){var i=this;e.forEach(function(e){i.notuniqueTableName=e.QUERY_VIEW_NAME==t})}},{key:"formatTableName",value:function(e){this.forformatTableName=!!/[ `!@#$%^&*()+\-=\[\]{};':"\\|,.<>\/?~]/.test(e)}},{key:"ngOnDestroy",value:function(){this.subs.unsubscribe()}}]),t}()).\u0275fac=function(e){return new(e||P)(d.Y36(a.qu),d.Y36(s.gz),d.Y36(s.F0),d.Y36(f.b),d.Y36(g.c9))},P.\u0275cmp=d.Xpm({type:P,selectors:[["app-add-edit-query-view"]],decls:49,vars:18,consts:[[1,"title","d-flex","align-items-center","flex-wrap","mb-30"],["class","mr-40",4,"ngIf"],["routerLink","/query-view",1,"main-btn","primary-btn-outline","rounded-btn","btn-hover"],[1,"lni","lni-chevron-left","mr-5"],[1,"row"],[1,"col-lg-6"],[1,"card-style","mb-30"],[3,"formGroup","ngSubmit"],[1,"divider"],["class","select-style-1",4,"ngIf"],["class","input-style-1",4,"ngIf"],[1,"input-style-1"],["formControlName","QUERY","placeholder","query for postgressql","rows","5",3,"ngClass"],[4,"ngIf"],["class","alert alert-warning",4,"ngIf"],["class","alert alert-success",4,"ngIf"],["class","alert alert-danger",4,"ngIf"],["type","submit",1,"main-btn","primary-btn","rounded-btn","btn-hover",3,"click"],[2,"color","red"],["type","submit","class","main-btn primary-btn rounded-btn btn-hover",3,"disabled","click",4,"ngIf"],[1,"mb-10"],[1,"text-sm","mb-20"],[1,"table-wrapper","table-responsive"],[1,"table","striped-table"],[4,"ngFor","ngForOf"],[1,"mr-40"],[1,"select-style-1"],[1,"select-position"],["formControlName","TYPE_ID",3,"ngClass","change"],[3,"value",4,"ngFor","ngForOf"],[3,"value"],["style","color:red",4,"ngIf"],["type","text","formControlName","QUERY_VIEW_NAME","disabled","",3,"ngClass"],["type","text","formControlName","QUERY_VIEW_NAME",3,"ngClass"],[1,"alert","alert-warning"],[1,"alert","alert-success"],[1,"alert","alert-danger"],["type","submit",1,"main-btn","primary-btn","rounded-btn","btn-hover",3,"disabled","click"],["class","min-width",4,"ngFor","ngForOf"],[1,"min-width"]],template:function(e,t){1&e&&(d.TgZ(0,"div",0),d.YNc(1,Z,2,0,"h2",1),d.YNc(2,v,2,0,"h2",1),d.TgZ(3,"button",2),d._UZ(4,"i",3),d._uU(5,"Back"),d.qZA(),d.qZA(),d.TgZ(6,"div",4),d.TgZ(7,"div",5),d.TgZ(8,"div",6),d.TgZ(9,"form",7),d.NdJ("ngSubmit",function(){return t.onSubmit()}),d.TgZ(10,"span",8),d._UZ(11,"hr"),d.qZA(),d.YNc(12,m,7,5,"div",9),d.YNc(13,b,4,3,"div",10),d.YNc(14,E,7,6,"div",10),d.TgZ(15,"div",11),d.TgZ(16,"label"),d._uU(17,"Query"),d.qZA(),d._UZ(18,"textarea",12),d.YNc(19,N,2,1,"div",13),d.YNc(20,U,2,0,"div",14),d.YNc(21,Y,2,0,"div",15),d.YNc(22,I,2,0,"div",16),d.TgZ(23,"button",17),d.NdJ("click",function(){return t.onPreviousClick()}),d._uU(24," \xa0Query Testing\xa0 "),d.qZA(),d.qZA(),d.TgZ(25,"div",18),d._uU(26,"*Note"),d.qZA(),d.YNc(27,Q,2,0,"div",13),d.YNc(28,k,2,0,"div",13),d.TgZ(29,"span",8),d._UZ(30,"hr"),d.qZA(),d.TgZ(31,"div"),d.TgZ(32,"button",2),d._uU(33," Cancel "),d.qZA(),d._uU(34,"\xa0 "),d.YNc(35,M,3,2,"button",19),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.TgZ(36,"div",5),d.TgZ(37,"div",6),d.TgZ(38,"h6",20),d._uU(39,"Query Result"),d.qZA(),d.TgZ(40,"p",21),d._uU(41," limit result 10 row "),d.qZA(),d.TgZ(42,"div",22),d.TgZ(43,"table",23),d.TgZ(44,"thead"),d.TgZ(45,"tr"),d.YNc(46,C,3,1,"th",24),d.qZA(),d.qZA(),d.TgZ(47,"tbody"),d.YNc(48,S,2,1,"tr",24),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.qZA()),2&e&&(d.xp6(1),d.Q6J("ngIf",t.isAddMode),d.xp6(1),d.Q6J("ngIf",!t.isAddMode),d.xp6(7),d.Q6J("formGroup",t.form),d.xp6(3),d.Q6J("ngIf",t.isAddMode),d.xp6(1),d.Q6J("ngIf",!t.isAddMode),d.xp6(1),d.Q6J("ngIf",t.isAddMode),d.xp6(4),d.Q6J("ngClass",d.VKq(16,A,t.submitted&&t.f.QUERY.errors)),d.xp6(1),d.Q6J("ngIf",t.submitted&&t.f.QUERY.errors),d.xp6(1),d.Q6J("ngIf",t.queryviewstatuswarning),d.xp6(1),d.Q6J("ngIf",t.queryviewstatus),d.xp6(1),d.Q6J("ngIf",!1===t.queryviewstatus),d.xp6(5),d.Q6J("ngIf",t.note),d.xp6(1),d.Q6J("ngIf",!1===t.note),d.xp6(7),d.Q6J("ngIf",t.queryviewstatus),d.xp6(11),d.Q6J("ngForOf",t.fieldlist),d.xp6(2),d.Q6J("ngForOf",t.value))},directives:[u.O5,s.rH,a._Y,a.JL,a.sg,a.Fj,a.JJ,a.u,u.mk,u.sg,a.EJ,a.YN,a.Kr],styles:[""]}),P),R=function(){var t=function(){function t(){e(this,t)}return i(t,[{key:"ngOnInit",value:function(){}}]),t}();return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=d.Xpm({type:t,selectors:[["app-query-view-layout"]],decls:1,vars:0,template:function(e,t){1&e&&d._UZ(0,"router-outlet")},directives:[s.lC],styles:[""]}),t}(),D=r(4693),F=r.n(D),W=r(7333),L=r(4968);function B(e,t){1&e&&(d.TgZ(0,"div"),d.TgZ(1,"p"),d._uU(2,"User"),d.qZA(),d.qZA())}function j(e,t){1&e&&(d.TgZ(0,"p"),d._uU(1,"Company"),d.qZA())}function $(e,t){1&e&&(d.TgZ(0,"span"),d._UZ(1,"i",32),d.qZA())}function H(e,t){if(1&e){var i=d.EpF();d.TgZ(0,"tr"),d.TgZ(1,"td",24),d.YNc(2,B,3,0,"div",25),d.YNc(3,j,2,0,"ng-template",null,26,d.W1O),d.qZA(),d.TgZ(5,"td",24),d.TgZ(6,"p"),d._uU(7),d.qZA(),d.qZA(),d.TgZ(8,"td",24),d.TgZ(9,"p"),d._uU(10),d.qZA(),d.qZA(),d.TgZ(11,"td"),d.TgZ(12,"div",27),d.TgZ(13,"button",28),d._UZ(14,"i",29),d.qZA(),d._uU(15,"\xa0 "),d.TgZ(16,"button",30),d.NdJ("click",function(){var e=d.CHM(i).$implicit;return d.oxw().confirmBox("delete",e,e.QUERY_VIEW_NAME)}),d.YNc(17,$,2,0,"span",31),d.qZA(),d.qZA(),d.qZA(),d.qZA()}if(2&e){var n=t.$implicit,r=d.MAs(4);d.xp6(2),d.Q6J("ngIf",1===n.TYPE_ID)("ngIfElse",r),d.xp6(5),d.Oqu(n.QUERY_VIEW_NAME),d.xp6(3),d.Oqu(n.QUERY),d.xp6(3),d.MGl("routerLink","edit/",n.QUERY_VIEW_ID,""),d.xp6(3),d.Q6J("disabled",n.isDeleting),d.xp6(1),d.Q6J("ngIf",!n.isDeleting)}}var K=function(e,t){return{itemsPerPage:e,currentPage:t}},X=[{path:"query-view",component:R,children:[{path:"",component:function(){var t=function(){function t(i,n){e(this,t),this.queryViewService=i,this.alertService=n,this.subs=new c.Y,this.isManaging=!1,this.gridLayout=!0,this.activities=null,this.queryview=null,this.p=1,this.count=10,this.countdata=null}return i(t,[{key:"ngOnInit",value:function(){var e=this;this.subs.add(this.queryViewService.getAll().pipe((0,l.P)()).subscribe(function(t){e.queryview=t,e.countdata=e.queryview.length}))}},{key:"delete",value:function(e,t){var i=this;this.alertService.loading();var n=this.queryview.find(function(t){return t.QUERY_VIEW_ID===e.QUERY_VIEW_ID});this.subs.add(this.queryViewService.delete(e.QUERY_VIEW_ID,t).pipe((0,l.P)()).subscribe(function(){n.isDeleting=!0,i.queryview=i.queryview.filter(function(t){return t.QUERY_VIEW_ID!==e.QUERY_VIEW_ID}),i.countdata=i.queryview.length,i.alertService.success()},function(e){i.alertService.error(e)}))}},{key:"onCBChanged",value:function(e){this.isManaging=e}},{key:"confirmBox",value:function(e,t,i){var n=this;"delete"==e&&F().fire({title:"Are you sure want to delete?",text:t.QUERY_VIEW_NAME,icon:"warning",showCancelButton:!0,confirmButtonText:"Yes, delete it!",cancelButtonText:"Cancel"}).then(function(e){e.value&&n.delete(t,i)})}},{key:"ngOnDestroy",value:function(){this.subs.unsubscribe()}}]),t}();return t.\u0275fac=function(e){return new(e||t)(d.Y36(f.b),d.Y36(g.c9))},t.\u0275cmp=d.Xpm({type:t,selectors:[["app-query-view"]],decls:51,vars:12,consts:[[1,"title","d-flex","align-items-center","flex-wrap","mb-30"],[1,"mr-40"],["routerLink","add",1,"main-btn","primary-btn","btn-hover","btn-sm"],[1,"lni","lni-plus","mr-5"],[1,"tables-wrapper"],[1,"row"],[1,"col-lg-12"],[1,"card-style","mb-30"],[1,"row","align-items-center"],[1,"col-md-6"],[1,"d-flex","flex-wrap","justify-content-between","align-items-center","py-3"],[1,"left"],[1,"right"],[1,"table-search","d-flex"],["action","#"],["type","text","name","something","placeholder","Search...",3,"ngModel","ngModelChange"],[1,"lni","lni-search-alt"],[1,"table-wrapper","table-responsive"],[1,"table"],[4,"ngFor","ngForOf"],[1,"pt-10","d-flex","flex-wrap","justify-content-between"],[1,"text-sm","text-gray"],[1,"text-right"],[3,"pageChange"],[1,"min-width"],[4,"ngIf","ngIfElse"],["off",""],[1,"action"],[1,"text-primary",2,"cursor","pointer",3,"routerLink"],[1,"lni","lni-pencil-alt"],[1,"text-danger",3,"disabled","click"],[4,"ngIf"],[1,"lni","lni-trash-can"]],template:function(e,t){1&e&&(d.TgZ(0,"div",0),d.TgZ(1,"h2",1),d._uU(2,"Query View"),d.qZA(),d.TgZ(3,"button",2),d._UZ(4,"i",3),d._uU(5," New"),d.qZA(),d.qZA(),d.TgZ(6,"div",4),d.TgZ(7,"div",5),d.TgZ(8,"div",6),d.TgZ(9,"div",7),d.TgZ(10,"div",8),d._UZ(11,"div",9),d.qZA(),d.TgZ(12,"div",10),d.TgZ(13,"div",11),d.TgZ(14,"p"),d._uU(15,"Show "),d.TgZ(16,"span"),d._uU(17,"10"),d.qZA(),d._uU(18," entries"),d.qZA(),d.qZA(),d.TgZ(19,"div",12),d.TgZ(20,"div",13),d.TgZ(21,"form",14),d.TgZ(22,"input",15),d.NdJ("ngModelChange",function(e){return t.filterdata=e}),d.qZA(),d.TgZ(23,"button"),d._UZ(24,"i",16),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.TgZ(25,"div",17),d.TgZ(26,"table",18),d.TgZ(27,"thead"),d.TgZ(28,"tr"),d.TgZ(29,"th"),d.TgZ(30,"h6"),d._uU(31,"Type"),d.qZA(),d.qZA(),d.TgZ(32,"th"),d.TgZ(33,"h6"),d._uU(34,"Query Name/table_name"),d.qZA(),d.qZA(),d.TgZ(35,"th"),d.TgZ(36,"h6"),d._uU(37,"Query"),d.qZA(),d.qZA(),d.TgZ(38,"th"),d.TgZ(39,"h6"),d._uU(40,"Action"),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.TgZ(41,"tbody"),d.YNc(42,H,18,7,"tr",19),d.ALo(43,"paginate"),d.ALo(44,"filter"),d.qZA(),d.qZA(),d.qZA(),d.TgZ(45,"div",20),d.TgZ(46,"div",11),d.TgZ(47,"p",21),d._uU(48),d.qZA(),d.qZA(),d.TgZ(49,"div",22),d.TgZ(50,"pagination-controls",23),d.NdJ("pageChange",function(e){return t.p=e}),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.qZA()),2&e&&(d.xp6(22),d.Q6J("ngModel",t.filterdata),d.xp6(20),d.Q6J("ngForOf",d.xi3(43,3,d.xi3(44,6,t.queryview,t.filterdata),d.WLB(9,K,t.count,t.p))),d.xp6(6),d.hij("Total ",t.countdata," users"))},directives:[s.rH,a._Y,a.JL,a.F,a.Fj,a.JJ,a.On,u.sg,W.LS,u.O5],pipes:[W._s,L.Z],styles:[""]}),t}()},{path:"add",component:O,canActivate:[o.p]},{path:"edit/:id",component:O,canActivate:[o.p]}]}],z=function(){var t=function t(){e(this,t)};return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=d.oAB({type:t}),t.\u0275inj=d.cJS({imports:[[s.Bz.forChild(X)],s.Bz]}),t}(),G=function(){var t=function t(){e(this,t)};return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=d.oAB({type:t}),t.\u0275inj=d.cJS({imports:[[u.ez,a.UX,z,W.JX,L.h,a.u5]]}),t}()}}])}();