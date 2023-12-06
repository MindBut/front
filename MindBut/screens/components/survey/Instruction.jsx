import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import { Colors, Fonts } from '../common/styles';

/**
 * Guidance text in survey pages.
 * 
 * @param {*} props { title, description }
 * @returns Render title and description for guidance text.
 */
export default Instruction = ({ title, description }) => {
  return (
    <View>
      <Text style={styles.header}>
        {title}
      </Text>
      <Text style={styles.body}>
        {description}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 32,
    fontFamily: Fonts.header,
    marginVertical: 20,
    paddingHorizontal: 20,
  },
  body: {
    fontSize: 20,
    fontFamily: Fonts.body,
    color: Colors.grayFont,
    paddingHorizontal: 20,
  },
});