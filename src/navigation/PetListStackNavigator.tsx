import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {PetListStackNavigatorParamList} from '../types/navigation';
import PetListScreen from '../screens/PetListScreen';
import UpdatePetScreen from '../screens/UpdatePetScreen';

const Stack = createNativeStackNavigator<PetListStackNavigatorParamList>();

const PetListStackNavigator = () => {
  return (
    <Stack.Navigator>
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
