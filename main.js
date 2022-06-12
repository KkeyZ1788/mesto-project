(()=>{"use strict";var e=function(e){if("Escape"===e.key){var t=document.querySelector(".popup_is-opened");n(t)}},t=function(t){t.classList.add("popup_is-opened"),document.addEventListener("keydown",e)},n=function(t){t.classList.remove("popup_is-opened"),document.removeEventListener("keydown",e)},r={urlData:"https://nomoreparties.co/v1/plus-cohort-9",headers:{authorization:"3e17db6a-6951-46bf-9280-ebc36e39e39a","Content-Type":"application/json"}};function o(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}function a(e){console.log("Ошибка: ".concat(e))}var c=document.querySelector(".popup_edit-profile"),u=document.querySelector(".profile__name"),i=document.querySelector(".profile__description"),l=document.querySelector(".popup_type_image"),s=l.querySelector(".popup__image-name"),d=l.querySelector(".popup__image"),p=document.querySelector(".popup__edit-avatar"),f=function(){n(c)},m=function(){n(p)},_=function(e){e.target.classList.contains("popup")&&n(e.target)},v=function(e){t(l);var n=e.target;d.src=n.src,s.textContent=n.alt,d.alt=n.alt},y=document.querySelector("#post-template").content,h=document.querySelector(".popup_add-card"),S=h.querySelector(".add-form"),b=S.querySelector(".add-card"),q=document.querySelector(".elements");function E(e,t){var n=e.likes,c=e.name,u=e.link,i=(e.isLiked,e.cardId,e.owner,y.querySelector(".elements__item").cloneNode(!0)),l=i.querySelector(".elements__img"),s=i.querySelector(".elements__like-button"),d=i.querySelector(".element__like-counter");s.addEventListener("click",(function(t){!function(e,t,n){e.classList.contains("button_is-active")?function(e){return fetch("".concat(r.urlData,"/cards/likes/").concat(e),{method:"DELETE",headers:r.headers}).then(o)}(n).then((function(n){t.textContent=n.likes.length,e.classList.remove("button_is-active")})).catch((function(e){return console.error(e)})):function(e){return fetch("".concat(r.urlData,"/cards/likes/").concat(e),{method:"PUT",headers:r.headers}).then(o)}(n).then((function(n){t.textContent=n.likes.length,e.classList.add("button_is-active")})).catch((function(e){return console.error(e)}))}(s,d,e._id)})),l.src=u,l.alt=c,l.addEventListener("click",v),i.querySelector(".elements__item-name").textContent=c,d.textContent=n.length;var p=i.querySelector(".delete");return p.addEventListener("click",(function(){var t;(t=e._id,fetch("".concat(r.urlData,"/cards/").concat(t),{method:"DELETE",headers:r.headers}).then(o)).then((function(){p.closest(".elements__item").remove()})).catch(a)})),e.likes.some((function(e){return e._id===t}))&&s.classList.add("button_is-active"),e.owner._id!==t&&p.remove(),i}var L=function(){n(h)},k=function(e,t,n){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?(t.classList.remove(n.inactiveButtonClass),t.removeAttribute("disabled")):(t.classList.add(n.inactiveButtonClass),t.setAttribute("disabled",!0))};function C(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var g,A=document.querySelector(".profile__edit-button"),D=c.querySelector(".popup__close"),x=c.querySelector(".popup__content"),w=l.querySelector(".popup__close"),T=document.querySelector(".profile__add-button"),j=S.querySelector(".add-card"),O=S.querySelector(".popup__close"),P=document.querySelector(".profile__avatar"),B=S.querySelector(".popup__form_type_add-name"),I=S.querySelector(".popup__form_type_add-link"),N=document.querySelector(".add-card-form"),J=c.querySelector(".popup__form_type_name"),G=c.querySelector(".popup__form_type_job"),H=p.querySelector(".popup__form_type_avatar-link"),M=p.querySelector(".popup__save-button"),U=p.querySelector(".Edit-avatar-form"),z=document.querySelector(".profile__avatar-edit"),$=c.querySelector(".popup__save-button"),F=p.querySelector(".popup__close");function K(e){u.textContent=e.name,i.textContent=e.about,P.src=e.avatar}function Q(e,t){"create-card-button"===t.name?t.textContent=e?"Сохранение...":"Создать":t.textContent=e?"Сохранение...":"Сохранить"}Promise.all([fetch("".concat(r.urlData,"/users/me"),{method:"GET",headers:r.headers}).then(o),fetch("".concat(r.urlData,"/cards"),{method:"GET",headers:r.headers}).then(o)]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a=[],c=!0,u=!1;try{for(n=n.call(e);!(c=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);c=!0);}catch(e){u=!0,o=e}finally{try{c||null==n.return||n.return()}finally{if(u)throw o}}return a}}(t,n)||function(e,t){if(e){if("string"==typeof e)return C(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?C(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],a=r[1],c=o._id;K(o),a.forEach((function(e){q.append(E(e,c))}))})).catch(a),g={formSelector:".form",inputSelector:".popup__form",submitButtonSelector:".popup__save-button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"form__input_type_error",errorClass:"popup__error_visible"},Array.from(document.querySelectorAll(g.formSelector)).forEach((function(e){e.addEventListener("submit",(function(e){e.preventDefault()})),function(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),r=e.querySelector(t.submitButtonSelector);k(n,r,t),n.forEach((function(o){o.addEventListener("input",(function(){!function(e,t,n){t.validity.valid?function(e,t,n){var r=e.querySelector(".".concat(t.id,"-error"));t.classList.remove(n.inputErrorClass),r.textContent=""}(e,t,n):function(e,t,n,r){var o=e.querySelector(".".concat(t.id,"-error"));t.classList.add(r.inputErrorClass),o.textContent=n}(e,t,t.validationMessage,n)}(e,o,t),k(n,r,t)}))}))}(e,g)})),T.addEventListener("click",(function(){t(h)})),O.addEventListener("click",L),h.addEventListener("mousedown",_),S.addEventListener("submit",(function(e){var t,n;e.preventDefault(),Q(!0,j),(t=B.value,n=I.value,fetch("".concat(r.urlData,"/cards "),{method:"POST",headers:r.headers,body:JSON.stringify({name:t,link:n})}).then(o)).then((function(e){return q.prepend(E(e,void 0))})).then((function(){N.reset(),b.classList.add("popup__button_disabled"),b.setAttribute("disabled",!0),L()})).catch(a).finally((function(){return Q(!1,j)}))})),w.addEventListener("click",(function(){n(l)})),l.addEventListener("mousedown",_),A.addEventListener("click",(function(){t(c),J.value=u.textContent,G.value=i.textContent})),D.addEventListener("click",f),c.addEventListener("mousedown",_),x.addEventListener("submit",(function(e){var t,n;e.preventDefault(),Q(!0,$),(t=J.value,n=G.value,fetch("".concat(r.urlData,"/users/me"),{method:"PATCH",headers:r.headers,body:JSON.stringify({name:t,about:n})}).then(o)).then((function(e){K(e),$.setAttribute("disabled",!0),f()})).catch(a).finally((function(){return Q(!1,$)}))})),D.addEventListener("click",f),p.addEventListener("submit",(function(e){var t;e.preventDefault(),t=H.value,Q(!0,M),function(e){return fetch("".concat(r.urlData,"/users/me/avatar"),{method:"PATCH",headers:r.headers,body:JSON.stringify({avatar:e})}).then(o)}(t).then((function(e){P.src=e.avatar,M.disabled=!0,m(),M.setAttribute("disabled",!0),U.reset()})).catch(a).finally((function(){return Q(!1,M)}))})),z.addEventListener("click",(function(){t(p)})),p.addEventListener("mousedown",_),F.addEventListener("click",m)})();