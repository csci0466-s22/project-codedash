import {Platform} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


function NativeIconicIcon({name, ...props}){
  const fullName = Platform.OS === 'ios' ? `ios-${name}` : `md-${name}`;
  return <Icon name={fullName} {...props} />
}


export default NativeIconicIcon;