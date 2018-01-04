import { FETCH_SURVEYS } from '../actions';

export default (state = [], action) => {
  switch (action.type) {

    case FETCH_SURVEYS:
      return action.payload.reverse();

    default:
      return state;

  }
};