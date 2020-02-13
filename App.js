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

  if (action.type === 'MY_ACTION') {
    let myPayload = action.payload; // we aren't actually using the payload in this example
    console.log(myPayload);
    let updatedState = state;
    let indexOfNextTask = state.thingsToDo.length;
    //http://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid-in-javascript
    let randomString =  Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    updatedState.thingsToDo[indexOfNextTask] = {
      task: randomString
    };
    return updatedState;
  }

  // If none of the conditions above are true,
  // simply return the current state
  return state;
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
