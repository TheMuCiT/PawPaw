import {
  View,
  Text,
  TextInput,
  Pressable,
  Image,
  Alert,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {useEffect, useRef, useState} from 'react';
import styles from '../NewPetScreen/styles';

//library
import AsyncStorage from '@react-native-async-storage/async-storage';
import {format} from 'date-fns';
import DatePicker from 'react-native-date-picker';
import {launchImageLibrary} from 'react-native-image-picker';
import {useNavigation, useRoute} from '@react-navigation/native';

import DropShadow from 'react-native-drop-shadow';

//files
import colors from '../../theme/colors';
import {
  UpdatePetNavigatorProp,
  UpdatePetRouteProp,
} from '../../types/navigation';
import useNewPetService from '../../services/NewPetService';
import {usePetContext} from '../../contexts/PetContext';

//assets
import AddImageIcon from '../../assets/icons/AddImageIcon';
import AddAPhoto from '../../assets/icons/AddAPhoto';
import Calendar from '../../assets/icons/Calendar';
import BackgroundLogo from '../../assets/icons/BackgroundLogo';
import Back from '../../assets/icons/Back';

import NewPet from '../../assets/images/NewPet.png';
import AddImage from '../../assets/images/AddImage.png';
import EditImage from '../../assets/images/EditImage.png';

const UpdatePetScreen = () => {
  const scrollViewRef = useRef<ScrollView | null>(null);
  const route = useRoute<UpdatePetRouteProp>();
  const {id} = route.params;
  const navigation = useNavigation<UpdatePetNavigatorProp>();
  const {validateInput, saveImage} = useNewPetService();
  const {count, updateCount} = usePetContext();

  const [petName, setPetName] = useState<string>('');
  const [breed, setBreed] = useState<string>('');

  const [age, setAge] = useState(new Date());
  const [open, setOpen] = useState<boolean>(false);
  const [showDate, setShowDate] = useState<boolean>(false);

  const [gender, setGender] = useState<string>('');

  const [image, setImage] = useState<undefined | string>(undefined);
  const [imageBase, setImageBase] = useState<undefined | string>(undefined);

  const [valid, setValid] = useState<boolean | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const launchImagePicker = async () => {
    const result = await launchImageLibrary({
      mediaType: 'photo',
      includeBase64: true,
      quality: 0.5,
    });

    if (result.didCancel) {
      return;
    }

    if (result.assets) {
      setImage(result.assets[0].uri);
      setImageBase(result.assets[0].base64);
    }
  };

  const updatePage = () => {
    navigation.goBack();
  };

  const updateData = async () => {
    setLoading(true);
    let x = count;
    updateCount(x - 1);
    let response = validateInput(petName, breed, age);
    setValid(v => response);
    if (response) {
      try {
        await AsyncStorage.setItem(`petName${id}`, petName);
        await AsyncStorage.setItem(`breed${id}`, breed);
        await AsyncStorage.setItem(`age${id}`, format(age, 'yyyy-MM-dd'));
        await AsyncStorage.setItem(`gender${id}`, gender);
        await saveImage(imageBase, id);
        updatePage();
        updateCount(x);
      } catch (e) {
        Alert.alert('Error ', (e as Error).message);
      }
    }
    setLoading(false);
  };

  const readData = async () => {
    const petName = await AsyncStorage.getItem(`petName${id}`);
    const petAge = await AsyncStorage.getItem(`age${id}`);
    const petImage = await AsyncStorage.getItem(`image${id}`);
    const petGender = await AsyncStorage.getItem(`gender${id}`);
    const petBreed = await AsyncStorage.getItem(`breed${id}`);

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

  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView
        ref={scrollViewRef}
        keyboardShouldPersistTaps={'always'}
        contentContainerStyle={{flexGrow: 1}}
        style={styles.page}
        showsVerticalScrollIndicator={false}
        onContentSizeChange={() =>
          scrollViewRef?.current?.scrollToEnd({animated: false})
        }>
        <Image source={NewPet} style={styles.BCImage} />
        <Pressable onPress={() => launchImagePicker()} style={styles.AddImage}>
          {image === undefined ? (
            <Image
              source={AddImage}
              style={{width: '250%', resizeMode: 'contain'}}
            />
          ) : (
            <Image
              source={EditImage}
              style={{width: '250%', resizeMode: 'contain'}}
            />
          )}
        </Pressable>

        <View style={styles.InputsContainer}>
          <View style={styles.Inputs}>
            <DropShadow
              style={{
                shadowColor: '#000000',
                shadowOffset: {
                  width: 0,
                  height: 4,
                },
                shadowOpacity: 0.25,
                shadowRadius: 4,
              }}>
              <TextInput
                style={styles.InputElement}
                value={petName}
                placeholder={'What’s your pet’s name'}
                onChangeText={setPetName}
                placeholderTextColor={colors.inputPlaceholder}
                maxLength={20}
              />
            </DropShadow>
            <DropShadow
              style={{
                shadowColor: '#000000',
                shadowOffset: {
                  width: 0,
                  height: 4,
                },
                shadowOpacity: 0.25,
                shadowRadius: 4,
              }}>
              <TextInput
                style={styles.InputElement}
                value={breed}
                placeholder={'Pet’s breed'}
                onChangeText={setBreed}
                placeholderTextColor={colors.inputPlaceholder}
                maxLength={20}
              />
            </DropShadow>

            <DropShadow
              style={{
                shadowColor: '#000000',
                shadowOffset: {
                  width: 0,
                  height: 4,
                },
                shadowOpacity: 0.25,
                shadowRadius: 4,
              }}>
              <TextInput
                style={styles.InputElement}
                value={gender}
                placeholder={'Gender'}
                onChangeText={setBreed}
                placeholderTextColor={colors.inputPlaceholder}
                maxLength={20}
              />
            </DropShadow>

            <DropShadow
              style={{
                shadowColor: '#000000',
                shadowOffset: {
                  width: 0,
                  height: 4,
                },
                shadowOpacity: 0.25,
                shadowRadius: 4,
              }}>
              <Pressable
                onPress={() => setOpen(true)}
                style={styles.InputElementDate}>
                <View>
                  <Text style={styles.InputElementText}>
                    {showDate ? format(age, 'yyyy-MM-dd') : 'Age of your pet'}
                  </Text>
                </View>
                <View>
                  <Calendar />
                </View>

                <DatePicker
                  modal
                  mode={'date'}
                  open={open}
                  date={age}
                  onConfirm={age => {
                    setOpen(false);
                    setAge(age);
                    setShowDate(true);
                  }}
                  onCancel={() => {
                    setOpen(false);
                  }}
                />
              </Pressable>
            </DropShadow>

            <DropShadow
              style={{
                shadowColor: '#b91010c1',
                shadowOffset: {
                  width: 0,
                  height: 3,
                },
                shadowOpacity: 0.76,
                shadowRadius: 10,
              }}>
              <Pressable onPress={updateData} style={styles.Button}>
                <Text style={styles.ButtonText}>
                  {loading
                    ? 'Loading'
                    : valid === false
                    ? 'Invalid Input'
                    : 'Update'}
                </Text>
              </Pressable>
            </DropShadow>
          </View>
        </View>
      </ScrollView>
      <Pressable onPress={() => navigation.goBack()} style={styles.BackButton}>
        <Back />
      </Pressable>
    </KeyboardAvoidingView>
  );
};

export default UpdatePetScreen;
