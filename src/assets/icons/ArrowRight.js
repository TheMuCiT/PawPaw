import * as React from 'react';
import Svg, {G, Path, Defs, ClipPath} from 'react-native-svg';

const SvgComponent = props => (
  <Svg
    width={47}
    height={47}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <G clipPath="url(#a)">
      <Path
        d="M45.101 16.974 34.886 6.76c-1.824-1.825-3.27-1.58-4.16-1.055a2.673 2.673 0 0 0-1.344 2.353v6.82H23.74C8.209 14.878 0 23.828 0 40.758a.918.918 0 0 0 1.713.46c.262-.454.516-.902.768-1.344 3.836-6.753 6.608-11.632 21.258-11.632h5.644v6.821a2.673 2.673 0 0 0 1.343 2.353c.891.526 2.337.77 4.16-1.055l10.215-10.214a6.488 6.488 0 0 0 0-9.173Zm-1.298 7.874L33.589 35.063c-1.202 1.201-1.73.89-1.93.772a.856.856 0 0 1-.44-.772v-7.739a.918.918 0 0 0-.919-.917H23.74c-7.175 0-12.196 1.165-15.8 3.668-2.68 1.861-4.385 4.319-5.96 6.99 1.088-13.508 8.394-20.35 21.76-20.35H30.3a.918.918 0 0 0 .918-.919V8.058a.855.855 0 0 1 .44-.772c.2-.117.729-.43 1.93.772l10.214 10.214a4.655 4.655 0 0 1 0 6.576Z"
        fill="#B91010"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h47v47H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default SvgComponent;