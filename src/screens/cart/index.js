'use strict';

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
import {Header} from 'src/components/header';
import {CartItem} from 'src/components/cartItem'

const items = [
{"id":1, "name":"Open Buttock - Above-the-Knee Girdle", "price":300, "quantity":1, "size":'M'},
{"id":2, "name":"Seamless Cup -Basic Bra", "price":300, "quantity":1, "size":'XL'},
{"id":3, "name":"Implant Stabilizer Band", "price":150, "quantity":1, "size":'M'},
{"id":4, "name":"Seamless Cup -Basic Bra", "price":300, "quantity":2, "size":'M'},
{"id":5, "name":"3/4 -Length Sleeve Compre", "price":150, "quantity":1, "size":'XXL'},
];

import {PATIENT_ICON,PATIENT_WHITE_OUTLINE, PLUS_SHAPE, GROUP31, GROUP34 } from 'src/common/Images';

const OrderForElement =(props)=>{
   let {name} = props;
    return (
          <View style={styles.rowContainer}>
                <View style={styles.rowLeftPart}>
                  <View style={{width:40, height:40,backgroundColor:'#e2e4ed', borderRadius:20}}>
                      <Image style={[styles.ImageSize40,]}
                        source={PATIENT_WHITE_OUTLINE}/>
                  </View>
                </View>
                <View style={styles.rowMiddlePart}>
                  <Text style={{fontSize:16, color:'#9fa1aa'}}>Ordering for</Text>
                  <Text style={{fontSize:20, color:'#101820', fontWeight:'400'}}>{(name.length <= 15)?name:name.substring(0,11)+" ..."}</Text>
                </View>
                <TouchableOpacity onPress ={()=>{}} 
                  style={[styles.rowRightPart,styles.fullNoMarginBtn,{flexDirection:'row', borderRadius:30, padding:5, justifyContent:'space-around'}]}>
                  <Image style={styles.ImageSize15}
                    source={PLUS_SHAPE}/>
                  <Text style={{color:'#FFF', fontSize:18}}>ADD</Text>
                </TouchableOpacity>
          </View>
    );
}
OrderForElement.propTypes={
    name:React.PropTypes.string.isRequired,
};
OrderForElement.defaultProps = {
  name: "",
};

class Cart extends Component {
  renderItem({item, index}){
      let {id, name, price, quantity} = item;
      return(
         <CartItem item={item}/>
      );
  } 

  render() {
    return (
      <View style={styles.container}>
          <Header title="CART" />

          <ScrollView style={{padding:10}}>
            
            <OrderForElement name={"Polly Stone"}/>
            {items && (items.length !=0) &&
               <FlatList
                   data={items}
                   renderItem={this.renderItem.bind(this)}
                   ItemSeparatorComponent={(index) => <View key={index} style={styles.separator}></View>}
                   legacyImplementation={false}
                 />
            }
           
            <OrderForElement name={"Donald Matthewsshdhdhdjdhdhdh"}/>
            {items && (items.length !=0) &&
               <FlatList
                   style={{paddingBottom:50}}
                   data={items}
                   renderItem={this.renderItem.bind(this)}
                   ItemSeparatorComponent={(index) => <View key={index} style={styles.separator}></View>}
                   legacyImplementation={false}
                 />
            }
          </ScrollView>
          <TouchableOpacity onPress={()=>{}}
               style={styles.fullNoMarginBtn}>
                <Text style={[styles.boldText, {color:'#FFF', fontSize:20}]}>PLACE ORDER</Text>
          </TouchableOpacity>
      </View>
    );
  }
}
Cart.route = {
    navigationBar: {
      visible: false,
    },
}


export default connect(state =>({authenticated: true}))(Cart);



