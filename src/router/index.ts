import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/home/:id",
    name: "userHome",
    component: () => import("../views/UserHomeView.vue"),
    props: true,
  },
  {
    path: "/signUp",
    name: "signUp",
    component: () => import("../views/SignUpView.vue"),
  },
  {
    path: "/verification/:id",
    name: "verification",
    component: () => import("../views/VerificationView.vue"),
    props: true,
  },
  {
    path: "/ok/:id",
    name: "ok",
    component: () => import("../views/OkView.vue"),
    props: true,
  },
];

const router = new VueRouter({
  // mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
