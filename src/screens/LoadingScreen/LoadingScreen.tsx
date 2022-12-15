import {View, Text, Image} from 'react-native';
import styles from './styles';

//library

//assets
import PawPawLoadingScreen from '../../assets/images/PawPawLoadingScreen.png';

const LoadingScreen = () => {
  return (
    <View style={styles.page}>
      <Image source={PawPawLoadingScreen} style={styles.image} />

      <View style={styles.logoContainer}>
        <Text style={styles.logoText}>pawpaw</Text>
        <Text style={styles.logoSubText}>age tracker</Text>
      </View>
    </View>
  );
};

export default LoadingScreen;
