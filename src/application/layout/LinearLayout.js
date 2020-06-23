import React from 'react';
import {ViewGroup} from "../base/ViewGroup";

export class LinearLayout extends ViewGroup {

    constructor(props) {
        super(props);
    }

    render() {
        return this.getComponent();
    }
}
