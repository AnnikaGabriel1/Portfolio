import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	base: '/Portfolio/',
	build: {
		rollupOptions: {
			input: {
				main: 'index.html',
				about: 'about.html',
				work: 'work.html',
				cases: 'case-studies.html',
			},
		},
	},
});
