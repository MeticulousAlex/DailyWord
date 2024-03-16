import { center } from '@shopify/react-native-skia';
import {useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Animated,{useAnimatedStyle, interpolateColor, useSharedValue, withTiming, interpolate, Extrapolation} from 'react-native-reanimated'

export default function Greeting(){
  const [word, setWord] = useState('World')

  const progress = useSharedValue(0);
  const animatedStyle = useAnimatedStyle(() => {
    return {
      // color: interpolateColor(
      //   progress.value,
      //   [0, 0.5, 1],
      //   ['rgba(255,0,0,1)', 'rgba(0,255,0,1)', 'rgba(255,0,0,1)']
      // ),
      opacity: interpolate(progress.value, [0,0.1, 0.8, 1], [0, 1, 0.5, 0], Extrapolation.CLAMP),
    };
  });

  useEffect(() => {
    progress.value = withTiming(1 - progress.value, { duration: 5000 });
    setTimeout(() => {
        setWord('World');
        setTimeout(() => {
            setWord('Worth')
            setTimeout(() => setWord('Wordle'), 300)
        }, 300)
    }, 300);
  }, []);

  return (
    <Animated.View style={[{opacity:1, zIndex:5, justifyContent:center},animatedStyle]}>
      <Animated.Text style={[{opacity: 1, fontSize: 22, color: 'black'}, animatedStyle]}>Daily Word</Animated.Text>
    </Animated.View>  
  );
}