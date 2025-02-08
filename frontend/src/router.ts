import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./views/HomePage/index.vue";
import SearchResultPage from "./views/SearchResultPage/index.vue";
import DetailsPage from "./views/DetailsPage/index.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
  },
  {
    path: "/search-results",
    name: "SearchResults",
    component: SearchResultPage,
  },
  {
    path: "/movie/:id",
    name: "MovieDetails",
    component: DetailsPage,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
