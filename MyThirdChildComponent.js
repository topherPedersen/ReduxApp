import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native';

import { connect } from 'react-redux';


class MyThirdChildComponent extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <View>
        <Text>Third Child</Text>

        <Text>Third todo item: { this.props.thingsToDo[2].task }</Text>

        <Button 
          title="Debug Props"
          onPress={ () => alert(JSON.stringify(this.props)) }/>

        <Button 
          title="Dispatch Action to Reducer and Update State"
          onPress={ () => alert("still working on that part!") }/>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  thingsToDo: state.thingsToDo
});

export default connect(mapStateToProps, null)(MyThirdChildComponent);