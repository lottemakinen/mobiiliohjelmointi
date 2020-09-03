import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, Alert, TextInput } from 'react-native';

export default function App() {

const [number1, setNumber1] = React.useState(0);
const [number2, setNumber2] = React.useState(0);
const [answer, setAnswer] = React.useState(0);

const minusCount = () => {

  const resultMinus = parseFloat (number1) - parseFloat (number2);
  setAnswer(resultMinus);

}

const plusCount = () => {

  const resultPlus = parseFloat (number1) + parseFloat (number2);
  setAnswer(resultPlus);

}

  return (
    <View style={styles.container}>
      <View style={{flex: 0.1, flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around'}} >
      <Text>Result: {answer.toFixed(2)} </Text>
      <TextInput style= {{width: 200,
      borderColor: 'gray',
      borderWidth: 1, }}
      onChangeText = {number1 => setNumber1(number1)}
      value ={String(number1)}
      keyboardType={'numeric'} />
        <TextInput style= {{width: 200,
        borderColor: 'gray',
        borderWidth: 1,}}
        onChangeText = {number2 => setNumber2(number2)}
        value ={String(number2)}
        keyboardType={'numeric'}/> 
      </View>
    <View style={{flex: 0.1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
    <Button onPress={plusCount} title="+"/>
      <Button onPress={minusCount} title="-"/>
      </View>
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

