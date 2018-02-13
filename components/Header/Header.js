import React, { Component } from 'react'
import { Badge } from 'react-native-elements'
import {
    StyleSheet,
    Text,
    TouchableWithoutFeedback,
    Button,
    View,
    ScrollView
  } from "react-native"
class Header extends Component {
    render() { 
        return ( 
            <View style={styles.container}>
                <View style={{ flexDirection: "row", justifyContent: "center" }}>
                    <View style={{width: 50, height: 50}}>
                        <Badge
                            value={3}
                            textStyle={{ color: 'orange' }}
                        />
                    </View>
                    <View style={{width: 50, height: 50}}>
                        <Badge
                            value={3}
                            textStyle={{ color: 'orange' }}
                        />
                    </View>
                </View>
            </View>
            
         )
    }
}

var styles = {
    badges: {
        
        
        flexDirection: "row",
        alignItems: "center",
        justifyContent: 'center',
        
    },
    container: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: 'center',
      },
}
    export default Header;