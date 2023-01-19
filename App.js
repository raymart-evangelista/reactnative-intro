import { StatusBar } from 'expo-status-bar';
import { Image, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import Cat from './Cat';
import HelloWorldApp from './HelloWorldApp';
import Cafe from './Cat2';
import Workout from './Workout';

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


    {/* <ScrollView>
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
      <Workout />
      <Cafe />
      <Cat name="Maruu" />
      <Cat name="Jellylorum" />
      <Cat name="Spot" />
      <TextInput 
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
        }}
        defaultValue='Type in here'
      />
    </ScrollView> */}

    {/* setting pagingEnabled to true will make the scrollview stop at certain points */}
    <ScrollView pagingEnabled={false}>
      <View>
        <Text style={{fontSize: 96}}>
          I got my eyes on you;
          You're everything that I see;
          I want your hot love and emotion endlessly
        </Text>
      </View>
      <Text>&&&&&&&&&&&</Text>
      <View>
        <Text style={{fontSize: 96}}>
          'Cause you're a good girl and you know it; 
          You act so different around me; 
          'Cause you're a good girl and you know it; 
          I know exactly who you could be
        </Text>
      </View>
      <Text>&&&&&&&&&&&</Text>
      <View>
        <Text style={{fontSize: 96}}>
          Just hold on we're going home;
          Just hold on we're going home;
          It's hard to do these things alone;
          Just hold on we're going home
        </Text>
      </View>
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
