import { createRouter, createWebHashHistory } from "vue-router";
import Homepage from "../features/Homepage.vue";
import Detail from "../features/Detail.vue";

const routes = [
  {
    path: "/",
    name: "Homepage",
    component: Homepage,
    props: true
  },
  {
    path: "/movie/:id",
    name: "Detail",
    component: Detail
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
