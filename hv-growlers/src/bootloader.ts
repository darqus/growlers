import './index.scss';

import { createApp } from 'vue';

import { load } from 'growlers/store';

// @ts-ignore
import App from './App.vue';

load('hv-taplist');

createApp(App).mount('#app');
