import * as React from 'react';
import { Text, View, StyleSheet, Image, Animated, TouchableOpacity } from 'react-native';



export default function Card(props){
    return(
        <TouchableOpacity 
            activeOpacity={0.5}
            onPress={props.onPress}
        >
        <View style={styles.pressableCard}> 
            {props.children}
        </View>
        </TouchableOpacity>
    )
}

export function Diningcard(props) {
    return (
      <View style={styles.diningCard}>
        <View>
          <Text style={styles.cardTitle}>{props.name}</Text>
          <Text style={styles.timeText}>Breakfast: {props.breakfast}</Text>
          <Text style={styles.timeText}>Lunch: {props.lunch}</Text>
          <Text style={styles.timeText}>Dinner: {props.dinner}</Text>
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




const styles = StyleSheet.create({
    pressableCard: {
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
})