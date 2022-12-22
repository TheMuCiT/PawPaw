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
import {
  useFocusEffect,
  useIsFocused,
  useNavigation,
} from '@react-navigation/native';

//library
import {formatDistance} from 'date-fns';

//files
import usePetManageService from '../../services/PetManageService/PetManageService';

//assets
import Edit from '../../assets/icons/Edit';
import Delete from '../../assets/icons/DeletePet';
import {IPetData} from '../../types/AppTypes';
import {PetListNavigatorProp} from '../../types/navigation';

import RandomDog from '../../assets/images/randomDog.png';
import GradientText from '../GradientText/GradientText';
import {useEffect, useRef, useState} from 'react';
import {usePetContext} from '../../contexts/PetContext';

interface IPet {
  pet: IPetData;
}

const PetList = ({pet}: IPet) => {
  const navigation = useNavigation<PetListNavigatorProp>();
  const {DeletePet} = usePetManageService();
  const {dataChange, updateCount, count} = usePetContext();

  const {width} = useWindowDimensions();

  const [born, setBorn] = useState<string>('');
  const [last, setLast] = useState<boolean>(false);

  const [heightAnim] = useState(() => new Animated.Value(width - 120));
  const [marginAnim] = useState(() => new Animated.Value(20));

  useEffect(() => {
    heightAnim.setValue(width - 120);
    marginAnim.setValue(20);
  }, [dataChange]);

  useEffect(() => {
    let timeNow = new Date();
    setBorn(formatDistance(pet.age, timeNow));
  }, [pet.age]);

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

  useEffect(() => {
    if (count === 1) {
      setLast(true);
    } else {
      setLast(false);
    }
  }, [count]);

  const animation = () => {
    //size down
    Animated.timing(heightAnim, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: false,
    }).start();

    Animated.timing(marginAnim, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: false,
    }).start();
    //after animation

    if (last) {
      navigation.navigate('AddPet');
      updateCount(0);
    }

    DeletePet(pet.ID);
  };

  return (
    <Animated.View
      style={[styles.item, {height: heightAnim, marginBottom: marginAnim}]}>
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
          <Text style={styles.petAge}>{born}</Text>
        </View>
      </View>
    </Animated.View>
  );
};

export default PetList;
