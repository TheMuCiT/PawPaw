import * as React from 'react';
import Svg, {G, Path, Defs, ClipPath} from 'react-native-svg';

const SvgComponent = props => (
  <Svg
    width={17}
    height={17}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <G clipPath="url(#a)">
      <Path
        d="m16.792 15.79-4.834-4.833a6.696 6.696 0 0 0 1.5-4.228C13.458 3.02 10.44 0 6.73 0A6.737 6.737 0 0 0 0 6.73c0 3.71 3.019 6.728 6.73 6.728 1.6 0 3.07-.563 4.226-1.5l4.835 4.834a.707.707 0 0 0 1.001 0 .707.707 0 0 0 0-1.001ZM6.73 12.043a5.318 5.318 0 0 1-5.312-5.313 5.318 5.318 0 0 1 5.312-5.312 5.318 5.318 0 0 1 5.313 5.312 5.318 5.318 0 0 1-5.313 5.313Z"
        fill="#3F3F3F"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h17v17H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default SvgComponent;
