import {View, Text} from 'react-native';
import fonts from './src/theme/fonts';

const App = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text
        style={{fontSize: fonts.size.lg, fontFamily: fonts.family.semiBold}}>
        Hello world
      </Text>
    </View>
  );
};

export default App;
