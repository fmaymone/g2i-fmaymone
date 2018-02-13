import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import quizQuestions from "../quiz_data.json";
import { shuffleArray } from "../util/functions";
import Quiz from "../components/Quiz/Quiz";
import { connect } from "react-redux";
import QuizList from "../components/Quiz/QuizList";
import Result from "../components/Result/Result";
import * as quizActions from "../actions/quizActions"
import axios from 'axios'

class QuizBuilder extends Component {

  componentDidMount(){

    axios.get('https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean')
      .then(res => {
        console.log('---------------')      
        this.props.loadQuizData(res.data)
        console.log(res.data)
        console.log('---------------')      
      })
      .catch(err => {
        console.log('Error Loading the Data from the API')      
      });

    console.log("Will Mount")
  }

  renderQuiz() {
    //shuffleArray(this.props.quizConfig.quizData.results)
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
    quizConfig: state.quizReducer
  };
};

export default connect(mapStateToProps, quizActions)(QuizBuilder);
