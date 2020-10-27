import { StatusBar } from 'expo-status-bar';
import React , { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Button } from 'react-native';
import * as Contacts from 'expo-contacts';


export default function App() {

  const [contacts, setContacts] = useState({});

  const getContacts = async() => {
    const { status } = await Contacts.requestPermissionsAsync();
    if (status === 'granted') {
      const { data } = await Contacts.getContactsAsync({
        fields:[Contacts.Fields.PhoneNumbers],
      });
      if (data.length > 0) {
        setContacts(data[0]);
      }
    }
  }

  return (
    <View style={styles.container}>
      <Text>{ contacts.name }</Text>
      <Text>{ contacts.number }</Text>
      <Button title="Get Contacts" onPress={getContacts} />
      <StatusBar style="auto" />
    </View>
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
