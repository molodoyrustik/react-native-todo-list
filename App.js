import React from 'react';
import { StyleSheet, Text, ScrollView } from 'react-native';
import Root from './src/Root';
import todos from './src/todos';

export default class App extends React.Component {

  render() {
    return (
      <ScrollView style={styles.container}>
        <Root title='TODO LIST' initialData={todos}/>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#fff'
  },
});
