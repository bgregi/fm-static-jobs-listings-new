(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(e){e.exports=[{id:1,company:"Photosnap",logo:"./images/photosnap.svg",new:!0,featured:!0,position:"Senior Frontend Developer",role:"Frontend",level:"Senior",postedAt:"1d ago",contract:"Full Time",location:"USA Only",languages:["HTML","CSS","JavaScript"],tools:[]},{id:2,company:"Manage",logo:"./images/manage.svg",new:!0,featured:!0,position:"Fullstack Developer",role:"Fullstack",level:"Midweight",postedAt:"1d ago",contract:"Part Time",location:"Remote",languages:["Python"],tools:["React"]},{id:3,company:"Account",logo:"./images/account.svg",new:!0,featured:!1,position:"Junior Frontend Developer",role:"Frontend",level:"Junior",postedAt:"2d ago",contract:"Part Time",location:"USA Only",languages:["JavaScript"],tools:["React","Sass"]},{id:4,company:"MyHome",logo:"./images/myhome.svg",new:!1,featured:!1,position:"Junior Frontend Developer",role:"Frontend",level:"Junior",postedAt:"5d ago",contract:"Contract",location:"USA Only",languages:["CSS","JavaScript"],tools:[]},{id:5,company:"Loop Studios",logo:"./images/loop-studios.svg",new:!1,featured:!1,position:"Software Engineer",role:"Fullstack",level:"Midweight",postedAt:"1w ago",contract:"Full Time",location:"Worldwide",languages:["JavaScript"],tools:["Ruby","Sass"]},{id:6,company:"FaceIt",logo:"./images/faceit.svg",new:!1,featured:!1,position:"Junior Backend Developer",role:"Backend",level:"Junior",postedAt:"2w ago",contract:"Full Time",location:"UK Only",languages:["Ruby"],tools:["RoR"]},{id:7,company:"Shortly",logo:"./images/shortly.svg",new:!1,featured:!1,position:"Junior Developer",role:"Frontend",level:"Junior",postedAt:"2w ago",contract:"Full Time",location:"Worldwide",languages:["HTML","JavaScript"],tools:["Sass"]},{id:8,company:"Insure",logo:"./images/insure.svg",new:!1,featured:!1,position:"Junior Frontend Developer",role:"Frontend",level:"Junior",postedAt:"2w ago",contract:"Full Time",location:"USA Only",languages:["JavaScript"],tools:["Vue","Sass"]},{id:9,company:"Eyecam Co.",logo:"./images/eyecam-co.svg",new:!1,featured:!1,position:"Full Stack Engineer",role:"Fullstack",level:"Midweight",postedAt:"3w ago",contract:"Full Time",location:"Worldwide",languages:["JavaScript","Python"],tools:["Django"]},{id:10,company:"The Air Filter Company",logo:"./images/the-air-filter-company.svg",new:!1,featured:!1,position:"Front-end Dev",role:"Frontend",level:"Junior",postedAt:"1mo ago",contract:"Part Time",location:"Worldwide",languages:["JavaScript"],tools:["React","Sass"]}]},,,,,function(e,t,a){e.exports=a.p+"static/media/photosnap.3f34b49c.svg"},function(e,t,a){e.exports=a.p+"static/media/manage.fbe431a9.svg"},function(e,t,a){e.exports=a.p+"static/media/account.9f72c13b.svg"},function(e,t,a){e.exports=a.p+"static/media/myhome.e0ad9358.svg"},function(e,t,a){e.exports=a.p+"static/media/loop-studios.6c50fd74.svg"},function(e,t,a){e.exports=a.p+"static/media/faceit.76faa79f.svg"},function(e,t,a){e.exports=a.p+"static/media/shortly.45f63772.svg"},function(e,t,a){e.exports=a.p+"static/media/insure.52b85a50.svg"},function(e,t,a){e.exports=a.p+"static/media/eyecam-co.39eaebdf.svg"},function(e,t,a){e.exports=a.p+"static/media/the-air-filter-company.23b515f9.svg"},function(e,t,a){e.exports=a.p+"static/media/icon-remove.ae67c678.svg"},function(e,t,a){e.exports=a(33)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(5),i=a.n(c),l=(a(22),a(2)),r=a(3),s=(a(23),a(1)),u=(a(24),a(25),a(6)),m=a.n(u),d=a(7),p=a.n(d),f=a(8),g=a.n(f),v=a(9),E=a.n(v),y=a(10),w=a.n(y),b=a(11),S=a.n(b),F=a(12),N=a.n(F),k=a(13),h=a.n(k),A=a(14),J=a.n(A),T=a(15),x=a.n(T);function C(e){var t;switch(e.id){case 1:t=m.a;break;case 2:t=p.a;break;case 3:t=g.a;break;case 4:t=E.a;break;case 5:t=w.a;break;case 6:t=S.a;break;case 7:t=N.a;break;case 8:t=h.a;break;case 9:t=J.a;break;case 10:t=x.a}return o.a.createElement("div",{className:"logo"},o.a.createElement("img",{src:t,alt:"Company Logo"}))}a(26);function O(e){return o.a.createElement("div",null,o.a.createElement("p",{className:"company"},e.company))}a(27);function D(e){var t=e.new.toString()+" new",a=e.featured.toString()+" featured";return o.a.createElement("div",{className:"new-and-featured"},o.a.createElement("div",{className:t},"NEW!"),o.a.createElement("div",{className:a},"FEATURED"))}a(28);function P(e){return o.a.createElement("div",null,o.a.createElement("h3",null,e.position))}a(29);function L(e){return o.a.createElement("div",{className:"lowerInfo"},o.a.createElement("p",{className:"PLowerInfo"},e.postedAt),o.a.createElement("div",{className:"mid-point"}),o.a.createElement("p",{className:"PLowerInfo"},e.contract),o.a.createElement("div",{className:"mid-point"}),o.a.createElement("p",{className:"PLowerInfo"},e.location))}a(30);function j(e){return o.a.createElement("div",{className:"buttonsList",onClick:function(t){return e.click(e.name)}},e.name)}function R(e){var t=[e.role,e.level].concat(e.languages,e.tools).map(function(t){return o.a.createElement(j,{key:t,name:t,click:e.addFilter})}),a=e.featured?"strip":"no-strip";return o.a.createElement("div",{className:"card"},o.a.createElement("div",{className:a}),o.a.createElement("div",{className:"main-info"},o.a.createElement("div",{className:"main-logo"},o.a.createElement(C,{id:e.id})),o.a.createElement("div",{className:"info"},o.a.createElement("div",{className:"upper-info"},o.a.createElement(O,{company:e.company}),o.a.createElement(D,{new:e.new,featured:e.featured})),o.a.createElement("div",{className:"mid-info"},o.a.createElement(P,{position:e.position})),o.a.createElement("div",{className:"lower-info"},o.a.createElement(L,{postedAt:e.postedAt,contract:e.contract,location:e.location})))),o.a.createElement("div",{className:"buttons"},t))}a(31),a(32);var I=a(16),M=a.n(I);function U(e){return o.a.createElement("div",{className:"whole-button"},o.a.createElement("div",{className:"main-button"},e.name),o.a.createElement("div",{className:"close-button",onClick:function(t){return e.click(e.name)}},o.a.createElement("img",{src:M.a,alt:"X",className:"x-button"})))}function W(e){var t=e.filters.map(function(t){return o.a.createElement(U,{name:t,key:t,click:e.remove})}),a=e.display?"filter-bar-main":"hide-filter-bar";return o.a.createElement("div",{className:a},o.a.createElement("div",{className:"left"},t),o.a.createElement("div",{className:"right",onClick:function(t){return e.clear(t)}},"Clear"))}var B=function(){var e=Object(n.useState)([]),t=Object(r.a)(e,2),a=t[0],c=t[1],i=Object(n.useState)(Object(l.a)(s)),u=Object(r.a)(i,2),m=u[0],d=u[1];function p(e){a.includes(e)||c(function(t){return[].concat(Object(l.a)(t),[e])})}function f(e){return a.includes(e.role)||a.includes(e.level)||a.some(function(t){return e.languages.includes(t)})||a.some(function(t){return e.tools.includes(t)})}Object(n.useEffect)(function(){if(void 0!==a[0]){var e=s.filter(f);d(e)}else d(Object(l.a)(s))},[a]);var g=m.map(function(e){return o.a.createElement(R,{key:e.id,id:e.id,company:e.company,logo:e.logo,new:e.new,featured:e.featured,position:e.position,role:e.role,level:e.level,postedAt:e.postedAt,contract:e.contract,location:e.location,languages:e.languages,tools:e.tools,addFilter:p})});return o.a.createElement("div",{className:"App"},o.a.createElement("header",null),o.a.createElement("main",null,o.a.createElement(W,{filters:a,remove:function(e){c(function(t){return t.filter(function(t){return t!==e})})},clear:function(e){c([])},display:void 0!==a[0]}),g))},H=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,34)).then(function(t){var a=t.getCLS,n=t.getFID,o=t.getFCP,c=t.getLCP,i=t.getTTFB;a(e),n(e),o(e),c(e),i(e)})};i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(B,null)),document.getElementById("root")),H()}],[[17,1,2]]]);
//# sourceMappingURL=main.089f6854.chunk.js.map