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
      answers: [],
      hasAnswered: false,
      userAnswer: ''
    };
  }
  changeQuestion = value => {
    const questions = this.props.quiz_data.results;

    if (value < questions.length  && value >= 0) {
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
    this.setState({userAnswer: value.answer})
    this.props.answerQuestion(tempAnswerObject)
    this.changeQuestion(this.props.currentQuestion+1)
  };

  render() {
    const { category, correct_answer, difficulty, question } = this.props.quiz;
    
    const answers = this.processAnswers()
    const styles = this.props.styles
    const hasAnswered = this.state.hasAnswered;
    let icon = null
  
    return (
      
      
      <View style={styles.content}>
        <View style={styles.question}>
          <Card title={"Category: " + category } style={styles.questionView}>
            <View><Text style={{ marginBottom: 10 }}>{question}</Text></View>
            <View><Text style={{ marginTop: 50 ,  textAlign: "center" }}>YOUR ANSWER: {this.state.userAnswer}</Text></View>
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



const mapStateToProps = state => {
  return {
    quiz_data: state.quizReducer.quizData,
    currentQuestion: state.selectionReducer,
    quizConfig: state.quizReducer
    
  }
}

export default connect(mapStateToProps, quizActions)(Quiz)

