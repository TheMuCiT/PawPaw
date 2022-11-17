import {useEffect, useState} from 'react';
import {View, Text, Image, useWindowDimensions, Alert} from 'react-native';
import styles from './styles';

//library
import AsyncStorage from '@react-native-async-storage/async-storage';
import {format, intervalToDuration} from 'date-fns';

//assets

import Logo from '../../assets/icons/Logo';
import Info from '../../assets/icons/InfoIcon';
import ArrowLeft from '../../assets/icons/ArrowLeft';
import ArrowRight from '../../assets/icons/ArrowRight';

import RandomDog from '../../assets/images/randomDog.png';

const MainScreen = () => {
  const {height, width} = useWindowDimensions();
  const [petName, setPetName] = useState<string>('');
  const [age, setAge] = useState(new Date());
  const [image, setImage] = useState<string>('');

  const [years, setYears] = useState(0);
  const [months, setMonths] = useState(0);
  const [days, setDays] = useState(0);

  useEffect(() => {
    const ReadData = async () => {
      try {
        const result = await AsyncStorage.getItem('petName');
        if (result) setPetName(result);

        const ageString = await AsyncStorage.getItem('age');
        setAge(new Date(ageString ? ageString : ''));

        const imageResult = await AsyncStorage.getItem('image');
        if (imageResult) {
          console.log(imageResult);
          setImage('data:image/png;base64,' + imageResult);
        }
      } catch (e) {
        Alert.alert('Error ', (e as Error).message);
      }
    };

    ReadData();
  }, []);

  useEffect(() => {
    let timeNow = new Date();

    let time = intervalToDuration({start: age, end: timeNow});

    setYears(time.years ? time.years : 0);

    setMonths(time.months ? time.months : 0);

    setDays(time.days ? time.days : 0);
  }, [age]);

  return (
    <View style={styles.page}>
      <Image
        source={image ? {uri: image} : RandomDog}
        style={[styles.BCImage, {width: width, height: height}]}
      />
      <View style={styles.logo}>
        <Logo />
        <Text style={styles.name}>{petName}</Text>
      </View>
      <View style={styles.bDay}>
        <Text style={styles.bDayText}>{format(age, 'MMMM do')}</Text>
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
      <View style={styles.navigation}>
        <View style={styles.navigationLeft}>
          <ArrowLeft />
          <Text style={styles.navigationText}>PREVIOUS</Text>
        </View>
        <View>
          <Info />
        </View>
        <View style={styles.navigationRight}>
          <ArrowRight />
          <Text style={styles.navigationText}>NEXT</Text>
        </View>
      </View>
    </View>
  );
};

export default MainScreen;
