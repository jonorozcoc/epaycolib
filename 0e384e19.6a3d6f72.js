(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{103:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return O}));var n=a(0),r=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var b=r.a.createContext({}),p=function(e){var t=r.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=p(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},s=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,i=e.parentName,b=o(e,["components","mdxType","originalType","parentName"]),u=p(a),s=n,O=u["".concat(i,".").concat(s)]||u[s]||d[s]||c;return a?r.a.createElement(O,l(l({ref:t},b),{},{components:a})):r.a.createElement(O,l({ref:t},b))}));function O(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,i=new Array(c);i[0]=s;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var b=2;b<c;b++)i[b]=a[b];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}s.displayName="MDXCreateElement"},70:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return o})),a.d(t,"default",(function(){return p}));var n=a(3),r=a(7),c=(a(0),a(103)),i={id:"intro",title:"Introducci\xf3n",sidebar_label:"Introducci\xf3n",slug:"/"},l={unversionedId:"intro",id:"intro",isDocsHomePage:!1,title:"Introducci\xf3n",description:"Esta libreria tiene como objetivo simplificar el proceso de implementaci\xf3n del procesador de pagos ePayco",source:"@site/docs/intro.md",slug:"/",permalink:"/epaycolib/docs/",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/intro.md",version:"current",sidebar_label:"Introducci\xf3n",sidebar:"someSidebar",next:{title:"Credenciales de acceso",permalink:"/epaycolib/docs/keys"}},o=[{value:"Instalaci\xf3n",id:"instalaci\xf3n",children:[]},{value:"Inicializaci\xf3n de la libreria",id:"inicializaci\xf3n-de-la-libreria",children:[]}],b={toc:o};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Esta libreria tiene como objetivo simplificar el proceso de implementaci\xf3n del procesador de pagos ePayco"),Object(c.b)("h2",{id:"instalaci\xf3n"},"Instalaci\xf3n"),Object(c.b)("p",null,"Haciendo uso del gestor de paquetes ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://getcomposer.org/"}),"Composer")," en la carpeta de tu proyecto"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"composer require jonorozcoc/epaycolib\n")),Object(c.b)("p",null,"Si tu proyecto no est\xe1 manejado por composer debes agregar la libreria en tu script PHP"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),'require "vendor/autoload.php";\n')),Object(c.b)("h2",{id:"inicializaci\xf3n-de-la-libreria"},"Inicializaci\xf3n de la libreria"),Object(c.b)("p",null,"Para hacer uso de la libreria debe importar la clase principal e inicializarla con la configuraci\xf3n"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),'use Epayco\\Epayco;\n\n$epayco = new Epayco(array(\n    "apiKey" => "TU_LLAVE_PUBLICA",\n    "privateKey" => "TU_LLAVE_PRIVADA",\n    "language" => "ES",\n    "test" => true\n));\n')),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Variable"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Descripci\xf3n"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Notas"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"apiKey"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"La llave publica obtenida del panel de ePayco"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"privateKey"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"La llave privada obtenida del panel de ePayco"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"language"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"El lenguaje para la visualizaci\xf3n de errores"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ES - EN (Seg\xfan la \xfaltima versi\xf3n)")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"test"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Habilitar el entorno de pruebas"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}))))),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"Si no conoces cuales son tus llaves, revisa ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/keys"}),"Credenciales de acceso"))))}p.isMDXComponent=!0}}]);