import {HStack, Tooltip} from 'native-base';
import Icon from 'react-native-ionicons';

export default function PlusButton({navigation, screen, help}) {
  return (
    <HStack justifyContent={'center'}>
      <Tooltip label={help} openDelay={500}>
        <Icon
          name="add-circle"
          style={{
            color: '#52FF33',
            fontSize: 50,
          }}
          onPress={() => navigation.navigate(screen)}
        />
      </Tooltip>
    </HStack>
  );
}
