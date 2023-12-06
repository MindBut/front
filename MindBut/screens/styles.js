import { StyleSheet } from "react-native"

export const Colors = {
  main1: '#0077ed',
  main2: '#0c9fef',
  main3: '#1ebfff',
  main4: '#a3daff',
  main5: '#0ca0ef',
  white: '#f8f8f8',
  disabled: '#dbdbdb',
  grayFont: '#727272',
}

export const Fonts = {
  header: 'NotoSansKR-Bold',
  body: 'NotoSansKR-Regular',
}

export const Default = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 20 : 0,
    backgroundColor: Colors.white,
  },
})