import {View, Text, Image} from 'react-native';
import styles from './styles';

import Edit from '../../assets/icons/Edit';
import randomDog from '../../assets/images/randomDog.png';
import {IPetData} from '../../types/AppTypes';

interface IPet {
  pet: IPetData;
}

const PetList = ({pet}: IPet) => {
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
      <View style={styles.right}>
        <View style={styles.edit}>
          <Edit />
        </View>
      </View>
    </View>
  );
};

export default PetList;
