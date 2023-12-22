import { 
  Pressable,
  ScrollView, 
  StyleSheet,
} from 'react-native';
import { Colors, Device, Fonts } from '../common/styles';
import Chat from '../common/Chat';
import { useRef, useState, useEffect } from 'react';
import Button from '../common/Button';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';


export default EasyChat = ({ messages, setResponse1, setResponse2, setResponse3, setCurrentPage }) => {

  const navigation = useNavigation();

  // State
  const [name, setName] = useState('');
  const [finalAnswer, setFinalAnswer] = useState();

  const WELCOME = [{
    seq: 1,
    text: '정신건강을 위한 투자가 시간 낭비처럼 느껴질 수도 있어요.',
  }, {
    seq: 2,
    text: '하지만 마음 속에만 언젠가 묵혀둔 감정들이 터져버릴지도...',
  }, {
    seq: 3,
    text: '지금 ' + name + '님의 감정은 어떠신가요?',
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
    // chats: [{ seq: 1, text: userMessage }]
    chats: [{ seq: 1, text: messages.userMessage }]
  }, {
    fromUser: false,
    // chats: [{ seq: 1, text: response }]
    chats: [{ seq: 1, text: messages.response }]
  }];

  const firstChoice = {
    fromUser: true,
    chats: [{ seq: 1, text: messages.choices[0] }]
  };

  const secondChoice = {
    fromUser: true,
    chats: [{ seq: 2, text: messages.choices[1] }]
  };

  const firstAnswer = {
    fromUser: false,
    chats: [{ seq: 1, text: messages.choiceRes[0] }]
  };

  const secondAnswer = {
    fromUser: false,
    chats: [{ seq: 1, text: messages.choiceRes[1] }]
  };

  useEffect(() => {
    axios.get(
      `http://localhost:8000/login?user_kakaotalk=1234567890`
    )
    .then((res) => res.data)
    .then((data) => setName(data.user_name))
  }, []);


  return (
    <ScrollView 
      style={styles.pageBody} 
      ref={scrollRef}
      onContentSizeChange={() => scrollRef.current.scrollToEnd()}>
      {chatLists.map((item) => (
        <Chat texts={item.chats} fromUser={item.fromUser} key={chatLists.indexOf(item)} />
      ))}
      <Pressable onPress={() => {
        setFinalAnswer(
          <Chat texts={firstAnswer.chats} fromUser={false} keys={"first"} />
        )
      }}>
        <Chat texts={firstChoice.chats} fromUser={true} key={0} />
      </Pressable>
      <Pressable onPress={() => {
        setFinalAnswer(
          <Chat texts={secondAnswer.chats} fromUser={false} keys={"second"} />
        )
      }}>
        <Chat texts={secondChoice.chats} fromUser={true} key={0} />
      </Pressable>
      {finalAnswer}
      {finalAnswer ? (
        <Button 
          text={"무드 트래킹 완료하기✅"}
          alternativeStyle={true}
          onPress={() => {
            setCurrentPage(0);
            setResponse1({ category: '', subcategory: '' });
            setResponse2();
            setResponse3();
            navigation.navigate('MoodRecord');
          }}
        />
      ) : (
        <></>
      )}
      
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  pageBody: {
    // borderWidth: 3,
    width: Device.fullLayoutWidth,
  }
});
