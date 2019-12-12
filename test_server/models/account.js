module.exports = {
    login(login, password){
        if (login == 'login' && password == 'password'){
            return {id: 100, login: login, token: 'JWT or other token'}
        }
        else
            return null;
    },

    register(login, password){
        if (login == 'login' && password == 'password'){
            return {id: 100, login: login}
        }
        else
            return null;
    },

    find(){

    }
}