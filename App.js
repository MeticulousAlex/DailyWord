import { StatusBar } from 'expo-status-bar';
import { React, useEffect, useRef, useState } from 'react';
import { StyleSheet, Animated, Text, View } from 'react-native';
import Greeting from './Greeting';
import Words from './Words';

export default function App() {

  const [isGreetOver, setIsGreetOver] = useState(false);

  return (
    <>
      <Greeting/> 
      <StatusBar style="auto" />
      {/* <Words isGreetOver={isGreetOver}/> */}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
  },
});
