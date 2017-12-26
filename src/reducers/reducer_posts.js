import { FETCH_POSTS, FETCH_POST } from '../actions';
import _ from 'lodash';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_POSTS:
    /* ES5 way
      const post = action.payload.data
      const newState = { ...state }
      newState[post.id] = post;
      return newState;
    */
    retutn { ...state, [action.payload.data.id]: action.payload.data };

    case FETCH_POSTS:
      return _.mapKeys(action.payload.data, 'id');
    default:
      return state;

  }
}
