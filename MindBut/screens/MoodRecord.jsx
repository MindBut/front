import { 
  SafeAreaView, 
  StatusBar, 
  View, 
  Text,
  StyleSheet,
  ScrollView,
  Pressable, 
} from 'react-native';
import axios from 'axios';
import { Colors, Device, Fonts } from '../components/common/styles';
import { useNavigation } from '@react-navigation/native';
import Calender from '../components/moodrecord/Calender';
import MoodTrackingElement from '../components/moodrecord/MoodTrackingElement';
import CheckInElement from '../components/moodrecord/CheckInElement';


export default MoodRecord = () => {
  const navigation = useNavigation();


  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <View style={styles.calenderArea}>
        <Calender />
      </View>
      <ScrollView style={styles.recordsArea}>
        <Text style={{fontSize: 28, fontFamily: Fonts.header}}>무드 트래킹</Text>
        <MoodTrackingElement scale={0.9} category={"기쁨"} mood={"감사한"} reason={"학교"} time={"4:44 PM"} />
        <Text style={{fontSize: 28, fontFamily: Fonts.header, marginTop: 40,}}>상담 체크인</Text>
        <CheckInElement chat={"할일이 너무 많아서 힘들어.."} />
      </ScrollView>
      <View style={styles.navigatorArea}>
        <Pressable 
          style={{
            ...styles.navigator, 
            borderRightWidth: styles.navigator.borderTopWidth
          }}
          onPress={() => navigation.navigate('CheckIn')}
        >
          <Text>Icon</Text>
          <Text>체크인</Text>
        </Pressable>
        <Pressable 
          style={styles.navigator}
          onPress={() => navigation.navigate('MoodTracking')}
        >
          <Text>Icon</Text>
          <Text>무드 레코드</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 20 : 0,
    backgroundColor: Colors.trueWhite,
    alignItems: 'center',
  },
  calenderArea: {
    width: Device.fullLayoutWidth,
    height: '40%',
    paddingHorizontal: 20,
    
    borderWidth: 3,
    borderColor: 'red'
  },
  recordsArea: {
    // paddingHorizontal: 20,
    width: Device.fullLayoutWidth,
    // alignItems: 'center',

    borderWidth: 3,
    borderColor: 'blue',
  },
  navigatorArea: {
    width: Device.width,
    height: '10%',
    flexDirection: 'row',

    borderWidth: 3,
    borderColor: 'green',
  },
  navigator: {
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderTopWidth: 1,
  }
});
