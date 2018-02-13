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
    return shuffleArray(allAnswers)
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
      <View style={styles.content}>
        <View style={styles.question}>
          <Card title={"Category: " + category } style={styles.container}>
            <Text style={{ marginBottom: 10 }}>{question}</Text>
          </Card>
        </View>
        <View style={styles.answer}>
          <Card >
            <View style={{ flexDirection: "row", justifyContent: "center", flex: 1 }}>
              {answers.map((u, i) => {
                  return (
                    
                    <View key={i} >
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

  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red"
  },
  question: {
    flex: 2,
    backgroundColor: "white",
    flexDirection: "row"
  },
  answer: {
    flex: 1,
    backgroundColor: "white",
    flexDirection: "row"
  },
  answerButtons: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#374046"
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

