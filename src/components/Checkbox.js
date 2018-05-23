import React, { Component } from 'react';
import {Text, CheckBox } from 'react-native';

class Checkbox extends Component {
  render() {
    return (
      <CheckBox onChange={() => {
          this.props.onChange();
        }} value={this.props.checked}></CheckBox>
    );
  }
}


export default Checkbox;
