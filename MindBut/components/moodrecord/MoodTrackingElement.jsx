import { 
  Text,
  StyleSheet, 
  View,
  Image,
  Pressable,
} from 'react-native';
import { Colors, Device, Fonts } from '../common/styles';
import BedIcon from '../../assets/icons/bed.svg';
import BodyIcon from '../../assets/icons/body.svg';
import ChatIcon from '../../assets/icons/chat.svg';
import CleaningIcon from '../../assets/icons/cleaning.svg';
import ExtIcon from '../../assets/icons/external.svg';
import FamilyIcon from '../../assets/icons/family.svg';
import FoodIcon from '../../assets/icons/food.svg';
import FriendIcon from '../../assets/icons/friend.svg';
import HealthIcon from '../../assets/icons/health.svg';
import HomeIcon from '../../assets/icons/home.svg';
import LoveIcon from '../../assets/icons/love.svg';
import MoneyIcon from '../../assets/icons/money.svg';
import MusicIcon from '../../assets/icons/music.svg';
import RunningIcon from '../../assets/icons/running.svg';
import SchoolIcon from '../../assets/icons/school.svg';
import SelfIcon from '../../assets/icons/self.svg';
import WeatherIcon from '../../assets/icons/weather.svg';
import WorkIcon from '../../assets/icons/work.svg'; 


export default MoodTrackingElement = ({ category, scale, mood, reason, time}) => {

  const iconPath = "../../assets/wip.png";

  const moodColorSelector = (category) => {
    switch (category) {
      case '기쁨': return '#ff0000';
      case '당황': return '#ff0000';
      case '분노': return '#ff0000';
      case '불안': return '#ff0000';
      case '상처': return '#ff0000';
      case '슬픔': return '#ff0000';
      default: return '#ffffff';
    };
  };

  const moodIconSelector = (reason) => {
    switch (reason) {
      case '일': return (<WorkIcon width={18} height={18} />);
      case '학교': return (<SchoolIcon color={Colors.grayText} width={24} height={24} />);
      case '외부활동': return (<ExtIcon width={18} height={18} />);
      case '집': return (<HomeIcon width={18} height={18} />);
      case '나': return (<SelfIcon width={18} height={18} />);
      case '연인': return (<LoveIcon width={18} height={18} />);
      case '가족': return (<FamilyIcon width={18} height={18} />);
      case '친구': return (<FriendIcon width={18} height={18} />);
      case 'SNS': return (<ChatIcon width={18} height={18} />);
      case '음악': return (<MusicIcon width={18} height={18} />);
      case '수면': return (<BedIcon width={18} height={18} />);
      case '운동': return (<RunningIcon width={18} height={18} />);
      case '몸': return (<BodyIcon width={18} height={18} />);
      case '건강': return (<HealthIcon width={18} height={18} />);
      case '음식': return (<FoodIcon width={18} height={18} />);
      case '돈': return (<MoneyIcon width={18} height={18} />);
      case '날씨': return (<WeatherIcon width={18} height={18} />);
      case '청소': return (<CleaningIcon width={18} height={18} />);
      default: return (<></>);
    }
  };

  const concatScaleAndMood = (scale, mood) => {
    // Clamp value to [0, 1]
    scale = Math.max(Math.min(scale, 1), 0);
    
    if (scale > 0.8) return "아주 많이 " + mood;
    else if (scale > 0.6) return "많이 " + mood;
    else if (scale > 0.4) return mood;
    else if (scale > 0.2) return "조금 " + mood;
    else return "아주 조금 " + mood;
  };
  

  return (
    <View style={styles.wrapper}>
      <View style={styles.header}>
        <Image style={{width: 24, height: 24}} source={require(iconPath)} />
        <View style={styles.headerContent}>
          <Text style={styles.mood}>{concatScaleAndMood(scale, mood)}</Text>
          <View style={{justifyContent: 'flex-end'}}>
            <Text>{time}</Text>  
          </View>
        </View>
      </View>
      <Pressable style={styles.body} onPress={() => console.log({mood}, {category})}>
        <View style={{width: 24, alignItems: 'center',}}>
          <View style={{paddingVertical: 18, width: 6, backgroundColor: 'red', borderRadius: 5}}>
            <Text style={styles.mood}>{/* Vertical Bar */} </Text>
          </View>
        </View>
        <View style={{...styles.bodyContent, backgroundColor: moodColorSelector(category)}}>
          {moodIconSelector(reason)}
          <Text style={styles.reason}>{reason}</Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    borderWidth: 1,
    width: '100%',
  },
  header: {
    flexDirection: 'row',
  },
  headerContent: {
    borderWidth: 2,
    width: Device.fullLayoutWidth - 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  body: {
    flexDirection: 'row',
    width: '100%',
  },
  bodyContent: {
    width: Device.fullLayoutWidth - 24,
    padding: 18,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'red',
    borderRadius: 24,
  },
  mood: {
    fontSize: 18,
    fontFamily: Fonts.body,
  },
  reason: {
    fontSize: 18,
    fontFamily: Fonts.body,
  }
});
