let isOn = false;
let isLightOn = true;

const setLight = () => {
    if (isLightOn) {
        display.classList.add('tana__screen--light-on');
    } else {
        display.classList.remove('tana__screen--light-on');
    }
}

const setOnOff = () => {
    if (isOn) {
        isLightOn = true;
        display.classList.add('tana__screen--on');
    } else {
        display.classList.remove('tana__screen--on');
    }
}

const turnOnOff = () => {
    isOn = !isOn;
    setOnOff();
    setLight();
}

const turnLight = () => {
    isLightOn = !isLightOn;
    setLight();
}

const on_off = document.querySelector('#on_off');
const light_btn = document.querySelector('#light');
const display = document.querySelector('#screen');
on_off.addEventListener('click', turnOnOff, null);
light_btn.addEventListener('click', turnLight, null);

window.onload = () => {
    document.body.classList.remove('preload');
}