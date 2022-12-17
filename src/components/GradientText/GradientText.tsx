import {View, Text, TextStyle} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import MaskedView from '@react-native-community/masked-view';

interface IGradientText {
  name: string;
  style: TextStyle;
  offset: number;
}

const GradientText = ({name, style, offset}: IGradientText) => {
  return (
    <View>
      <Text
        style={[
          style,
          {
            position: 'absolute',
            color: '#ffffff',
            textShadowColor: '#ffffff',
            textShadowRadius: 15,
          },
        ]}>
        {name}
      </Text>
      <MaskedView
        maskElement={
          <Text style={[style, {backgroundColor: 'transparent'}]}>{name}</Text>
        }>
        <LinearGradient
          start={{x: 0, y: 0}}
          locations={[0, offset, 1]}
          end={{x: 0, y: 1}}
          colors={['black', 'black', 'red']}>
          <Text style={[style, {opacity: 0}]}>{name}</Text>
        </LinearGradient>
      </MaskedView>
    </View>
  );
};

export default GradientText;
