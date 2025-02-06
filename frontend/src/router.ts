import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './views/HomePage.vue'
import SearchResultPage from './views/SearchResultPage.vue'
import DetailsPage from './views/DetailsPage.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomePage
    },
    {
        path: '/search-results',
        name: 'SearchResults',
        component: SearchResultPage
    },
    {
        path: '/details',
        name: 'Details',
        component: DetailsPage
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router