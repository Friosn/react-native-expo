import React from 'react';
import Constants from 'expo-constants';
import { Text, View } from 'react-native';

const Main = () => {
  return (
    <View style={{ marginTop: Constants.statusBarHeight, flexGrow: 1 }}>
      <Text>First React Native App</Text>
    </View>
  );
};

export default Main;
