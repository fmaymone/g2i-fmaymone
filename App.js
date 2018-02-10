import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import QuizList from './components/Quiz/QuizList'
import reducers from './reducers'
import { Provider } from 'react-redux';
import { createStore } from 'redux';


export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View style={styles.container}>
          <QuizList />
        </View>
      </Provider>
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
});
