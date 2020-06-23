import {ViewItem} from "./ViewItem";

export class ViewGroup extends ViewItem {

    constructor(props) {
        super(props);
        this.getViews = this.getViews.bind(self);
        this.addView = this.addView.bind(self);
        this.addViews = this.addViews.bind(self);
        this.hasViews = this.hasViews.bind(self);
        this.hasView = this.hasView.bind(self);
        this.removeView = this.removeView.bind(self);
        this.removeAllViews = this.removeAllViews.bind(self);
        this.findViewByID = this.findViewByID.bind(self);
        this.indexOfView = this.indexOfView.bind(self);
        this.getViewAtIndex = this.getViewAtIndex.bind(self);
        this.insertViewAtIndex = this.insertViewAtIndex.bind(self);
    }

    addView(index, child) { // component
        let children = this.getViews();
        if (child == null) {
            children.push(child);
        }
        else {
            children.insert(index, child);
        }
        let component = this.getComponent();
        component.props.children = children;
        this.changeState({__component: component});
    }

    addViews(children) { // component
        let currentViews = this.getViews();
        currentViews.concat(children);
        let component = this.getComponent();
        component.props.children = children;
        this.changeState({__component: component});
    }

    getViews() {
        return this.getProperties().children;
    }

    hasView(child) {
        return this.getViews().conatains(child);
    }

    hasViews(children) {
        return this.getViews().conatains(children);
    }

    removeView(child) {
        let component = this.getComponent();
        component.props.children.remove(child);
        this.changeState({__component: component})
    }

    removeAllViews(children) {
        let component = this.getComponent();
        component.props.children.remove(children);
        this.changeState({__component: component});
    }

    findViewByID(id) {
        return this.getComponent().findElementById(id);
    }

    indexOfView(view) {
        return super.getViews().indexOf(view);
    }

    getViewAtIndex(index) {
        return super.getViews().get(index)
    }

    insertViewAtIndex(index, view) {
        super.addView(index, view);
    }

    render() {
        return this.getComponent();
    }

}