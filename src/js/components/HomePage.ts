import '../../css/HomePage.css'

import products from '../../data/products'

import Product from './Product'

class HomePage extends HTMLElement {
	constructor() {
		super()
	}

	connectedCallback() {
		this.innerHTML = `
        <div class="container">
			<div class="headline">
				<h1>Astro shop</h1>
				<p class="headlineMuted">Take a look in our products, feel free to buy some</p>
			</div>
            <div id="products"></div>
        </div>
        `

		const productsContainer = document.querySelector('#products')!

		products.forEach(product => productsContainer.appendChild(new Product(product).createElement()))
	}
}

customElements.define('home-page', HomePage)
