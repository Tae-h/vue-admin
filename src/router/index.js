import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/diagnosis/list',
        },
    ]
})

export default router;
