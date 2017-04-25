'use strict'

import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import { connect} from 'react-redux';
import { NavigationProvider, StackNavigation, withNavigation } from '@expo/ex-navigation';

import styles from 'src/common/styles';
//import AppWithNavigationState, {UnAuthorizedApp} from './AppNavigator';
import Router from 'src/navigation/Router';

//@withNavigation
class App extends Component{
	constructor(props){
		super(props);
	}

	render(){
		return(
			 <View style={styles.container}>
				<StackNavigation
				id="root"
				defaultRouteConfig={{navigationBar: { backgroundColor: '#0084FF',tintColor: '#FFEB3B',}}}
				initialRoute={Router.getRoute('authentication')}
				/>
			</View>
		);
	}
}

export default connect(state =>({authenticated: true}))(App);


//export default App;