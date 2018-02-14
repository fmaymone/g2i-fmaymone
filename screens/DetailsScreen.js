import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import { StyleSheet, Text, View, Button } from 'react-native'
import QuizBuilder from '../containers/QuizBuilder'

class DetailsScreen extends React.Component {
  render() {
    return (
     
        <QuizBuilder />
     
    );
  }
}

export default DetailsScreen