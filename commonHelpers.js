import{i as c,S as f}from"./assets/vendor-7659544d.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();function u({hits:i}){return i.map(t=>`<li class="gallary-item">
      <a class="gallary-item-link" href="${t.largeImageURL}"><img
        class="gallary-image"
        src="${t.webformatURL}"
        alt="${t.tags}"
      /></a>
         <ul class="info-list">
          <li class="info-list-item">
            <h2 class="list-item-title">Likes</h2>
            <p class="list-item-info">${t.likes}</p>
          </li>
          <li class="info-box-list-item">
            <h2 class="list-item-title">Views</h2>
            <p class="list-item-info">${t.views}</p>
          </li>
          <li class="info-box-list-item">
            <h2 class="list-item-title">Comments</h2>
            <p class="list-item-info">${t.comments}</p>
          </li>
          <li class="info-box-list-item">
            <h2 class="list-item-title">Downloads</h2>
            <p class="list-item-info">${t.downloads}</p>
          </li>
        </ul>
       </li>`).join("")}function m(i,t,r){const o=new URLSearchParams({key:"42677735-fe61580d2fc9bff74664cab68",q:i,image_type:"photo",orientation:"horizontal",safesearch:!0});fetch(`https://pixabay.com/api/?${o}`).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()}).then(e=>{if(e.hits.length===0){r.innerHTML="",t.value="",c.error({close:!1,message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",progressBar:!1});return}r.innerHTML=u(e),t.value="",new f(".gallary-item-link",{captionsData:"alt",captionDelay:250}).refresh()}).catch(e=>console.log(e))}const h=document.querySelector(".form"),n=document.querySelector(".form-input"),a=document.querySelector(".gallary");h.addEventListener("submit",p);function p(i){i.preventDefault();const t=n.value.trim();t&&(a.innerHTML='<span class="loader"></span>',m(t,n,a))}
//# sourceMappingURL=commonHelpers.js.map
