const routes = [
    {
        path: '/products',
        name: 'product',
        component: () => import('../pages/Product.vue'),
    },
];

export default routes;
