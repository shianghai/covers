import {Ionicons} from '@expo/vector-icons';

import React, {Component} from 'react';

import {StyleSheet, Text, View} from 'react-native';

import Modal from 'react-native-modal';

import {Button} from 'native-base';

export default class AssessmentModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        }
    }

    render() {
        return (
            <Modal
                style={{
                    width: 420,
                    backgroundColor: 'none',
                    margin: 0,
                    height: 180,
                    justifyContent: 'flex-start',
                    paddingTop: 10
                }}
                animationType={"slide"}
                transparent={true}
                visible={this.state.show}
            >

                <View style={styles.modalView}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Text style={{fontFamily: 'rale_bold', fontSize: 35}}>Self Assessment</Text>
                        <Ionicons name="md-close" size={30} color="black"
                                  onPress={() => {
                                      this.close(!this.state.show);
                                  }}

                        />
                    </View>

                    <View style={{justifyContent: 'center', marginTop: 100}}>
                        <Button style={{height: 55, justifyContent: 'center'}}
                                dark
                                onPress={
                                    () => {
                                        this.close(!this.state.show)
                                    }}
                        >
                            <Text style={{color: '#fff', fontFamily: 'rale_bold'}}>Start Assessment...</Text>
                        </Button>
                    </View>
                </View>
            </Modal>
        )
    }
}

const styles = StyleSheet.create({
    modalView: {
        margin: 0,
        backgroundColor: "white",
        borderTopRightRadius: 5, borderTopLeftRadius: 5,
        padding: 15,
        height: 727
    }
})