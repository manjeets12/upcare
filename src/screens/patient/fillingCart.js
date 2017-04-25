

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
const { width, height } = Dimensions.get('window');


import styles from 'src/common/styles';
import {GROUP34, LIST_WHITE} from 'src/common/Images';
import {UserGradient} from 'src/components/userGradient';
import {CartItem} from 'src/components/cartItem'

const items = [
{"id":1, "name":"Open Buttock - Above-the-Knee Girdle", "price":300, "quantity":0},
{"id":2, "name":"Seamless Cup -Basic Bra", "price":300, "quantity":0},
{"id":3, "name":"Implant Stabilizer Band", "price":150, "quantity":0},
{"id":4, "name":"Seamless Cup -Basic Bra", "price":300, "quantity":2},
{"id":5, "name":"3/4 -Length Sleeve Compre", "price":150, "quantity":0},
];

class FillingCart extends Component {

  renderItem({item, index}){
      let {id, name, price, quantity} = item;
      return(
         <CartItem item={item}/>
      );
  } 

  render() {
    let {id, name, disease, email, phone} = this.props.route.params;
    return (
      <View style={[styles.container]}>
          <UserGradient name={name}/>
          <ScrollView style={{padding:10}}>
             <TouchableOpacity onPress={()=>this.props.navigator.push("catalogCategories",{id, name, disease, email, phone})}
                   style={[styles.fullWidthBtn,{flexDirection:'row'}]}>
                    <Image style={styles.ImageSize30}
                      source={LIST_WHITE}/>
                    <Text style={[styles.boldText, {color:'#FFF', fontSize:20, paddingLeft:30}]}>GO TO CATALOG</Text>
            </TouchableOpacity>

            <Text style={{fontSize:18, color:'#9e9fa8', margin:10}}>Super Favorites</Text>

            {items && (items.length !=0) &&
               <FlatList
                   data={items}
                   renderItem={this.renderItem.bind(this)}
                   ItemSeparatorComponent={(index) => <View key={index} style={styles.separator}></View>}
                   legacyImplementation={false}
                 />
            }

            <Text style={{fontSize:18, color:'#9e9fa8', margin:10}}>The Last</Text>

            {items && (items.length !=0) &&
               <FlatList
                   style={{paddingBottom:100}}
                   data={items}
                   renderItem={this.renderItem.bind(this)}
                   ItemSeparatorComponent={(index) => <View key={index} style={styles.separator}></View>}
                   legacyImplementation={false}
                 />
            }
          </ScrollView>
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
FillingCart.route = {
    navigationBar: {
      title: 'FILLING THE CART',
      backgroundColor:'#ffffff',
      tintColor :'#333',
      borderBottomWidth: 1,
    },
}

export default connect(state =>({authenticated: true}))(FillingCart);