import {useState} from 'react';
import {Alert, Image} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import {usePetContext} from '../../contexts/PetContext';
import {IPetData} from '../../types/AppTypes';

const useMainScreenService = () => {
  const {count} = usePetContext();
  const [petData, setPetData] = useState<Array<IPetData>>([]);

  const ReadData = async () => {
    setPetData([]);
    let name = '',
      breed = '',
      image = undefined,
      age = new Date();
    for (let index = 0; index < count; index++) {
      try {
        const result = await AsyncStorage.getItem(`petName${index}`);
        if (result) name = result;

        const ageString = await AsyncStorage.getItem(`age${index}`);
        age = new Date(ageString ? ageString : '');

        const imageResult = await AsyncStorage.getItem(`image${index}`);
        if (imageResult) {
          image = 'data:image/png;base64,' + imageResult;
        } else {
          image = undefined;
        }

        petData.push({name, breed: '', age, image: ''});
      } catch (e) {
        Alert.alert('Error ', (e as Error).message);
      }
    }

    return petData;
  };

  return {ReadData};
};

export default useMainScreenService;
