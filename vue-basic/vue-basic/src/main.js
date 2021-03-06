import Vue from "vue";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;
import "@/assets/style/main.scss";
import "@/components/index.js";

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
