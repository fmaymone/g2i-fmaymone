import React, { Component } from "react";
import { Text, View } from "react-native";
import Question from "../components/Question/Question";
import QuestionCount from "../components/Question/QuestionCount";
import AnswerOption from "../components/Question/AnswerOption";
import { connect } from "react-redux";
import { Card, ListItem, Button } from "react-native-elements";
import Buttons from "../components/common/Buttons";
import { styles } from '../config/QuizConfiguration'

class Test extends Component {
  mudarTexto() {
    this.props.dispatch(appActions.mudarTexto("Novo texto"));
  }

  render() {
    const styles = this.props.styles
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
