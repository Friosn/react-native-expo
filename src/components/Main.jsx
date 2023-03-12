import React from 'react';
import Constants from 'expo-constants';
import { Text, View } from 'react-native';
import { Link, Route, Redirect, Switch } from 'react-router-native';

const Main = () => {
  return (
    <View style={{ marginTop: Constants.statusBarHeight, flexGrow: 1 }}>
      {/*  <Switch>
        <Route path="/" exact></Route>
        <Route path="/signin" exact></Route>
      </Switch> */}
    </View>
  );
};

export default Main;
