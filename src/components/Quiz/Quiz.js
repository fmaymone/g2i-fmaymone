import React, { Component } from "react";
import { Text, View, Image, Linking, WebView } from "react-native";
import { Card, ListItem, Button, StyleSheet } from "react-native-elements";
import { shuffleArray } from "../../util/functions";
import * as quizActions from "../../actions/quizActions";
import { connect } from "react-redux";
import HTML from "react-native-render-html";
import PropTypes from 'prop-types';

class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answers: [],
      userAnswer: ""
    };
  }
  changeQuestion = value => {
    const questions = this.props.quiz_data.results;

    if (value < questions.length && value >= 0) {
      this.props.selectQuiz(value);
    } else {
      this.props.selectQuiz(0);
      this.setQuizOver();
    }
  };
  setQuizOver = () => {
    this.props.finishQuiz(true);
  };

  processAnswers = () => {
    const allAnswers = [];
    const correctAnswer = this.props.quiz.correct_answer;
    const incorrectAnswers = this.props.quiz.incorrect_answers;

    const tempAnswerObject = {
      answer: correctAnswer,
      isCorrect: true
    };

    allAnswers.push(tempAnswerObject);

    incorrectAnswers.forEach(element => {
      const tempAnswerObject = {
        answer: element,
        isCorrect: false
      };
      allAnswers.push(tempAnswerObject);
    });

    return shuffleArray(allAnswers);
  };

  handleButtonPress = value => {
    const tempAnswerObject = {
      id: this.props.currentQuestion,
      value: {
        isCorrect: value.isCorrect
      }
    };
    this.setState({ userAnswer: value.answer });
    this.props.answerQuestion(tempAnswerObject);
    this.changeQuestion(this.props.currentQuestion + 1);
  };

  render() {
    const { correct_answer, question, category } = this.props.quiz;

    const answers = this.processAnswers();
    const styles = this.props.styles;
    

    return (
      <View style={styles.content}>
      <View><Text>Category: {category}</Text></View>
        <View style={styles.question}>
          <View style={styles.questionView}>
            <HTML
              tagsStyles={{ textAlign: "center", color: "white" }}
              html={question}
            />
          </View>
        </View>
        <View style={styles.answer}>
          <View
            style={{ flexDirection: "row", justifyContent: "center", flex: 1 }}
          >
            {answers.map((u, i) => {
              return (
                <View key={i}>
                  <Button
                    title={u.answer}
                    buttonStyle={styles.buttonAnswer}
                    textStyle={styles.textButtonAnswer}
                    onPress={() => this.handleButtonPress(u)}
                  />
                </View>
              );
            })}
          </View>
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

Quiz.propTypes = {
  currentQuestion: PropTypes.number,
  correct_answer: PropTypes.object,
  question: PropTypes.object
}

export default connect(mapStateToProps, quizActions)(Quiz);
