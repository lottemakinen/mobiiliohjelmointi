import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
import MapView, {Marker} from 'react-native-maps';

export default function App() {

  const [location, setLocation] = useState('');

  const getLocation = () => {
    const url = 'http://www.mapquestapi.com/geocoding/v1/address?key=7TZKX1x5sAcgAhbyAgq36YGQBKlZJfe1&location=' + location;
    fetch(url)
    .then((response) => response.json())
    .then((data) => { 
       setLocation(data);
    })
    .catch((error) => { 
      Alert.alert('Error' , error); 
    }); 
  }

  return (
     
      <MapView
        style={{ flex:1 }}
        region={{
          latitude: 60.200692,
          longitude:24.934302,
          latitudeDelta: 0.0322,
          longitudeDelta:0.0221,
        }}>
      <Marker
        coordinate={{
          latitude:60.201373,
          longitude: 24.934041}}
          data={location}/>

      <TextInput 
      style={{fontSize: 18  , width: 200}} 
      value={location} 
      placeholder="Location"
      onChangeText={(location) => setLocation(location)} 
      />
      <Button title="Show" onPress={getLocation} />

          </MapView>
          

     

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
