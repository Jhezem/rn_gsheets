import {HStack, Tooltip} from 'native-base';
import Icon from 'react-native-ionicons';

export const CrudActions = ({children}) => {
 return (
  <HStack space={2}>
  {children}
  </HStack>
 )
};

export default function Action({help, icon, color, onPress}) {
  return (
      <Tooltip label={help} openDelay={500}>
        <Icon
          name={icon}
          style={{
            color: color,
            fontSize: 50,
          }}
          onPress={onPress}
        />
      </Tooltip>
  );
}
