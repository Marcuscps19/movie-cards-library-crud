(this["webpackJsonpmovie-cards-library-crud"]=this["webpackJsonpmovie-cards-library-crud"]||[]).push([[0],{27:function(e,t,a){e.exports=a(40)},32:function(e,t,a){},33:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(23),o=a.n(i),l=(a(32),a(12)),c=a(1),u=(a(33),a(7)),s=a.n(u),m=a(11),h=a(2),d=a(3),v=a(5),p=a(4),f=function(e){Object(v.a)(a,e);var t=Object(p.a)(a);function a(){return Object(h.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){var e=this.props.movie,t=e.id,a=e.title,n=e.subtitle,i=e.storyline,o=e.imagePath;return r.a.createElement("div",{"data-testid":"movie-card",className:"movie-card"},r.a.createElement("div",{className:"movie-card-info"},r.a.createElement("h1",null,a),r.a.createElement("h3",null,n),r.a.createElement("p",null,i),r.a.createElement(l.b,{to:"/movies/".concat(t)},"VER DETALHES")),r.a.createElement("img",{src:o,alt:"Imagem do filme ".concat(a)}))}}]),a}(r.a.Component),b=function(e){Object(v.a)(a,e);var t=Object(p.a)(a);function a(){return Object(h.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){var e=this.props.children;return r.a.createElement("div",null,e)}}]),a}(n.Component),g=a(26),E=a(14),y=[{id:1,title:"Kingsglaive",subtitle:"Final Fantasy XV",storyline:"King Regis, who oversees the land of Lucis, commands his army of soldiers to protect the kingdom from the Niflheim empire's plans to steal the sacred crystal.",rating:4.5,imagePath:"images/Kingsglaive_Final_Fantasy_XV.jpg",bookmarked:!0,genre:"action"},{id:2,title:"Final Fantasy",subtitle:"Spirits Within",storyline:"A scientist makes a last stand on Earth with the help of a ragtag team of soldiers against an invasion of alien phantoms.",rating:4.5,imagePath:"images/Final_Fantasy_Spirits_Within.jpg",bookmarked:!1,genre:"fantasy"},{id:3,title:"Ghost In The Shell",subtitle:"Ghost In The Shell",storyline:"A hacker known as the Puppet Master is hunted by a female cyborg cop and her partner. This film is a revised version of Ghost in the Shell (1995).",rating:5,imagePath:"images/Ghost_In_The_Shell_2_0.jpg",bookmarked:!1,genre:"comedy"},{id:4,title:"Appleseed Alpha",subtitle:"Appleseed Alpha",storyline:"A young female soldier Deunan and her cyborg partner Briareos survive through the post World War 3 apocalyptic New York in search of human's future hope, the legendary city of Olympus.",rating:3.8,imagePath:"images/Appleseed_Alpha.jpg",bookmarked:!0,genre:"action"},{id:5,title:"Resident Evil",subtitle:"Vendetta",storyline:"Chris Redfield enlists the help of Leon S. Kennedy and Rebecca Chambers to stop a death merchant, with a vengeance, from spreading a deadly virus in New York.",rating:4.2,imagePath:"images/Resident_Evil_Vendetta.jpg",bookmarked:!0,genre:"fantasy"}];localStorage.setItem("movies",JSON.stringify(y));var O=function(){return JSON.parse(localStorage.getItem("movies"))},j=function(e){return localStorage.setItem("movies",JSON.stringify(e))},k=function(e){return function(t){setTimeout((function(){t(e)}),2e3)}},S=function(e){var t=O().find((function(t){return t.id===parseInt(e,10)}));return new Promise((function(e){k(t)(e)}))},w=function(e){return new Promise((function(t){var a=O().map((function(t){return t.id===parseInt(e.id,10)?Object(E.a)(Object(E.a)({},t),e):t}));j(a),k("OK")(t)}))},I=function(e){return new Promise((function(t){var a=O(),n=a[a.length-1].id+1,r=Object(E.a)(Object(E.a)({},e),{},{id:n});a=[].concat(Object(g.a)(a),[r]),j(a),k("OK")(t)}))},C=function(e){var t=O();return t=t.filter((function(t){return t.id!==parseInt(e,10)})),j(t),new Promise((function(e){k({status:"OK"})(e)}))},_=function(e){Object(v.a)(a,e);var t=Object(p.a)(a);function a(){return Object(h.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){return r.a.createElement("footer",null,r.a.createElement(l.b,{to:"/movies/new"},"ADICIONAR CART\xc3O"))}}]),a}(n.Component),R=function(e){Object(v.a)(a,e);var t=Object(p.a)(a);function a(){var e;return Object(h.a)(this,a),(e=t.call(this)).state={movies:[]},e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){this.fetchMovies()}},{key:"fetchMovies",value:function(){var e=Object(m.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise((function(e){var t=O();k(t)(e)}));case 2:t=e.sent,this.setState({movies:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.movies;return r.a.createElement("div",{"data-testid":"movie-list",className:"movie-list"},0===e.length?r.a.createElement(b,null,"Carregando..."):e.map((function(e){return r.a.createElement(f,{key:e.title,movie:e})})),r.a.createElement(_,null))}}]),a}(n.Component),N=a(17),M=a(13),P=function(e){Object(v.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(h.a)(this,a),(n=t.call(this,e)).state=Object(E.a)({},e.movie),n.handleSubmit=n.handleSubmit.bind(Object(M.a)(n)),n}return Object(d.a)(a,[{key:"handleSubmit",value:function(){(0,this.props.onSubmit)(this.state)}},{key:"updateMovie",value:function(e,t){this.setState(Object(N.a)({},e,t))}},{key:"renderTitleInput",value:function(){var e=this,t=this.state.title;return r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"movie_title"},"T\xedtulo:",r.a.createElement("br",null),r.a.createElement("input",{placeholder:"Insira o t\xedtulo",id:"movie_title",type:"text",className:"validate",value:t,onChange:function(t){return e.updateMovie("title",t.target.value)}})))}},{key:"renderSubtitleInput",value:function(){var e=this,t=this.state.subtitle;return r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"movie_subtitle"},"Subt\xedtulo:",r.a.createElement("br",null),r.a.createElement("input",{placeholder:"Insira o subt\xedtulo",id:"movie_subtitle",type:"text",value:t,onChange:function(t){return e.updateMovie("subtitle",t.target.value)}})))}},{key:"renderImagePathInput",value:function(){var e=this,t=this.state.imagePath;return r.a.createElement("div",{className:"row"},r.a.createElement("label",{htmlFor:"movie_image"},"Imagem:",r.a.createElement("br",null),r.a.createElement("input",{placeholder:"Insira o caminho da imagem",id:"movie_image",type:"text",value:t,onChange:function(t){return e.updateMovie("imagePath",t.target.value)}})))}},{key:"renderStorylineInput",value:function(){var e=this,t=this.state.storyline;return r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"movie_storyline"},"Sinopse:",r.a.createElement("br",null),r.a.createElement("textarea",{id:"movie_storyline",value:t,onChange:function(t){return e.updateMovie("storyline",t.target.value)}})))}},{key:"renderGenreSelection",value:function(){var e=this,t=this.state.genre;return r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"movie_genre"},"G\xeanero:",r.a.createElement("br",null),r.a.createElement("select",{id:"movie_genre",value:t,onChange:function(t){return e.updateMovie("genre",t.target.value)}},r.a.createElement("option",{value:"action"},"A\xe7\xe3o"),r.a.createElement("option",{value:"comedy"},"Com\xe9dia"),r.a.createElement("option",{value:"thriller"},"Suspense"),r.a.createElement("option",{value:"fantasy"},"Fantasia"))))}},{key:"renderRatingInput",value:function(){var e=this,t=this.state.rating;return r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"movie_rating"},"Avalia\xe7\xe3o:",r.a.createElement("br",null),r.a.createElement("input",{placeholder:"D\xea a avalia\xe7\xe3o do filme",id:"movie_rating",type:"number",step:.1,min:0,max:5,value:t,onChange:function(t){return e.updateMovie("rating",t.target.value)}})))}},{key:"renderSubmitButton",value:function(){return r.a.createElement("div",{className:"div-btn-submit"},r.a.createElement("button",{type:"button",onClick:this.handleSubmit},"Submit"))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("form",null,this.renderTitleInput(),this.renderSubtitleInput(),this.renderImagePathInput(),this.renderStorylineInput(),this.renderGenreSelection(),this.renderRatingInput(),this.renderSubmitButton()))}}]),a}(r.a.Component);P.defaultProps={movie:void 0};var x=P,A=function(e){Object(v.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(h.a)(this,a),(n=t.call(this,e)).state={movie:[]},n}return Object(d.a)(a,[{key:"componentDidMount",value:function(){this.fetchMovie()}},{key:"fetchMovie",value:function(){var e=Object(m.a)(s.a.mark((function e(){var t,a,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.match,a=t.params.id,e.next=4,S(a);case 4:n=e.sent,this.setState({movie:n});case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.movie,t=e.title,a=e.storyline,n=e.imagePath,i=e.genre,o=e.rating,c=e.subtitle,u=this.props.match.params.id;return 0===e.length?r.a.createElement(b,null,"Carregando..."):r.a.createElement("div",{"data-testid":"movie-details",className:"movie-details"},r.a.createElement("h1",null,t),r.a.createElement("img",{alt:"Movie Cover",src:"../".concat(n)}),r.a.createElement("p",null,r.a.createElement("span",{className:"title-info"},"Subtitle: "),"".concat(c)),r.a.createElement("p",null,r.a.createElement("span",{className:"title-info"},"Storyline: "),"".concat(a)),r.a.createElement("p",null,r.a.createElement("span",{className:"title-info"},"Genre: "),"".concat(i)),r.a.createElement("p",null,r.a.createElement("span",{className:"title-info"},"Rating: "),"".concat(o)),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(l.b,{to:"/"},"VOLTAR")),r.a.createElement("li",null,r.a.createElement(l.b,{to:"/movies/".concat(u,"/edit")},"EDITAR")),r.a.createElement("li",null,r.a.createElement(l.b,{to:"/",onClick:Object(m.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",C(u));case 1:case"end":return e.stop()}}),e)})))},"DELETAR"))))}}]),a}(n.Component),F=function(e){Object(v.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(h.a)(this,a),(n=t.call(this,e)).state={shouldRedirect:!1},n.handleSubmit=n.handleSubmit.bind(Object(M.a)(n)),n}return Object(d.a)(a,[{key:"handleSubmit",value:function(e){var t=this;this.setState({shouldRedirect:!1},Object(m.a)(s.a.mark((function a(){return s.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,I(e);case 2:t.setState({shouldRedirect:!0});case 3:case"end":return a.stop()}}),a)}))))}},{key:"render",value:function(){return this.state.shouldRedirect?r.a.createElement(c.a,{to:"/"}):r.a.createElement("div",{"data-testid":"new-movie",className:"new-movie"},r.a.createElement(x,{onSubmit:this.handleSubmit}))}}]),a}(n.Component),T=function(e){Object(v.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(h.a)(this,a),(n=t.call(this,e)).state={status:"loading",shouldRedirect:!1,movie:{}},n.handleSubmit=n.handleSubmit.bind(Object(M.a)(n)),n}return Object(d.a)(a,[{key:"componentDidMount",value:function(){this.fetchMovie()}},{key:"handleSubmit",value:function(e){var t=this;this.setState({shouldRedirect:!1},Object(m.a)(s.a.mark((function a(){return s.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,w(e);case 2:t.setState({shouldRedirect:!0});case 3:case"end":return a.stop()}}),a)}))))}},{key:"fetchMovie",value:function(){var e=Object(m.a)(s.a.mark((function e(){var t,a,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.match,a=t.params.id,e.next=4,S(a);case 4:n=e.sent,this.setState({status:"updated",movie:n});case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.status,a=e.shouldRedirect,n=e.movie;return a?r.a.createElement(c.a,{to:"/"}):"loading"===t?r.a.createElement(b,null,"Carregando..."):r.a.createElement("div",{"data-testid":"edit-movie",className:"edit-movie"},r.a.createElement(x,{movie:n,onSubmit:this.handleSubmit}))}}]),a}(n.Component),D=function(e){Object(v.a)(a,e);var t=Object(p.a)(a);function a(){return Object(h.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{"data-testid":"404-error"},"P\xe1gina n\xe3o encontrada")}}]),a}(n.Component),G=function(e){Object(v.a)(a,e);var t=Object(p.a)(a);function a(){return Object(h.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){return r.a.createElement("header",null,r.a.createElement("h1",null,"Movie Card Library"))}}]),a}(n.Component);var K=function(){return r.a.createElement(l.a,{basename:"/movie-cards-library-stateful"},r.a.createElement(G,null),r.a.createElement(c.d,null,r.a.createElement(c.b,{path:"/movies/new",component:F}),r.a.createElement(c.b,{path:"/movies/:id/edit",component:T}),r.a.createElement(c.b,{path:"/movies/:id",component:A}),r.a.createElement(c.b,{exact:!0,path:"/",component:R}),r.a.createElement(c.b,{path:"*",component:D})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(K,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[27,1,2]]]);
//# sourceMappingURL=main.698922e6.chunk.js.map