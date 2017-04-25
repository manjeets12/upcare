'use strict';

import {StyleSheet, Dimensions,} from 'react-native';

const { width, height } = Dimensions.get('window');

const styles=StyleSheet.create({
	container: {
		flex: 1,
        backgroundColor:'#f3f4f7'
	},
    centeredBody:{
        flex:1,
        justifyContent:'center', 
        alignItems:'center'
    },
    bgCoverImage:{
        flex: 1,
        width:width, 
        resizeMode:"cover", 
        justifyContent:'center'
    },
	fullCover:{
		width:width,
		height:height
	},
	centering:{
		justifyContent:'center',
		alignItems:'center'
	},

    /*custom header styling*/
    headerContainer:{
        width:width, 
        height:80, 
        backgroundColor:'#ffffff',
        paddingLeft:10,
        paddingRight:10,
    },
    headerShadow:{
        elevation:10,
        shadowOffset:{width: 0, height: 5},
        shadowOpacity:.4,
        shadowRadius: 4,
    },
    middleContainer:{
        flex:8,
        justifyContent:'center',
        alignItems:'center'
    },
    sideContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },

    searchBarConatiner:{
        flexDirection:'row',
        backgroundColor:'#ffffff', 
        borderTopWidth:1, 
        borderTopColor:'#ebeaec', 
        padding:10, 
        justifyContent:'center', 
        alignItems:'center'
    },
    /*custom header styling*/



	formInput:{
        height: 45, 
        fontSize:16,
        color:'#FFF',
        backgroundColor:'#83b6fd',
        borderColor:'#FFF',
        marginTop:5, 
        marginBottom:5,
        paddingLeft:50,
        borderRadius:5, 
        borderWidth:1,
    },
    formIcon:{
        position:'absolute', 
        top:10, 
        left:10,
        height:30, 
        width:30,
        resizeMode:"contain",
    },
	fullWidthBtn:{
		marginTop:10,
		marginBottom:10,
        padding:10, 
        borderRadius:5,
        justifyContent:'center', 
        alignItems:'center', 
        borderWidth:1, 
        borderColor:'transparent',
        backgroundColor:'#3BD5B3'
    },
    fullNoMarginBtn:{
        padding:10,
        justifyContent:'center', 
        alignItems:'center', 
        borderWidth:1,
        borderColor:'transparent',
        backgroundColor:'#3BD5B3'
    },
    boldText:{
    	fontWeight:'bold'
    },
    textButton:{
        alignItems:'flex-end', 
        justifyContent:'flex-end'
    },
    customShadow:{
        borderRadius:3, 
        shadowColor:'#f0f1f4',
        shadowOffset:{width: 0, height: 5},
        shadowOpacity:.4,
        shadowRadius: 4, 
        elevation:4
    },
    listItem:{
        backgroundColor:'#ffffff', 
        margin:5,
        borderRadius:3, 
        shadowColor:'#f0f1f4',
    },
    patientRow:{
        flex:1, 
        flexDirection:'row', 
        alignItems:'center',
        justifyContent:'space-between',
        padding:15
    },
    ImageSize10:{
        width:10, 
        height:10, 
        resizeMode:'contain'
    },
    ImageSize15:{width:15, height:15, resizeMode:'contain'},
    ImageSize20:{
        width:20, 
        height:20, 
        resizeMode:'contain'
    },
    ImageSize25:{
        width:25, 
        height:25, 
        resizeMode:'contain'
    },
    ImageSize30:{
        width:30, 
        height:30, 
        resizeMode:'contain'
    },
    ImageSize40:{
        width:40, 
        height:40, 
        resizeMode:'contain'
    },
    ImageSize50:{
        width:50, 
        height:50, 
        resizeMode:'contain'
    },
    ImageSize60:{
        width:60, 
        height:60, 
        resizeMode:'cover'
    },

    /*catalog screen styles*/
    catalogContainer:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
    },

    catalog:{
        backgroundColor:'#ffffff',
        justifyContent:'center',
        alignItems:'center',
        padding:10,
        paddingTop:20,
        paddingBottom:20,
        margin:10,
    },
    catalogImage:{
        width:0.35*width,
        height:0.35*width,
        resizeMode:'contain'
    },
    fabButtonRight60:{
        position:'absolute',
        right:10, 
        bottom:10 ,
        width:60, 
        height:60, 
        borderRadius:30
    },

    /*3 item custom row*/
      rowContainer: {
        flexDirection:'row', 
        alignItems:'center', 
        padding:10
      },
      rowLeftPart:{
        flex:2, 
        justifyContent:'center', 
        alignItems:'center'
      },
      rowMiddlePart:{
        flex:7, 
        justifyContent:'center', 
        alignItems:'flex-start'
      },
      rowRightPart:{
        flex:3, 
        justifyContent:'center', 
        alignItems:'center'
      },
      nameText:{fontSize:20, color:'#101820', fontWeight:'400'},
      orderForText:{fontSize:16, color:'#9fa1aa'}

   
});

export default styles;