import * as React from 'react';
import Svg, {G, Path, Defs} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: filter */

const SvgComponent = props => (
  <Svg
    width={33}
    height={33}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <G filter="url(#a)">
      <Path
        d="M16.5 0C9.596 0 4 5.597 4 12.5S9.596 25 16.5 25C23.403 25 29 19.403 29 12.5 29 5.596 23.403 0 16.5 0Zm5.942 8.995-1.188 1.188-2.416-2.417-.917.917 2.417 2.417-5.928 5.927-2.417-2.417-.916.917 2.416 2.417-.59.59-.012-.01a.468.468 0 0 1-.298.214l-2.254.502a.465.465 0 0 1-.433-.126.468.468 0 0 1-.126-.433l.502-2.253a.47.47 0 0 1 .215-.299l-.011-.011 9.539-9.54c.14-.14.367-.14.507 0l1.91 1.91c.14.14.14.368 0 .507Z"
        fill="#fff"
      />
    </G>
    <Defs></Defs>
  </Svg>
);

export default SvgComponent;
