export class Apiservice {
    _urlUser = 'https://jsonplaceholder.typicode.com/users/';

    async GetUserById(id) {
        return (await fetch(`${this._urlUser}/${id}`)).json();
    }
    async GetUserByName() {
        return (await fetch(this._urlUser)).json();
    }
}
