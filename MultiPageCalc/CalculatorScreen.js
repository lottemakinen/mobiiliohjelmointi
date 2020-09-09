import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList} from 'react-native';

export default function CalculatorScreen(props) {

    const { navigate } = props.navigation;

    const [first, setFirst] = useState(0);
    const [second, setSecond] = useState(0);
    const [answer, setAnswer] = useState(0);
    const [history, setHistory] = useState([]);
    const [data, setData] = React.useState([]);


    const plusCount = () => {

      const resultPlus = parseFloat(first) + parseFloat(second);
      setAnswer(first + ' + ' + second + ' = ' + resultPlus);
      setHistory([...data, {key: history}]);


    }

    const minusCount = () => {

      const resultMinus = parseFloat(first) - parseFloat(second);
      setAnswer(first + ' - ' + second + ' = ' + resultMinus);
      setHistory([...data, {key: history}]);

    }


  return (
    <View style={styles.container}>
      <View style={{flex: 0.1, flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around', marginTop: 50}} >
      <TextInput style= {{width: 200, 
      borderColor: 'gray', 
      borderWidth: 1, }} 
      onChangeText = {first => setFirst(first)}
      value ={String(first)}
      keyboardType={'numeric'}/>
        <TextInput style= {{width: 200, 
          borderColor: 'gray', 
          borderWidth: 1, }} 
          onChangeText = {second => setSecond(second)}
          value ={String(second)}
          keyboardType={'numeric'}/>
        </View>
      <View style={{flex: 0.1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
      <Button onPress={plusCount} title= "+"/>
        <Button onPress={minusCount} title= "-"/>
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
