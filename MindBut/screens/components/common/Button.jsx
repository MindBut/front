import { 
  Text,
  StyleSheet, 
  Pressable,
} from 'react-native';
import { Colors, Fonts } from './styles';

/**
 * A button.
 * 
 */
export default Button = ({ text, onPress, disabled }) => {
  return (
    <Pressable 
      onPress={onPress} 
      style={{
        ...styles.button, 
        backgroundColor: disabled ? Colors.lightGray : Colors.main1,
      }}
      disabled={disabled}>
      <Text style={styles.buttonText}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 15,
    borderRadius: 16,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: Colors.white,
    fontFamily: Fonts.header,
    fontSize: 20,
  }
})