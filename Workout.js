import React, {useState} from 'react'
import {Button, Text, TextInput, View} from 'react-native'

const Workout = () => {
  const [didWorkout, setDidWorkout] = useState(false)
  const [text, setText] = useState('')

  return (
    <View>
      <Button
        onPress={() => {
          setDidWorkout(true)
        }}
        title={didWorkout ? "Completed today's workout" : "Complete today's workout"}
        disabled={didWorkout}
      />
      <TextInput 
        style={{height: 40}}
        placeholder="Type your workout here"
        onChangeText={newText => setText(newText)}
        defaultValue={text}
      />
      <Text
        style={{padding: 10, fontSize: 42}}
      >
        {text}

      </Text>
    </View>
  )
}

export default Workout