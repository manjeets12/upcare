import React, {Component} from 'react';
import {
  Alert,
  Image,
  Platform,
  StyleSheet,
  View,ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  Dimensions,
  Picker
} from 'react-native';
import { connect } from 'react-redux';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
const { width, height } = Dimensions.get('window');

import styles from 'src/common/styles';
import {AVISTER_MEDICAL,RECTANGLE, LOCK } from 'src/common/Images';

const customStyles=StyleSheet.create({
   loginPageLogoContainer:{
        flexDirection:'row', 
        justifyContent:'flex-start', 
        alignItems:'center',
        alignContent:'flex-start'
    },
    loginPageInnerLogoContainer:{
        flex:3,
        justifyContent:'center', 
        alignItems:'flex-start',
        marginLeft:-30
    },
    logo:{
        height:120, 
        width:120,
        resizeMode:"contain",
    },
    avisterText:{
      color:'#FFF', 
      fontSize:24,
      padding:0,
      marginBottom:-5
    },
    medicalText:{
      color:'#FFF', 
      fontSize:20, 
      paddingLeft:20, 
      paddingTop:0, 
      marginTop:0
    },
    appNameText:{
      color:'#FFF', 
      fontSize:30, 
      fontWeight:'400',
    },


});

class Authentication extends Component {
  constructor(props) {
     super(props);
     this.state ={
       user:"backOffice"
     }
  }
  render() {
    return (
      <Image
        style={styles.bgCoverImage}
				source={RECTANGLE}>
        <KeyboardAwareScrollView contentContainerStyle={{paddingLeft:30, paddingRight:30, top:0.22*height}}
          keyboardShouldPersistTaps="always"
          keyboardDismissMode={"interactive"}>
          <View style ={customStyles.loginPageLogoContainer}>
                <View style={customStyles.loginPageInnerLogoContainer}>
                  <Image style={customStyles.logo}
                    source={AVISTER_MEDICAL}/>
                </View>
                
                <View style={{flex:7, marginBottom:-30}}>
                  <Text style={customStyles.avisterText}>Avister</Text>
                  <Text style={customStyles.medicalText}>Medical</Text>
                </View>
          </View>
          <View style={{marginTop:10}}>
            <Text style={customStyles.appNameText}>UP-CARE</Text>
            <Text style={{color:'#FFF', fontSize:16}}>Aspect ratio control the size of the dimension of a node. Aspect ratio is a non-standard property </Text>
          </View>
          <Picker
            selectedValue={this.state.user}
            onValueChange={(lang) => this.setState({user: lang})}>
            <Picker.Item label="Back-Office" value="backOffice" />
            <Picker.Item label="Patient" value="patient" />
          </Picker>
         
          <View style={{marginTop:10,marginBottom:10}}>
            <TextInput
              style={styles.formInput}
              secureTextEntry ={true}
              placeholder ="Password"
              placeholderTextColor ="#FFF"
              underlineColorAndroid ='transparent'
              onChangeText={(text) => {}}/>
              <Image style={styles.formIcon}
                    source={LOCK}/>
          </View>

          <TouchableOpacity onPress={()=>this.props.navigator.push("tabNavigator",{userType:this.state.user})}
               style={[styles.fullWidthBtn,{marginTop:10}]}>
                <Text style={[styles.boldText, {color:'#FFF', fontSize:20}]}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>{}}
               style={[{alignItems:'flex-start', marginTop:10}]}>
                <Text style={{color:'#FFF', fontSize:16, fontWeight:'400'}}>No account? Contact a supplier</Text>
              </TouchableOpacity>
        </KeyboardAwareScrollView>
      </Image>
    );
  }
}
Authentication.route = {
    navigationBar: {
      visible: false,
    },
}

export default connect(state =>({authenticated: true}))(Authentication);

