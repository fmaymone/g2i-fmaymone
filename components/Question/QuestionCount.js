import React from 'react'
import { Text, View } from "react-native"

  function QuestionCount(props) {
    return (
        <View>
            <Text>Question {props.counter} of {props.total}</Text>
        </View>
      
    );
  }

//   QuestionCount.propTypes = {
//     counter: React.PropTypes.number.isRequired,
//     total: React.PropTypes.number.isRequired
//   };

  export default QuestionCount;