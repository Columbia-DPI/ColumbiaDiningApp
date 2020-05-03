import * as React from 'react';
import { Text, View, StyleSheet, Image, Animated, TouchableOpacity } from 'react-native';

export default function Card(props){
  return(
    <TouchableOpacity 
        activeOpacity={0.5}
        onPress={props.onPress}
    >
    <View style={styles.basicCard}> 
        {props.children}
    </View>
    </TouchableOpacity>
  )
}

export function Card_nopress(props){
  return(
    <View style={styles.basicCard}> 
        {props.children}
    </View>
  );
}

export function Diningcard(props) {
  var times = []
  for(let i = 0; i < props.items.length; i++){
    times.push(<Text style={styles.timeText} key={props.items[i].toString()}>{props.items[i]}</Text>)
  }
  return (
    <View style={styles.diningCard}>
      <View>
        <Text style={styles.cardTitle}>{props.name}</Text>
        { times }
      </View>
      <View style={styles.progressBar}>
        <Animated.View
          style={
            ([StyleSheet.absoluteFill],
            { backgroundColor: '#B3DAFF', width: props.density })
          }
        />
      </View>
    </View>
  );
}

export function Foodcard(props) {
  var foods = []
  for(let i = 0; i < props.items.length; i++){
    if(props.items[i].includes('Vegetarian')){
      foods.push(<View style={styles.foodnameVegetarian} key={props.items[i].toString()}><Text>{props.items[i]}</Text></View>)
    } else if (props.items[i].includes('Vegan')){
      foods.push(<View style={styles.foodnameVegan} key={props.items[i].toString()}><Text>{props.items[i]}</Text></View>)
    } else {
      foods.push(<View style={styles.foodnameBase} key={props.items[i].toString()}><Text>{props.items[i]}</Text></View>)
    }
  }
  return (
    <View style={styles.foodCard}>
      <View>
        <Text style={styles.cardTitle}>{props.name}</Text>
        { foods }
      </View>
    </View>
  );
}






const styles = StyleSheet.create({
  basicCard: {
    borderRadius: 15,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    padding: '5%',
    marginTop: '2%',
    marginBottom: '2%',
    marginRight: '4%',
    marginLeft: '4%'
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "700",
    paddingBottom: 10,
  },
  diningCard: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  timeText: {
    opacity: 0.7,
  },
  progressBar: {
    flexDirection: 'row',
    height: 20,
    width: '50%',
    backgroundColor: 'white',
    borderColor: 'rgba(0,0,0,0.05)',
    borderWidth: 1,
    borderRadius: 5,
  },
  foodCard: {
    justifyContent: 'space-between'
  },
  foodnameBase: {
    borderRadius: 9,
    backgroundColor: '#cef',
    justifyContent: 'space-between',
    padding: '3%',
    marginTop: '2%',
    marginBottom: '2%',
    marginRight: '0%',
    marginLeft: '0%'
  },
  foodnameVegan: {
    borderRadius: 9,
    backgroundColor: '#5ADAAF',
    justifyContent: 'space-between',
    padding: '3%',
    marginTop: '2%',
    marginBottom: '2%',
    marginRight: '0%',
    marginLeft: '0%'
  },
  foodnameVegetarian: {
    borderRadius: 9,
    backgroundColor: '#BBFF00',
    justifyContent: 'space-between',
    padding: '3%',
    marginTop: '2%',
    marginBottom: '2%',
    marginRight: '0%',
    marginLeft: '0%'
  },
})