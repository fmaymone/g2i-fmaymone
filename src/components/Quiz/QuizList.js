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
import PropTypes from 'prop-types';

class QuizList extends Component {
  render() {
    const currentQuestion = this.props.currentQuestion
    const questions = this.props.quiz_data.results
    const styles = this.props.styles

    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <Quiz quiz={questions[currentQuestion]} styles={styles} />
        </View>
      </View>
    )
  }
}
const mapStateToProps = state => {
  return {
    quiz_data: state.quizReducer.quizData,
    currentQuestion: state.selectionReducer,
    quizConfig: state.quizReducer
  }
}

QuizList.propTypes = {
  currentQuestion: PropTypes.number,
  quizData: PropTypes.object,
  question: PropTypes.object
}

export default connect(mapStateToProps, quizActions)(QuizList)
