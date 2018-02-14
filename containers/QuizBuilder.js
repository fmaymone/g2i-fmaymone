import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import quizQuestions from "../quiz_data.json";
import { shuffleArray } from "../util/functions";
import Quiz from "../components/Quiz/Quiz";
import { connect } from "react-redux";
import QuizList from "../components/Quiz/QuizList";
import Result from "../components/Result/Result";
import * as quizActions from "../actions/quizActions";
import axios from "axios";

const API =
  "https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean";

class QuizBuilder extends Component {
  constructor(props) {
    super(props);

    this.state = {
      quizData: [],
      isLoading: true,
      error: null
    };
  }

  componentDidMount() {
    fetch(API)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Something went wrong ...");
        }
      })
      .then(
        data => this.setState({ quizData: data, isLoading: false }
       ))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderQuiz() {
    //shuffleArray(this.props.quizConfig.quizData.results)
    return <QuizList styles={this.props.styles} />;
  }

  renderResult() {
    return <Result styles={this.props.styles} />;
  }
  render() {
    const { quizData, isLoading, error } = this.state;

    const styles = this.props.styles;
    if (error) {
      return <p>{error.message}</p>;
    }

    if (isLoading) {
      return <Text>"Is Loading" </Text>
    }else{
      this.props.quizConfig.quizData = this.state.quizData
      return this.props.quizConfig.isFinished
      ? this.renderResult()
      : this.renderQuiz();
    }
  }
}

const mapStateToProps = state => {
  return {
    quizConfig: state.quizReducer
  };
};

export default connect(mapStateToProps, quizActions)(QuizBuilder);
