import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import ScrollViewExample from "./Scrollview";

class HeadExample extends Component {
    render() {
        return (
            <View>
                <ScrollViewExample user={this.props.user} />
            </View>
        )
    }
}
export default HeadExample

const styles = StyleSheet.create ({
    top: {
        alignItems: 'center',
        paddingTop: 0,
        backgroundColor: '#000000'
    },
    name: {
        fontSize: 50,
        backgroundColor: '#fafff4',
        borderColor: '#000000',
    }
});
