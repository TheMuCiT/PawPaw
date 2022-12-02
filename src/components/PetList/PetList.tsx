import {View, Text, Image, Pressable, Alert} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

//files
import usePetManageService from '../../services/PetManageService/PetManageService';

//assets
import Edit from '../../assets/icons/Edit';
import Delete from '../../assets/icons/DeletePet';
import randomDog from '../../assets/images/randomDog.png';
import {IPetData} from '../../types/AppTypes';
import {PetListNavigatorProp} from '../../types/navigation';

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
      <View style={styles.left}>
        <Image
          source={pet.image ? {uri: pet.image} : randomDog}
          style={styles.imageIMG}
        />
        <View style={styles.name}>
          <Text style={styles.petName}>{pet.name}</Text>
          <Text style={styles.petAge}>5 Months old</Text>
        </View>
      </View>
      <Pressable onPress={EditItem} style={styles.right}>
        <View style={styles.edit}>
          <Edit />
        </View>
        <Pressable onPress={deleteItem} style={styles.edit}>
          <Delete />
        </Pressable>
      </Pressable>
    </View>
  );
};

export default PetList;
