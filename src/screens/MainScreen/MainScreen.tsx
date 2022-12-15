import {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  useWindowDimensions,
  ActivityIndicator,
  Pressable,
} from 'react-native';
import styles from './styles';

//library
import {format, intervalToDuration} from 'date-fns';

//files
import {usePetContext} from '../../contexts/PetContext';
import useMainScreenService from '../../services/MainService';
import {IPetData} from '../../types/AppTypes';
import {useNavigation} from '@react-navigation/native';
import {MainScreenNavigatorProp} from '../../types/navigation';

//assets

import Logo from '../../assets/icons/Logo';
import Info from '../../assets/icons/InfoIcon';
import ArrowLeft from '../../assets/icons/ArrowLeft';
import ArrowRight from '../../assets/icons/ArrowRight';

import RandomDog from '../../assets/images/randomDog.png';

const MainScreen = () => {
  const navigation = useNavigation<MainScreenNavigatorProp>();

  const {count} = usePetContext();
  const {ReadData} = useMainScreenService();

  const {height, width} = useWindowDimensions();

  const [petData, setPetData] = useState<Array<IPetData>>([]);

  const [activePet, setActivePet] = useState<number>(0);

  const pet = petData[activePet];

  const [years, setYears] = useState(0);
  const [months, setMonths] = useState(0);
  const [days, setDays] = useState(0);

  useEffect(() => {
    const callData = async () => {
      const result = await ReadData();
      setPetData(result);
    };

    if (activePet > count - 1) {
      setActivePet(count - 1);
    }
    callData();
  }, [count]);

  useEffect(() => {
    if (!pet) {
      return;
    }
    let timeNow = new Date();

    let time = intervalToDuration({start: pet.age, end: timeNow});

    setYears(time.years ? time.years : 0);

    setMonths(time.months ? time.months : 0);

    setDays(time.days ? time.days : 0);
  }, [pet]);

  if (!pet) {
    return <ActivityIndicator />;
  }

  const Previous = () => {
    if (activePet > 0) {
      setActivePet(activePet - 1);
    }
  };

  const Next = () => {
    if (activePet < count - 1) {
      setActivePet(activePet + 1);
    }
  };

  const NavigateToView = () => {
    navigation.navigate('ViewPet', {id: pet.id});
  };

  return (
    <View style={styles.page}>
      <Image
        source={pet.image ? {uri: pet.image} : RandomDog}
        style={[styles.BCImage, {width: width, height: height}]}
      />
      <View style={[styles.imageCover, {width: width, height: height}]} />
      <View style={styles.logo}>
        <Logo />
        <Text style={styles.name}>{pet.name}</Text>
      </View>
      <View style={styles.bDay}>
        <View style={styles.bDayWrapper}>
          <Text style={styles.bDayText}>{format(pet.age, 'MMMM d')}</Text>
          <Text style={styles.bDayTextTH}>
            {format(pet.age, 'do').slice(-2)}
          </Text>
        </View>
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
        <Pressable
          onPress={() => Previous()}
          style={[
            styles.navigationLeft,
            activePet === 0 && styles.navigationLeftDisable,
          ]}>
          <ArrowLeft />
          <Text style={styles.navigationText}>PREVIOUS</Text>
        </Pressable>
        <Pressable onPress={NavigateToView}>
          <Info />
        </Pressable>
        <Pressable
          onPress={() => Next()}
          style={[
            styles.navigationRight,
            activePet === count - 1 && styles.navigationLeftDisable,
          ]}>
          <ArrowRight />
          <Text style={styles.navigationText}>NEXT</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default MainScreen;
