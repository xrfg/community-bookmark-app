(this["webpackJsonpcommunity-bookmark"]=this["webpackJsonpcommunity-bookmark"]||[]).push([[0],{22:function(e,t,n){},23:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var c=n(1),o=n(6),s=n(2),r=n(0);function a(){return Object(r.jsx)("div",{children:"OUR CONTACTS:"})}n(22);function i(){return Object(r.jsx)("div",{className:"description",children:Object(r.jsxs)("div",{children:[Object(r.jsx)("h2",{children:"bookmark collective"}),Object(r.jsxs)("p",{children:[" ","like big cats and i can not lie head nudges . Throw down all the stuff in the kitchen refuse to come home when humans are going to bed; stay out all night then yowl like i am dying at 4am yet mess up all the toilet paper so stare at the wall, play with food and get confused by dust but toilet paper attack claws fluff everywhere meow miao french ciao litterbox, catch mouse and gave it as a present so with tail in the air."]})]})})}n(23);function l(){return Object(r.jsx)("div",{className:"footer",children:Object(r.jsxs)("ul",{className:"navbar",children:[Object(r.jsx)(o.b,{to:"/about",children:Object(r.jsx)("li",{children:"About Us"})}),Object(r.jsx)(o.b,{to:"/contact",children:Object(r.jsx)("li",{children:"Contact"})})]})})}n(32);function j(){return Object(r.jsx)("header",{children:Object(r.jsx)(o.b,{to:"/",children:Object(r.jsx)("h3",{children:"bookmark collective"})})})}n(33);function b(e){return Object(r.jsx)("div",{children:Object(r.jsx)("h1",{children:e.name})})}function h(){var e=["trans-nb-books","videos","memes"];return Object(r.jsx)("div",{className:"icons-menu",children:["Trans*/NB Books","Videos","Memes"].map((function(t,n){var c=e[n];return Object(r.jsx)(o.b,{to:{pathname:"/".concat(c)},children:Object(r.jsx)(b,{name:t},t)})}))})}function d(){return Object(r.jsx)("div",{children:Object(r.jsx)("h2",{children:"page not found"})})}n(34);function u(){return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("div",{className:"form-box",children:[Object(r.jsx)("h3",{children:"Submit a book to the list!"}),Object(r.jsxs)("form",{onSubmit:function(e){var t=document.forms["submit-to-google-sheet"];e.preventDefault(),fetch("https://script.google.com/macros/s/AKfycbz2arWlNsiX18iPUQftVtgLNnTv_3Ba7YUOyo2p3V3NCd2CQh_9TjNi6FWsF7E1_uqdsg/exec",{method:"POST",body:new FormData(t)}).then((function(e){return console.log(t,"heeeeyeeee",e)})).catch((function(e){return console.error("Error!",e.message)}))},name:"submit-to-google-sheet",children:[Object(r.jsxs)("label",{children:["Title:",Object(r.jsx)("input",{type:"text",name:"Title",placeholder:"Title",required:!0})]}),Object(r.jsxs)("label",{children:["Author:",Object(r.jsx)("input",{type:"text",name:"Author",placeholder:"Author",required:!0})]}),Object(r.jsxs)("label",{children:["Fiction/Non-Fiction/Other:",Object(r.jsx)("input",{type:"text",name:"Fiction/NonFiction/Other",placeholder:"Genre"})]}),Object(r.jsxs)("label",{children:["Trans* or NB author?:",Object(r.jsx)("input",{type:"text",name:"Trans* or NB author?",placeholder:"Yes/No",required:!0})]}),Object(r.jsxs)("label",{children:["Trans* or NB character(s)?:",Object(r.jsx)("input",{type:"text",name:"Trans* or NB character(s)?",placeholder:"Yes/No/Gender(s)",required:!0})]}),Object(r.jsxs)("label",{children:["Short Description:",Object(r.jsx)("input",{type:"text",name:"Short Description",placeholder:"Short Description",required:!0})]}),Object(r.jsxs)("label",{children:["Comments:",Object(r.jsx)("input",{type:"text",name:"Comments",placeholder:"Comments",required:!0})]}),Object(r.jsx)("button",{type:"submit",children:"Send"}),Object(r.jsx)("button",{type:"reset",children:"Reset"})]})]})})}var p=Object(c.createContext)(null),f=(n(35),n(42));function O(e){var t=e.book;return Object(r.jsxs)("div",{className:"book-box",children:[Object(r.jsxs)("span",{children:["Title: ",t.title]}),Object(r.jsxs)("span",{children:["Author: ",t.author]}),t.fictionnonfictionother&&Object(r.jsxs)("span",{children:["Genre: ",t.fictionnonfictionother]}),t.transornbauthor&&Object(r.jsxs)("span",{children:["Trans* or NB author: ",t.transornbauthor]}),t.transornbcharacters&&Object(r.jsxs)("span",{children:["Trans* or NB author: ",t.transornbcharacters]}),t.shortdescription&&Object(r.jsxs)("span",{children:["Short Description: ",t.shortdescription]}),t.comments&&Object(r.jsxs)("span",{children:["Comments: ",t.comments]})]},Object(f.a)())}function m(e){var t=e.books;return console.log(t),Object(r.jsx)("ul",{children:t.map((function(e){return Object(r.jsx)(O,{book:e})}))})}function x(){var e=Object(c.useContext)(p),t=e.books,n=e.filteredBooks,o=e.dispatch,s=Object(c.useRef)();return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("form",{className:"searchbar",children:Object(r.jsx)("label",{children:Object(r.jsx)("input",{onChange:function(e){e.preventDefault();var n=t.filter((function(e){var t=s.current.value.toLowerCase();return console.log(t),!!e.title.toLowerCase().includes(t)||!!e.author.toLowerCase().includes(t)}));o({type:"searchbooks",payload:n}),o({type:"searchstring",payload:s.current.value})},ref:s,name:"search",className:"searchbar__input",type:"text",placeholder:"search"})})}),Object(r.jsx)(m,{books:n})]})}function v(){return Object(r.jsxs)("div",{children:[Object(r.jsx)(o.b,{to:"/trans-nb-books/form",children:Object(r.jsx)("div",{children:"transform "})}),Object(r.jsx)(o.b,{to:"/trans-nb-books/list",children:Object(r.jsx)("div",{children:"translist "})}),Object(r.jsx)(s.a,{path:"/trans-nb-books/form",component:u}),Object(r.jsx)(s.a,{path:"/trans-nb-books/list",component:x})]})}var y=n(12),k=n(19),g=n(8),N=function(e,t){switch(t.type){case"loadbooks":return Object(g.a)(Object(g.a)({},e),{},{books:t.payload,filteredBooks:t.payload});case"loadvideos":return Object(g.a)(Object(g.a)({},e),{},{videos:t.payload});case"loadmemes":return Object(g.a)(Object(g.a)({},e),{},{memes:t.payload});case"searchbooks":return Object(g.a)(Object(g.a)({},e),{},{filteredBooks:t.payload});case"searchstring":return Object(g.a)(Object(g.a)({},e),{},{searchString:t.payload});default:return e}},B={books:[],filteredBooks:[],searchString:"",memes:[],videos:[]};function w(e){var t=Object(c.useReducer)(N,B),n=Object(k.a)(t,2),o=n[0],s=n[1];return Object(c.useEffect)((function(){fetch("https://spreadsheets.google.com/feeds/list/19Aop-BCVFK-HVQbakYBdosdGIJAmWUQc92HdZjJLTJ0/1/public/full?alt=json").then((function(e){return e.json()})).then((function(e){var t,n=[],c=e.feed.entry,o=Object(y.a)(c);try{for(o.s();!(t=o.n()).done;){var r=t.value,a={};for(var i in r)i.startsWith("gsx$")&&(a[i.replace("gsx$","")]=r[i].$t);n.push(a)}}catch(l){o.e(l)}finally{o.f()}s({type:"loadbooks",payload:n})}))}),[]),Object(c.useEffect)((function(){fetch("https://spreadsheets.google.com/feeds/list/1mkGvGf_t-w4Zb0UyIAkDkqoA1Bt8SemKoYHRWcB7Y7c/2/public/values?alt=json").then((function(e){return e.json()})).then((function(e){var t,n=[],c=e.feed.entry,o=Object(y.a)(c);try{for(o.s();!(t=o.n()).done;){var r=t.value,a={};for(var i in r)i.startsWith("gsx$")&&(a[i.replace("gsx$","")]=r[i].$t);n.push(a)}}catch(l){o.e(l)}finally{o.f()}s({type:"loadmemes",payload:n})}))}),[]),Object(c.useEffect)((function(){fetch("https://spreadsheets.google.com/feeds/list/1mkGvGf_t-w4Zb0UyIAkDkqoA1Bt8SemKoYHRWcB7Y7c/3/public/values?alt=json").then((function(e){return e.json()})).then((function(e){var t,n=[],c=e.feed.entry,o=Object(y.a)(c);try{for(o.s();!(t=o.n()).done;){var r=t.value,a={};for(var i in r)i.startsWith("gsx$")&&(a[i.replace("gsx$","")]=r[i].$t);n.push(a)}}catch(l){o.e(l)}finally{o.f()}s({type:"loadvideos",payload:n})}))}),[]),Object(r.jsx)(p.Provider,{value:{books:o.books,memes:o.memes,videos:o.videos,filteredBooks:o.filteredBooks,dispatch:s},children:e.children})}n(36);var T=function(){return Object(r.jsx)(w,{children:Object(r.jsx)(o.a,{children:Object(r.jsxs)("div",{className:"page",children:[Object(r.jsx)(j,{}),Object(r.jsxs)(s.c,{children:[Object(r.jsx)(s.a,{exact:!0,path:"/",children:Object(r.jsx)(h,{})}),Object(r.jsx)(s.a,{path:"/trans-nb-books",component:v}),Object(r.jsx)(s.a,{path:"/about",component:i}),Object(r.jsx)(s.a,{path:"/contact",component:a}),Object(r.jsx)(s.a,{component:d})]}),Object(r.jsx)(l,{})]})})})},C=n(18);n.n(C).a.render(Object(r.jsx)(T,{}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.e4a7504e.chunk.js.map