import { 
  Text,
  StyleSheet, 
  Pressable,
  View,
  FlatList,
  Dimensions,
} from 'react-native';
import { Colors, Fonts } from '../common/styles';

/**
 * Option component used for rendering `<SelectOption />`.
 * 
 */
const Option = ({ text, onPress, selected }) => {
  const selectedBackground = selected ? {...styles.option, ...styles.optionSelected} : styles.option;
  const selectedColor = selected ? {...styles.optionText, ...styles.optionTextSelected} : styles.optionText;
  return (
    <Pressable 
      onPress={onPress} 
      style={selectedBackground}>
      <Text style={selectedColor}>{text}</Text>
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

  // Responses to be chosen
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

  // Questionnaire parsing
  const textLines = question.split('\n');

  return (
    <>
      <View style={styles.questionArea}>
        {textLines.map((item) => (
          <Text style={styles.question} key={textLines.indexOf(item)}>
            {item}
          </Text>
        ))}
      </View>
      <View style={styles.optionArea}>
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
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  questionArea: {
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginVertical: 60,
  },
  optionArea: {

  },
  option: {
    paddingVertical: 18,
    paddingHorizontal: 25,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: Colors.lightGray,
    backgroundColor: Colors.secondary,
    marginVertical: 10,
    marginHorizontal: 20,
    width: Dimensions.get("screen").width - 40,
    alignItems: 'center',
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
  optionSelected: {
    borderWidth: 1,
    borderColor: Colors.primary,
    backgroundColor: Colors.tertiary,
    color: Colors.white,
  },
  optionText: {
    fontFamily: Fonts.body,
    fontSize: 18,
  },
  optionTextSelected: {
    fontFamily: Fonts.header,
    color: Colors.primary
  },
  question: {
    fontFamily: Fonts.header,
    fontSize: 18,
    marginVertical: 3
  }
});
