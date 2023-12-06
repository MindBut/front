import { 
  Text,
  ScrollView,
  View,
  StyleSheet,
} from 'react-native';
import { Colors, Fonts } from '../common/styles';

const GoalItem = () => {
  return (
    <View style={styles.item}>
      <Text>Hello</Text>
    </View>
  );
};


export default SetGoals = () => {
  return (
    <>
      <Instruction 
        title={"무엇을 위해 \n가입하셨나요?"}
        description={"당신의 목표에 기반하여 마인드벗이 맞춤형 솔루션을 제공합니다."}
      />
      <ScrollView style={styles.container}>
        <View style={styles.itemBox}>
          <GoalItem />
          <GoalItem />
          <GoalItem />
          <GoalItem />
          <GoalItem />
          <GoalItem />
          <GoalItem />
          <GoalItem />
          <GoalItem />
        </View>
      </ScrollView>
      </>
  )
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: Colors.lightGray,
    width: 100,
    height: 100,
    borderRadius: 50,
    marginVertical: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemBox: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 20,
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  container: {
    height: '100%',
  }
})