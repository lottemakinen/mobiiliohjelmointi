import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList} from 'react-native';

export default function App() {

    const [first, setFirst] = React.useState(0);
    const [second, setSecond] = React.useState(0);
    const [answer, setAnswer] = React.useState(0);
    const [history, setHistory] = React.useState(0);
    const [data, setData] = React.useState([]);

    


    const plusCount = () => {

      const resultPlus = parseFloat (first) + parseFloat (second);
      setAnswer(resultPlus);
      setHistory(first + ' + ' + second + ' = ' + resultPlus);
      setData([...data, {key: history}]);


    }

    const minusCount = () => {

      const resultMinus = parseFloat (first) - parseFloat (second);
      setAnswer(resultMinus);
      setHistory(first + ' - ' + second + ' = ' + resultMinus);
      setData([...data, {key: history}]);

    }


  return (
    <View style={styles.container}>
      <View style={{flex: 0.1, flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around', marginTop: 50}} >
      <Text>Result: {answer.toFixed(2)} </Text>
      <TextInput style= {{width: 200, 
      borderColor: 'pink', 
      borderWidth: 1, }} 
      onChangeText = {first => setFirst(first)}
      value ={String(first)}
      keyboardType={'numeric'}/>
        <TextInput style= {{width: 200, 
          borderColor: 'pink', 
          borderWidth: 1, }} 
          onChangeText = {second => setSecond(second)}
          value ={String(second)}
          keyboardType={'numeric'}/>
        </View>
      <View style={{flex: 0.1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
      <Button onPress={plusCount} color='pink' title= "+"/>
        <Button onPress={minusCount} color= 'pink' title= "-"/>
        </View>
        <FlatList
        data={data}
        renderItem={({item}) =>
        <Text>{item.key} </ Text>}/>
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

