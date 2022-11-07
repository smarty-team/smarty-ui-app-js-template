import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import SmartyUI from "smarty-ui-vite";
import "smarty-ui-vite/style.css";

createApp(App)
    .use(SmartyUI).mount('#app')
