import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Stats from './Stats';

function Header(props) {
  return (
    <View style={style.header}>
      <Stats style={style.stats} todos={props.todos}/>
      <Text style={style.text}>{props.title}</Text>
    </View>
  );
}

const style = StyleSheet.create({
  header: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: '2%',
    backgroundColor: '#222'
  },
  stats: {
    width: '30%'
  },
  text: {
    marginLeft: '10%',
    marginRight: '15%',
    width: '40%',
    color: '#00d8ff',
    fontSize: 30,
    fontWeight: 'bold'
  }
})

export default Header;
