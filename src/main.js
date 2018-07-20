import Vue from "vue";
import VueLodash from "vue-lodash";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";

const options = { name: "lodash" };
Vue.use(VueLodash, options);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#etraveli");
