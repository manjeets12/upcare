

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
import {CATEGORY_PIC1, GROUP34, PATIENT_ICON, CLOSE, RIGHT} from 'src/common/Images';
import {Header, SearchBar} from 'src/components/header';

const customStyles=StyleSheet.create({
   

});

const SaveButton =(props)=>{
    return(
        <TouchableOpacity onPress={()=>{}} 
         style={{flex: 1,alignItems: 'center', justifyContent: 'center'}}>
          <Text style={{fontSize:18, color:'#4487fa', fontWeight:'400', paddingRight:15}}>Save</Text>
        </TouchableOpacity>
    )
};


class Intervention extends Component {
  render() {
    return (
      <View style={styles.container}>
           
      </View>
    );
  }
}
Intervention.route = {
    navigationBar: {
      title: 'INTERVENTION',
      renderRight: (route, props) => <SaveButton {...props} />,
      backgroundColor:'#ffffff',
      tintColor :'#333',
      borderBottomWidth: 1,
    },
}

export default connect(state =>({authenticated: true}))(Intervention);