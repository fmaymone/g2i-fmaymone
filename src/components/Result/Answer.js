import React, { Component } from "react";
import { Text, View, Image, Linking, WebView } from "react-native";
import Icon from "react-native-vector-icons/Entypo"
class Answer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const styles = this.props.style;

    let answer = <Icon name="thumbs-down" size={10} color="red" />
    if (this.props.answer.value.isCorrect){
        answer = <Icon name="thumbs-up" size={10} color="green" />
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
