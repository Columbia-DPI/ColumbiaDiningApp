import React from 'react';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//Screens
import { HomeScreen } from './src/Home';
import { DetailsScreen } from './src/Details';

function LogoTitle() {
  return (
    <Image
      style={{ width: 100, height: 30 }}
      source={require('./assets/columbia.png')}
      resizeMode="contain"
    />
  );
}

const Stack = createStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen}
          options={{
            headerRight: () => (<LogoTitle/>),
            headerStyle: {
              backgroundColor: '#62A8E5',
            }
          }}       
        />
        <Stack.Screen name="Details" component={DetailsScreen} 
          options={{
            headerStyle: {backgroundColor: '#62A8E5'}
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;


/*
To do: 
initialRouteName so that it goes to current meal or the one comming up. check the current time in EST and compare to the time slots in db - Details.js
*/