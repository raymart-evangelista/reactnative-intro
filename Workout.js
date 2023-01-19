import React, {useState} from 'react'
import {Button, Text, View} from 'react-native'

const Workout = () => {
  const [didWorkout, setDidWorkout] = useState(false)

  return (
    <View>
      <Button
        onPress={() => {
          setDidWorkout(true)
        }}
        title={didWorkout ? "Completed today's workout" : "Complete today's workout"}
        disabled={didWorkout}
      />
    </View>
  )
}

export default Workout