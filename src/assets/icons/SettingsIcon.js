import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const SvgComponent = props => (
  <Svg
    width={21}
    height={25}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M10.271 12.043c1.655 0 3.087-.594 4.258-1.764 1.17-1.171 1.764-2.603 1.764-4.258 0-1.654-.594-3.086-1.764-4.257C13.357.594 11.924 0 10.27 0S7.184.593 6.014 1.764C4.844 2.934 4.25 4.367 4.25 6.02c0 1.655.593 3.087 1.764 4.258 1.17 1.17 2.603 1.764 4.257 1.764ZM7.05 2.8c.898-.898 1.952-1.335 3.221-1.335 1.27 0 2.323.437 3.222 1.335.898.898 1.335 1.952 1.335 3.221 0 1.27-.437 2.323-1.335 3.222-.899.898-1.953 1.335-3.222 1.335S7.948 10.14 7.05 9.243C6.15 8.344 5.715 7.29 5.715 6.02c0-1.269.436-2.323 1.335-3.221ZM20.807 19.224a14.861 14.861 0 0 0-.202-1.58c-.102-.565-.233-1.1-.389-1.588a7.842 7.842 0 0 0-.653-1.481 5.59 5.59 0 0 0-.984-1.284 4.343 4.343 0 0 0-1.415-.888 4.887 4.887 0 0 0-1.805-.327c-.255 0-.502.105-.979.415-.293.191-.636.413-1.02.658-.327.208-.77.404-1.319.58a5.238 5.238 0 0 1-1.613.261 5.242 5.242 0 0 1-1.613-.26c-.548-.177-.992-.373-1.319-.581-.379-.243-.722-.464-1.02-.658-.476-.31-.723-.415-.978-.415-.65 0-1.258.11-1.806.327a4.337 4.337 0 0 0-1.414.889 5.587 5.587 0 0 0-.984 1.283 7.86 7.86 0 0 0-.653 1.481 12.473 12.473 0 0 0-.388 1.588c-.101.56-.17 1.092-.203 1.58-.033.478-.05.975-.05 1.477 0 1.305.415 2.361 1.233 3.14C2.04 24.611 3.11 25 4.41 25h12.038c1.3 0 2.368-.39 3.177-1.159.818-.778 1.233-1.835 1.233-3.14 0-.504-.018-1.001-.05-1.477Zm-2.193 3.556c-.533.508-1.242.755-2.166.755H4.41c-.925 0-1.633-.247-2.167-.755-.524-.498-.778-1.179-.778-2.08 0-.468.015-.93.046-1.374.03-.436.092-.915.183-1.423.09-.502.206-.974.342-1.4.131-.41.31-.815.531-1.205.212-.372.455-.69.724-.948.251-.24.568-.437.94-.585a3.374 3.374 0 0 1 1.155-.223c.05.028.142.08.29.176.301.197.649.42 1.032.666.433.275.99.525 1.656.74.68.22 1.375.331 2.064.331.69 0 1.384-.111 2.064-.331.667-.216 1.224-.465 1.657-.74.393-.252.73-.47 1.031-.666a4.02 4.02 0 0 1 .29-.175c.422.01.81.086 1.155.222.373.148.69.345.94.585.27.257.513.576.724.949.222.39.401.795.532 1.204.137.427.252.898.342 1.4.09.51.153.988.183 1.423.03.442.046.905.047 1.375 0 .9-.255 1.58-.779 2.079Z"
      fill={props.color}
    />
  </Svg>
);

export default SvgComponent;