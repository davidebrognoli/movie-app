import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import { stateSymbol, createState } from "./store";

createApp(App)
  .use(router)
  .provide(stateSymbol, createState())
  .mount("#app");
