import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	base: '/Portfolio/',
	publicDir: 'public',
	build: {
		rollupOptions: {
			input: {
				main: 'index.html',
				about: 'about.html',
				work: 'work.html',
				cases: 'case-studies.html',
				imprint: 'imprint.html',
			},
		},
	},
});
