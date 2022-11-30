import {View, Text, Image, Pressable} from 'react-native';
import styles from './styles';

//files
import usePetManageService from '../../services/PetManageService/PetManageService';

//assets
import Edit from '../../assets/icons/Edit';
import randomDog from '../../assets/images/randomDog.png';
import {IPetData} from '../../types/AppTypes';

interface IPet {
  pet: IPetData;
}

const PetList = ({pet}: IPet) => {
  const {EditPet, DeletePet} = usePetManageService();

  const deleteItem = () => {
    console.warn('delete');
    DeletePet(pet.id);
  };

  const EditItem = () => {
    console.warn('edit');
    EditPet(pet.id);
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
        <Pressable
          onPress={deleteItem}
          style={[styles.edit, {backgroundColor: 'red'}]}>
          <Edit />
        </Pressable>
      </Pressable>
    </View>
  );
};

export default PetList;
