import 'regenerator-runtime';
import '../styles/main.css';
import '../styles/responsive.css';
import '../styles/detail.css';
import './component/app-bar';
import './component/footer-bar';
import './component/hero-bar';
import App from './views/app';
import swRegister from './utils/sw-register';

const app = new App({
  button: document.querySelector('#hamburgerButton'),
  drawer: document.querySelector('#drawer'),
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
