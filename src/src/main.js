import { createApp } from 'vue'
import App           from './App.vue'
import clickOutside  from "./assets/click-outside.js"
import router        from './pages'
import Lenis         from 'lenis'
import                "./assets/style.css"
import                "./components/navbar/fonts.css"

const app = createApp(App)
app.use(router         )
app.use(clickOutside   )

// Initialize Lenis - Nice Scrolling
const lenis = new Lenis({scrollSpeed:9999});
function raf(time) {lenis.raf(time);requestAnimationFrame(raf);}
requestAnimationFrame(raf);

app.mount('#app')
