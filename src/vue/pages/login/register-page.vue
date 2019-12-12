<template>
    <div class="login-page">
        <loader v-if="loading"></loader>

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
            <div class="login-btn" @click="do_register">Register</div>

            <div class="register-btn" @click="$api.go('login')">Sign in</div>           
        </div>
		
    </div>
</template>



<script>
module.exports = {
    data: function(){return {
        email: "login",
        password: "password",
        loading: false
    }},

    methods: {
        do_register: function(){
            this.loading = true;
            this.$api.crud.post('user', {email: this.email, password: this.password})
                .then(this.response.bind(this))
                .catch(ex => { alert("Registration failed. Check data and try again."); this.loading = false;});
        },

        response(res){
            this.loading = false;
            this.$api.store('user.email', this.email);
            this.$api.store('user.password', this.password);

            this.$api.post('auth', {email: this.email, password: this.password})
                .then(this.response2.bind(this))
                .catch(ex => alert("Login failed. Check data and try again.\r\n" + ex.message));

            this.$api.go('login')
        },

        response2(res){
            this.$api.user.token(res.data.token);
            this.$api.go('main')
        }        
    },

    components: {
        "header-big": require('../../misc/header-big.vue'),
        "loader": require('../../components/loader.vue')
    }
    
}
</script>
