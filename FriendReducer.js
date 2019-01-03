import { combineReducers } from 'redux';
import { ADD_FRIEND } from './types';

const INITIAL_STATE = {
  current: [],
  possible: ['Anton', 'Tim', 'JD', 'Asset'],
};

const friendReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_FRIEND:
      // Pulls current and possible out of previous state, does not directly alter state
      const { current, possible } = state;

      // Pull friend out of friends.possible
      // Note that action.payload === friendIndex
      const addedFriend = possible.splice(action.payload, 1);

      // Put friend in friends.current
      current.push(addedFriend);

      // Update redux state
      const newState = { current, possible };
      return newState;
    default:
      return state;
  }
};

export default combineReducers({
  friends: friendReducer,
});
