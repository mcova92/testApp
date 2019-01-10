import React from 'react'
import Router from 'react-native-easy-router'
import { StyleSheet, Text, View, Button, Image } from 'react-native'
import Logo from './assets/tree.jpg';

const First = ({ router }) => (
  
  <View style={{ backgroundColor: 'white', flex: 1 }}>
    <View style={styles.container}>
        <View style={styles.topContainer}>
          <Text style={styles.h1}>Find Recycle</Text>
          <Text style={styles.h2}>
            Saving the world with recycling!
          </Text>
        </View>
        <View style={styles.middleContainer}>
          <Image source={Logo} style={styles.image} />
        </View>
        <View style={styles.bottomContainer}>
          <View style={styles.buttonContainer}>
            <Button
              title="LET'S START"
              style={styles.button}
              onPress={() => router.push.Second({ name: 'Fellow Recycler' })}
              color="#FAE042"
            />
          </View>
        </View>
      </View>
  </View>
)

const Second = ({ router, name }) => (
  <View style={{ backgroundColor: 'white', flex: 1 }}>
    <View style={styles.container}>
      <Text>Second screen</Text>
      <Text>Hello {name}!</Text>
      <Text onPress={() => router.pop()}>Go back</Text>
    </View>
    
  </View>
)

const routes = { First, Second }
const App = () => <Router routes={routes} initialRoute="First" />

const styles = StyleSheet.create({
  container: {
    flex: 1,    
    justifyContent: 'center',
    backgroundColor: '#fff',
    alignItems: 'center',
    width: '100%',
  },

  h1: {
    color: '#008F68',
    fontSize: 40,
  },

  h2: {
    color: '#FAE042',
    fontSize: 18,
    marginTop: 8,
  },
  image: {
    width: 300,
    height: 300,
    justifyContent: 'center',
  },
  topContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  middleContainer: {
    flex: 3,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  bottomContainer: {
    justifyContent: 'flex-end',
    width: '90%',
    margin: 20,
    padding: 10,
  },
});


export default App