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
make the breakfast,lunch,dinner tabs have variable names bc not all dining halls have these 3 time slots (e.g. jjs) - Details.js change meals array depending on diningHall
make food categories dynamic
Generate items in Menu.js dynamically using for loop just like it's done in Details.js and card.js Foodcard

*/