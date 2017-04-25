

import React, {Component} from 'react';
import {
  Alert,
  Image,
  Platform,
  StyleSheet,
  View,ScrollView,
  Text,FlatList,
  TextInput,
  TouchableOpacity,
  Dimensions
} from 'react-native';
import { connect } from 'react-redux';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
const { width, height } = Dimensions.get('window');


import styles from 'src/common/styles';
import {CATEGORY_PIC1, GROUP34} from 'src/common/Images';
import {Header, SearchBar} from 'src/components/header';

const customStyles=StyleSheet.create({
   

});

class Edit extends Component {
  render() {
    return (
      <View style={styles.container}>
       
      </View>
    );
  }
}
Edit.route = {
    navigationBar: {
      title: 'Patient',
      backgroundColor:'#ffffff',
      tintColor :'#333',
      borderBottomWidth: 1,
    },
}

export default connect(state =>({authenticated: true}))(Edit);