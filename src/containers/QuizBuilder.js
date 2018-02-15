import React, { Component } from 'react'
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native'
import { shuffleArray } from '../util/functions'
import Quiz from '../components/Quiz/Quiz'
import { connect } from 'react-redux'
import QuizList from '../components/Quiz/QuizList'
import Result from '../components/Result/Result'
import * as quizActions from '../actions/quizActions'
import axios from 'axios'
import { QUESTIONS_CONFIG_URL } from '../config/QuizConfiguration'

const API = QUESTIONS_CONFIG_URL


class QuizBuilder extends Component {
  
  constructor(props) {
    super(props)

    this.state = {
      quizData: [],
      isLoading: true,
      error: null
    }
  }
  processUrlWithParameters = () =>{
    const urlComplete = API + 'amount=' + this.props.quizConfig.numberQuestions + '&difficulty=' + this.props.quizConfig.level + '&type=boolean'
    return urlComplete
  }
  componentDidMount() {
    this.loadDataFromApi()
  }

  loadDataFromApi() {
    fetch(this.processUrlWithParameters())
      .then(response => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error('Something went wrong in the API Loading...')
        }
      })
      .then(data => this.setState({ quizData: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }))
  }
  renderQuiz() {
    //shuffleArray(this.props.quizConfig.quizData.results)
    return <QuizList styles={styles} />
  }



  renderResult() {
    
    this.loadDataFromApi()
   
    return <Result styles={styles} />
  }
  loadingScreen() {
    return (
      <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator size='large' color='#0000ff' />
      </View>
    )
  }
  render() {
    const { quizData, isLoading, error } = this.state

    if (error) {
      return <View>{error.message}</View>
    }

    if (isLoading) {
      return this.loadingScreen()
    } else {
      this.props.quizConfig.quizData = this.state.quizData
    
      return this.props.quizConfig.isFinished
        ? this.renderResult()
        : this.renderQuiz()
    }
  }
}

const mapStateToProps = state => {
  return {
    quizConfig: state.quizReducer
  }
}
const styles = {
  container: {
    flex: 1,
    backgroundColor: '#374046'
  },
  halfHeight: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 0.5,
   // backgroundColor: '#FF3366'
  },
  quarterHeight: {
    flex: 0.25,
    backgroundColor: '#000'
  },

  navBar: {
    flexDirection: 'row',
    paddingTop: 30,
    height: 64,
    backgroundColor: '#1EAAF1'
  },
  navBarButton: {
    color: '#FFFFFF',
    textAlign: 'center',
    width: 64
  },
  navBarHeader: {
    flex: 1,
    color: '#FFFFFF',
    fontWeight: 'bold',
    textAlign: 'center'
  },

  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  text: {
    color: '#EEEEEE'
  },
  
  halfView: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: 'red'
  },

  questionView: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    flexDirection: 'column',
    //backgroundColor: 'red',
    marginLeft: 10,
    marginRight: 10

  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10
  },
  tabBar: {
    flexDirection: 'row',
    height: 50
  },
  tabBarButton: {
    flex: 1
  },
  button1: { backgroundColor: '#8BC051' },
  button2: { backgroundColor: '#CCD948' },
  button3: { backgroundColor: '#FDE84D' },
  button4: { backgroundColor: '#FCBF2E' },
  button5: { backgroundColor: '#FC9626' },
  question: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textQuestionCategory:{
    color: '#EEEEEE',
    fontWeight: 'bold'

  },
  textQuestion:{
    color: '#EEEEEE',
    

  },
  answer: {
    flex: 1,
    backgroundColor: 'black',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  answerButtons: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#374046'
  },
  buttonPlayAgain:{
    backgroundColor: 'transparent',
    borderColor: 'white',
    borderWidth: 1
  },
  buttonAnswer: {
    backgroundColor: 'transparent',
    borderColor: 'white',
    borderWidth: 1
  },
  textButtonAnswer: {
    color: 'white'
  }
}
export default connect(mapStateToProps, quizActions)(QuizBuilder)
