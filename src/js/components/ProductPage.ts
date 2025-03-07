import '../../css/ProductPage.css'

import products from '../../data/products'
import Product from './Product'

class ProductPage extends HTMLElement {
	constructor() {
		super()
	}

	connectedCallback() {
		const id = this.getAttribute('id')

		const productData = products.find(product => product.id === Number(id))

		if (!productData) {
			return (this.innerHTML = `
			<h1>404 Not found</h4>
			<a href="/">Go back</a>
			`)
		}

		this.innerHTML = `
		<div class="container">
			<div class="breadcrumbs">
				<a href="/home" class="back">
                    <img src="/assets/back-icon.svg" style="width: 20px; height: 20px;" />
                </a>
				<span>Home / Products / ${productData.name}</span>
			</div>

			<div class="productDetails">
				<div class="image">
					<img src="${productData.image}" alt="${productData.name}" ${
			typeof document.startViewTransition === 'function' ? `style="view-transition-name: product-image-${productData.id}"` : ''
		} />
				</div>
				<div class="info">
                    <div class="headline">
					    <h1 ${typeof document.startViewTransition === 'function' ? `style="view-transition-name: product-name-${productData.id}"` : ''}>${productData.name}</h1>
					    <p ${typeof document.startViewTransition === 'function' ? `style="view-transition-name: product-description-${productData.id}"` : ''}>${
			productData.description
		}</p>
                    </div>
                    <div class="price">
					    <span class="priceNumber" ${typeof document.startViewTransition === 'function' ? `style="view-transition-name: product-price-${productData.id}"` : ''}>$${
			productData.price
		}</span>
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
        `

		const productsContainer = document.querySelector('#products')!

		products.filter(product => product.id !== productData.id).forEach(product => productsContainer.appendChild(new Product(product).createElement()))
	}
}

customElements.define('product-page', ProductPage)
