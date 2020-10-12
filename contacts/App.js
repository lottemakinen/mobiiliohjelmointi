import { StatusBar } from 'expo-status-bar';
import React , { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Button } from 'react-native';
import * as Contacts from 'expo-contacts';


export default function App() {

  const [contact, setContact] = useState({});

  const getContacts = async() => {
    const { status } = awaitContacts.requestPermissionsAsync();
    if (status === 'granted') {
      const { data } = awaitContacts.getContactsAsync({
        fields:[Contacts.Fields.PhoneNumbers],
      });
      if (data.length > 0) {
        setContact(data[0]);
      }
    }
  }

  return (
    <View style={styles.container}>
      <Text>{contact.name  }</Text>
      <Button title="Get Contact" onPress={getContacts} />
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
