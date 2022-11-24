import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const SvgComponent = props => (
  <Svg
    width={30}
    height={30}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M9.375 15c0-.24.092-.48.275-.663l9.375-9.375a.937.937 0 1 1 1.325 1.326L11.638 15l8.712 8.712a.937.937 0 1 1-1.325 1.326L9.65 15.663A.935.935 0 0 1 9.375 15Z"
      fill="#D9D9D9"
    />
  </Svg>
);

export default SvgComponent;
