import React, { Component } from 'react';
import { Text, View, Image, Linking } from 'react-native';
import { Card, ListItem, Button } from 'react-native-elements'
import CardSection from '../common/CardSection';
//import Button from '../common/Button';

class Quiz extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 

        const { category, correct_answer, difficulty, question } = this.props.quiz
        const {
            thumbnailStyle,
            headerContentStyle,
            thumbnailContainerStyle,
            headerTextStyle,
            imageStyle

            
          } = styles;
        
        console.log('------props Quiz--------')
        console.log(this.props)
        console.log('------props Quiz--------')
        return ( 
        <Card>
            <CardSection>
              <View style={headerContentStyle}>
                <Text style={headerTextStyle}>{category}</Text>
              </View>
            </CardSection>
            <CardSection>
              <View style={thumbnailContainerStyle}>
                <Text style={headerTextStyle}>{question}</Text>
                
              </View>
            </CardSection>
            <CardSection>
              <Button
                  icon={{name: 'code'}}
                  backgroundColor='#03A9F4'
                  buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                  title='VIEW NOW' />
            </CardSection>
        </Card>
        )
    }
}
const styles = {
    headerContentStyle: {
      flexDirection: 'column',
      justifyContent: 'space-around'
    },
    headerTextStyle: {
      fontSize: 18
    },
    thumbnailStyle: {
      height: 50,
      width: 50
    },
    thumbnailContainerStyle: {
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: 10,
      marginRight: 10
    },
    imageStyle: {
      height: 300,
      flex: 1,
      width: null
    }
  };
 
export default Quiz;