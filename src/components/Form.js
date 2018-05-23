import React from 'react';
import {View, Text, TextInput, Button, StyleSheet, TouchableOpacity} from 'react-native';

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit() {
    let title = this.state.title;

    if (title) {
      this.props.onAdd(title);
      this.setState({ title: '' })
    }
  }

  handleChange(text) {
    let title = text;

    this.setState({ title })
  }

  render() {
    return (
      <View style={style.todoForm} className="todo-form" onPress={this.handleSubmit}>
        <TextInput
          style={style.textInput}
          value={this.state.title}
          placeholder="Что нужно сделать?"
          onChangeText={this.handleChange}
          underlineColorAndroid='transparent'
        />

        <Button
          style={style.button}
          onPress={this.handleSubmit}
          title="ДОБАВИТЬ"
          color="#757575"
          accessibilityLabel="Learn more about this purple button"
        />

      </View>
    );
  }
}

const style = StyleSheet.create({
  todoForm: {

    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '5%',
    borderTopWidth: 1,
    borderTopColor: 'rgba(0,0,0,.1)',
    backgroundColor: '#FAFAFA',
  },
  textInput: {
    width: '70%',
    height: 50,
    padding: 10,
    fontSize: 17,
    lineHeight: 20,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'rgba(0,0,0,.1)',
    borderRadius: 5,
    color: '#757575',
    fontSize: 20
  },
  button: {
    width: '20%',
    color: '#757575',
  }
})


export default Form;
