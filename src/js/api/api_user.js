module.exports = class {
    constructor(api_crud){
        this._api = api_crud
    }

    token(token){
        if (token){
            // this._token = token;
            localStorage.setItem("token", token);
        }            
        return localStorage.getItem("token");
        // return this._token;
    }

    register(email, password){
        return this._api.create('user', {email: email, password: password})
    }

    login(email, password){
        return this._api.create('auth', {email: email, password: password})
    }
    
    logout(){
        localStorage.removeItem("token");
    }
}