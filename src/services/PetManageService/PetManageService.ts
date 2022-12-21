import React, {useState} from 'react';
import {Alert} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {usePetContext} from '../../contexts/PetContext';

const usePetManageService = () => {
  const {count, updateCount} = usePetContext();

  const DeletePet = async (id: string) => {
    let position = -1;
    for (let index = 0; index < count; index++) {
      try {
        await AsyncStorage.getItem(`id${index}`).then(e => {
          if (e === id) {
            position = index;
          }
        });
      } catch (e) {
        Alert.alert('Error ', (e as Error).message);
      }
    }

    if (position === -1) {
      console.warn('return');
      return;
    }

    if (count - 1 === position) {
      updateCount(count - 1);
    } else {
      for (let index = position + 1; index < count; index++) {
        try {
          await AsyncStorage.getItem(`petName${index}`).then(async e => {
            await AsyncStorage.setItem(`petName${index - 1}`, e || '');
          });

          await AsyncStorage.getItem(`gender${index}`).then(async e => {
            await AsyncStorage.setItem(`gender${index - 1}`, e || '');
          });

          await AsyncStorage.getItem(`age${index}`).then(async e => {
            await AsyncStorage.setItem(`age${index - 1}`, e || '');
          });

          await AsyncStorage.getItem(`id${index}`).then(async e => {
            await AsyncStorage.setItem(`id${index - 1}`, e || '');
          });

          await AsyncStorage.getItem(`image${index}`).then(async e => {
            await AsyncStorage.setItem(`image${index - 1}`, e || '');
          });
        } catch (e) {
          Alert.alert('Error ', (e as Error).message);
        }
      }

      updateCount(count - 1);
    }
  };

  return {DeletePet};
};

export default usePetManageService;
