import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import QuizList from './components/Quiz/QuizList'
import reducers from './reducers'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import Question from './components/Question/Question'
import Test from './containers/Test'
import quizQuestions from './quiz_data.json';
import Quiz from './components/Quiz/Quiz'
import update from 'react-addons-update'
import Result from './components/Result/Result'
import QuizBuilder from './containers/QuizBuilder'


export default class App extends React.Component {
 
  render() {
    return (
      <Provider store={createStore(reducers)}>
           <QuizBuilder styles={styles} /> 
           {/* <Test styles={styles} /> */}
      </Provider>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: "#374046"
  },
  halfHeight: {
    flex: 0.5,
    backgroundColor: "#FF3366"
  },
  quarterHeight: {
    flex: 0.25,
    backgroundColor: "#000"
  },

  navBar: {
    flexDirection: "row",
    paddingTop: 30,
    height: 64,
    backgroundColor: "#1EAAF1"
  },
  navBarButton: {
    color: "#FFFFFF",
    textAlign: "center",
    width: 64
  },
  navBarHeader: {
    flex: 1,
    color: "#FFFFFF",
    fontWeight: "bold",
    textAlign: "center"
  },

  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#374046"
  },
  text: {
    color: "#EEEEEE"
  },

  tabBar: {
    flexDirection: "row",
    height: 50
  },
  tabBarButton: {
    flex: 1
  },
  button1: { backgroundColor: "#8BC051" },
  button2: { backgroundColor: "#CCD948" },
  button3: { backgroundColor: "#FDE84D" },
  button4: { backgroundColor: "#FCBF2E" },
  button5: { backgroundColor: "#FC9626" }
};
