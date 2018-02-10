import React, { Component } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { connect } from "react-redux";
import Quiz from "./Quiz";

class QuizList extends Component {
  constructor(props) {
    super(props);
    this.state = { currentQuiz: this.props.quiz_data.results[0] };
  }
  render() {
    console.log("pqp ----------------");
    console.log(this.props.quiz_data);
    console.log(this.state.currentQuiz);
    return (
      
        <Quiz quiz={this.state.currentQuiz} />
      
    );
  }
}

const mapStateToProps = state => {
  return { quiz_data: state.quiz_data };
};

export default connect(mapStateToProps)(QuizList);
