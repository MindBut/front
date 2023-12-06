import { 
  SafeAreaView, 
  StatusBar, 
  Text, 
  View, 
  StyleSheet, 
  Pressable,
  FlatList,
  Dimensions,
  Image,
} from 'react-native';
import React, { useRef, useState } from 'react';
import axios from 'axios';
import { Colors, Fonts } from './components/common/styles';
import Instruction from './components/survey/Instruction';
import SelectOption from './components/survey/SelectOption';
import PrepareSetup from './components/survey/PrepareSetup';
import Button from './components/common/Button';
import ProgressBar from './components/survey/ProgressBar';
import SetGoals from './components/survey/SetGoals';


export default Survey = () => {
  // Refs
  const flatListRef = useRef();

  // States
  const [currentPage, setCurrentPage] = useState(0);
  const [response1, setResponse1] = useState(); // First question
  const [response2, setResponse2] = useState(); // Second question
  const [response3, setResponse3] = useState(); // Third question
  const [response4, setResponse4] = useState(); // Fourth question
  const responses = [response1, response2, response3, response4];

  /**
   * List of pages to render in survey screen.
   */
  const PAGES = [{
    key: '1',
    component: 
      <Instruction 
        title={"반갑습니다!"}
        description={"맞춤형 정신 건강 솔루션을 제공하기 위해 간단한 설문이 이어질 예정입니다."} 
      />,
  }, {
    key: '2',
    component: 
      <SetGoals />,
  }, {
    key: '3',
    component: 
      <Instruction 
        title={"좋습니다!"}
        description={"맞춤형 마인드벗을 만들기 위해 OOO님에 대해 조금 더 알려주세요."} 
      />,
  }, {
    key: '4',
    component: 
      <SelectOption
        question={"지난 2주일 동안 기분이 가라앉거나 우울하거나 희망이 없다고 느껴지는 것으로 인해 얼마나 자주 방해를 받았습니까?"}
        responseId={response1}
        setResponseId={setResponse1}
      />
  }, {
    key: '5',
    component: 
      <SelectOption
        question={"지난 2주일 동안 일 또는 여가 활동을 하는 데 흥미나 즐거움을 느끼지 못하는 것으로 인해 얼마나 자주 방해를 받았습니까?"}
        responseId={response2}
        setResponseId={setResponse2}
      />
  }, {
    key: '6',
    component: 
      <SelectOption
        question={"지난 2주일 동안 걱정하는 것을 멈추거나 조절할 수가 없는 것으로 인해 얼마나 자주 방해를 받았습니까?"}
        responseId={response3}
        setResponseId={setResponse3}
      />
  }, {
    key: '7',
    component: 
      <SelectOption
        question={"지난 2주일 동안 초조하거나 불안하거나 조마조마하게 느끼는 것으로 인해 얼마나 자주 방해를 받았습니까?"}
        responseId={response4}
        setResponseId={setResponse4}
      />
  }, {
    key: '8',
    component:
      <PrepareSetup />
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

  // For rendering individual page
  const renderItem = ({item}) => {
    return (
      <View style={styles.pageBody}>
        {item.component}
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <View style={styles.pageHeader}>
        <Pressable onPress={showPrevPage}>
          { (currentPage === 0)
            ? <></>
            : <Image style={{width: 28, height: 28, marginBottom: 20}} 
              source={require("../assets/left-arrow.png")}/>}
        </Pressable>
        { (currentPage > 2 && currentPage < 7)
          ? <ProgressBar currentPage={currentPage - 2} totalPage={4}/> 
          : <></> }
      </View>
      <FlatList
        ref={flatListRef}
        scrollEnabled={false}
        data={PAGES}
        horizontal={true}
        renderItem={renderItem}
        keyExtractor={item => item.key}
      />
      <View style={styles.pageFooter}>
        { currentPage < 3 
          ? <Button text={"다음"} onPress={showNextPage} /> 
          : <></> }
        { currentPage >= 3 && currentPage < 7 
          ? <Button text={"다음"} onPress={showNextPage} disabled={!responses[currentPage-3]} />
          : <></> }
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
  pageBody: {
    height: '100%',
    width: Dimensions.get("screen").width,
  },
  pageHeader: {
    height: '5%',
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  pageFooter: {
    height: '15%',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
});
