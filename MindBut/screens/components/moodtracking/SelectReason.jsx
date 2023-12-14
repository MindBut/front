import { 
  View, 
  StyleSheet,
  Text,
  FlatList,
  Image,
} from 'react-native';
import { Colors, Fonts } from '../common/styles';


export default SelectReason = ({ current, response, setResponse}) => {

  const REASONS = [{
    key: '1',
    option: {
      name: '일',
      image: (
        <Image 
          style={styles.itemIcon} 
          source={require('../../../assets/wip.png')} 
        />
      )
    }
  }, {
    key: '2',
    option: {
      name: '학교',
      image: (
        <Image 
          style={styles.itemIcon} 
          source={require('../../../assets/wip.png')} 
        />
      )
    }
  }, {
    key: '3',
    option: {
      name: '외부활동',
      image: (
        <Image 
          style={styles.itemIcon} 
          source={require('../../../assets/wip.png')} 
        />
      )
    }
  }, {
    key: '4',
    option: {
      name: '집',
      image: (
        <Image 
          style={styles.itemIcon} 
          source={require('../../../assets/wip.png')} 
        />
      )
    }
  }, {
    key: '5',
    option: {
      name: '나',
      image: (
        <Image 
          style={styles.itemIcon} 
          source={require('../../../assets/wip.png')} 
        />
      )
    }
  }, {
    key: '6',
    option: {
      name: '연인',
      image: (
        <Image 
          style={styles.itemIcon} 
          source={require('../../../assets/wip.png')} 
        />
      )
    }
  }, {
    key: '7',
    option: {
      name: '가족',
      image: (
        <Image 
          style={styles.itemIcon} 
          source={require('../../../assets/wip.png')} 
        />
      )
    }
  }, {
    key: '8',
    option: {
      name: '친구',
      image: (
        <Image 
          style={styles.itemIcon} 
          source={require('../../../assets/wip.png')} 
        />
      )
    }
  }, {
    key: '9',
    option: {
      name: 'SNS',
      image: (
        <Image 
          style={styles.itemIcon} 
          source={require('../../../assets/wip.png')} 
        />
      )
    }
  }, {
    key: '10',
    option: {
      name: '음악',
      image: (
        <Image 
          style={styles.itemIcon} 
          source={require('../../../assets/wip.png')} 
        />
      )
    }
  }, {
    key: '11',
    option: {
      name: '수면',
      image: (
        <Image 
          style={styles.itemIcon} 
          source={require('../../../assets/wip.png')} 
        />
      )
    }
  }, {
    key: '12',
    option: {
      name: '운동',
      image: (
        <Image 
          style={styles.itemIcon} 
          source={require('../../../assets/wip.png')} 
        />
      )
    }
  }, {
    key: '13',
    option: {
      name: '몸',
      image: (
        <Image 
          style={styles.itemIcon} 
          source={require('../../../assets/wip.png')} 
        />
      )
    }
  }, {
    key: '14',
    option: {
      name: '건강',
      image: (
        <Image 
          style={styles.itemIcon} 
          source={require('../../../assets/wip.png')} 
        />
      )
    }
  }, {
    key: '15',
    option: {
      name: '음식',
      image: (
        <Image 
          style={styles.itemIcon} 
          source={require('../../../assets/wip.png')} 
        />
      )
    }
  }, {
    key: '16',
    option: {
      name: '돈',
      image: (
        <Image 
          style={styles.itemIcon} 
          source={require('../../../assets/wip.png')} 
        />
      )
    }
  }, {
    key: '17',
    option: {
      name: '날씨',
      image: (
        <Image 
          style={styles.itemIcon} 
          source={require('../../../assets/wip.png')} 
        />
      )
    }
  }, {
    key: '18',
    option: {
      name: '청소',
      image: (
        <Image 
          style={styles.itemIcon} 
          source={require('../../../assets/wip.png')} 
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
