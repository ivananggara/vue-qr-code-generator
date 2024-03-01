import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../components/HomePage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/qrcode-version-one",
    name: "QrcodeVersionOne",
    component: () => import("../components/qrcode/QrcodeVersionOne.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
