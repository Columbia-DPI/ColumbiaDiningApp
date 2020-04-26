import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//Screens
import { HomeScreen } from './src/Home';
import { DetailsScreen } from './src/Details';

const Stack = createStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;




/*
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //default value of the date time
      //unused for now, maybe implement later
      date: new Date().getMinutes(),
    };
  }

  onPress = () => {};
  
}
*/


