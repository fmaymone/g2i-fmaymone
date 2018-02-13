import React, { Component } from "react";
import { Text, View } from "react-native";
import { Badge } from "react-native-elements";
import { connect } from "react-redux";
import { APP_TITLE } from "../../config/QuizConfiguration";

class Result extends Component {
  calculateAnswers = () => {
    const answers = this.props.answers.answers;
    let rightAnswers = 0;

    answers.forEach(element => {
      if (element.value.isCorrect) {
        rightAnswers++;
      }
    });

    return rightAnswers;
  };
  render() {
    const styles = this.props.styles;

    return (
      <View style={styles.container}>
        <View style={styles.navBar}>
          <Text style={styles.navBarHeader}>{APP_TITLE}</Text>
        </View>
        <View style={styles.halfHeight}>
          <View style={styles.halfHeight}>
            <Text style={styles.text}>Congratulations!!!</Text>
          </View>
          <View style={styles.halfHeight}>
            <Text style={styles.text}>You answer</Text>
            <Badge value={this.calculateAnswers()} textStyle={{ color: "orange" }} />
            <Text style={styles.text}>questions correctly!!!</Text>
          </View>
        </View>
        <View style={styles.halfHeight}>
          <Text>Metade</Text>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    answers: state.answersReducer
  };
};

export default connect(mapStateToProps)(Result);
