import { createRouter, createWebHashHistory } from "vue-router";

import Home from "@/components/page/Home.vue";
import Todos from "@/components/page/Todos.vue";
import Management from "@/components/page/Management.vue";


import Error from "@/components/page/Error.vue";
const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/todos",
    component: Todos,
  },
  {
    path: "/mangenment",
    component: Management,
  },
  {
    path: "/:pathMatch(.*)",
    component: Error,
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
export default router;
