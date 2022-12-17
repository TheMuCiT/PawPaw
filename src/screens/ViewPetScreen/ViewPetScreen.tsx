import {useEffect, useState} from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import styles from './styles';

//library
import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useRoute} from '@react-navigation/native';
import {addDays, format, formatDistance, intervalToDuration} from 'date-fns';
import DropShadow from 'react-native-drop-shadow';

//files
import colors from '../../theme/colors';
import {ViewPetRouteProp} from '../../types/navigation';

//assets
import BackgroundLogo from '../../assets/icons/BackgroundLogo';
import LogoList from '../../assets/icons/LogoList';
import Swipe from '../../assets/icons/Swipe';
import RandomDog from '../../assets/images/randomDog.png';
import swipe from '../../assets/images/swipe.png';
import testBox from '../../assets/images/testBox.png';
import GradientText from '../../components/GradientText/GradientText';

const ViewPetScreen = () => {
  const route = useRoute<ViewPetRouteProp>();
  const {id} = route.params;

  const [petName, setPetName] = useState<string>('');
  const [breed, setBreed] = useState<string>('');
  const [age, setAge] = useState(new Date());
  const [gender, setGender] = useState<string>('');
  const [image, setImage] = useState<undefined | string>(undefined);

  const [born, setBorn] = useState<string>('');

  const readData = async () => {
    const petName = await AsyncStorage.getItem(`petName${id}`);
    const petAge = await AsyncStorage.getItem(`age${id}`);
    const petImage = await AsyncStorage.getItem(`image${id}`);
    const petBreed = await AsyncStorage.getItem(`breed${id}`);
    const petGender = await AsyncStorage.getItem(`gender${id}`);

    return {petName, petAge, petImage, petBreed, petGender};
  };

  useEffect(() => {
    const callData = async () => {
      const result = await readData();
      setPetName(result.petName || '');
      setBreed(result.petBreed || '');
      setAge(new Date(result.petAge || ''));
      setImage(result.petImage || undefined);
      setGender(result.petGender || '');
    };

    callData();
  }, [id]);

  useEffect(() => {
    let timeNow = new Date();

    setBorn(formatDistance(age, timeNow));
  }, [age]);

  return (
    <View style={styles.page}>
      <View style={styles.AddImage}>
        {image === undefined ? (
          <Image
            source={RandomDog}
            style={{
              width: '100%',
              height: '100%',
              resizeMode: 'cover',
            }}
          />
        ) : (
          <Image
            source={{uri: 'data:image/png;base64,' + image}}
            style={{
              width: '100%',
              height: '100%',
              resizeMode: 'cover',
            }}
          />
        )}
      </View>

      <View style={styles.Logo}>
        <LogoList />
      </View>

      <View style={styles.MainBox}>
        <Image source={testBox} style={styles.BoxBcImage} />
        <GradientText name={petName} style={styles.petName} offset={0.3} />
        <View style={{marginBottom: 40}} />
        <View style={styles.BoxField}>
          <Text style={styles.BoxText}>{breed}</Text>
        </View>
        <View style={styles.BoxField}>
          <Text style={styles.BoxText}>{born}</Text>
        </View>
        <View style={styles.BoxField}>
          <Text style={styles.BoxText}>{gender || 'Girl'}</Text>
        </View>
        <View>
          <Image source={swipe} style={styles.swipe} />
        </View>
      </View>
    </View>
  );
};

export default ViewPetScreen;
