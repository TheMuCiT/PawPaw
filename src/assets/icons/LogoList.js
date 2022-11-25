import * as React from 'react';
import Svg, {G, Path, Defs} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: filter */

const SvgComponent = props => (
  <Svg
    width={27}
    height={29}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <G filter="url(#a)" fill="#B91010">
      <Path d="M13.5 18.703c-1.06 0-2.086.372-2.901 1.05a2.548 2.548 0 0 1-1.63.59 2.687 2.687 0 0 1-2.688-2.687A2.125 2.125 0 0 1 7.374 15.8l.427-.237a4.72 4.72 0 0 0 2.064-2.31 3.937 3.937 0 0 1 7.27 0 4.72 4.72 0 0 0 2.064 2.31l.426.237a2.125 2.125 0 0 1 1.094 1.857 2.687 2.687 0 0 1-2.688 2.688c-.595 0-1.172-.21-1.63-.59a4.532 4.532 0 0 0-2.901-1.05ZM10.547 10.828c1.087 0 1.969-1.322 1.969-2.953 0-1.631-.882-2.953-1.97-2.953-1.086 0-1.968 1.322-1.968 2.953 0 1.631.882 2.953 1.969 2.953ZM16.453 10.828c1.087 0 1.969-1.322 1.969-2.953 0-1.631-.882-2.953-1.969-2.953-1.087 0-1.969 1.322-1.969 2.953 0 1.631.882 2.953 1.97 2.953ZM6.61 14.766c1.087 0 1.968-1.176 1.968-2.625 0-1.45-.881-2.625-1.969-2.625-1.087 0-1.968 1.175-1.968 2.625s.881 2.625 1.968 2.625ZM20.39 14.766c1.088 0 1.97-1.176 1.97-2.625 0-1.45-.882-2.625-1.97-2.625-1.087 0-1.968 1.175-1.968 2.625s.881 2.625 1.969 2.625ZM6.14 8.531a.797.797 0 0 0 .713-1.153 2.312 2.312 0 0 1-.244-1.033V5.25l-.112.15a4.358 4.358 0 0 0-.872 2.615.516.516 0 0 0 .516.516ZM10.735 3.938a.796.796 0 0 0 .712-1.154 2.313 2.313 0 0 1-.244-1.032V.656l-.112.15a4.357 4.357 0 0 0-.872 2.616.516.516 0 0 0 .516.515ZM20.86 8.531a.797.797 0 0 1-.713-1.153c.16-.32.244-.674.244-1.033V5.25l.112.15c.566.755.872 1.672.872 2.615a.516.516 0 0 1-.516.516ZM16.265 3.938a.797.797 0 0 1-.712-1.154c.16-.32.244-.674.244-1.032V.656l.112.15c.566.755.872 1.673.872 2.616a.516.516 0 0 1-.516.515Z" />
    </G>
    <Defs></Defs>
  </Svg>
);

export default SvgComponent;