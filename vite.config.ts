import { defineConfig } from 'vite'

export default defineConfig({
	base: './', // Użyj './' dla poprawnych ścieżek względnych
	build: {
		outDir: 'dist',
	},
})
