import * as React from 'react';
import Svg, {G, Circle, Path, Defs} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: filter */

const SvgComponent = props => (
  <Svg
    width={66}
    height={66}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <G filter="url(#a)">
      <Circle cx={33} cy={29} r={29} fill="#1E1E1E" />
      <Circle cx={33} cy={29} r={28.5} stroke="#B91010" />
    </G>
    <Path
      d="m40.062 40.439-.476 1.885a93.856 93.856 0 0 1-3.41 1.247c-.85.286-1.836.429-2.96.429-1.725 0-3.067-.41-4.024-1.225-.957-.818-1.436-1.855-1.436-3.112 0-.487.035-.988.107-1.498.073-.51.19-1.086.348-1.73l1.78-6.118c.16-.586.294-1.14.402-1.666.109-.521.162-1.002.162-1.434 0-.781-.167-1.328-.499-1.635-.332-.306-.965-.462-1.905-.462-.46 0-.934.072-1.416.21-.484.14-.899.273-1.246.398l.476-1.886a45.465 45.465 0 0 1 3.349-1.184c1.067-.328 2.075-.493 3.028-.493 1.714 0 3.036.402 3.964 1.206.929.805 1.393 1.847 1.393 3.132 0 .266-.03.735-.096 1.404a9.145 9.145 0 0 1-.357 1.846l-1.773 6.094c-.146.49-.276 1.049-.39 1.678-.117.626-.173 1.104-.173 1.425 0 .809.185 1.361.558 1.655.375.294 1.022.44 1.94.44.432 0 .922-.075 1.468-.22.543-.146.94-.274 1.186-.386Zm.45-25.585c0 1.062-.413 1.968-1.242 2.714-.826.748-1.822 1.123-2.987 1.123-1.168 0-2.167-.375-3.002-1.123-.835-.746-1.253-1.653-1.253-2.714 0-1.06.418-1.968 1.253-2.723.834-.754 1.834-1.131 3.002-1.131 1.165 0 2.161.378 2.987 1.13.83.756 1.241 1.664 1.241 2.724Z"
      fill="#B91010"
    />
    <Defs></Defs>
  </Svg>
);

export default SvgComponent;
