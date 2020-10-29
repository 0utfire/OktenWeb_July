import React, {Component} from 'react';
import {ApiService} from "../../services/ApiService";
import Comment from "../comment/comment";

class Comments extends Component {
    api = new ApiService();

    state = {comments:[]};

    async componentDidMount(){
        this.setState({users: await this.api.GetComments()})
    }

    render() {
        return (
                this.state.comments.map(comment => (
                <Comment comment={comment} key ={comment.id}/>)
        ))
    }
}

export default Comments;
