import React, { Component } from "react";
import { Text, View } from "react-native";
import Question from "../components/Question/Question";
import QuestionCount from "../components/Question/QuestionCount";
import AnswerOption from "../components/Question/AnswerOption";
import { connect } from "react-redux";
import { Card, ListItem, Button } from "react-native-elements";
import Buttons from "../components/common/Buttons";
import { styles } from "../config/QuizConfiguration";
import { BulletList } from "react-content-loader";

const API =
  "https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean";
const DEFAULT_QUERY = "redux";


class Test extends Component {
  constructor(props) {
    super(props);

    this.state = {
      quizData: [],
      isLoading: false,
      error: null
    };
  }
  componentDidMount() {
    fetch(API)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Something went wrong ...");
        }
      })
      .then(data => this.setState({ quizData: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  render() {
    const styles = this.props.styles;
    const { quizData, isLoading, error } = this.state;
    console.log(quizData);
    if (error) {
      return <p>{error.message}</p>;
    }

    if (isLoading) {
    return <Text>"Is Loading" </Text>
    }
    return (
      <View style={styles.container}>
        <View style={styles.navBar}>
          <Text style={styles.navBarButton}>Back</Text>
          <Text style={styles.navBarHeader}>Awesome App</Text>
          <Text style={styles.navBarButton}>More</Text>
        </View>
        <View style={styles.content}>
          <Text style={styles.text}>Welcome to Awesome App!</Text>
         
        </View>
        <View style={styles.tabBar}>
          <View style={[styles.tabBarButton, styles.button1]} />
          <View style={[styles.tabBarButton, styles.button2]} />
          <View style={[styles.tabBarButton, styles.button3]} />
          <View style={[styles.tabBarButton, styles.button4]} />
          <View style={[styles.tabBarButton, styles.button5]} />
        </View>
      </View>
    );
  }
}

export default Test;
