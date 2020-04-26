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
            },
            headerTintColor: '#fff'
          }}       
        />
        <Stack.Screen name="Details" component={DetailsScreen} 
          options={{
            headerStyle: {
              backgroundColor: '#62A8E5',
            },
            headerTintColor: '#fff'
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;