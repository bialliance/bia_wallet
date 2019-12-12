<template>
		<router-view></router-view>
</template>

<script>

const Vue = require('vue')

const conf = require('../js/conf.js');
Vue.prototype.$api = new (require('../js/api/api'))(conf.api_url);

const router = require('./routes.js')

module.exports = {
	router: router,
	data: function() {
		return {
			message: 123123
		};
	}
};
</script>

