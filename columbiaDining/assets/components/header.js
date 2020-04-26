import * as React from 'react';
import { Text, View, StyleSheet, Image, Card, Animated } from 'react-native';
import Constants from 'expo-constants';
import { Component } from 'react';

export default function header(props) {
  return (
    <View style={styles.header}>
      <Image
        style={styles.headerim}
        source={require('../columbia.png')}
        resizeMode="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  headerim: {
    flex: 1,
    height: '60%',
    width: 'auto',
  },
  header: {
    width: '100%',
    height: '15%',
    backgroundColor: '#62A8E5',
    paddingTop: Constants.statusBarHeight,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '2%',
  },
});
