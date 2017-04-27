import React, {Component} from 'react';
import {Modal, StyleSheet,FlatList, Image, Text,ScrollView, TouchableOpacity, View, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

import styles from 'src/common/styles';
import {ITEM1,SIZE_M, SIZE_XL, SIZE_XXL, DARK_OVAL, GROUP31, GROUP34,PLUS_ICON,MINUS_ICON,LEFT,RIGHT } from 'src/common/Images';

const patients = [
{"id":1, "name":"Polly Stone", "disease":"Breast Augumentation", "email":"pollystone@gmail.com", "phone":"1234567890"},
{"id":2, "name":"Manjeet Singh", "disease":"Mind Augumentation", "email":"pollystone@gmail.com", "phone":"1234567890"},
{"id":3, "name":"Tan Yong", "disease":"Hand Augumentation", "email":"pollystone@gmail.com", "phone":"1234567890"},
{"id":4, "name":"Prince", "disease":"Chest Augumentation", "email":"pollystone@gmail.com", "phone":"1234567890"},
{"id":5, "name":"Nannie Flyod", "disease":"Hair Augumentation", "email":"pollystone@gmail.com", "phone":"1234567890"},
{"id":6, "name":"Kate Mack", "disease":"Breast Augumentation", "email":"pollystone@gmail.com", "phone":"1234567890"},
{"id":7, "name":"Anthony Dev", "disease":"Breast Augumentation", "email":"pollystone@gmail.com", "phone":"1234567890"},
{"id":8, "name":"Rahul Arora", "disease":"Breast Augumentation", "email":"pollystone@gmail.com", "phone":"1234567890"},
{"id":9, "name":"Virat SIngh", "disease":"Breast Augumentation", "email":"pollystone@gmail.com", "phone":"1234567890"},
{"id":10, "name":"Sanjana Pandey", "disease":"Breast Augumentation", "email":"pollystone@gmail.com", "phone":"1234567890"},
{"id":11, "name":"Marci Barker", "disease":"Breast Augumentation", "email":"pollystone@gmail.com", "phone":"1234567890"},
{"id":12, "name":"Ram kumar", "disease":"Breast Augumentation", "email":"pollystone@gmail.com", "phone":"1234567890"},
{"id":13, "name":"Ritu", "disease":"Breast Augumentation", "email":"pollystone@gmail.com", "phone":"1234567890"},
{"id":14, "name":"Polly STone", "disease":"Breast Augumentation", "email":"pollystone@gmail.com", "phone":"1234567890"},
{"id":15, "name":"Kamaran Akamal", "disease":"Breast Augumentation", "email":"pollystone@gmail.com", "phone":"1234567890"},
{"id":16, "name":"Sonu Shok", "disease":"Breast Augumentation", "email":"pollystone@gmail.com", "phone":"1234567890"},
{"id":17, "name":"Ingrid Backa", "disease":"Breast Augumentation", "email":"pollystone@gmail.com", "phone":"1234567890"},
{"id":18, "name":"Prince", "disease":"Breast Augumentation", "email":"pollystone@gmail.com", "phone":"1234567890"},
{"id":19, "name":"Kate Mack", "disease":"Breast Augumentation", "email":"pollystone@gmail.com", "phone":"1234567890"},
{"id":20, "name":"Mack Book", "disease":"Breast Augumentation", "email":"pollystone@gmail.com", "phone":"1234567890"},
];

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
   radioInnerCircle:{height: 12,width: 12,borderRadius: 6, backgroundColor: '#3a81fa'}
});

const RadoiButton =(props)=>{
    return(
        <TouchableOpacity onPress={props.toggleSelction}>
          <View style={[customStyles.radioOuterCircle, props.style]}>
            {props.selected && <View style={customStyles.radioInnerCircle}/>}
          </View>
        </TouchableOpacity>
    );
}
export default class ChoosePatientModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false,
            selected:{}
        };
        this.setModalVisible = this.setModalVisible.bind(this);
        this.toggleRadioButton = this.toggleRadioButton.bind(this);
    }
    toggleRadioButton(item){
        this.setState((oldState) => ({
        selected: { // New instance breaks `===`
          //...oldState.selected, // copy old data
          [item.id]: !oldState.selected[item.id], // toggle
        }}));
    }

    renderItem({item, index}){
      let {id, name, disease, email, phone} = item;
      let selected=!!this.state.selected[item.id]; // renderItem depends on state
      
      return(
          <View style={{flexDirection:'row',alignItems:'center',paddingTop:10}}>
              <View style={{flex:9,alignItems:'flex-start'}}>
                <Text style={{fontSize:18, color:'#323940'}}>{name}</Text>
                <Text style={{fontSize:18, color:'#9e9fa8'}}>{disease}</Text>
              </View>
              <View style={{flex:2, alignItems:'flex-end'}}>
                  <RadoiButton selected={selected} toggleSelction ={()=>this.toggleRadioButton(item)}/>
              </View>
          </View>
      );
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
            					         <View style={[styles.centeredRow, customStyles.sidePadding,{paddingTop:15, paddingBottom:15,borderBottomWidth:2, borderBottomColor:'#e0e0e0'}]}>
                                    <View style={{flex:3}}>
                                        <Image style={styles.ImageSize60}
                                            source={ITEM1}/>
                                    </View>
                                    <View style={{flex:9}}>
                                        <Text style={styles.nameText}>Classic Bra with Full Coverage / C-E Cups</Text>
                                    </View>
                               </View>
                               <Text style={[customStyles.sidePadding, customStyles.itemTitleText]}>Choose Patient</Text>
                                {patients && (patients.length !=0) &&
                                   <FlatList
                                       style={customStyles.sidePadding}
                                       data={patients}
                                       renderItem={this.renderItem.bind(this)}
                                       ItemSeparatorComponent={(index) => <View key={index} style={styles.separator}></View>}
                                       legacyImplementation={false}
                                       initialNumToRender={10}
                                       selected ={this.state.selected}
                                     />
                                }

                               <View style={{flexDirection:'row', justifyContent:'space-around', alignItems:'center',borderTopWidth:2, borderTopColor:'#e0e0e0'}}>
                                    <TouchableOpacity onPress ={()=>this.setModalVisible(false)} 
                                      style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                                      <Text style={{color:'#b8b4ba', fontSize:18}}>Cancel</Text>
                                    </TouchableOpacity>
                                    <View style={{height:50,borderWidth:1, borderColor:'#e0e0e0'}}></View>
                                    <TouchableOpacity onPress ={()=>{}} 
                                       style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                                      <Text style={{color:'#5491fa', fontSize:18}}>To item</Text>
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

