import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

function Stats(props) {
  let total = props.todos.length;
  let completed = props.todos.filter(todo => todo.completed).length;
  let notCompleted = total - completed;
  return (
    <View style={props.style}>
        <View style={style.tr}>
          <Text style={style.title}>ВСЕГО ЗАДАЧ:</Text>
          <Text style={style.res}>{total}</Text>
        </View>
        <View style={style.tr}>
          <Text style={style.title}>ВЫПОЛНЕНО:</Text>
          <Text style={style.res}>{completed}</Text>
        </View>
        <View style={style.tr}>
          <Text style={style.title}>ОСТАЛОСЬ:</Text>
          <Text style={style.res}>{notCompleted}</Text>
        </View>
    </View>
  );
}


const style = StyleSheet.create({
  title: {
    color: '#fff',
    fontSize: 15,
  },
  res: {
    paddingLeft: 10,
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  },
  tr: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5
  }
})

export default Stats;
