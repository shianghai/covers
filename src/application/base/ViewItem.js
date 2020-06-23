import {Keys} from '../constants/Data';
import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import Animator from "./animation/Animator";

export default class ViewItem extends Component {


    static Gravity = {
        NONE: 'none',
        START: 'start',
        TOP: 'top',
        END: 'end',
        BOTTOM: 'bottom',
        CENTER: 'center',
        SPACE_AROUND: 'space-around',
        SPACE_BETWEEN: 'space-between',
        SPACE_EVENLY: 'space-evenly',
        STRETCH: 'stretch',
        BASELINE: 'baseline',
        CENTER_HORIZONTAL: 'center-horizontal',
        CENTER_VERTICAL: 'center-vertical',
        TOP_START: 'top-start',
        TOP_CENTER: 'top-center',
        TOP_END: 'top-end',
        BOTTOM_START: 'bottom-start',
        BOTTOM_CENTER: 'bottom-center',
        BOTTOM_END: 'bottom-end',
        START_CENTER_VERTICAL: 'start-center-vertical',
        END_CENTER_VERTICAL: 'end-center-vertical'
    };

    static Visibility = {
        GONE: 'gone',
        INVISIBLE: 'invisible',
        VISIBLE: 'visible',
    };

    static LayoutParam = {
        MATCH_PARENT: 'match-parent',
        WRAP_CONTENT: 'wrap-content',
        AUTO_MATCH: 'auto',
    };

    static Orientation = {
        VERTICAL: 'vertical',
        HORIZONTAL: 'horizontal',
        REVERSE_VERTICAL: 'reverse-vertical',
        REVERSE_HORIZONTAL: 'reverse-horizontal'
    };


    constructor(props) {
        super(props);

        // this.bindFunctions = this.bindFunctions.bind(this);
        // this.bindFunctions(this);

        this.props = props;
        this.generatedStyle = {};

        this.prepareProperties();

        let component = (<View/>);

        this.state = {
            __property: {},
            __component: component
        };

        this.prepareView();

    }

    bindFunctions(self) {
        this.prepareProperties = this.prepareProperties.bind(self);
        this.prepareView = this.prepareView.bind(self);
        this.setComponent = this.setComponent.bind(self);
        this.getComponent = this.getComponent.bind(self);
        this.setProperty = this.setProperty.bind(self);
        this.getProperty = this.getProperty.bind(self);
        this.getProperties = this.getProperties.bind(self);
        this.hasProperty = this.hasProperty.bind(self);
        this.getState = this.getState.bind(self);
        this.hasState = this.hasState.bind(self);
        this.addState = this.addState.bind(self);
    }

