import { html } from 'lit-html';

import '../components/hello-world.component';
import '../components/user-profile.component';

// import { log } from './plugins/log';

export const routes = [
  // { plugin: log },
  { path: '/hello-world', template: html`<hello-world></hello-world>` },
  { path: '/user-profile', template: html`<user-profile></user-profile>` },
  { path: '*', template: html`<div>Not found!</div>` },
];
