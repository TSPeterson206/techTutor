import { createStackNavigator } from 'react-navigation';
import HomeScreen from './screens/HomeScreen';
import Tutors from './screens/Tutors'

const AppNavigator = createStackNavigator({
  HomeScreen: { screen: HomeScreen },
  Tutors: { screen: Tutors }
});

export default AppNavigator;