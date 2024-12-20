"use strict";
class TakePhoto {
    constructor(cameramode, filter) {
        this.cameramode = cameramode;
        this.filter = filter;
    }
}
class Instagram extends TakePhoto {
    constructor(cameramode, filter, burst) {
        super(cameramode, filter);
        this.cameramode = cameramode;
        this.filter = filter;
        this.burst = burst;
    }
    getSepia() {
        console.log("Get Sepia");
    }
}
const hc = new Instagram("test", "test", 3);
