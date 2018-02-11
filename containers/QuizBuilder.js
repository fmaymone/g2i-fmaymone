import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import quizQuestions from '../quiz_data.json'
import { shuffleArray } from '../util/functions'
import Quiz from '../components/Quiz/Quiz'
import { connect } from 'react-redux';



class QuizBuilder extends Component {
     state = {
     counter: 0,
     questionIndex: 0,
     quizQuestions: [],
     quizCurrentQuestion: [],
     result: ''
    }
    
      
    componentWillMount() {
        
        const shuffledQuestions = shuffleArray(quizQuestions.results)
        this.setState({
            quizQuestions: shuffledQuestions,
            quizCurrentQuestion: shuffledQuestions[0]
        });


    }
    render() { 
        console.log('--------state');
        console.log(this.state);
        console.log('--------state');
        return (<View><Quiz quiz={this.state.quizCurrentQuestion}/></View>  )
    }

}

const mapStateToProps = state => {
    return { quiz_data: state.quiz_data };
};
 
export default connect(mapStateToProps)(QuizBuilder);