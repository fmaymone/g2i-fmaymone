import React, { Component } from "react";
import { Text, View, Image, Linking, WebView } from "react-native";

class Answer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const styles = this.props.style;

    let answer = '-'
    if (this.props.answer.value.isCorrect){
        answer = '+'
    }
    return (
      <View>
        <Text style={styles.text}> {answer} Question {this.props.answer.id + 1}  </Text>
        <Text></Text>
      </View>
    );
  }
}

export default Answer;
