//library
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

//Files
import {BottomTabNavigatorParamList} from '../types/navigation';
import colors from '../theme/colors';

//Screens
import MainScreen from '../screens/MainScreen';
import NewPetScreen from '../screens/NewPetScreen';

//assets
import HomeIcon from '../assets/icons/HomeIcon';
import PetListIcon from '../assets/icons/PetListIcon';
import PetAddIcon from '../assets/icons/PetAddIcon';
import SettingsIcon from '../assets/icons/SettingsIcon';
import PetListStackNavigator from './PetListStackNavigator';
import ViewPetScreen from '../screens/ViewPetScreen';

const Tab = createBottomTabNavigator<BottomTabNavigatorParamList>();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeStack"
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: colors.tabBarBottomActiveColor,
        tabBarInactiveTintColor: colors.tabBarBottomInactiveColor,
        tabBarStyle: {
          backgroundColor: '#3f3f3fad',
          borderTopWidth: 0,
          borderRadius: 13,
          position: 'absolute',
          elevation: 0,
          left: 10,
          right: 10,
          bottom: 15,
          height: 55,
        },
      }}>
      <Tab.Screen
        name="HomeStack"
        component={MainScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => <HomeIcon color={color} />,
        }}
      />
      <Tab.Screen
        name="PetListStack"
        component={PetListStackNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => <PetListIcon color={color} />,
        }}
      />
      <Tab.Screen
        name="AddPet"
        component={NewPetScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => <PetAddIcon color={color} />,
        }}
      />
      <Tab.Screen
        name="ViewPet"
        initialParams={{id: 0}}
        component={ViewPetScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => <SettingsIcon color={color} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
