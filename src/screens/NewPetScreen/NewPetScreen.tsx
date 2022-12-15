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
import {format} from 'date-fns';
import DatePicker from 'react-native-date-picker';
import {launchImageLibrary} from 'react-native-image-picker';
import {useNavigation} from '@react-navigation/native';
import DropShadow from 'react-native-drop-shadow';

//files
import {usePetContext} from '../../contexts/PetContext';
import colors from '../../theme/colors';
import {NewPetScreenNavigatorProp} from '../../types/navigation';
import useNewPetService from '../../services/NewPetService';

//assets
import AddImageIcon from '../../assets/icons/AddImageIcon';
import AddAPhoto from '../../assets/icons/AddAPhoto';
import Calendar from '../../assets/icons/Calendar';
import NewPet from '../../assets/images/NewPet.png';

const NewPetScreen = () => {
  const navigation = useNavigation<NewPetScreenNavigatorProp>();
  const {count, updateCount} = usePetContext();
  const {validateInput, saveImage} = useNewPetService();

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
    setPetName('');
    setBreed('');
    setShowDate(false);
    setImage(undefined);
    setGender('');
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
        await AsyncStorage.setItem(`gender${count}`, gender);
        await saveImage(imageBase, count);
        updateCount(count + 1);
        updatePage();
        navigation.navigate('HomeStack');
      } catch (e) {
        Alert.alert('Error ', (e as Error).message);
      }
    }
    setLoading(false);
  };

  return (
    <View style={styles.page}>
      <Image source={NewPet} style={styles.BCImage} />
      <Pressable onPress={() => launchImagePicker()} style={styles.AddImage}>
        <DropShadow
          style={{
            shadowColor: '#ff0000',
            shadowOffset: {
              width: 0,
              height: 4,
            },
            shadowOpacity: 0.84,
            shadowRadius: 6,
          }}>
          <View style={styles.addImageContainer}>
            {image === undefined ? (
              <View style={styles.addImageEmpty}>
                <AddImageIcon style={{marginBottom: 10}} />
                <AddAPhoto />
              </View>
            ) : (
              <Image
                source={{uri: 'data:image/png;base64,' + image}}
                style={[
                  styles.image,
                  {
                    width: '100%',
                    height: '100%',
                    resizeMode: 'cover',
                  },
                ]}
              />
            )}
          </View>
        </DropShadow>
      </Pressable>

      <ScrollView style={styles.InputsContainer}>
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
            <Pressable onPress={saveData} style={styles.Button}>
              <Text style={styles.ButtonText}>
                {loading
                  ? 'Loading'
                  : valid === false
                  ? 'Input is not valid try again'
                  : 'Start now'}
              </Text>
            </Pressable>
          </DropShadow>
        </View>
      </ScrollView>
    </View>
  );
};

export default NewPetScreen;
