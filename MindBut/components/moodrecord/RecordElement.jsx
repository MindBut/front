import { 
  Text,
  StyleSheet, 
  View,
  Image,
} from 'react-native';
import { Colors, Fonts } from '../common/styles';

export default RecordElement = ({ scale, mood, reason, time}) => {


  const concatScaleAndMood = (scale, mood) => {
    // Clamp value to [0, 1]
    scale = Math.max(Math.min(scale, 1), 0);
    console.log(scale);

    if (scale > 0.8) return "아주 많이 " + mood;
    else if (scale > 0.6) return "많이 " + mood;
    else if (scale > 0.4) return mood;
    else if (scale > 0.2) return "조금 " + mood;
    else return "아주 조금 " + mood;
  }
  

  return (
    <View style={{borderWidth: 0}}>
      <View style={styles.moodHeader}>
        <Image style={{width: 24, height: 24}} source={require("../../assets/wip.png")} />
        <Text style={styles.mood}>{concatScaleAndMood(scale, mood)}</Text>
      </View>
      <View style={styles.moodBody}>
        <View style={{width: 24, alignItems: 'center',}}>
          <View style={{paddingVertical: 18, width: 6, backgroundColor: 'red', borderRadius: 5}}>
            <Text style={styles.mood}> </Text>
          </View>
        </View>
        <View style={styles.reason}>
          <Text style={styles.mood}>{reason}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mood: {
    fontSize: 18,
    fontFamily: Fonts.body,
  },
  moodHeader: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  moodBody: {
    flexDirection: 'row',
    width: '100%',
  },
  reason: {
    width: '90%',
    padding: 18,
    justifyContent: 'center',
    backgroundColor: 'red',
    borderRadius: 24,
  }
});
