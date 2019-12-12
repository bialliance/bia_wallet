/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

const Vue = require('vue')



var app = {
    // Application Constructor
    initialize: function () {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);


        // const router = new VueRouter({
        //     routes: [
        //         { path: '/login', component: require('../vue/pages/login-page.vue') },
        //         { path: '/register', component: require('../vue/pages/register-page.vue') },

        //         { path: '/main', component: require('../vue/pages/main-page.vue') },

        //         { path: '/transfer', component: require('../vue/pages/transfer-page.vue') },
        //         { path: '/transfer-approve/:id', component: require('../vue/pages/transfer-approve-page.vue') },
        //         { path: '/transfer-result/:id', component: require('../vue/pages/transfer-result-page.vue') },

        //         { path: '/history', component: require('../vue/pages/history-page.vue') },
        //         { path: '/history/:id', component: require('../vue/pages/transfer-result-page.vue') },

        //         { path: '/wallet/:name', component: require('../vue/pages/wallet-page.vue') },
                
        //         { path: '/', component: require('../vue/pages/startup-page.vue') },
        //     ]
        // })

        // Vue.prototype.$api = new (require('./api.js'))(conf.api_url);

        // // All unauthorized path go to /login
        // router.beforeEach((to, from, next) => {
        //     var public_urls = ['/login', '/register']

        //     if (!Vue.prototype.$api.token() && public_urls.indexOf(to.path) == -1){
        //         next(false)
        //         Vue.prototype.$api.go("login");
        //     }
        //     else
        //         next();
        // })

        new Vue({
            // router,
            el: '#app',
            render: function (createElement) {
                return createElement(require('../vue/app.vue'))
            }
        })
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function () {
        this.receivedEvent('deviceready');
        screen.orientation.lock('landscape');
    },

    // Update DOM on a Received Event
    receivedEvent: function (id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();