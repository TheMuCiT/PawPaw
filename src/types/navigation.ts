import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RouteProp} from '@react-navigation/native';

export type RootNavigatorParamList = {
  FirstLogin: undefined;
  Home: undefined;
};

export type BottomTabNavigatorParamList = {
  HomeStack: undefined;
  PetListStack: undefined;
  AddPet: undefined;
  ViewPet: {id: number};
};

export type PetListStackNavigatorParamList = {
  PetList: undefined;
  UpdateItem: {id: number};
  AddPet: undefined;
};

export type MainScreenNavigatorProp = NativeStackNavigationProp<
  BottomTabNavigatorParamList,
  'HomeStack'
>;

export type NewPetScreenNavigatorProp = NativeStackNavigationProp<
  BottomTabNavigatorParamList,
  'AddPet'
>;

export type PetListNavigatorProp = NativeStackNavigationProp<
  PetListStackNavigatorParamList,
  'PetList'
>;

export type UpdatePetNavigatorProp = NativeStackNavigationProp<
  PetListStackNavigatorParamList,
  'UpdateItem'
>;

export type UpdatePetRouteProp = RouteProp<
  PetListStackNavigatorParamList,
  'UpdateItem'
>;

export type ViewPetRouteProp = RouteProp<
  BottomTabNavigatorParamList,
  'ViewPet'
>;
