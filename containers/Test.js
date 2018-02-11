import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Question from '../components/Question/Question'
import QuestionCount from '../components/Question/QuestionCount'
import AnswerOption from '../components/Question/AnswerOption'
import appActions from '../actions/appActions'
import { connect } from 'react-redux'
import { Card, ListItem, Button } from "react-native-elements"

class Test extends Component {

  mudarTexto() {
    this.props.dispatch(appActions.mudarTexto('Novo texto'))
    console.log(appActions.mudarTexto('Novo texto'));
    console.log(appActions.mudarTexto('Novo texto'));
    console.log('appActions.mudarTexto');
    
  }   
  render() {
    return (
        <View>
            <Text>{this.props.texto}</Text>
            <Button onPress={() => this.mudarTexto()}>Mudar texto</Button>
        </View>
    );
  }
}
const mapStateToProps = state => {
  return { texto: state.appReducer.texto };
};

export default connect(mapStateToProps)(Test);
