import { 
  Text,
  StyleSheet, 
  Pressable,
  View,
  FlatList,
} from 'react-native';
import { Colors, Fonts } from '../common/styles';

/**
 * Option component used for rendering `<SelectOption />`.
 * 
 */
const Option = ({ text, onPress, selected }) => {
  const backgroundColor = (selected) ? Colors.main2 : Colors.white;
  const textColor = (selected) ? Colors.white : '#000000';
  return (
    <Pressable 
      onPress={onPress} 
      style={{...styles.option, backgroundColor: backgroundColor}}>
      <Text style={{...styles.buttonText, color: textColor}}>{text}</Text>
    </Pressable>
  );
};


/**
 * Options for answering the given question.
 * 
 * @param {*} props { question, responseId, setResponseId }
 * @returns Display options for the given question
 */
export default SelectOption = ({ question, responseId, setResponseId }) => {

  const RESPONSES = [{
    key: 'option1',
    text: '거의 매일 방해받았다.',
  }, {
    key: 'option2',
    text: '7일 이상 방해받았다.',
  }, {
    key: 'option3',
    text: '며칠 동안 방해받았다.',
  }, {
    key: 'option4',
    text: '전혀 방해 받지 않았다.',
  }];

  return (
    <>
      <Text style={styles.surveyQuestion}>{question}</Text>
      <FlatList
        scrollEnabled={false}
        data={RESPONSES}
        renderItem={({item}) => (
          <Option
            text={item.text}
            selected={responseId === item.key}
            onPress={() => setResponseId(item.key)}
          />
        )}
      />
    </>
  );
};

const styles = StyleSheet.create({
  option: {
    paddingVertical: 20,
    paddingHorizontal: 25,
    borderRadius: 16,
    borderWidth: 0.3,
    borderColor: Colors.lightGray,
    marginVertical: 10,
    marginHorizontal: 20,
    ...Platform.select({
      ios: { 
        shadowColor: "#7090B0",
        shadowOffset: {
	        width: 0,
	        height: 2,
        },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      },
      android: { 
        elevation: 12,
      },
    })
  },
  buttonText: {
    fontFamily: Fonts.header,
    fontSize: 18,
  },
  surveyQuestion: {
    fontFamily: Fonts.body,
    fontSize: 20,
    margin: 20,
    marginTop: 40,
  }
});
