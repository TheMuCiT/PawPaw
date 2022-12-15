import * as React from 'react';
import Svg, {Path, Defs, LinearGradient, Stop} from 'react-native-svg';

const SvgComponent = props => (
  <Svg
    width={60}
    height={57}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M59.38 26.615v18.25A10.288 10.288 0 0 1 47.976 56.27h-36.5A10.288 10.288 0 0 1 .068 44.865V14.448A10.29 10.29 0 0 1 11.475 3.042h21.291a2.281 2.281 0 1 1 0 4.562H11.475c-4.797 0-6.844 2.047-6.844 6.844v28.135l7.726-7.725a3.066 3.066 0 0 1 4.319 0l2.86 2.859a1.521 1.521 0 0 0 2.128 0L36.69 22.69a3.066 3.066 0 0 1 4.32 0L54.817 36.5v-9.885a2.281 2.281 0 0 1 4.563 0Zm-41.843-9.886a3.811 3.811 0 1 0 .021 0h-.021Zm27.396-6.083h3.802v3.802a2.281 2.281 0 1 0 4.563 0v-3.802H57.1a2.281 2.281 0 1 0 0-4.563h-3.802V2.281a2.28 2.28 0 1 0-4.563 0v3.802h-3.802a2.281 2.281 0 0 0 0 4.563Z"
      fill="url(#a)"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={29.725}
        y1={0}
        x2={30}
        y2={56}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#B91010" />
        <Stop offset={1} stopColor="#B91010" stopOpacity={0} />
      </LinearGradient>
    </Defs>
  </Svg>
);

export default SvgComponent;
