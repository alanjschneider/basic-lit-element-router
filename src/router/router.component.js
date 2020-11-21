import { LitElement, html, css } from 'lit-element';
import page from 'page';
import { routes } from './routes';

export default class Router extends LitElement {
  static get properties() {
    return {
      view: { type: Object },
    };
  }

  render() {
    return this.view;
  }

  connectedCallback() {
    super.connectedCallback();

    page.base('/app');

    const l = routes.length;
    for (let i = 0; i < l; i++) {
      const route = routes[i];
      if (route.plugin !== undefined && typeof route.plugin === 'function') {
        page('*', route.plugin);
      } else {
        page(route.path, () => (this.view = route.template));
      }
    }

    page();
  }

  static get styles() {
    return css`
      div {
        color: #666;
      }
    `;
  }
}

window.customElements.define('app-router', Router);
