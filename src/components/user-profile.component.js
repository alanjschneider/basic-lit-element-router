import { LitElement, html, css } from 'lit-element';

export default class UserProfile extends LitElement {
  static get properties() {
    return {
      message: { type: String },
    };
  }

  constructor() {
    super();
    this.message = 'User profile!';
  }

  render() {
    return html`<p>${this.message}</p>`;
  }

  static get styles() {
    return css`
      p {
        font-family: Arial;
        color: #333;
      }
    `;
  }
}

window.customElements.define('user-profile', UserProfile);
