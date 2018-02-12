import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Question from '../components/Question/Question'
import QuestionCount from '../components/Question/QuestionCount'
import AnswerOption from '../components/Question/AnswerOption'
import appActions from '../actions/appActions'
import { connect } from 'react-redux'
import { Card, ListItem, Button } from "react-native-elements"
import Buttons from '../components/common/Buttons'

class Test extends Component {

  mudarTexto() {
    this.props.dispatch(appActions.mudarTexto('Novo texto'))
  }   
  render() {
    return (
        <View>
           <Buttons></Buttons>
        </View>
    );
  }
}


export default Test;