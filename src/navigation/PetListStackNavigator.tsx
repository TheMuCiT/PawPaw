import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {PetListStackNavigatorParamList} from '../types/navigation';
import PetListScreen from '../screens/PetListScreen';
import UpdatePetScreen from '../screens/UpdatePetScreen';
import {View} from 'react-native';

const Stack = createNativeStackNavigator<PetListStackNavigatorParamList>();

const PetListStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        animation: 'slide_from_bottom',
      }}>
      <Stack.Screen
        name="PetList"
        component={PetListScreen}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="UpdateItem"
        component={UpdatePetScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default PetListStackNavigator;
