<template>
	<div class="row">
		<div class="col-hd-4 col-xl-6">
			<div class="card">
				<div class="card-header">
					<div class="card-header-title text-truncate">Купить токены</div>
				</div>
				<div class="card-body">
					<form action="token/action" enctype="multipart/form-data" @submit="do_buy" method="post">
						<input name="service" value="buy" type="hidden" />
						<input id="currency" name="currency" value="eth" type="hidden" />
						<input id="currency_view" name="currency_view" value="ETH - Ethereum" type="hidden" />
						<input id="token_buy_min" name="token_buy_min" value="0.02636019" type="hidden" />
						<p class="text-center">Я хочу отправить:</p>
						<div class="form-group">
							<div class="form-group-input">
								<div class="input-group">
									<input
										type="text"
										id="amount"
										name="amount"
										v-model="amount"
										@change="onAmountChange"
										placeholder="Количество.."
										class="form-control"
										min="0.02636019"
									/>
									<div class="input-group-append">
										<select v-model="currency" @change="onCurrencyChange">
											<option value="eth">ETH - Ethereum</option>
											<option value="btc">BTC - Bitcoin</option>
										</select>
									</div>
								</div>
								<small class="form-text text-muted">
									Минимум
									<span id="token_buy_min_value">0.02636019</span>
									<span id="token_buy_min_currency">ETH - Ethereum</span>
								</small>
							</div>
						</div>
						<p class="text-center">Вы получите:</p>
						
						<div class="text-center">
							<div>
								<span id="token_buy_main">{{token_amount}}</span> BIP
							</div>
							<div id="token_buy_bonus" class="text-success" v-if="token_bonus > 0">+{{token_bonus}} ({{token_bonus_percent * 100}}%)</div>
						</div>

						<div class="d-flex flex-column align-items-center mt-3">
							<div class="m-0 form-group" id="conditions_1_group">
								<div class="form-group-input">
									<div class="custom-control custom-checkbox">
										<input
											class="m-0 custom-control-input"
											id="conditions_1"
											name="conditions_1"
											title="Я прочитал и принимаю:"
											value="accept"
											type="checkbox"
											v-model="condition_1"
										/>
										<label for="conditions_1" class="custom-control-label">Я прочитал и принимаю:</label>
									</div>
								</div>
							</div>
							<a
								target="_blank"
								href="https://beta.biplatform.io/assets/files/ru/system/bi_platform_tge_legal_ru.pdf"
							>Юридические ограничения об ответственности</a>
						</div>
						<div class="d-flex flex-column align-items-center mt-3">
							<div class="m-0 form-group" id="conditions_2_group">
								<div class="form-group-input">
									<div class="custom-control custom-checkbox">
										<input
											class="m-0 custom-control-input"
											id="conditions_2"
											name="conditions_2"
											title="Я прочитал и принимаю:"
											value="accept"
											type="checkbox"
											v-model="condition_2"
										/>
										<label for="conditions_2" class="custom-control-label">Я прочитал и принимаю:</label>
									</div>
								</div>
							</div>
							<a target="_blank" href="https://beta.biplatform.io/assets/files/ru/system/bi_platform_tge_terms_presale_ru.pdf">Условия</a>
						</div>
						<hr />
						<div class="text-center mt-3">
							<button id="submit" type="submit" class="btn btn-primary" v-if="can_buy">Купить токены</button>
						</div>
						<div class="form-send"></div>
					</form>
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
			condition_1: false,
			condition_2: false,

			token_amount: 0
		};
	},

	methods: {
		do_buy(e) {
			e.preventDefault();
			var url = "token/action";
			this.$api.post(url, {amount: this.amount, currency: this.currency, service: "buy"}).then(
				r => this.$api.go("buybip2")
			);			

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
				.post(url, { amount: this.amount, currency: this.currency })
				.then(r => {
					this.token_amount = r.data.token_amount;
					this.token_bonus = r.data.token_bonus;
					this.token_bonus_percent = r.data.token_bonus_percent;					
				});
		}
	},

	components: {
		myfooter: require("../misc/myfooter.vue")
	},

	computed: {
		can_buy(){
			return this.condition_1 && this.condition_2;
		}
	} 
};
</script>
