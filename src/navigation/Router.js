
'use strict';


import {
  createRouter,
} from '@expo/ex-navigation';

import Dashboard from 'src/screens/dashboard';
import Authentication from 'src/screens/authentication';
import TabNavigator from './TabNavigator';
import CatalogCategories from 'src/screens/catalogCategories'
import PatientProfile from 'src/screens/patient/profile';
import EditPatient from 'src/screens/patient/edit';
import ChooseCategory from 'src/screens/patient/chooseCategory';
import FillingCart from 'src/screens/patient/fillingCart'



export default createRouter(() => ({
  authentication: () => Authentication,
  tabNavigator:()=>TabNavigator,
  dashboard: () => Dashboard,
  catalogCategories:()=>CatalogCategories,
  patientProfile:()=>PatientProfile,
  editPatient:()=>EditPatient,
  chooseCategory:()=>ChooseCategory,
  fillingCart:()=>FillingCart
}), {
  ignoreSerializableWarnings: true,
});