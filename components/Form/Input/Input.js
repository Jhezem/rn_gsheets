import React from 'react';
import {FormControl, Input} from 'native-base';

export default function MyInput({label, handleChange}) {
  return (
    <FormControl mb={5} isRequired>
      <FormControl.Label>{label}</FormControl.Label>
      <Input onChangeText={handleChange}/>
    </FormControl>
  );
}
