import React from "react";
import { Text, View } from "react-native";
import { CheckBox } from "react-native-elements";

function AnswerOption(props) {
  return (
    <View>
      <CheckBox
        center
        id={props.answerType}
        title={props.answerType}
        iconRight
        // iconType="material"
        // checkedIcon="clear"
        // uncheckedIcon="add"
        // checkedColor="red"
        checked={props.answerType === props.answer}
        value={props.answerType}
        disabled={props.answer}
        onPress={props.onAnswerSelected}
      />

    </View>
  );
}

// AnswerOption.propTypes = {
//   answerType: React.PropTypes.string.isRequired,
//   answerContent: React.PropTypes.string.isRequired,
//   answer: React.PropTypes.string.isRequired,
//   onAnswerSelected: React.PropTypes.func.isRequired
// };

export default AnswerOption;
