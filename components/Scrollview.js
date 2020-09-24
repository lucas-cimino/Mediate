import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView, Image } from 'react-native';
import HeaderExample from "./SideScrollView";
import { Divider } from 'react-native-elements';
import { getTheme } from 'react-native-material-kit';

const theme = getTheme();

class ScrollViewExample extends Component {
    state = {
        categories: [
            {'name': 'Pinned', 'id': 1},
            {'name': 'Meditate', 'id': 2},
            {'name': 'Sleep', 'id': 3},
            {'name': 'Nature', 'id': 4}
        ],
        name: 'Mediate',
        isModalVisible: false
    };

    render() {
        return (
            <View>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View>
                        <Text style={styles.name}>{this.state.name}</Text>
                        <Image source={require('../images/image.png')} style={{width:100, height:100, alignSelf: 'center',
                            justifyContent: 'center', marginBottom: 0,
                        }}/>
                    </View>
                    
                    {
                        <View style = {styles.item}>
                            <HeaderExample user={this.props.user} />
                        </View>
                    }
                </ScrollView>
            </View>
        )
    }
}
export default ScrollViewExample

const styles = StyleSheet.create ({
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 0,
        paddingBottom: 80,
        margin: 15,
        borderWidth: 1,
        borderColor: '#ffffff',
        backgroundColor: '#ffffff',
    },
    name: {
        fontSize: 50,
        color: '#deb800',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        marginTop: 35,
    }
});
