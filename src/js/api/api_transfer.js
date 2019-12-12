// Unused!!!
module.exports = class {
    constructor(api_crud){
        this._api = api_crud
    }

    register(email, password){
        return this._api.create('user', {email: email, password: password})
    }

    login(email, password){
        return this._api.create('auth', {email: email, password: password})
    }    
}