const routes = [
    {
        path: '/blog',
        name: 'blog',
        component: () => import('../pages/Blog.vue'),
    },
];

export default routes;
