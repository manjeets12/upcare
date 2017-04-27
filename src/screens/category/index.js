

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
import {GROUP34, LIST_WHITE} from 'src/common/Images';
import {UserGradient} from 'src/components/userGradient';
import {Header, SearchBar} from 'src/components/header';
import {CartItem} from 'src/components/cartItem'

const items = [
{"id":1, "name":"Open Buttock - Above-the-Knee Girdle", "price":300, "quantity":0},
{"id":2, "name":"Seamless Cup -Basic Bra", "price":300, "quantity":0},
{"id":3, "name":"Implant Stabilizer Band", "price":150, "quantity":0},
{"id":4, "name":"Seamless Cup -Basic Bra", "price":300, "quantity":2},
{"id":5, "name":"3/4 -Length Sleeve Compre", "price":150, "quantity":0},
{"id":6, "name":"Open Buttock - Above-the-Knee Girdle", "price":300, "quantity":0},
{"id":7, "name":"Seamless Cup -Basic Bra", "price":300, "quantity":0},
{"id":8, "name":"Implant Stabilizer Band", "price":150, "quantity":0},
];

class Category extends Component {

  renderItem({item, index}){
      let {id, name, price, quantity} = item;
      return(
         <CartItem item={item} isCategory ={true}/>
      );
  } 

  render() {
    let {id, name, disease, email, phone} = this.props.route.params;
    return (
      <View style={[styles.container]}>
          <SearchBar/>
          {/*name && <UserGradient name={name}/>*/}
          {items && (items.length !=0) &&
             <FlatList
                 style={{padding:10}}
                 data={items}
                 renderItem={this.renderItem.bind(this)}
                 ItemSeparatorComponent={(index) => <View key={index} style={styles.separator}></View>}
                 legacyImplementation={false}
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
Category.route = {
    navigationBar: {
      title(params) {
        return `${params.name}`;
      },
      backgroundColor:'#ffffff',
      tintColor :'#333',
      borderBottomColor: '#ebeaec',
      borderBottomWidth: 1,
      elevation:0,
    },
}

export default connect(state =>({authenticated: true}))(Category);