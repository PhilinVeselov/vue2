import { createRouter, createWebHistory } from "vue-router";
import RouterNames from "@/router/routerNames.js";

const routerApp = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: "",
      component: () => import("@/layouts/MainLayout.vue"),
      // meta: { requiresAuth: true },
      children: [
        {
          path: "",
          name: RouterNames.main,
          component: () => import("@/views/HomeView.vue"),
        },


      ],
    },
    
  ],
});


export default routerApp;