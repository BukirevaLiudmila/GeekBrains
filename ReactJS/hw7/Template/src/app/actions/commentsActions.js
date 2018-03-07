import axios from 'axios';

export function fetchComments() {
    return {
        type: 'FETCH_COMMENTS',
        payload: axios.get('http://jsonplaceholder.typicode.com/comments/')
    }
}