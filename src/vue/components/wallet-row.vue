<template>
	<div class="wallet" @click="go_wallet">		
		<div class="ico">
			<img class="w-logo" :src="img" />			
		</div>

		<div class="amount">
			<span>{{value}}<sup>.{{decimals}}</sup></span>			
		</div>
		<div class="info">
			<span>{{wallet.paysystem.name}}</span>
		</div>
		<div class="clr"></div>
	</div>
</template>

<script>
module.exports = {
    props: ["wallet"],

    computed: {
        img(){
            // console.log(this.paysystem.code)
            return "img/wallets/" + this.wallet.paysystem.code + ".jpg"
        },

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
        go_wallet: function(){
            this.$api.go('wallet/' + this.wallet.id);
		}		
	}    
}
// .map(rr=>{rr.img="img/wallets/" + rr.code + ".jpg";return rr})));
</script>