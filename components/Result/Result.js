import React, { Component } from 'react';
import { Text, View } from "react-native";
import { connect } from "react-redux";

class Result extends Component {
  
  calculateAnswers = () =>{

    const answers = this.props.answers.answers
    let rightAnswers = 0
    
    answers.forEach(element => {
      if(element.value.isCorrect){
        rightAnswers++
      }
    });
  
    return rightAnswers
  
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
        <Text style={styles.text}>Congratulations!!!You have finished the Quiz!</Text>
      </View>
      <View style={styles.tabBar}>
      </View>
    </View>
    )
  }
}
 
const mapStateToProps = state => {
  return {
    answers: state.answersReducer
  };
};

export default connect(mapStateToProps)(Result);
