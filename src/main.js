import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import "smarty-ui-vite/style.css";
import SmartyUI from "smarty-ui-vite";

createApp(App).use(SmartyUI).mount("#app");
