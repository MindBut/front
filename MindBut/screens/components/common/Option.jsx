import { 
  Text,
  StyleSheet, 
  Pressable,
  View,
  FlatList,
  Dimensions,
} from 'react-native';
import { Colors, Fonts } from './styles';

/**
 * Option component for selection.
 * 
 */
export default Option = ({ text, onPress, selected }) => {
  const selectedBackground = selected ? {...styles.option, ...styles.optionSelected} : styles.option;
  const selectedColor = selected ? {...styles.optionText, ...styles.optionTextSelected} : styles.optionText;
  return (
    <Pressable 
      onPress={onPress} 
      style={selectedBackground}>
      <Text style={selectedColor}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  option: {
    paddingVertical: 18,
    paddingHorizontal: 25,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: Colors.lightGray,
    backgroundColor: Colors.secondary,
    marginVertical: 10,
    width: '100%',
    alignItems: 'center',
    ...Platform.select({
      ios: { 
        shadowColor: "#7090B0",
        shadowOffset: {
	        width: 0,
	        height: 2,
        },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      },
      android: { 
        elevation: 12,
      },
    })
  },
  optionSelected: {
    borderWidth: 1,
    borderColor: Colors.primary,
    backgroundColor: Colors.tertiary,
  },
  optionText: {
    fontFamily: Fonts.body,
    fontSize: 18,
  },
  optionTextSelected: {
    fontFamily: Fonts.header,
    color: Colors.primary
  },
});
