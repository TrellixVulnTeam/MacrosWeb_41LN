(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{HbWl:function(e,t,i){"use strict";i.r(t),i.d(t,"LegalizacionModule",function(){return pe});var n=i("ofXK"),o=i("tyNb"),l=i("M9IT"),s=i("Dh3D"),a=i("+0xr"),r=i("EVdn"),c=i("lyp0"),g=i("3Pt+"),h=i("XNiG"),d=i("Sy1n"),p=i("x4GW"),u=i.t(p,2),m=i("oji5"),b=i.t(m,2),f=i("fXoL"),C=i("UXtv"),S=i("7KSe"),F=i("HZWf"),O=i("0IaG"),D=i("rqBn"),y=i("Wp6s"),v=i("kmnG"),I=i("qFsG"),P=i("bTqV"),T=i("/RsI"),A=i("f3yp"),E=i("NFeN"),_=i("pTvf"),R=i("GYa1"),w=i("uAhc"),M=i("AdZC");function k(e,t){if(1&e){const e=f.Wb();f.Vb(0,"mat-icon",25),f.cc("click",function(){f.yc(e);const t=f.gc(2).$implicit;return f.gc().announceSortChange(t,"ASC")}),f.Jc(1,"import_export"),f.Ub()}}function L(e,t){if(1&e){const e=f.Wb();f.Vb(0,"mat-icon",25),f.cc("click",function(){f.yc(e);const t=f.gc(2).$implicit;return f.gc().announceSortChange(t)}),f.Jc(1,"south"),f.Ub()}}function U(e,t){if(1&e){const e=f.Wb();f.Vb(0,"mat-icon",25),f.cc("click",function(){f.yc(e);const t=f.gc(2).$implicit;return f.gc().announceSortChange(t,"DESC")}),f.Jc(1,"north"),f.Ub()}}const $=function(e){return{filterActive:e}};function N(e,t){if(1&e){const e=f.Wb();f.Vb(0,"mat-icon",26),f.cc("click",function(){f.yc(e);const t=f.gc(2).$implicit;return f.gc().getHeaderOptionsTable(t)}),f.Jc(1,"filter_alt "),f.Ub()}if(2&e){const e=f.gc(2).$implicit,t=f.gc();f.mc("ngClass",f.pc(1,$,null!=t.searchCondition[e]))}}function V(e,t){if(1&e){const e=f.Wb();f.Vb(0,"mat-icon",26),f.cc("click",function(){f.yc(e);const t=f.gc(2).$implicit;return f.gc().openDateFilter(t)}),f.Jc(1,"filter_alt "),f.Ub()}if(2&e){const e=f.gc(2).$implicit,t=f.gc();f.mc("ngClass",f.pc(1,$,null!=t.searchConditionDateFilter[e]))}}function H(e,t){if(1&e){const e=f.Wb();f.Vb(0,"app-filter",27),f.cc("newItemEvent",function(t){return f.yc(e),f.gc(3).applyFilter(t)})("removeItemEvent",function(t){return f.yc(e),f.gc(3).clearColumn(t)})("searchFilterItemEvent",function(t){return f.yc(e),f.gc(3).getHeaderOptionFilterList(t)})("clearSearchFilterItemEvent",function(t){return f.yc(e),f.gc(3).getHeaderOptionsTable(t)}),f.Ub()}if(2&e){const e=f.gc(2).$implicit,t=f.gc();f.mc("id",t.safeColumn(e))("headers",e)("filtersOptions",t.filtersOptions)("camposFecha",t.camposFecha)("displayLoading",t.displayLoadingFilter)("eventsClear",t.eventsSubjectDateFilter.asObservable())("eventsSearchFilter",t.eventsSubjectSearchedSimpleFilter.asObservable())}}function x(e,t){if(1&e){const e=f.Wb();f.Vb(0,"app-filter-date",28),f.cc("newItemEvent",function(t){return f.yc(e),f.gc(3).applyFilterDate(t)})("removeItemEvent",function(t){return f.yc(e),f.gc(3).deleteFilterDate(t)}),f.Ub()}if(2&e){const e=f.gc(2).$implicit,t=f.gc();f.mc("id",t.safeColumn(e)+"-date")("headers",e)("filtersOptions",t.filtersOptions)("camposFecha",t.camposFecha)("eventsClear",t.eventsSubjectDateFilter.asObservable())}}function G(e,t){if(1&e){const e=f.Wb();f.Vb(0,"app-filter-currency",28),f.cc("newItemEvent",function(t){return f.yc(e),f.gc(3).applyFilterDate(t)})("removeItemEvent",function(t){return f.yc(e),f.gc(3).deleteFilterDate(t)}),f.Ub()}if(2&e){const e=f.gc(2).$implicit,t=f.gc();f.mc("id",t.safeColumn(e)+"-date")("headers",e)("filtersOptions",t.filtersOptions)("camposFecha",t.camposFecha)("eventsClear",t.eventsSubjectDateFilter.asObservable())}}function z(e,t){if(1&e&&(f.Vb(0,"th",19),f.Vb(1,"div",20),f.Vb(2,"span"),f.Jc(3),f.hc(4,"header"),f.Ub(),f.Hc(5,k,2,0,"mat-icon",21),f.Hc(6,L,2,0,"mat-icon",21),f.Hc(7,U,2,0,"mat-icon",21),f.Hc(8,N,2,3,"mat-icon",22),f.Hc(9,V,2,3,"mat-icon",22),f.Ub(),f.Hc(10,H,1,7,"app-filter",23),f.Hc(11,x,1,5,"app-filter-date",24),f.Hc(12,G,1,5,"app-filter-currency",24),f.Ub()),2&e){const e=f.gc().$implicit,t=f.gc();f.mc("hidden","a.UNI_ID"==e||"UNI_ID"==e||"VTA_ID"==e||"PRY_ID"==e||"ID"==e),f.Db(3),f.Kc(f.jc(4,10,e,t.searchText)),f.Db(2),f.mc("ngIf",null==t.sortFilter.name&&null==t.sortFilter.direction||t.sortFilter.name!=e),f.Db(1),f.mc("ngIf",t.sortFilter.name==e&&"DESC"==t.sortFilter.direction),f.Db(1),f.mc("ngIf",t.sortFilter.name==e&&"ASC"==t.sortFilter.direction),f.Db(1),f.mc("ngIf",1==t.getHeaderType(e)),f.Db(1),f.mc("ngIf",2==t.getHeaderType(e)||3==t.getHeaderType(e)||4==t.getHeaderType(e)),f.Db(1),f.mc("ngIf",1==t.getHeaderType(e)),f.Db(1),f.mc("ngIf",3==t.getHeaderType(e)),f.Db(1),f.mc("ngIf",2==t.getHeaderType(e)||4==t.getHeaderType(e))}}function B(e,t){if(1&e&&(f.Vb(0,"span",31),f.Jc(1),f.Ub()),2&e){const e=f.gc().$implicit,t=f.gc().$implicit,i=f.gc();f.Db(1),f.Kc(e[i.getAliasFromColumnCalculate(t)])}}function W(e,t){if(1&e&&(f.Vb(0,"span",31),f.Jc(1),f.hc(2,"currency"),f.Ub()),2&e){const e=f.gc().$implicit,t=f.gc().$implicit,i=f.gc();f.Db(1),f.Kc(f.ic(2,1,e[i.getAliasFromColumnCalculate(t)]))}}function j(e,t){if(1&e&&(f.Vb(0,"span",31),f.Jc(1),f.hc(2,"date"),f.Ub()),2&e){const e=f.gc().$implicit,t=f.gc().$implicit,i=f.gc();f.Db(1),f.Kc(f.jc(2,1,e[i.getAliasFromColumnCalculate(t)],"dd-MM-yyyy"))}}function J(e,t){if(1&e&&(f.Vb(0,"span",31),f.Jc(1),f.hc(2,"number"),f.Ub()),2&e){const e=f.gc().$implicit,t=f.gc().$implicit,i=f.gc();f.Db(1),f.Lc(" ",f.jc(2,1,e[i.getAliasFromColumnCalculate(t)],"1.2-2")," %")}}const K=function(e,t,i,n){return{negativeColorRules:e,ok1ColorRules:t,ok2ColorRules:i,expirationColorRules:n}};function q(e,t){if(1&e&&(f.Vb(0,"td",29),f.Hc(1,B,2,1,"span",30),f.Hc(2,W,3,3,"span",30),f.Hc(3,j,3,4,"span",30),f.Hc(4,J,3,4,"span",30),f.Ub()),2&e){const e=t.$implicit,i=f.gc().$implicit,n=f.gc();f.mc("hidden","a.UNI_ID"==i||"UNI_ID"==i||"VTA_ID"==i||"PRY_ID"==i||"ID"==i)("ngClass",f.rc(6,K,("GesCred"==i||"GesSub"==i||"GesCart"==i)&&0==n.getStatusRules(i,e[i]),("GesCred"==i||"GesSub"==i||"GesCart"==i)&&1==n.getStatusRules(i,e[i]),("GesCred"==i||"GesSub"==i||"GesCart"==i)&&2==n.getStatusRules(i,e[i]),("GesCred"==i||"GesSub"==i||"GesCart"==i)&&3==n.getStatusRules(i,e[i]))),f.Db(1),f.mc("ngIf",2!=n.getHeaderType(i)&&3!=n.getHeaderType(i)&&4!=n.getHeaderType(i)),f.Db(1),f.mc("ngIf",2==n.getHeaderType(i)),f.Db(1),f.mc("ngIf",3==n.getHeaderType(i)),f.Db(1),f.mc("ngIf",4==n.getHeaderType(i))}}function Z(e,t){1&e&&(f.Tb(0,16),f.Hc(1,z,13,13,"th",17),f.Hc(2,q,5,11,"td",18),f.Sb()),2&e&&f.mc("matColumnDef",t.$implicit)}function X(e,t){1&e&&f.Qb(0,"tr",32)}const Q=function(e){return{rowSelect:e}};function Y(e,t){if(1&e){const e=f.Wb();f.Vb(0,"tr",33),f.cc("click",function(){f.yc(e);const i=t.index;return f.gc().selectRow(i)})("dblclick",function(){f.yc(e);const i=t.$implicit;return f.gc().editElement(i)}),f.Ub()}if(2&e){const e=t.index,i=f.gc();f.mc("ngClass",f.pc(1,Q,i.rowSelected==e))}}const ee=function(){return[10,20,30]},te=function(){return{width:"50vw"}},ie=function(){return{"960px":"75vw","640px":"100vw"}},ne=[{path:"",component:(()=>{class e{constructor(e,t,i,n,o){this._excelExportService=e,this.legalizacionService=t,this._utilsService=i,this.dialog=n,this.router=o,this.obrasSelect="''2-4'',''2-8'',''104-164'',''104-165'',''104-166'',''104-167'',''104-168'',''104-169'',''107-100'',''107-101'',''107-102'',''107-103'',''107-104'',''107-106'',''107-107'',''107-108'',''107-109'',''107-110'',''107-111'',''107-116'',''107-117'',''107-118'',''107-119'',''107-121'',''107-122'',''107-123'',''107-124'',''107-125'',''107-126'',''107-127'',''107-128'',''107-129'',''107-130'',''107-133'',''107-134'',''107-135'',''107-136'',''107-137'',''107-138'',''107-139'',''107-140'',''107-141'',''107-142'',''107-143'',''107-144'',''107-145'',''108-105'',''108-106'',''111-146'',''111-147'',''112-1107'',''112-1108'',''112-1109'',''112-1110'',''112-1111'',''112-1112'',''112-1113'',''112-113'',''112-114'',''122-12'',''122-13'',''123-101'',''123-102'',''124-101'',''124-102'',''128-10'',''129-100'',''129-101'',''130-4'',''130-5'',''131-100'',''131-101'',''132-100'',''132-101'',''133-107'',''133-109'',''133-111'',''133-115'',''133-116'',''138-1'',''138-2'',''139-1'',''139-10'',''139-11'',''139-2'',''139-3'',''139-8'',''140-100'',''146-100'',''147-100'',''147-101'',''149-100'',''149-101'',''149-102'',''152-1'',''152-10'',''152-11'',''152-2'',''152-3'',''152-4'',''152-7'',''152-8'',''152-9'',''153-1'',''153-10'',''153-11'',''153-12'',''153-2'',''153-3'',''153-4'',''153-5'',''153-6'',''153-7'',''153-8'',''153-9'',''154-1'',''154-2'',''155-1'',''155-2'',''156-1'',''156-2'',''156-3'',''157-1'',''157-2'',''158-3'',''158-4'',''159-1'',''160-1'',''160-138'',''160-139'',''160-140'',''160-141'',''160-142'',''160-143'',''160-144'',''160-145'',''160-146'',''160-147'',''161-100'',''161-101'',''162-100'',''162-101'',''162-102'',''162-104'',''162-105'',''162-106'',''162-107'',''163-100'',''2-102'',''2-113'',''2-117'',''2-15'',''2-16'',''2-18'',''2-22'',''2-23'',''2-24'',''2-26'',''2-266'',''2-290'',''2-294'',''2-30'',''2-301'',''2-31'',''2-32'',''2-328'',''2-333'',''2-337'',''2-338'',''2-346'',''2-35'',''2-369'',''2-371'',''2-373'',''2-376'',''2-38'',''2-380'',''2-383'',''2-384'',''2-399'',''2-400'',''2-406'',''2-417'',''2-422'',''2-423'',''2-424'',''2-425'',''2-426'',''2-427'',''2-428'',''2-429'',''2-430'',''2-431'',''2-435'',''2-447'',''2-449'',''2-452'',''2-455'',''2-457'',''2-458'',''2-462'',''2-464'',''2-465'',''2-466'',''2-467'',''2-468'',''2-469'',''2-470'',''2-471'',''2-472'',''2-473'',''2-476'',''2-477'',''2-497'',''2-498'',''2-509'',''2-510'',''2-513'',''2-518'',''2-519'',''2-520'',''2-526'',''2-527'',''2-537'',''2-538'',''2-541'',''2-550'',''2-563'',''2-564'',''2-565'',''2-578'',''2-580'',''2-586'',''2-644'',''2-645'',''2-646'',''2-652'',''2-658'',''2-661'',''2-663'',''2-665'',''2-667'',''2-668'',''2-669'',''2-670'',''2-671'',''2-672'',''2-681'',''2-693'',''2-694'',''2-695'',''2-696'',''2-715'',''2-73'',''2-739'',''2-740'',''2-741'',''2-742'',''2-753'',''2-776'',''2-78'',''2-79'',''2-793'',''2-799'',''2-800'',''2-813'',''2-814'',''2-839'',''2-840'',''2-875'',''27-342'',''55-1'',''74-1'',''74-2'',''74-3'',''77-509'',''77-510'',''77-513'',''77-514'',''77-516'',''77-518'',''80-447'',''87-101'',''87-102'',''87-103'',''93-101'',''93-102'',''93-103'',''93-104'',''93-105'',''93-108'',''96-10'',''96-11'',''96-2'',''96-21'',''96-22'',''96-25'',''96-26'',''96-3'',''96-33'',''96-34'',''96-35'',''96-36'',''96-37'',''96-4'',''96-5'',''96-6'',''96-7'',''96-8'',''96-9''",this.displayedColumns=[],this.dataSource=new a.k,this.dataTable=[],this.page=1,this.sizePage=10,this.lengthTable=0,this.sortFilter={name:null,direction:null},this.displayLoading=!1,this.filtersOptions=[],this.searchCondition={},this.searchConditionDateFilter={},this.searchValue={},this.searchTemp=null,this.filterDateList=[],this.negativeColorRules=["NEGADO","VENCIDO","SIN APROBAR","VENCIDO.APROBACION","VENCIDO_SBA2","VENCIDO_SBAP","SIN RADICAR","PDTE. CI,AH,CS","PDTE. CI,AH","PDTE. CI,CS","PDTE. AH,CS","PDTE. CI","PDTE. AH","PDTE. CS"],this.ok1ColorRules=["N/A","PAZYSALVO","RATIFICADO","N/A","APROBADO_SBA2","APROBADO_SBAP","OK"],this.ok2ColorRules=["EN LEGALIZACION","APROBADO","RADICADO"],this.expirationColorRules=["PROX.VENC","PROX.VENC_SBA2","PROX.VENC_SBAP"],this.camposFecha=[],this.campoMoneda=[],this.eventsSubjectDateFilter=new h.a,this.eventsSubjectSearchedSimpleFilter=new h.a,this.LEGALIZACION=1,this.PROMESA=2,this.SUBSIDIO=3,this.SEGUIMIENTO_SUBSIDIO=4,this.ENTREGA=5,this.DESEMBOLSO=6,this.RECAUDO=7,this.TRAZABILIDAD=8,this.ORDENES=9,this.RENOVACION=10,this.ESCRITURACION=11,this.camposFecha=u,this.camposFecha=this.camposFecha.default,console.log("this.camposFecha",this.camposFecha),this.campoMoneda=b,this.campoMoneda=this.campoMoneda.default,console.log("this.campoMoneda",this.campoMoneda),this.currentPage=o.routerState.snapshot.url,console.log("this.currentPage",this.currentPage);let l=this.currentPage.split("/");console.log(l);for(let s=0;s<l.length;s++){const e=l[s];let t=this.getReportType(e),i=this.getReportName(e);null!=e&&(this.reportType=t),null!=e&&(this.tableName=i)}console.log("this.reportType",this.reportType),this.quickSearch=new g.e,this.quickSearch.valueChanges.subscribe(e=>{if(console.log("x",e),e.length>3){let t=` AND ( Nombre LIKE ''%${e}%'' OR Agrupacion LIKE ''%${e}%'' OR NIT LIKE ''%${e}%'' OR [NIT Seg] LIKE ''%${e}%'' )`;console.log(t),this.searchTemp=t,this.page=1,this.getDataTable()}else e.length<1&&null!=this.searchTemp&&(console.log("aquiii",this.searchTemp),this.searchTemp="",this.page=1,this.getDataTable())})}ngAfterViewInit(){this.getDataTable(!0),this.dataSource.paginator=this.paginator,this.dataSource.sort=this.sort}getDataTable(e){let t=null!=this.sortFilter.name&&null!=this.sortFilter.direction?`${/\s/g.test(this.sortFilter.name)?`[${this.sortFilter.name}]`:this.sortFilter.name} ${String(this.sortFilter.direction).toUpperCase()}`:"";console.log("sortFilterTemp",t);let i=this.getFilterParameters();null!=i&&(i=i.replaceAll(";",",")),console.log("dataFilter 1",i),this.displayLoading=!0,this.legalizacionService.getDataTable(this.obrasSelect,this.page,this.sizePage,t,i,this.reportType).subscribe(t=>{if(console.log(t),e){let e=t.headers;e=e.map(e=>{if((e=e.trim()).includes(".")&&!e.includes("=")){let t=e.split(".");"["==t[1].charAt(0)&&(t[1]=t[1].substring(1)),"]"==t[1].charAt(t[1].length-1)&&(t[1]=t[1].substring(0,t[1].length-1)),e=t[0]+"."+t[1]}if(e.includes("=")){let t=e.split("=");"["==t[0].charAt(0)&&(t[0]=t[0].substring(1)),"]"==t[0].charAt(t[0].length-1)&&(t[0]=t[0].substring(0,t[0].length-1)),e=t[0]+"="+t[1]}else"["==e.charAt(0)&&(e=e.substring(1)),"]"==e.charAt(e.length-1)&&(e=e.substring(0,e.length-1));return e.trim()}),console.log("#####headers",e),console.log("#####headers",JSON.stringify(e)),this.displayedColumns=e}this.dataTable=t.data,this.dataSource=new a.k(t.data),this.lengthTable=t.count,this.displayLoading=!1},e=>{console.log(e),this.displayLoading=!1})}announceSortChange(e,t){if(t){console.log(`Sorted ${t}ending`),this.sortFilter={name:e,direction:String(t).toUpperCase()},console.log("sortFilter",this.sortFilter);let i=`${/\s/g.test(e)?`[${e}]`:e} ${String(t).toUpperCase()}`;console.log("sortFilterTemp",i);let n=this.getFilterParameters();null!=n&&(n=n.replaceAll(";",",")),this.displayLoading=!0,this.legalizacionService.getDataTable(this.obrasSelect,this.page,this.sizePage,i,n,this.reportType).subscribe(e=>{console.log(e),this.dataTable=e.data,this.dataSource=new a.k(e.data),this.lengthTable=e.count,this.displayLoading=!1},e=>{this.displayLoading=!1})}else console.log("Sorting cleared"),console.log(`${e}`),this.sortFilter={name:null,direction:null},this.getDataTable();console.log(this.sortFilter)}changePage(e){console.log("evt",e),this.displayLoading=!0;let t=null;null!=this.sortFilter.name&&null!=this.sortFilter.direction&&(t=`${/\s/g.test(this.sortFilter.name)?`[${this.sortFilter.name}]`:this.sortFilter.name} ${String(this.sortFilter.direction).toUpperCase()}`);let i=this.getFilterParameters();null!=i&&(i=i.replaceAll(";",",")),this.legalizacionService.getDataTable(this.obrasSelect,e.pageIndex+1,e.pageSize,t,i,this.reportType).subscribe(t=>{console.log(t),this.dataTable=t.data,this.dataSource=new a.k(t.data),this.lengthTable=t.count,this.sizePage=e.pageSize,this.page=e.pageIndex+1,this.displayLoading=!1},e=>{this.displayLoading=!1})}exportToExcel(){let e=null!=this.sortFilter.name&&null!=this.sortFilter.direction?`${/\s/g.test(this.sortFilter.name)?`[${this.sortFilter.name}]`:this.sortFilter.name} ${String(this.sortFilter.direction).toUpperCase()}`:"";console.log("sortFilterTemp",e);let t=this.getFilterParameters();null!=t&&(t=t.replaceAll(";",",")),this.displayLoading=!0,this.legalizacionService.getDataTable(this.obrasSelect,1,this.lengthTable,e,t,this.reportType).subscribe(e=>{console.log("data export ",e),this._excelExportService.exportAsExcelFile(e.data,"backup",this.reportType),this.displayLoading=!1},e=>{console.log(e),this.displayLoading=!1})}cleanFilter(){this.filterDateList=[],this.searchCondition={},this.searchConditionDateFilter={},this.sortFilter={name:null,direction:null},this.eventsSubjectDateFilter.next(),this.quickSearch.setValue(""),this.searchTemp="";let e=this.getFilterParameters(),t=null;null!=this.sortFilter.name&&null!=this.sortFilter.direction&&(t=`${/\s/g.test(this.sortFilter.name)?`[${this.sortFilter.name}]`:this.sortFilter.name} ${String(this.sortFilter.direction).toUpperCase()}`),this.displayLoading=!0,this.page=1,null!=e&&(e=e.replaceAll(";",",")),this.legalizacionService.getDataTable(this.obrasSelect,this.page,this.sizePage,t,e,this.reportType).subscribe(e=>{console.log(e),this.dataTable=e.data,this.dataSource=new a.k(e.data),this.lengthTable=e.count,this.paginator.length=e.count,this.paginator.pageIndex=0,console.log("####this.lengthTable",this.lengthTable),this.displayLoading=!1},e=>{this.displayLoading=!1})}getHeaderOptionsTable(e){console.log("####dataGroup ",e);let t=this.removeWhiteSpaces(e);if(t.includes(".")&&!t.includes("=")){let e=t.split(".");t=e.length>1?e[1]:e[0]}r("#"+t).show();let i=this.getFilterParameters(e);console.log("#### filterTemp ####",i),d.a.displayLoading=!0;let n=e;n=this._utilsService.getOriginalNameFromColumnCalculate(n),console.log("####idFormat ",n),null!=i&&(i=i.replaceAll(";",",")),n=this._utilsService.processComputedColumn(n),console.log("calculada idFormat",n),this.legalizacionService.getHeaderOptionsTable(this.obrasSelect,n,i,this.reportType).subscribe(t=>{console.log(t),t=t.map(e=>(null==e&&(e="Vacio"),e)),this.filtersOptions[String(e)]=t,console.log(this.filtersOptions),this.eventsSubjectSearchedSimpleFilter.next(),d.a.displayLoading=!1},e=>{console.log(e),d.a.displayLoading=!1})}getHeaderOptionFilterList(e){let t=e.id,i=e.search;console.log("---dato ",t);let n=this.getFilterParameters(t);console.log("#### filterTemp ####",n),d.a.displayLoading=!0;let o=t;/ /g.test(o)&&(String(o).includes("=")?String(o).includes("when")||String(o).includes("WHEN")||String(o).includes("When")?(o=o.replaceAll("'","''"),o=`(${o})`):o=`(${o})`:o=`[${o}]`),this.legalizacionService.getHeaderOptionFilterList(this.obrasSelect,o,n,i,this.reportType).subscribe(e=>{console.log(e),e=e.map(e=>(null==e&&(e="Vacio"),e)),this.filtersOptions[String(t)]=e,console.log(this.filtersOptions),this.eventsSubjectSearchedSimpleFilter.next(),d.a.displayLoading=!1},e=>{console.log(e),d.a.displayLoading=!1})}openDateFilter(e){console.log("borrrar comentario ",this.searchConditionDateFilter),e=this.safeColumn(e),console.log("openDateFilter",e+"-date"),r("#"+e+"-date").show()}applyFilter(e){var t=Object.keys(e);t.length>0&&(console.log("sub_keys",t),t.forEach(t=>{console.log(t),this.searchCondition[t]=e[t]})),console.log("this.searchCondition",this.searchCondition);let i=this.getFilterParameters(),n=null;null!=this.sortFilter.name&&null!=this.sortFilter.direction&&(n=`${/\s/g.test(this.sortFilter.name)?`[${this.sortFilter.name}]`:this.sortFilter.name} ${String(this.sortFilter.direction).toUpperCase()}`),this.page=1,this.displayLoading=!0,i=i.replaceAll(";",","),console.log("calculada idFormat",i),this.legalizacionService.getDataTable(this.obrasSelect,this.page,this.sizePage,n,i,this.reportType).subscribe(e=>{console.log(e),this.dataTable=e.data,this.dataSource=new a.k(e.data),this.dataSource.paginator=this.paginator,this.lengthTable=e.count,this.displayLoading=!1},e=>{this.displayLoading=!1})}clearColumn(e){delete this.searchCondition[e],console.log(this.searchCondition);let t=this.getFilterParameters();console.log("limpiar filtro ",t),this.getDataTable()}applyFilterDate(e){if(e){let t=!0;for(let i=0;i<this.filterDateList.length;i++)this.filterDateList[i].field==e.field&&(this.filterDateList[i].query=e.query,console.log("filtro repetido, remplzando filtro"),t=!1);console.log(e),t&&(this.filterDateList.push(e),this.searchConditionDateFilter[e.field]=e.query,console.log(e.field),console.log("this.searchConditionDateFilter",this.searchConditionDateFilter)),this.page=1,this.getDataTable(),this.dataSource.paginator=this.paginator}}deleteFilterDate(e){console.log(e);let t=[];for(let i=0;i<this.filterDateList.length;i++){const n=this.filterDateList[i];n.field!=e?t.push(n):delete this.searchConditionDateFilter[e]}this.filterDateList=t,this.getDataTable()}getFilterParameters(e){console.log("armar filtros con esto",this.searchCondition);let t="";var i=Object.keys(this.searchCondition);i.length>0&&(console.log("keys",i),i.forEach(i=>{if(console.log(i),console.log("filtro con header "+e+" keys "+i),null!=e&&i==e);else{let e=this.searchCondition[i].map(e=>`''${e}''`);if(i=this._utilsService.getOriginalNameFromColumnCalculate(i),e.length<=1&&e.includes("''Vacio''"))t+=` AND ${i} IS NULL `;else if(e.length>1&&e.includes("''Vacio''")){let n=e.toString();n=n.replace(",''Vacio''",""),n=n.replace("''Vacio'',",""),n=n.replace("''Vacio''",""),/ /g.test(i)&&(i=String(i).includes("=")?String(i).includes("when")||String(i).includes("WHEN")||String(i).includes("When")?`(${i=i.replaceAll("'","''")})`:`(${i})`:`[${i}]`),t+=` AND (${i} IN (${n}) OR ${i} IS NULL)`}else/ /g.test(i)&&(i=String(i).includes("=")?String(i).includes("when")||String(i).includes("WHEN")||String(i).includes("When")?`(${i=i.replaceAll("'","''")})`:`(${i})`:`[${i}]`),t+=` AND ${i} IN (${e.toString()})`}}),console.log(t));let n=this.searchTemp;n=null==n?"":n,console.log("agregamos ",n),t+=n;for(let o=0;o<this.filterDateList.length;o++)t+=this.filterDateList[o].query;return""==t?null:t}selectRow(e){console.log(e),this.rowSelected=e}editElement(e){console.log(`###### ${e}  ######`);let t=null;null!=this.sortFilter.name&&null!=this.sortFilter.direction&&(t=`${/\s/g.test(this.sortFilter.name)?`[${this.sortFilter.name}]`:this.sortFilter.name} ${String(this.sortFilter.direction).toUpperCase()}`);let i=this.getFilterParameters();this.dialog.open(c.a,{height:"80%",data:{element:e,obras:this.obrasSelect,sortFilter:t,filter:i,reportType:this.reportType}}).afterClosed().subscribe(e=>{console.log(`Dialog result: ${e}`),this.getDataTable()})}getStatusRules(e,t){if("GesCred"==e||"GesSub"==e||"GesCart"==e){for(let e=0;e<this.negativeColorRules.length;e++)if(String(this.negativeColorRules[e]).toUpperCase()==String(t).toUpperCase())return 0;for(let e=0;e<this.ok1ColorRules.length;e++)if(String(this.ok1ColorRules[e]).toUpperCase()==String(t).toUpperCase())return 1;for(let e=0;e<this.ok2ColorRules.length;e++)if(String(this.ok2ColorRules[e]).toUpperCase()==String(t).toUpperCase())return 2;for(let e=0;e<this.expirationColorRules.length;e++)if(String(this.ok2ColorRules[e]).toUpperCase()==String(t).toUpperCase())return 3}}actionPanel(){console.log("actionPanel")}removeWhiteSpaces(e){return(e=this._utilsService.getAliasFromColumnCalculate(e)).replace(/ /g,"")}getHeaderType(e){return this._utilsService.getHeaderType(e)}getAliasFromColumnCalculate(e){return this._utilsService.getAliasFromColumnCalculate(e)}safeColumn(e){if((e=String(e).replace("+","-")).includes(".")&&!e.includes("=")){let t=e.split(".");e=t.length>1?t[1]:t[0]}return(e=this._utilsService.getAliasFromColumnCalculate(e)).replace(/ /g,"")}getReportType(e){return"legalizacion"==e?this.LEGALIZACION:"promesas"==e?this.PROMESA:"subsidios"==e?this.SUBSIDIO:"segumientos-subsidio"==e?this.SEGUIMIENTO_SUBSIDIO:"entregas"==e?this.ENTREGA:"desembolsos"==e?this.DESEMBOLSO:"recaudos"==e?this.RECAUDO:"trazabilidad"==e?this.TRAZABILIDAD:"ordenes"==e?this.ORDENES:"renovaciones"==e?this.RENOVACION:"escrituracion"==e?this.ESCRITURACION:void 0}getReportName(e){return"legalizacion"==e?"Legalizacion":"promesas"==e?"Promesas":"subsidios"==e?"Subsidios":"segumientos-subsidio"==e?"Segumientos Subsidio":"entregas"==e?"Entregas":"desembolsos"==e?"Desembolsos":"recaudos"==e?"Recaudos":"trazabilidad"==e?"Trazabilidad":"ordenes"==e?"Ordenes":"renovaciones"==e?"Renovaciones":"escrituracion"==e?"Escrituraciones":void 0}}return e.\u0275fac=function(t){return new(t||e)(f.Pb(C.a),f.Pb(S.a),f.Pb(F.a),f.Pb(O.b),f.Pb(o.c))},e.\u0275cmp=f.Jb({type:e,selectors:[["app-legalizacion"]],viewQuery:function(e,t){if(1&e&&(f.Oc(s.a,1),f.Oc(l.a,1)),2&e){let e;f.vc(e=f.dc())&&(t.sort=e.first),f.vc(e=f.dc())&&(t.paginator=e.first)}},decls:26,vars:20,consts:[[1,"content-panel",3,"click"],[1,"title-content"],[1,"example-spacer"],["appearance","fill",1,"example-full-width"],["matInput","",3,"formControl"],[1,"content-btns"],["mat-raised-button","",1,"btn-clean",3,"click"],[1,"content-table","example-container"],["mat-table","",3,"dataSource"],[3,"matColumnDef",4,"ngFor","ngForOf"],["mat-header-row","",4,"matHeaderRowDef","matHeaderRowDefSticky"],["mat-row","",3,"ngClass","click","dblclick",4,"matRowDef","matRowDefColumns"],["showFirstLastButtons","","aria-label","Select page of periodic elements",3,"length","pageSizeOptions","page"],["id","spinner-panel",3,"visible","closeIcon","showHeader","dismissableMask","modal","breakpoints","visibleChange"],[1,"download-content",3,"click"],["mat-fab","","color","primary","aria-label","Example icon button with a delete icon"],[3,"matColumnDef"],["mat-header-cell","",3,"hidden",4,"matHeaderCellDef"],["mat-cell","",3,"hidden","ngClass",4,"matCellDef"],["mat-header-cell","",3,"hidden"],[1,"th-header"],[3,"click",4,"ngIf"],[3,"ngClass","click",4,"ngIf"],["class","header-filter",3,"id","headers","filtersOptions","camposFecha","displayLoading","eventsClear","eventsSearchFilter","newItemEvent","removeItemEvent","searchFilterItemEvent","clearSearchFilterItemEvent",4,"ngIf"],["class","header-filter date-filter-modal",3,"id","headers","filtersOptions","camposFecha","eventsClear","newItemEvent","removeItemEvent",4,"ngIf"],[3,"click"],[3,"ngClass","click"],[1,"header-filter",3,"id","headers","filtersOptions","camposFecha","displayLoading","eventsClear","eventsSearchFilter","newItemEvent","removeItemEvent","searchFilterItemEvent","clearSearchFilterItemEvent"],[1,"header-filter","date-filter-modal",3,"id","headers","filtersOptions","camposFecha","eventsClear","newItemEvent","removeItemEvent"],["mat-cell","",3,"hidden","ngClass"],["class","td-content",4,"ngIf"],[1,"td-content"],["mat-header-row",""],["mat-row","",3,"ngClass","click","dblclick"]],template:function(e,t){1&e&&(f.Vb(0,"app-layout"),f.Vb(1,"section",0),f.cc("click",function(){return t.actionPanel()}),f.Vb(2,"mat-card"),f.Vb(3,"div",1),f.Vb(4,"h1"),f.Jc(5),f.Ub(),f.Qb(6,"span",2),f.Vb(7,"mat-form-field",3),f.Vb(8,"mat-label"),f.Jc(9,"Busqueda por NIT, Nombre, Agrupaci\xf3n"),f.Ub(),f.Qb(10,"input",4),f.Ub(),f.Ub(),f.Vb(11,"div",5),f.Vb(12,"button",6),f.cc("click",function(){return t.cleanFilter()}),f.Jc(13,"Limpiar"),f.Ub(),f.Ub(),f.Vb(14,"div",7),f.Vb(15,"table",8),f.Hc(16,Z,3,1,"ng-container",9),f.Hc(17,X,1,0,"tr",10),f.Hc(18,Y,1,3,"tr",11),f.Ub(),f.Ub(),f.Vb(19,"mat-paginator",12),f.cc("page",function(e){return t.changePage(e)}),f.Ub(),f.Ub(),f.Vb(20,"p-dialog",13),f.cc("visibleChange",function(e){return t.displayLoading=e}),f.Qb(21,"app-spinner"),f.Ub(),f.Vb(22,"div",14),f.cc("click",function(){return t.exportToExcel()}),f.Vb(23,"button",15),f.Vb(24,"mat-icon"),f.Jc(25,"download"),f.Ub(),f.Ub(),f.Ub(),f.Ub(),f.Ub()),2&e&&(f.Db(5),f.Kc(t.tableName),f.Db(5),f.mc("formControl",t.quickSearch),f.Db(5),f.mc("dataSource",t.dataSource),f.Db(1),f.mc("ngForOf",t.displayedColumns),f.Db(1),f.mc("matHeaderRowDef",t.displayedColumns)("matHeaderRowDefSticky",!0),f.Db(1),f.mc("matRowDefColumns",t.displayedColumns),f.Db(1),f.mc("length",t.lengthTable)("pageSizeOptions",f.oc(17,ee)),f.Db(1),f.Dc(f.oc(18,te)),f.mc("visible",t.displayLoading)("closeIcon",!1)("showHeader",!1)("dismissableMask",!1)("modal",!0)("breakpoints",f.oc(19,ie)))},directives:[D.a,y.a,v.c,v.g,I.b,g.c,g.o,g.f,P.a,a.j,n.n,a.g,a.i,l.a,T.a,A.a,E.a,a.c,a.e,a.b,a.d,n.o,n.m,_.a,R.a,w.a,a.a,a.f,a.h],pipes:[M.a,n.d,n.f,n.g],styles:[".content-panel[_ngcontent-%COMP%]{padding:2em;height:100%}.content-panel[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]{height:auto}.content-panel[_ngcontent-%COMP%]   .title-content[_ngcontent-%COMP%]{display:flex}.content-panel[_ngcontent-%COMP%]   .title-content[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{min-width:20em}.content-panel[_ngcontent-%COMP%]   .content-table[_ngcontent-%COMP%]{overflow-x:scroll;min-height:22em;height:auto}.content-panel[_ngcontent-%COMP%]   .content-table[_ngcontent-%COMP%]   tr.mat-row[_ngcontent-%COMP%]:active, .content-panel[_ngcontent-%COMP%]   .content-table[_ngcontent-%COMP%]   tr.mat-row[_ngcontent-%COMP%]:hover{background-color:#f5f5f5}.content-panel[_ngcontent-%COMP%]   .content-btns[_ngcontent-%COMP%]{padding-bottom:1em}.content-panel[_ngcontent-%COMP%]   .content-btns[_ngcontent-%COMP%]   .btn-clean[_ngcontent-%COMP%]{background-color:#fee350;color:#048c44}.content-panel[_ngcontent-%COMP%]   .download-content[_ngcontent-%COMP%]{display:inline-block;position:fixed;bottom:3em;right:2em}.content-panel[_ngcontent-%COMP%]   .download-content[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background-color:#fee350}.content-panel[_ngcontent-%COMP%]   .download-content[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:#048c44}table[_ngcontent-%COMP%]{width:100%}table[_ngcontent-%COMP%]   .th-header[_ngcontent-%COMP%]{display:flex}table[_ngcontent-%COMP%]   .th-header[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{cursor:pointer}table[_ngcontent-%COMP%]   .td-content[_ngcontent-%COMP%]{display:inline-block;height:2em;white-space:nowrap;overflow-x:hidden;text-overflow:ellipsis;vertical-align:middle;min-width:10em;max-width:40em}table[_ngcontent-%COMP%]   .header-filter[_ngcontent-%COMP%]{display:none;position:absolute;right:-10em;top:4.9em}table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{position:relative!important}table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{padding:0 2em;border:1px solid #e0e0e0}.example-spacer[_ngcontent-%COMP%]{flex:1 1 auto}.rowSelect[_ngcontent-%COMP%]{background-color:#d3d3d3!important}.negativeColorRules[_ngcontent-%COMP%]{background-color:#c62828}.ok1ColorRules[_ngcontent-%COMP%]{background-color:#43a047}.ok2ColorRules[_ngcontent-%COMP%]{background-color:#fdd835}.expirationColorRules[_ngcontent-%COMP%]{background-color:#ffa000}.filterActive[_ngcontent-%COMP%]{background-color:#048c44;border-radius:50%}  .content-panel table thead{position:sticky;top:0;box-shadow:0 2px 2px -1px #0006}.example-container[_ngcontent-%COMP%]{height:400px;overflow:auto}"]}),e})()}];let oe=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=f.Nb({type:e}),e.\u0275inj=f.Mb({imports:[[o.e.forChild(ne)],o.e]}),e})();var le=i("tk/3"),se=i("NjGU"),ae=i("FKr1"),re=i("PCNd"),ce=i("STbY"),ge=i("d3UM"),he=i("iTUp"),de=i("KRBT");let pe=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=f.Nb({type:e}),e.\u0275inj=f.Mb({providers:[se.a,C.a,S.a,F.a,{provide:le.a,useClass:de.a,multi:!0}],imports:[[n.c,oe,re.a,g.j,le.c,ae.l,g.t,y.b,a.l,l.b,s.c,E.b,P.b,I.c,ce.b,ge.b,T.b,O.c,he.a]]}),e})()}}]);