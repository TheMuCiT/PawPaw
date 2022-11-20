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
      d="m24.326 10.874-.002-.002L14.126.674A2.286 2.286 0 0 0 12.5 0c-.615 0-1.193.24-1.628.674L.68 10.867a2.304 2.304 0 0 0-.006 3.26 2.289 2.289 0 0 0 1.598.675h.406v7.505A2.697 2.697 0 0 0 5.371 25h3.99a.732.732 0 0 0 .732-.732v-5.884a1.23 1.23 0 0 1 1.23-1.23h2.353a1.23 1.23 0 0 1 1.229 1.23v5.884c0 .404.327.732.732.732h3.99a2.697 2.697 0 0 0 2.693-2.694v-7.504h.377c.615 0 1.193-.24 1.628-.675a2.305 2.305 0 0 0 .001-3.253Zm-1.037 2.218a.832.832 0 0 1-.592.245h-1.109a.732.732 0 0 0-.732.732v8.237a1.23 1.23 0 0 1-1.23 1.23H16.37v-5.152a2.697 2.697 0 0 0-2.693-2.694h-2.354a2.697 2.697 0 0 0-2.694 2.694v5.151H5.371a1.23 1.23 0 0 1-1.229-1.229V14.07a.732.732 0 0 0-.732-.732H2.32a.83.83 0 0 1-.61-.245.838.838 0 0 1-.001-1.184L11.908 1.71a.83.83 0 0 1 .592-.245.83.83 0 0 1 .591.245l10.196 10.195a.838.838 0 0 1 .003 1.187Z"
      fill={props.color}
    />
  </Svg>
);

export default SvgComponent;
