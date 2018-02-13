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

        
        
      </View>
    );
  }
}
const mapStateToProps = state => {
  return {
    quiz_data: state.quizReducer.quizData,
    currentQuestion: state.selectionReducer,
    quizConfig: state.quizReducer
  };
};

export default connect(mapStateToProps, quizActions)(QuizList);
