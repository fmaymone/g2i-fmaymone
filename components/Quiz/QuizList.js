import React, { Component } from "react"
import {
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  Button,
  View,
  ScrollView
} from "react-native"
import { connect } from "react-redux"
import Quiz from "./Quiz"
import * as quizActions from "../../actions/quizActions"

class QuizList extends Component {
  handleCurrentQuestionChange = (value) => {
    
    const questions = this.props.quiz_data.results

    if (value < questions.length - 1 && value >= 0) {
      this.props.selectQuiz(value)
    } else {
      this.props.selectQuiz(0)
      this.setQuizOver()
    }
  }
  setQuizOver = () => {
    //setar no store que o isOver aconteceu
    console.log("Quiz is over")
    this.props.finishQuiz()
  }
  render() {
    const currentQuestion = this.props.currentQuestion
    const questions = this.props.quiz_data.results

    return (
    <View style={styles.container}>
      <View style={styles.quarterHeight}>
        <View style={styles.buttonsNumberQuiz} >
          <Button title="Diminui" onPress={() => this.handleCurrentQuestionChange(currentQuestion-1)} />
          <Button title="Aumenta" onPress={() => this.handleCurrentQuestionChange(currentQuestion+1)} />
        </View>
      </View>
      <View style={styles.halfHeight}><Quiz quiz={questions[currentQuestion]} /></View>
      <View style={[styles.quarterHeight, {backgroundColor: '#CCC'}]} />
    </View>
  
    )
  }
}
const mapStateToProps = state => {
  return {
    quiz_data: state.quiz_data,
    currentQuestion: state.selectionReducer,
    quizConfig: state.quizReducer
  }
}

var styles = {
  container: {
      flex: 1,
      flexDirection: 'column'
  },
  halfHeight: {
      flex: .5,
      backgroundColor: '#b3cbff'
  },
  quarterHeight: {
      flex: .25,
      backgroundColor: '#e6eeff'
  },
  buttonsNumberQuiz: {
    flex: 1,
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "center"
  }
}

export default connect(mapStateToProps, quizActions)(QuizList)
