import './polyfills.server.mjs';
import{B as L,F as q,I as w,a as f,b as g,c as I,d as F,e as _,f as v,g as D,h as j,i as A,j as r,k as i,l as m,m as N,n as c,o as B,w as T,x as z,y as U}from"./chunk-C6XM5C4D.mjs";var K=[],G=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=g({type:e}),e.\u0275inj=v({imports:[w.forRoot(K),w]});let n=e;return n})();var H=(()=>{let e=class e{constructor(){}ngOnInit(){console.log("ngOnInit iniciando...");let a;a=this.obtenerTipoDispositivo(),console.log("Tipo de dispositivo: "+a);var t=navigator.userAgent;console.log("El navegador del usuario es: "+t);var p=window.location.href;console.log("La URL actual es: "+p)}obtenerTipoDispositivo(){let a=navigator.userAgent,t={Desktop:/Windows|Macintosh|Linux/,Tableta:/iPad|Android(?!.*Mobile)|Tablet|KFAPWI/,Movil:/Mobile|Android|iPhone|BlackBerry|IEMobile|Opera Mini/},p=Object.keys(t);for(let d of p)if(t[d].test(a))return d;return"Desconocido"}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=f({type:e,selectors:[["app-frm-prospectos"]],decls:25,vars:0,consts:[["action","procesar_formulario.php","method","POST"],["for","nombre",1,"lblform-label"],["type","text","id","nombre","name","nombre","required","",1,"txtfrm-input"],["for","appaterno",1,"lblform-label"],["type","text","id","appaterno","name","appaterno","required","",1,"txtfrm-input"],["for","email",1,"lblform-label"],["type","email","id","email","name","email","required","",1,"txtfrm-input"],["for","celular",1,"lblform-label"],["type","tel","id","celular","name","celular","required","",1,"txtfrm-input"]],template:function(t,p){t&1&&(r(0,"form",0)(1,"label",1),c(2,"Nombre:"),i(),m(3,"br")(4,"input",2)(5,"br")(6,"br"),r(7,"label",3),c(8,"Apellido Paterno:"),i(),m(9,"br")(10,"input",4)(11,"br")(12,"br"),r(13,"label",5),c(14,"Correo electr\xF3nico:"),i(),m(15,"br")(16,"input",6)(17,"br")(18,"br"),r(19,"label",7),c(20,"Celular:"),i(),m(21,"br")(22,"input",8)(23,"br")(24,"br"),i())},styles:[".txtfrm-input[_ngcontent-%COMP%]{padding:8px;border:2px solid #ccc;border-radius:8px;font-family:Arial,sans-serif;font-size:16px;color:#333;background-color:#f5f5f5;transition:border-color .3s ease}.txtfrm-input[_ngcontent-%COMP%]:focus{outline:none;border-color:#66afe9;box-shadow:0 0 5px #66afe9}.lblform-label[_ngcontent-%COMP%]{font-size:16px;color:#227fa7;display:inline-block;margin-bottom:2px;transition:transform .3s ease}"]});let n=e;return n})();var R=(()=>{let e=class e{ngOnInit(){let a="https://uvm.mx/suitev3/get_ofertando_vigente",t=document.getElementById("campus"),p=document.getElementById("carrera"),d=document.getElementById("carerainteres"),M=document.getElementById("subnivelinteres"),O=document.getElementById("nivelinteres"),S=document.getElementById("ciclo"),h=new Set,b=new Set,x=new Set,C=new Set,y=new Set,E=new Set;fetch(a).then(o=>{if(!o.ok)throw new Error("Error al obtener el JSON: "+o.status);return o.json()}).then(o=>{o.message.forEach(l=>{h.add(l.nombrelargo_campus),b.add(l.crmit_vertical),x.add(l.carrerainteres),C.add(l.crmit_modalidad),y.add(l.crmit_nivelcrm),E.add(l.crmit_cicloreinscripciones)}),h.forEach(l=>{var s=document.createElement("option");s.value=l,s.textContent=l,t?.appendChild(s)}),b.forEach(l=>{var s=document.createElement("option");s.value=l,s.textContent=l,p?.appendChild(s)}),x.forEach(l=>{var s=document.createElement("option");s.value=l,s.textContent=l,d?.appendChild(s)}),C.forEach(l=>{var s=document.createElement("option");s.value=l,s.textContent=l,M?.appendChild(s)}),y.forEach(l=>{var s=document.createElement("option");s.value=l,s.textContent=l,O?.appendChild(s)}),E.forEach(l=>{var s=document.createElement("option");s.value=l,s.textContent=l,S?.appendChild(s)})}).catch(o=>{console.error("Error en la solicitud:",o)})}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=f({type:e,selectors:[["app-leer-json"]],decls:30,vars:0,consts:[["id","campus"],["value",""],["id","carrera"],["id","carerainteres"],["id","nivelinteres"],["id","subnivelinteres"],["id","ciclo"]],template:function(t,p){t&1&&(r(0,"p"),c(1,"Campus:"),i(),r(2,"select",0)(3,"option",1),c(4,"Selecciona una opci\xF3n"),i()(),r(5,"p"),c(6,"Carrera:"),i(),r(7,"select",2)(8,"option",1),c(9,"Selecciona una opci\xF3n"),i()(),r(10,"p"),c(11,"Carrera de inter\xE9s:"),i(),r(12,"select",3)(13,"option",1),c(14,"Selecciona una opci\xF3n"),i()(),r(15,"p"),c(16,"Nivel de inter\xE9s:"),i(),r(17,"select",4)(18,"option",1),c(19,"Selecciona una opci\xF3n"),i()(),r(20,"p"),c(21,"Sub nivel inter\xE9s:"),i(),r(22,"select",5)(23,"option",1),c(24,"Selecciona una opci\xF3n"),i()(),r(25,"p"),c(26,"Ciclo:"),i(),r(27,"select",6)(28,"option",1),c(29,"Selecciona una opci\xF3n"),i()())},styles:["select[_ngcontent-%COMP%]{font-size:16px;padding:8px;border-radius:8px;border:2px solid #ddd;margin-bottom:10px;background-color:#fff}select[_ngcontent-%COMP%]:focus{outline:none;border-color:#6c63ff;box-shadow:0 0 5px #6c63ff80}option[_ngcontent-%COMP%]{background-color:#fff}p[_ngcontent-%COMP%]{font-size:16px;color:#227fa7;margin-bottom:2px;transition:transform .3s ease}"]});let n=e;return n})();var P=(()=>{let e=class e{constructor(a){this.http=a}enviarInformacion(a,t,p,d,M,O,S,h,b,x,C,y,E){let o=new FormData;return o.append("nombre",a),o.append("apaterno",t),o.append("email",p),o.append("celular",d),o.append("urlreferrer",M),o.append("dispositivo",O),o.append("banner","elisa"),o.append("CID","2016705784.1697574806"),o.append("verify_token","UVM.G0-24"),o.append("marcable",C),o.append("campusLargo",y),o.append("carrera",S),o.append("carreraInteres",h),o.append("subNivelInteres",b),o.append("nivelInteres",E),o.append("ciclo",x),o.append("gclid",""),o.append("utm_campaign",""),this.http.post("https://webhooksqa.uvm.mx/proc-leads/lead/medios.php",o)}};e.\u0275fac=function(t){return new(t||e)(D(T))},e.\u0275prov=_({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();var J=(()=>{let e=class e{constructor(a){this.enviarpostService=a}enviarDatos(){this.enviarpostService.enviarInformacion("Elisa","Garcia","uno@dos.com","5522223333","htps://localhost","Desktop","INGLES","828","EC","24-1","0","EN LINEA","EC").subscribe({next:o=>{console.log(o)},error:o=>{console.error(o)}})}};e.\u0275fac=function(t){return new(t||e)(A(P))},e.\u0275cmp=f({type:e,selectors:[["app-enviar-apost"]],decls:3,vars:0,consts:[["id","btnEnviar",1,"rectangular-button",3,"click"]],template:function(t,p){t&1&&(r(0,"p")(1,"button",0),N("click",function(){return p.enviarDatos()}),c(2,"Enviar"),i()())},styles:[".rectangular-button[_ngcontent-%COMP%]{background-color:#227fa7;border:none;color:#fff;padding:15px 32px;text-align:center;text-decoration:none;display:inline-block;font-size:16px;margin:4px 2px;cursor:pointer;border-radius:10px}.rectangular-button[_ngcontent-%COMP%]:hover{background-color:#196889}"]});let n=e;return n})();var k=(()=>{let e=class e{constructor(){this.title="Feria de las Universidades"}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=f({type:e,selectors:[["app-root"]],decls:34,vars:1,consts:[[1,"main"],[1,"content"],[1,"left-side"],["xmlns","http://www.w3.org/2000/svg","viewBox","0 0 982 239","fill","none",1,"angular-logo"],["id","c","cx","0","cy","0","r","1","gradientTransform","rotate(118.122 171.182 60.81) scale(205.794)","gradientUnits","userSpaceOnUse"],["stop-color","#FF41F8"],["offset",".707","stop-color","#FF41F8","stop-opacity",".5"],["offset","1","stop-color","#FF41F8","stop-opacity","0"],["id","b","x1","0","x2","982","y1","192","y2","192","gradientUnits","userSpaceOnUse"],["stop-color","#F0060B"],["offset","0","stop-color","#F0070C"],["offset",".526","stop-color","#CC26D5"],["offset","1","stop-color","#7702FF"],["id","a"],["fill","#fff","d","M0 0h982v239H0z"],["role","separator","aria-label","Divider",1,"divider"],[1,"right-side"],[1,"pill-group"]],template:function(t,p){t&1&&(r(0,"main",0)(1,"div",1)(2,"div",2),I(),r(3,"svg",3)(4,"defs")(5,"radialGradient",4),m(6,"stop",5)(7,"stop",6)(8,"stop",7),i(),r(9,"linearGradient",8),m(10,"stop",9)(11,"stop",10)(12,"stop",11)(13,"stop",12),i(),r(14,"clipPath",13),m(15,"path",14),i()()(),F(),r(16,"h1"),c(17),i(),r(18,"p"),c(19,"\xA1Es hora de ponerte en el mapa y elegir tu destino acad\xE9mico! \xA1Coloca tus datos para inscribirte a la feria y marca el tipo de carrera que te hace vibrar!. \u{1F389}"),i()(),m(20,"div",15),r(21,"div",16)(22,"div",17)(23,"h3"),c(24,"Reg\xEDstrate"),i()()()()(),m(25,"router-outlet")(26,"hr"),r(27,"div",1)(28,"div",16),m(29,"app-frm-prospectos"),i(),r(30,"div",16),m(31,"app-leer-json"),i(),r(32,"div",16),m(33,"app-enviar-apost"),i()()),t&2&&(j(17),B("Bienvenido a la: ",p.title,""))},dependencies:[q,H,R,J],styles:['[_nghost-%COMP%]{--bright-blue: oklch(51.01% .274 263.83);--electric-violet: oklch(53.18% .28 296.97);--french-violet: oklch(47.66% .246 305.88);--vivid-pink: oklch(69.02% .277 332.77);--hot-red: oklch(61.42% .238 15.34);--orange-red: oklch(63.32% .24 31.68);--gray-900: oklch(19.37% .006 300.98);--gray-700: oklch(36.98% .014 302.71);--gray-400: oklch(70.9% .015 304.04);--red-to-pink-to-purple-vertical-gradient: linear-gradient( 180deg, var(--orange-red) 0%, var(--vivid-pink) 50%, var(--electric-violet) 100% );--red-to-pink-to-purple-horizontal-gradient: linear-gradient( 90deg, var(--orange-red) 0%, var(--vivid-pink) 50%, var(--electric-violet) 100% );--pill-accent: var(--bright-blue);font-family:Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol;box-sizing:border-box;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}h1[_ngcontent-%COMP%]{font-size:3.125rem;color:var(--gray-900);font-weight:500;line-height:100%;letter-spacing:-.125rem;margin:0;font-family:Inter Tight,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol}p[_ngcontent-%COMP%]{margin:0;color:var(--gray-700)}main[_ngcontent-%COMP%]{width:100%;min-height:100%;display:flex;justify-content:center;align-items:center;padding:1rem;box-sizing:inherit;position:relative}.angular-logo[_ngcontent-%COMP%]{max-width:9.2rem}.content[_ngcontent-%COMP%]{display:flex;justify-content:space-around;width:100%;max-width:700px;margin-bottom:3rem}.content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin-top:1.75rem}.content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-top:1.5rem}.divider[_ngcontent-%COMP%]{width:1px;background:var(--red-to-pink-to-purple-vertical-gradient);margin-inline:.5rem}.pill-group[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:start;flex-wrap:wrap;gap:1.25rem}.pill[_ngcontent-%COMP%]{display:flex;align-items:center;--pill-accent: var(--bright-blue);background:color-mix(in srgb,var(--pill-accent) 5%,transparent);color:var(--pill-accent);padding-inline:.75rem;padding-block:.375rem;border-radius:2.75rem;border:0;transition:background .3s ease;font-family:var(--inter-font);font-size:.875rem;font-style:normal;font-weight:500;line-height:1.4rem;letter-spacing:-.00875rem;text-decoration:none}.pill[_ngcontent-%COMP%]:hover{background:color-mix(in srgb,var(--pill-accent) 15%,transparent)}.pill-group[_ngcontent-%COMP%]   .pill[_ngcontent-%COMP%]:nth-child(6n+1){--pill-accent: var(--bright-blue)}.pill-group[_ngcontent-%COMP%]   .pill[_ngcontent-%COMP%]:nth-child(6n+2){--pill-accent: var(--french-violet)}.pill-group[_ngcontent-%COMP%]   .pill[_ngcontent-%COMP%]:nth-child(6n+3), .pill-group[_ngcontent-%COMP%]   .pill[_ngcontent-%COMP%]:nth-child(6n+4), .pill-group[_ngcontent-%COMP%]   .pill[_ngcontent-%COMP%]:nth-child(6n+5){--pill-accent: var(--hot-red)}.pill-group[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{margin-inline-start:.25rem}.social-links[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.73rem;margin-top:1.5rem}.social-links[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]{transition:fill .3s ease;fill:var(--gray-400)}.social-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]{fill:var(--gray-900)}@media screen and (max-width: 650px){.content[_ngcontent-%COMP%]{flex-direction:column;width:max-content}.divider[_ngcontent-%COMP%]{height:1px;width:100%;background:var(--red-to-pink-to-purple-horizontal-gradient);margin-block:1.5rem}}']});let n=e;return n})();var W=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=g({type:e,bootstrap:[k]}),e.\u0275inj=v({providers:[P],imports:[U,G,z]});let n=e;return n})();var $=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=g({type:e,bootstrap:[k]}),e.\u0275inj=v({imports:[W,L]});let n=e;return n})();export{$ as a};