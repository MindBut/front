import { 
  View, 
  StyleSheet, 
  Text,
  Image,
  Dimensions,
} from 'react-native';
import { Colors, Fonts } from './styles';

const ChatBubble = ({ text, fromUser }) => {
  return (
    <View style={{
      ...styles.bubble,
      backgroundColor: fromUser ? Colors.chatBox : Colors.chatWhite,
      borderTopLeftRadius: fromUser ? 10 : 0,
      borderTopRightRadius: fromUser ? 0 : 10,  
    }}>
      <Text style={styles.bubbleText}>{text}</Text>
    </View>
  );
};


export default Chat = ({ texts, fromUser }) => {
  if (fromUser) {
    return (
      <View style={styles.userChat}>
        { texts.map((item) => (
          <ChatBubble text={item.text} fromUser={fromUser} key={item.seq} />
        )) }
      </View>
    );
  } else {
    return (
      <View style={styles.botSection}>
        <View style={styles.iconSection}>
          <Image
            source={require("../../../assets/bot-icon.png")}
            style={styles.icon} />
        </View>
        <View style={styles.botChat}>
          <Text style={{fontFamily: Fonts.header, fontSize: 16}}>마인드벗</Text>
          { texts.map((item) => (
            <ChatBubble text={item.text} fromUser={fromUser} key={item.seq} />
          )) }
        </View>
      </View>
    );
  }
};

styles = StyleSheet.create({
  bubble: {
    borderRadius: 10,
    marginVertical: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
    maxWidth: Dimensions.get('window').width - 130,
  },
  bubbleText: {
    fontFamily: Fonts.body,
    fontSize: 16,
  },
  botSection: {
    flexDirection: 'row',
  },
  botChat: {
    width: Dimensions.get('window').width - 70,
    alignItems: 'flex-start',
    marginVertical: 10,
    marginLeft: 10,
  },
  userChat: {
    marginVertical: 10,
    marginHorizontal: 10,
    alignItems: 'flex-end',
  },
  iconSection: {
    width: 40,
    marginLeft: 10,
  },
  icon: {
    width: 40,
    height: 40,
  }
});
