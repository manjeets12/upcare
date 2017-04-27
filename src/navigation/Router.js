
'use strict';


import {
  createRouter,
} from '@expo/ex-navigation';

import Dashboard from 'src/screens/dashboard';
import Authentication from 'src/screens/authentication';
import TabNavigator from './TabNavigator';
import CatalogCategories from 'src/screens/catalogCategories'
import PatientProfile from 'src/screens/patient/profile';
import ChooseCategory from 'src/screens/patient/chooseCategory';
import FillingCart from 'src/screens/patient/fillingCart';
import Category from 'src/screens/category';
import EditPatient from 'src/screens/backOffice/edit';
import Intervention from 'src/screens/backOffice/intervention';
import ChooseDate from 'src/screens/backOffice/chooseDate';



export default createRouter(() => ({
  authentication: () => Authentication,
  tabNavigator:()=>TabNavigator,
  dashboard: () => Dashboard,
  catalogCategories:()=>CatalogCategories,
  patientProfile:()=>PatientProfile,
  chooseCategory:()=>ChooseCategory,
  fillingCart:()=>FillingCart,
  category:()=>Category,
  editPatient:()=>EditPatient,
  intervention:()=>Intervention,
  chooseDate:()=>ChooseDate
}), {
  ignoreSerializableWarnings: true,
});