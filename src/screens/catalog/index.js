

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
import {CATALOG_LEFT,CATALOG_RIGHT, SEARCH_ICON} from 'src/common/Images';
import {Header, SearchBar} from 'src/components/header';

const customStyles=StyleSheet.create({
   

});

class Catalog extends Component {
  
  render() {
    return (
      <View style={styles.container}>
        <Header title="CATALOG" />
        <SearchBar/>
        
        <View style={styles.centeredBody}>
          <View style={{marginBottom:20}}>
              <Text style={{fontSize:18, color:'#9e9fa8'}}>Select a category</Text>
          </View>
          
          <View style ={styles.catalogContainer}>
             <TouchableOpacity 
              onPress={()=>this.props.navigator.push("catalogCategories")}
              style={[styles.catalog, styles.customShadow]}
              elevation={4}>
                <Image style={styles.catalogImage}
                  source={CATALOG_LEFT}/>
                <Text style={{fontWeight:'bold', margin:10}}>Clothing</Text>
              </TouchableOpacity>

              <TouchableOpacity 
                onPress={()=>this.props.navigator.push("catalogCategories")}
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
Catalog.route = {
    navigationBar: {
      visible: false,
    },
}

export default connect(state =>({authenticated: true}))(Catalog);