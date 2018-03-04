import { EventEmitter } from 'events';

import {
    ADD_COMMENT,
    FETCH_COMMENTS_START,
    FETCH_COMMENTS_END
} from "../constants/commentsConstants";

import dispatcher from '../dispatcher';
import axios from 'axios';

class CommentStore extends EventEmitter
{
    constructor()
    {
        super(...arguments);

        this.comments = [];

        this.fetchCommentStart = this.fetchCommentStart.bind(this);
        this.fetchCommentsEnd = this.fetchCommentsEnd.bind(this);
        this.change = this.change.bind(this);
        this.addComment = this.addComment.bind(this);
        this.handleActions = this.handleActions.bind(this);
    }

    fetchCommentStart()
    {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((response) => {
                let { data } = response;

                dispatcher.dispatch({
                    type: FETCH_COMMENTS_END,
                    payload: data
                });
            });
    }

    fetchCommentsEnd(comments)
    {
        this.comments = comments;
        this.change();
    }

    change(){
        this.emit('change', this.comments);
    }

    addComment(comment)
    {
        this.comments.push(comment);
        this.change();
    }

    handleActions(action)
    {
        switch (action.type)
        {
            case ADD_COMMENT: {
                this.addComment(action.payload);
                break;
            }
            case FETCH_COMMENTS_START: {
                this.fetchCommentStart();
                break;
            }
            case FETCH_COMMENTS_END: {
                this.fetchCommentsEnd(action.payload);
                break;
            }
        }
    }
}

const cS = new CommentStore();
dispatcher.register(cS.handleActions);
export default cS;