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

const optionsDifficulty = {
  values: [
    { title: "Easy", value: LEVEL_EASY },
    { title: "Medium", value: LEVEL_MEDIUM },
    { title: "hard", value: LEVEL_HARD }
  ]
};
const optionsNumberQuestions = {
  values: [
    { title: "5", value: 5 },
    { title: "10", value: 10 },
    { title: "30", value: 30 }
  ]
};

class Configuration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numberQuestions: 10,
      level: LEVEL_MEDIUM
    };
  }
  renderNumberQuestions = () => {
    return(<View style={styles.radioButtonContainer}>
      <View style={{}}>
        <Text>Number of Questions:</Text>
      </View>
      <View style={styles.elementsRadioButton}>
        {optionsNumberQuestions.values.map((u, i) => {
          {
            return this.renderRadioElement(
              u.title,
              u.value,
              (onPress = this.handleQuestionsOnPress.bind(this)),
              (prop = this.props.quizConfig.numberQuestions)
            );
          }
        })}
      </View>
      </View>);
  };
  renderLevelQuestions = () => {
    return(<View style={styles.radioButtonContainer}>
      <View>
        <Text>Level of Questions:</Text>
      </View>
      <View style={styles.elementsRadioButton}>
        {optionsDifficulty.values.map((u, i) => {
          {
            return this.renderRadioElement(
              u.title,
              u.value,
              (onPress = this.handleLevelOnPress.bind(this)),
              (prop = this.props.quizConfig.level)
            );
          }
        })}
      </View>
      </View>);
  };
  renderRadioElement = (title, value, onPress, prop) => {
    return (
      <RadioButton currentValue={prop} value={value} onPress={onPress}>
        <Text>{title}</Text>
      </RadioButton>
    );
  };

  handleQuestionsOnPress(value) {
    this.props.setNumberQuestions(value);
  }
  handleLevelOnPress(value) {
    this.props.setLevelQuiz(value);
  }
  render() {
    
  return (<View style={styles.container} >
    {this.renderLevelQuestions()}
    {this.renderNumberQuestions()}
  
  </View>);
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
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  header: {
    fontSize: 20,
    marginVertical: 20
  },
  radioButtonContainer: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "column"
  },
  elementsRadioButton: {
    justifyContent: "center",
    flexDirection: "column",
    margin: 10

    //alignItems: "center"
  }
};
export default connect(mapStateToProps, quizActions)(Configuration);
