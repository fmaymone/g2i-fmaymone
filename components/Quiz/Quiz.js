import React, { Component } from "react";
import { Text, View, Image, Linking } from "react-native";
import { Card, ListItem, Button, StyleSheet } from "react-native-elements";
import CardSection from "../common/CardSection";
import { shuffleArray } from "../../util/functions";
import * as quizActions from "../../actions/quizActions"
import { connect } from "react-redux"
//import Button from '../common/Button';

class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answers: []
    };
  }

  processAnswers = () => {
    const allAnswers = [];
    const correctAnswer = this.props.quiz.correct_answer;
    const incorrectAnswers = this.props.quiz.incorrect_answers;

    //add the right answer with a indicator isCorrect
    const tempAnswerObject = {
      answer: correctAnswer,
      isCorrect: true
    };

    allAnswers.push(tempAnswerObject);
    //now add the wrong answers
    incorrectAnswers.forEach(element => {
      const tempAnswerObject = {
        answer: element,
        isCorrect: false
      };
      allAnswers.push(tempAnswerObject);
    });

    //add to state
    return allAnswers
  };

  handleButtonPress = value => {

    const tempAnswerObject = {
      id: this.props.currentQuestion,
      value:{
        isCorrect: value.isCorrect
      }
      
    };
    this.props.answerQuestion(tempAnswerObject)
  };

  render() {
    const { category, correct_answer, difficulty, question } = this.props.quiz;
    const answers = this.processAnswers()
    
    return (
      <View style={styles.container}>
        <View style={styles.quarterHeight}>
          <Card title={"Category: " + category + "Level: " + difficulty}>
            <Text style={{ marginBottom: 10 }}>{question}</Text>
          </Card>
        </View>
        <View style={styles.quarterHeight}>
          <Card>
            <View style={{ flexDirection: "row", justifyContent: "center" }}>
              {answers.map((u, i) => {
                return (
                  
                  <View key={i}>
                    <Button
                      title={u.answer}
                      buttonStyle={styles.buttonAnswer}
                      textStyle={styles.textButtonAnswer}
                      onPress={() => this.handleButtonPress(u) }
                    />
                  </View>
                );
              })}
            </View>
          </Card>
        </View>
      </View>
    );
  }
}

var styles = {
  container: {
    flex: 1,
    flexDirection: "column"
  },
  halfHeight: {
    flex: 0.5,
    backgroundColor: "white",
    flexDirection: "row"
  },
  buttonAnswer: {
    backgroundColor: "transparent",
    borderColor: "rgba(78, 116, 289, 1)",
    borderWidth: 1
  },
  textButtonAnswer: {
    color: "rgba(78, 116, 289, 1)"
  }
};

const mapStateToProps = state => {
  return {
    currentQuestion: state.selectionReducer
    
  }
}

export default connect(mapStateToProps, quizActions)(Quiz)

