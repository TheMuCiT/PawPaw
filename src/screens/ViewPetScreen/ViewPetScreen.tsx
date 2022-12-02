import {useEffect, useState} from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import styles from './styles';

//library
import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useRoute} from '@react-navigation/native';

//files
import colors from '../../theme/colors';
import {ViewPetRouteProp} from '../../types/navigation';

//assets
import BackgroundLogo from '../../assets/icons/BackgroundLogo';
import RandomDog from '../../assets/images/randomDog.png';

const ViewPetScreen = () => {
  const route = useRoute<ViewPetRouteProp>();
  const {id} = route.params;

  const [petName, setPetName] = useState<string>('');
  const [breed, setBreed] = useState<string>('');
  const [age, setAge] = useState(new Date());
  const [showDate, setShowDate] = useState<boolean>(false);
  const [note, setNote] = useState<string>('');
  const [image, setImage] = useState<undefined | string>(undefined);

  const [years, setYears] = useState(0);
  const [months, setMonths] = useState(0);
  const [days, setDays] = useState(0);

  const readData = async () => {
    const petName = await AsyncStorage.getItem(`petName${id}`);
    const petAge = await AsyncStorage.getItem(`age${id}`);
    const petImage = await AsyncStorage.getItem(`image${id}`);
    const petBreed = await AsyncStorage.getItem(`breed${id}`);
    const petNote = await AsyncStorage.getItem(`note${id}`);

    return {petName, petAge, petImage, petBreed, petNote};
  };

  useEffect(() => {
    const callData = async () => {
      const result = await readData();
      setPetName(result.petName || '');
      setBreed(result.petBreed || '');
      setShowDate(true);
      setAge(new Date(result.petAge || ''));
      setImage(result.petImage || undefined);
      setNote(result.petNote || '');
    };

    callData();
  }, [id]);

  return (
    <View style={styles.page}>
      <LinearGradient
        style={styles.linearGradient}
        start={{x: 0.4, y: 0.7}}
        end={{x: 1, y: 1}}
        locations={[0.0, 0.8]}
        colors={[colors.bcMain, colors.bcMainSecond]}>
        <BackgroundLogo style={styles.BackgroundLogo1} />
        <BackgroundLogo style={styles.BackgroundLogo2} />
        <BackgroundLogo style={styles.BackgroundLogo3} />
        <BackgroundLogo style={styles.BackgroundLogo4} />
        <BackgroundLogo style={styles.BackgroundLogo5} />

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

        <View style={styles.NameContainer}>
          <View style={styles.NameWrapper}>
            <Text style={styles.NameText}>{petName}</Text>
          </View>
        </View>

        <ScrollView style={styles.DataContainer}>
          <View style={styles.DataTitle}>
            <Text style={styles.TitleText}>Nila is:</Text>
          </View>
          <View style={styles.timer}>
            <View style={styles.timerBox}>
              <Text style={styles.timerTime}>{years.toString()}</Text>
              <Text style={styles.timerText}>{petName}</Text>
            </View>
            <View style={styles.timerBox}>
              <Text style={styles.timerTime}>{months.toString()}</Text>
              <Text style={styles.timerText}>Months</Text>
            </View>
            <View style={[styles.timerBox, {borderRightWidth: 0}]}>
              <Text style={styles.timerTime}>{days.toString()}</Text>
              <Text style={styles.timerText}>Days</Text>
            </View>
          </View>
          <View style={styles.DataTitle}>
            <Text style={styles.TitleText}>Nila Birthday in:</Text>
          </View>
          <View style={styles.timer}>
            <View style={styles.timerBox}>
              <Text style={styles.timerTime}>{years.toString()}</Text>
              <Text style={styles.timerText}>{petName}</Text>
            </View>
            <View style={styles.timerBox}>
              <Text style={styles.timerTime}>{months.toString()}</Text>
              <Text style={styles.timerText}>Months</Text>
            </View>
            <View style={[styles.timerBox, {borderRightWidth: 0}]}>
              <Text style={styles.timerTime}>{days.toString()}</Text>
              <Text style={styles.timerText}>Days</Text>
            </View>
          </View>
        </ScrollView>
      </LinearGradient>
    </View>
  );
};

export default ViewPetScreen;
