import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  Button,
  View,
  ScrollView
} from "react-native";
import { connect } from "react-redux";
import Quiz from "./Quiz";
import * as quizActions from "../../actions/quizActions";

class QuizList extends Component {
  handleCurrentQuestionChange = () => {
    const currentQuestion = this.props.currentQuestion;
    const questions = this.props.quiz_data.results;

    if (currentQuestion < questions.length - 1) {
      this.props.selectQuiz(currentQuestion + 1);
    } else {
      this.props.selectQuiz(0);
      this.setQuizOver();
    }
  };
  setQuizOver = () => {
    //setar no store que o isOver aconteceu
    console.log("Quiz is over");
  };
  render() {
    const currentQuestion = this.props.currentQuestion;
    const questions = this.props.quiz_data.results;

    return (
      <View
        style={{
          flex: 2,
          flexDirection: "column",
          justifyContent: "space-between",
          borderRadius: 5,
          padding: 20
        }}
      >
        <View>
          <Button
            title="Muda"
            onPress={() => this.handleCurrentQuestionChange()}
          />
        </View>
        <View>
          <Quiz quiz={questions[currentQuestion]} />
        </View>
      </View>
    );
  }
}
const mapStateToProps = state => {
  return {
    quiz_data: state.quiz_data,
    currentQuestion: state.currentQuestion
  };
};

export default connect(mapStateToProps, quizActions)(QuizList);
