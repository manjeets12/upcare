

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


import {patients} from './data';
import styles from 'src/common/styles';
import {PATIENT_ICON,RECTANGLE, LOCK, TRASH } from 'src/common/Images';
import {Header, SearchBar} from 'src/components/header';

const customStyles=StyleSheet.create({
   

});

class Patients extends Component {
  renderItem({item, index}){
      let {id, name, disease, email, phone} = item;
      return(
        <TouchableOpacity key ={id} 
        onPress={()=>this.props.navigator.push("patientProfile",{id, name, disease, email, phone})}
        style={[styles.listItem, styles.customShadow]} elevation={4}>
          <View style={styles.patientRow}>
              <Image style={styles.ImageSize40}
                    source={PATIENT_ICON}/>
              <View>
              	<Text style={{fontSize:18, color:'#323940'}}>{name}</Text>
              	<Text style={{fontSize:18, color:'#9e9fa8'}}>{disease}</Text>
              </View>
          	 <Image style={styles.ImageSize40}
                source={TRASH}/>
          </View>
        </TouchableOpacity>
      );
  }	
  render() {
    return (
      <View style={styles.container}>
        <Header title="PATIENTS" />
        <SearchBar/>
        {patients && (patients.length !=0) &&
       		 <FlatList
	             style={{padding:5,}}
	             data={patients}
	             renderItem={this.renderItem.bind(this)}
	             ItemSeparatorComponent={(index) => <View key={index} style={styles.separator}></View>}
	             keyExtractor={(item, index)=>index}
	             legacyImplementation={false}
	             initialNumToRender={15}
	           />
        }
      </View>
    );
  }
}
Patients.route = {
    navigationBar: {
      visible: false,
    },
}

export default connect(state =>({authenticated: true}))(Patients);