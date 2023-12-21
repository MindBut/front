import { 
  Text,
  StyleSheet, 
  View,
  Image,
  Pressable,
} from 'react-native';
import { Colors, Fonts } from '../common/styles';

export default CheckInElement = ({ chat }) => {

  const iconPath = "../../assets/wip.png";

  return (
    <View style={styles.wrapper}>
      <Text style={{textAlign: 'right',}}>4:44 PM</Text>
      <View style={{width: '100%',}}>
        <View style={styles.chatBox}>
          <Text style={styles.chatText}>{chat}</Text>
        </View>
        <Image style={styles.chatIcon} source={require(iconPath)} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    borderWidth: 1,
  },
  chatBox: {
    width: '100%',
    borderWidth: 1,
    backgroundColor: 'green',
    padding: 18,
    borderRadius: 18,
  },
  chatText: {
    fontSize: 18,
    fontFamily: Fonts.body,
  },
  chatIcon: {
    width: 24,
    height: 24,
    position: 'absolute',
    top: -12,
  }
});
