
import React, { useState } from 'react';
import { Alert, StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';

export default function App() {
  const [ingredient, setIngredient] = useState('');
  const [recipes, setRecipes] = useState([]);

  const getRecipes = () => {
    const url = 'http://www.recipepuppy.com/api/?i=' + ingredient;
    fetch(url)
    .then((response) => response.json())
    .then((data) => { 
       setRecipes(data);
    })
    .catch((error) => { 
      Alert.alert('Error' , error); 
    }); 
  }
  
  const listSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "80%",
          backgroundColor: "#CED0CE",
          marginLeft: "10%"
        }}
      />
    );
  };

  return (
    <View style={styles.container}>
      <FlatList 
        style={{marginLeft : "5%"}}
        keyExtractor={item => item.id} 
        renderItem={({item}) => <Text>{item.title}</Text>} 
        ItemSeparatorComponent={listSeparator}
        data={recipes} 
      />  
      <TextInput 
        style={{fontSize: 18, width: 200}} 
        value={ingredient} 
        placeholder="Ingredient"
        onChangeText={(ingredient) => setIngredient(ingredient)} 
      />
     <Button title="Find" onPress={getRecipes} />
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