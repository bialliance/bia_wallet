module.exports = class {
    constructor(api_url) {
        this.api_url = api_url;
    }

    async _request(url, data, method, user_headers) {
        var headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }

        Object.assign(headers, user_headers);
        var req_data = {
            headers,
            method: method,
            // credentials: 'include',
            body: data ? JSON.stringify(data) : null
        };

        return new Promise((resolve, reject) => {

            fetch(this.api_url + url, req_data)
                .then(r => {

                    if (r.status == 403)
                        reject(r.status)
                        //this.go("login");
                    else {
                        r.json().then(json => {
                            if (json.success)
                                resolve(json);
                            else
                                reject({ message: json.message });
                        })
                    }
                })
                .catch(ex => reject(ex))
        })
    }

    async get(url, headers) {
        return this._request(url, null, "GET", headers)
    }

    async post(url, data, headers) {
        return this._request(url, data, "POST", headers)
    }

    async put(url, data, headers) {
        return this._request(url, data, "PUT", headers)
    }

    async delete(url, data, headers) {
        return this._request(url, data, "DELETE", headers)
    }
}