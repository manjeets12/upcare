'use strict';

import React, {Component} from 'react';
import { View, BackAndroid, StatusBar,Dimensions,Text, Button } from 'react-native';
import {
  NavigationActions,
  addNavigationHelpers,
  StackNavigator,
  DrawerNavigator
} from 'react-navigation';
import { connect} from 'react-redux';

const { width, height } = Dimensions.get('window');

import api from'src/common/api';  
import styles from 'src/common/styles';

/*Containers*/

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>Hello, Chat App!</Text>
        <Button
          onPress={() => navigate('Chat')}
          title="Chat with Lucy"
        />
      </View>
    );
  }
}

class ChatScreen extends React.Component {
  static navigationOptions = {
    title: 'Chat with Lucy',
  };
  render() {
    return (
      <View>
        <Text>Chat with Lucy</Text>
      </View>
    );
  }
}



const routesConfig = {
   Home: { screen: HomeScreen },
   Chat: { screen: ChatScreen },
};

export const AppBeforeLogin = StackNavigator(routesConfig);

export const AppNavigator = StackNavigator(routesConfig);



export const UnAuthorizedApp =()=>{
  return(
      <View style={styles.container}>
            {(api.isAndroid()) &&
              <StatusBar
                  backgroundColor="#C2185B"
                  barStyle="light-content"
              />
            }
            <AppBeforeLogin/>
      </View>
  );
};



class AppWithNavigationState extends Component{
  constructor(props) {
    super(props);
    this.handleBackButton = this.handleBackButton.bind(this);
  }
  
  componentDidMount() {
    BackAndroid.addEventListener('hardwareBackPress', this.handleBackButton);
  }
  
  componentWillUnmount() {
    BackAndroid.removeEventListener('hardwareBackPress', this.handleBackButton);
  }

  //added to handle back button functionality on android
  handleBackButton() {
    const {nav, dispatch} = this.props;

    if (nav && nav.routes && nav.routes.length > 1) {
      dispatch(NavigationActions.back());
      return true;
    }
    return false;
  }

  render() {
    let {dispatch, nav} = this.props;

    return (
          <View style={styles.container}>
            {(api.isAndroid()) &&
              <StatusBar
                  backgroundColor="#C2185B"
                  barStyle="light-content"
              />
            }
            <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })}/>
          </View>
    );
  }
};


export default connect(state =>({nav: state.nav}))(AppWithNavigationState);
