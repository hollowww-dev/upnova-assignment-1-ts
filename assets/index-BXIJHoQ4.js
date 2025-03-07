var f=Object.defineProperty;var v=(s,e,t)=>e in s?f(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var d=(s,e,t)=>v(s,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))c(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();const m=[{id:1,name:"Product 1",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem veritatis ipsa quas architecto esse quam quidem,",image:"/assets/1.jpg",price:155},{id:2,name:"Product 2",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem veritatis ipsa quas architecto esse quam quidem,",image:"/assets/2.jpg",price:135},{id:3,name:"Product 3",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem veritatis ipsa quas architecto esse quam quidem,",image:"/assets/3.jpg",price:175},{id:4,name:"Product 4",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem veritatis ipsa quas architecto esse quam quidem,",image:"/assets/4.jpg",price:165}];class l{constructor(e){d(this,"id");d(this,"name");d(this,"description");d(this,"price");d(this,"image");this.id=e.id,this.name=e.name,this.description=e.description,this.price=e.price,this.image=e.image}createElement(){const e=document.createElement("a");e.href=`/product?id=${this.id}`;const t=`
			<div class="product">
				<div class="thumbnail">
					<img src="${this.image}" alt="${this.name}" ${typeof document.startViewTransition=="function"?`style="view-transition-name: product-image-${this.id}"`:""} />
				</div>
				<div class="info">
					<h4 ${typeof document.startViewTransition=="function"?`style="view-transition-name: product-name-${this.id}"`:""}>${this.name}</h4>
					<p ${typeof document.startViewTransition=="function"?`style="view-transition-name: product-description-${this.id}"`:""}>${this.description}</p>
				</div>
				<span class="price" ${typeof document.startViewTransition=="function"?`style="view-transition-name: product-price-${this.id}"`:""}>$${this.price}</span>
			</div>
		`;return e.innerHTML=t,e}}class g extends HTMLElement{constructor(){super()}connectedCallback(){this.innerHTML=`
        <div class="container">
			<div class="headline">
				<h1>Astro shop</h1>
				<p class="headlineMuted">Take a look in our products, feel free to buy some</p>
			</div>
            <div id="products"></div>
        </div>
        `;const e=document.querySelector("#products");m.forEach(t=>e.appendChild(new l(t).createElement()))}}customElements.define("home-page",g);class w extends HTMLElement{constructor(){super()}connectedCallback(){const e=this.getAttribute("id"),t=m.find(i=>i.id===Number(e));if(!t)return this.innerHTML=`
			<h1>404 Not found</h4>
			<a href="/">Go back</a>
			`;this.innerHTML=`
		<div class="container">
			<div class="breadcrumbs">
				<a href="/home" class="back">
                    <img src="/assets/back-icon.svg" style="width: 20px; height: 20px;" />
                </a>
				<span>Home / Products / ${t.name}</span>
			</div>

			<div class="productDetails">
				<div class="image">
					<img src="${t.image}" alt="${t.name}" ${typeof document.startViewTransition=="function"?`style="view-transition-name: product-image-${t.id}"`:""} />
				</div>
				<div class="info">
                    <div class="headline">
					    <h1 ${typeof document.startViewTransition=="function"?`style="view-transition-name: product-name-${t.id}"`:""}>${t.name}</h1>
					    <p ${typeof document.startViewTransition=="function"?`style="view-transition-name: product-description-${t.id}"`:""}>${t.description}</p>
                    </div>
                    <div class="price">
					    <span class="priceNumber" ${typeof document.startViewTransition=="function"?`style="view-transition-name: product-price-${t.id}"`:""}>$${t.price}</span>
                        <span className="priceInfo">* This is a fictional price</span>
					    <button class="addToCart">Add to cart</button>
                    </div>
				</div>
			</div>
			<p class="description">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec metus diam, vulputate vel elementum a, condimentum a ligula. Quisque accumsan
				nec diam sit amet scelerisque. Cras erat eros, ullamcorper a porttitor ut, commodo at libero. Fusce consequat ut nisl vel molestie. Aenean
				interdum facilisis pharetra.
			</p>
			<div id="products"></div>
		</div>
        `;const c=document.querySelector("#products");m.filter(i=>i.id!==t.id).forEach(i=>c.appendChild(new l(i).createElement()))}}customElements.define("product-page",w);window.addEventListener("DOMContentLoaded",()=>{const s=document.querySelector("main"),e=async(n,o={})=>{if(!s)return;let a=null;switch(n){case"home":a=document.createElement("home-page");break;case"product":const u=o.id||"default";a=document.createElement("product-page"),a.setAttribute("id",u);break;default:a=document.createElement("home-page")}a&&(document.startViewTransition?document.startViewTransition(()=>{s.innerHTML="",s.appendChild(a)}):(s.innerHTML="",s.appendChild(a)))},t=async(n,o={})=>{await e(n,o);const a=n==="home"?"/":`/${n}?${new URLSearchParams(o).toString()}`;history.pushState(o,"",a)},c=window.location.pathname.split("/")[1]||"home",i=new URLSearchParams(window.location.search),r=Object.fromEntries(i.entries());t(c,r),document.body.addEventListener("click",n=>{const o=n.target.closest("a");if(!o)return;n.preventDefault();const a=o.getAttribute("href")||"",[u,p]=a.split("?"),h=p?Object.fromEntries(new URLSearchParams(p).entries()):{};t(u.split("/")[1],h)}),window.addEventListener("popstate",()=>{const n=window.location.pathname.split("/")[1]||"home",o=new URLSearchParams(window.location.search),a=Object.fromEntries(o.entries());t(n,a)})});
