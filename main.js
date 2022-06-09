(()=>{"use strict";var e=function(e){if("Escape"===e.key){var t=document.querySelector(".popup_is-opened");n(t)}},t=function(t){t.classList.add("popup_is-opened"),document.addEventListener("keydown",e)},n=function(t){t.classList.remove("popup_is-opened"),document.removeEventListener("keydown",e)},o={urlData:"https://nomoreparties.co/v1/plus-cohort-9",headers:{authorization:"3e17db6a-6951-46bf-9280-ebc36e39e39a","Content-Type":"application/json"}};function r(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}function a(e){console.log("Ошибка: ".concat(e))}var c=document.querySelector(".popup_edit-profile"),i=document.querySelector(".profile__name"),u=document.querySelector(".profile__description"),s=document.querySelector(".popup_type_image"),l=s.querySelector(".popup__image-name"),d=s.querySelector(".popup__image"),p=document.querySelector(".popup__edit-avatar"),f=function(){n(c)},m=function(){n(p)},v=function(e){if(e.target.classList.contains("popup")){var t=document.querySelector(".popup_is-opened");n(t)}},_=function(e){t(s);var n=e.target;d.src=n.src,l.textContent=n.alt,d.alt=n.alt},y=document.querySelector("#post-template").content,h=document.querySelector(".popup_add-card"),b=h.querySelector(".add-form"),S=b.querySelector(".add-card"),q=document.querySelector(".elements");function E(e,t){var n=e.likes,c=e.name,i=e.link,u=(e.isLiked,e.cardId,e.owner,y.querySelector(".elements__item").cloneNode(!0)),s=u.querySelector(".elements__img"),l=u.querySelector(".elements__like-button"),d=u.querySelector(".element__like-counter");l.addEventListener("click",(function(t){!function(e,t,n){e.classList.contains("button_is-active")?function(e){return fetch("".concat(o.urlData,"/cards/likes/").concat(e),{method:"DELETE",headers:o.headers}).then(r)}(n).then((function(n){t.textContent=n.likes.length,e.classList.remove("button_is-active")})).catch((function(e){return console.error(e)})):function(e){return fetch("".concat(o.urlData,"/cards/likes/").concat(e),{method:"PUT",headers:o.headers}).then(r)}(n).then((function(n){t.textContent=n.likes.length,e.classList.add("button_is-active")})).catch((function(e){return console.error(e)}))}(l,d,e._id)})),s.src=i,s.alt=c,s.addEventListener("click",_),u.querySelector(".elements__item-name").textContent=c,d.textContent=n.length;var p=u.querySelector(".delete");return p.addEventListener("click",(function(){var t;(t=e._id,fetch("".concat(o.urlData,"/cards/").concat(t),{method:"DELETE",headers:o.headers}).then(r)).then((function(){p.closest(".elements__item").remove()})).catch(a)})),e.likes.some((function(e){return e._id===t}))&&l.classList.add("button_is-active"),e.owner._id!==t&&p.remove(),u}var L=function(){n(h)},C=function(e,t,n){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?(t.classList.remove(n.inactiveButtonClass),t.removeAttribute("disabled")):(t.classList.add(n.inactiveButtonClass),t.setAttribute("disabled",!0))};function k(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}var g,A=document.querySelector(".profile__edit-button"),T=c.querySelector(".popup__close"),x=c.querySelector(".popup__content"),j=s.querySelector(".popup__close"),w=document.querySelector(".profile__add-button"),D=b.querySelector(".add-card"),z=b.querySelector(".popup__close"),O=document.querySelector(".profile__avatar"),P=b.querySelector(".popup__form_type_add-name"),B=b.querySelector(".popup__form_type_add-link"),I=c.querySelector(".popup__form_type_name"),N=c.querySelector(".popup__form_type_job"),J=p.querySelector(".popup__form_type_avatar-link"),G=p.querySelector(".popup__save-button"),H=(p.querySelector(".Edit-avatar-form"),document.querySelector(".profile__avatar-edit")),M=c.querySelector(".popup__save-button"),U=p.querySelector(".popup__close");function $(e){i.textContent=e.name,u.textContent=e.about,O.src=e.avatar}function F(e,t){"create-card-button"===t.name?t.textContent=e?"Сохранение...":"Создать":t.textContent=e?"Сохранение...":"Сохранить"}Promise.all([fetch("https://nomoreparties.co/v1/plus-cohort-9/users/me",{method:"GET",headers:{authorization:"3e17db6a-6951-46bf-9280-ebc36e39e39a","Content-Type":"application/json"}}).then(r),fetch("https://nomoreparties.co/v1/plus-cohort-9/cards",{method:"GET",headers:{authorization:"3e17db6a-6951-46bf-9280-ebc36e39e39a","Content-Type":"application/json"}}).then(r)]).then((function(e){var t,n,o=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var o,r,a=[],c=!0,i=!1;try{for(n=n.call(e);!(c=(o=n.next()).done)&&(a.push(o.value),!t||a.length!==t);c=!0);}catch(e){i=!0,r=e}finally{try{c||null==n.return||n.return()}finally{if(i)throw r}}return a}}(t,n)||function(e,t){if(e){if("string"==typeof e)return k(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?k(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),r=o[0],a=o[1],c=r._id;$(r),a.forEach((function(e){q.append(E(e,c))}))})).catch(a),g={formSelector:".form",inputSelector:".popup__form",submitButtonSelector:".popup__save-button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"form__input_type_error",errorClass:"popup__error_visible"},Array.from(document.querySelectorAll(g.formSelector)).forEach((function(e){e.addEventListener("submit",(function(e){e.preventDefault()})),function(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),o=e.querySelector(t.submitButtonSelector);C(n,o,t),n.forEach((function(r){r.addEventListener("input",(function(){!function(e,t,n){t.validity.valid?function(e,t,n){var o=e.querySelector(".".concat(t.id,"-error"));t.classList.remove(n.inputErrorClass),o.textContent=""}(e,t,n):function(e,t,n,o){var r=e.querySelector(".".concat(t.id,"-error"));t.classList.add(o.inputErrorClass),r.textContent=n}(e,t,t.validationMessage,n)}(e,r,t),C(n,o,t)}))}))}(e,g)})),w.addEventListener("click",(function(){t(h)})),z.addEventListener("click",L),h.addEventListener("mousedown",v),b.addEventListener("submit",(function(e){var t,n;e.preventDefault(),F(!0,D),(t=P.value,n=B.value,fetch("https://nomoreparties.co/v1/plus-cohort-9/cards ",{method:"POST",headers:{authorization:"3e17db6a-6951-46bf-9280-ebc36e39e39a","Content-Type":"application/json"},body:JSON.stringify({name:t,link:n})}).then(r)).then((function(e){return q.prepend(E(e,void 0))})).then((function(){S.classList.add("popup__button_disabled"),S.setAttribute("disabled",!0),L()})).catch(a).finally((function(){return F(!1,D)}))})),j.addEventListener("click",(function(){n(s)})),s.addEventListener("mousedown",v),A.addEventListener("click",(function(){t(c),I.value=i.textContent,N.value=u.textContent})),T.addEventListener("click",f),c.addEventListener("mousedown",v),x.addEventListener("submit",(function(e){var t,n;e.preventDefault(),(t=I.value,n=N.value,fetch("https://nomoreparties.co/v1/plus-cohort-9/users/me ",{method:"PATCH",headers:{authorization:"3e17db6a-6951-46bf-9280-ebc36e39e39a","Content-Type":"application/json"},body:JSON.stringify({name:t,about:n})}).then(r)).then((function(e){$(e),M.setAttribute("disabled",!0),f()})).catch(a)})),T.addEventListener("click",f),p.addEventListener("submit",(function(e){var t;e.preventDefault(),(t=J.value,fetch("https://nomoreparties.co/v1/plus-cohort-9/users/me/avatar",{method:"PATCH",headers:{authorization:"3e17db6a-6951-46bf-9280-ebc36e39e39a","Content-Type":"application/json"},body:JSON.stringify({avatar:t})}).then(r)).then((function(e){O.src=e.avatar,G.disabled=!0,m()})).catch(a)})),H.addEventListener("click",(function(){t(p)})),p.addEventListener("mousedown",v),U.addEventListener("click",m)})();