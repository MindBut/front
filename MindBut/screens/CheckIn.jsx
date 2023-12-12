import { 
  SafeAreaView, 
  StatusBar, 
  View, 
  StyleSheet, 
  ScrollView,
  TextInput,
  Pressable,
  Text,
  KeyboardAvoidingView,
  Dimensions,
  Image
} from 'react-native';
import axios from 'axios';
import { Colors, Fonts } from './components/common/styles';
import { useNavigation } from '@react-navigation/native';
import Button from './components/common/Button';
import Chat from './components/common/Chat';
import { useRef, useState } from 'react';


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

  // Refs
  const scrollRef = useRef();
  const navigation = useNavigation();

  // States
  const [isChatting, setIsChatting] = useState(false);
  const [chatText, setChatText] = useState('');
  const [chatLists, setChatLists] = useState([{
    fromUser: false, 
    chats: WELCOME 
  }]);

  const sendChatToServer = async () => {
    // TODO: Send to server
    setChatLists((chatLists) => [
      ...chatLists, 
      {
        fromUser: true, 
        chats: [{ seq: 1, text: chatText }]
      }
    ]);

    // TODO: Receive from server
    setTimeout(() => {
      setChatLists((chatLists) => [
        ...chatLists, 
        {
          fromUser: false, 
          chats: [{ seq: 1, text: chatText }]
        }
      ]);
    }, 1000);

    setChatText('');
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <View style={styles.pageHeader}>
        {isChatting ? (
          <Pressable onPress={() => setIsChatting(false)} style={styles.quit}>
            <Text style={styles.quitText}>상담 종료</Text>
          </Pressable>
        ) : (
          <></>
        )}
      </View>
      <ScrollView 
        style={styles.pageBody} 
        ref={scrollRef}
        onContentSizeChange={() => scrollRef.current.scrollToEnd()}>
        {chatLists.map((item) => (
          <Chat texts={item.chats} fromUser={item.fromUser} key={chatLists.indexOf(item)} />
        ))}
      </ScrollView>
      {isChatting ? (
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.input}>
          <TextInput
            style={styles.inputField}
            multiline
            // clearButtonMode='always'
            onChangeText={(text) => setChatText(text)}
            value={chatText}
          />
          <Pressable onPress={() => sendChatToServer()}>
            <Image
              source={require("../assets/subtract.png")}
              style={styles.icon} />
          </Pressable>
        </KeyboardAvoidingView>
      ) : (
        <View style={styles.pageFooter}>
          <Button 
            text={"직접 입력하기"} 
            alternativeStyle={true} 
            onPress={() => setIsChatting(true)} />
          <Button 
            text={"무드 트래킹하기"} 
            onPress={() => navigation.navigate('MoodTracking')}/>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 20 : 0,
    backgroundColor: Colors.white,
  },
  pageHeader: {
    height: '7%',
    paddingHorizontal: 20,
    alignItems: 'flex-end',
    borderBottomWidth: 2,
    borderColor: Colors.chatGray,
  },
  pageBody: {
    height: '75%',
  },
  pageFooter: {
    height: '25%',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  quit: {
    borderRadius: 12,
    borderWidth: 1,
    borderColor: Colors.chatGray,
    paddingVertical: 5,
    paddingHorizontal: 20,
    backgroundColor: Colors.white,
  },
  quitText: {
    fontFamily: Fonts.header,
    fontSize: 16,
    color: Colors.darkGray,
  },
  input: {
    flexDirection: 'row',
  },
  inputField: {
    width: Dimensions.get('window').width - 70,
    borderWidth: 1,
    borderColor: Colors.primary,
    backgroundColor: Colors.chatGray,
    borderRadius: 16,
    padding: 15,
    paddingTop: 15,
    margin: 10,
    fontSize: 16,
  },
  icon: {
    width: 40,
    height: 40,
    marginVertical: 10,
  },
})