    prepareProperties() {

        //setting default props

        for (let key of Keys) {
            if (this.props.hasOwnProperty(key)) {
                this.generatedStyle[key] = this.props[key];
            }
        }

        if (this.props.hasOwnProperty('size')) {
            if (this.props.size === ViewItem.LayoutParam.MATCH_PARENT) {
                this.generatedStyle['width'] = '100%';
                this.generatedStyle['height'] = '100%';
            }
            else if (this.props.size === ViewItem.LayoutParam.WRAP_CONTENT) {
                this.generatedStyle['width'] = 'auto';
                this.generatedStyle['height'] = 'auto';
                this.generatedStyle['flexWrap'] = 'wrap';
            }
            else if (this.props.size === ViewItem.LayoutParam.AUTO_MATCH) {
                this.generatedStyle['width'] = 'auto';
                this.generatedStyle['height'] = 'auto';
            }
            else {
                this.generatedStyle['width'] = this.props.size;
                this.generatedStyle['height'] = this.props.size;
            }
        }

        if (this.props.hasOwnProperty('width')) {
            switch (this.props.width) {
                case ViewItem.LayoutParam.MATCH_PARENT:
                    this.generatedStyle['width'] = '100%';
                    break;
                case ViewItem.LayoutParam.WRAP_CONTENT:
                    this.generatedStyle['width'] = 'auto'
                    this.generatedStyle['flexWrap'] = 'wrap';
                    break;
                case ViewItem.LayoutParam.AUTO_MATCH:
                    this.generatedStyle['width'] = 'auto';
                    break;
                default:
                    this.generatedStyle['width'] = this.props.width;
                    break;
            }
        }

        if (this.props.hasOwnProperty('height')) {
            switch (this.props.height) {
                case ViewItem.LayoutParam.MATCH_PARENT:
                    this.generatedStyle['height'] = '100%';
                    break;
                case ViewItem.LayoutParam.WRAP_CONTENT:
                    this.generatedStyle['height'] = 'auto';
                    this.generatedStyle['flexWrap'] = 'wrap';
                    break;
                case ViewItem.LayoutParam.AUTO_MATCH:
                    this.generatedStyle['height'] = 'auto';
                    break;
                default:
                    this.generatedStyle['height'] = this.props.height;
                    break;
            }
        }

        if (this.props.hasOwnProperty('weight')) {
            this.generatedStyle['flex'] = this.props.weight;
        }

        if (this.props.hasOwnProperty('orientation')) {
            switch (this.props.orientation) {
                case ViewItem.Orientation.HORIZONTAL:
                    this.generatedStyle['flexDirection'] = 'row';
                    break;
                case ViewItem.Orientation.VERTICAL:
                    this.generatedStyle['flexDirection'] = 'column';
                    break;
                case ViewItem.Orientation.REVERSE_VERTICAL:
                    this.generatedStyle['flexDirection'] = 'column-reverse';
                    break;
                case ViewItem.Orientation.REVERSE_HORIZONTAL:
                    this.generatedStyle['flexDirection'] = 'row-reverse';
                    break;
            }
        }

        //TODO: fix
        if (this.props.hasOwnProperty('visibility')) {
            switch (this.props.visibility) {
                case ViewItem.Visibility.GONE:
                    this.generatedStyle['flex'] = 0;
                    break;
                case ViewItem.Visibility.VISIBLE:
                    this.generatedStyle['visibility'] = 'visible';
                    break;
                case ViewItem.Visibility.INVISIBLE:
                    this.generatedStyle['visibility'] = 'invisible';
                    break;
            }
        }

        this.prepareContentGravity();
        this.prepareViewGravity();

        //background: url | image-resource | color

        //background, elevation backgroundImage
        //cornerRadius, cornerTopRightRadius, cornerTopLeftRadius,  cornerBottomRightRadius, cornerBottomLeftRadius,

    }

    prepareViewGravity() {
        if (this.props.hasOwnProperty('viewGravity')) {
            switch (this.props.viewGravity) {
                case ViewItem.Gravity.START:
                case ViewItem.Gravity.TOP:
                    this.generatedStyle['alignSelf'] = 'flex-start';
                    break;
                case ViewItem.Gravity.BOTTOM:
                case ViewItem.Gravity.END:
                    this.generatedStyle['alignSelf'] = 'flex-end';
                    break;
                case ViewItem.Gravity.CENTER:
                    this.generatedStyle['justifySelf'] = 'center';
                    this.generatedStyle['alignSelf'] = 'center';
                    break;
            }
        }
    }

