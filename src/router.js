import Vue from "vue";
import Router from "vue-router";
import StarWars from "./views/StarWars.vue";
import About from "./views/About.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: StarWars
    },
    {
      path: "/star-wars",
      name: "star-wars",
      component: StarWars
    },
    {
      path: "/about",
      name: "about",
      component: About
    }
  ]
});
