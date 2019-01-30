import React, { Component } from 'react'
import MapView from 'react-native-maps'
import Router from 'react-native-easy-router'
import { 
  StyleSheet,
  Text, 
  View, 
  Button, 
  Image, 
  List,
  ListItem,
} from 'react-native'
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
      <View style={styles.topContainer}>
        <Text style={styles.h1}>Helpful Links</Text>
      </View>
      <View style={styles.middleContainer}>
        <Text>Hello {name}!</Text>
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.buttonContainer}>
          <Button
            title="Recycle near me"
            style={styles.button}
            onPress={() => router.push.Third()}
            color="#FAE042"
            />
        </View>
      </View>
      
    </View>
    
  </View>
)

const Third = ({ router }) => (
  <View accessible={true} style={styles.mapcontainer}>
    <MapView
      style={styles.map}
      initialRegion={{
        latitude: 35.593933,
        longitude: -105.223897,
        latitudeDelta: 1,
        longitudeDelta: 1
      }}
      showsUserLocation={true}
    />
    <Button
      title="Home"
      style={styles.button}
      onPress={() => router.push.First()}
      color="#008F68"
    />
  </View>
);

const routes = { First, Second, Third }
const App = () => <Router routes={routes} initialRoute="First" />

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#fff",
    alignItems: "center",
    width: "100%"
  },
  mapcontainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "flex-end",
    alignItems: "center"
  },

  map: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  },

  h1: {
    color: "#008F68",
    fontSize: 40
  },

  h2: {
    color: "#FAE042",
    fontSize: 18,
    marginTop: 8
  },
  image: {
    width: 300,
    height: 300,
    justifyContent: "center"
  },
  topContainer: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center"
  },
  middleContainer: {
    flex: 3,
    justifyContent: "flex-start",
    alignItems: "center"
  },
  bottomContainer: {
    justifyContent: "flex-end",
    width: "90%",
    margin: 20,
    padding: 10
  }
});


export default App