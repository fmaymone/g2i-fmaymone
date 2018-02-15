import React, { Component } from "react";
import { Text, View, ScrollView } from "react-native";
import { Badge, Button } from "react-native-elements";
import { connect } from "react-redux";
import { APP_TITLE } from "../../config/QuizConfiguration";
import * as quizActions from "../../actions/quizActions";
import { shuffleArray } from "../../util/functions";
import PropTypes from "prop-types";
import Answer from "./Answer";

class Result extends Component {
  handlePlayAgain = () => {
    //restart the quiz
    this.props.finishQuiz(false);
    this.resetAnswers();
    this.props.selectQuiz(0);
  };

  resetAnswers() {
    this.props.resetAnswerQuiz();
  }

  showAnswers = () => {
    const answers = this.props.answers.answers;

    answers.forEach(element => {
      <Answer answer={element} />;
    });
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
    const answers = this.props.answers.answers;
    return (
      <View style={styles.container}>
        <View style={styles.halfHeight}>
          <View style={styles.halfHeight}>
            <Text style={styles.text}>Congratulations!!!</Text>
          </View>

          <View style={styles.halfHeight}>
            <ScrollView>
              {answers.map((u, i) => {
                return (
                  <View key={i}>
                    <Answer answer={u} style={styles} />
                  </View>
                );
              })}
            </ScrollView>
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
Result.propTypes = {
  answers: PropTypes.object
};
export default connect(mapStateToProps, quizActions)(Result);
