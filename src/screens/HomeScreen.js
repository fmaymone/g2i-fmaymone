import React, { Component } from "react"
import { StyleSheet, Text, View, TouchableHighlight } from "react-native"
import { Button } from "react-native-elements"
import HeaderButton from "../components/Layout/HeaderButton"
import { StackNavigator } from "react-navigation"
import Icon from "react-native-vector-icons/Feather"

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: "Home"
  }
  render() {
    const { navigate } = this.props.navigation
    return (
      <View style={styles.centerContainer}>
        <View style={styles.centerContainer}>
          <Text h1>Welcome to the B2i Awesome Quiz</Text>
        </View>
        <View>
          <Button
            title="Lets Play!!"
            textStyle={{ fontWeight: "700" }}
            buttonStyle={{
              backgroundColor: "rgba(92, 99,216, 1)",
              width: 300,
              height: 45,
              borderColor: "transparent",
              borderWidth: 0,
              borderRadius: 5
            }}
            containerStyle={{ marginTop: 20 }}
            onPress={() => navigate("Quiz")}
          />
        </View>
        <View style={styles.centerContainer}>
          <View style={styles.buttonContainer}>
            <View>
              <TouchableHighlight
                onPress={() => navigate("Modal")}
                underlayColor="grey"
              >
                <View style={styles.button}>
                  <Icon name="settings" size={30} color="black" />
                </View>
              </TouchableHighlight>

              

              {/* <Button onPress={() => navigate("Modal")} title="Configuration" /> */}
            </View>
          </View>
        </View>
      </View>
    )
  }
}
export default HomeScreen

const styles = {
  centerContainer: { flex: 1, alignItems: "center", justifyContent: "center" },

  buttonLetsPlay: {
    backgroundColor: "#374046",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },

  buttonContainer: {
    margin: 20,
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    flex: 1
  }
}
