export default class UserService {
     getUser() {
        return fetch('https://jsonplaceholder.typicode.com/users').then(value => value.json());
    }
}
