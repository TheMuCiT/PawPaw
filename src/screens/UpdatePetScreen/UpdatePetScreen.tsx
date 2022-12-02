import {
  View,
  Text,
  TextInput,
  Pressable,
  Image,
  Alert,
  ScrollView,
} from 'react-native';
import {useEffect, useState} from 'react';
import styles from '../NewPetScreen/styles';

//library
import AsyncStorage from '@react-native-async-storage/async-storage';
import LinearGradient from 'react-native-linear-gradient';
import {format} from 'date-fns';
import DatePicker from 'react-native-date-picker';
import {launchImageLibrary} from 'react-native-image-picker';
import {useNavigation, useRoute} from '@react-navigation/native';

//files
import colors from '../../theme/colors';
import {
  UpdatePetNavigatorProp,
  UpdatePetRouteProp,
} from '../../types/navigation';
import useNewPetService from '../../services/NewPetService';

//assets
import AddImageIcon from '../../assets/icons/AddImageIcon';
import Calendar from '../../assets/icons/Calendar';
import BackgroundLogo from '../../assets/icons/BackgroundLogo';
import {usePetContext} from '../../contexts/PetContext';

const UpdatePetScreen = () => {
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

  const [note, setNote] = useState<string>('');

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
        await AsyncStorage.setItem(`note${id}`, note);
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

        <Pressable onPress={() => launchImagePicker()} style={styles.AddImage}>
          {image === undefined ? (
            <>
              <Text style={styles.AddImageText}>Add a photo</Text>
              <AddImageIcon />
            </>
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
        </Pressable>

        <ScrollView style={styles.InputsContainer}>
          <View style={styles.Inputs}>
            <TextInput
              style={styles.InputElement}
              value={petName}
              placeholder={'What’s your pet’s name'}
              onChangeText={setPetName}
              placeholderTextColor={colors.inputPlaceholder}
              maxLength={20}
            />
            <TextInput
              style={styles.InputElement}
              value={breed}
              placeholder={'What’s your pet’s breed'}
              onChangeText={setBreed}
              placeholderTextColor={colors.inputPlaceholder}
              maxLength={20}
            />

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

            <View style={styles.NodeInput}>
              <TextInput
                style={[styles.InputElementNote]}
                value={note}
                multiline
                placeholder={'Notes about your pet'}
                onChangeText={setNote}
                placeholderTextColor={colors.inputPlaceholder}
                numberOfLines={4}
                maxLength={120}
              />
            </View>

            <Pressable onPress={updateData} style={styles.Button}>
              <Text style={styles.ButtonText}>
                {loading
                  ? 'Loading'
                  : valid === false
                  ? 'Input is not valid try again'
                  : 'save and continue'}
              </Text>
            </Pressable>
          </View>
        </ScrollView>
      </LinearGradient>
    </View>
  );
};

export default UpdatePetScreen;
