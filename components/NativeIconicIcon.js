import { Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
// Ionicons version 5.5.2

function NativeIconicIcon({ name, ...props }) {
  const fullName = Platform.OS === 'ios' ? `ios-${name}` : `md-${name}`;
  return <Icon name={fullName} {...props} />
}


export default NativeIconicIcon;