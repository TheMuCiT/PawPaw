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
  Settings: undefined;
};

export type PetListStackNavigatorParamList = {
  PetList: undefined;
  UpdateItem: {id: number};
};

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
