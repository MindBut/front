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
import { Colors, Fonts } from '../components/common/styles';
import { useNavigation } from '@react-navigation/native';
import RecordElement from '../components/moodrecord/RecordElement';
import Calender from '../components/moodrecord/Calender';


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
        <RecordElement scale={0.9} mood={"감사한"} reason={"학교"} />
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
  },
  calenderArea: {
    height: '40%',
    paddingHorizontal: 20,
    
    borderWidth: 3,
    borderColor: 'red'
  },
  recordsArea: {
    paddingHorizontal: 20,

    borderWidth: 3,
    borderColor: 'blue',
  },
  navigatorArea: {
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
