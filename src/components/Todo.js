import React from 'react';
import {Text, View, TextInput, StyleSheet} from 'react-native';

import Checkbox from './Checkbox';
import MyButton from './Button';

class Todo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      editing: false,
      title: this.props.title
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeText = this.handleChangeText.bind(this);
  }

  handleChangeText(text) {
    this.setState({title: text})
  }

  handleSubmit(e) {
    e.preventDefault();
    let title = this.state.title;
    this.props.onEdit(this.props.id, title);
    this.setState({ editing: false });
  }

  renderDisplay() {
    return (
      <View style={style.todo}>
        <Checkbox checked={this.props.completed} onChange={ () => this.props.onStatusChange(this.props.id) }/>

        <Text style={ this.props.completed ? style.titleCheck: style.title}>{this.props.title}</Text>

        <MyButton completed={this.props.completed} imageName={require(`../../public/images/write.png`)} onClick={() => this.setState({ editing: true })}/>
        <MyButton completed={this.props.completed} imageName={require(`../../public/images/delete.png`)} onClick={() => this.props.onDelete(this.props.id)}/>
      </View>
    )
  }

  renderForm() {
    return (
      <View  style={style.todo}>
        <TextInput underlineColorAndroid='transparent' style={style.title} value={this.state.title} onChangeText={this.handleChangeText}/>
        <MyButton completed={this.props.completed} imageName={require(`../../public/images/save.png`)} onClick={this.handleSubmit}/>
      </View>
    )
  }

  render() {
    return this.state.editing ? this.renderForm() : this.renderDisplay();
  }
}


const style = StyleSheet.create({
  todo: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '5%',
    borderTopWidth: 1,
    borderTopColor: 'rgba(0,0,0,.1)'
  },
  title: {
    width: '60%',
    color: '#757575',
    fontSize: 17,
    lineHeight: 20
  },
  titleCheck: {
    width: '60%',
    color: '#757575',
    fontSize: 17,
    lineHeight: 20,
    textDecorationLine: 'line-through',
    color: 'lightgray'
  }
})

export default Todo;
