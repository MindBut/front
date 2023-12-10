import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnBoarding from './screens/OnBoarding';
import Survey from './screens/Survey';
import CheckIn from './screens/CheckIn';

function App(): JSX.Element {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* <Stack.Screen name="OnBoarding" component={OnBoarding} /> */}
        {/* <Stack.Screen name="Survey" component={Survey} /> */}
        <Stack.Screen name="CheckIn" component={CheckIn} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;