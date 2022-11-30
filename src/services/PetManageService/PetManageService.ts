import React from 'react';
import {Alert} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {usePetContext} from '../../contexts/PetContext';

const usePetManageService = () => {
  const {count, updateCount} = usePetContext();

  const EditPet = (id: number) => {};

  const DeletePet = async (id: number) => {
    if (count - 1 === id) {
      updateCount(count - 1);
    } else {
      for (let index = id + 1; index < count; index++) {
        try {
          let name = await AsyncStorage.getItem(`petName${index - 1}`);
          await AsyncStorage.setItem(`petName${index}`, name || '');

          let age = await AsyncStorage.getItem(`age${index - 1}`);
          await AsyncStorage.setItem(`age${index}`, age || '');

          let image = await AsyncStorage.getItem(`image${index - 1}`);
          await AsyncStorage.setItem(`image${index}`, image || '');
        } catch (e) {
          Alert.alert('Error ', (e as Error).message);
        }
      }

      updateCount(count - 1);
    }
  };

  return {EditPet, DeletePet};
};

export default usePetManageService;
