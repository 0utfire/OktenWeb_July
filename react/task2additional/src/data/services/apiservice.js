export class Apiservice{
    _urlUser = 'https://jsonplaceholder.typicode.com/users';
    _urlComment = 'https://jsonplaceholder.typicode.com/comments/';
    _urlPost = 'https://jsonplaceholder.typicode.com/posts/';
    // https://jsonplaceholder.typicode.com/users/1/posts

    async GetUsers () {
        return (await fetch(this._urlUser)).json();
    }

    async GetPostsByUserId(id) {
        return (await fetch(`${this._urlUser}/${id}/posts`)).json();
    }

}
