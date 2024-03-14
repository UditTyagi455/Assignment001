import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Home from './src/component/home';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './src/component/navigation';

const App = () => {
  return (
   <NavigationContainer>
    <Navigation />
   </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})