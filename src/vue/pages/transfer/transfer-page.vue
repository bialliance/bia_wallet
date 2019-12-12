<template>
	<div>
		<div class="container">
			<h1>Transfer</h1>

			<div class="form-group card p-2">
				<label for="exampleInputEmail1">From wallet</label>

				<select v-model="from_wallet" class="form-control" @change="update">
					<option v-for="w in wallets" :key="w.name" :value="w">{{w.paysystem.name}} ({{w.balance}})</option>
				</select>

				<label for="exampleInputEmail1">Amount (You give)</label>
				<input v-model="amount" class="form-control" @change="update" />
			</div>

			<div class="form-group card p-2">
				<label for="exampleInputEmail1">To Email</label>
				<input placeholder="email@hosting.com" id="somesome" v-model="email" @input="email_changed" @focus="email_focused" @blur="email_blur" />
				<div v-if="email_active">
					<div class="email_list">
						<div v-for="k in suitable_emails" :key="k.user_id" @click="email=k.user_email">{{k.user_email}}</div>
					</div>
				</div>

				<label for="exampleInputEmail1">To System</label>

				<select v-model="to_system" class="form-control">
					<option v-for="ps in pay_systems" :key="ps.name" :value="ps">{{ps.name}} ({{ps.code}})</option>
				</select>

				<label for="exampleInputEmail1">Address</label>
				<input v-model="to_address" class="form-control" />

				<label for="exampleInputEmail1">Amount (They get)</label>
				<input v-model="recv_amount" class="form-control" readonly="true" />
			</div>

			<div class="btn btn-primary" @click="go">Make transfer</div>
		</div>
		<myfooter></myfooter>
	</div>
</template>

<script>
module.exports = {
	props: ["text", "url"],

	data: function() {
		return {
			pay_systems: [],
			wallets: [],

			from_wallet: "",
			amount: "",

			to_system: "",
			to_address: "",
			recv_amount: 0,

			emails: ["emai1", "email2", "mamali3", "mamali4", "mamali5"],
			email: "",
			email_active: false
		};
	},

	methods: {
		go() {
			this.$api
				.post("transfer", {
					from_wallet: this.from_wallet.id,
					amount: this.amount,
					to_email: this.email,
					to_system: this.to_system.id,
					to_address: this.to_address
				})
				.then(res => this.$api.go("transfer-result/" + res.data.id));
		},
		update: function() {
			console.log(this.wallet_from);
			this.amount_to = this.amount_from;
		},

		email_blur() {
			setTimeout(() => this.email_active = false, 250);
			// console.log("this.email_blur");
		},

		email_focused() {
			this.email_active = true;
			// console.log("this.email");
		},

		email_changed() {

			console.log(this.email);
		},

		email_selected(){
			this.email = value;
		}
	},

	computed: {
		suitable_emails(){
			if (this.email.length < 2) return [];
			return this.emails.filter(e => e.user_email.startsWith(this.email)).slice(0, 6);
		}
	},

	created: function() {
		this.$api.get("wallet").then(res => (this.wallets = res.data));
		this.$api.get("pay_system").then(res => (this.pay_systems = res.data));
		this.$api.get("user").then(res => (this.emails = res.data));
	},

	mounted() {},

	components: {
		myfooter: require("../../misc/myfooter.vue")
	}
};
</script>

<style>
	.email_list {
		position:absolute;
		background:#eee; 
	}

	.email_list div{
		border: 1px solid #ccc;
		padding: 2px 8px;
	}
</style>