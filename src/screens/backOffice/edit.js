

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

const Intervention =(props)=>{
   let {disease, onDatePress,onDiseasePress} =props;
    return(
        <View style={[{margin:15, marginTop:0, backgroundColor:'#ffffff'},styles.customShadow]}>
           <View style={{padding:15, flexDirection:'row', justifyContent:'space-between', alignItems:'center',borderBottomWidth:2, borderBottomColor:'#ebeaec'}}>
              <Text style={{fontSize:18, color:'#9e9fa8'}}>Surgical interventions</Text>
              <TouchableOpacity onPress={()=>{}}>
                  <Image style={styles.ImageSize25}
                    source={CLOSE}/>
              </TouchableOpacity>
           </View>
           <View style={{padding:15, borderBottomWidth:2, borderBottomColor:'#ebeaec'}}>
              <Text style={{fontSize:18, color:'#9e9fa8'}}>Intervention</Text>
              <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
                <Text style={{fontSize:18, color:'#323940', paddingLeft:10}}>{disease}</Text>
                 <TouchableOpacity onPress={onDiseasePress}>
                  <Image style={styles.ImageSize30}
                    source={RIGHT}/>
              </TouchableOpacity>
              </View>
           </View>
           <View style={{padding:15, borderBottomWidth:2, borderBottomColor:'#ebeaec'}}>
              <Text style={{fontSize:18, color:'#9e9fa8'}}>Date</Text>
              <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
                <Text style={{fontSize:18, color:'#323940', paddingLeft:10}}>{"24 september 2017"}</Text>
                 <TouchableOpacity onPress={onDatePress}>
                  <Image style={styles.ImageSize30}
                    source={RIGHT}/>
              </TouchableOpacity>
              </View>
           </View>
         </View>
    );
}

class Edit extends Component {
  render() {
    let {id, name, disease, email, phone} = this.props.route.params;
    return (
      <View style={styles.container}>
            <ScrollView>
               <View style={[{margin:15, backgroundColor:'#ffffff'},styles.customShadow]}>
                 <View style={[styles.rowContainer,{borderBottomWidth:2, borderBottomColor:'#ebeaec'}]}>
                    <View style={{flex:2, justifyContent:'center', alignItems:'center'}}>
                      <Image style={styles.ImageSize40}
                        source={PATIENT_ICON}/>
                    </View>
                    <View style={{flex:9}}>
                        <TextInput
                          style={{fontSize:16}}
                          placeholder ="Enter First Name"
                          placeholderTextColor ="#323940"
                          underlineColorAndroid ='transparent'
                          onChangeText={(text) => {}}
                          value={"Polly"}/>

                        <TextInput
                          style={{fontSize:16}}
                          placeholder ="Enter Last Name"
                          placeholderTextColor ="#323940"
                          underlineColorAndroid ='transparent'
                          onChangeText={(text) => {}}
                          value={"Stone"}/>
                    </View>
                  </View>
                 <View style={{padding:15, borderBottomWidth:2, borderBottomColor:'#ebeaec'}}>
                    <Text style={{fontSize:18, color:'#9e9fa8'}}>Email</Text>
                    <TextInput
                          style={{fontSize:18}}
                          placeholder ="Enter Last Name"
                          placeholderTextColor ="#323940"
                          underlineColorAndroid ='transparent'
                          onChangeText={(text) => {}}
                          value={email}/>
                 </View>
                 <View style={{padding:15}}>
                    <Text style={{fontSize:18, color:'#9e9fa8'}}>Phone</Text>
                    <TextInput
                          style={{fontSize:18}}
                          placeholder ="Enter Last Name"
                          placeholderTextColor ="#323940"
                          underlineColorAndroid ='transparent'
                          onChangeText={(text) => {}}
                          value={phone}/>
                 </View>
               </View>

               <Intervention disease={disease} 
                onDatePress={()=>this.props.navigator.push("chooseDate")}
                onDiseasePress={()=>this.props.navigator.push("intervention")}/>
               <Intervention disease={disease} 
                onDatePress={()=>this.props.navigator.push("chooseDate")}
                onDiseasePress={()=>this.props.navigator.push("intervention")}/>
               
               <View style={{padding:15}}>
                    <TouchableOpacity onPress={()=>this.props.navigator.push("intervention")}
                         style={[styles.fullWidthBtn,{marginTop:0, marginBottom:0}]}>
                          <Text style={[styles.boldText, {color:'#FFF', fontSize:20}]}>ADD INTERVENTION</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
      </View>
    );
  }
}
Edit.route = {
    navigationBar: {
      title: 'PATIENT',
      renderRight: (route, props) => <SaveButton {...props} />,
      backgroundColor:'#ffffff',
      tintColor :'#333',
      borderBottomWidth: 1,
    },
}

export default connect(state =>({authenticated: true}))(Edit);