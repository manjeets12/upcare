

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

import {categories} from './data';
import styles from 'src/common/styles';
import {CATEGORY_PIC1, GROUP34} from 'src/common/Images';
import {Header, SearchBar} from 'src/components/header';
import {UserGradient} from 'src/components/userGradient';

class CatalogCategories extends Component {

  renderItem({item, index}){
      let {id, name, disease, middleName, email, phone} = item;
      return(
         <TouchableOpacity key ={id}
              onPress={() => this.props.navigator.push("category",{id, name, disease, email, phone})} 
              style={[styles.catalog, styles.customShadow]}
              elevation={4}>
                <Image style={styles.catalogImage}
                      source={CATEGORY_PIC1}/>
                <Text style={{fontWeight:'bold', margin:10}}>{name}</Text>
          </TouchableOpacity>
      );
  } 
  
  render() {
    let {id, name, disease, email, phone} = this.props.route.params;
    return (
      <View style={styles.container}>
        <SearchBar/>
        {name && <UserGradient name={name}/>}
        {categories && (categories.length !=0) &&
           <FlatList
               style={{padding:5}}
               columnWrapperStyle={styles.catalogContainer}
               data={categories}
               numColumns={2}
               renderItem={this.renderItem.bind(this)}
               ItemSeparatorComponent={(index) => <View key={index} style={styles.separator}></View>}
               keyExtractor={(item, index)=>index}
               legacyImplementation={false}
               initialNumToRender={15}
             />
        }
         <TouchableOpacity
              onPress={() => {}} 
              style={[styles.customShadow,styles.fabButtonRight60]}
              elevation={10}>
                <Image style={styles.ImageSize60}
                      source={GROUP34}/>
         </TouchableOpacity>
      </View>
    );
  }
}
CatalogCategories.route = {
    navigationBar: {
      title: 'CATALOG',
      backgroundColor:'#ffffff',
      tintColor :'#333',
      borderBottomColor: '#ebeaec',
      borderBottomWidth: 1,
      elevation:0,
    },
}

export default connect(state =>({authenticated: true}))(CatalogCategories);