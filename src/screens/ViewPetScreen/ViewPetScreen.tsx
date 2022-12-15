import {useEffect, useState} from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import styles from './styles';

//library
import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useRoute} from '@react-navigation/native';
import {addDays, format, intervalToDuration} from 'date-fns';
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

const ViewPetScreen = () => {
  const route = useRoute<ViewPetRouteProp>();
  const {id} = route.params;

  const [petName, setPetName] = useState<string>('');
  const [breed, setBreed] = useState<string>('');
  const [age, setAge] = useState(new Date());
  const [showDate, setShowDate] = useState<boolean>(false);
  const [gender, setGender] = useState<string>('');
  const [image, setImage] = useState<undefined | string>(undefined);

  const [years, setYears] = useState(0);
  const [months, setMonths] = useState(0);
  const [days, setDays] = useState(0);

  const [monthsUntil, setMonthsUntil] = useState(0);
  const [daysUntil, setDaysUntil] = useState(0);

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
      setShowDate(true);
      setAge(new Date(result.petAge || ''));
      setImage(result.petImage || undefined);
      setGender(result.petGender || '');
    };

    callData();
  }, [id]);

  useEffect(() => {
    let timeNow = new Date();

    let time = intervalToDuration({start: age, end: timeNow});

    setYears(time.years ? time.years : 0);

    setMonths(time.months ? time.months : 0);

    setDays(time.days ? time.days : 0);

    //until

    //let timeUntil = intervalToDuration({});
    let yearsNow = format(timeNow, 'u');
    let yearsNowNumber = Number(yearsNow);
    let monthsCalc = format(age, 'M');
    let daysCalc = format(age, 'dd');

    //birthday date next year
    let BdDateString = yearsNowNumber + 1 + '-' + monthsCalc + '-' + daysCalc;
    let BdDate = new Date(BdDateString);
    //add extra day to fix calculation
    BdDate = addDays(BdDate, 1);
    let timeUntilNextBD = intervalToDuration({start: timeNow, end: BdDate});
    setMonthsUntil(timeUntilNextBD.months ? timeUntilNextBD.months : 0);
    setDaysUntil(timeUntilNextBD.days ? timeUntilNextBD.days : 0);
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
        <Text style={styles.petName}>{petName}</Text>
        <View style={styles.BoxField}>
          <Text style={styles.BoxText}>{breed}</Text>
        </View>
        <View style={styles.BoxField}>
          <Text style={styles.BoxText}>1 year old</Text>
        </View>
        <View style={styles.BoxField}>
          <Text style={styles.BoxText}>{gender || 'Girl'}</Text>
        </View>
        <View>
          <Image source={swipe} style={styles.swipe} />
        </View>
      </View>

      {/* <View style={styles.NameContainer}>
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
            <Text style={styles.timerText}>Years</Text>
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
            <Text style={styles.timerTime}>{monthsUntil.toString()}</Text>
            <Text style={styles.timerText}>Months</Text>
          </View>
          <View style={[styles.timerBox, {borderRightWidth: 0}]}>
            <Text style={styles.timerTime}>{daysUntil.toString()}</Text>
            <Text style={styles.timerText}>Days</Text>
          </View>
        </View>
      </ScrollView> */}
    </View>
  );
};

export default ViewPetScreen;
