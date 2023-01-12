import {VStack, Spinner, Heading} from 'native-base';

export default function MySpinner({color, text, textColor}) {
  return (
    <VStack
      h={100}
      flexGrow={1}
      alignItems={'center'}
      justifyContent={'center'}
      space={2}>
      <Spinner
        style={{
          color: color,
        }}
        size={'lg'}
        accessibilityLabel={text}
      />
      <Heading style={{color: textColor}}>{text}</Heading>
    </VStack>
  );
}
