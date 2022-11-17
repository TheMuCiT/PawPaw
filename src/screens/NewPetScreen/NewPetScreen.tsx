import {View, Text, TextInput, Pressable, Image, Alert} from 'react-native';
import {useState} from 'react';
import styles from './styles';

//library
import AsyncStorage from '@react-native-async-storage/async-storage';
import LinearGradient from 'react-native-linear-gradient';
import {format} from 'date-fns';
import DatePicker from 'react-native-date-picker';
import {launchImageLibrary} from 'react-native-image-picker';
import colors from '../../theme/colors';

//assets
import AddImageIcon from '../../assets/icons/AddImageIcon';
import Calendar from '../../assets/icons/Calendar';

const NewPetScreen = () => {
  const [petName, setPetName] = useState('');
  const [breed, setBreed] = useState('');

  const [age, setAge] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [showDate, setShowDate] = useState(false);

  const [note, setNote] = useState('');

  const [image, setImage] = useState<undefined | string>(undefined);
  const [imageBase, setImageBase] = useState<undefined | string>(undefined);

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

  const saveImage = async () => {
    try {
      if (imageBase) {
        console.log(imageBase);
        await AsyncStorage.setItem('image', imageBase);
      }
    } catch (e) {
      Alert.alert('Error ', (e as Error).message);
    }
  };

  const saveData = async () => {
    try {
      await AsyncStorage.setItem('petName', petName);
      await AsyncStorage.setItem('breed', breed);
      await AsyncStorage.setItem('age', format(age, 'yyyy-MM-dd'));
      await AsyncStorage.setItem('note', note);
      await saveImage();
    } catch (e) {
      Alert.alert('Error ', (e as Error).message);
    }
  };

  return (
    <View style={styles.page}>
      <LinearGradient
        style={styles.linearGradient}
        start={{x: 0.4, y: 0.7}}
        end={{x: 1, y: 1}}
        locations={[0.0, 0.8]}
        colors={[colors.bcMain, colors.bcMainSecond]}>
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

        <View style={styles.InputsContainer}>
          <View style={styles.Inputs}>
            <TextInput
              style={styles.InputElement}
              value={petName}
              placeholder={'What’s your pet’s name'}
              onChangeText={setPetName}
              placeholderTextColor={colors.inputPlaceholder}
            />
            <TextInput
              style={styles.InputElement}
              value={breed}
              placeholder={'What’s your pet’s breed'}
              onChangeText={setBreed}
              placeholderTextColor={colors.inputPlaceholder}
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

            <TextInput
              style={styles.InputElement}
              value={note}
              placeholder={'Notes about your pet'}
              onChangeText={setNote}
              placeholderTextColor={colors.inputPlaceholder}
              editable={false}
            />

            <Pressable onPress={saveData} style={styles.Button}>
              <Text style={styles.ButtonText}>save and continue</Text>
            </Pressable>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};

export default NewPetScreen;
