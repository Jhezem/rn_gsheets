import React, {useEffect} from 'react';
import {VStack, Image, Text, AspectRatio} from 'native-base';

export default function Book({navigation, route}) {
  const {book} = route.params;

  useEffect(() => {
    navigation.setOptions({
      title: book.name,
    });
  }, []);

  return (
    <VStack
      h={100}
      flexGrow={'0.3'}
      alignItems={'center'}
      justifyContent={'center'}
      mt={5}
      space={2}>
        <AspectRatio size={'3/4'}>
          <Image source={{
            uri: book.portada
          }}
          alt={'Portada'}
          />
        </AspectRatio>
      <Text>
        <Text bold>{book.name}</Text> es un libro creado por el autor 
        <Text bold> {book.authorName}</Text>
      </Text>
      <Text>
        Este libro se encuentra en la categoria <Text bold>{book.tipo}</Text> y tiene un costo de
        <Text bold> ${book.price}</Text>
      </Text>
    </VStack>
  );
}
