import React, { Component } from 'react'
import {View, StyleSheet} from 'react-native'
import Pet from './components/Pet'
import Main from './components/Main'

export default class App extends Component {
  render() {
    return (
      <View style={styles.pageBackground}>
        <Main/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  pageBackground : {
    backgroundColor: "#f5f5f5",
    flex: 1
  }
})