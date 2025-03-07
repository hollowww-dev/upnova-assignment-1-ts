import './components/HomePage'
import './components/ProductPage'

window.addEventListener('DOMContentLoaded', () => {
	const main = document.querySelector('main')

	const loadPage = async (page: string, params: Record<string, string> = {}) => {
		if (!main) return

		let newPage: HTMLElement | null = null

		switch (page) {
			case 'home':
				newPage = document.createElement('home-page')
				break
			case 'product':
				const productId = params.id || 'default'
				newPage = document.createElement('product-page')
				newPage.setAttribute('id', productId)
				break
			default:
				newPage = document.createElement('home-page')
		}

		if (!newPage) return

		if (document.startViewTransition) {
			document.startViewTransition(() => {
				main.innerHTML = ''
				main.appendChild(newPage)
			})
		} else {
			main.innerHTML = ''
			main.appendChild(newPage)
		}
	}

	const navigate = async (page: string, params: Record<string, string> = {}) => {
		await loadPage(page, params)
		const newUrl = page === 'home' ? '/' : `/${page}?${new URLSearchParams(params).toString()}`
		history.pushState(params, '', newUrl)
	}

	const currentPath = window.location.pathname.split('/')[1] || 'home'
	const urlParams = new URLSearchParams(window.location.search)
	const params = Object.fromEntries(urlParams.entries())
	navigate(currentPath, params)

	document.body.addEventListener('click', event => {
		const target = (event.target as HTMLElement).closest('a')
		if (!target) return

		event.preventDefault()
		const href = target.getAttribute('href') || ''
		const [path, query] = href.split('?')
		const params = query ? Object.fromEntries(new URLSearchParams(query).entries()) : {}

		navigate(path.split('/')[1], params)
	})

	window.addEventListener('popstate', () => {
		const currentPath = window.location.pathname.split('/')[1] || 'home'
		const urlParams = new URLSearchParams(window.location.search)
		const params = Object.fromEntries(urlParams.entries())
		navigate(currentPath, params)
	})
})
