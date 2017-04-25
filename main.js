import Expo from 'expo';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Root from 'src/containers/Root'

/*class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>HI manjeet</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});*/

Expo.registerRootComponent(Root);
