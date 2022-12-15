import * as React from 'react';
import Svg, {Path, Defs, LinearGradient, Stop} from 'react-native-svg';

const SvgComponent = props => (
  <Svg
    width={65}
    height={65}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M32.5 57.89c-3.281 0-6.458 1.15-8.98 3.25a7.886 7.886 0 0 1-5.046 1.829 8.319 8.319 0 0 1-8.318-8.318 6.58 6.58 0 0 1 3.383-5.75l1.32-.734a14.607 14.607 0 0 0 6.39-7.151 12.187 12.187 0 0 1 22.5 0 14.607 14.607 0 0 0 6.39 7.151l1.32.734a6.58 6.58 0 0 1 3.385 5.75 8.318 8.318 0 0 1-8.318 8.318 7.886 7.886 0 0 1-5.047-1.828 14.027 14.027 0 0 0-8.979-3.25Z"
      fill="url(#a)"
    />
    <Path
      d="M23.36 33.516c3.365 0 6.093-4.093 6.093-9.141s-2.728-9.14-6.094-9.14c-3.365 0-6.093 4.092-6.093 9.14 0 5.048 2.728 9.14 6.093 9.14Z"
      fill="url(#b)"
    />
    <Path
      d="M41.64 33.516c3.366 0 6.094-4.093 6.094-9.141s-2.728-9.14-6.093-9.14c-3.366 0-6.094 4.092-6.094 9.14 0 5.048 2.728 9.14 6.094 9.14Z"
      fill="url(#c)"
    />
    <Path
      d="M11.172 45.703c3.365 0 6.094-3.638 6.094-8.125s-2.729-8.125-6.094-8.125c-3.366 0-6.094 3.638-6.094 8.125s2.728 8.125 6.094 8.125Z"
      fill="url(#d)"
    />
    <Path
      d="M53.828 45.703c3.366 0 6.094-3.638 6.094-8.125s-2.728-8.125-6.094-8.125c-3.365 0-6.094 3.638-6.094 8.125s2.729 8.125 6.094 8.125Z"
      fill="url(#e)"
    />
    <Path
      d="M9.722 26.406a2.464 2.464 0 0 0 2.205-3.569 7.155 7.155 0 0 1-.755-3.197v-3.39l-.349.465a13.487 13.487 0 0 0-2.698 8.095 1.597 1.597 0 0 0 1.597 1.596Z"
      fill="url(#f)"
    />
    <Path
      d="M23.94 12.188a2.467 2.467 0 0 0 2.205-3.57 7.157 7.157 0 0 1-.754-3.197v-3.39l-.349.465a13.487 13.487 0 0 0-2.698 8.095 1.597 1.597 0 0 0 1.596 1.597Z"
      fill="url(#g)"
    />
    <Path
      d="M55.278 26.406a2.466 2.466 0 0 1-2.204-3.569 7.155 7.155 0 0 0 .754-3.197v-3.39l.348.465a13.488 13.488 0 0 1 2.699 8.095 1.597 1.597 0 0 1-1.597 1.596Z"
      fill="url(#h)"
    />
    <Path
      d="M41.06 12.188a2.466 2.466 0 0 1-2.205-3.57 7.157 7.157 0 0 0 .754-3.197v-3.39l.349.465a13.487 13.487 0 0 1 2.698 8.095 1.596 1.596 0 0 1-1.596 1.597Z"
      fill="url(#i)"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={32.5}
        y1={33.516}
        x2={32.5}
        y2={62.969}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#B91010" />
        <Stop offset={0.941} stopColor="#1E1E1E" />
      </LinearGradient>
      <LinearGradient
        id="b"
        x1={23.359}
        y1={15.234}
        x2={23.359}
        y2={33.516}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#B91010" />
        <Stop offset={0.941} stopColor="#1E1E1E" />
      </LinearGradient>
      <LinearGradient
        id="c"
        x1={41.641}
        y1={15.234}
        x2={41.641}
        y2={33.516}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#B91010" />
        <Stop offset={0.941} stopColor="#1E1E1E" />
      </LinearGradient>
      <LinearGradient
        id="d"
        x1={11.172}
        y1={29.453}
        x2={11.172}
        y2={45.703}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#B91010" />
        <Stop offset={0.941} stopColor="#1E1E1E" />
      </LinearGradient>
      <LinearGradient
        id="e"
        x1={53.828}
        y1={29.453}
        x2={53.828}
        y2={45.703}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#B91010" />
        <Stop offset={0.941} stopColor="#1E1E1E" />
      </LinearGradient>
      <LinearGradient
        id="f"
        x1={10.156}
        y1={16.25}
        x2={10.156}
        y2={26.406}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#B91010" />
        <Stop offset={0.941} stopColor="#1E1E1E" />
      </LinearGradient>
      <LinearGradient
        id="g"
        x1={24.375}
        y1={2.031}
        x2={24.375}
        y2={12.188}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#B91010" />
        <Stop offset={0.941} stopColor="#1E1E1E" />
      </LinearGradient>
      <LinearGradient
        id="h"
        x1={54.844}
        y1={16.25}
        x2={54.844}
        y2={26.406}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#B91010" />
        <Stop offset={0.941} stopColor="#1E1E1E" />
      </LinearGradient>
      <LinearGradient
        id="i"
        x1={40.625}
        y1={2.031}
        x2={40.625}
        y2={12.188}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#B91010" />
        <Stop offset={0.941} stopColor="#1E1E1E" />
      </LinearGradient>
    </Defs>
  </Svg>
);

export default SvgComponent;
