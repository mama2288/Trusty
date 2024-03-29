import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../components/Home.vue";
import Login from "../components/Login.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/",
    name: "Login",
    component: Login
  },
  {
    path: "/about",
    name: "About",

    component: () => import("../components/About.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
