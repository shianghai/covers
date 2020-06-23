export class Timer {

    constructor(delay, duration, tickRate, onStart, onTick, onStop) {
        this.timePast = 0;
        this.delay = 0;
        this.duration = 0;
        this.tickRate = 1;
        this.onStart = onStart;
        this.onTick = onTick;
        this.onStop = onStop;
        this.setTickRate(tickRate);
        this.setDelay(delay);
        this.setDuration(duration);
    }

    getDelay() {
        return this.delay;
    }

    getDuration() {
        return this.duration;
    }

    setDelay(millis) {
        if (typeof millis !== undefined
            && millis != null
            && typeof millis === 'number'
            && millis > -1) this.delay = millis;
    }

    setDuration(millis) {
        if (typeof millis !== undefined
            && millis != null
            && typeof millis === 'number'
            && millis > -1) this.duration = millis;
    }

    setTickRate(millis) {
        if (typeof millis !== undefined
            && millis != null
            && typeof millis === 'number'
            && millis < this.duration
            && millis > 0) this.tickRate = millis;
    }

    getTickRate() {
        return this.tickRate;
    }

    setOnStart(func) {
        this.onStart = func;
    }

    setOnTick(func) { //(duration, timePast)
        this.onTick = func;
    }

    setOnStop(func) {
        this.onStop = func;
    }

    getOnStart() {
        return this.onStart;
    }

    getOnTick() {
        return this.onTick;
    }

    getOnStop() {
        return this.onStop;
    }

    __runner() {
        setTimeout(() => {
            this.timePast = this.timePast + this.tickRate;

            if (typeof this.onTick !== 'undefined' && this.onTick !== null)
                this.onTick(this.duration, this.timePast);

            if (this.timePast < this.duration) {
                this.__runner();
            }
            else {
                if (typeof this.onStop !== 'undefined' && this.onStop !== null)
                    this.onStop();
            }
        }, this.tickRate);
    }

    start() {
        if (typeof this.onStart !== 'undefined' && this.onStart !== null)
            this.onStart();

        setTimeout(() => {
            this.__runner();
        }, this.delay);
    }

}