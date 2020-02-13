import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

class MySecondChildComponent extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <View>
        <Text>Second Child</Text>
        {/* <Text>Second todo item: { this.props.thingsToDo[1] }</Text> */}
      </View>
    );
  }
}

export default MySecondChildComponent;