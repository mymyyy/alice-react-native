import React, { Component } from 'react';
import { View, StyleSheet, Text} from 'react-native';

export default class Header extends Component<Props> {
  render() {
    return (
      <View style={styles.header}>
        <Text style={styles.header_title}>不思議の国のアリス</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header_title: {
    fontSize: 24,
    color: '#000000',
    textAlign: 'center',
    fontWeight: '800',
    padding: 20
  },
  header: {
    justifyContent: 'center',
    backgroundColor: '#FFF0F0'
  }
});
