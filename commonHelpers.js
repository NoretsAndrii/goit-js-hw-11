import{i as c,S as f}from"./assets/vendor-7659544d.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function s(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerPolicy&&(i.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?i.credentials="include":t.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(t){if(t.ep)return;t.ep=!0;const i=s(t);fetch(t.href,i)}})();function u(r){const e=new URLSearchParams({key:"42677735-fe61580d2fc9bff74664cab68",q:r,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`https://pixabay.com/api/?${e}`).then(s=>{if(!s.ok)throw new Error(s.status);return s.json()})}function m({hits:r}){return r.map(e=>`<li class="gallary-item">
      <a class="gallary-item-link" href="${e.largeImageURL}"><img
        class="gallary-image"
        src="${e.webformatURL}"
        alt="${e.tags}"
      /></a>
         <ul class="info-list">
          <li class="info-list-item">
            <h2 class="list-item-title">Likes</h2>
            <p class="list-item-info">${e.likes}</p>
          </li>
          <li class="info-box-list-item">
            <h2 class="list-item-title">Views</h2>
            <p class="list-item-info">${e.views}</p>
          </li>
          <li class="info-box-list-item">
            <h2 class="list-item-title">Comments</h2>
            <p class="list-item-info">${e.comments}</p>
          </li>
          <li class="info-box-list-item">
            <h2 class="list-item-title">Downloads</h2>
            <p class="list-item-info">${e.downloads}</p>
          </li>
        </ul>
       </li>`).join("")}const h=document.querySelector(".form"),n=document.querySelector(".form-input"),a=document.querySelector(".gallary");h.addEventListener("submit",p);function p(r){r.preventDefault();const e=n.value.trim();e&&(a.innerHTML='<span class="loader"></span>',u(e).then(s=>{if(s.hits.length===0){a.innerHTML="",n.value="",c.error({close:!1,message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",progressBar:!1});return}a.innerHTML=m(s),n.value="",new f(".gallary-item-link",{captionsData:"alt",captionDelay:250}).refresh()}).catch(s=>console.log(s)))}
//# sourceMappingURL=commonHelpers.js.map
