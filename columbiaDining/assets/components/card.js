import * as React from 'react';
import { Text, View, StyleSheet, Image, Card, Animated } from 'react-native';
import Constants from 'expo-constants';
import { Component } from 'react';

export default function Diningcard(props) {
  return (
    <View style={styles.vCard}>
      <View>
        <Text style={styles.textCard}>{props.name}</Text>
        <Text style={styles.timeText}>Breakfast: {props.breakfast}</Text>
        <Text style={styles.timeText}>Lunch: {props.lunch}</Text>
        <Text style={styles.timeText}>Dinner: {props.dinner}</Text>
      </View>
      <View style={styles.progressBar}>
        <Animated.View
          style={
            ([StyleSheet.absoluteFill],
            { backgroundColor: '#B9D9EB', width: props.density })
          }
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  textCard: {
    fontSize: 20,
    fontWeight: "700",
    paddingBottom: 5,
  },

  vCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: '10%',
    paddingRight: '10%',
    paddingTop: '6%',
    paddingBottom: '6%'
  },

  timeText: {
    opacity: 0.5,
  },
  //headerText: {
  //fontSize: '100',
  //fontWeight: '300'
  //},
  progressBar: {
    flexDirection: 'row',
    height: 20,
    width: '50%',
    backgroundColor: 'white',
    borderColor: 'rgba(0,0,0,0.05)',
    borderWidth: 1,
    borderRadius: 5,
  },
});
