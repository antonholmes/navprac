import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import friendReducer from './FriendReducer';
import AppNavigator from './AppNavigator';

const store = createStore(friendReducer);

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      possibleFriends: ['Anton', 'Tim', 'JD'],
      currentFriends: [],
    };
  }

  addFriend = index => {
    const { currentFriends, possibleFriends } = this.state;

    // Pull friend out of possibleFriends
    const addedFriend = possibleFriends.splice(index, 1);

    // And put friend in currentFriends
    currentFriends.push(addedFriend);

    // Finally, update app state
    this.setState({
      currentFriends,
      possibleFriends,
    });
  };

  render() {
    return (
      <Provider store={store}>
        <AppNavigator
          screenProps={{
            currentFriends: this.state.currentFriends,
            possibleFriends: this.state.possibleFriends,
            addFriend: this.addFriend,
          }}
        />
      </Provider>
    );
  }
}
