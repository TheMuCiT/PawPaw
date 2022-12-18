import {
  View,
  Text,
  Image,
  Pressable,
  Alert,
  Animated,
  useWindowDimensions,
} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

//files
import usePetManageService from '../../services/PetManageService/PetManageService';

//assets
import Edit from '../../assets/icons/Edit';
import Delete from '../../assets/icons/DeletePet';
import {IPetData} from '../../types/AppTypes';
import {PetListNavigatorProp} from '../../types/navigation';

import RandomDog from '../../assets/images/randomDog.png';
import GradientText from '../GradientText/GradientText';
import {useRef, useState} from 'react';

interface IPet {
  pet: IPetData;
}

const PetList = ({pet}: IPet) => {
  const navigation = useNavigation<PetListNavigatorProp>();
  const {DeletePet} = usePetManageService();

  const {width} = useWindowDimensions();

  const heightAnim = useState(new Animated.Value(width - 120))[0];

  const deleteItem = () => {
    Alert.alert('Warning', `Do you really want to delete ${pet.name}?`, [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'OK',
        onPress: () => animation(),
      },
    ]);
  };

  const EditItem = () => {
    navigation.navigate('UpdateItem', {id: pet.id});
  };

  const animation = () => {
    //size down
    Animated.timing(heightAnim, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: false,
    }).start();
    //after animation
    //DeletePet(pet.id)
  };

  return (
    <Animated.View style={[styles.item, {height: heightAnim}]}>
      <Image
        source={pet.image ? {uri: pet.image} : RandomDog}
        style={styles.BCImage}
      />
      {pet.image && <View style={styles.BCImageCover} />}

      <View style={styles.content}>
        <View style={styles.options}>
          <Pressable onPress={EditItem} style={styles.edit}>
            <Edit />
          </Pressable>
          <Pressable onPress={deleteItem} style={styles.edit}>
            <Delete />
          </Pressable>
        </View>
        <View style={styles.nameContainer}>
          <GradientText name={pet.name} style={styles.petName} offset={0.3} />
          <Text style={styles.petAge}>5 Months old</Text>
        </View>
      </View>
    </Animated.View>
  );
};

export default PetList;
