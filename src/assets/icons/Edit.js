import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const SvgComponent = props => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M12 0C5.372 0 0 5.373 0 12s5.372 12 12 12c6.627 0 12-5.373 12-12S18.627 0 12 0Zm5.704 8.636-1.14 1.14-2.32-2.32-.88.88 2.32 2.32-5.69 5.69-2.32-2.32-.88.88 2.32 2.32-.568.567-.01-.01a.45.45 0 0 1-.287.205l-2.163.483a.446.446 0 0 1-.416-.121.449.449 0 0 1-.121-.416l.482-2.163a.45.45 0 0 1 .206-.287l-.01-.01 9.157-9.159a.344.344 0 0 1 .486 0l1.834 1.834a.344.344 0 0 1 0 .487Z"
      fill="#D9D9D9"
    />
  </Svg>
);

export default SvgComponent;
