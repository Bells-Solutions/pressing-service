import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/pages/HomePage.vue";
import OrderPage from "@/pages/OrderPage.vue";

const routes = [
  { path: "/", name: "Home", component: HomePage },
  { path: "/orders", name: "Orders", component: OrderPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
