import * as React from 'react';
import Svg, {G, Path, Defs} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: filter */

const SvgComponent = props => (
  <Svg
    width={38}
    height={38}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <G filter="url(#a)">
      <Path
        d="M19 0C10.716 0 4 6.716 4 15c0 8.283 6.716 15 15 15 8.283 0 15-6.716 15-15 0-8.284-6.717-15-15-15Zm7.13 10.794-1.425 1.425-2.9-2.9-1.1 1.1 2.9 2.9-7.113 7.113-2.9-2.9-1.1 1.1 2.9 2.9-.709.71-.014-.014a.561.561 0 0 1-.358.257l-2.704.604a.56.56 0 0 1-.52-.152.561.561 0 0 1-.15-.52l.602-2.704a.563.563 0 0 1 .258-.358l-.014-.013L23.23 7.894a.43.43 0 0 1 .608 0l2.292 2.292a.43.43 0 0 1 0 .608Z"
        fill="#fff"
      />
    </G>
    <Defs></Defs>
  </Svg>
);

export default SvgComponent;
