

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
import {PATIENT_ICON} from 'src/common/Images';
import {Header, SearchBar} from 'src/components/header';
import {UserGradient} from 'src/components/userGradient';

const customStyles=StyleSheet.create({
   

});

class Profile extends Component {
  render() {
    let {id, name, disease, email, phone} = this.props.route.params;

    return (
      <View style={[styles.container]}>
        <ScrollView>
         <View style={[{margin:15},styles.customShadow]}>
           <UserGradient name={name}/>
           <View style={{padding:15, borderBottomWidth:2, borderBottomColor:'#ebeaec'}}>
              <Text style={{fontSize:18, color:'#9e9fa8'}}>Email</Text>
              <Text style={{fontSize:18, color:'#323940'}}>{email}</Text>
           </View>
           <View style={{padding:15}}>
              <Text style={{fontSize:18, color:'#9e9fa8'}}>Phone</Text>
              <Text style={{fontSize:18, color:'#323940'}}>{phone}</Text>
           </View>
         </View>

         <View style={[{margin:15, marginTop:0},styles.customShadow]}>
           <View style={{padding:15, borderBottomWidth:2, borderBottomColor:'#ebeaec'}}>
              <Text style={{fontSize:18, color:'#9e9fa8'}}>Surgical interventions</Text>
           </View>
           <View style={{padding:15, borderBottomWidth:2, borderBottomColor:'#ebeaec'}}>
              <Text style={{fontSize:18, color:'#323940'}}>{disease}</Text>
              <Text style={{fontSize:18, color:'#9e9fa8'}}>{"24 september 2017"}</Text>
           </View>
           <View style={{padding:15, borderBottomWidth:2, borderBottomColor:'#ebeaec'}}>
              <Text style={{fontSize:18, color:'#323940'}}>{disease}</Text>
              <Text style={{fontSize:18, color:'#9e9fa8'}}>{"24 september 2017"}</Text>
           </View>
           <View style={{padding:15}}>
              <TouchableOpacity onPress={()=>this.props.navigator.push("chooseCategory",{id, name, disease, email, phone})}
                   style={[styles.fullWidthBtn,{marginTop:0, marginBottom:0}]}>
                    <Text style={[styles.boldText, {color:'#FFF', fontSize:20}]}>MAKE ORDER</Text>
              </TouchableOpacity>
           </View>
         </View>
        </ScrollView>
      </View>
    );
  }
}
Profile.route = {
    navigationBar: {
      title: 'PATIENT',
      backgroundColor:'#ffffff',
      tintColor :'#333',
      borderBottomWidth: 1,
    },
}

export default connect(state =>({authenticated: true}))(Profile);