import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import MyFirstChildComponent from './MyFirstChildComponent';
import MySecondChildComponent from './MySecondChildComponent';
import MyThirdChildComponent from './MyThirdChildComponent';

import { createStore } from 'redux';
import { connect, Provider } from 'react-redux';

const initialState = {
  thingsToDo: [
    { task: "Learn React" },
    { task: "Learn Redux"},
    { task: "Learn React-Redux"},
    { task: "Get job." },
    { task: "Move out of parent's basement." }
  ]
}

function myReducer(state, action) {
  // check for state undefined to prevent 
  // redux from crashing app on load
  if (typeof state === 'undefined') {
    return initialState;
  }

  // For now, just return state (blank reducer, does nothing)
  return initialState;
}

const store = createStore(myReducer);

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <Provider store={store}>
        <View>
          <Text>Hello, React-Redux</Text>
          <MyFirstChildComponent/>
          <MySecondChildComponent/>
          <MyThirdChildComponent/>
        </View>
      </Provider>
    );
  }
}

export default App;
