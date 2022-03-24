import React from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';

const baseHeight = 640;
const baseWidth = 360;

export const ResHeight = height => {
  return (Dimensions.get('window').height * height) / baseHeight;
};

export const ResWidth = width => {
  return (Dimensions.get('window').width * width) / baseWidth;
};
