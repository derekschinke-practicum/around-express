(this["webpackJsonparound-react"]=this["webpackJsonparound-react"]||[]).push([[0],{18:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(1),c=n(8),s=n.n(c),o=(n(17),n(18),n(11)),i=n(3),u=n(2),l=n.n(u),p=n(4),d=n(9),b=n(10),j=new(function(){function e(t){Object(d.a)(this,e),this.baseUrl=t.baseUrl,this.headers=t.headers}return Object(b.a)(e,[{key:"getInitialCardsAndUserInfo",value:function(){return Promise.all([this.getInitialCards(),this.getUserInfo()])}},{key:"getUserInfo",value:function(){var e=Object(p.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(this.baseUrl+"/users/me",{headers:this.headers});case 2:if(!(t=e.sent).ok){e.next=5;break}return e.abrupt("return",t.json());case 5:return e.abrupt("return",Promise.reject("Error: ".concat(t.status)));case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getInitialCards",value:function(){var e=Object(p.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(this.baseUrl+"/cards",{headers:this.headers});case 2:if(!(t=e.sent).ok){e.next=5;break}return e.abrupt("return",t.json());case 5:return e.abrupt("return",Promise.reject("Error: ".concat(t.status)));case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"updateCardLikes",value:function(){var e=Object(p.a)(l.a.mark((function e(t,n){var a,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n?"DELETE":"PUT",e.next=3,fetch(this.baseUrl+"/cards/likes/"+t,{headers:this.headers,method:a});case 3:if(!(r=e.sent).ok){e.next=6;break}return e.abrupt("return",r.json());case 6:return e.abrupt("return",Promise.reject("Error: ".concat(r.status)));case 7:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"deleteCard",value:function(){var e=Object(p.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(this.baseUrl+"/cards/"+t,{headers:this.headers,method:"DELETE"});case 2:if(!(n=e.sent).ok){e.next=5;break}return e.abrupt("return",n.json());case 5:return e.abrupt("return",Promise.reject("Error: ".concat(n.status)));case 6:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"postCard",value:function(){var e=Object(p.a)(l.a.mark((function e(t){var n,a,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.title,a=t.link,e.next=3,fetch(this.baseUrl+"/cards",{headers:this.headers,method:"POST",body:JSON.stringify({name:n,link:a})});case 3:if(!(r=e.sent).ok){e.next=6;break}return e.abrupt("return",r.json());case 6:return e.abrupt("return",Promise.reject("Error: ".concat(r.status)));case 7:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"patchAvatarImage",value:function(){var e=Object(p.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(this.baseUrl+"/users/me/avatar",{headers:this.headers,method:"PATCH",body:JSON.stringify({avatar:t})});case 2:if(!(n=e.sent).ok){e.next=5;break}return e.abrupt("return",n.json());case 5:return e.abrupt("return",Promise.reject("Error: ".concat(n.status)));case 6:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"patchUserInfo",value:function(){var e=Object(p.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(this.baseUrl+"/users/me",{headers:this.headers,method:"PATCH",body:JSON.stringify({name:t.name,about:t.about})});case 2:if(!(n=e.sent).ok){e.next=5;break}return e.abrupt("return",n.json());case 5:return e.abrupt("return",Promise.reject("Error: ".concat(n.status)));case 6:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),e}())({baseUrl:"https://around.nomoreparties.co/v1/group-5",headers:{authorization:"8cd049ee-8ebb-4e3d-8437-51e87560cee5","Content-Type":"application/json"}}),f=Object(r.createContext)({});var h=function(){return Object(a.jsx)("footer",{className:"footer",children:Object(a.jsx)("p",{className:"footer__text",children:"\xa9 2020 Around The U.S."})})};var m=function(){return Object(a.jsx)("header",{className:"header",children:Object(a.jsx)("div",{role:"img","aria-label":"Around The U.S.",className:"header__logo"})})};var _=function(e){var t=Object(r.useContext)(f),n=e.card.owner._id===t._id,c=e.card.likes.some((function(e){return e._id===t._id}));return Object(a.jsxs)("li",{className:"card",children:[Object(a.jsx)("button",{type:"button",className:"button button_type_delete ".concat(n?"":"button_type_delete_hidden"),onClick:e.onCardDelete}),Object(a.jsx)("div",{role:"img",className:"card__image",style:{backgroundImage:"url(".concat(e.card.link,")")},alt:e.card.name,onClick:e.onCardClick}),Object(a.jsxs)("div",{className:"card__info",children:[Object(a.jsx)("h2",{className:"card__title",children:e.card.name}),Object(a.jsxs)("div",{children:[Object(a.jsx)("button",{type:"button","aria-label":"Like",className:"button button_type_like ".concat(c?"button_type_liked":""),onClick:e.onCardLike}),Object(a.jsx)("p",{className:"card__likes",children:e.card.likes.length})]})]})]})};var O=function(e){var t=Object(r.useContext)(f);return Object(a.jsxs)("main",{className:"main",children:[Object(a.jsxs)("section",{className:"profile",children:[Object(a.jsxs)("div",{className:"profile__data",children:[Object(a.jsxs)("div",{children:[Object(a.jsx)("div",{role:"img","aria-label":"",className:"profile__avatar",style:{backgroundImage:"url(".concat(t.avatar,")")},onClick:e.onEditAvatar}),Object(a.jsx)("button",{type:"button","aria-label":"Edit avatar",className:"button button_type_edit-avatar",onClick:e.onEditAvatar})]}),Object(a.jsxs)("div",{className:"profile__info",children:[Object(a.jsxs)("div",{className:"profile__text",children:[Object(a.jsx)("h1",{className:"profile__name",children:t.name}),Object(a.jsx)("p",{className:"profile__job",children:t.about})]}),Object(a.jsx)("button",{type:"button","aria-label":"Edit profile",className:"button button_type_edit",onClick:e.onEditProfile})]})]}),Object(a.jsx)("button",{"aria-label":"Add card",className:"button button_type_add",onClick:e.onAddCard})]}),Object(a.jsx)("section",{className:"places",children:Object(a.jsx)("ul",{className:"places__list",children:e.cards.map((function(t,n){return Object(a.jsx)(_,{card:t,onCardClick:function(){e.onCardClick(t)},onCardLike:function(){e.onCardLike(t)},onCardDelete:function(){e.onCardDelete(t)}},n)}))})})]})};var v=function(e){return Object(a.jsx)("div",{className:"popup popup_type_image ".concat(e.isOpen?"popup_opened":""),onClick:e.onClose,children:Object(a.jsxs)("div",{className:"popup__container popup__container_type_image",children:[Object(a.jsx)("button",{type:"button","aria-label":"Close",className:"button button_type_close button_type_close_type_image",onClick:e.onClose}),Object(a.jsxs)("figure",{className:"popup__figure",children:[Object(a.jsx)("img",{className:"popup__image",src:e.card.link,alt:e.card.title}),Object(a.jsx)("figcaption",{className:"popup__caption",children:e.card.name})]})]})})};var x=function(e){return Object(a.jsx)("div",{className:"popup popup_type_".concat(e.name," ").concat(e.isOpen?"popup_opened":""),children:Object(a.jsxs)("div",{className:"popup__container",children:[Object(a.jsx)("button",{type:"button","aria-label":"Close",className:"button button_type_close",onClick:e.onClose}),Object(a.jsx)("h3",{className:"popup__title",children:e.title}),Object(a.jsxs)("form",{method:"POST",name:"popup_type_".concat(e.name),className:"popup__form popup__form_type_".concat(e.name),noValidate:!!e.shouldNotValidate,onSubmit:e.onSubmit,children:[e.children,Object(a.jsx)("input",{type:"submit",value:"".concat(e.buttonValue),className:"button button_type_submit popup__button"})]})]})})};var k=function(e){var t=Object(r.useContext)(f),n=Object(r.useState)(""),c=Object(i.a)(n,2),s=c[0],o=c[1],u=Object(r.useState)(""),l=Object(i.a)(u,2),p=l[0],d=l[1];return Object(r.useEffect)((function(){o(t.name),d(t.about)}),[t]),Object(a.jsxs)(x,{name:"edit",title:"Edit profile",buttonValue:"Save",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(t){t.preventDefault(),e.onUpdateUser({name:s,about:p})},children:[Object(a.jsxs)("label",{children:[Object(a.jsx)("input",{type:"text",name:"name",id:"profile-name",className:"popup__input popup__input_type_name",placeholder:"Name",required:!0,minLength:"2",maxLength:"40",defaultValue:s,onChange:function(e){o(e.target.value)}}),Object(a.jsx)("span",{className:"popup__error",id:"profile-name-error"})]}),Object(a.jsxs)("label",{children:[Object(a.jsx)("input",{type:"text",name:"job",id:"profile-job",className:"popup__input popup__input_type_job",placeholder:"About me",required:!0,minLength:"2",maxLength:"200",defaultValue:p,onChange:function(e){d(e.target.value)}}),Object(a.jsx)("span",{className:"popup__error",id:"profile-job-error"})]})]})};var C=function(e){var t=Object(r.useRef)("");return Object(a.jsx)(x,{name:"edit-avatar",title:"Change profile picture",buttonValue:"Save",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(n){n.preventDefault(),e.onUpdateAvatar({avatar:t})},children:Object(a.jsxs)("label",{children:[Object(a.jsx)("input",{type:"url",name:"url",id:"profile-avatar",className:"popup__input",placeholder:"Image link",required:!0,ref:t}),Object(a.jsx)("span",{className:"popup__error",id:"profile-avatar-error"})]})})};var g=function(e){var t=Object(r.useState)(""),n=Object(i.a)(t,2),c=n[0],s=n[1],o=Object(r.useState)(""),u=Object(i.a)(o,2),l=u[0],p=u[1];return Object(r.useEffect)((function(){s(""),p("")}),[e.isOpen]),Object(a.jsxs)(x,{name:"add",title:"New place",buttonValue:"Create",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(t){t.preventDefault(),e.onAddCard({title:c,link:l})},children:[Object(a.jsxs)("label",{children:[Object(a.jsx)("input",{type:"text",name:"title",id:"card-title",className:"popup__input popup__input_type_title",placeholder:"Title",required:!0,minLength:"2",maxLength:"30",value:c,onChange:function(e){s(e.target.value)}}),Object(a.jsx)("span",{className:"popup__error",id:"card-title-error"})]}),Object(a.jsxs)("label",{children:[Object(a.jsx)("input",{type:"url",name:"url",id:"card-url",className:"popup__input popup__input_type_image-url",placeholder:"Image link",required:!0,value:l,onChange:function(e){p(e.target.value)}}),Object(a.jsx)("span",{className:"popup__error",id:"card-url-error"})]})]})};var y=function(){var e=Object(r.useState)({}),t=Object(i.a)(e,2),n=t[0],c=t[1],s=Object(r.useState)([]),u=Object(i.a)(s,2),l=u[0],p=u[1],d=Object(r.useState)({link:"",name:""}),b=Object(i.a)(d,2),_=b[0],x=b[1],y=Object(r.useState)(!1),N=Object(i.a)(y,2),S=N[0],E=N[1],U=Object(r.useState)(!1),w=Object(i.a)(U,2),A=w[0],I=w[1],P=Object(r.useState)(!1),L=Object(i.a)(P,2),T=L[0],D=L[1],V=Object(r.useState)(!1),q=Object(i.a)(V,2),J=q[0],F=q[1];function B(e){E(!1),I(!1),D(!1),F(!1)}return Object(r.useEffect)((function(){j.getUserInfo().then((function(e){c(e)})).catch((function(e){console.log(e)}))}),[]),Object(r.useEffect)((function(){j.getInitialCards().then((function(e){p(e)})).catch((function(e){console.log(e)}))}),[]),Object(a.jsx)(f.Provider,{value:n,children:Object(a.jsx)("div",{className:"page",children:Object(a.jsxs)("div",{className:"page__container",children:[Object(a.jsx)(m,{}),Object(a.jsx)(O,{cards:l,onEditAvatar:function(){E(!0)},onEditProfile:function(){I(!0)},onAddCard:function(){D(!0)},onCardClick:function(e){!function(e){x({link:e.link,name:e.name}),F(!0)}(e)},onCardLike:function(e){!function(e){var t=e.likes.some((function(e){return e._id===n._id}));j.updateCardLikes(e._id,t).then((function(t){var n=l.map((function(n){return n._id===e._id?t:n}));p(n)})).catch((function(e){console.log(e)}))}(e)},onCardDelete:function(e){!function(e){j.deleteCard(e._id).then((function(){var t=l.filter((function(t){return t._id!==e._id}));p(t)})).catch((function(e){console.log(e)}))}(e)}}),Object(a.jsx)(h,{}),Object(a.jsx)(k,{isOpen:A,onClose:B,onUpdateUser:function(e){var t=e.name,n=e.about;j.patchUserInfo({name:t,about:n}).then((function(e){c(e),B()})).catch((function(e){console.log(e)}))}}),Object(a.jsx)(C,{isOpen:S,onClose:B,onUpdateAvatar:function(e){var t=e.avatar;j.patchAvatarImage(t.current.value).then((function(e){c(e),B()})).catch((function(e){console.log(e)}))}}),Object(a.jsx)(g,{isOpen:T,onClose:B,onAddCard:function(e){var t=e.title,n=e.link;j.postCard({title:t,link:n}).then((function(e){p([e].concat(Object(o.a)(l))),B()})).catch((function(e){console.log(e)}))}}),Object(a.jsx)(v,{card:_,isOpen:J,onClose:B})]})})})},N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,21)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),c(e),s(e)}))};s.a.render(Object(a.jsx)(r.StrictMode,{children:Object(a.jsx)(y,{})}),document.getElementById("root")),N()}},[[20,1,2]]]);
//# sourceMappingURL=main.1b8176eb.chunk.js.map