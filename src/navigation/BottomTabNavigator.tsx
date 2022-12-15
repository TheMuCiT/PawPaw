import {useEffect, useRef, useState} from 'react';

//library
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import * as Animatable from 'react-native-animatable';

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
import {StyleSheet, TouchableOpacity, View} from 'react-native';

const Tab = createBottomTabNavigator<BottomTabNavigatorParamList>();

const animate1 = {
  0: {scale: 1, translateY: 0},
  0.6: {translateY: -8},
  1: {scale: 1.2, translateY: -2},
};
const animate2 = {
  0: {scale: 1.2, translateY: -2},
  1: {scale: 1, translateY: 0},
};

const lineAni1 = {
  0: {width: 0},
  1: {width: 30},
};

const lineAni2 = {
  0: {width: 30},
  1: {width: 0},
};

interface ITabButton {
  item: string;
  accessibilityState: any;
}

const TabButton = (props: ITabButton) => {
  const {item, accessibilityState} = props;
  const focused = accessibilityState.selected;
  const viewRef = useRef<any>(null);
  const lineRef = useRef<any>(null);

  const [duration, setDuration] = useState(10);

  const activeColor = colors.tabBarBottomActiveColor;
  const InactiveColor = colors.tabBarBottomInactiveColor;

  useEffect(() => {
    if (focused) {
      viewRef.current.animate(animate1);
      lineRef.current.animate(lineAni1);
    } else {
      viewRef.current.animate(animate2);
      lineRef.current.animate(lineAni2);
    }
  }, [focused]);

  useEffect(() => {
    setTimeout(() => {
      setDuration(1000);
    }, 1000);
  }, []);

  return (
    <Animatable.View ref={viewRef} duration={duration} style={styles.container}>
      <View>
        {item === 'HomeStack' ? (
          <HomeIcon color={focused ? activeColor : InactiveColor} />
        ) : item === 'PetListStack' ? (
          <PetListIcon color={focused ? activeColor : InactiveColor} />
        ) : item === 'AddPet' ? (
          <PetAddIcon color={focused ? activeColor : InactiveColor} />
        ) : (
          <SettingsIcon color={focused ? activeColor : InactiveColor} />
        )}
      </View>
      <Animatable.View ref={lineRef} duration={duration} style={styles.line} />
    </Animatable.View>
  );
};

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeStack"
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: colors.tabBarBottomActiveColor,
        tabBarInactiveTintColor: colors.tabBarBottomInactiveColor,
        tabBarStyle: {
          backgroundColor: '#1e1e1ec9',
          borderTopWidth: 0,
          position: 'absolute',
          elevation: 0,
          left: 0,
          right: 0,
          bottom: 0,
          height: 65,
        },
      }}>
      <Tab.Screen
        name="HomeStack"
        component={MainScreen}
        options={{
          headerShown: false,
          tabBarButton: props => (
            <TouchableOpacity
              onPress={props.onPress}
              activeOpacity={1}
              style={styles.container}>
              <TabButton
                accessibilityState={props.accessibilityState}
                item={'HomeStack'}
              />
            </TouchableOpacity>
          ),
        }}
      />
      <Tab.Screen
        name="PetListStack"
        component={PetListStackNavigator}
        options={{
          headerShown: false,
          tabBarButton: props => (
            <TouchableOpacity
              onPress={props.onPress}
              activeOpacity={1}
              style={styles.container}>
              <TabButton
                accessibilityState={props.accessibilityState}
                item={'PetListStack'}
              />
            </TouchableOpacity>
          ),
        }}
      />
      <Tab.Screen
        name="AddPet"
        component={NewPetScreen}
        options={{
          headerShown: false,
          tabBarButton: props => (
            <TouchableOpacity
              onPress={props.onPress}
              activeOpacity={1}
              style={styles.container}>
              <TabButton
                accessibilityState={props.accessibilityState}
                item={'AddPet'}
              />
            </TouchableOpacity>
          ),
        }}
      />
      <Tab.Screen
        name="ViewPet"
        initialParams={{id: 0}}
        component={ViewPetScreen}
        options={{
          headerShown: false,
          tabBarButton: props => (
            <TouchableOpacity
              onPress={props.onPress}
              activeOpacity={1}
              style={styles.container}>
              <TabButton
                accessibilityState={props.accessibilityState}
                item={'ViewPet'}
              />
            </TouchableOpacity>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  line: {
    backgroundColor: 'red',
    height: 2,
    width: 0,
    marginTop: 10,
    position: 'absolute',
    bottom: 7,
    borderRadius: 5,
  },
});
