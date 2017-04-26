import React, {Component} from 'react';
import {Modal, StyleSheet, Image, Text,ScrollView, TouchableHighlight, TouchableOpacity, View,ActivityIndicator,Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

import styles from 'src/common/styles';
import {ITEM1,SIZE_M, SIZE_XL, SIZE_XXL, DARK_OVAL, GROUP31, GROUP34,PLUS_ICON,MINUS_ICON,LEFT,RIGHT } from 'src/common/Images';

var customStyles = StyleSheet.create({
   sidePadding:{paddingLeft:15, paddingRight:15},
   borderBottom:{borderWidth:1, borderColor:'#e0e0e0'},
   leftItem:{flex:1,alignItems:'flex-start'},
   centerItem:{flex:1, alignItems:'center'},
   rightItem:{flex:1, alignItems:'flex-end'},
   itemTitleText:{paddingBottom:5, paddingLeft:5},
   infoText:{color:'#9fa1aa', paddingBottom:10},
   colorIndictor:{height:30, width:60, borderRadius:20}

});
export default class ItemDetailsModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false,
        };
        this.setModalVisible = this.setModalVisible.bind(this);
    }

    componentWillReceiveProps(nextProps){
     if(nextProps.modalVisible){
        this.setModalVisible(true);
     }
    }
    /*shouldComponentUpdate(nextProps, nextState){
        return (this.props.modalVisible != nextProps.modalVisible);
    }*/
    
   
    setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }

    render() {
	    let {modalVisible} = this.state;
        return (
                <Modal
                    animationType={"slide"}
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {}}>
                    <View style={styles.modalOverlay}>
                        <View style={styles.modalContainer}>
        					   <View style={[styles.centeredRow, customStyles.sidePadding,{paddingTop:15, paddingBottom:10}]}>
                                    <View style={{flex:3}}>
                                        <Image style={styles.ImageSize60}
                                            source={ITEM1}/>
                                    </View>
                                    <View style={{flex:9}}>
                                        <Text style={styles.nameText}>Classic Bra with Full Coverage / C-E Cups</Text>
                                    </View>
                               </View>
                               <Text style={[styles.priceText,customStyles.sidePadding]}>€20.00</Text>
                              <ScrollView> 
                                   <Text style={[customStyles.infoText,customStyles.sidePadding]}>BR is most commonly used for breast reduction techniques, although it is also a good choice for a large breasted woman undergoing any type of breast surgery. It was designed as a more full-coverage bra and is made of F7-certified fabric.</Text>
                                   <View style={customStyles.borderBottom}></View>
                                      <View style ={[customStyles.sidePadding, {paddingTop:10, paddingBottom:10}]}>
                                           <Text style={customStyles.itemTitleText}>Size</Text>
                                           <View style={styles.centeredRow}>
                                                <TouchableOpacity onPress ={()=>{}} style={customStyles.leftItem}>
                                                    <Image style={styles.ImageSize40}
                                                        source={MINUS_ICON}/>
                                                </TouchableOpacity>
                                                <View style={customStyles.centerItem}>
                                                    <Text style={styles.nameText}>M</Text>
                                                </View>
                                                <TouchableOpacity onPress ={()=>{}} style={customStyles.rightItem}>
                                                    <Image style={styles.ImageSize40}
                                                        source={PLUS_ICON}/>
                                                </TouchableOpacity>
                                           </View>
                                      </View>
                                      <View style={customStyles.borderBottom}></View>
                                      <View style ={[customStyles.sidePadding, {paddingTop:10, paddingBottom:10}]}>
                                           <Text style={customStyles.itemTitleText}>Color</Text>
                                           <View style={styles.centeredRow}>
                                                <TouchableOpacity onPress ={()=>{}} style={customStyles.leftItem}>
                                                    <Image style={styles.ImageSize40}
                                                        source={LEFT}/>
                                                </TouchableOpacity>
                                                <View style={customStyles.centerItem}>
                                                     <View style={[customStyles.colorIndictor, {backgroundColor:'#d9d2c6'}]}></View>
                                                </View>
                                                <TouchableOpacity onPress ={()=>{}} style={customStyles.rightItem}>
                                                    <Image style={styles.ImageSize40}
                                                        source={RIGHT}/>
                                                </TouchableOpacity>
                                           </View>
                                      </View>
                                      <View style={customStyles.borderBottom}></View>
                                      <View style ={[customStyles.sidePadding, {paddingTop:10, paddingBottom:10}]}>
                                           <Text style={customStyles.itemTitleText}>Quantity</Text>
                                           <View style={styles.centeredRow}>
                                                <TouchableOpacity onPress ={()=>{}} style={customStyles.leftItem}>
                                                    <Image style={styles.ImageSize40}
                                                        source={MINUS_ICON}/>
                                                </TouchableOpacity>
                                                <View style={customStyles.centerItem}>
                                                    <Text style={styles.nameText}>1</Text>
                                                </View>
                                                <TouchableOpacity onPress ={()=>{}} style={customStyles.rightItem}>
                                                    <Image style={styles.ImageSize40}
                                                        source={PLUS_ICON}/>
                                                </TouchableOpacity>
                                           </View>
                                      </View>
                              </ScrollView>
                              <View style={{flexDirection:'row', justifyContent:'space-around', alignItems:'center',borderTopWidth:2, borderTopColor:'#e0e0e0'}}>
                                    <TouchableOpacity onPress ={()=>this.setModalVisible(false)} 
                                      style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                                      <Text style={{color:'#b8b4ba', fontSize:18}}>Cancel</Text>
                                    </TouchableOpacity>
                                    <View style={{height:50,borderWidth:1, borderColor:'#e0e0e0'}}></View>
                                    <TouchableOpacity onPress ={()=>{}} 
                                       style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                                      <Text style={{color:'#5491fa', fontSize:18}}>Add to Cart</Text>
                                    </TouchableOpacity>
                              </View>
                        </View>
                    </View>
                </Modal>
        );
    }
}

