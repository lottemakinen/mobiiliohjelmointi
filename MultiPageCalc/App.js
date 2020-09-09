import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, Alert, TextInput } from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HistoryScreen from './HistoryScreen';
import CalculatorScreen from './CalculatorScreen';

const Tab = createBottomTabNavigator();

export default function App() {

  return(
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Calculator" component={CalculatorScreen} />
        <Tab.Screen name="History" component={HistoryScreen} />
      </Tab.Navigator>
    </NavigationContainer>
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

