<template>
	<div class="page-content">
		<div v-if="!tx">Loading</div>

		<div class="card" v-if="tx">
			<div class="card-body" style="padding-bottom:64px">
				<div class="text-center">
					<input type="hidden" id="transaction_hash_id" value="hgtos6495ref" />
					<input type="hidden" id="transaction_status" value="waiting" />

					<div class="row">
						<div class="col-lg-6 my-3">
							<small>Сумма для получения</small>
							<h5 class="mb-0">{{tx_total}} BIP</h5>
							<div>{{tx.transaction_token_amount}} BIP</div>
							<div class="text-success" v-if="tx.transaction_token_bonus > 0"> + {{tx.transaction_token_bonus}} BIP</div>
						</div>
						<!-- <div class="col-lg-6 my-3">
							<h5 class="mb-0">
								1
								<small>ETH - Ethereum</small>
							</h5>
							<h5 class="mb-0">
								3 794.4904
								<small>BIP</small>
							</h5>
							<small>Ваш курс</small>
						</div> -->
					</div>

					<p class="mt-4">
						Пожалуйста, отправьте
						{{parseFloat(tx.transaction_amount)}} {{tx.transaction_currency}}
						на адрес
					</p>
					<h5>{{tx_address}}</h5>

					<!-- <p class="mt-4">Ваш кошелек: 0x23920c61ae4857d7c3d35eb4014ea8c30b8d1fbb</p> -->
					<div class="mt-3 text-muted">Ваш перевод будет выполнен в течение 24 часов</div>
				</div>
			</div>
		</div>
		<myfooter></myfooter>
	</div>
</template>

<script>
module.exports = {
	data: function() {
		return {
			email: "login",
			password: "password",
			loading: false,
			amount: 0,
			currency: "eth",
			token_bonus: 0,
			token_bonus_percent: 0,
			tx: null,

			token_amount: 0
		};
	},

	created() {
		var url = "token/mytx";
		this.$api.post(url).then(r => this.tx = r.data);
	},

	computed: {
		tx_total(){
			return (parseFloat(this.tx.transaction_token_amount) + parseFloat(this.tx.transaction_token_bonus)).toFixed(4);
		},

		tx_address(){
			return this.tx.transaction_currency == 'eth' ? '0xcc129f2cae92e0e2e1c29315dabbd98e0821d44d' : '14aCtcS5ZSxh4haaq79xGjgU65nXidempc';
		}
	},

	methods: {
		do_buy(e) {
			e.preventDefault();
			var url = "rpc/token/ajax_token_buy_change_amount";
			this.$api.rpc();
			this.$api.go("buybip2");

			return false;
		},

		onAmountChange() {
			this.update_values();
		},

		onCurrencyChange() {
			this.update_values();
		},

		update_values() {
			var url = "token/ajax_token_buy_change_amount";
			this.token_amount = "Calculating...";
			this.$api
				.rpc(url, { amount: this.amount, currency: this.currency })
				.then(r => {
					this.token_amount = r.data.token_amount;
					this.token_bonus = r.data.token_bonus;
					this.token_bonus_percent = r.data.token_bonus_percent;
				});
		}
	},

	components: {
		myfooter: require("../misc/myfooter.vue")
	}
};
</script>