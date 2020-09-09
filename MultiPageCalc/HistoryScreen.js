import React from 'react';
import { StyleSheet, Text, View, Button, FlatList} from 'react-native';


export default function HistoryScreen(props) {

  /*const { params } = props.navigation.state;*/
  const { navigate } = props.navigation;

  return (

    <View style={styles.container}>
      <Text style={{fontSize: 20, marginTop: 100}}>History</Text>
        <FlatList
       /* data={params.history}*/
        renderItem={({item}) =>
        <Text>{item.key} </ Text>}/>
    </View>
    
  );

  };
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


