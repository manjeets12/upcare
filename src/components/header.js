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

import styles from 'src/common/styles';
const statusBarHeight = StatusBar.currentHeight || 20;

const {height, width} = Dimensions.get('window');
import {SEARCH_ICON} from 'src/common/Images';


export const Header =(props)=>{
	let {title, isBackButton,rightIcon,renderRightIcon, renderLfetIcon} =props;
    return (
         <View style={[styles.headerContainer, styles.headerShadow]}>
            <View style={{height:statusBarHeight}}></View>
            <View style={{flex:1,flexDirection:'row', alignItems:'center'}}>
                <View style={styles.sideContainer}>
                    {renderLfetIcon()}
                 </View>
                 <View style={styles.middleContainer}>
                    <Text style={[styles.boldText]}>{title}</Text>
                 </View>
                 <View style={styles.sideContainer}>
                    {renderRightIcon()}
                 </View>
            </View>
        </View>
    );
}
Header.propTypes={
    title:React.PropTypes.string.isRequired,
    rightIcon:React.PropTypes.string,
    isBackButton:React.PropTypes.bool,
    renderRightIcon:React.PropTypes.func,
    renderLfetIcon:React.PropTypes.func,
};
Header.defaultProps = {
  title: '',
  isBackButton:true,
  renderRightIcon:()=>{},
  renderLfetIcon:() =>{}
};

export const SearchBar =(props)=>{
    return(
        <View style={[styles.headerShadow, styles.searchBarConatiner]}>
           <Image style={{width:20, height:20, resizeMode:'contain'}}
                source={SEARCH_ICON}/>
            <Text style={{fontSize:18, color:'#9e9fa8', paddingLeft:10}}>Research</Text>
        </View>
    )
}