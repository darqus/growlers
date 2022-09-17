import { createApp } from 'vue'

// @ts-ignore
import Cart from './Cart.vue'

export default (selector) => createApp(Cart).mount(selector)
