import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  StatusBar,
  Image,
  Animated,
} from 'react-native';
import Constants from 'expo-constants';
import { Component } from 'react';
import Diningcard from './assets/components/card.js';
import Header from './assets/components/header.js';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

const times = [
  'Breakfast: 5:00-8:00',
  'Lunch: 11:00-4:00',
  'Dinner: 5:00-8:00',
];
/*
function changeTime (){
  const i =1;
  if time > 1 {
    this.setState.Date = times[1]
  }
}
*/
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
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <View style={styles.container}>
          <Card style={styles.card} onPress={this.onPress}>
            <Diningcard
              name="Ferris Booth"
              breakfast="9:00-12:00"
              lunch="12:00-4:00"
              dinner="5:00-8:00"
              density="70%"
            />
          </Card>
        </View>
        <View style={styles.container}>
          <Card style={styles.card} onPress={this.onPress}>
            <Diningcard
              name="John Jay"
              breakfast="9:00-12:00"
              lunch="12:00-4:00"
              dinner="5:00-8:00"
              density="10%"
            />
          </Card>
        </View>
        <View style={styles.container}>
          <Card style={styles.card} onPress={this.onPress}>
            <Diningcard
              name="JJ's Place"
              breakfast="9:00-12:00"
              lunch="12:00-4:00"
              dinner="5:00-8:00"
              density="80%"
            />
          </Card>
        </View>
        <View style={styles.container}>
          <Card style={styles.card} onPress={this.onPress}>
            <Diningcard
              name="Hewitt"
              breakfast="9:00-12:00"
              lunch="12:00-4:00"
              dinner="5:00-7:45"
              density="70%"
            />
          </Card>
        </View>
        <View style={styles.container}>
          <Card style={styles.card} onPress={this.onPress}>
            <Diningcard
              name="Diana"
              breakfast="9:00-12:00"
              lunch="12:00-4:00"
              dinner="5:00-8:00"
              density="40%"
            />
          </Card>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 0,
  },

  card: {
    marginBottom: '2%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default App;
