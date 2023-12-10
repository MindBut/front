import { 
  SafeAreaView, 
  StatusBar, 
  View, 
  StyleSheet, 
  Text,
  ScrollView,
} from 'react-native';
import axios from 'axios';
import { Colors, Fonts } from './components/common/styles';
import { useNavigation } from '@react-navigation/native';
import Button from './components/common/Button';
import Chat from './components/common/Chat';


export default CheckIn = () => {

  const WELCOME = [{
    seq: 1,
    text: '정신건강을 위한 투자가 시간 낭비처럼 느껴질 수도 있어요.',
  }, {
    seq: 2,
    text: '하지만 마음 속에만 언젠가 묵혀둔 감정들이 터져버릴지도...',
  }, {
    seq: 3,
    text: '지금 OOO님의 감정은 어떠신가요?',
  }, {
    seq: 4,
    text: '오늘 어떻게 도와드릴까요?',
  }];

  const CHAT = [{
    seq: 1,
    text: '아몰랑'
  }, {
    seq: 2,
    text: '내 얘기를 들어줄래?'
  }, {
    seq: 3,
    text: 'ㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠ'
  }];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <ScrollView style={styles.pageBody}>
        <Chat texts={WELCOME} fromUser={false} />
        {/* <Chat texts={CHAT} fromUser={true} /> */}
      </ScrollView>
      <View style={styles.pageFooter}>
        <Button text={"직접 입력하기"} alternativeStyle={true} />
        <Button text={"무드 트래킹하기"} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 20 : 0,
    backgroundColor: Colors.white,
  },
  pageBody: {
    height: '75%',
  },
  pageFooter: {
    height: '25%',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
})
