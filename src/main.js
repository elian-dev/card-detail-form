import App from './App.svelte';
import './assets/styles/app.scss';
import './assets/js/script.js'

const app = new App({
  target: document.getElementById('app'),
})

export default app