import {createRouter, createWebHistory} from 'vue-router';
import HomeView from '../pages/HomeView.vue'
import NotFound from '../pages/NotFound.vue'

const autoLoadRoute = async () => {
    const routes = [];
    const modules = import.meta.glob('/**/*.route.js');
    console.log(modules)
    for (const path in modules) {
        const module = await modules[path]();
        routes.push(...module.default);
    }

    return createRouter({
        history: createWebHistory(import.meta.env.BASE_URL),
        routes: [
            // Entry Point
            {
                path: '/',
                component: HomeView,
            },

            // Auto registered routes
            ...routes,
            // 404
            {
                path: '/:catchAll(.*)',
                component: NotFound,
            },
        ],
    });
};
export default autoLoadRoute;
