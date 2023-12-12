import { 
  SafeAreaView, 
  StatusBar, 
  View, 
  StyleSheet, 
  FlatList,
  Pressable,
  Text,
  Dimensions,
  Image
} from 'react-native';
import { useState } from 'react';
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
    key: 'option4',
    category: '불안',
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
    key: 'option5',
    category: '상처',
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
    key: 'option6',
    category: '슬픔',
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
    fontSize: 18,
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
    // backgroundColor: Colors.trueWhite,
    height: 100,
    width: 100,
    paddingHorizontal: 0,
    justifyContent: 'center'
  }
});
