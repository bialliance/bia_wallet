<template>
	<div style="float:left" @click="go_back">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="16px"
			height="16px"
			version="1.1"
			viewBox="0 0 64 64"
			xmlns:xlink="http://www.w3.org/1999/xlink"
		>
				<polyline style="fill: none" class="str0" points="32,7 7,32 32,57"></polyline>
				<line y1="32" y2="32" class="str0" x1="7" x2="57"></line>
		</svg>
	</div>
</template>

<script>
module.exports = {
	props: ["url"],

	methods: {
		go_back: function() {
			this.$api.go(this.url);
		}
	}
};
</script>

<style scoped>
.str0 {
	stroke: #eee;
	stroke-width: 13px;
	stroke-linecap: round;
}
</style>

