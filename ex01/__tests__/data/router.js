
export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
{
    path: '/about',
    name: 'about',
    component: () => import('./views/about.vue')
},
{
    path: '/index',
    name: 'index',
    component: () => import('./views/index.vue')
},

    ]
})