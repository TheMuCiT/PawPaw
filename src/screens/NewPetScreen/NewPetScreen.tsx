import {
  View,
  Text,
  TextInput,
  Pressable,
  Image,
  Alert,
  ScrollView,
} from 'react-native';
import {useState} from 'react';
import styles from './styles';

//library
import AsyncStorage from '@react-native-async-storage/async-storage';
import LinearGradient from 'react-native-linear-gradient';
import {format} from 'date-fns';
import DatePicker from 'react-native-date-picker';
import {launchImageLibrary} from 'react-native-image-picker';

//files
import {usePetContext} from '../../contexts/PetContext';
import colors from '../../theme/colors';

import useNewPetService from '../../services/NewPetService';

//assets
import AddImageIcon from '../../assets/icons/AddImageIcon';
import Calendar from '../../assets/icons/Calendar';
import BackgroundLogo from '../../assets/icons/BackgroundLogo';
import Back from '../../assets/icons/Back';

const NewPetScreen = () => {
  const {count, updateCount} = usePetContext();
  const {validateInput, saveImage} = useNewPetService();

  const [petName, setPetName] = useState('');
  const [breed, setBreed] = useState('');

  const [age, setAge] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [showDate, setShowDate] = useState(false);

  const [note, setNote] = useState('');

  const [image, setImage] = useState<undefined | string>(undefined);
  const [imageBase, setImageBase] = useState<undefined | string>(undefined);

  const [valid, setValid] = useState<boolean | null>(null);
  const [loading, setLoading] = useState(false);

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

  const saveData = async () => {
    setLoading(true);
    let response = validateInput(petName, breed, age);
    setValid(v => response);
    if (response) {
      try {
        await AsyncStorage.setItem(`petName${count}`, petName);
        await AsyncStorage.setItem(`breed${count}`, breed);
        await AsyncStorage.setItem(`age${count}`, format(age, 'yyyy-MM-dd'));
        await AsyncStorage.setItem(`note${count}`, note);
        await saveImage(imageBase, count);
        updateCount(count + 1);
      } catch (e) {
        Alert.alert('Error ', (e as Error).message);
      }
    }
    setLoading(false);
  };

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
              source={{uri: image}}
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

            <View style={styles.a}>
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

            <Pressable onPress={saveData} style={styles.Button}>
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
        {count > 0 && <Back style={styles.BackButton} />}
      </LinearGradient>
    </View>
  );
};

export default NewPetScreen;
