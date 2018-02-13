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
import Header from "../Header/Header";

class QuizList extends Component {
  handleCurrentQuestionChange = value => {
    const questions = this.props.quiz_data.results;

    if (value < questions.length - 1 && value >= 0) {
      this.props.selectQuiz(value);
    } else {
      this.props.selectQuiz(0);
      this.setQuizOver();
    }
  };
  setQuizOver = () => {
    this.props.finishQuiz();
  };
  render() {
    const currentQuestion = this.props.currentQuestion;
    const questions = this.props.quiz_data.results;
    const styles = this.props.styles;

    return (
      <View style={styles.container}>
        <View style={styles.navBar}>
          
          <Text style={styles.navBarHeader}>G2I Awesome Quiz</Text>
          
        </View>
        <View style={styles.content}>
          <Quiz quiz={questions[currentQuestion]} styles={styles} />
        </View>

        <View style={styles.tabBar}>
          <View style={[styles.tabBarButton, styles.button1]}>
            <Button
              title="Diminui"
              onPress={() =>
                this.handleCurrentQuestionChange(currentQuestion - 1)
              }
            />
          </View>
          <View style={[styles.tabBarButton, styles.button1]}>
            <Button
              title="Aumenta"
              onPress={() =>
                this.handleCurrentQuestionChange(currentQuestion + 1)
              }
            />
          </View>
        </View>
      </View>
    );
  }
}
const mapStateToProps = state => {
  return {
    quiz_data: state.quiz_data,
    currentQuestion: state.selectionReducer,
    quizConfig: state.quizReducer
  };
};

export default connect(mapStateToProps, quizActions)(QuizList);
