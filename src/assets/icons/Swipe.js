import * as React from 'react';
import Svg, {G, Path, Defs, ClipPath} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: filter */

const SvgComponent = props => (
  <Svg
    width={56}
    height={76}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <G filter="url(#b)" fill="#1E1E1E" fillOpacity={0.77} clipPath="url(#a)">
      <Path d="M43.556 19.963a2.271 2.271 0 0 0-2.269 2.269v1.814a.907.907 0 0 1-1.815 0v-4.083a2.271 2.271 0 0 0-2.268-2.268 2.271 2.271 0 0 0-2.269 2.268v3.63a.907.907 0 0 1-1.815 0v-5.445a2.271 2.271 0 0 0-2.268-2.268 2.271 2.271 0 0 0-2.269 2.268v5.445a.907.907 0 0 1-1.815 0V6.806A2.271 2.271 0 0 0 24.5 4.537a2.271 2.271 0 0 0-2.269 2.269v21.648c0 .981-.575 1.883-1.465 2.297a2.52 2.52 0 0 1-3.262-1.03l-2.723-4.716a4.055 4.055 0 0 0-2.48-1.903 4.055 4.055 0 0 0-3.098.408.452.452 0 0 0-.166.62l10.259 17.763A14.258 14.258 0 0 0 31.607 49c7.84 0 14.217-6.378 14.217-14.217V22.231a2.271 2.271 0 0 0-2.268-2.268Z" />
      <Path d="M24.5 2.722a4.088 4.088 0 0 1 4.083 4.084v5.444a6.824 6.824 0 0 0 2.723-5.444A6.813 6.813 0 0 0 24.5 0a6.813 6.813 0 0 0-6.806 6.806 6.825 6.825 0 0 0 2.723 5.444V6.806A4.088 4.088 0 0 1 24.5 2.722ZM3.245 6.459c-.012.03-.02.06-.028.091-.008.026-.018.05-.023.078a.91.91 0 0 0 0 .355c.005.027.015.052.023.078.009.03.016.062.028.091.013.031.03.059.046.087.013.023.023.047.038.07.033.05.07.096.113.139l4.31 4.31a.904.904 0 0 0 1.283 0 .907.907 0 0 0 0-1.284L6.274 7.713h8.698a.907.907 0 0 0 0-1.815H6.274l2.761-2.761a.907.907 0 1 0-1.283-1.283l-4.31 4.31a.912.912 0 0 0-.113.138c-.015.022-.025.046-.038.07-.016.028-.033.056-.046.087ZM39.965 11.757a.904.904 0 0 0 1.283 0l4.31-4.31a.912.912 0 0 0 .113-.138c.015-.022.025-.046.038-.07.016-.028.033-.056.046-.086.012-.03.019-.061.028-.092.008-.026.018-.05.023-.078a.908.908 0 0 0 0-.355c-.005-.027-.015-.052-.023-.078-.009-.03-.016-.062-.028-.091-.013-.03-.03-.059-.046-.087-.013-.023-.023-.047-.038-.07a.912.912 0 0 0-.114-.139l-4.31-4.31a.907.907 0 1 0-1.282 1.284l2.76 2.761h-8.697a.908.908 0 0 0 0 1.815h8.698l-2.761 2.761a.907.907 0 0 0 0 1.283Z" />
    </G>
    <G filter="url(#c)">
      <Path
        d="M15.42 63.775c-.13-.12-.32-.245-.57-.375-.24-.13-.52-.24-.84-.33a3.695 3.695 0 0 0-1.005-.135c-.58 0-1.01.09-1.29.27a.867.867 0 0 0-.405.765c0 .24.08.43.24.57.16.14.4.26.72.36.33.09.74.195 1.23.315.6.14 1.12.305 1.56.495.44.18.78.425 1.02.735.24.3.36.7.36 1.2 0 .44-.085.815-.255 1.125-.17.31-.41.565-.72.765-.3.19-.65.33-1.05.42-.4.09-.825.135-1.275.135-.68 0-1.345-.095-1.995-.285a6.086 6.086 0 0 1-1.725-.81l.675-1.29c.17.16.405.32.705.48.31.16.67.295 1.08.405.41.11.84.165 1.29.165.53 0 .94-.08 1.23-.24.29-.17.435-.41.435-.72 0-.26-.1-.465-.3-.615-.19-.15-.465-.28-.825-.39-.36-.11-.795-.225-1.305-.345a8.645 8.645 0 0 1-1.47-.495c-.38-.19-.67-.425-.87-.705-.2-.29-.3-.655-.3-1.095 0-.55.145-1.01.435-1.38.29-.38.68-.665 1.17-.855.5-.2 1.055-.3 1.665-.3.61 0 1.175.09 1.695.27.52.18.97.405 1.35.675l-.66 1.215Zm5.694-2.055h1.38l1.125 2.775 1.125-2.775h1.38l-1.575 3.75 1.305 2.73 2.895-6.525h1.635L26.589 70h-1.26l-1.71-3.585L21.924 70h-1.275l-3.78-8.325h1.62l2.91 6.525 1.275-2.73-1.56-3.75Zm10.5 8.28v-8.325h1.485V70h-1.485Zm3.706 0v-8.325h3.855c.55 0 1.04.14 1.47.42.44.27.78.615 1.02 1.035.25.41.375.84.375 1.29 0 .47-.115.915-.345 1.335-.23.42-.555.76-.975 1.02-.42.26-.91.39-1.47.39h-2.445V70H35.32Zm1.485-4.14h2.355c.27 0 .505-.06.705-.18.21-.13.37-.3.48-.51.12-.22.18-.47.18-.75 0-.29-.07-.54-.21-.75a1.388 1.388 0 0 0-.525-.495c-.21-.12-.445-.18-.705-.18h-2.28v2.865Zm13.062 2.82V70h-6.315v-8.325h6.195v1.32h-4.71v2.16h4.08v1.215h-4.08v2.31h4.83Z"
        fill="#1E1E1E"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h49v49H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default SvgComponent;
