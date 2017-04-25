import React from 'react';
import {
    StyleSheet, 
    View,
    Image, 
    Text, 
    TextInput,
    TouchableHighlight, 
    TouchableOpacity, 
    Dimensions,
    Platform,
    StatusBar,
} from 'react-native';
import { Components } from 'expo';
const { LinearGradient } = Components;

import styles from 'src/common/styles';

import {CLOSE_WHITE,PATIENT_ICON} from 'src/common/Images';

const customStyles=StyleSheet.create({
  container: {
    flexDirection:'row', 
    alignItems:'center', 
    padding:10
  },
  leftContainer:{
    flex:2, 
    justifyContent:'center', 
    alignItems:'center'
  },
  middleContainer:{
    flex:9, 
    justifyContent:'center', 
    alignItems:'flex-start'
  },
  rightContainer:{
    flex:1, 
    justifyContent:'center', 
    alignItems:'center'
  },
  nameText:{
    fontSize:20, 
    color:'#FFF', 
    fontWeight:'400'
  },
  orderForText:{fontSize:16, color:'#FFF'}

});


export const UserGradient =(props)=>{
	let {name} =props;
    return (
         <LinearGradient
              colors={['#79cafe', '#70b2fe', '#6595fd']}
              style={customStyles.container}>
                <View style={customStyles.leftContainer}>
                  <Image style={styles.ImageSize40}
                    source={PATIENT_ICON}/>
                </View>
                
                <View style={customStyles.middleContainer}>
                  <Text style={styles.orderForText}>Ordering for</Text>
                  <Text style={customStyles.nameText}>{name}</Text>
                </View>
                <TouchableOpacity onPress ={()=>{}} 
                  style={customStyles.rightContainer}>
                  <Image style={styles.ImageSize15}
                    source={CLOSE_WHITE}/>
                </TouchableOpacity>
          </LinearGradient>
    );
}
UserGradient.propTypes={
    name:React.PropTypes.string.isRequired,
};
UserGradient.defaultProps = {
  title: '',
};