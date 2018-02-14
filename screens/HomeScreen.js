import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native'

import { StackNavigator } from 'react-navigation';

class HomeScreen extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text h1>Welcome to the Awesome Quiz</Text>
          <Button
            title='Lets Play!!!'
            onPress={()=> this.props.navigation.navigate('Details')}
          />
        </View>
      );
    }
  }
  export default HomeScreen