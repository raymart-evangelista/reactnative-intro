import React from "react";
import { Text, TextInput, View } from "react-native";

const getFullName = (firstName, secondName, thirdName) => {
  return firstName + ' ' + secondName + ' ' + thirdName;
}

const Cat = (props) => {
  const name = 'Maru'
  return (
    // <Text>Hello, I'm a cat named {name}. My full name is {getFullName('Rum', 'Tum', 'Tugger')}!</Text>
    <View>
      <Text>Hello, I am... {props.name}</Text>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
        }}
        defaultValue="Name me!"
      />
    </View>
  )
}

export default Cat