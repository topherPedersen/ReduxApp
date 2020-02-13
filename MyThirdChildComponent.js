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

        <Text>{ this.props.thingsToDo[this.props.thingsToDo.length - 1].task }</Text>
         
        <Button 
          title="Debug Props"
          onPress={ () => alert(JSON.stringify(this.props)) }/>
        

        <Button 
          title="Dispatch Action to Reducer and Update State"
          onPress={ () => this.props.myAction("my super sweet payload") }/>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  thingsToDo: state.thingsToDo
});

const mapDispatchToProps = dispatch => {
  return {
    myAction: (myPayload) => dispatch( { type: 'MY_ACTION', payload: myPayload } )
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MyThirdChildComponent);