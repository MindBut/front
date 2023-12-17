import { 
  View, 
  StyleSheet,
  Text,
  FlatList,
  Image,
} from 'react-native';
import { Colors, Fonts } from '../common/styles';
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


export default SelectReason = ({ current, response, setResponse}) => {

  const REASONS = [{
    key: '1',
    option: {
      name: '일',
      image: (
        // *DEBUGGING*
        // <Image 
        //   style={styles.itemIcon} 
        //   source={require('../../assets/icons/bed.svg')} 
        // />
        <WorkIcon 
          color={response.includes('일') ? Colors.primary : Colors.grayText} 
          width={14} 
          height={14} 
        />
      )
    }
  }, {
    key: '2',
    option: {
      name: '학교',
      image: (
        <SchoolIcon 
          color={response.includes('학교') ? Colors.primary : Colors.grayText} 
          width={14} 
          height={14} 
        />
      )
    }
  }, {
    key: '3',
    option: {
      name: '외부활동',
      image: (
        <ExtIcon 
          color={response.includes('외부활동') ? Colors.primary : Colors.grayText} 
          width={14} 
          height={14} 
        />
      )
    }
  }, {
    key: '4',
    option: {
      name: '집',
      image: (
        <HomeIcon 
          color={response.includes('집') ? Colors.primary : Colors.grayText}
          width={14} 
          height={14} 
        />
      )
    }
  }, {
    key: '5',
    option: {
      name: '나',
      image: (
        <SelfIcon
          color={response.includes('나') ? Colors.primary : Colors.grayText}
          width={14} 
          height={14} 
        />
      )
    }
  }, {
    key: '6',
    option: {
      name: '연인',
      image: (
        <LoveIcon 
          color={response.includes('연인') ? Colors.primary : Colors.grayText}
          width={14} 
          height={14} 
        />
      )
    }
  }, {
    key: '7',
    option: {
      name: '가족',
      image: (
        <FamilyIcon 
          color={response.includes('가족') ? Colors.primary : Colors.grayText}
          width={14} 
          height={14} 
        />
      )
    }
  }, {
    key: '8',
    option: {
      name: '친구',
      image: (
        <FriendIcon 
          color={response.includes('친구') ? Colors.primary : Colors.grayText}
          width={14} 
          height={14} 
        />
      )
    }
  }, {
    key: '9',
    option: {
      name: 'SNS',
      image: (
        <ChatIcon 
          color={response.includes('SNS') ? Colors.primary : Colors.grayText}
          width={14} 
          height={14} 
        />
      )
    }
  }, {
    key: '10',
    option: {
      name: '음악',
      image: (
        <MusicIcon 
          color={response.includes('음악') ? Colors.primary : Colors.grayText}
          width={14} 
          height={14} 
        />
      )
    }
  }, {
    key: '11',
    option: {
      name: '수면',
      image: (
        <BedIcon 
          color={response.includes('수면') ? Colors.primary : Colors.grayText}
          width={14} 
          height={14} 
        />
      )
    }
  }, {
    key: '12',
    option: {
      name: '운동',
      image: (
        <RunningIcon 
          color={response.includes('운동') ? Colors.primary : Colors.grayText}
          width={14} 
          height={14} 
        />
      )
    }
  }, {
    key: '13',
    option: {
      name: '몸',
      image: (
        <BodyIcon 
          color={response.includes('몸') ? Colors.primary : Colors.grayText}
          width={14} 
          height={14} 
        />
      )
    }
  }, {
    key: '14',
    option: {
      name: '건강',
      image: (
        <HealthIcon 
          color={response.includes('건강') ? Colors.primary : Colors.grayText}
          width={14} 
          height={14} 
        />
      )
    }
  }, {
    key: '15',
    option: {
      name: '음식',
      image: (
        <FoodIcon 
          color={response.includes('음식') ? Colors.primary : Colors.grayText}
          width={14} 
          height={14} 
        />
      )
    }
  }, {
    key: '16',
    option: {
      name: '돈',
      image: (
        <MoneyIcon 
          color={response.includes('돈') ? Colors.primary : Colors.grayText}
          width={14} 
          height={14} 
        />
      )
    }
  }, {
    key: '17',
    option: {
      name: '날씨',
      image: (
        <WeatherIcon 
          color={response.includes('날씨') ? Colors.primary : Colors.grayText}
          width={14} 
          height={14} 
        />
      )
    }
  }, {
    key: '18',
    option: {
      name: '청소',
      image: (
        <CleaningIcon 
          color={response.includes('청소') ? Colors.primary : Colors.grayText}
          width={14} 
          height={14} 
        />
      )
    }
  }];


  return (
    <>
      <Text style={styles.text}>무엇 때문에 <Text style={styles.em}>{current}</Text>가요?</Text>
      <View style={styles.optionArea}>
        <FlatList
          style={styles.itemGrid}
          columnWrapperStyle={{justifyContent: 'space-between'}}
          keyExtractor={item => item.key}
          data={REASONS}
          renderItem={({item}) => (
            <Option 
              text={item.option.name} 
              element={item.option.image}
              selected={response.includes(item.option.name)}
              onPress={() => {
                if (response.includes(item.option.name)) {
                  let res = [...response];
                  res.splice(res.indexOf(item.option.name), 1);
                  setResponse(res);
                } else {
                  setResponse((res) => [...res, item.option.name])
                }
              }}
              style={styles.item}
              fontStyle={styles.itemFont}
            />
          )}
          numColumns={3}
        />
        <Option text={"+ 추가하기"} style={{width: '80%', marginTop: 30, paddingVertical: 10}} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: Fonts.header,
    fontSize: 24,
    marginVertical: 3
  },
  em: {
    color: Colors.primary,
  },
  optionArea: {
    width: '100%',
    alignItems: 'center',
    marginTop: 20,
  },
  itemGrid: {
    width: '80%',
  },
  item: {
    paddingVertical: 10, 
    paddingHorizontal: 0,
    marginVertical: 10, 
    borderRadius: 12,
    width: '30%',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  itemFont: {
    fontSize: 14,
  },
  itemIcon: {
    width: 14,
    height: 14,
  }
});
