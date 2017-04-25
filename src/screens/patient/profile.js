

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
import { Components } from 'expo';
const { LinearGradient } = Components;
import { connect } from 'react-redux';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
const { width, height } = Dimensions.get('window');


import styles from 'src/common/styles';
import {PATIENT_ICON} from 'src/common/Images';
import {Header, SearchBar} from 'src/components/header';

const customStyles=StyleSheet.create({
   

});

class Profile extends Component {
  render() {
    let {id, name, disease, email, phone} = this.props.route.params;

    return (
      <View style={[styles.container]}>
        <ScrollView>
         <View style={[{margin:15},styles.customShadow]}>
           <LinearGradient
              colors={['#79cafe', '#70b2fe', '#6595fd']}
              style={{flexDirection:'row', alignItems:'center', padding:15}}>
                <Image style={styles.ImageSize40}
                    source={PATIENT_ICON}/>
                <View>
                  <Text style={{fontSize:24, color:'#FFF', fontWeight:'400', paddingLeft:10}}>{name}</Text>
                </View>
           </LinearGradient>
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