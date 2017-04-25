'use strict'

import {AppNavigator} from 'src/containers/AppNavigator';
import { NavigationActions} from 'react-navigation';

function nav(state, action){
  return AppNavigator.router.getStateForAction(action, state) || state;
}
export default nav;
