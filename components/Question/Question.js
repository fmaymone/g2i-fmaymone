import React from 'react';
import { Text, View, Image, Linking } from "react-native";

function Question(props) {
  return (
    <View><Text>{props.content}</Text></View>
  );
}


export default Question;