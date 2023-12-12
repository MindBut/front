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
import axios from 'axios';
import { Colors, Fonts } from './components/common/styles';
import { useNavigation } from '@react-navigation/native';
import { useRef, useState } from 'react';
import Button from './components/common/Button';
import SelectMood from './components/moodtracking/SelectMood';


export default MoodTracking = () => {
  // Refs
  const flatListRef = useRef();

  // States
  const [currentPage, setCurrentPage] = useState(0);
  const [response1, setResponse1] = useState({ category: '', subcategory: '' }); // First question
  const [response2, setResponse2] = useState(); // Second question
  const [response3, setResponse3] = useState(); // Third question
  const responses = [response1, response2, response3];

  // Sub-pages within Mood Tracking
  const PAGES = [{
    key: '1',
    component: (
      <SelectMood response={response1} setResponse={setResponse1}/>
    )
  }, {
    key: '2',
    component: (
      <Text>World</Text>
    )
  }, {
    key: '3',
    component: (
      <Text>Friends!</Text>
    )
  }];

  /**
   * Show next page elements. If end of page, do nothing
   */
  const showNextPage = () => {
    try {
      flatListRef.current.scrollToIndex({
        animated: true, 
        index: currentPage + 1
      });
      setCurrentPage((currentPage) => ++currentPage);
    } catch (err) {
      // End of page
    }
  }

  /**
   * Show previous page elements. If start of page, do nothing
   */
  const showPrevPage = () => {
    try {
      flatListRef.current.scrollToIndex({
        animated: true, 
        index: currentPage - 1
      });
      setCurrentPage((currentPage) => --currentPage);
    } catch(err) {
      // Start of page
    }
  }
  
  /**
   * Different button actions for each pages
   * 
   * @param {*} page Current page
   * @returns Button component with corresponding props.
   */
  const buttonFor = (page) => {
    switch (page) {
      case 0:
      case 1:
      case 2:
        return (
          <Button 
            text={"다음"} 
            onPress={showNextPage} 
            disabled={responses[currentPage-1]} 
          />);
      default: break;
    };
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <View style={styles.pageHeader}>
        {(currentPage === 0) ? (
          <></>
        ) : (
          <Pressable onPress={showPrevPage}>
            <Image 
              style={{width: 28, height: 28, marginBottom: 20}} 
              source={require("../assets/left-arrow.png")}
            />
          </Pressable>
        )}
      </View>
      <FlatList
        ref={flatListRef}
        scrollEnabled={false}
        data={PAGES}
        horizontal={true}
        renderItem={({item}) => (
          <View style={styles.pageBody}>
            {item.component}
          </View>
        )}
        keyExtractor={item => item.key}
      />
      <View style={styles.pageFooter}>
        {buttonFor(currentPage)}
      </View>
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
    height: '5%',
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  pageBody: {
    height: '100%',
    width: Dimensions.get("screen").width,
    alignItems: 'center',
  },
  pageFooter: {
    height: '15%',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
});
