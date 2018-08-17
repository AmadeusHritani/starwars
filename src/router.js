import Vue from "vue";
import Router from "vue-router";
import StarWars from "./views/StarWars.vue";
import About from "./views/About.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: StarWars
    },
    {
      path: "/about",
      name: "about",
      component: About
    }
  ]
});
