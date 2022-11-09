import {View, Text, TextInput, Pressable, Image} from 'react-native';
import {useState} from 'react';
import styles from './styles';

//library
import LinearGradient from 'react-native-linear-gradient';
import {format} from 'date-fns';
import DatePicker from 'react-native-date-picker';
import {launchImageLibrary} from 'react-native-image-picker';
import colors from '../../theme/colors';

//assets
import AddImageIcon from '../../assets/icons/AddImageIcon';

const NewPetScreen = () => {
  const [petName, setPetName] = useState('');
  const [breed, setBreed] = useState('');

  const [age, setAge] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [showDate, setShowDate] = useState(false);

  const [note, setNote] = useState('');

  const [image, setImage] = useState<undefined | string>(undefined);

  const launchImagePicker = async () => {
    const result = await launchImageLibrary({mediaType: 'photo'});

    if (result.didCancel) {
      return;
    }

    if (result.assets) {
      setImage(result.assets[0].uri);
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

            <Pressable onPress={() => setOpen(true)}>
              <Text style={styles.InputElement}>
                {showDate ? format(age, 'yyyy-MM-dd') : 'Age of your pet'}
              </Text>
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

            <View style={styles.Button}>
              <Text style={styles.ButtonText}>save and continue</Text>
            </View>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};

export default NewPetScreen;
