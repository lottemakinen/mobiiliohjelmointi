import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TextInput, View, FlatList } from 'react-native';
import * as SQLite from 'expo-sqlite';
import { Header } from 'react-native-elements';
import { Input } from 'react-native-elements';
import { Icon } from 'react-native-elements';
import { Button } from 'react-native-elements';
import { ListItem } from 'react-native-elements';
import { render } from 'react-dom';

const db = SQLite.openDatabase('shoppingListdb.db');

export default function App() {
  const [amount, setAmount] = useState('');
  const [product, setProduct] = useState('');
  const [products, setProducts] = useState([]);

  useEffect(() => {
    db.transaction(tx => {
      tx.executeSql('create table if not exists shoppingList (id integer primary key not null, amount text, product text);');
    });
    updateList();    
  }, []);


  const saveItem = () => {
    db.transaction(tx => {
        tx.executeSql('insert into shoppingList (amount, product) values (?, ?);', [amount, product]);    
      }, null, updateList
    )
  }

 
  const updateList = () => {
    db.transaction(tx => {
      tx.executeSql('select * from shoppingList;', [], (_, { rows }) =>
        setProducts(rows._array)
      ); 
    });
  }


  const deleteItem = (id) => {
    db.transaction(
      tx => {
        tx.executeSql(`delete from shoppingList where id = ?;`, [id]);
      }, null, updateList
    )    
  }

  const listSeparator = () => {
    return (
      <View
        style={{
          height: 5,
          width: "80%",
          backgroundColor: "#fff",
          marginLeft: "10%"
        }}
      />
    );
  };

 
  return (
    <View style={styles.container}>
      <Header
        centerComponent={{ text:'SHOPPING LIST', style: { color: 'white' } }}
        /> 
        <Input placeholder='Product name' label='PRODUCT' 
          onChangeText={(product) => setProduct({product})}
          value={product}/>

        <Input placeholder='Amount' label='AMOUNT' 
          onChangeText={(amount) => setAmount({amount})}
          value={amount}/>

        <Button raised icon={{name: 'save'}} onPress={saveItem}
          title="SAVE"/>


      <FlatList 
        style={{marginLeft : "5%"}}
        keyExtractor={item => item.id.toString()} 
        renderItem={({item}) => <View style={styles.listcontainer}><Text style={{fontSize: 18}}>{item.product}, {item.amount}</Text>
        <Text style={{fontSize: 18, color: '#0000ff'}} onPress={() => deleteItem(item.id)}> Bought</Text></View>} 
        data={products} 
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

