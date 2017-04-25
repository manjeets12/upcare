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
import {ITEM1,SIZE_M, SIZE_XL, SIZE_XXL, DARK_OVAL, GROUP31, GROUP34 } from 'src/common/Images';

const customStyles=StyleSheet.create({
  container: {
  },
  leftContainer:{
    flex:3, 
    justifyContent:'center', 
    alignItems:'flex-start'
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
  itemSizeContainer:{
    position:'absolute',
    bottom:-5,
    left:-5,
    width:70, 
    flexDirection:'row', 
    justifyContent:'space-between'
  },
  nameText:{fontSize:16, color:'#585e63'},
  quantityText:{fontSize:20, color:'#9d9fa8', fontWeight:'400'},
  priceText:{fontSize:20, color:'#4487fa', fontWeight:'400'}

});


export const CartItem =(props)=>{
	  let {id, name, price, quantity, size} =props.item;
    return (
         <TouchableOpacity  
          onPress={()=>{}}
          style={[styles.listItem, styles.customShadow]} elevation={4}>
          <View style={styles.patientRow}>
              <View style={customStyles.leftContainer}>
                  <Image style={styles.ImageSize60}
                    source={ITEM1}/>
                  {(quantity >0)&&
                     <View style={customStyles.itemSizeContainer}>
                          <Image style={styles.ImageSize25}
                          source={(size==="XXL")?SIZE_XXL:(size==="XL")?SIZE_XL:SIZE_M}/>
                          <Image style={styles.ImageSize25}
                          source={DARK_OVAL}/>
                     </View> 
                  }
                </View>
                <View style={customStyles.middleContainer}>
                  <Text style={customStyles.nameText}>{(name.length <= 25)?name:name.substring(0,21)+" ..."}</Text>
                  <View style={{flexDirection:'row'}}>
                    {(quantity >0) &&<Text style={customStyles.quantityText}>{""+quantity+"X | "}</Text>}
                    <Text style={customStyles.priceText}>{""+(quantity || 1)*price}</Text>
                  </View>
                </View>
                <View style={customStyles.rightContainer}>
                  <Image style={styles.ImageSize40}
                    source={(quantity >0)?GROUP34:GROUP31}/>
                </View>
          </View>
        </TouchableOpacity>
    );
}
CartItem.propTypes={
    item:React.PropTypes.object.isRequired,
};
CartItem.defaultProps = {
  item: {"id":1, "name":"Open Buttock - Above-the-Knee Girdle", "price":300, "quantity":1, "size":'M'},
};