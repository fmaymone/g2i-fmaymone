import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import quizQuestions from "../quiz_data.json";
import { shuffleArray } from "../util/functions";
import Quiz from "../components/Quiz/Quiz";
import { connect } from "react-redux";
import QuizList from '../components/Quiz/QuizList'
import Result from '../components/Result/Result'

class QuizBuilder extends Component {
  state = {
    counter: 0,
    questionIndex: 0,
    quizQuestions: [],
    quizCurrentQuestion: [],
    result: ""
  };
  renderQuiz() {
    
    return (
      <QuizList />
    )
  }

  renderResult() {
    return <Result quizResult={this.state.result} />;
  }
  render() {
    return this.props.quizConfig.isFinished
      ? this.renderResult()
      : this.renderQuiz();
  }
}

const mapStateToProps = state => {
  return {
    quiz_data: state.quiz_data,
    quizConfig: state.quizReducer
  };
};

var styles = {
  container: {
      flex: 1,
      flexDirection: 'column'
  },
  halfHeight: {
      flex: .5,
      backgroundColor: '#FF3366'
  },
  quarterHeight: {
      flex: .25,
      backgroundColor: '#000'
  }
}
export default connect(mapStateToProps)(QuizBuilder);
