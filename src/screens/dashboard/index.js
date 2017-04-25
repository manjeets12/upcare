
import React, {Component} from 'react';
import {
  Text,
  View,
} from 'react-native';
import { connect} from 'react-redux';

class Dashboard extends Component {
  render() {
    return (
      <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
        <Text onPress={this._handlePress}>Dashboard!</Text>
      </View>
    )
  }

  _handlePress = () => {
    this.props.navigator.push('home');
  }
}
Dashboard.route = {
    navigationBar: {
      title: 'Home',
    }
}
export default connect(state =>({authenticated: true}))(Dashboard);