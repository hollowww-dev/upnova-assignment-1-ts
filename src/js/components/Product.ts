import '../../css/components/Product.css'

import { Product as ProductType } from '../../types/index'

class Product {
	id: number
	name: string
	description: string
	price: number
	image: string

	constructor(product: ProductType) {
		this.id = product.id
		this.name = product.name
		this.description = product.description
		this.price = product.price
		this.image = product.image
	}

	createElement(): HTMLElement {
		const link = document.createElement('a')
		link.href = `/product?id=${this.id}`

		const productHTML = `
			<div class="product">
				<div class="thumbnail">
					<img src="${this.image}" alt="${this.name}" ${
			typeof document.startViewTransition === 'function' ? `style="view-transition-name: product-image-${this.id}"` : ''
		} />
				</div>
				<div class="info">
					<h4 ${typeof document.startViewTransition === 'function' ? `style="view-transition-name: product-name-${this.id}"` : ''}>${this.name}</h4>
					<p ${typeof document.startViewTransition === 'function' ? `style="view-transition-name: product-description-${this.id}"` : ''}>${this.description}</p>
				</div>
				<span class="price" ${typeof document.startViewTransition === 'function' ? `style="view-transition-name: product-price-${this.id}"` : ''}>$${this.price}</span>
			</div>
		`

		link.innerHTML = productHTML

		return link
	}
}

export default Product
