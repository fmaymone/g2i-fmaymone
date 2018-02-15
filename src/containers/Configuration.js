import React, { Component } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import HeaderButton from "../components/Layout/HeaderButton";
import RadioButton from "radio-button-react-native";
import { connect } from "react-redux";
import * as quizActions from "../actions/quizActions";

import {
  LEVEL_HARD,
  LEVEL_MEDIUM,
  LEVEL_EASY
} from "../config/QuizConfiguration";

class Configuration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numberQuestions: 10,
      level: LEVEL_MEDIUM
    };
  }
  handleQuestionsOnPress(value) {
    //this.setState({ numberQuestions: value });
    this.props.setNumberQuestions(value);
  }
  handleLevelOnPress(value) {
    //this.setState({ level: value });
    this.props.setLevelQuiz(value);
  }
  render() {
    return (
      <View style={styles.container}>
        <View>
          <RadioButton
            currentValue={this.props.quizConfig.numberQuestions}
            value={5}
            onPress={this.handleQuestionsOnPress.bind(this)}
          >
            <Text>5</Text>
          </RadioButton>

          <RadioButton
            currentValue={this.props.quizConfig.numberQuestions}
            value={10}
            onPress={this.handleQuestionsOnPress.bind(this)}
          >
            <Text>10</Text>
          </RadioButton>

          <RadioButton
            currentValue={this.props.quizConfig.numberQuestions}
            value={30}
            onPress={this.handleQuestionsOnPress.bind(this)}
          >
            <Text>30</Text>
          </RadioButton>
        </View>
        <View>
          <RadioButton
            currentValue={this.props.quizConfig.level}
            value={LEVEL_EASY}
            onPress={this.handleLevelOnPress.bind(this)}
          >
            <Text>Easy</Text>
          </RadioButton>

          <RadioButton
            currentValue={this.props.quizConfig.level}
            value={LEVEL_MEDIUM}
            onPress={this.handleLevelOnPress.bind(this)}
          >
            <Text>Medium</Text>
          </RadioButton>

          <RadioButton
            currentValue={this.props.quizConfig.level}
            value={LEVEL_HARD}
            onPress={this.handleLevelOnPress.bind(this)}
          >
            <Text>Hard</Text>
          </RadioButton>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    quizConfig: state.quizReducer
  };
};

const styles = {
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column"
  },
  header: {
    fontSize: 20,
    marginVertical: 20
  }
};
export default connect(mapStateToProps, quizActions)(Configuration);
