import React, {Component} from 'react';

class Comment extends Component {
    render() {
        let {id, body} = this.props.comment
        return (
            <div>
                {id} - {body}
            </div>
        );
    }
}

export default Comment;
