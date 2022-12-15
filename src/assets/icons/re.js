import * as React from 'react';
import Svg, {G, Path, Defs, LinearGradient, Stop} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: filter */

const SvgComponent = props => (
  <Svg
    width={37}
    height={40}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <G filter="url(#a)">
      <Path
        d="M11.912 14.928V33H7.88V7.44h3.312l14.472 18.468V7.476h4.068V33h-3.528L11.912 14.928Z"
        fill="url(#b)"
      />
    </G>
    <Defs>
      <LinearGradient
        id="b"
        x1={19}
        y1={-1}
        x2={19}
        y2={41}
        gradientUnits="userSpaceOnUse">
        <Stop offset={0.234} stopColor="#1E1E1E" />
        <Stop offset={1} stopColor="#B91010" />
      </LinearGradient>
    </Defs>
  </Svg>
);

export default SvgComponent;
