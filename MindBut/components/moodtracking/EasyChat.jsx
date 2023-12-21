import { 
  ScrollView, 
  StyleSheet,
} from 'react-native';
import { Colors, Device, Fonts } from '../common/styles';
import Chat from '../common/Chat';
import { useRef, useState } from 'react';
import Button from '../common/Button';
import { useNavigation } from '@react-navigation/native';


export default EasyChat = ({ userMessage, response }) => {

  const navigation = useNavigation();

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

  // Refs
  const scrollRef = useRef();

  const chatLists = [{
    fromUser: false, 
    chats: WELCOME 
  }, {
    fromUser: true,
    chats: [{ seq: 1, text: userMessage }]
  }, {
    fromUser: false,
    chats: [{ seq: 1, text: response }]
  }];


  return (
    <ScrollView 
      style={styles.pageBody} 
      ref={scrollRef}
      onContentSizeChange={() => scrollRef.current.scrollToEnd()}>
      {chatLists.map((item) => (
        <Chat texts={item.chats} fromUser={item.fromUser} key={chatLists.indexOf(item)} />
      ))}
      <Button 
        text={"무드 트래킹 완료하기✅"}
        alternativeStyle={true}
        onPress={() => navigation.navigate('MoodRecord')}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  pageBody: {
    // borderWidth: 3,
    width: Device.fullLayoutWidth,
  }
});
