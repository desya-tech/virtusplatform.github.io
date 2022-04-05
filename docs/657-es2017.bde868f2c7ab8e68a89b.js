"use strict";(self.webpackChunkappdemo_ng12=self.webpackChunkappdemo_ng12||[]).push([[657],{7657:function(t,e,i){i.r(e),i.d(e,{BpManagementModule:function(){return Q}});var n=i(2224),s=i(30),r=i(8127),o=i(7112),l=i(5688),u=i(7147),d=i(4376),c=i(1569),a=i(7393),p=i(432),g=i(2016);function Z(t,e){1&t&&(u.TgZ(0,"h2",18),u._uU(1,"New Bp"),u.qZA())}function h(t,e){1&t&&(u.TgZ(0,"h2",18),u._uU(1,"Edit Bp"),u.qZA())}function b(t,e){1&t&&(u.TgZ(0,"div",19),u.TgZ(1,"label"),u._uU(2,"Company Name"),u.qZA(),u._UZ(3,"input",20),u.qZA())}function f(t,e){if(1&t&&(u.TgZ(0,"option",22),u._uU(1),u.qZA()),2&t){const t=e.$implicit;u.s9C("value",t.COMPANY_ID),u.xp6(1),u.Oqu(t.COMPANY_NAME)}}function A(t,e){1&t&&(u.TgZ(0,"div",24),u._uU(1,"*Company required"),u.qZA())}function m(t,e){if(1&t&&(u.TgZ(0,"div"),u.YNc(1,A,2,0,"div",23),u.qZA()),2&t){const t=u.oxw(2);u.xp6(1),u.Q6J("ngIf",t.f.COMPANY_ID.errors.required)}}const _=function(t){return{"is-invalid":t}};function q(t,e){if(1&t){const t=u.EpF();u.TgZ(0,"div",11),u.TgZ(1,"label"),u._uU(2,"Company Name"),u.qZA(),u.TgZ(3,"div",12),u.TgZ(4,"select",21),u.NdJ("change",function(e){return u.CHM(t),u.oxw().onSelectClick(e.target.value)}),u.YNc(5,f,2,2,"option",14),u.qZA(),u.qZA(),u.YNc(6,m,2,1,"div",15),u.qZA()}if(2&t){const t=u.oxw();u.xp6(4),u.Q6J("ngClass",u.VKq(3,_,t.submitted&&t.f.COMPANY_ID.errors)),u.xp6(1),u.Q6J("ngForOf",t.bplist),u.xp6(1),u.Q6J("ngIf",t.submitted&&t.f.COMPANY_ID.errors)}}function T(t,e){if(1&t&&(u.TgZ(0,"option",22),u._uU(1),u.qZA()),2&t){const t=e.$implicit;u.s9C("value",t.BP_GROUP_ID),u.xp6(1),u.Oqu(t.BP_GROUP_NAME)}}function v(t,e){1&t&&(u.TgZ(0,"div",24),u._uU(1,"*bp group required"),u.qZA())}function P(t,e){if(1&t&&(u.TgZ(0,"div"),u.YNc(1,v,2,0,"div",23),u.qZA()),2&t){const t=u.oxw();u.xp6(1),u.Q6J("ngIf",t.f.BP_GROUP_ID.errors.required)}}function x(t,e){1&t&&u._UZ(0,"span")}const N=function(){return{standalone:!0}};let y=(()=>{class t{constructor(t,e,i,n,s,r,o){this.formBuilder=t,this.route=e,this.router=i,this.industryService=n,this.alertService=s,this.bpService=r,this.bpGroupService=o,this.subs=new l.Y,this.loading=!1,this.submitted=!1,this.bplist=null,this.industrylist=null,this.bpname=null,this.selectedIndustry=null,this.data=null,this.bpgroup=null}ngOnInit(){this.id=this.route.snapshot.params.id,this.isAddMode=!this.id,this.form=this.formBuilder.group({M_BP_ID:[0],COMPANY_ID:["",r.kI.required],COMPANY_NAME:[""],industry_list:[""],BP_GROUP_ID:["",r.kI.required]}),this.isAddMode||(this.subs.add(this.industryService.getById(this.id).pipe((0,o.P)()).subscribe(t=>this.form.patchValue(t))),this.subs.add(this.industryService.getbyindustry(this.id).pipe((0,o.P)()).subscribe(t=>{this.selectedIndustry=t}))),this.subs.add(this.bpService.getAllbyUser().subscribe(t=>this.bplist=t)),this.subs.add(this.industryService.getlistindustry().subscribe(t=>this.industrylist=t)),this.subs.add(this.bpGroupService.getAll().subscribe(t=>this.bpgroup=t))}get f(){return this.form.controls}onSubmit(){this.submitted=!0,this.alertService.clear(),!this.form.invalid&&(this.loading=!0,this.createIndustry())}createIndustry(){this.alertService.loading(),this.subs.add(this.bpService.create(this.form.value).pipe((0,o.P)()).subscribe({next:()=>{this.alertService.success(),this.router.navigate(["/bp-management"],{relativeTo:this.route})},error:t=>{this.alertService.error(t),this.loading=!1}}))}onSelection(t){this.form.get("industry_list").setValue(t)}onSelectClick(t){this.bpname=this.bplist.filter(e=>e.COMPANY_ID===t)[0].COMPANY_NAME,this.form.get("COMPANY_NAME").setValue(this.bpname)}ngOnDestroy(){this.subs.unsubscribe()}}return t.\u0275fac=function(e){return new(e||t)(u.Y36(r.qu),u.Y36(s.gz),u.Y36(s.F0),u.Y36(d.L),u.Y36(c.c9),u.Y36(a.m),u.Y36(p._))},t.\u0275cmp=u.Xpm({type:t,selectors:[["app-bp-add-edit"]],decls:37,vars:17,consts:[[1,"title","d-flex","align-items-center","flex-wrap","mb-30"],["class","mr-40",4,"ngIf"],["routerLink","/bp-management",1,"main-btn","primary-btn-outline","rounded-btn","btn-hover"],[1,"lni","lni-chevron-left","mr-5"],[1,"row"],[3,"formGroup","ngSubmit"],[1,"col-lg-6"],[1,"card-style","mb-30"],[1,"divider"],["class","input-style-1",4,"ngIf"],["class","select-style-1",4,"ngIf"],[1,"select-style-1"],[1,"select-position"],["formControlName","BP_GROUP_ID",3,"ngClass"],[3,"value",4,"ngFor","ngForOf"],[4,"ngIf"],["bindLabel","INDUSTRY_NAME","placeholder","Select Industry","appendTo","body",3,"items","multiple","ngModel","ngModelOptions","change","ngModelChange"],[1,"main-btn","primary-btn","rounded-btn","btn-hover",3,"disabled"],[1,"mr-40"],[1,"input-style-1"],["type","text","formControlName","COMPANY_NAME","disabled",""],["formControlName","COMPANY_ID",3,"ngClass","change"],[3,"value"],["style","color:red",4,"ngIf"],[2,"color","red"]],template:function(t,e){1&t&&(u.TgZ(0,"div",0),u.YNc(1,Z,2,0,"h2",1),u.YNc(2,h,2,0,"h2",1),u.TgZ(3,"button",2),u._UZ(4,"i",3),u._uU(5,"Back"),u.qZA(),u.qZA(),u.TgZ(6,"div",4),u.TgZ(7,"form",5),u.NdJ("ngSubmit",function(){return e.onSubmit()}),u.TgZ(8,"div",6),u.TgZ(9,"div",7),u.TgZ(10,"h5"),u._uU(11,"Business Partner"),u.qZA(),u.TgZ(12,"span",8),u._UZ(13,"hr"),u.qZA(),u.YNc(14,b,4,0,"div",9),u.YNc(15,q,7,5,"div",10),u.TgZ(16,"div",11),u.TgZ(17,"label"),u._uU(18,"Bp Group"),u.qZA(),u.TgZ(19,"div",12),u.TgZ(20,"select",13),u.YNc(21,T,2,2,"option",14),u.qZA(),u.qZA(),u.YNc(22,P,2,1,"div",15),u.qZA(),u.TgZ(23,"div"),u.TgZ(24,"label"),u._uU(25,"Industry"),u.qZA(),u.TgZ(26,"div",12),u.TgZ(27,"ng-select",16),u.NdJ("change",function(t){return e.onSelection(t)})("ngModelChange",function(t){return e.selectedIndustry=t}),u.qZA(),u.qZA(),u.qZA(),u.TgZ(28,"span",8),u._UZ(29,"hr"),u.qZA(),u.TgZ(30,"div"),u.TgZ(31,"button",2),u._uU(32," Cancel "),u.qZA(),u._uU(33,"\xa0 "),u.TgZ(34,"button",17),u.YNc(35,x,1,0,"span",15),u._uU(36," \xa0Save\xa0 "),u.qZA(),u.qZA(),u.qZA(),u.qZA(),u.qZA(),u.qZA()),2&t&&(u.xp6(1),u.Q6J("ngIf",e.isAddMode),u.xp6(1),u.Q6J("ngIf",!e.isAddMode),u.xp6(5),u.Q6J("formGroup",e.form),u.xp6(7),u.Q6J("ngIf",!e.isAddMode),u.xp6(1),u.Q6J("ngIf",e.isAddMode),u.xp6(5),u.Q6J("ngClass",u.VKq(14,_,e.submitted&&e.f.BP_GROUP_ID.errors)),u.xp6(1),u.Q6J("ngForOf",e.bpgroup),u.xp6(1),u.Q6J("ngIf",e.submitted&&e.f.BP_GROUP_ID.errors),u.xp6(5),u.Q6J("items",e.industrylist)("multiple",!0)("ngModel",e.selectedIndustry)("ngModelOptions",u.DdM(16,N)),u.xp6(7),u.Q6J("disabled",e.loading),u.xp6(1),u.Q6J("ngIf",e.loading))},directives:[n.O5,s.rH,r._Y,r.JL,r.sg,r.EJ,r.JJ,r.u,n.mk,n.sg,g.w9,r.On,r.Fj,r.YN,r.Kr],styles:[""]}),t})(),I=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=u.Xpm({type:t,selectors:[["app-bp-layout"]],decls:1,vars:0,template:function(t,e){1&t&&u._UZ(0,"router-outlet")},directives:[s.lC],styles:[""]}),t})();var M=i(4693),U=i.n(M),O=i(7333),Y=i(4968);function C(t,e){if(1&t&&(u.TgZ(0,"p"),u._uU(1),u.qZA()),2&t){const t=e.$implicit;u.xp6(1),u.Oqu(t.INDUSTRY_NAME)}}function B(t,e){1&t&&(u.TgZ(0,"span"),u._UZ(1,"i",30),u.qZA())}function S(t,e){if(1&t){const t=u.EpF();u.TgZ(0,"tr"),u.TgZ(1,"td",24),u.TgZ(2,"p"),u._uU(3),u.qZA(),u.qZA(),u.TgZ(4,"td",24),u.TgZ(5,"p"),u._uU(6),u.qZA(),u.qZA(),u.TgZ(7,"td",24),u.YNc(8,C,2,1,"p",19),u.qZA(),u.TgZ(9,"td"),u.TgZ(10,"div",25),u.TgZ(11,"button",26),u._UZ(12,"i",27),u.qZA(),u._uU(13,"\xa0 "),u.TgZ(14,"button",28),u.NdJ("click",function(){const e=u.CHM(t).$implicit;return u.oxw().confirmBox("delete",e)}),u.YNc(15,B,2,0,"span",29),u.qZA(),u.qZA(),u.qZA(),u.qZA()}if(2&t){const t=e.$implicit,i=u.oxw();u.xp6(3),u.Oqu(t.COMPANY_NAME),u.xp6(3),u.Oqu(i.setbpname(t.BP_GROUP_ID)),u.xp6(2),u.Q6J("ngForOf",t.industry_list),u.xp6(3),u.MGl("routerLink","edit/",t.M_BP_ID,""),u.xp6(3),u.Q6J("disabled",t.isDeleting),u.xp6(1),u.Q6J("ngIf",!t.isDeleting)}}const J=function(t,e){return{itemsPerPage:t,currentPage:e}},w=[{path:"bp-management",component:I,children:[{path:"",component:(()=>{class t{constructor(t,e,i){this.bpService=t,this.bpGroupService=e,this.alertService=i,this.subs=new l.Y,this.mbplist=null,this.groupPointBp=null,this.p=1,this.count=10,this.countuser=null,this.countdata=null}ngOnInit(){this.subs.add(this.bpService.getmbp().pipe((0,o.P)()).subscribe(t=>{this.mbplist=t,this.countdata=this.mbplist.length})),this.subs.add(this.bpGroupService.getAll().pipe((0,o.P)()).subscribe(t=>this.groupPointBp=t))}delete(t){this.alertService.loading();const e=this.mbplist.find(e=>e.M_BP_ID===t.M_BP_ID);this.subs.add(this.bpService.deletembp(t.M_BP_ID).pipe((0,o.P)()).subscribe(()=>{e.isDeleting=!0,this.mbplist=this.mbplist.filter(e=>e.M_BP_ID!==t.M_BP_ID),this.countdata=this.mbplist.length,this.alertService.success()},t=>{this.alertService.error(t)}))}setbpname(t){if(null!==this.groupPointBp)return null==t?null:this.groupPointBp.find(e=>e.BP_GROUP_ID===t).BP_GROUP_NAME}confirmBox(t,e){"delete"==t&&U().fire({title:"Are you sure want to delete?",text:e.COMPANY_NAME,icon:"warning",showCancelButton:!0,confirmButtonText:"Yes, delete it!",cancelButtonText:"Cancel"}).then(t=>{t.value&&this.delete(e)})}ngOnDestroy(){this.subs.unsubscribe()}}return t.\u0275fac=function(e){return new(e||t)(u.Y36(a.m),u.Y36(p._),u.Y36(c.c9))},t.\u0275cmp=u.Xpm({type:t,selectors:[["app-bp-management"]],decls:51,vars:12,consts:[[1,"title","d-flex","align-items-center","flex-wrap","mb-30"],[1,"mr-40"],["routerLink","add",1,"main-btn","primary-btn","btn-hover","btn-sm"],[1,"lni","lni-plus","mr-5"],[1,"tables-wrapper"],[1,"row"],[1,"col-lg-12"],[1,"card-style","mb-30"],[1,"row","align-items-center"],[1,"col-md-6"],[1,"d-flex","flex-wrap","justify-content-between","align-items-center","py-3"],[1,"left"],[1,"right"],[1,"table-search","d-flex"],["action","#"],["type","text","name","something","placeholder","Search...",3,"ngModel","ngModelChange"],[1,"lni","lni-search-alt"],[1,"table-wrapper","table-responsive"],[1,"table"],[4,"ngFor","ngForOf"],[1,"pt-10","d-flex","flex-wrap","justify-content-between"],[1,"text-sm","text-gray"],[1,"text-right"],[3,"pageChange"],[1,"min-width"],[1,"action"],[1,"text-primary",2,"cursor","pointer",3,"routerLink"],[1,"lni","lni-pencil-alt"],[1,"text-danger",3,"disabled","click"],[4,"ngIf"],[1,"lni","lni-trash-can"]],template:function(t,e){1&t&&(u.TgZ(0,"div",0),u.TgZ(1,"h2",1),u._uU(2,"Business Partner Management"),u.qZA(),u.TgZ(3,"button",2),u._UZ(4,"i",3),u._uU(5," New"),u.qZA(),u.qZA(),u.TgZ(6,"div",4),u.TgZ(7,"div",5),u.TgZ(8,"div",6),u.TgZ(9,"div",7),u.TgZ(10,"div",8),u._UZ(11,"div",9),u.qZA(),u.TgZ(12,"div",10),u.TgZ(13,"div",11),u.TgZ(14,"p"),u._uU(15,"Show "),u.TgZ(16,"span"),u._uU(17,"10"),u.qZA(),u._uU(18," entries"),u.qZA(),u.qZA(),u.TgZ(19,"div",12),u.TgZ(20,"div",13),u.TgZ(21,"form",14),u.TgZ(22,"input",15),u.NdJ("ngModelChange",function(t){return e.filterdata=t}),u.qZA(),u.TgZ(23,"button"),u._UZ(24,"i",16),u.qZA(),u.qZA(),u.qZA(),u.qZA(),u.qZA(),u.TgZ(25,"div",17),u.TgZ(26,"table",18),u.TgZ(27,"thead"),u.TgZ(28,"tr"),u.TgZ(29,"th"),u.TgZ(30,"h6"),u._uU(31,"COMPANY"),u.qZA(),u.qZA(),u.TgZ(32,"th"),u.TgZ(33,"h6"),u._uU(34,"GROUP"),u.qZA(),u.qZA(),u.TgZ(35,"th"),u.TgZ(36,"h6"),u._uU(37,"INDUSTRY"),u.qZA(),u.qZA(),u.TgZ(38,"th"),u.TgZ(39,"h6"),u._uU(40,"ACTION"),u.qZA(),u.qZA(),u.qZA(),u.qZA(),u.TgZ(41,"tbody"),u.YNc(42,S,16,6,"tr",19),u.ALo(43,"paginate"),u.ALo(44,"filter"),u.qZA(),u.qZA(),u.qZA(),u.TgZ(45,"div",20),u.TgZ(46,"div",11),u.TgZ(47,"p",21),u._uU(48),u.qZA(),u.qZA(),u.TgZ(49,"div",22),u.TgZ(50,"pagination-controls",23),u.NdJ("pageChange",function(t){return e.p=t}),u.qZA(),u.qZA(),u.qZA(),u.qZA(),u.qZA(),u.qZA(),u.qZA()),2&t&&(u.xp6(22),u.Q6J("ngModel",e.filterdata),u.xp6(20),u.Q6J("ngForOf",u.xi3(43,3,u.xi3(44,6,e.mbplist,e.filterdata),u.WLB(9,J,e.count,e.p))),u.xp6(6),u.hij("Total ",e.countdata," BP"))},directives:[s.rH,r._Y,r.JL,r.F,r.Fj,r.JJ,r.On,n.sg,O.LS,n.O5],pipes:[O._s,Y.Z],styles:[""]}),t})()},{path:"add",component:y},{path:"edit/:id",component:y}]}];let D=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=u.oAB({type:t}),t.\u0275inj=u.cJS({imports:[[s.Bz.forChild(w)],s.Bz]}),t})(),Q=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=u.oAB({type:t}),t.\u0275inj=u.cJS({imports:[[n.ez,r.UX,D,g.A0,r.u5,O.JX,Y.h]]}),t})()}}]);