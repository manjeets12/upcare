'use strict'

var{ combineReducers } = require('redux');

import nav from './navigator';


const rootReducer = combineReducers({
  nav,
});

export default rootReducer