import {Ionicons} from '@expo/vector-icons';

import React, {Component} from 'react';

import {Text, View, StyleSheet, TextInput, Alert, TouchableOpacity} from 'react-native';

import {Button} from 'native-base';

import Modal from 'react-native-modal';

import Picker from './country';


export default class HeaderLeft extends Component {
    constructor(props) {

        super(props)
        this.state = {
            show: false,
            phone: false,
            phone1: true,
            validity: true
        }

    }

    onChange = (phone) => {
        this.setState({phone: phone})
        this.setState({phone1: false})
    }
    onChange1 = () => {
        this.setState({phone1: true})
        this.setState({phone: false})
    }

    close(show1) {
        this.setState({show: show1});
    }

    render() {

        return (
            <View style={{flex: 1, justifyContent: 'center'}}>
                <Ionicons name="ios-contact" size={50} color="grey"
                          style={{padding: 20}}
                          onPress={() => this.setState({show: true})}
                />

                <Modal
                    style={{flex: 1, margin: 0, paddingTop: 10}}
                    animationType={"slide"}

                    transparent={false}
                    visible={this.state.show}
                    onRequestClose={() => {
                        this.close(!this.state.show);
                    }}
                >
                    <View style={styles.modalView}>
                        <View style={{flex: 0.1, flexDirection: 'row', justifyContent: 'space-between'}}>
                            <Text style={{fontFamily: 'rale_bold', fontSize: 35}}>Profile</Text>
                            <Ionicons name="md-close" size={30} color="black"
                                      onPress={() => {
                                          this.close(!this.state.show);
                                      }}

                            />
                        </View>
                        <View style={{flex: 1}}>
                            <Text style={{fontFamily: 'rale_regular', fontWeight: 'bold', paddingTop: 10}}>Personal
                                Details</Text>
                            <Text style={{fontFamily: 'rale_regular', fontSize: 12, paddingTop: 10}}>Enter Age</Text>
                            <View style={{paddingTop: 10}}>
                                <TextInput
                                    keyboardType='number-pad'
                                    style={{
                                        height: 50,
                                        borderWidth: StyleSheet.hairlineWidth,
                                        borderRadius: 4, borderColor: 'rgb(220, 220, 220)',
                                        justifyContent: 'center'
                                    }}
                                />
                            </View>
                            <View style={{flexDirection: 'row', paddingTop: 15}}>
                                <TouchableOpacity onPress={this.onChange}>
                                    <View style={{flexDirection: 'row'}}>
                                        <Button rounded dark
                                                style={{width: 27, height: 27, justifyContent: 'center', padding: 5}}
                                                light={!Boolean(this.state.phone)}
                                        >
                                            <Ionicons name="ios-checkmark" size={34} color="white"/>
                                        </Button>
                                        <Text style={{
                                            paddingHorizontal: 10,
                                            fontFamily: 'rale_regular',
                                            fontSize: 12,
                                            alignSelf: 'center'
                                        }}>Female</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={this.onChange1}>
                                    <View style={{flexDirection: 'row'}}>
                                        <Button rounded dark
                                                style={{width: 27, height: 27, justifyContent: 'center'}}
                                                light={!Boolean(this.state.phone1)}
                                        >
                                            <Ionicons name="ios-checkmark" size={34} color="white"/>
                                        </Button>
                                        <Text style={{
                                            paddingHorizontal: 10,
                                            fontFamily: 'rale_regular',
                                            fontSize: 12,
                                            alignSelf: 'center'
                                        }}>Male</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={{paddingTop: 20}}>
                                <Text style={{fontFamily: 'rale_bold'}}>Travel History</Text>
                                <Text
                                    style={{fontFamily: 'rale_regular', fontSize: 10}}
                                >Select the last two countries you visited(If Applicable)</Text>
                            </View>
                            <View style={{flexDirection: 'row', paddingTop: 15}}>
                                <View style={{
                                    borderWidth: 1.5,
                                    flex: 1, height: 120,
                                    borderRadius: 7,
                                    justifyContent: 'center', alignItems: 'center'
                                }}>
                                    <Picker/>
                                </View>

                                <View
                                    style={{
                                        borderWidth: 1.5,
                                        flex: 1, height: 120,
                                        borderRadius: 7, marginLeft: 10,
                                        justifyContent: 'center', alignItems: 'center'
                                    }}
                                >
                                    <Picker/>
                                </View>

                            </View>
                            <View style={{paddingTop: 20}}>
                                <Text style={{fontFamily: 'rale_regular', fontWeight: 'bold'}}>Medical Professional
                                    Information</Text>
                                <Text style={{fontFamily: 'rale_regular', fontSize: 10}}>Applicable if you are a health
                                    worker</Text>
                            </View>
                            <View style={{paddingTop: 20}}>
                                <Text>Health License Number</Text>
                            </View>
                            <View style={{paddingTop: 10}}>
                                <TextInput
                                    keyboardType='number-pad'
                                    style={{
                                        height: 50,
                                        borderWidth: StyleSheet.hairlineWidth,
                                        borderRadius: 4, borderColor: 'rgb(220, 220, 220)',
                                        justifyContent: 'center'
                                    }}
                                />
                            </View>
                            <View style={{flex: 1, justifyContent: 'flex-end', alignItems: 'center'}}>
                                <Button style={{height: 55}}
                                        dark block
                                        onPress={() => {
                                            this.close(!this.state.show), Alert.alert('Your Profile has been updated')
                                        }}
                                >
                                    <Text style={{color: '#fff', fontFamily: 'rale_bold'}}>Update Profile</Text>
                                </Button>
                            </View>
                        </View>
                    </View>
                </Modal>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    modalView: {
        margin: 0,
        backgroundColor: "white",
        borderTopRightRadius: 5, borderTopLeftRadius: 5,
        padding: 10,
        height: '100%', flex: 1
    }
})