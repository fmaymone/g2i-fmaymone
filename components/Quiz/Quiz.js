import React, { Component } from "react";
import { Text, View, Image, Linking } from "react-native";
import { Card, ListItem, Button, StyleSheet } from "react-native-elements";
import CardSection from "../common/CardSection";
import { shuffleArray } from "../../util/functions";
//import Button from '../common/Button';

class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleButtonPress = value => {
    this.setState({
      answer: "true"
    });
    console.log("----------handle--------");
    console.log(value);
    console.log("----------handle--------");
  };

  render() {
    const { category, correct_answer, difficulty, question } = this.props.quiz;

    console.log("------props Quiz--------");
    console.log(this.props);
    console.log("------props Quiz--------");
    const answers = [
        {"answer" : 'TRUE'},
        {"answer" : 'FALSE'},
        {"answer" : 'FALSE'}
    ]
    return (
      <View style={styles.container}>
        <View style={styles.quarterHeight}>
          <Card title={'Category: ' + category + 'Level: ' + difficulty}>
            <Text style={{marginBottom: 10}}>
              {question}
            </Text>
          </Card>
        </View>
        <View style={styles.quarterHeight}>
          <Card >
          {
          answers.map((u, i) => {
              return (
                <View key={i} >
                  <Text style >{u.answer}</Text>
                </View>
              );
            })
          }  
          </Card>
        </View>
      </View>
    )
  }
}

var styles = {
  container: {
      flex: 1,
      flexDirection: 'column'
  },
  halfHeight: {
      flex: .5,
      backgroundColor: 'white'
  }
}
export default Quiz;
