<template>
	<div>
		<div class="p-2">
			<div class="w-profile">
				<img src="img/icons/user-alt-solid.svg"/>

				<span>{{$api.restore('user.email')}}</span>
			</div>
			<div class="w-logout" @click="logout()">					
				<img src="img/icons/sign-out-alt-solid.svg"/>
			</div>
			<div class="clr"></div>
		</div>

		<div class="wallets">
			<div v-if="!loaded">Loading</div>
			<wallet-row v-for="(w,i) in wallets" :key="i" :wallet="w" @click="go_wallet(w)"></wallet-row>
		</div>

		<div class="wallets">
			<router-link to="/buybip">Buy BIP</router-link>
		</div>

		<myfooter></myfooter>
	</div>
</template>

<script>
module.exports = {
	data: function() {
		return {
			wallets: [],
			loaded: false
		};
	},

	created: function() {		
		this.$api.get("wallet").then(res => {this.wallets = res.data; this.loaded = true});
    },
    
    methods: {
		logout(){
			this.$api.user.logout();
			this.$api.go('/');
		}
	},
	
	components: {
		"myfooter": require('../misc/myfooter.vue'),
		"wallet-row": require('../components/wallet-row.vue'),
	}
};
</script>
