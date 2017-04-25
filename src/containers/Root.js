'use strict';

import React, {Component} from 'react';
import {
  View,Text,
  Dimensions,
  DeviceEventEmitter,
  StatusBar
} from 'react-native';
import { NavigationProvider, StackNavigation, withNavigation } from '@expo/ex-navigation';
import { Provider as ReduxProvider, connect } from 'react-redux';


import configureStore from 'src/data/store';
import styles from 'src/common/styles';

import Router from 'src/navigation/Router';
import App from './App';



class Root extends Component {
    constructor(props) {
      super(props);
      this.state = {
        authenticated:false,
        isLoading:true,
        store: configureStore(),
      };
  }

  componentDidMount() {
    
  }
  
  render() {
      return (
        <ReduxProvider store={this.state.store}>
          <NavigationProvider router={Router}>
            <StatusBar barStyle="light-content" />
            <App {...this.props} />
          </NavigationProvider>
        </ReduxProvider>
          
      );
  }
}
export default Root;