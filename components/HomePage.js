import React, { Component } from 'react';
import { Text, View, StyleSheet, StatusBar } from 'react-native';
import {Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5'
import HeaderExample from "./Header.js";
// <Text style={styles.bottom}>This is our Footer</Text>
class HomePage extends Component {
    render() {
        return (
            <View>
                <StatusBar barStyle="dark-content" />
                <HeaderExample user={this.props.user}  />
                <View style={styles.footer}>
                    <Button
                    buttonStyle={styles.iconOneInFooter}
                    icon ={<Icon 
                    name="music"
                    size={20}
                    onPress={this.props.openMain}
                    color="white"/>}
                    />
                    <Button
                    buttonStyle={styles.iconTwoInFooter}
                    icon ={<Icon 
                    name="user-cog"
                    size={20}
                    onPress={this.props.openSettings}
                    color="white"/>}
                    />
                </View>
            </View>
        )
    }
}
export default HomePage

const styles = StyleSheet.create ({
    footer: {
        flexDirection:'row',
        borderBottomColor: '#2a4944',
        backgroundColor: '#000000',
        color:'#deb800',
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        alignItems: 'stretch',
        flex:1,
        justifyContent: 'center'
    },
    bottom: {
        backgroundColor: 'black',
        flexDirection:'row',
        bottom:0,
        left:0,
        right:0,
        position: 'absolute',
        height:60,
        marginBottom:108
      },
    iconOneInFooter:{
        backgroundColor: 'black',
        paddingRight:0,
        borderStyle: 'solid',
        borderColor:'#fff',
        borderRightWidth: 3,
        borderRadius: 0,
        flex:0.5,
        width:200,
        height:70,
        borderTopColor: '#000',
        borderLeftColor: '#000',
        borderBottomColor: '#000',
        },
    iconTwoInFooter:{
        backgroundColor: 'black',
        flex:0.5,
        paddingLeft:0,
        width:200,
        height:70,
        alignSelf: 'flex-end',
    }
});
