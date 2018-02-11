  import React from 'react';
  import { Text, View } from "react-native";

  function Result(props) {
    return (
      <View>
        <Text>You prefer {props.quizResult}</Text>
      </View>
    );
  }

//   Result.propTypes = {
//     quizResult: React.PropTypes.string.isRequired,
//   };

  export default Result;