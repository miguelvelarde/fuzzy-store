import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RutasAutenticadas from './scr/navegacion/RutasAutenticadas'
import RutasNoAutenticadas from './scr/navegacion/RutasNoAutenticadas'

export default function App() {
  return (
    
      <RutasNoAutenticadas></RutasNoAutenticadas>
    
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
