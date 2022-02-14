"use strict";(self.webpackChunkmonaco=self.webpackChunkmonaco||[]).push([[961],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=o.createContext({}),s=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=s(e.components);return o.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},p=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(t),m=r,f=p["".concat(c,".").concat(m)]||p[m]||d[m]||a;return t?o.createElement(f,i(i({ref:n},u),{},{components:t})):o.createElement(f,i({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=p;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<a;s++)i[s]=t[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}p.displayName="MDXCreateElement"},9733:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},metadata:function(){return c},toc:function(){return s},default:function(){return d}});var o=t(7462),r=t(3366),a=(t(7294),t(3905)),i=["components"],l={sidebar_position:4},c={unversionedId:"commands/downloading-configuration",id:"commands/downloading-configuration",isDocsHomePage:!1,title:"Download configuration",description:"This feature allows you to download the configuration from a Dynatrace tenant as Monaco files. You can use this feature to avoid starting from scratch when using Monaco.",source:"@site/docs/commands/downloading-configuration.md",sourceDirName:"commands",slug:"/commands/downloading-configuration",permalink:"/dynatrace-monitoring-as-code/next/commands/downloading-configuration",editUrl:"https://github.com/dynatrace-oss/dynatrace-monitoring-as-code/edit/main/documentation/docs/commands/downloading-configuration.md",version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Experimental New CLI",permalink:"/dynatrace-monitoring-as-code/next/commands/experimental-new-cli"},next:{title:"Logging",permalink:"/dynatrace-monitoring-as-code/next/commands/Logging"}},s=[{value:"Download configurations",id:"download-configurations",children:[]},{value:"Options",id:"options",children:[]},{value:"Notes",id:"notes",children:[]}],u={toc:s};function d(e){var n=e.components,t=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This feature allows you to download the configuration from a Dynatrace tenant as Monaco files. You can use this feature to avoid starting from scratch when using Monaco. "),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u26a0\ufe0f This feature requires CLI version 2.0.")),(0,a.kt)("h2",{id:"download-configurations"},"Download configurations"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Enable CLI 2.0 by adding an environment variable called NEW_CLI with a non-empty value other than 0. ")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="shell"',title:'"shell"'},"\n export NEW_CLI=1\n\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Create an environment file."),(0,a.kt)("li",{parentName:"ol"},"Run monaco using the download command")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="shell"',title:'"shell"'},"\n monaco download --environments=my-environment.yaml\n\n")),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("p",null,"To download specific APIs only, use ",(0,a.kt)("inlineCode",{parentName:"p"},"--downloadSpecificAPI")," to pass a list of API values separated by a comma. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="shell"',title:'"shell"'},"\n monaco download --downloadSpecificAPI alerting-profile,dashboard --environments=my-environment.yaml\n\n")),(0,a.kt)("h2",{id:"notes"},"Notes"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u26a0\ufe0f ",(0,a.kt)("strong",{parentName:"p"},"Application Detection Rules.")," When using download functionality you will only be able to update existing application dectection rules. If you want to create a new app detection rule you can only do so if there are no other app detection rules for that application.")))}d.isMDXComponent=!0}}]);