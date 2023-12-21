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
import ListIcon from '../assets/icons/list.svg'; 
import BubbleIcon from '../assets/icons/bubble.svg';


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
        <MoodTrackingElement scale={0.2} category={"슬픔"} mood={"짜증난"} reason={"수면"} time={"4:54 PM"} />
        <Text style={{fontSize: 28, fontFamily: Fonts.header, marginTop: 30,}}>상담 체크인</Text>
        <CheckInElement chat={"할일이 너무 많아서 힘들어.."} />
      </ScrollView>
      <View style={styles.navigatorArea}>
        <Pressable 
          style={{
            ...styles.navigator, 
            // borderRightWidth: styles.navigator.borderTopWidth
          }}
          onPress={() => navigation.navigate('CheckIn')}
        >
          <BubbleIcon color={Colors.lightGrayUI} height={32} />
          <Text style={styles.navigatorText}>체크인</Text>
        </Pressable>
        <Pressable 
          style={styles.navigator}
          onPress={() => navigation.navigate('MoodTracking')}
        >
          <ListIcon width={18} height={18} />
          <Text style={styles.navigatorText}>무드 레코드</Text>
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
    // borderWidth: 1,
    borderColor: 'blue',
    width: Device.fullLayoutWidth,
  },
  navigatorArea: {
    width: Device.width,
    height: Device.tabBarHeight,
    flexDirection: 'row',
    // borderWidth: 3,
    borderColor: 'green',
  },
  navigator: {
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderTopWidth: 1,
    borderColor: Colors.lightGrayUI,
  },
  navigatorText: {
    marginHorizontal: 10,
    fontFamily: Fonts.header,
    fontSize: 18,
    color: Colors.lightGrayUI,
  }
});
