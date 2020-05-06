import React, { Children } from 'react';
import { View, StyleSheet, ActivityIndicator, Text, ScrollView } from 'react-native';
import Card from '../assets/components/card.js';
import { Diningcard } from '../assets/components/card.js';

const url = "http://columbia-dining.herokuapp.com/home";

export class HomeScreen extends React.Component {
  constructor({navigation}){
    super();
    this.navigation = navigation;
    this.state = {loaded: false, data: null}
  }
  async componentDidMount(){
    try {
      const response = await fetch(url);
      const responseJson = await response.json();
      this.setState({
        loaded: true,
        data: responseJson
      });
    }
    catch (error) {
      console.log(error);
    }
  }
  render() {
    if(this.state.loaded){
      const halls = this.state.data.dininghalls;
      let cards = [];
      for(let i = 0; i < halls.length; i++){
        cards.push(
          <Card onPress={() => this.navigation.navigate('Details', {diningHall: halls[i].name})} key={JSON.stringify(halls[i])}> 
            <Diningcard
              name= {halls[i].name}
              items = {halls[i].times}
              density= {halls[i].density}
              key={JSON.stringify(halls[i])}
            />
          </Card>
        )
      }
    
      return (
        <ScrollView>
          <View style={styles.container}>{cards}</View>
        </ScrollView>
      );

    } else{
      /*-------Loading Screen-------*/
      return (
        <View style={styles.container}>
          <ActivityIndicator/>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: '2%',
    paddingTop: '2%',
    flexDirection: 'column'
  }
});
