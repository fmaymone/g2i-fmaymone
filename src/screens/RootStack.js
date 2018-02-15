import React, { Component } from 'react'

import { StackNavigator } from 'react-navigation'
import HomeScreen from './HomeScreen'
import QuizScreen from './QuizScreen'
import ModalScreen from './ModalScreen'

const RootStack = StackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Quiz: {
      screen: QuizScreen,
    },
    Modal: {
      screen: ModalScreen
    },
  },
  {
    initialRouteName: 'Home',
  },
   {
  
    mode: 'modal',
  
    headerMode: 'none',
  }
)

export default RootStack
