import React, {Component} from 'react';
import {Apiservice} from "../../services/apiservice";
import Post from "../post/post";

class User extends Component {

    api = new Apiservice();
    state= {posts: []};

    async showPosts(id){
        this.setState({posts: await this.api.GetPostsByUserId(id)})

    }
    render() {
        let {id, name} = this.props.user;
        return (
            <div>
                {id} - {name}
                <button onClick={()=> this.showPosts(id)}>Show posts</button>
                <br/>
                {this.state.posts.map(post => (
                    <Post post={post} key={post.id}/>))
                }
                <hr/>
            </div>
        );
    }
}

export default User;
