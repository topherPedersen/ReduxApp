import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

class MyFirstChildComponent extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <View>
        <Text>First Child</Text>
      {/* <Text>First todo item: { this.props.thingsToDo[0] }</Text> */}
      </View>
    );
  }
}

export default MyFirstChildComponent;