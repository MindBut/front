import { 
  Platform, 
  Text,
  StyleSheet, 
  Pressable,
} from 'react-native';
import { Colors, Fonts } from '../styles';

/**
 * A select option to be used for rendering `<FlatList />`.
 * 
 */
export default SelectOption = ({ text, onPress, selected }) => {
  const backgroundColor = (selected) ? Colors.main2 : Colors.white;
  const textColor = (selected) ? Colors.white : '#000000';
  return (
    <Pressable 
      onPress={onPress} 
      style={{...styles.option, backgroundColor: backgroundColor}}>
      <Text style={{...styles.text, color: textColor}}>{text}</Text>
    </Pressable>
  );
};

styles = StyleSheet.create({
  option: {
    paddingVertical: 25,
    paddingHorizontal: 25,
    borderRadius: 16,
    // width: '100%',
    marginVertical: 10,
    marginHorizontal: 20,
    ...Platform.select({
      ios: { 
        shadowColor: "#7090B0",
        shadowOffset: {
	        width: 0,
	        height: 2,
        },
      shadowOpacity: 0.2,
      shadowRadius: 4,
      },
      android: { 
        elevation: 12,
      },
    })
  },
  text: {
    fontFamily: Fonts.header,
    fontSize: 18,
  },
});