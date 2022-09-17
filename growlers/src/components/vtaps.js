import { createApp } from 'vue'

// @ts-ignore
import Taps from './Taps.vue'

export default (selector) => createApp(Taps).mount(selector)
