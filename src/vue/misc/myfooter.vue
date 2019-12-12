<template>
	<div class="footer">
    <btn url="main" text="Balance" icon="img/icons/wallet-solid.svg"></btn>
    <btn url="transfer" text="Transfer" icon="img/icons/exchange-alt-solid.svg"></btn>
    <btn url="history" text="History" icon="img/icons/history-solid.svg"></btn>
	</div>
</template>


<script>
module.exports = {
	components: {
		"btn": require("./btn/footer-button.vue"),
	}
};
</script>
