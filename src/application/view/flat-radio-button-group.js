import React, {Component} from 'react';

import {Text} from 'react-native';
import ViewItem from '../base/ViewItem';
import FlatRadioButton from './flat-radio-button';

export default class FlatRadioButtonGroup extends Component {

    constructor(props){
        super(props);

        this.state = {
            selectedIndex: this.props.hasOwnProperty('default') ? this.props.default : 0
        };
    }

    buildFlatRadioButton = ({key, label}) => {
      
        return (
            <ViewItem
                contentGravity={'center'}
                padding={this.props.hasOwnProperty('childPadding') ? this.props.childPadding : 8}
            >
                <FlatRadioButton
                    size={this.props.hasOwnProperty('radioSize') ? this.props.radioSize : 40}
                    key={key}
                    toggle={false}
                    borderWidth={1}
                    borderRadius={this.props.hasOwnProperty('radioSize') ? this.props.radioSize/2 : 20}
                    borderColor={this.state.selectedIndex === key ? '#A2AEC2' : 'black'}
                    backgroundColor={this.state.selectedIndex === key ? '#A2AEC2' : 'white'}
                    contentGravity={'center'}
                    selected={this.state.selectedIndex === key}
                    onPress={() => {
                        if (this.state.selectedIndex !== key && this.props.hasOwnProperty('onChange')){
                            this.props.onChange({ key: key, value: label })
                        }
                        this.setState({selectedIndex: key})
                    }}>
                    <Text style={{
                        fontWeight: 'bold',
                        fontSize: 16,
                        color: this.state.selectedIndex === key ? 'white' : 'black'
                    }}
                    >{key}</Text>

                </FlatRadioButton>

                <Text style={{color: 'black', padding: this.props.hasOwnProperty('labelPadding') ?
                        this.props.labelPadding : 4}}>
                    {label}
                </Text>

            </ViewItem>
        )

    };

    render() {


        return (
            <ViewItem {...this.props}>

                {
                    [
                        {key: 0, label: 'None'},
                        {key: 1, label: 'Mild'},
                        {key: 2, label: 'Mid'},
                        {key: 3, label: 'Semi'},
                        {key: 4, label: 'High'}
                    ].map(i => {
                        return this.buildFlatRadioButton(i)
                    })
                }

            </ViewItem>
        )
    }
}
