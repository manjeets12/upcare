import React, {Component} from 'react';
import {Modal, StyleSheet,FlatList, Image, Text,ScrollView, TouchableOpacity, View, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

import styles from 'src/common/styles';
import {PLUS_ICON} from 'src/common/Images';

const customStyles = StyleSheet.create({
   sidePadding:{paddingLeft:15, paddingRight:15},
   borderBottom:{borderWidth:1, borderColor:'#e0e0e0'},
   leftItem:{flex:1,alignItems:'flex-start'},
   centerItem:{flex:1, alignItems:'center'},
   rightItem:{flex:1, alignItems:'flex-end'},
   itemTitleText:{paddingTop:5, fontSize:16},
   infoText:{color:'#9fa1aa', paddingBottom:10},
   colorIndictor:{height:30, width:60, borderRadius:20},
   radioOuterCircle:{height: 24,width: 24,borderRadius: 12,borderWidth: 2,borderColor: '#e0e0e0',alignItems: 'center',justifyContent: 'center',},
   radioInnerCircle:{height: 12,width: 12,borderRadius: 6, backgroundColor: '#3a81fa'},
   dropDownText:{flexDirection:'row', alignItems:'center', justifyContent:'space-between', paddingTop:10}
});

const OrderItem =(props)=>{
    let {name, item, price} = props;
    return(
        <View style={{paddingTop:10, paddingBottom:5}}>
              <Text style={{fontSize:20, color:'#9e9fa8'}}>{name}</Text>
              {item && (item.length >0) && item.map((obj, index)=>{
                 return <Text style={{fontSize:16, color:'#9e9fa8'}} key={index}>{obj}</Text>
              })}
              <Text style={styles.priceText}>{"€"+price}</Text>
        </View>
    );
}
export default class PlacingOrderModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false,
        };
        this.setModalVisible = this.setModalVisible.bind(this);
    }
   
    
    setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }

    render() {
	    let {modalVisible} = this.state;
        return (
            <View>
                <Modal
                    animationType={"slide"}
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {}}>
                    <View style={styles.modalOverlay}>
                        <View style={styles.modalContainer}>
            					         <View style={[customStyles.sidePadding,{paddingTop:15, paddingBottom:15}]}>
                                   <Text style={{fontSize:20, color:'#323940'}}>Placing Order</Text>
                                   <OrderItem 
                                    name ={"Polly Stone"}
                                    item ={["2x Seamless Cup - Basic Bra", "1x Elegance Lipo-Panty high, Ankle(EC/004)"]}
                                    price ={"134"}/>
                                   <OrderItem 
                                    name ={"Donald Matthews"}
                                    item ={["1s Sleevless Compression Tank Top"]}
                                    price ={"90"}/>

                                    <View style={customStyles.dropDownText}>
                                       <Text style={{fontSize:20, color:'#323940'}}>Choice of pharmacy</Text>
                                        <Image style={styles.ImageSize20}
                                        source={PLUS_ICON}/>
                                    </View>

                                    <View style={customStyles.dropDownText}>
                                       <Text style={{fontSize:20, color:'#323940'}}>Choice of bandagist</Text>
                                        <Image style={styles.ImageSize20}
                                        source={PLUS_ICON}/>
                                    </View>
                               </View>
                               
                               <View style={{flexDirection:'row', justifyContent:'space-around', alignItems:'center',borderTopWidth:2, borderTopColor:'#e0e0e0'}}>
                                    <TouchableOpacity onPress ={()=>this.setModalVisible(false)} 
                                      style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                                      <Text style={{color:'#b8b4ba', fontSize:18}}>Cancel</Text>
                                    </TouchableOpacity>
                                    <View style={{height:50,borderWidth:1, borderColor:'#e0e0e0'}}></View>
                                    <TouchableOpacity onPress ={()=>{}} 
                                       style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                                      <Text style={{color:'#5491fa', fontSize:18}}>Place</Text>
                                    </TouchableOpacity>
                              </View>
                        </View>
                    </View>
                </Modal>
                <TouchableOpacity onPress={()=>this.setModalVisible(true)} style={this.props.style}>
                    {this.props.children}
                </TouchableOpacity>
              </View>
        );
    }
}

