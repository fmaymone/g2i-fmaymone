import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import QuizList from './components/Quiz/QuizList'
import reducers from './reducers'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import Question from './components/Question/Question'
import Test from './containers/Test'
import quizQuestions from './quiz_data.json';
import Quiz from './components/Quiz/Quiz'
import update from 'react-addons-update'
import Result from './components/Result/Result'
import QuizBuilder from './containers/QuizBuilder'


export default class App extends React.Component {
  constructor(props) {
    
    super(props);
    this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
    this.state = {
     counter: 0,
     questionId: 1,
     quiz: [],
     answerOptions: [],
     answer: '',
     result: '',
     answersCount: {
      nintendo: 0,
      microsoft: 0,
      sony: 0
     }
    };
    
  }

  componentWillMount() {
    //const shuffledAnswerOptions = quizQuestions.results.map((question) => this.shuffleArray(question.correct_answer.concat(question.incorrect_answers)));  
    const shuffledQuestions = this.shuffleArray(quizQuestions.results);

    console.log(shuffledQuestions[0])

    this.setState({
      quiz: shuffledQuestions[0]
    });
  }

  shuffleArray(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {

      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  };
  
  setNextQuestion() {
    const counter = this.state.counter + 1;
    const questionId = this.state.questionId + 1;
    this.setState({
      counter: counter,
      questionId: questionId,
      question: quizQuestions[counter].question,
      answerOptions: quizQuestions[counter].answers,
      answer: ''
    });
  }  
  
  setUserAnswer(answer) {
    const updatedAnswersCount = update(this.state.answersCount, {
      [answer]: {$apply: (currentValue) => currentValue + 1}
    });
    this.setState({
      answersCount: updatedAnswersCount,
      answer: answer
    });
  }
  setResults (result) {
    if (result.length === 1) {
      this.setState({ result: result[0] });
    } else {
      this.setState({ result: 'Undetermined' });
    }
  }
  handleAnswerSelected(event) {
    console.log("------------handleAnsqerSelected")
    console.log(event.currentTarget.value)
    console.log("------------handleAnsqerSelected")
    // this.setUserAnswer(event.currentTarget.value);
    // if (this.state.questionId < quizQuestions.length) {
    //     setTimeout(() => this.setNextQuestion(), 300);
    //   } else {
    //     setTimeout(() => this.setResults(this.getResults()), 300);
    //   }
  }
  getResults() {
    const answersCount = this.state.answersCount;
    const answersCountKeys = Object.keys(answersCount);
    const answersCountValues = answersCountKeys.map((key) => answersCount[key]);
    const maxAnswerCount = Math.max.apply(null, answersCountValues);

    return answersCountKeys.filter((key) => answersCount[key] === maxAnswerCount);
  }
  
  renderQuiz() {
    return (
      <QuizList />
      // <Test />
    );
  }

  renderResult() {
    return (
      <Result quizResult={this.state.result} />
    );
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View style={styles.container}>
          <QuizBuilder />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
