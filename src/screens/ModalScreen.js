import React, { Component } from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View
} from 'react-native';
import HeaderButton from '../components/Layout/HeaderButton';
import Configuration from '../containers/Configuration'

export default class Modal extends Component {

  render() {
    const { goBack } = this.props.navigation;
    return (
      <View style={styles.container}>
        <HeaderButton
          icon="md-close"
          onPress={() => goBack()}
        />
        
          <Configuration />
        
        {/* <Button
          onPress={() => goBack()}
          title="Close Me"
        /> */}
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 20,
    marginVertical: 20,
  },
});