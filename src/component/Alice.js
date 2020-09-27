import React, { Component } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

export default class Alice extends Component<Props> {

  state = { alice: [] };
  componentDidMount() {
      return fetch('https://www.mymyyy.com/api/1')
        .then((response) => response.json())
        .then((responseJson) =>
          this.setState({
            chapter: responseJson.chapter,
            title: responseJson.title,
            text: responseJson.text
          })
        )
        .catch((error) => {
          console.error(error);
        });
  }

  render() {
    return (
      <View style={styles.main}>
        <Text style={styles.title}>{this.state.chapter ? `${this.state.chapter}. ${this.state.title}` : ""}</Text>
        <Text style={styles.text}>{this.state.text}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#fff',
    paddingTop: 10,
    borderRadius: 10,
    marginBottom: 10
  },
  title: {
    fontSize: 20,
    textAlign: 'center'
  },
  text: {
    paddingTop: 20,
    fontSize: 18
  }
});
