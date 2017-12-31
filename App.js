import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import Board from './src/components/Board/index.js';
import AppLayout from './src/layouts/App.js';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.matrix = [[2, 0, 0, 0], [0, 0, 0, 0], [0, 0, 4, 0], [0, 0, 0, 0]];
  }
  render() {
    return (
      <View style={styles.container}>
        <AppLayout matrix={this.matrix} score={0} bestScore={26909}/>
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
    flexDirection: 'row',
  },
});
