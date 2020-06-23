import React, {Component} from 'react';

import {StyleSheet, TouchableOpacity} from 'react-native';
import ViewItem from "../base/ViewItem";

export default class FlatRadioButton extends Component {


    getStyles = () => {

        let style = {};

        style.borderColor = this.state.selected && this.state.toggle ?
            this.props.hasOwnProperty('selectedBorderColor') ?
                this.props.selectedBorderColor : "black"
            :
            this.props.hasOwnProperty('borderColor') ?
                this.props.borderColor : "black";

        style.backgroundColor = this.state.selected && this.state.toggle ?
            this.props.hasOwnProperty('selectedBackgroundColor') ?
                this.props.backgroundColor : "#A2AEC2"
            :
            this.props.hasOwnProperty('backgroundColor') ?
                this.props.backgroundColor : "white";

        return style
    };

    constructor(props) {
        super(props);

        this.state = {
            toggle: this.props.hasOwnProperty('toggle') ? this.props.toggle : true,
            selected: this.props.hasOwnProperty('selected') ? this.props.selected : false
        };
    }

    render() {

        let styles = StyleSheet.create({style: this.getStyles()});

        return (
            <TouchableOpacity onPress={() => {
                if (this.state.toggle === true) {
                    this.setState({selected: !this.state.selected});
                }
                if (this.props.hasOwnProperty('onPress')) {
                    this.props.onPress()
                }
            }}>
                <ViewItem {...this.props}
                          borderColor={styles.style.borderColor}
                          backgroundColor={styles.style.backgroundColor}
                >
                </ViewItem>
            </TouchableOpacity>

        )
    }
}
