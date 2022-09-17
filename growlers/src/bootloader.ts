import './index.scss';

import { createApp } from 'vue';

// @ts-ignore
import App from './App';

import { load } from './store';

load('hv-taplist');

createApp(App).mount('#app');