    prepareContentGravity() {
        if (this.props.hasOwnProperty('contentGravity')) {
            switch (this.props.contentGravity) {
                case ViewItem.Gravity.NONE:
                    this.generatedStyle['justifyContent'] = 'flex-start';
                    this.generatedStyle['alignItems'] = 'flex-start';
                    break;
                case ViewItem.Gravity.CENTER:
                    this.generatedStyle['justifyContent'] = 'center';
                    this.generatedStyle['alignItems'] = 'center';
                    break;
                case ViewItem.Gravity.START:
                    switch ((this.generatedStyle.flexDirection === undefined) ? 'column' : this.generatedStyle.flexDirection) {
                        case 'column':
                            this.generatedStyle['justifyContent'] = 'flex-start';
                            break;
                        case 'row':
                            this.generatedStyle['justifyContent'] = 'flex-start';
                            break;
                        case 'column-reverse':
                            this.generatedStyle['justifyContent'] = 'flex-start';
                            break;
                        case 'row-reverse':
                            this.generatedStyle['justifyContent'] = 'flex-end';
                            break;
                    }
                    break;
                case ViewItem.Gravity.END:
                    switch ((this.generatedStyle.flexDirection === undefined) ? 'column' : this.generatedStyle.flexDirection) {
                        case 'column':
                            this.generatedStyle['alignItems'] = 'flex-end';
                            break;
                        case 'row':
                            this.generatedStyle['justifyContent'] = 'flex-end';
                            break;
                        case 'column-reverse':
                            this.generatedStyle['alignItems'] = 'flex-end';
                            break;
                        case 'row-reverse':
                            this.generatedStyle['justifyContent'] = 'flex-start';
                            break;
                    }
                    break;
                case ViewItem.Gravity.TOP:
                    switch ((this.generatedStyle.flexDirection === undefined) ? 'column' : this.generatedStyle.flexDirection) {
                        case 'column':
                            this.generatedStyle['justifyContent'] = 'flex-start';
                            break;
                        case 'row':
                            this.generatedStyle['justifyContent'] = 'flex-start';
                            break;
                        case 'column-reverse':
                            this.generatedStyle['justifyContent'] = 'flex-end';
                            break;
                        case 'row-reverse':
                            this.generatedStyle['justifyContent'] = 'flex-start';
                            break;
                    }
                    break;
                case ViewItem.Gravity.BOTTOM:
                    switch ((this.generatedStyle.flexDirection === undefined) ? 'column' : this.generatedStyle.flexDirection) {
                        case 'column':
                            this.generatedStyle['justifyContent'] = 'flex-end';
                            break;
                        case 'row':
                            this.generatedStyle['alignItems'] = 'flex-end';
                            break;
                        case 'column-reverse':
                            this.generatedStyle['justifyContent'] = 'flex-start';
                            break;
                        case 'row-reverse':
                            this.generatedStyle['alignItems'] = 'flex-end';
                            break;
                    }
                    break;
                case ViewItem.Gravity.CENTER_HORIZONTAL:
                    switch ((this.generatedStyle.flexDirection === undefined) ? 'column' : this.generatedStyle.flexDirection) {
                        case 'column':
                            this.generatedStyle['alignItems'] = 'center';
                            break;
                        case 'row':
                            this.generatedStyle['justifyContent'] = 'center';
                            break;
                        case 'column-reverse':
                            this.generatedStyle['alignItems'] = 'center';
                            break;
                        case 'row-reverse':
                            this.generatedStyle['justifyContent'] = 'center';
                            break;
                    }
                    break;
                case ViewItem.Gravity.CENTER_VERTICAL:
                    switch ((this.generatedStyle.flexDirection === undefined) ? 'column' : this.generatedStyle.flexDirection) {
                        case 'column':
                            this.generatedStyle['justifyContent'] = 'center';
                            break;
                        case 'row':
                            this.generatedStyle['alignItems'] = 'center';
                            break;
                        case 'column-reverse':
                            this.generatedStyle['justifyContent'] = 'center';
                            break;
                        case 'row-reverse':
                            this.generatedStyle['alignItems'] = 'center';
                            break;
                    }
                    break;
                case ViewItem.Gravity.SPACE_AROUND:
                    this.generatedStyle['justifyContent'] = 'space-around';
                    break;
                case ViewItem.Gravity.SPACE_BETWEEN:
                    this.generatedStyle['justifyContent'] = 'space-between';
                    break;
                case ViewItem.Gravity.SPACE_EVENLY:
                    this.generatedStyle['justifyContent'] = 'space-evenly';
                    break;
                case ViewItem.Gravity.STRETCH:
                    this.generatedStyle['alignItems'] = 'stretch';
                    break;
                case ViewItem.Gravity.BASELINE:
                    this.generatedStyle['alignItems'] = 'baseline';
                    break;
                case ViewItem.Gravity.TOP_START:
                    switch ((this.generatedStyle.flexDirection === undefined) ? 'column' : this.generatedStyle.flexDirection) {
                        case 'column':
                            this.generatedStyle['justifyContent'] = 'flex-start';
                            this.generatedStyle['alignItems'] = 'flex-start';
                            break;
                        case 'row':
                            this.generatedStyle['justifyContent'] = 'flex-start';
                            this.generatedStyle['alignItems'] = 'flex-start';
                            break;
                        case 'column-reverse':
                            this.generatedStyle['justifyContent'] = 'flex-end';
                            this.generatedStyle['alignItems'] = 'flex-start';
                            break;
                        case 'row-reverse':
                            this.generatedStyle['justifyContent'] = 'flex-end';
                            this.generatedStyle['alignItems'] = 'flex-start';
                            break;
                    }
                    break;
                case ViewItem.Gravity.TOP_CENTER:
                    switch ((this.generatedStyle.flexDirection === undefined) ? 'column' : this.generatedStyle.flexDirection) {
                        case 'column':
                            this.generatedStyle['justifyContent'] = 'flex-start';
                            this.generatedStyle['alignItems'] = 'center';
                            break;
                        case 'row':
                            this.generatedStyle['justifyContent'] = 'center';
                            this.generatedStyle['alignItems'] = 'flex-start';
                            break;
                        case 'column-reverse':
                            this.generatedStyle['justifyContent'] = 'flex-end';
                            this.generatedStyle['alignItems'] = 'center';
                            break;
                        case 'row-reverse':
                            this.generatedStyle['justifyContent'] = 'center';
                            this.generatedStyle['alignItems'] = 'flex-start';
                            break;
                    }
                    break;
                case ViewItem.Gravity.TOP_END:
                    switch ((this.generatedStyle.flexDirection === undefined) ? 'column' : this.generatedStyle.flexDirection) {
                        case 'column':
                            this.generatedStyle['justifyContent'] = 'flex-start';
                            this.generatedStyle['alignItems'] = 'flex-end';
                            break;
                        case 'row':
                            this.generatedStyle['justifyContent'] = 'flex-end';
                            this.generatedStyle['alignItems'] = 'flex-start';
                            break;
                        case 'column-reverse':
                            this.generatedStyle['justifyContent'] = 'flex-end';
                            this.generatedStyle['alignItems'] = 'flex-end';
                            break;
                        case 'row-reverse':
                            this.generatedStyle['justifyContent'] = 'flex-end';
                            this.generatedStyle['alignItems'] = 'flex-start';
                            break;
                    }
                    break;
                case ViewItem.Gravity.BOTTOM_START:
                    switch ((this.generatedStyle.flexDirection === undefined) ? 'column' : this.generatedStyle.flexDirection) {
                        case 'column':
                            this.generatedStyle['justifyContent'] = 'flex-end';
                            this.generatedStyle['alignItems'] = 'flex-start';
                            break;
                        case 'row':
                            this.generatedStyle['justifyContent'] = 'flex-start';
                            this.generatedStyle['alignItems'] = 'flex-end';
                            break;
                        case 'column-reverse':
                            this.generatedStyle['justifyContent'] = 'flex-start';
                            this.generatedStyle['alignItems'] = 'flex-start';
                            break;
                        case 'row-reverse':
                            this.generatedStyle['justifyContent'] = 'flex-end';
                            this.generatedStyle['alignItems'] = 'flex-end';
                            break;
                    }
                    break;
                case ViewItem.Gravity.BOTTOM_CENTER:
                    switch ((this.generatedStyle.flexDirection === undefined) ? 'column' : this.generatedStyle.flexDirection) {
                        case 'column':
                            this.generatedStyle['justifyContent'] = 'flex-end';
                            this.generatedStyle['alignItems'] = 'center';
                            break;
                        case 'row':
                            this.generatedStyle['justifyContent'] = 'center';
                            this.generatedStyle['alignItems'] = 'flex-end';
                            break;
                        case 'column-reverse':
                            this.generatedStyle['justifyContent'] = 'flex-start';
                            this.generatedStyle['alignItems'] = 'center';
                            break;
                        case 'row-reverse':
                            this.generatedStyle['justifyContent'] = 'center';
                            this.generatedStyle['alignItems'] = 'flex-end';
                            break;
                    }
                    break;
                case ViewItem.Gravity.BOTTOM_END:
                    switch ((this.generatedStyle.flexDirection === undefined) ? 'column' : this.generatedStyle.flexDirection) {
                        case 'column':
                            this.generatedStyle['justifyContent'] = 'flex-end';
                            this.generatedStyle['alignItems'] = 'flex-end';
                            break;
                        case 'row':
                            this.generatedStyle['justifyContent'] = 'flex-end';
                            this.generatedStyle['alignItems'] = 'flex-end';
                            break;
                        case 'column-reverse':
                            this.generatedStyle['justifyContent'] = 'flex-start';
                            this.generatedStyle['alignItems'] = 'flex-end';
                            break;
                        case 'row-reverse':
                            this.generatedStyle['justifyContent'] = 'flex-start';
                            this.generatedStyle['alignItems'] = 'flex-end';
                            break;
                    }
                    break;
                case ViewItem.Gravity.START_CENTER_VERTICAL:
                    switch ((this.generatedStyle.flexDirection === undefined) ? 'column' : this.generatedStyle.flexDirection) {
                        case 'column':
                            this.generatedStyle['justifyContent'] = 'center';
                            this.generatedStyle['alignItems'] = 'flex-start';
                            break;
                        case 'row':
                            this.generatedStyle['justifyContent'] = 'flex-start';
                            this.generatedStyle['alignItems'] = 'center';
                            break;
                        case 'column-reverse':
                            this.generatedStyle['justifyContent'] = 'center';
                            this.generatedStyle['alignItems'] = 'flex-start';
                            break;
                        case 'row-reverse':
                            this.generatedStyle['justifyContent'] = 'flex-end';
                            this.generatedStyle['alignItems'] = 'center';
                            break;
                    }
                    break;
                case ViewItem.Gravity.END_CENTER_VERTICAL:
                    switch ((this.generatedStyle.flexDirection === undefined) ? 'column' : this.generatedStyle.flexDirection) {
                        case 'column':
                            this.generatedStyle['justifyContent'] = 'center';
                            this.generatedStyle['alignItems'] = 'flex-end';
                            break;
                        case 'row':
                            this.generatedStyle['justifyContent'] = 'flex-end';
                            this.generatedStyle['alignItems'] = 'center';
                            break;
                        case 'column-reverse':
                            this.generatedStyle['justifyContent'] = 'center';
                            this.generatedStyle['alignItems'] = 'flex-end';
                            break;
                        case 'row-reverse':
                            this.generatedStyle['justifyContent'] = 'flex-start';
                            this.generatedStyle['alignItems'] = 'center';
                            break;
                    }
                    break;
            }
        }
    }

