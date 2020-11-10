import React, {Component} from 'react';

class User extends Component {

    state = {
        posts: null
    }

    componentDidMount() {
        const id = this.props.match.params.id

        fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
            .then(response => response.json())
            .then(posts => this.setState({posts}))

    }
    GoToUserlist = () => {
        this.props.history.push({
            pathname:'/users'
        })

    }

    render() {
        return (
            <div>
                <button onClick={this.GoToUserlist}>Go to Userlist</button>
                {
                    this.state.posts && (this.state.posts.map(post => (
                        <div>
                            <p>{post.id}</p>
                            <p>{post.title}</p>
                            <p>{post.body}</p>
                            <hr/>
                        </div>
                    )))
                }
            </div>
        );
    }

}

export default User;
