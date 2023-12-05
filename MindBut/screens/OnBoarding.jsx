import { 
  SafeAreaView, 
  StatusBar, 
  Animated, 
  Text, 
  View, 
  StyleSheet, 
  Image,
  Pressable
} from 'react-native';
import React, { useRef, useEffect } from 'react';
import axios from 'axios';
import * as KakaoLogin from '@react-native-seoul/kakao-login';


const KakaoLoginButton = () => {
  /**
   * Sign in user to Kakao Auth server, and receive bearer access token.
   * 
   * @returns Bearer token for accessing Kakao API server
   */
  const getKakaoAccessToken = async () => {
    try {
      return await KakaoLogin.login().then((res) => res.accessToken);
    } catch(err) {
      console.error("Kakao login error", err);
    }
  }

  /**
   * Fetch user ID from Kakao API server using access token, and sign in user to
   * MindBut server.
   * 
   * @param accessToken Bearer token received from Kakao Auth.
   */
  const signInWithAccessToken = async (accessToken) => {
    try {
      const username = await axios.post(
        "http://localhost:8000/login/",
        { "access_token": accessToken }
      ).then((res) => res.data);
    } catch (err) {
      console.error("Server login error", err);
    }
  }

  return (
    <Pressable onPress={async () => {
      const accessToken = await getKakaoAccessToken();
      signInWithAccessToken(accessToken);
    }}>
      <Image
        source={require("../assets/kakao_login/ko/kakao_login_large_wide.png")}
        style={styles.kakao}
      />
    </Pressable>
  );
};


const FadeInView = () => {
  // Refs
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const fadeAnim2 = useRef(new Animated.Value(0)).current;
  const fadeAnim3 = useRef(new Animated.Value(0)).current;
  const fadeAnim4 = useRef(new Animated.Value(0)).current;

  /**
   * Fade animation for contents.
   * 
   */
  const showFeatureAnimation = () => {
    const fadeDuration = 1000;
    const bufferDuration = 500;

    Animated.sequence([
      // DEBUG: RESET FADE VAL
      Animated.timing(fadeAnim4, {
        toValue: 0,
        duration: 0,
        useNativeDriver: true,
      }),
      // Fade in
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: fadeDuration,
        useNativeDriver: true,
      }),
      // Buffer
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: bufferDuration,
        useNativeDriver: true,
      }),
      // Fade out
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: fadeDuration,
        useNativeDriver: true,
      }),
      // Fade in
      Animated.timing(fadeAnim2, {
        toValue: 1,
        duration: fadeDuration,
        useNativeDriver: true,
      }),
      // Buffer
      Animated.timing(fadeAnim2, {
        toValue: 1,
        duration: bufferDuration,
        useNativeDriver: true,
      }),
      // Fade out
      Animated.timing(fadeAnim2, {
        toValue: 0,
        duration: fadeDuration,
        useNativeDriver: true,
      }),
      // Fade in
      Animated.timing(fadeAnim3, {
        toValue: 1,
        duration: fadeDuration,
        useNativeDriver: true,
      }),
      // Buffer
      Animated.timing(fadeAnim3, {
        toValue: 1,
        duration: bufferDuration,
        useNativeDriver: true,
      }),
      // Fade out
      Animated.timing(fadeAnim3, {
        toValue: 0,
        duration: fadeDuration,
        useNativeDriver: true,
      }),
      // Fade in
      Animated.timing(fadeAnim4, {
        toValue: 1,
        duration: fadeDuration,
        useNativeDriver: true,
      }),
    ]).start();
  };

  // Effects
  useEffect(showFeatureAnimation, [fadeAnim, fadeAnim2, fadeAnim3, fadeAnim4]);


  return (
    <View>
      <Animated.View
        style={{
          ...styles.animationView,
          opacity: fadeAnim,
        }}>
        <Text style={styles.caption}>
          인지행동치료 기반의
        </Text>
        <Text style={styles.caption}>
          AI 상담 챗봇
        </Text>
        <Image
          style={styles.icon}
          source={require("../assets/wip.png")}
        />
        <Text style={styles.caption}>
          마인드 벗
        </Text>
      </Animated.View>
      <Animated.View
        style={{
          ...styles.animationView,
          opacity: fadeAnim2,
        }}>
        <Text style={styles.caption}>
          맞춤형으로
        </Text>
        <Text style={styles.caption}>
          정신 건강을 진단하고
        </Text>
        <Image
          style={styles.icon}
          source={require("../assets/wip.png")}
        />
      </Animated.View>
      <Animated.View
        style={{
          ...styles.animationView,
          opacity: fadeAnim3,
        }}>
        <Text style={styles.caption}>
          챗봇을 통해
        </Text>
        <Text style={styles.caption}>
          즉각적 도움을 제공하는
        </Text>
        <Image
          style={styles.icon}
          source={require("../assets/wip.png")}
        />
      </Animated.View>
      <Animated.View
        style={{
          ...styles.animationView,
          opacity: fadeAnim4,
        }}>
        <Text style={styles.caption}>
          AI 상담 보조 서비스
        </Text>
        <Image
          style={styles.icon}
          source={require("../assets/wip.png")}
        />
        <KakaoLoginButton />
      </Animated.View>
    </View>
  );
};


export default function OnBoarding() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <FadeInView />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 20 : 0,
    backgroundColor: '#0ca0ef',
    justifyContent: 'center',
  },
  animationView: {
    position: 'absolute',
    top: -200,
    // backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  icon: {
    marginTop: 30,
    marginBottom: 30,
    width: 200,
    height: 200
  },
  kakao: {
    width: 300,
    resizeMode: 'contain'
  },
  caption: {
    textAlign: 'center',
    fontSize: 24,
    marginBottom: 10,
    color: 'white',
  }
});
