import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class BelajarLayout extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text>I Made Artadana </Text>
        </View>
        <View style={styles.slider}>
          <Text>SLIDER</Text>
        </View>
        <View style={styles.button}>
          <View style={styles.button1}>
            <Text>Button</Text>
          </View>
          <View style={styles.button2}>
            <Text>Button</Text>
          </View>
          <View style={styles.button3}>
            <Text>Button</Text>
          </View>
          <View style={styles.button4}>
            <Text>Button</Text>
          </View>
        </View>

        <View style={styles.button}>
          <View style={styles.button1}>
            <Text>Button</Text>
          </View>
          <View style={styles.button2}>
            <Text>Button</Text>
          </View>
          <View style={styles.button3}>
            <Text>Button</Text>
          </View>
          <View style={styles.button4}>
            <Text>Button</Text>
          </View>
        </View>

        <View style={styles.footer}>
          <Text>Footer</Text>
        </View>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent'
  },
  notif: {
    flex: 0.3,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    flex: 1,
    backgroundColor: '#00BFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  slider: {
    flex: 2,
    backgroundColor: '#6495ED',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    flex: 2,
    flexDirection: 'row',
    backgroundColor: '#1E90FF',
    justifyContent: 'space-around',
  },
  button1: {
    flex: 2,
    backgroundColor: '#FFFAF0',
    alignItems: 'center',
    width: 30,
    height: 50,
    marginTop: 50,
    marginLeft: 20,
    marginRight: 10,
    justifyContent: 'space-around',
  },
  button2: {
    flex: 2,
    backgroundColor: '#FFFAF0',
    alignItems: 'center',
    width: 30,
    height: 50,
    marginTop: 50,
    marginLeft: 10,
    marginRight: 10,
    justifyContent: 'space-around',
  },
  button3: {
    flex: 2,
    backgroundColor: '#FFFAF0',
    alignItems: 'center',
    width: 30,
    height: 50,
    marginTop: 50,
    marginLeft: 10,
    marginRight: 10,
    justifyContent: 'space-around',
  },
  button4: {
    flex: 2,
    backgroundColor: '#FFFAF0',
    alignItems: 'center',
    width: 30,
    height: 50,
    marginTop: 50,
    marginLeft: 10,
    marginRight: 20,
    justifyContent: 'space-around',
  },
  footer: {
    flex: 1,
    backgroundColor: '#00CED1',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
