import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const SvgComponent = props => (
  <Svg
    width={76}
    height={76}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M38 3.167A34.834 34.834 0 1 0 72.833 38 34.875 34.875 0 0 0 38 3.167Zm15.833 38H41.167v12.666a3.167 3.167 0 0 1-6.334 0V41.167H22.167a3.167 3.167 0 0 1 0-6.334h12.666V22.167a3.167 3.167 0 0 1 6.334 0v12.666h12.666a3.167 3.167 0 0 1 0 6.334Z"
      fill="#848484"
    />
  </Svg>
);

export default SvgComponent;
