import React, { Component } from "react";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import quizQuestions from "../quiz_data.json";
import { shuffleArray } from "../util/functions";
import Quiz from "../components/Quiz/Quiz";
import { connect } from "react-redux";
import QuizList from "../components/Quiz/QuizList";
import Result from "../components/Result/Result";
import * as quizActions from "../actions/quizActions";
import axios from "axios";
import { QUESTIONS_CONFIG_URL } from '../config/QuizConfiguration'

const API = QUESTIONS_CONFIG_URL


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
    this.loadDataFromApi();
  }

  loadDataFromApi() {
    fetch(API)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Something went wrong in the API Loading...");
        }
      })
      .then(data => this.setState({ quizData: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }
  renderQuiz() {
    //shuffleArray(this.props.quizConfig.quizData.results)
    return <QuizList styles={this.props.styles} />;
  }

  renderResult() {
    //restart the game data
    this.loadDataFromApi();
    return <Result styles={this.props.styles} />;
  }
  loadingScreen() {
    return (
      <View style={[this.props.styles.container, this.props.styles.horizontal]}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }
  render() {
    const { quizData, isLoading, error } = this.state;

    if (error) {
      return <p>{error.message}</p>;
    }

    if (isLoading) {
      return this.loadingScreen();
    } else {
      this.props.quizConfig.quizData = this.state.quizData;
    
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
