import React from "react";
import { Text } from "react-native";

const getFullName = (firstName, secondName, thirdName) => {
  return firstName + ' ' + secondName + ' ' + thirdName;
}

const Cat = () => {
  const name = 'Maru'
  return (
    <Text>Hello, I'm a cat named {name}. My full name is {getFullName('Rum', 'Tum', 'Tugger')}!</Text>
  )
}

export default Cat