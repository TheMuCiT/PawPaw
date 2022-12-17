import {View, Text, Image, Pressable, Alert} from 'react-native';
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

interface IPet {
  pet: IPetData;
}

const PetList = ({pet}: IPet) => {
  const navigation = useNavigation<PetListNavigatorProp>();
  const {DeletePet} = usePetManageService();

  const deleteItem = () => {
    Alert.alert('Warning', `Do you really want to delete ${pet.name}?`, [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'OK',
        onPress: () => DeletePet(pet.id),
      },
    ]);
  };

  const EditItem = () => {
    navigation.navigate('UpdateItem', {id: pet.id});
  };

  return (
    <View style={styles.item}>
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
    </View>
  );
};

export default PetList;
