import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TextInput, View, FlatList } from 'react-native';
import * as SQLite from 'expo-sqlite';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

const db = SQLite.openDatabase('practicesdb.db');

export default function App() {
  const [sport, setSport] = useState('');
  const [time, setTime] = useState('');
  const [practices, setPractices] = useState([]);

  useEffect(() => {
    db.transaction(tx => {
      tx.executeSql('create table if not exists weeksPractices (id integer primary key not null, sport text, time text);');
    });
    updateList();    
  }, []);


  const saveItem = () => {
    db.transaction(tx => {
        tx.executeSql('insert into weeksPractices (sport, time) values (?, ?);', [sport, time]);    
      }, null, updateList
    )
  }

 
  const updateList = () => {
    db.transaction(tx => {
      tx.executeSql('select * from weeksPractices;', [], (_, { rows }) =>
        setPractices(rows._array)
      ); 
    });
  }


  const deleteItem = (id) => {
    db.transaction(
      tx => {
        tx.executeSql(`delete from weeksPractices where id = ?;`, [id]);
      }, null, updateList
    )    
  }

  const listSeparator = () => {
    return (
      <View
        style={{
          height: 7,
          width: "80%",
          backgroundColor: "#fff",
          marginLeft: "10%"
        }}
      />
    );
  };

  return (
    <View style={styles.container}>
      <Text style={{marginTop: 50, marginBottom: 10, fontSize: 20}}>Practices of the week</Text>
      <TextInput placeholder='Sport' style={{marginTop: 40, fontSize: 18, width: 200, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(sport) => setSport(sport)}
        value={sport}/>  
      <TextInput placeholder='Time (h)' style={{ marginTop: 10, marginBottom: 5,  fontSize:18, width: 200, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(time) => setTime(time)}
        value={time}/>      
      <Button style={{marginTop:10}} onPress={saveItem} title="Save" /> 
      <FlatList 
        style={{marginLeft : "5%", marginTop: 40}}
        keyExtractor={item => item.id.toString()} 
        renderItem={({item}) => <View style={styles.listcontainer}><Text style={{fontSize: 18}}>{item.sport}, {item.time} h</Text>
        <Text style={{fontSize: 18, color: '#0000ff'}} onPress={() => deleteItem(item.id)}> Done </Text></View>} 
        data={practices} 
        ItemSeparatorComponent={listSeparator} 
      />      
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
 listcontainer: {
  flexDirection: 'row',
  backgroundColor: '#fff',
  alignItems: 'center'
 },
});