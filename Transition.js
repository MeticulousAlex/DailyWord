import {useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Animated,{useAnimatedStyle, interpolateColor, useSharedValue, withTiming, interpolate, Extrapolation} from 'react-native-reanimated'

export default function FadeStart(){

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

  }, []);

  return (
    <>
      <Animated.Text style={[{opacity: 1, fontSize: 22, color: 'white'}, animatedStyle]}>Welcome to {word}</Animated.Text>
    </>  
  );
}