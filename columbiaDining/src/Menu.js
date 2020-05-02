import React from 'react';
import {StyleSheet, View, ScrollView, Text } from 'react-native';
import { Card_nopress, Foodcard } from '../assets/components/card.js';
import { get_menu_data } from './Details.js'

export function Menu({ route, navigation}) {
  const menu_data = get_menu_data();
  var menu;
  for(let i = 0; i < menu_data.times.length; i++){ //Find the right time slot for this tab
    if(menu_data.times[i].name == route.name){
      menu = menu_data.times[i].groups;
      break;
    }
  }

  var groups = []
  for(let i = 0; i < menu.length; i++){  //Create different Foodcard for each group in menu
    groups.push(
      <Card_nopress>
        <Foodcard
          name={menu[i].name}
          items={menu[i].foods}
        />
      </Card_nopress>
    )
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        { groups }        
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: '2%',
    paddingTop: '2%',
    flexDirection: 'column'
  }
});