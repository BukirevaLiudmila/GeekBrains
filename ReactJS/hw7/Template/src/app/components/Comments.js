import React from 'react';
import CommentList from './CommentList';
import CommentStore from '../stores/commentStore';
import { addComment, fetchComments } from '../actions/commentsActions';

export default class Comments extends React.Component
{
    constructor()
    {
        super(...arguments);

        this.state = {
            comments: []
        };

        this.newComment = this.newComment.bind(this);
        this.onCommentChange = this.onCommentChange.bind(this);
    }

    newComment()
    {
        let body = 'Новый комментарий';
        let userId = 1;
        let title = 'Комментарий 1';

        addComment({title, userId, body});
    }

    onCommentChange(comments)
    {
        this.setState({
            comments: comments
        });
    }

    componentWillMount(){
        CommentStore.on('change', this.onCommentChange);
    }

    componentDidMount()
    {
        fetchComments();
    }

    componentWillUnmount(){
        CommentStore.removeListener('change', this.onCommentChange);
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
                <CommentList comments={this.state.comments} />
            </div>
        );
    }
}