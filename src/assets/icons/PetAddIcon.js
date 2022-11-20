import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const SvgComponent = props => (
  <Svg
    width={25}
    height={25}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M12.5 0C5.607 0 0 5.607 0 12.5S5.607 25 12.5 25 25 19.392 25 12.5 19.393 0 12.5 0Zm0 23.064c-5.824 0-10.564-4.739-10.564-10.564S6.676 1.936 12.5 1.936 23.064 6.675 23.064 12.5 18.325 23.064 12.5 23.064Z"
      fill={props.color}
    />
    <Path
      d="M17.341 11.445h-3.873V7.572a.968.968 0 1 0-1.936 0v3.873H7.659a.968.968 0 1 0 0 1.936h3.873v3.873a.968.968 0 1 0 1.936 0v-3.873h3.873a.968.968 0 1 0 0-1.936Z"
      fill={props.color}
    />
  </Svg>
);

export default SvgComponent;
