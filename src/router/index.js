import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';

Vue.use(VueRouter);

/* 生成路由实例 */
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
    // 切换新路由，页面的滚动行为
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        }
        return {
            x: 0,
            y: to.meta.savedPosition || 0
        };
    }
});

/* 全局前置守卫 */
router.beforeEach((to, from, next) => {
    // 在路由跳转前做一些处理, 如权限判断，机型判断，跳转页面是否免登陆
    next();
});

/* 全局后置钩子 */
router.afterEach((to, from) => {
    // 路由跳转完成后的逻辑处理
});

export default router;
