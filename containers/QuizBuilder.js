import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import quizQuestions from "../quiz_data.json";
import { shuffleArray } from "../util/functions";
import Quiz from "../components/Quiz/Quiz";
import { connect } from "react-redux";
import QuizList from "../components/Quiz/QuizList";
import Result from "../components/Result/Result";

class QuizBuilder extends Component {

  
  renderQuiz() {
    shuffleArray(this.props.quiz_data.results)
    return <QuizList styles={this.props.styles} />;
  }

  renderResult() {
    return <Result styles={this.props.styles}/>;
  }
  render() {
    const styles = this.props.styles
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

export default connect(mapStateToProps)(QuizBuilder);
