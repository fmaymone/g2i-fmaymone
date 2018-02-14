import React, { Component } from "react";
import { Text, View } from "react-native";
import { Badge, Button } from "react-native-elements";
import { connect } from "react-redux";
import { APP_TITLE } from "../../config/QuizConfiguration";
import * as quizActions from "../../actions/quizActions";
import { shuffleArray } from "../../util/functions";

class Result extends Component {
  handlePlayAgain = () => {
    //restart the quiz
    this.props.finishQuiz(false);
    this.props.selectQuiz(0);
  };

  calculateAnswers = () => {
    const answers = this.props.answers.answers;
    let rightAnswers = 0;

    answers.forEach(element => {
      if (element.value.isCorrect) {
        rightAnswers++;
      }
    });

    return (rightAnswers / answers.length * 100).toFixed(2);
  };
  render() {
    const styles = this.props.styles;

    return (
      <View style={styles.container}>
      
        <View style={styles.halfHeight}>
          <View style={styles.halfHeight}>
            <Text style={styles.text}>Congratulations!!!</Text>
          </View>
          <View style={styles.halfHeight}>
            <Text style={styles.text}>You answer</Text>
            <Badge
              value={this.calculateAnswers() + "%"}
              textStyle={{ color: "orange" }}
            />
            <Text style={styles.text}>of questions correctly!!!</Text>
          </View>
        </View>
        <View style={styles.halfHeight}>
          <View>
            <Button
              title="Play Again!!!"
              buttonStyle={styles.buttonPlayAgain}
              textStyle={styles.textButtonPlayAgain}
              onPress={() => this.handlePlayAgain()}
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
    answers: state.answersReducer
  };
};

export default connect(mapStateToProps, quizActions)(Result);
