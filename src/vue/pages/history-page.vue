<template>
	<div style="padding-bottom:50px">
		<h3>history</h3>
		<div>
			<div v-if="history">
				<div
					v-for="tr in history"
					:key="tr.id"
					class="p-2 card"
					@click="details(tr.id)"
					style="margin:4px; margin-bottom: 8px"
				>
					<div>
						<span
							style="font-weight: bold; border:1px solid #aaa; padding:0px 4px; border-radius:6px"
						>#{{tr.id}}</span>
						from:
						{{tr.from_wallet.paysystem.name}} {{tr.amount}}
						<small
							style="float:right"
						>{{tr.status}}</small>
					</div>
					<div>
						to: {{tr.to_system.name}}
						<i>{{tr.to_address}}</i>
					</div>
				</div>
			</div>
		</div>
		<myfooter></myfooter>
	</div>
</template>

<script>
module.exports = {
	data() {
		return {
			raw_history: []
		};
	},
	props: ["text", "url"],
	methods: {
		go() {
			this.$api.go(this.url);
		},
		details(id) {
			this.$api.go("history/" + id);
		}
    },
    computed:{
        history(){
            return this.raw_history.filter(h => h.from_wallet)
        }
    },
	components: {
		myfooter: require("../misc/myfooter.vue")
	},
	created() {
		this.$api.get("transfer").then(res => (this.raw_history = res.data));
	}
};
</script>
