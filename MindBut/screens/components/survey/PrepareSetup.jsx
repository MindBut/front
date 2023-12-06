import {
  View,
  Text,
} from 'react-native'
import { useNavigation } from "@react-navigation/native";

export default PrepareSetup = () => {
  const navigation = useNavigation();

  const sendSurveyToServer = () => {

  };

  return (
    <View style={{ height: '100%', justifyContent: 'center' }}>
      <Text style={styles.header}>
        {"OOO님만을 위한 맞춤형 마인드벗을 준비 중이에요."}
      </Text>
    </View>
  );
};