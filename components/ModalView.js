import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import Modal from "react-native-modal";
import { Button } from 'react-native-elements';
import { ScrollView } from "react-native-gesture-handler";

export default class ModalTester extends Component {
    state = {
        isModalVisible: false,

    };

    toggleModal = () => {
        this.setState({ isModalVisible: !this.state.isModalVisible });
    };

    render() {
        return (
            
            <View style={{ marginLeft: 0 }}>
                <Button buttonStyle={styles.Button} title="Listen" onPress={this.toggleModal} type={'solid'} />
                <Modal isVisible={this.state.isModalVisible}>
                    <View><ScrollView>
                        <Text style={styles.modal}>Breathe in...2....3....4..... hold...2...3....exhale...2....3....4....5...

                            Breathe in...2....3....4..... hold...2...3....exhale...2....3....4....5...

                            Breathe in...2....3....4..... hold...2...3....exhale...2....3....4....5...

                            Breathe in...2....3....4..... hold...2...3....exhale...2....3....4....5...

                            Continue to breathe at this slow pace.

                            While you are breathing slowly, I'll direct your breathing awareness to different stages of the breath. Focus all of your attention on each stage I mention.

                            First, notice the breath as it enters your nose. Notice each time you breathe in, the way the breath feels on your nostrils.

                            Feel the breath as it passes through your nasal passages, and down behind your throat.

                            Where does the air go next? Feel each time you inhale, the breath passing down your windpipe.

                            Feel the breath going down.....</Text>
                            <Button buttonStyle={styles.Button} title="Go back" onPress={this.toggleModal} type={'solid'} />
                            </ScrollView>
                    </View>
                </Modal>
            </View>
            
        );
    }
}

const styles = StyleSheet.create({
    modal: {
        borderBottomColor: '#2a4944',
        backgroundColor: '#ffffff',
        color: '#000000',
        padding: 30,
        fontSize: 20,
        textAlign: 'center'
    },
    Button: {
        backgroundColor: '#deb800',
        width: 200,
        alignSelf: 'center',
        justifyContent: 'center'
    }
});
