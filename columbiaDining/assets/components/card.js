import * as React from 'react';
import { Text, View, StyleSheet, Image, Card, Animated, TouchableOpacity } from 'react-native';



export default function Test(props){
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
              { backgroundColor: '#62A8E5', width: props.density })
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
        marginTop: '1.5%',
        marginBottom: '1.5%',
        marginRight: '3%',
        marginLeft: '3%'
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