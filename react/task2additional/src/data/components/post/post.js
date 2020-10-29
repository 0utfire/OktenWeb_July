import React, {Component} from 'react';

class Post extends Component {
    render() {
        let {id, body} = this.props.post;
        return (
            <div>
                {id} - {body}
            </div>
        );
    }
}

export default Post;
