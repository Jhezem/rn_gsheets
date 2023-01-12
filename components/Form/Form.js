import {Center, VStack, Heading, Button} from 'native-base';
import Input from './Input/Input';
import {useForm} from '../../hooks/useForm';
import {formatFormData} from '../../helpers/formatData';

export default function Form({inputs, title, onSubmit}) {
  const {formData, setFormData, validateForm} = useForm(inputs);

  const handleChange = (value, name) => {
    setFormData(current =>
      current.map(input => {
        if (input.name === name) {
          return {...input, value: value};
        }
        return input;
      }),
    );
  };

  const handleSubmit = callback => {
    if (!validateForm()) return alert('Campos vacios');
    const data = formatFormData(formData);
    callback(data);
  };

  return (
    <VStack
      width={'90%'}
      mx={3}
      direction={'column'}
      pt={2}
      alignItems={'center'}>
      <Center width={'100%'}>
        {title && <Heading bold>{title}</Heading>}
        {formData.map((input, index) => {
          return (
            <Input
              label={input.label}
              handleChange={value => handleChange(value, input.name)}
              key={index}
              value={input.value}
            />
          );
        })}
        <Button
          mt={5}
          mb={5}
          size={'lg'}
          onPress={() => handleSubmit(onSubmit)}
          backgroundColor={'#8b5cf6'}>
          Agregar
        </Button>
      </Center>
    </VStack>
  );
}
