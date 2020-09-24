import React, { Component } from 'react';
import { StyleSheet, Text, View, Picker, Linking, TouchableOpacity } from 'react-native';
import { Header, Button } from 'react-native-elements';
import { Switch, ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome5';

const GenderOptions = [{
    key: 1,
    value: "Choose"
}, {
    key: 2,
    value: "Male"
}, {
    key: 3,
    value: "Female"
}, {
    key: 4,
    value: "Non-Binary"
}]


const AgeOptions = [{
}];

agess = [];
for (let i = 0; i <= 100; i++) {
    agess[i] = i;
    AgeOptions.keys[i] == agess[i];
    AgeOptions.values[i] == agess[i];
}

const optionsGroup = [GenderOptions, AgeOptions];

export default class Settings extends Component {

    state = { switchValue: true }
    toggleSwitch = (value) => {
        this.setState({ switchValue: value })
    }

    


    render() {

        agess = [];
        let stressLevels = [0,1,2,3,4,5,6,7,8,9,10];
        for (let i = 0; i <= 100; i++) {
            agess[i] = i;
        }

        


        return (
            <View testID="settings">
                <View testID="header">
                    <Header
                        placement='left'
                        //leftComponent={{color: '#000' }}
                        centerComponent={{ text: 'Settings', style: { color: '#fff', fontSize: 30 } }}
                        //rightComponent={{color: '#000' }}
                        containerStyle={{
                            backgroundColor: '#000',
                            justifyContent: 'space-around',
                            height: 100,
                            marginBottom: 10
                        }}
                    />
                </View>


                
                <ScrollView>

                <View testID="Profile">
                    <Text style={styles.subheading}>Profile</Text>
                </View>

                <View testID="Gender" style={styles.separatorPicker}>
                    <Text style={styles.pickers}>Gender</Text>
                    <Picker
                        style={styles.pickbuttons}
                        selectedValue={this.props.user.gender}
                        onValueChange={(itemValue, itemIndex) =>
                            this.setState({ language: itemValue })}>
                        <Picker.Item label="Male" value="male" />
                        <Picker.Item label="Female" value="female" />
                        <Picker.Item label="Non-Binary" value="other" />
                    </Picker>
                </View>

                <View testID="Age" style={styles.separatorPicker}>

                    <Text style={styles.pickers}>Age</Text>
                    <Picker
                        style={styles.pickbuttons}
                        selectedValue={this.props.user.age}
                        onValueChange={(itemValue, itemIndex) =>
                            onSetAge(itemValue)}>
                        {agess.map((prop, key) => {
                            return (
                                <Picker.Item label={key.toString()} value={key} key={key} />
                            );
                        })}
                    </Picker>
                </View>

                <View testID="StressLevel" style={styles.separatorPicker}>

                    <Text style={styles.pickers}>Stress Level</Text>
                    <Picker
                        style={styles.pickbuttons}
                        selectedValue={this.props.user.stressLevel}
                        onValueChange={(itemValue, itemIndex) =>
                            onSetStress(itemValue)}>
                        {stressLevels.map((prop, key) => {
                            return (
                                <Picker.Item label={key.toString()} value={key} key={key} />
                            );
                        })}
                    </Picker>
                </View>


                <View testID="general">
                    <Text style={styles.subheading}>General</Text>
                </View>

                <View testID="dailyQuotes" style={styles.separatorSwitch}>
                    {/*Text to show the text according to switch condition*/}
                    <Text style={styles.switches}>Daily Quotes</Text>
                    {/*Switch with value set in constructor*/}
                    {/*onValueChange will be triggered after switch condition changes*/}
                    <Switch
                        style={styles.yesnobutton}
                        onValueChange={this.toggleSwitch}
                        value={this.state.switchValue} />
                </View>


                <View testID="button">
                    <Button
                        buttonStyle={styles.buttons}
                        titleStyle={{ fontSize: 15, color: 'black' }}
                        title="  Switch to Pro"
                        icon={
                            <Icon name="chevron-right"
                                size={20} />
                        }
                    />
                </View>

                <View testID="button">
                    <Button onPress={() => Linking.openURL('mailto:support@nebular.com')} title="support@nebular.com"
                        buttonStyle={styles.buttons}
                        titleStyle={{ fontSize: 15, color: 'black', paddingRight: 26 }}
                        title="  Contact us"
                        icon={
                            <Icon
                                name="mail-bulk"
                                size={20}
                            />
                        }
                    />
                </View>
                <View style={{paddingTop:200}}></View>
                </ScrollView>

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
            

        );
    }
}

//toggleSwitch1 = {this.toggleSwitch1}
//switch1Value = {this.state.switch1Value}

//<Switch buttonStyle={styles.yesnobutton} title="Daily Quotes"/>
//style={{fontWeight: 'bold'}
const styles = StyleSheet.create({
    white: {
        fontSize: 20,
        color: 'white',
        textAlign: 'center',
        margin: 10,
    },
    subheading: {
        paddingLeft: 20,
        paddingTop: 5,
        fontSize: 25,
        fontWeight: 'bold'
    },
    buttons: {
        width: 325,
        margin: 15,
        backgroundColor: '#ffd700',
        borderRadius: 10,
        paddingRight: 150,
        marginLeft: 20
    },
    separatorPicker: {
        borderColor: '#ffd700',
        borderStyle: 'solid',
        //borderBottomWidth: 3.5,
        borderTopWidth: 3.5,
        borderRadius: 10,
        margin: 20,
        marginBottom: -5,
        paddingTop: 5,
        borderLeftColor: '#000',
        borderRightColor: '#000'
    },
    pickers: {
        marginLeft: 20,
        paddingTop: 10,
        width: 200,
        height: 60,
        paddingBottom: 0,
        fontSize: 17,
    },
    pickbuttons: {
        marginTop: -60,
        width: 120,
        //marginRight: 10
        marginLeft: 215,
        //paddingBottom: 200,

    },
    separatorSwitch: {
        borderColor: '#ffd700',
        borderStyle: 'solid',
        flexDirection:'row',
        alignItems:'flex-end',
        //borderBottomWidth: 3.5,
        borderTopWidth: 3.5,
        borderRadius: 10,
        margin: 20,
        paddingBottom: 12,
        paddingTop: 5,
        borderLeftColor: '#000',
        borderRightColor: '#000'
    },
    switches: {
        marginLeft: 20,
        paddingTop: 10,
        paddingBottom: 0,
        //borderRadius:10,
        fontSize: 17
    },
    yesnobutton: {
        alignItems:'flex-end',
        marginTop:10,
        marginLeft:150
        //justifyContent: 'center'
        //alignItems: 'center'
    },
    footer: {
        flexDirection:'row',
        borderBottomColor: '#2a4944',
        backgroundColor: '#000000',
        color:'#deb800',
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 100,
        alignItems: 'stretch',
        flex:1,
        justifyContent: 'center'
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