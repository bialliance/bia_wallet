<template>
	<div>
		<div class="container">
			<h1>Approve transfer</h1>

			<div class="form-group card p-2" v-if="transfer">
				<b>From wallet</b>
				<div>{{transfer.from_wallet}}</div>

				<b>Transfer amount</b>
				<div>{{transfer.amount}}</div>

				<b>Receive system</b>
				<div>{{transfer.to_system.name}} ({{transfer.to_system.code}})</div>

				<b>Receive address</b>
				<div>{{transfer.to_address}}</div>

				<b>Receive amount (clean)</b>
				<div>{{transfer.to_amount}}</div>
			</div>

			<p>
				<small>Check that all fields in transfer are correct. If so, press Approve button. After that action transfer can not be undone!</small>
			</p>

			<div class="btn btn-primary" @click="next">Approve</div>
		</div>
		<myfooter></myfooter>
	</div>
</template>

<script>
module.exports = {
	data: function() {
		return {
			transfer: null
		};
	},

	methods: {
		update: function() {
			this.amount_to = this.amount_from;
		},
		next() {
			this.$api
				.post("transfer/" + this.$route.params.id)
				.then(res =>
					this.$api.go("transfer-result/" + this.$route.params.id)
				);
		}
	},

	created: function() {
		// alert(this.$route.params.id)
		this.$api
			.get("transfer/" + this.$route.params.id)
			.then(res => (this.transfer = res.data));
	},

	components: {
		myfooter: require("../../misc/myfooter.vue")
	}
};
</script>
