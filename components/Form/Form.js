import React, {useState} from 'react';
import {Center, VStack, Heading, Button} from 'native-base';
import Input from './Input/Input';
import { usePostBooks } from '../../hooks/useBooks';
import { useForm } from '../../hooks/useForm';

export default function Form() {
  
  const { mutate } = usePostBooks();
  const {formData, setFormData, validateForm} = useForm({
    name: '',
    categoria: '',
    tipo: '',
  });

  const handleChange = (value, name) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };


  const enviar = () => {
    if(!validateForm()) return alert('Campos vacios');
    const libroData = {
        action: 'add',
        collection: 'books',
        data: formData
    }
    mutate(libroData);
  }

  return (
    <VStack
      width={'90%'}
      mx={3}
      direction={'column'}
      pt={2}
      alignItems={'center'}>
      <Center width={'100%'}>
        <Heading bold>Agregar libro</Heading>
        <Input label={'Nombre'} handleChange={value => handleChange(value, 'name')} />
        <Input label={'Categoria'} handleChange={value => handleChange(value, 'categoria')}/>
        <Input label={'Tipo'} handleChange={value => handleChange(value, 'tipo')}/>
        <Input label={'Precio'} handleChange={value => handleChange(value, 'price')}/>
        <Input label={'Author ID'} handleChange={value => handleChange(value, 'authorId')}/>
        <Input label={'Author'} handleChange={value => handleChange(value, 'authorName')}/>
        <Input label={'Prologo'} handleChange={value => handleChange(value, 'prologo')}/>
        <Input label={'Fecha de publicacion'} handleChange={value => handleChange(value, 'publicacion')}/>
        <Input label={'Portada'} handleChange={value => handleChange(value, 'portada')}/>
        <Button mt={5} mb={5} size={"lg"} onPress={enviar} backgroundColor={"#8b5cf6"}>Agregar</Button>
      </Center>
    </VStack>
  );
}