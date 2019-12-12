<template>
	<div v-if="wallet">
		<div class="top-info">
			<back url="main"></back>
			<div style="text-align:center" class="clight">
				<div>{{wallet.paysystem.name}} ({{wallet.paysystem.code}})</div>
				<div>Balance</div>
				<span style="font-size:20pt">{{value}}</span><span style="font-size:10pt">.{{decimals}}</span>
				<div style="text-align:left">Address</div>
				<input :value="wallet.address" style="background:none; border:0; display:block; width:100%" />
			</div>
		</div>
		<div style="text-align: center; padding-top: 64px">
			<div class="btn btn-primary"><h2>Пополнить</h2></div>
		</div>
	</div>
</template>

<script>
module.exports = {
	data: function() {
		return {
			wallet: null
		};
	},

    computed: {
        value(){
            var dn = this.wallet.paysystem.decimals ? parseInt(this.wallet.paysystem.decimals) : 2;
            var iv = Math.floor(this.wallet.balance / Math.pow(10, dn));
            // var dv = this.wallet.balance % Math.pow(10, dn);
            return iv;
        },

        decimals(){
            var dn = this.wallet.paysystem.decimals ? parseInt(this.wallet.paysystem.decimals) : 2;
            // var iv = this.wallet.balance / Math.pow(10, dn);
            var dv = (this.wallet.balance % Math.pow(10, dn)).toString().padStart(dn, '0');
            return dv;
        }
    },

	methods: {
		
	},

	created: function() {
		this.$api
			.get("wallet/" + this.$route.params.name)
			.then(res => (this.wallet = res.data));
		console.log();
		// this.$api.get('/wallets')
	},

	components: {
		back: require("../misc/btn/back.vue")
	}
};
</script>

