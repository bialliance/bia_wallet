<template>
    <div class="login-page">
        <header-big></header-big>


		<div class="container login-form">
			<div class="row">
				<div class="col">
					Email
				</div>
				<div class="col">
					<input type="text" v-model="email" class="form-control-fn" id="staticEmail2" value="email@example.com">
				</div>
			</div>
			<div class="row">
				<div class="col">
					Password
				</div>
				<div class="col">
					<input type="password" v-model="password" class="form-control-fn" id="inputPassword2" placeholder="Password">
				</div>
			</div>
		</div>
		
        

        <div class="btns">
            <div class="login-btn" @click="do_login">Sign In</div>

            <div class="register-btn" @click="$api.go('register')">Register</div>           
        </div>
    </div>
</template>




<script>
module.exports = {
    data: function(){return {
        email: "_bot1@mail.ru",
        password: "password"
    }},

    created(){
        this.email = this.$api.restore('user.email');
        this.password = this.$api.restore('user.password');
    },

    methods: {
        do_login: function(){
            this.$api.store('user.email', this.email);
            this.$api.store('user.password', this.password);

            this.$api.post('auth', {email: this.email, password: this.password})
                .then(this.response.bind(this))
                .catch(ex => alert("Login failed. Check data and try again.\r\n" + ex.message));
        },

        response(res){
            this.$api.user.token(res.data.token);
            this.$api.go('main')
        }
    },

    components: {
        "header-big": require('../../misc/header-big.vue')
    }
    
}
</script>
