'use strict';

import React, {Component} from 'react';
import {Linking, Alert, NetInfo, Platform} from 'react-native';
import { NavigationActions} from 'react-navigation';

var api = {
    
    isAndroid(){
        return (Platform.OS === 'android');
    },

    resetRouteStack(dispatch, route){
        let resetAction = NavigationActions.reset({
          index: 0,
          actions: [
            NavigationActions.navigate({ routeName: route})
          ]
        });
        dispatch(resetAction);
    },
    
    
    openURL(user){
        try{
                Linking.canOpenURL(user).then(supported => {
                if (supported) {
                  Linking.openURL(user);
                } else {
                  console.log('Please try again letter');
                }
              });
            }
           catch(error){
            console.log(error);
           }
    },
    validateEmailAddress(email) {
            let regex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
            if (regex.test(email)) {
                return true;
            } else {
                return false;
            }
    },
   
}

export default api;



