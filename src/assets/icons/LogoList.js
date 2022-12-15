import * as React from 'react';
import Svg, {G, Path, Defs, LinearGradient, Stop} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: filter */

const SvgComponent = props => (
  <Svg
    width={129}
    height={68}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <G filter="url(#a)">
      <G filter="url(#b)">
        <Path
          d="M63.5 28.703c-1.06 0-2.087.372-2.901 1.05a2.548 2.548 0 0 1-1.63.59 2.687 2.687 0 0 1-2.688-2.687 2.125 2.125 0 0 1 1.093-1.857l.427-.237a4.72 4.72 0 0 0 2.064-2.31 3.937 3.937 0 0 1 7.27 0 4.72 4.72 0 0 0 2.064 2.31l.426.237a2.125 2.125 0 0 1 1.094 1.857 2.687 2.687 0 0 1-2.688 2.688c-.595 0-1.172-.21-1.63-.59a4.532 4.532 0 0 0-2.901-1.05Z"
          fill="url(#c)"
        />
        <Path
          d="M60.547 20.828c1.087 0 1.969-1.322 1.969-2.953 0-1.631-.882-2.953-1.97-2.953-1.086 0-1.968 1.322-1.968 2.953 0 1.631.882 2.953 1.969 2.953Z"
          fill="url(#d)"
        />
        <Path
          d="M66.453 20.828c1.087 0 1.969-1.322 1.969-2.953 0-1.631-.882-2.953-1.969-2.953-1.087 0-1.969 1.322-1.969 2.953 0 1.631.882 2.953 1.97 2.953Z"
          fill="url(#e)"
        />
        <Path
          d="M56.61 24.766c1.087 0 1.968-1.176 1.968-2.625 0-1.45-.881-2.625-1.969-2.625-1.087 0-1.968 1.175-1.968 2.625s.881 2.625 1.968 2.625Z"
          fill="url(#f)"
        />
        <Path
          d="M70.39 24.766c1.088 0 1.97-1.176 1.97-2.625 0-1.45-.882-2.625-1.97-2.625-1.087 0-1.968 1.175-1.968 2.625s.881 2.625 1.969 2.625Z"
          fill="url(#g)"
        />
        <Path
          d="M56.14 18.531a.798.798 0 0 0 .713-1.153 2.31 2.31 0 0 1-.244-1.033V15.25l-.112.15a4.358 4.358 0 0 0-.872 2.615.516.516 0 0 0 .516.516Z"
          fill="url(#h)"
        />
        <Path
          d="M60.735 13.938a.797.797 0 0 0 .712-1.154 2.314 2.314 0 0 1-.244-1.033v-1.095l-.112.15a4.357 4.357 0 0 0-.872 2.616.516.516 0 0 0 .516.515Z"
          fill="url(#i)"
        />
        <Path
          d="M70.86 18.531a.797.797 0 0 1-.713-1.153c.16-.32.244-.674.244-1.033V15.25l.112.15c.566.755.872 1.672.872 2.615a.516.516 0 0 1-.516.516Z"
          fill="url(#j)"
        />
        <Path
          d="M66.265 13.938a.797.797 0 0 1-.712-1.154c.16-.32.244-.674.244-1.033v-1.095l.112.15c.566.755.872 1.673.872 2.616a.516.516 0 0 1-.516.515Z"
          fill="url(#k)"
        />
      </G>
      <G filter="url(#l)">
        <Path
          d="M11.92 56V38.96h7.152c.768 0 1.472.16 2.112.48.64.32 1.2.744 1.68 1.272s.848 1.12 1.104 1.776a5.5 5.5 0 0 1 .384 2.016c0 .944-.216 1.848-.648 2.712a5.218 5.218 0 0 1-1.8 2.064c-.768.528-1.664.792-2.688.792h-4.608V56H11.92Zm2.688-8.304h4.44c.512 0 .96-.136 1.344-.408.384-.288.68-.672.888-1.152.224-.48.336-1.024.336-1.632 0-.624-.128-1.176-.384-1.656s-.592-.848-1.008-1.104c-.4-.272-.84-.408-1.32-.408h-4.296v6.36Zm15.966-8.736h2.544L39.742 56H36.91l-1.8-4.632h-6.576L26.758 56h-2.856l6.672-17.04Zm4.008 10.416-2.736-7.464-2.832 7.464h5.568Zm11.91-10.344h2.52l2.111 5.784 2.136-5.784h2.52l-2.928 7.584 2.544 6.264L60.7 38.96h2.952L56.667 56H54.34l-3.192-7.632L47.931 56H45.58l-6.96-17.04h2.928l5.328 13.92 2.544-6.264-2.928-7.584ZM65.661 56V38.96h7.152c.768 0 1.472.16 2.112.48.64.32 1.2.744 1.68 1.272s.848 1.12 1.104 1.776a5.5 5.5 0 0 1 .384 2.016c0 .944-.216 1.848-.648 2.712a5.218 5.218 0 0 1-1.8 2.064c-.768.528-1.664.792-2.688.792H68.35V56h-2.688Zm2.688-8.304h4.44c.512 0 .96-.136 1.344-.408.384-.288.68-.672.888-1.152.224-.48.336-1.024.336-1.632 0-.624-.128-1.176-.384-1.656s-.592-.848-1.008-1.104c-.4-.272-.84-.408-1.32-.408H68.35v6.36Zm15.967-8.736h2.544L93.485 56h-2.832l-1.8-4.632h-6.576L80.5 56h-2.856l6.672-17.04Zm4.008 10.416-2.736-7.464-2.832 7.464h5.568Zm11.909-10.344h2.52l2.112 5.784 2.136-5.784h2.52l-2.928 7.584 2.544 6.264 5.304-13.92h2.952L110.41 56h-2.328l-3.192-7.632L101.674 56h-2.352l-6.96-17.04h2.928l5.328 13.92 2.544-6.264-2.928-7.584Z"
          fill="url(#m)"
          shapeRendering="crispEdges"
        />
      </G>
    </G>
    <Defs>
      <LinearGradient
        id="c"
        x1={63.5}
        y1={20.828}
        x2={63.5}
        y2={30.344}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#B91010" />
        <Stop offset={0.922} stopColor="#1E1E1E" stopOpacity={0.49} />
      </LinearGradient>
      <LinearGradient
        id="d"
        x1={60.547}
        y1={14.922}
        x2={60.547}
        y2={20.828}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#B91010" />
        <Stop offset={0.922} stopColor="#1E1E1E" stopOpacity={0.49} />
      </LinearGradient>
      <LinearGradient
        id="e"
        x1={66.453}
        y1={14.922}
        x2={66.453}
        y2={20.828}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#B91010" />
        <Stop offset={0.922} stopColor="#1E1E1E" stopOpacity={0.49} />
      </LinearGradient>
      <LinearGradient
        id="f"
        x1={56.609}
        y1={19.516}
        x2={56.609}
        y2={24.766}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#B91010" />
        <Stop offset={0.922} stopColor="#1E1E1E" stopOpacity={0.49} />
      </LinearGradient>
      <LinearGradient
        id="g"
        x1={70.391}
        y1={19.516}
        x2={70.391}
        y2={24.766}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#B91010" />
        <Stop offset={0.922} stopColor="#1E1E1E" stopOpacity={0.49} />
      </LinearGradient>
      <LinearGradient
        id="h"
        x1={56.281}
        y1={15.25}
        x2={56.281}
        y2={18.531}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#B91010" />
        <Stop offset={0.922} stopColor="#1E1E1E" stopOpacity={0.49} />
      </LinearGradient>
      <LinearGradient
        id="i"
        x1={60.875}
        y1={10.656}
        x2={60.875}
        y2={13.938}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#B91010" />
        <Stop offset={0.922} stopColor="#1E1E1E" stopOpacity={0.49} />
      </LinearGradient>
      <LinearGradient
        id="j"
        x1={70.719}
        y1={15.25}
        x2={70.719}
        y2={18.531}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#B91010" />
        <Stop offset={0.922} stopColor="#1E1E1E" stopOpacity={0.49} />
      </LinearGradient>
      <LinearGradient
        id="k"
        x1={66.125}
        y1={10.656}
        x2={66.125}
        y2={13.938}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#B91010" />
        <Stop offset={0.922} stopColor="#1E1E1E" stopOpacity={0.49} />
      </LinearGradient>
      <LinearGradient
        id="m"
        x1={64}
        y1={34}
        x2={64}
        y2={62}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#B91010" />
        <Stop offset={0.922} stopColor="#1E1E1E" stopOpacity={0.49} />
      </LinearGradient>
    </Defs>
  </Svg>
);

export default SvgComponent;
