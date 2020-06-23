import React from 'react';
import {AsyncStorage} from 'react-native';

const AppContext = React.createContext();

export class AppProvider extends React.Component {

    updateState = state => {
        if (typeof state.token !== 'undefined') AsyncStorage.setItem("token", state.token === null ? undefined : state.token);
        if (typeof state.user !== 'undefined') AsyncStorage.setItem("user", state.user === null ? undefined : JSON.stringify(state.user));
        this.setState(state);
    };

    state = {
        token: AsyncStorage.getItem("token") === 'undefined' ? null : AsyncStorage.getItem("token"),
        user: {},
        updateState: this.updateState
    };

    render() {
        return (
            <AppContext.Provider value={this.state}>
                {this.props.children}
            </AppContext.Provider>
        );
    }

};

export const AppConsumer = AppContext.Consumer;

export default AppContext;