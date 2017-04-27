

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
import {PATIENT_ICON,RECTANGLE, LOCK, TRASH, ADD_ICON } from 'src/common/Images';
import {Header, SearchBar} from 'src/components/header';

const customStyles=StyleSheet.create({
  

});

class Patients extends Component {

  renderRightIcon(){
    let {userType} = this.props.route.params;
    if(userType ==="backOffice"){
      return(
          <TouchableOpacity onPress={()=>{}}>
              <Image
                style={styles.ImageSize25}
                source={ADD_ICON}
              />
          </TouchableOpacity>
      );
    }
    
  }
  renderItem({item, index}){
      let {id, name, disease, email, phone} = item;
      let {userType} = this.props.route.params;
      let routeName = (userType ==="backOffice")?"editPatient":"patientProfile";
      return(
        <TouchableOpacity key ={id} 
        onPress={()=>this.props.navigator.push(routeName,{id, name, disease, email, phone})}
        style={[styles.listItem, styles.customShadow]} elevation={4}>
          <View style={{ flexDirection:'row',alignItems:'center',padding:15}}>
             <View style={styles.leftBox}>
                  <Image style={styles.ImageSize40}
                    source={PATIENT_ICON}/>
             </View>
             <View style={styles.middleBox}>
                  <Text style={{fontSize:18, color:'#323940'}}>{name}</Text>
                  <Text style={{fontSize:18, color:'#9e9fa8'}}>{disease}</Text>
             </View>
             {(userType ==="backOffice") && 
                <View style={styles.rightBox}>
                     <Image style={styles.ImageSize40}
                     source={TRASH}/>
                </View>
              }
          </View>
        </TouchableOpacity>
      );
  }	
  render() {
    let {userType} = this.props.route.params;
    return (
      <View style={styles.container}>
        <Header title={(userType ==="patient")?"PATIENTS":"MANAGE PATIENTS"}  renderRightIcon={this.renderRightIcon.bind(this)}/>
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