import { 
  ScrollView, 
  StyleSheet,
} from 'react-native';
import { Colors, Fonts } from '../common/styles';
import Chat from '../common/Chat';
import { useRef, useState } from 'react';


export default EasyChat = ({ userMessage }) => {

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

  // States
  const [chatLists, setChatLists] = useState([{
    fromUser: false, 
    chats: WELCOME 
  }, {
    fromUser: true,
    chats: [{ seq: 1, text: userMessage }]
  }]);


  return (
    <ScrollView 
      style={styles.pageBody} 
      ref={scrollRef}
      onContentSizeChange={() => scrollRef.current.scrollToEnd()}>
      {chatLists.map((item) => (
        <Chat texts={item.chats} fromUser={item.fromUser} key={chatLists.indexOf(item)} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({

});
