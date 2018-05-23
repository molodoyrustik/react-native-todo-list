import React from 'react';
import {TouchableOpacity, Image} from 'react-native';

function MyButton(props) {
  return (
    <TouchableOpacity onPress={props.onClick}>
        <Image
          style={props.completed ? styles.buttonChecked: styles.button}
          source={props.imageName}
        />
    </TouchableOpacity>
  );
}

const styles = {
  button: {
    width: 20,
    height: 20,
  },
  buttonChecked: {
    width: 20,
    height: 20,
    opacity: 0.3
  }
}

export default MyButton;
