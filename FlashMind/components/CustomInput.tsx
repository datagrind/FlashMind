import React from 'react';
import { TextInput, TextInputProps } from 'react-native';

const CustomInput = React.forwardRef<TextInput, TextInputProps>((props, ref) => {
  return <TextInput ref={ref} {...props} />;
});

export default CustomInput;
