import { 
  SafeAreaView, 
  StatusBar, 
  View, 
  StyleSheet, 
  Pressable,
  FlatList,
  Dimensions,
  Image,
} from 'react-native';
import React, { useRef, useState } from 'react';
import axios from 'axios';
import { Colors, Fonts } from '../components/common/styles';
import Instruction from '../components/survey/Instruction';
import SelectOption from '../components/survey/SelectOption';
import PrepareSetup from '../components/survey/PrepareSetup';
import Button from '../components/common/Button';
import ProgressBar from '../components/survey/ProgressBar';
import SetGoals from '../components/survey/SetGoals';
import { useNavigation } from '@react-navigation/native';
import RegisterName from '../components/survey/RegisterName';


export default Survey = () => {
  // Refs
  const flatListRef = useRef();

  // States
  const [currentPage, setCurrentPage] = useState(0);
  const [username, setUsername] = useState(); // Username
  const [goalResponse, setGoalResponse] = useState(); // Goal
  const [response1, setResponse1] = useState(); // First question
  const [response2, setResponse2] = useState(); // Second question
  const [response3, setResponse3] = useState(); // Third question
  const [response4, setResponse4] = useState(); // Fourth question

  /**
   * List of pages to render in survey screen.
   */
  const PAGES = [{
    key: '0',
    component: (
      <RegisterName 
        username={username}
        setUsername={setUsername}
      />
    )
  }, {
    key: '1',
    component: (
      <Instruction 
        title={username + "님, 반갑습니다!"}
        description={"맞춤형 정신 건강 솔루션을 제공하기 위해 간단한 설문이 이어질 예정입니다."} 
      />
    )
  }, {
    key: '2',
    component: (
      <SetGoals 
        goalResponse={goalResponse}
        setGoalResponse={setGoalResponse}
      />
    )
  }, {
    key: '3',
    component: (
      <Instruction 
        title={"좋습니다!"}
        description={"맞춤형 마인드벗을 만들기 위해 OOO님에 대해 조금 더 알려주세요."} 
      />
    )
  }, {
    key: '4',
    component: (
      <SelectOption
        questionId={0}
        responseId={response1}
        setResponseId={setResponse1}
      />
    )
  }, {
    key: '5',
    component: (
      <SelectOption
        questionId={1}
        responseId={response2}
        setResponseId={setResponse2}
      />
    )
  }, {
    key: '6',
    component: (
      <SelectOption
        questionId={2}
        responseId={response3}
        setResponseId={setResponse3}
      />
    )
  }, {
    key: '7',
    component: (
      <SelectOption
        questionId={3}
        responseId={response4}
        setResponseId={setResponse4}
      />
    )
  }, {
    key: '8',
    component: (
      <PrepareSetup 
        username={username}
      />
    )
  }];

  // Send to server
  const navigation = useNavigation();
  const sendSurveyToServer = async (body) => {
    // await axios.post(
    //   "http://localhost:8000/survey/generate/",
    //   body,
    // ).then(
    //   setTimeout(() => {
    //     // flatListRef.current.scrollToIndex({
    //     //   animated: true, 
    //     //   index: 0
    //     // });
    //     // setCurrentPage(0);
    //     navigation.navigate('CheckIn');
    //   }, 1500)
    // ).catch( // Reset selected options & Go to first page
    //   (err) => {
    //     flatListRef.current.scrollToIndex({
    //       animated: true, 
    //       index: 0
    //     });
    //     setCurrentPage(0);
    //     setGoalResponse();
    //     setResponse1();
    //     setResponse2();
    //     setResponse3();
    //     setResponse4();
    //     console.error(err);
    //   }
    // );
    setTimeout(() => { navigation.navigate('CheckIn') }, 1500);
  };

  /**
   * Show next page elements. If end of page, do nothing
   */
  const showNextPage = () => {
    try {
      flatListRef.current.scrollToIndex({
        animated: true, 
        index: currentPage + 1
      });

      // Register username
      if (currentPage === 0) {
        // TODO: Send to server
        console.log(username);
      }

      // Send on last page
      if (currentPage === 7) {
        const requestBody = {
          'goal': goalResponse,
          'resp1': response1,
          'resp2': response2,
          'resp3': response3,
          'resp4': response4,
        };
        sendSurveyToServer(requestBody);
      }

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
   * @returns Disable flag
   */
  const disabledFor = (page) => {
    switch (page) {
      case 0: return !(username);
      case 1: return false;
      case 2: return !(goalResponse);
      case 3: return false;
      case 4: return !(response1);
      case 5: return !(response2);
      case 6: return !(response3);
      case 7: return !(response4);
      default: return true;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <View style={styles.pageHeader}>
        {(currentPage === 0) ? (
          <></>
        ): (
          <Pressable onPress={showPrevPage}>
            <Image 
              style={{width: 28, height: 28, marginBottom: 20}} 
              source={require("../assets/left-arrow.png")}
            />
          </Pressable>
        )}
        {(currentPage > 3 && currentPage < 8) ? (
          <ProgressBar currentPage={currentPage - 3} totalPage={4}/> 
        ) : (
          <></>
        )}
      </View>
      <FlatList
        ref={flatListRef}
        scrollEnabled={false}
        data={PAGES}
        horizontal={true}
        renderItem={({item}) => {
          return (
            <View style={styles.pageBody}>
              {item.component}
            </View>
          );
        }}
        keyExtractor={item => item.key}
      />
      <View style={styles.pageFooter}>
        {currentPage < 8 ? (
          <Button
            text={"다음"}
            onPress={showNextPage}
            disabled={disabledFor(currentPage)}
          />
        ) : (
          <></>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 20 : 0,
    backgroundColor: Colors.trueWhite,
  },
  pageBody: {
    height: '100%',
    width: Dimensions.get("screen").width,
    alignItems: 'center',
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
