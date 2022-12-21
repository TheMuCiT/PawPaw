import {Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {format} from 'date-fns';

const useNewPetService = () => {
  const validateInput = (
    petName: string,
    breed: string,
    age: Date,
    gander: string,
  ) => {
    let validValue = true;
    if (petName.length < 2) {
      validValue = false;
      return false;
    } else if (breed.length < 2) {
      validValue = false;
      return false;
    } else if (gander !== 'Male' && gander != 'Female') {
      validValue = false;
      return false;
    }

    let time = new Date(format(age, 'yyyy-MM-dd'));
    let timeNow = new Date(format(new Date(), 'yyyy-MM-dd'));
    if (time > timeNow) {
      validValue = false;
      return false;
    }

    return true;
  };

  const saveImage = async (imageBase: string | undefined, count: number) => {
    try {
      if (imageBase) {
        await AsyncStorage.setItem(`image${count}`, imageBase);
      } else {
        await AsyncStorage.removeItem(`image${count}`);
      }
    } catch (e) {
      Alert.alert('Error ', (e as Error).message);
    }
  };

  return {validateInput, saveImage};
};

export default useNewPetService;
