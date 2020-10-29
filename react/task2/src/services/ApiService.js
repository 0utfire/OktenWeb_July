export class ApiService {
    _urlUser = 'https://jsonplaceholder.typicode.com/users/';
    _urlComment = 'https://jsonplaceholder.typicode.com/comments/';
    _urlPost = 'https://jsonplaceholder.typicode.com/posts/';

    async GetUsers () {
        return (await fetch(this._urlUser)).json();
    }
    async GetUserById(id){
        return (await fetch(`${this._urlUser}/${id}`)).json();
    }
    async GetUPosts () {
        return (await fetch(this._urlPost)).json();
    }
    async GetComments () {
        return (await fetch(this._urlComment)).json();
    }

}
