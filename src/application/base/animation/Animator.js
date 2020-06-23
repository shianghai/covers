import {Timer} from "./Timer";

class TranslationAnimator {

    constructor() {

    }

}

class ScaleAnimator {

    constructor() {

    }

}

class FadeAnimator {

    static RepeatMode = {
        INFINITE: -1,
        NO_REPEAT: 0
    };

    constructor() {
        this.timer = null;
        this.delay = 0;
        this.duration = 100;
        this.fromValue = 1;
        this.toValue = 0;
        this.smoothness = 50;
        this.repeatCount = 0; //-1:infinite //0:no-repeat //+number:finite
        this.repeatRunCount = 0;
    }

    setDelay(millis) {
        if (typeof millis !== undefined
            && millis != null
            && typeof millis === 'number'
            && millis > 0) this.delay = millis;
        return this;
    }

    setDuration(millis) {
        if (typeof millis !== undefined
            && millis != null
            && typeof millis === 'number'
            && millis > 0) this.duration = millis;
        return this;
    }

    setSmoothness(millis) {
        if (typeof millis !== undefined
            && millis != null
            && typeof millis === 'number'
            && millis > 0) this.smoothness = millis;
        return this;
    }

    setFromValue(millis) {
        this.fromValue = millis;
        return this;
    }

    setToValue(millis) {
        this.toValue = millis;
        return this;
    }

    getDelay() {
        return this.delay;
    }

    getDuration() {
        return this.duration;
    }

    getSmoothness() {
        return this.smoothness;
    }

    getFromVisibility() {
        return this.fromValue;
    }

    getToVisibility() {
        return this.toValue;
    }

    setOnStart(func) {
        this.onStart = func;
        return this;
    }

    setOnUpdate(func) { //(duration, timePast)
        this.onUpdate = func;
        return this;
    }

    setOnStop(func) {
        this.onStop = func;
        return this;
    }

    getOnStart() {
        return this.onStart;
    }

    getOnUpdate() {
        return this.onUpdate;
    }

    getOnStop() {
        return this.onStop;
    }

    setRepeat(count) {
        if (typeof count !== undefined
            && count != null
            && typeof count === 'number'
            && count > 0) this.repeatCount = count;
    }

    getRepeat() {
        return this.repeatCount;
    }

    start(viewItem) {

        if (typeof this.timer === 'undefined' || this.timer === null || this.repeatCount !== 0) {
            this.timer = new Timer(this.delay, this.duration, this.smoothness);
            this.timer.setOnStart(this.onStart);
            this.timer.setOnTick((duration, timePast) => {
                //do fade fromValue to toValue using duration
                //viewItem.opacity [0:opaque|[0.1 ... 0.9]:translucent|1:transparent]
                //use (duration/timePast)
                console.log('animating timePast: ' + timePast);
                if (!(typeof this.onUpdate !== 'undefined') && this.onUpdate !== null)
                    this.onUpdate();
            });
            this.timer.setOnStop(() => {

                if (!(typeof this.onStop !== 'undefined') && this.onStop !== null)
                    this.onStop();

                if (this.repeatCount !== FadeAnimator.RepeatMode.NO_REPEAT) {
                    switch (this.repeatCount) {
                        case FadeAnimator.RepeatMode.INFINITE:
                            this.start();
                            break;
                        default:
                            if (this.repeatRunCount < this.repeatCount) {
                                this.repeatRunCount = this.repeatRunCount + 1;
                                this.start();
                            }
                            break;
                    }
                }
            });


            this.timer.start();
        }

    }

}

class AnimatorSet {

    //runAnimations in parallel or sequential
    //add(animation|animationSet)
    //setDelay(long)
    //setPlayMode(parallel|sequential)
    //start
    //startSequential(view)
    //startParallel(view)
}


export default {
    ScaleAnimator: ScaleAnimator,
    FadeAnimator: FadeAnimator,
    TranslationAnimator: TranslationAnimator,
    AnimatorSet: AnimatorSet
};