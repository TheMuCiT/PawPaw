import {useEffect, useState} from 'react';

//library
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//Files
import {RootNavigatorParamList} from '../types/navigation';
import BottomTabNavigator from './BottomTabNavigator';
import {usePetContext} from '../contexts/PetContext';

//screen
import LoadingScreen from '../screens/LoadingScreen/LoadingScreen';
import NewPetScreen from '../screens/NewPetScreen/NewPetScreen';

const Stack = createNativeStackNavigator<RootNavigatorParamList>();

const Navigation = () => {
  const {count, loading} = usePetContext();

  const [loadingTime, setLoadingTime] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoadingTime(false);
    }, 2500);
  }, []);

  let stackScreens = null;

  if (count !== 0) {
    stackScreens = (
      <Stack.Screen
        name="Home"
        component={BottomTabNavigator}
        options={{headerShown: false}}
      />
    );
  } else {
    stackScreens = (
      <Stack.Screen
        name="FirstLogin"
        component={NewPetScreen}
        options={{headerShown: false}}
      />
    );
  }

  if (loading || loadingTime) {
    return <LoadingScreen />;
  }
  return (
    <NavigationContainer>
      <Stack.Navigator>{stackScreens}</Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
