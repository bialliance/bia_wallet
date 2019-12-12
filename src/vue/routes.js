const Vue = require('vue')
const VueRouter = require('vue-router')
Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        { path: "/buybip", component: require("../vue/pages/buy_bip.vue") },
        { path: "/buybip2", component: require("../vue/pages/buy_bip_s2.vue") },


        { path: "/login", component: require("../vue/pages/login/login-page.vue") },
        {
            path: "/register",
            component: require("../vue/pages/login/register-page.vue")
        },

        { path: "/main", component: require("../vue/pages/main-page.vue") },

        {
            path: "/transfer",
            component: require("../vue/pages/transfer/transfer-page.vue")
        },
        {
            path: "/transfer-approve/:id",
            component: require("../vue/pages/transfer/transfer-approve-page.vue")
        },
        {
            path: "/transfer-result/:id",
            component: require("../vue/pages/transfer/transfer-result-page.vue")
        },

        {
            path: "/history",
            component: require("../vue/pages/history-page.vue")
        },
        {
            path: "/history/:id",
            component: require("../vue/pages/transfer/transfer-result-page.vue")
        },

        {
            path: "/wallet/:name",
            component: require("../vue/pages/wallet-page.vue")
        },

        { path: "/", component: require("../vue/pages/login/login-page.vue") }
    ]
});

// All unauthorized path go to /login
router.beforeEach((to, from, next) => {
    var public_urls = ['/login', '/register']

    if (!Vue.prototype.$api.user.token() && public_urls.indexOf(to.path) == -1) {
        next(false)
        Vue.prototype.$api.go("login");
    }
    else
        next();
})

module.exports = router