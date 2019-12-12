<template>
	<div>
		<div class="container" v-if="transfer">
			<h1>Transfer result</h1>

			<div class="form-group card p-2" v-if="transfer.from_wallet">
				<h3>Transfer #{{transfer.id}}</h3>

				<b>From wallet</b>
				<div>{{transfer.from_wallet.address}} / {{transfer.from_wallet.paysystem.name}}</div>

				<b>Transfer amount</b>
				<div>{{transfer.amount}}</div>

				<b>Receive system</b>
				<div>{{transfer.to_system.name}} ({{transfer.to_system.code}})</div>

				<b>Receive address</b>
				<div>{{transfer.to_address}}</div>

				<b>Receive amount (clean)</b>
				<div>{{transfer.to_amount}}</div>

				<hr />
				<div v-if="need_verify">
					<div class="btn btn-primary" @click="approve">Approve</div>
				</div>
				<div v-else>
					<b>Status</b>
					<div>{{transfer.status}}</div>
				</div>
			</div>

			<p>
				<small>
					Your transfer may be in progress some time (depends of receiveing side). When transfer completes its status will be changed to
					<b>Complete</b>.
					You can always find you transfer in History page by number
					<a
						v-bind:href="[ '#/history/'  + transfer.id ]"
					>{{transfer.id}}</a>.
				</small>
			</p>

			<div class="btn btn-primary" @click="next">Balance</div>
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
		// update: function() {
		// 	this.amount_to = this.amount_from;
		// },
		next() {
			this.$api.go("main");
		},
		approve() {
			this.transfer = {};
			this.$api.post("transfer/" + this.$route.params.id).then(
				res => {
					this.transfer = res.data;
					// this.$forceUpdate();
				}
			);
		}
	},

	computed: {
		need_verify() {
			return this.transfer.status == "created";
		}
	},

	created: function() {
		this.$api.get("transfer/" + this.$route.params.id).then(res => {
			this.transfer = res.data;			
		});
	},

	components: {
		myfooter: require("../../misc/myfooter.vue")
	}
};
</script>
