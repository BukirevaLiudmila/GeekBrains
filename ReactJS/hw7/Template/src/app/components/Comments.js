import React from 'react';
import CommentList from './CommentList';

import { connect } from 'react-redux';
import { fetchComments} from "../actions/commentsActions";

@connect((store) => {
    return {
        comments: store.comments.comments,
        is_fetching: store.comments.is_fetching
    }
})

export default class Comments extends React.Component
{
    constructor(props)
    {
        super(props);
        let toDispatch = fetchComments();
        this.props.dispatch(toDispatch)
    }

    render()
    {
        return (
            <div>
                <button
                type="button"
                className="btn btn-primary btn-block"
                onClick={this.newComment}
                >Добавить новый комментарий</button>
                <CommentList comments={this.props.comments} />
            </div>
        );
    }
}