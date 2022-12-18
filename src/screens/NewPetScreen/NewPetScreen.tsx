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
import {useRef, useState} from 'react';
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
import BCLogoSmall from '../../assets/icons/BCLogoSmall';
import Calendar from '../../assets/icons/Calendar';
import NewPet from '../../assets/images/NewPet.png';
import AddImage from '../../assets/images/AddImage.png';
import EditImage from '../../assets/images/EditImage.png';
import DropDownPicker from 'react-native-dropdown-picker';

const NewPetScreen = () => {
  const scrollViewRef = useRef<ScrollView | null>(null);
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

  const [openGender, setOpenGender] = useState(false);
  const dropDownItems = [
    {
      label: 'Male',
      value: 'Male',
    },
    {
      label: 'Female',
      value: 'Female',
    },
  ];

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
        }
        nestedScrollEnabled={true}>
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
              <DropDownPicker
                open={openGender}
                value={gender}
                items={dropDownItems}
                setOpen={setOpenGender}
                setValue={setGender}
                style={styles.InputElementDrop}
                listMode="SCROLLVIEW"
                zIndex={10}
                placeholder="Gender"
                textStyle={styles.InputElementDropText}
                theme="DARK"
                dropDownContainerStyle={{
                  backgroundColor: colors.inputBC,
                  borderWidth: 0,
                }}
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
                zIndex: -1,
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
                <BCLogoSmall style={styles.bcLogoSmall1} />
                <BCLogoSmall style={styles.bcLogoSmall2} />
                <Text style={styles.ButtonText}>
                  {loading
                    ? 'Loading'
                    : valid === false
                    ? 'Invalid Input'
                    : 'Start now'}
                </Text>
              </Pressable>
            </DropShadow>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default NewPetScreen;
