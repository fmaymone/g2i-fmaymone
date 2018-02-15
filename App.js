import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import reducers from './src/reducers'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import RootStack from './src/screens/RootStack'

export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <RootStack />
      </Provider>
    )
  }
}
