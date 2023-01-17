import { StatusBar } from 'expo-status-bar';
import { Image, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import Cat from './Cat';
import HelloWorldApp from './HelloWorldApp';

export default function App() {
  return (
    <>
    {/* <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Text>Let's go! First time using React Native Text syntax</Text>
      <Text>Hello World</Text>
      <StatusBar style="auto" />
    </View>
    <HelloWorldApp></HelloWorldApp> */}
    <ScrollView>
      <Text>Some Text</Text>
      <View>
        <Text>Some more text</Text>
        <Image
          source={{
            uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
          }}
          style={{width: 200, height: 200}}
        />
      </View>
      <Cat/>
      <TextInput 
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
        }}
        defaultValue='Type in here'
      />
    </ScrollView>

    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
