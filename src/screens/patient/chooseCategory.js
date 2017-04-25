

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
import {PATIENT_ICON, CATALOG_LEFT,CATALOG_RIGHT,CLOSE_WHITE} from 'src/common/Images';
import {UserGradient} from 'src/components/userGradient';

const customStyles=StyleSheet.create({
   

});

class ChooseCategory extends Component {
  render() {
    let {id, name, disease, email, phone} = this.props.route.params;

    return (
      <View style={[styles.container]}>
          <UserGradient name ={name}/>
          <View style={styles.centeredBody}>
            <View style={{marginBottom:20}}>
                <Text style={{fontSize:18, color:'#9e9fa8'}}>Select a category</Text>
            </View>
            
            <View style ={styles.catalogContainer}>
               <TouchableOpacity 
                onPress={()=>this.props.navigator.push("fillingCart",{id, name, disease, email, phone})}
                style={[styles.catalog, styles.customShadow]}
                elevation={4}>
                  <Image style={styles.catalogImage}
                    source={CATALOG_LEFT}/>
                  <Text style={{fontWeight:'bold', margin:10}}>Clothing</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                  onPress={()=>this.props.navigator.push("fillingCart",{id, name, disease, email, phone})}
                  style={[styles.catalog, styles.customShadow]}
                  elevation={4}>
                    <Image style={styles.catalogImage}
                          source={CATALOG_RIGHT}/>
                    <Text style={{fontWeight:'bold', margin:10}}>Prosthesis</Text>
                </TouchableOpacity>
            </View>
        </View>
      </View>
    );
  }
}
ChooseCategory.route = {
    navigationBar: {
      title: 'CHOOSE CATEGORY',
      backgroundColor:'#ffffff',
      tintColor :'#333',
      borderBottomWidth: 1,
    },
}

export default connect(state =>({authenticated: true}))(ChooseCategory);