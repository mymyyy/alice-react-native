import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput } from 'react-native';

import Header from './src/component/Header';
import Alice from './src/component/Alice';

type Props = {};

export default class App extends Component<Props> {
  render() {
    return (
      <SafeAreaView style={styles.safeAreaView}>
        <Header />
        <View style={styles.alice}>
          <Alice />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  safeAreaView: {
    backgroundColor: '#FFF0F5'
  },
  alice: {
    backgroundColor: '#FFFFFF',
    padding: 10,
    paddingBottom: 0
  }
});
