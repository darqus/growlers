import { createApp } from 'vue'

// @ts-ignore
import Search from './Search.vue'

export default (selector) => createApp(Search).mount(selector)
