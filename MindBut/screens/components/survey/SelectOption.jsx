import { 
  Text,
  StyleSheet, 
  View,
  FlatList,
} from 'react-native';
import { Colors, Fonts } from '../common/styles';
import Option from '../common/Option';


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
        { textLines.map((item) => (
          <Text style={styles.question} key={textLines.indexOf(item)}>
            {item}
          </Text>
        )) }
      </View>
      <View style={styles.optionArea}>
        <FlatList
          scrollEnabled={false}
          data={RESPONSES}
          renderItem={({item}) => (
            <View style={styles.optionWrap}>
              <Option
                text={item.text}
                selected={responseId === item.text}
                onPress={() => setResponseId(item.text)}
              />
            </View>
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
    width: '100%',
  },
  optionWrap: {
    marginHorizontal: 20,
  },
  question: {
    fontFamily: Fonts.header,
    fontSize: 18,
    marginVertical: 3
  }
});
