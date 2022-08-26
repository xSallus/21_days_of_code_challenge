import { createApp } from "vue";
import Particles from "vue3-particles";
import eruda from "eruda";
import erudaDOM from "eruda-dom";

import "./style.css";
import App from "./App.vue";

createApp(App).use(Particles).mount("#app");

if (window && window.innerWidth < 1024 && import.meta.env.DEV) {
  eruda.init();
  eruda.add(erudaDOM);
}
