module.exports = class {
    constructor(api_url) {
        this.crud = new (require('./api_crud'))(api_url);
        this.user = new (require('./api_user'))(this.crud);
        this.tarnsfer = new (require('./api_transfer'))(this.crud);
    }

    go(url) {
        document.location = "#/" + url;
    }

    catch(ex){
        if (ex.status == 403){
            this.go('/login')
        }
        else if (ex.message){
            alert("Error: " + ex.message);
        }
    }

    // Записать данные в хранилище (localStorage)
    store(name, value){
        if (value == null){
            localStorage.removeItem(name)    
        }
        else
            localStorage.setItem(name, value)
    }

    // Получить данные из хранилище (localStorage)
    restore(name){
        return localStorage.getItem(name)
    }



    async get(url) {
        var headers = this.user.token() ? {"Authorization" : "Bearer " + this.user.token()} : null;
        return this.crud.get(url, headers).catch(this.catch)
    }

    async post(url, data) {
        var headers = this.user.token() ? {"Authorization" : "Bearer " + this.user.token()} : null;
        return this.crud.post(url, data, headers).catch(this.catch)
    }

    async put(url, data) {
        var headers = this.user.token() ? {"Authorization" : "Bearer " + this.user.token()} : null;
        return this.crud.put(url, data, headers).catch(this.catch)
    }

    async delete(url, data) {
        var headers = this.user.token() ? {"Authorization" : "Bearer " + this.user.token()} : null;
        return this.crud.delete(url, data, headers).catch(this.catch)
    }    

    async rpc(url, data) {
        var headers = this.user.token() ? {"Authorization" : "Bearer " + this.user.token()} : null;
        return this.crud.post("../" + url, data, headers).catch(this.catch)
    }
}