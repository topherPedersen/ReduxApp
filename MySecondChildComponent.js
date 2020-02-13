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

class MySecondChildComponent extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {

    return(
      <View>
        <Text>Second Child</Text>
        <Text>Last todo item: { this.props.thingsToDo[this.props.thingsToDo.length - 1].task }</Text>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  thingsToDo: state.thingsToDo
});

export default connect(mapStateToProps, null)(MySecondChildComponent);