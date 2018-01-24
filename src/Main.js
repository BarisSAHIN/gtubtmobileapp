import React, { Component } from 'react';
import { 
  View
} from 'react-native';

import Router from './Router';

export default class Main extends Component {
  render() {
    return(
        <View style={styles.background}>
          <Router/>
        </View>
    );
  }
}

var styles ={
  background: {
    flex: 1,
    width: null,
    height: null
  },
};


var new_style = {
  background: {
    color: red
  }
}