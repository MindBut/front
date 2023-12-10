import { StyleSheet } from "react-native"

export const Colors = {
  primary: '#5687f6',
  secondary: '#f7f6fa',
  tertiary: '#eef3fe',

  chatBlue: '#abc3fb',
  chatGray: '#eeeeee',

  // DEPRECATED
  white: '#f8f8f8',
  lightGray: '#dbdbdb',
  grayFont: '#727272',
  darkGray: '#4f4f4f',
}

export const Fonts = {
  header: 'NotoSansKR-Bold',
  body: 'NotoSansKR-Regular',
}

export const defaultStyle = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 20 : 0,
    backgroundColor: Colors.white,
  },
})