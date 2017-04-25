import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
  ScrollView,
  TouchableHighlight,
} from 'react-native';
import { TabNavigation, TabNavigationItem } from '@expo/ex-navigation';
import { Ionicons } from '@expo/vector-icons';

import styles from 'src/common/styles';
import {PATIENT,PATIENT_SELECTED, LIST,LIST_SELECTED,GROUP2,GROUP2_SELECTED } from 'src/common/Images';
import Patients from 'src/screens/patients';
import Catalog from 'src/screens/catalog';
import Cart from 'src/screens/cart';

function getColor(isSelected) {
  return isSelected ? '#fff' : '#000';
}

export default class TabNavigator extends Component {
  _goToFirstTab = () => {
    this.props.navigation.performAction(({ tabs, stacks }) => {
      tabs('tab-navigation').jumpToTab('first');
    });
  };

  _goToSecondTab = () => {
    this.props.navigation.performAction(({ tabs, stacks }) => {
      tabs('tab-navigation').jumpToTab('second');
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <TabNavigation
          id="tab-navigation"
          navigatorUID="tab-navigation"
          initialTab="first"
          tabBarStyle={[{borderTopWidth:0, borderTopColor:'#FFF',backgroundColor:'#ffffff', shadowColor:'#f0f1f4',}, styles.headerShadow]}>
          <TabNavigationItem
            id="first"
            renderIcon={isSelected => (
                <Image style={{height:35, width:35}}
                  source={!isSelected?PATIENT:PATIENT_SELECTED}/>
              )}>
            <Patients {...this.props}/>
          </TabNavigationItem>
          <TabNavigationItem
            id="second"
            renderIcon={isSelected => (
                <Image style={{height:35, width:35}}
                  source={!isSelected?GROUP2:GROUP2_SELECTED}/>
              )}>
            <Cart {...this.props}/>
          </TabNavigationItem>
          <TabNavigationItem
            id="third"
             renderIcon={isSelected => (
                <Image style={{height:35, width:35}}
                  source={!isSelected?LIST:LIST_SELECTED}/>
              )}>
          <Catalog {...this.props}/>
          </TabNavigationItem>
        </TabNavigation>
      </View>
    );
  }
  _renderTitle = (isSelected, title) => {
    return (
      <Text style={{ color: getColor(isSelected) }}>
        {title}
      </Text>
    );
  };
  _renderIcon = (isSelected, name) => {
    let selected = (isSelected)?"_SELECTED":"";
    let ICON = name + selected;
    return (
      <Image style={{height:20, width:20}}
       source={ICON}/>
    );
  };
}
TabNavigator.route = {
    navigationBar: {
      title: 'Tab Navigation',
      visible: false,
    },
};

