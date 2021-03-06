import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import { connect } from 'react-redux';

class MyFirstChildComponent extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <View>
        <Text>First Child</Text>
        <Text>First todo item: { this.props.thingsToDo[0].task }</Text>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  thingsToDo: state.thingsToDo
});

export default connect(mapStateToProps, null)(MyFirstChildComponent);