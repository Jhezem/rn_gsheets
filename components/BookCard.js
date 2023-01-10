import {
  AspectRatio,
  Box,
  Center,
  Heading,
  Text,
  Image,
  Stack,
  HStack,
  VStack,
} from 'native-base';
import React from 'react';
import Icon from 'react-native-ionicons';

export default function BookCard({libros}) {
  if (!libros || Object.keys(libros).length === 0) {
    return (
      <Center p={5}>
        <Heading color={'red.600'}>
          Oops aun no hay libros <Icon name={'sad'} />
        </Heading>
        <Heading color={'#52FF33'} fontSize={20} mt={5}>
          Intenta agregando un nuevo con el botón de abajo{' '}
          <Icon name={'happy'} />
        </Heading>
      </Center>
    );
  }

  return (
    <VStack space={3} w={'100%'} px={3}>
      {libros.map(libro => {
        return (
          <Box alignItems={'center'} key={libro.id}>
            <Box
              maxW={80}
              rounded={'lg'}
              overflow={'hidden'}
              borderColor={'coolGray.200'}
              borderWidth={1}
              _dark={{
                borderColor: 'coolGray.600',
                backgroundColor: 'gray.700',
              }}
              _light={{
                backgroundColor: 'gray.50',
              }}>
              <Box>
                <AspectRatio w={'100%'}>
                  <Image
                    source={{
                      uri: libro.portada,
                    }}
                    alt={'Book'}
                  />
                </AspectRatio>
                <Center
                  bg={'violet.400'}
                  _text={{
                    color: 'warmGray.50',
                    fontWeight: 700,
                    fontSize: 'xs',
                  }}
                  position={'absolute'}
                  bottom={0}
                  px={3}
                  py={1.5}>
                  {libro.tipo}
                </Center>
              </Box>
              <Stack p={4} space={3}>
                <Stack space={2}>
                  <Heading size={'md'} ml={-1}>
                    {libro.name}
                  </Heading>
                  <Text
                    fontSize="xs"
                    _light={{
                      color: 'violet.500',
                    }}
                    _dark={{
                      color: 'violet.400',
                    }}
                    fontWeight="500"
                    ml="-0.5"
                    mt="-1">
                    {libro.authorName}
                  </Text>
                </Stack>
                <Text fontWeight="400">{libro.prologo}</Text>
                <HStack
                  alignItems="center"
                  space={4}
                  justifyContent="space-between">
                  <HStack alignItems="center">
                    <Text
                      color="coolGray.600"
                      _dark={{
                        color: 'warmGray.200',
                      }}
                      fontWeight="400">
                      {libro.publicacion}
                    </Text>
                  </HStack>
                </HStack>
              </Stack>
            </Box>
          </Box>
        );
      })}
    </VStack>
  );
}
