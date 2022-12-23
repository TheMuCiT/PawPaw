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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19 30c8.284 0 15-6.716 15-15 0-8.284-6.716-15-15-15C10.716 0 4 6.716 4 15c0 8.284 6.716 15 15 15Zm4.425-20.75h2.325a.75.75 0 1 1 0 1.5H25v9.75a3.754 3.754 0 0 1-3.75 3.75h-4.5A3.754 3.754 0 0 1 13 20.5v-9.75h-.75a.75.75 0 1 1 0-1.5h2.325a3.757 3.757 0 0 1 3.675-3h1.5a3.756 3.756 0 0 1 3.675 3Zm-2.376-1.086a2.255 2.255 0 0 0-1.299-.414h-1.5a2.255 2.255 0 0 0-2.122 1.5h5.744a2.254 2.254 0 0 0-.823-1.086ZM22.84 22.09A2.25 2.25 0 0 0 23.5 20.5v-9.75h-9v9.75a2.25 2.25 0 0 0 2.25 2.25h4.5a2.25 2.25 0 0 0 1.591-.659ZM17.5 19.75a.75.75 0 0 0 .75-.75v-4.5a.75.75 0 1 0-1.5 0V19a.75.75 0 0 0 .75.75Zm3.53-.22a.75.75 0 0 1-1.28-.53v-4.5a.75.75 0 1 1 1.5 0V19a.75.75 0 0 1-.22.53Z"
        fill="#fff"
      />
    </G>
    <Defs></Defs>
  </Svg>
);

export default SvgComponent;
