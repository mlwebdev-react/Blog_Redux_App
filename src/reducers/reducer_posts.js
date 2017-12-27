import _ from "lodash";
import { FETCH_POSTS, FETCH_POST } from "../actions";

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_POST:
      return { ...state, [action.payload.data.id]: action.payload.data };
    case FETCH_POSTS:
      return _.mapKeys(action.payload.data, "id");
    default:
      return state;
  }
}
/* ES5 way below
case FETCH_POSTS:
  const post = action.payload.data
  const newState = { ...state }
  newState[post.id] = post;
  return newState;
*/