    setProperty(property) {// {key, value}
        let currentProperties = this.state.__property;
        for (let key in property) {
            currentProperties[key] = property[key];
        }
        this.addState({__property: currentProperties});

    }

    getProperties() {
        return this.getComponent().props;
    }

    getProperty(name) {
        return this.getProperties()[name];
    }

    hasProperty(property) { //key
        this.getProperties().hasOwnProperty(property);
    }

    getState() {
        return this.state;
    }

    hasState(state) { //key
        this.state.hasOwnProperty(state);
    }

    addState(state) { // {key, value}
        let currentState = this.state;
        for (let key in state) {
            currentState[key] = state[key];
        }
        this.setState(state);
    }

    getComponent() {
        return this.getState().__component;
    }

    setComponent(component) {
        this.addState({__component: component});
    }

    prepareView() {

        for (let key of Keys) {
            if (this.state.__property.hasOwnProperty(key)) {
                this.generatedStyle[key] = this.state.__property[key];
            }
        }

        let styles = StyleSheet.create({style: this.generatedStyle});

        this.state.__component = (
            <View {...this.props} {...this.state.__property} style={
                (this.props.hasOwnProperty('style')) ?
                    [this.props.style, styles.style] : styles.style
            }/>
        );
    }

    getAnimation() {
        if (this.props.hasOwnProperty('startAnimation')) {
            if (this.props.startAnimation.type === 'fade') {
                let animation = new Animator.FadeAnimator();
                animation.setDelay(this.props.startAnimation.delay);
                animation.setDuration(this.props.startAnimation.duration);
                animation.setFromValue(this.props.startAnimation.from);
                animation.setToValue(this.props.startAnimation.to);
                animation.setSmoothness(this.props.startAnimation.smoothness);
                animation.setOnStart(function () {
                    console.log('calling onStart()');
                });
                animation.setOnStop(function () {
                    console.log('calling onStop()');
                });
                animation.setOnUpdate(() => {
                    console.log('calling onUpdate()');
                });
                return animation;
            }
        }
        return null;
    }

    render() {
        this.prepareView();
        return this.getComponent();
    }

}