import { 
  View, 
  StyleSheet, 
  FlatList,
  Text,
  Image
} from 'react-native';
import { Colors, Fonts } from '../common/styles';
import Option from '../common/Option';


export default SelectMood = ({ response, setResponse }) => {
  

  const MOODS = [{
    key: 'option1',
    category: '기쁨',
    subcategory: [
      '감사한',
      '신뢰하는',
      '편안한',
      '만족한',
      '흥분한',
      '느긋한',
      '안도하는',
      '신이 난',
      '자신하는'
    ]
  }, {
    key: 'option2',
    category: '당황',
    subcategory: [
      '격리된',
      '시선 의식하는',
      '외로운',
      '열등한',
      '죄책감의',
      '부끄러운',
      '혐오스러운',
      '한심한',
      '헷갈리는'
    ]
  }, {
    key: 'option3',
    category: '분노',
    subcategory: [
      '툴툴대는',
      '좌절하는',
      '짜증나는',
      '방어적인',
      '악의적인',
      '안달나는',
      '구역질 나는',
      '노여워하는',
      '성가신'
    ]
  }, {
    key: 'option4',
    category: '불안',
    subcategory: [
      '두려운',
      '스트레스 받는',
      '취약한',
      '헷갈리는',
      '당혹스러운',
      '회의적인',
      '걱정스러운',
      '조심스러운',
      '신경쓰이는'
    ]
  }, {
    key: 'option5',
    category: '상처',
    subcategory: [
      '질투하는',
      '배신당한',
      '격리된',
      '충격 받은',
      '궁핍한',
      '희생된',
      '억울한',
      '괴로워하는',
      '버려진'
    ]
  }, {
    key: 'option6',
    category: '슬픔',
    subcategory: [
      '실망한',
      '비통한',
      '후회되는',
      '우울한',
      '마비된',
      '염세적인',
      '눈물이 나는',
      '낭패한',
      '환멸을 느끼는'
    ]
  }];

  return (
    <>
      <Text style={styles.text}>지금 감정이 어때요?</Text>
      <View style={styles.optionArea}>
        <FlatList 
          style={styles.categoryGrid}
          columnWrapperStyle={{justifyContent: 'space-between'}}
          keyExtractor={item => item.key}
          data={MOODS}
          renderItem={({item}) => (
            <Option 
              text={item.category} 
              selected={response.category === item.category}
              onPress={() => {
                setResponse({ category: item.category, subcategory: ''}); 
              }}
              style={styles.categoryItem}
            />
          )}
          numColumns={3}
        />
        { (response.category) ? (
          <FlatList
            style={styles.subcategoryGrid}
            columnWrapperStyle={{justifyContent: 'space-between'}}
            data={MOODS.find(
              elem => elem.category === response.category).subcategory}
            renderItem={({item}) => (
              <Option 
                text={item} 
                element={<Image style={{width: 32, height: 32, marginBottom: 10}} source={require("../../../assets/wip.png")} />}
                selected={response.subcategory === item}
                onPress={() => {
                  setResponse({ 
                    category: response.category, 
                    subcategory: item
                  });
                }}
                style={styles.subcategoryItem}
                fontStyle={styles.subcategoryFont}
              />
            )}
            numColumns={3}
          />
        ) : (
          <></>
        )}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: Fonts.header,
    fontSize: 24,
    marginVertical: 3
  },
  optionArea: {
    width: '100%',
    alignItems: 'center',
    marginTop: 20,
  },
  categoryGrid: {
    width: '75%',
    paddingHorizontal: 10,
  },
  categoryItem: {
    paddingVertical: 7, 
    paddingHorizontal: 0,
    marginVertical: 5, 
    borderRadius: 12,
    width: '30%',
  },
  subcategoryGrid: {
    width: '95%',
    marginTop: 20, 
    paddingHorizontal: 20
  },
  subcategoryFont: {
    fontSize: 14,
  },
  subcategoryItem: {
    height: 100,
    width: 100,
    paddingHorizontal: 0,
    justifyContent: 'center'
  }
});
