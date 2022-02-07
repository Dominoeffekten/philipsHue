const hue = jsHue();
const ip = "192.168.1.33";
const username = "QpUHUbcqlOx3wnu2iWiUmPrCylAHvSbEIxyk9utf";
const bridge = hue.bridge(ip);
const user = bridge.user(username);
const sliderBri = document.getElementById("sliderBri");
const sliderHue = document.getElementById("sliderHue");
let state = 0;

sliderBri.style.width = "300px";
sliderHue.style.width = "300px";

//user.setLightState(1, { on: true });
//user.setLightState(1, { hue: Math.round(Math.random() * 65535) });
//user.setLightState(1, { bri: 254 });
//user.setLightState(1, { on: false, hue: Math.round(Math.random() * 65535), bri: 64 });

const on = () => {
    state = 1;
    user.setLightState(1, { on: true });
    console.log(state);
}

const off = () => {
    state = 0;
    user.setLightState(1, { on: false });
    console.log(state);
}

const toggleState = () => {
    state = +!state;
    if (state) {
        on();
    }
    else {
        off();
    }
}

sliderBri.oninput = function () {
    user.setLightState(1, { bri: parseInt(this.value) });
    console.log(this.value);
}

sliderHue.oninput = function () {
    user.setLightState(1, { hue: parseInt(this.value) });
    console.log(this.value);
}