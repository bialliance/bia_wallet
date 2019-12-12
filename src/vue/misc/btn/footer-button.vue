<template>
    <div class="wf-btn" @click="go">
        <img :src="icon" width="30" height="30" /><br />
        <div class="wf-btn-text">{{text}}</div>
    </div>
</template>

<style>

</style>

<script>
module.exports = {
    props: ['text', 'url', 'icon'],
    methods: {
        go(){
            this.$api.go(this.url)
        }
    }
}
</script>

