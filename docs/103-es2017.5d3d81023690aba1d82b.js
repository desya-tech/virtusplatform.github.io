"use strict";(self.webpackChunkappdemo_ng12=self.webpackChunkappdemo_ng12||[]).push([[103],{6103:function(e,t,i){i.r(t),i.d(t,{UserManagementModule:function(){return oe}});var s=i(8127),n=i(2224),r=i(30),o=i(7112),a=i(5688),l=i(1037),c=i(7147),u=i(4037),d=i(1569),g=i(2185),p=i(7393),Z=i(5342);let f=(()=>{class e{constructor(e){this.http=e}getAll(){return this.http.get(`${l.N.apiUrl}/contact`)}getByID(e){return this.http.get(`${l.N.apiUrl}/contact/${e}`)}getByCompany(e){return this.http.get(`${l.N.apiUrl}/contact/getbycompany/${e}`)}}return e.\u0275fac=function(t){return new(t||e)(c.LFG(Z.eN))},e.\u0275prov=c.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var h=i(3546),A=i(2016);function m(e,t){1&e&&(c.TgZ(0,"h2",27),c._uU(1,"New Users"),c.qZA())}function T(e,t){1&e&&(c.TgZ(0,"h2",27),c._uU(1,"Edit Users"),c.qZA())}function v(e,t){if(1&e){const e=c.EpF();c.TgZ(0,"div",22),c.TgZ(1,"label"),c._uU(2,"Company"),c.qZA(),c.TgZ(3,"ng-select",28),c.NdJ("change",function(t){return c.CHM(e),c.oxw().onCompanySelected(t)}),c.qZA(),c.qZA()}if(2&e){const e=c.oxw();c.xp6(3),c.Q6J("items",e.bp)("multiple",!1)}}function b(e,t){1&e&&(c.TgZ(0,"div",11),c.TgZ(1,"label"),c._uU(2,"Company"),c.qZA(),c._UZ(3,"input",29),c.qZA())}const q=function(){return{standalone:!0}};function N(e,t){if(1&e){const e=c.EpF();c.TgZ(0,"div",22),c.TgZ(1,"label"),c._uU(2,"Email"),c.qZA(),c.TgZ(3,"ng-select",30),c.NdJ("change",function(t){return c.CHM(e),c.oxw().onSelection(t)})("ngModelChange",function(t){return c.CHM(e),c.oxw().selectemail=t}),c.qZA(),c.qZA()}if(2&e){const e=c.oxw();c.xp6(3),c.Q6J("items",e.contact)("multiple",!1)("ngModel",e.selectemail)("ngModelOptions",c.DdM(4,q))}}function _(e,t){1&e&&(c.TgZ(0,"div",11),c.TgZ(1,"label"),c._uU(2,"USERNAME"),c.qZA(),c._UZ(3,"input",31),c.qZA())}function x(e,t){1&e&&(c.TgZ(0,"em"),c._uU(1,"(Default Password is email)"),c.qZA())}function I(e,t){1&e&&(c.TgZ(0,"div",35),c._uU(1,"Password is required"),c.qZA())}function C(e,t){1&e&&(c.TgZ(0,"div",35),c._uU(1,"Password must be at least 6 characters"),c.qZA())}function S(e,t){if(1&e&&(c.TgZ(0,"div"),c.YNc(1,I,2,0,"div",34),c.YNc(2,C,2,0,"div",34),c.qZA()),2&e){const e=c.oxw(2);c.xp6(1),c.Q6J("ngIf",e.f.PASSWORD.errors.required),c.xp6(1),c.Q6J("ngIf",e.f.PASSWORD.errors.minlength)}}const U=function(e){return{"is-invalid":e}};function M(e,t){if(1&e&&(c.TgZ(0,"div",11),c.TgZ(1,"label",32),c._uU(2," Password "),c.YNc(3,x,2,0,"em",13),c.qZA(),c._UZ(4,"input",33),c.YNc(5,S,3,2,"div",13),c.qZA()),2&e){const e=c.oxw();c.xp6(3),c.Q6J("ngIf",e.isAddMode),c.xp6(1),c.Q6J("ngClass",c.VKq(3,U,e.submitted&&e.f.PASSWORD.errors)),c.xp6(1),c.Q6J("ngIf",e.submitted&&e.f.PASSWORD.errors)}}function E(e,t){1&e&&(c.TgZ(0,"div",35),c._uU(1,"*First Name required"),c.qZA())}function O(e,t){if(1&e&&(c.TgZ(0,"div"),c.YNc(1,E,2,0,"div",34),c.qZA()),2&e){const e=c.oxw();c.xp6(1),c.Q6J("ngIf",e.f.FIRST_NAME.errors.required)}}function P(e,t){1&e&&(c.TgZ(0,"div",35),c._uU(1,"*Last Name required"),c.qZA())}function y(e,t){if(1&e&&(c.TgZ(0,"div"),c.YNc(1,P,2,0,"div",34),c.qZA()),2&e){const e=c.oxw();c.xp6(1),c.Q6J("ngIf",e.f.LAST_NAME.errors.required)}}function w(e,t){1&e&&(c.TgZ(0,"div",35),c._uU(1,"*Phone No. required"),c.qZA())}function Y(e,t){if(1&e&&(c.TgZ(0,"div"),c.YNc(1,w,2,0,"div",34),c.qZA()),2&e){const e=c.oxw();c.xp6(1),c.Q6J("ngIf",e.f.PHONE.errors.required)}}function J(e,t){1&e&&(c.TgZ(0,"div",41),c._UZ(1,"div",42),c.qZA())}function D(e,t){1&e&&(c.TgZ(0,"div",43),c._uU(1," Image Uploaded Succesfuly!"),c.qZA())}function R(e,t){1&e&&(c.TgZ(0,"div",44),c._uU(1," Image Upload Failed!"),c.qZA())}const F=function(e){return{"background-image":e}};function Q(e,t){if(1&e&&(c.TgZ(0,"div",36),c._UZ(1,"div",37),c.YNc(2,J,2,0,"div",38),c.YNc(3,D,2,0,"div",39),c.YNc(4,R,2,0,"div",40),c.qZA()),2&e){const e=c.oxw();c.xp6(1),c.Gre("img-preview","fail"===e.selectedFile.status?"-error":"",""),c.Q6J("ngStyle",c.VKq(7,F,"url("+e.selectedFile.src+")")),c.xp6(1),c.Q6J("ngIf",e.selectedFile.pending),c.xp6(1),c.Q6J("ngIf","ok"===e.selectedFile.status),c.xp6(1),c.Q6J("ngIf","fail"===e.selectedFile.status)}}function k(e,t){1&e&&(c.TgZ(0,"div",35),c._uU(1,"*Picture required"),c.qZA())}function L(e,t){if(1&e&&(c.TgZ(0,"div"),c.YNc(1,k,2,0,"div",34),c.qZA()),2&e){const e=c.oxw();c.xp6(1),c.Q6J("ngIf",e.f.PICTURE.errors.required)}}function B(e,t){1&e&&(c.TgZ(0,"div",35),c._uU(1,"*Discord ID required"),c.qZA())}function V(e,t){if(1&e&&(c.TgZ(0,"div"),c.YNc(1,B,2,0,"div",34),c.qZA()),2&e){const e=c.oxw();c.xp6(1),c.Q6J("ngIf",e.f.DISCORD_ID.errors.required)}}function H(e,t){if(1&e&&(c.TgZ(0,"option",45),c._uU(1),c.qZA()),2&e){const e=t.$implicit;c.s9C("value",e.RULE_ID),c.xp6(1),c.Oqu(e.RULE_NAME)}}function W(e,t){1&e&&c._UZ(0,"span")}class K{constructor(e,t){this.src=e,this.file=t,this.pending=!1,this.status="init"}}let $=(()=>{class e{constructor(e,t,i,s,n,r,o,c,u){this.formBuilder=e,this.route=t,this.router=i,this.usersService=s,this.alertService=n,this.ruleManagementService=r,this.bpService=o,this.contactService=c,this.imageService=u,this.subs=new a.Y,this.loading=!1,this.submitted=!1,this.selectedBPName=null,this.rules=null,this.bp=null,this.contact=null,this.apiurl=l.N.apiUrl,this.selectemail=null}ngOnInit(){this.id=this.route.snapshot.params.id,this.isAddMode=!this.id;const e=[s.kI.minLength(6)];this.isAddMode&&e.push(s.kI.required),this.form=this.formBuilder.group({USERNAME:["",s.kI.required],PASSWORD:["",e],FIRST_NAME:["",s.kI.required],LAST_NAME:["",s.kI.required],COMPANY_ID:["",s.kI.required],COMPANY_NAME:["",s.kI.required],PHONE:["",s.kI.required],BIO:["",s.kI.required],PICTURE:["",s.kI.required],RULE_ID:["",s.kI.required],DISCORD_ID:["",s.kI.required]}),this.isAddMode||this.subs.add(this.usersService.getById(this.id).pipe((0,o.P)()).subscribe(e=>{this.form.patchValue(e)})),this.subs.add(this.ruleManagementService.getAll().subscribe(e=>this.rules=e)),this.subs.add(this.bpService.getAll().subscribe(e=>this.bp=e))}get f(){return this.form.controls}onSubmit(){this.submitted=!0,this.alertService.clear(),!this.form.invalid&&(this.loading=!0,this.isAddMode?this.createUser():this.updateUser())}onCompanySelected(e){this.subs.add(this.contactService.getByCompany(e.COMPANY_ID).subscribe(e=>this.contact=e)),this.form.get("COMPANY_ID").setValue(e.COMPANY_ID),this.form.get("COMPANY_NAME").setValue(e.COMPANY_NAME),this.setEmptyvalue()}onSelection(e){1==e.CONTACT_NAME.split(" ").length?this.form.get("FIRST_NAME").setValue(e.CONTACT_NAME):this.form.get("FIRST_NAME").setValue(e.CONTACT_NAME.substr(0,e.CONTACT_NAME.indexOf(" "))),""!=e.CONTACT_NAME.substr(e.CONTACT_NAME.indexOf(" ")+1)?this.form.get("LAST_NAME").setValue(e.CONTACT_NAME.substr(e.CONTACT_NAME.indexOf(" ")+1)):this.form.get("LAST_NAME").setValue(e.CONTACT_NAME.substr(0,e.CONTACT_NAME.indexOf(" "))),this.form.get("PASSWORD").setValue(e.EMAIL),this.form.get("USERNAME").setValue(e.EMAIL),this.form.get("PHONE").setValue(e.PHONE01)}createUser(){this.alertService.loading(),this.subs.add(this.usersService.register(this.form.value).pipe((0,o.P)()).subscribe({next:()=>{this.alertService.success(),this.router.navigate(["../"],{relativeTo:this.route})},error:e=>{this.alertService.error(e),this.loading=!1}}))}updateUser(){this.alertService.loading(),this.subs.add(this.usersService.update(this.id,this.form.value).pipe((0,o.P)()).subscribe({next:()=>{this.alertService.success(),this.router.navigate(["../../"],{relativeTo:this.route})},error:e=>{this.alertService.error(e),this.loading=!1}}))}onSuccess(){this.selectedFile.pending=!1,this.selectedFile.status="ok"}onError(){this.selectedFile.pending=!1,this.selectedFile.status="fail",this.selectedFile.src=""}processFile(e){const t=e.files[0],i=new FileReader;this.form.value.PICTURE&&this.imageService.deleteImage(this.form.value.PICTURE).pipe((0,o.P)()).subscribe(),i.addEventListener("load",e=>{this.selectedFile=new K(e.target.result,t),this.imageService.uploadImage(this.selectedFile.file).subscribe(e=>{this.form.get("PICTURE").setValue(e.filename),this.onSuccess()},e=>{this.onError()})}),i.readAsDataURL(t)}setEmptyvalue(){this.form.get("FIRST_NAME").setValue(""),this.form.get("LAST_NAME").setValue(""),this.form.get("PHONE").setValue(""),this.form.get("BIO").setValue(""),this.form.get("DISCORD_ID").setValue(""),this.form.get("PASSWORD").setValue(""),this.selectemail=""}ngOnDestroy(){this.subs.unsubscribe()}}return e.\u0275fac=function(t){return new(t||e)(c.Y36(s.qu),c.Y36(r.gz),c.Y36(r.F0),c.Y36(u.x),c.Y36(d.c9),c.Y36(g.P),c.Y36(p.m),c.Y36(f),c.Y36(h.C))},e.\u0275cmp=c.Xpm({type:e,selectors:[["ng-component"]],decls:67,vars:35,consts:[[1,"title","d-flex","align-items-center","flex-wrap","mb-30"],["class","mr-40",4,"ngIf"],["routerLink","/user-management",1,"main-btn","primary-btn-outline","rounded-btn","btn-hover"],[1,"lni","lni-chevron-left","mr-5"],[1,"row"],[3,"formGroup","ngSubmit"],[1,"col-lg-6"],[1,"card-style","mb-30"],[1,"divider"],["class","select-style-1",4,"ngIf"],["class","input-style-1",4,"ngIf"],[1,"input-style-1"],["type","text","formControlName","FIRST_NAME","disabled","",3,"ngClass"],[4,"ngIf"],["type","text","formControlName","LAST_NAME","disabled","",3,"ngClass"],["type","text","formControlName","PHONE","disabled","",3,"ngClass"],["formControlName","BIO","placeholder","Message","rows","5",3,"ngClass"],["type","file","accept","image/*",3,"change"],["imageInput",""],["class","img-preview-container",4,"ngIf"],["type","text","formControlName","PICTURE","disabled","",3,"ngClass"],["type","number","formControlName","DISCORD_ID",3,"ngClass"],[1,"select-style-1"],[1,"select-position"],["formControlName","RULE_ID"],[3,"value",4,"ngFor","ngForOf"],[1,"main-btn","primary-btn","rounded-btn","btn-hover",3,"disabled"],[1,"mr-40"],["bindLabel","COMPANY_NAME","placeholder","Search Company","appendTo","body",3,"items","multiple","change"],["type","text","formControlName","COMPANY_NAME","disabled",""],["bindLabel","EMAIL","placeholder","Search Email","appendTo","body",3,"items","multiple","ngModel","ngModelOptions","change","ngModelChange"],["type","text","formControlName","USERNAME","disabled",""],["for","PASSWORD"],["type","password","formControlName","PASSWORD",3,"ngClass"],["style","color:red",4,"ngIf"],[2,"color","red"],[1,"img-preview-container"],[3,"ngStyle"],["class","img-loading-overlay",4,"ngIf"],["class","alert alert-success",4,"ngIf"],["class","alert alert-danger",4,"ngIf"],[1,"img-loading-overlay"],[1,"img-spinning-circle"],[1,"alert","alert-success"],[1,"alert","alert-danger"],[3,"value"]],template:function(e,t){if(1&e){const e=c.EpF();c.TgZ(0,"div",0),c.YNc(1,m,2,0,"h2",1),c.YNc(2,T,2,0,"h2",1),c.TgZ(3,"button",2),c._UZ(4,"i",3),c._uU(5,"Back"),c.qZA(),c.qZA(),c.TgZ(6,"div",4),c.TgZ(7,"form",5),c.NdJ("ngSubmit",function(){return t.onSubmit()}),c.TgZ(8,"div",6),c.TgZ(9,"div",7),c.TgZ(10,"h5"),c._uU(11,"User Description"),c.qZA(),c.TgZ(12,"span",8),c._UZ(13,"hr"),c.qZA(),c.YNc(14,v,4,2,"div",9),c.YNc(15,b,4,0,"div",10),c.YNc(16,N,4,5,"div",9),c.YNc(17,_,4,0,"div",10),c.YNc(18,M,6,5,"div",10),c.TgZ(19,"div",11),c.TgZ(20,"label"),c._uU(21,"First Name"),c.qZA(),c._UZ(22,"input",12),c.YNc(23,O,2,1,"div",13),c.qZA(),c.TgZ(24,"div",11),c.TgZ(25,"label"),c._uU(26,"Last Name"),c.qZA(),c._UZ(27,"input",14),c.YNc(28,y,2,1,"div",13),c.qZA(),c.TgZ(29,"div",11),c.TgZ(30,"label"),c._uU(31,"Phone No."),c.qZA(),c._UZ(32,"input",15),c.YNc(33,Y,2,1,"div",13),c.qZA(),c.TgZ(34,"div",11),c.TgZ(35,"label"),c._uU(36,"Bio"),c.qZA(),c._UZ(37,"textarea",16),c.qZA(),c.TgZ(38,"div",11),c.TgZ(39,"label"),c._uU(40,"Select Image"),c.qZA(),c.TgZ(41,"input",17,18),c.NdJ("change",function(){c.CHM(e);const i=c.MAs(42);return t.processFile(i)}),c.qZA(),c.qZA(),c.YNc(43,Q,5,9,"div",19),c.TgZ(44,"div",11),c.TgZ(45,"label"),c._uU(46,"Picture"),c.qZA(),c._UZ(47,"input",20),c.YNc(48,L,2,1,"div",13),c.qZA(),c.TgZ(49,"div",11),c.TgZ(50,"label"),c._uU(51,"Discord ID"),c.qZA(),c._UZ(52,"input",21),c.YNc(53,V,2,1,"div",13),c.qZA(),c.TgZ(54,"div",22),c.TgZ(55,"label"),c._uU(56,"Role"),c.qZA(),c.TgZ(57,"div",23),c.TgZ(58,"select",24),c.YNc(59,H,2,2,"option",25),c.qZA(),c.qZA(),c.qZA(),c.TgZ(60,"div"),c.TgZ(61,"button",2),c._uU(62," Cancel "),c.qZA(),c._uU(63,"\xa0 "),c.TgZ(64,"button",26),c.YNc(65,W,1,0,"span",13),c._uU(66," \xa0Save\xa0 "),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA()}2&e&&(c.xp6(1),c.Q6J("ngIf",t.isAddMode),c.xp6(1),c.Q6J("ngIf",!t.isAddMode),c.xp6(5),c.Q6J("formGroup",t.form),c.xp6(7),c.Q6J("ngIf",t.isAddMode),c.xp6(1),c.Q6J("ngIf",!t.isAddMode),c.xp6(1),c.Q6J("ngIf",t.isAddMode),c.xp6(1),c.Q6J("ngIf",!t.isAddMode),c.xp6(1),c.Q6J("ngIf",t.isAddMode),c.xp6(4),c.Q6J("ngClass",c.VKq(23,U,t.submitted&&t.f.FIRST_NAME.errors)),c.xp6(1),c.Q6J("ngIf",t.submitted&&t.f.FIRST_NAME.errors),c.xp6(4),c.Q6J("ngClass",c.VKq(25,U,t.submitted&&t.f.LAST_NAME.errors)),c.xp6(1),c.Q6J("ngIf",t.submitted&&t.f.LAST_NAME.errors),c.xp6(4),c.Q6J("ngClass",c.VKq(27,U,t.submitted&&t.f.PHONE.errors)),c.xp6(1),c.Q6J("ngIf",t.submitted&&t.f.PHONE.errors),c.xp6(4),c.Q6J("ngClass",c.VKq(29,U,t.submitted&&t.f.BIO.errors)),c.xp6(6),c.Q6J("ngIf",t.selectedFile),c.xp6(4),c.Q6J("ngClass",c.VKq(31,U,t.submitted&&t.f.PICTURE.errors)),c.xp6(1),c.Q6J("ngIf",t.submitted&&t.f.PICTURE.errors),c.xp6(4),c.Q6J("ngClass",c.VKq(33,U,t.submitted&&t.f.DISCORD_ID.errors)),c.xp6(1),c.Q6J("ngIf",t.submitted&&t.f.DISCORD_ID.errors),c.xp6(6),c.Q6J("ngForOf",t.rules),c.xp6(5),c.Q6J("disabled",t.loading),c.xp6(1),c.Q6J("ngIf",t.loading))},directives:[n.O5,r.rH,s._Y,s.JL,s.sg,s.Fj,s.JJ,s.u,n.mk,s.wV,s.EJ,n.sg,A.w9,s.On,n.PC,s.YN,s.Kr],styles:['.image-upload-container[_ngcontent-%COMP%]{cursor:pointer}.img-preview-container[_ngcontent-%COMP%]{background-color:#f7f7f7;position:relative}.img-preview-container[_ngcontent-%COMP%]   .img-preview[_ngcontent-%COMP%]{background:center center no-repeat;background-size:contain;height:116px;width:116px}.img-preview-container[_ngcontent-%COMP%]   .img-preview-error[_ngcontent-%COMP%]{display:none}.img-loading-overlay[_ngcontent-%COMP%]{background-color:#000;bottom:0;left:0;opacity:.2;position:absolute;right:0;top:0}.img-spinning-circle[_ngcontent-%COMP%]{display:inline-block;width:64px;height:64px;margin:auto;position:absolute;top:0;left:0;bottom:0;right:0}.img-spinning-circle[_ngcontent-%COMP%]:after{content:" ";display:block;width:46px;height:46px;margin:1px;border-radius:50%;border:5px solid #fff;border-color:#fff transparent #fff transparent;-webkit-animation:lds-dual-ring 1.2s linear infinite;animation:lds-dual-ring 1.2s linear infinite}@-webkit-keyframes lds-dual-ring{0%{transform:rotate(0)}to{transform:rotate(360deg)}}@keyframes lds-dual-ring{0%{transform:rotate(0)}to{transform:rotate(360deg)}}']}),e})(),j=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=c.Xpm({type:e,selectors:[["ng-component"]],decls:1,vars:0,template:function(e,t){1&e&&c._UZ(0,"router-outlet")},directives:[r.lC],encapsulation:2}),e})();var G=i(4693),z=i.n(G),X=i(7333),ee=i(4968);function te(e,t){1&e&&(c.TgZ(0,"span"),c._UZ(1,"i",39),c.qZA())}function ie(e,t){if(1&e){const e=c.EpF();c.TgZ(0,"tr"),c.TgZ(1,"td",24),c.TgZ(2,"div",25),c.TgZ(3,"div",26),c._UZ(4,"img",27),c.qZA(),c.TgZ(5,"div",28),c.TgZ(6,"p"),c.TgZ(7,"a",29),c._uU(8),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.TgZ(9,"td",24),c.TgZ(10,"p"),c.TgZ(11,"a",30),c._uU(12),c.qZA(),c.qZA(),c.qZA(),c.TgZ(13,"td",24),c.TgZ(14,"p"),c._uU(15),c.qZA(),c.qZA(),c.TgZ(16,"td",24),c.TgZ(17,"p"),c.TgZ(18,"a",31),c._uU(19),c.qZA(),c.qZA(),c.qZA(),c.TgZ(20,"td"),c.TgZ(21,"div",32),c.TgZ(22,"button",33),c.NdJ("click",function(){const t=c.CHM(e).$implicit;return c.oxw().confirmBox("confirm",t)}),c._UZ(23,"i",34),c.qZA(),c._uU(24,"\xa0 "),c.TgZ(25,"button",35),c._UZ(26,"i",36),c.qZA(),c._uU(27,"\xa0 "),c.TgZ(28,"button",37),c.NdJ("click",function(){const t=c.CHM(e).$implicit;return c.oxw().confirmBox("delete",t)}),c.YNc(29,te,2,0,"span",38),c.qZA(),c.qZA(),c.qZA(),c.qZA()}if(2&e){const e=t.$implicit,i=c.oxw();c.xp6(4),c.s9C("src",i.apiurl+e.PICTURE,c.LSH),c.xp6(3),c.MGl("href","/profile/",e.USERNAME,"",c.LSH),c.xp6(1),c.AsE("",e.FIRST_NAME," ",e.LAST_NAME,""),c.xp6(3),c.MGl("title","ID: ",e.COMPANY_ID,""),c.xp6(1),c.Oqu(e.COMPANY_NAME),c.xp6(3),c.Oqu(e.PHONE),c.xp6(4),c.Oqu(e.USERNAME),c.xp6(6),c.MGl("routerLink","edit/",e.ID,""),c.xp6(3),c.Q6J("disabled",e.isDeleting),c.xp6(1),c.Q6J("ngIf",!e.isDeleting)}}const se=function(e,t){return{itemsPerPage:e,currentPage:t}},ne=[{path:"user-management",component:j,children:[{path:"",component:(()=>{class e{constructor(e,t,i,s,n){this.usersService=e,this.rulesService=t,this.bpService=i,this.imageService=s,this.alertService=n,this.subs=new a.Y,this.users=null,this.rules=null,this.bp=null,this.p=1,this.count=10,this.countdata=null,this.apiurl=l.N.apiUrl+"/image/"}ngOnInit(){this.subs.add(this.usersService.getAll().pipe((0,o.P)()).subscribe(e=>{this.users=e,this.countdata=this.users.length})),this.subs.add(this.rulesService.getAll().pipe((0,o.P)()).subscribe(e=>this.rules=e)),this.subs.add(this.bpService.getAll().pipe((0,o.P)()).subscribe(e=>this.bp=e))}deleteUser(e){this.alertService.loading();const t=this.users.find(t=>t.ID===e.ID);this.subs.add(this.usersService.delete(e.ID).pipe((0,o.P)()).subscribe(()=>{t.isDeleting=!0,this.users=this.users.filter(t=>t.ID!==e.ID),this.countdata=this.users.length,this.alertService.success(),this.subs.add(this.imageService.deleteImage(t.PICTURE).pipe((0,o.P)()).subscribe())},e=>{this.alertService.error(e)}))}roleIdToName(e){let t;try{t=this.rules.find(t=>t.ROLE_ID==e).ROLE_NAME}catch(i){}finally{return t}}companyIdToName(e){let t;try{t=this.bp.find(t=>t.COMPANY_ID=e).COMPANY_NAME}catch(i){}finally{return t}}resendEmail(e){e.PASSWORD=e.USERNAME,this.alertService.loading(),this.subs.add(this.usersService.resendemail(e).pipe((0,o.P)()).subscribe(()=>{this.alertService.success()},e=>{this.alertService.error(e)}))}confirmBox(e,t){"delete"==e&&z().fire({title:"Are you sure want to delete?",text:t.USERNAME,icon:"warning",showCancelButton:!0,confirmButtonText:"Yes, delete it!",cancelButtonText:"Cancel"}).then(e=>{e.value&&this.deleteUser(t)}),"confirm"==e&&z().fire({title:"Are you sure want to resend email?",text:"this action will reset password "+t.USERNAME,icon:"question",showCancelButton:!0,confirmButtonText:"Yes, send email!",cancelButtonText:"Cancel"}).then(e=>{e.value&&this.resendEmail(t)})}ngOnDestroy(){this.subs.unsubscribe()}}return e.\u0275fac=function(t){return new(t||e)(c.Y36(u.x),c.Y36(g.P),c.Y36(p.m),c.Y36(h.C),c.Y36(d.c9))},e.\u0275cmp=c.Xpm({type:e,selectors:[["ng-component"]],decls:54,vars:12,consts:[[1,"title","d-flex","align-items-center","flex-wrap","mb-30"],[1,"mr-40"],["routerLink","add",1,"main-btn","primary-btn","btn-hover","btn-sm"],[1,"lni","lni-plus","mr-5"],[1,"tables-wrapper"],[1,"row"],[1,"col-lg-12"],[1,"card-style","mb-30"],[1,"row","align-items-center"],[1,"col-md-6"],[1,"d-flex","flex-wrap","justify-content-between","align-items-center","py-3"],[1,"left"],[1,"right"],[1,"table-search","d-flex"],["action","#"],["type","text","name","something","placeholder","Search...",3,"ngModel","ngModelChange"],[1,"lni","lni-search-alt"],[1,"table-wrapper","table-responsive"],[1,"table"],[4,"ngFor","ngForOf"],[1,"pt-10","d-flex","flex-wrap","justify-content-between"],[1,"text-sm","text-gray"],[1,"text-right"],[3,"pageChange"],[1,"min-width"],[1,"lead"],[1,"lead-image"],["alt","",3,"src"],[1,"lead-text"],[3,"href"],["data-toggle","tooltip",2,"cursor","pointer",3,"title"],["data-toggle","tooltip"],[1,"action"],[1,"text-primary",2,"cursor","pointer",3,"click"],[1,"lni","lni-reply"],[1,"text-primary",2,"cursor","pointer",3,"routerLink"],[1,"lni","lni-pencil-alt"],[1,"text-danger",3,"disabled","click"],[4,"ngIf"],[1,"lni","lni-trash-can"]],template:function(e,t){1&e&&(c.TgZ(0,"div",0),c.TgZ(1,"h2",1),c._uU(2,"Users Management"),c.qZA(),c.TgZ(3,"button",2),c._UZ(4,"i",3),c._uU(5," New Users"),c.qZA(),c.qZA(),c.TgZ(6,"div",4),c.TgZ(7,"div",5),c.TgZ(8,"div",6),c.TgZ(9,"div",7),c.TgZ(10,"div",8),c._UZ(11,"div",9),c.qZA(),c.TgZ(12,"div",10),c.TgZ(13,"div",11),c.TgZ(14,"p"),c._uU(15,"Show "),c.TgZ(16,"span"),c._uU(17,"10"),c.qZA(),c._uU(18," entries"),c.qZA(),c.qZA(),c.TgZ(19,"div",12),c.TgZ(20,"div",13),c.TgZ(21,"form",14),c.TgZ(22,"input",15),c.NdJ("ngModelChange",function(e){return t.filterdata=e}),c.qZA(),c.TgZ(23,"button"),c._UZ(24,"i",16),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.TgZ(25,"div",17),c.TgZ(26,"table",18),c.TgZ(27,"thead"),c.TgZ(28,"tr"),c.TgZ(29,"th"),c.TgZ(30,"h6"),c._uU(31,"Name"),c.qZA(),c.qZA(),c.TgZ(32,"th"),c.TgZ(33,"h6"),c._uU(34,"Company"),c.qZA(),c.qZA(),c.TgZ(35,"th"),c.TgZ(36,"h6"),c._uU(37,"Phone No"),c.qZA(),c.qZA(),c.TgZ(38,"th"),c.TgZ(39,"h6"),c._uU(40,"Email"),c.qZA(),c.qZA(),c.TgZ(41,"th"),c.TgZ(42,"h6"),c._uU(43,"Action"),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.TgZ(44,"tbody"),c.YNc(45,ie,30,11,"tr",19),c.ALo(46,"paginate"),c.ALo(47,"filter"),c.qZA(),c.qZA(),c.qZA(),c.TgZ(48,"div",20),c.TgZ(49,"div",11),c.TgZ(50,"p",21),c._uU(51),c.qZA(),c.qZA(),c.TgZ(52,"div",22),c.TgZ(53,"pagination-controls",23),c.NdJ("pageChange",function(e){return t.p=e}),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA()),2&e&&(c.xp6(22),c.Q6J("ngModel",t.filterdata),c.xp6(23),c.Q6J("ngForOf",c.xi3(46,3,c.xi3(47,6,t.users,t.filterdata),c.WLB(9,se,t.count,t.p))),c.xp6(6),c.hij("Total ",t.countdata," users"))},directives:[r.rH,s._Y,s.JL,s.F,s.Fj,s.JJ,s.On,n.sg,X.LS,n.O5],pipes:[X._s,ee.Z],encapsulation:2}),e})()},{path:"add",component:$},{path:"edit/:id",component:$}]}];let re=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=c.oAB({type:e}),e.\u0275inj=c.cJS({imports:[[r.Bz.forChild(ne)],r.Bz]}),e})(),oe=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=c.oAB({type:e}),e.\u0275inj=c.cJS({imports:[[n.ez,s.UX,re,A.A0,s.u5,X.JX,ee.h]]}),e})()}}]);