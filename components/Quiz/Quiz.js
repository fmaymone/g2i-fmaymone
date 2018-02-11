import React, { Component } from "react";
import { Text, View, Image, Linking } from "react-native";
import { Card, ListItem, Button } from "react-native-elements";
import CardSection from "../common/CardSection";
import QuestionCount from '../Question/QuestionCount'
import Question from '../Question/Question'
import AnswerOption from '../Question/AnswerOption'
//import Button from '../common/Button';

// class Quiz extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { };
//   }

//   handleButtonPress = (value) => {
//     this.setState({
//       answer: 'true'
//     });
//     console.log('----------handle--------')
//     console.log(value)
//     console.log('----------handle--------')
//   }
 
//   render() {
//     const { category, correct_answer, difficulty, question } = this.props.quiz;
//     const {
//       thumbnailStyle,
//       headerContentStyle,
//       thumbnailContainerStyle,
//       headerTextStyle,
//       imageStyle,
//       buttonsContentStyle,
//       buttonsAnswerStyle
//     } = styles;

//     console.log("------props Quiz--------");
//     console.log(this.props);
//     console.log("------props Quiz--------");
//     return (
//       <View
//         style={{
//           flex: 2,
//           flexDirection: "column",
//           justifyContent: "space-between",
//           borderRadius: 5,
//           padding: 20
//         }}
//       >
//         <View tyle={headerContentStyle}>
//           <Text>Category: {category}</Text>
//           <Text>Level: {difficulty}</Text>
//         </View>

//         <View style={{ borderWidth: 1 }}>
//           <Text>Question:</Text>
//           <Text>{question}</Text>
//         </View>

//         <View style={{ borderWidth: 1 }}>
//           <View style={buttonsContentStyle}>
//             <Button
//               icon={{ name: "code" }}
//               backgroundColor="#03A9F4"
//               buttonStyle={buttonsAnswerStyle}
//               title="TRUE"
//               onPress={()=>{this.handleButtonPress(true)}}

//             />
//             <Button
//               icon={{ name: "code" }}
//               backgroundColor="#03A9F4"
//               buttonStyle={buttonsAnswerStyle}
//               title="FALSE"
//               onPress={()=>{this.handleButtonPress(false)}}
//             />
//           </View>
//         </View>
//       </View>
//     );
//   }
// }
// const styles = {
//   headerContentStyle: {
//     flexDirection: "column",
//     justifyContent: "space-around",
//     padding: 20
//   },
//   headerTextStyle: {
//     fontSize: 18
//   },
//   buttonsAnswerStyle: {
//     borderRadius: 0,
//     marginLeft: 0,
//     marginRight: 0,
//     marginBottom: 0
//   },
//   buttonsContentStyle: {
//     flexDirection: "row",
//     justifyContent: "center",
//     alignItems: "center",
    
//   },
//   thumbnailStyle: {
//     height: 50,
//     width: 50
//   },
//   thumbnailContainerStyle: {
//     justifyContent: "center",
//     alignItems: "center",
//     marginLeft: 10,
//     marginRight: 10
//   },
//   imageStyle: {
//     height: 300,
//     flex: 1,
//     width: null
//   }
// };

function Quiz(props) {
  
  function renderAnswerOptions(key) {
    return (
      <AnswerOption
        key={key.content}
        answerContent={key.content}
        answerType={key.type}
        answer={props.answer}
        questionId={props.questionId}
        onAnswerSelected={props.onAnswerSelected}
      />
    );
  }
  return (
     <View>
       <QuestionCount
         counter={props.questionId}
         total={props.questionTotal}
       />
       <Question content={props.question} />
 
         {props.answerOptions.map(renderAnswerOptions)}
 
      </View>
  );
}


// Quiz.propTypes = {
//   answer: React.PropTypes.string.isRequired,
//   answerOptions: React.PropTypes.array.isRequired,
//   counter: React.PropTypes.number.isRequired,
//   question: React.PropTypes.string.isRequired,
//   questionId: React.PropTypes.number.isRequired,
//   questionTotal: React.PropTypes.number.isRequired,
//   onAnswerSelected: React.PropTypes.func.isRequired
// };

export default Quiz;


