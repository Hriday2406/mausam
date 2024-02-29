import './style.css';
import { getPath } from './icons'
import hIcon from './assests/humidity.svg';
import wIcon from './assests/wind.svg';
import cImg from './assests/c.png';
import fImg from './assests/f.png';


const btn = document.getElementById('searchBtn');
const input = document.getElementById('search');
const toggle = document.getElementById('toggle');
const humidIcon = document.getElementById('humidIcon');
const windIcon = document.getElementById('windIcon');

const name = document.getElementById('location');
const temp = document.getElementById('tempValue');
const feels = document.getElementById('feelsValue');
const icon = document.getElementById('icon');
const humid = document.getElementById('humidValue');
const wind = document.getElementById('windValue');
const unitLabel = document.querySelectorAll('.unit');

function setLoader() {
    name.textContent = '__';
    icon.src = getPath(2406, 0);
    temp.textContent = '--';
    feels.textContent = '__';
    feels.dataset.value = '__';
    temp.dataset.value = '__';
    humid.textContent = '__';
    wind.textContent = '__';
}

async function getData(location) {
    try {
        setLoader();
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=233cfebb578a433d928121208242202&q=${location}`, {mode: 'cors'});
        const data = await response.json();

        if(response.status == 200){
            const name = data.location.name;
            const feelsC = data.current.feelslike_c;
            const feelsF = data.current.feelslike_f;
            const tempC = data.current.temp_c;
            const tempF = data.current.temp_f;
            const code = data.current.condition.code;
            const isDay = data.current.is_day;
            const humid = data.current.humidity;
            const wind = data.current.wind_kph;

            return {feelsC, feelsF, tempC, tempF, name, code, isDay, humid, wind};
        }else throw new Error(error);
    } catch(error) {
        throw new Error(error);
    }
}

async function updateDOM() {
    try {
        const inp = input.value == '' ? 'New Delhi' : input.value;
        input.value = '';
        const unit = toggle.dataset.unit;
        let data = await getData(inp);
        
        name.textContent = data.name;
        icon.src = getPath(data.code, data.isDay);
        humid.textContent = data.humid;
        wind.textContent = data.wind;
        if(unit == 'c'){
            feels.textContent = data.feelsC;
            temp.textContent = data.tempC;
            feels.dataset.value = data.feelsF;
            temp.dataset.value = data.tempF;
        } else {
            feels.textContent = data.feelsF;
            temp.textContent = data.tempF;
            feels.dataset.value = data.feelsC;
            temp.dataset.value = data.tempC;
        }
    } catch(error) {
        name.textContent = 'Error';
        icon.src = getPath(0, 0);
        feels.textContent = '00';
        temp.textContent = '00';
        feels.dataset.value = '00';
        temp.dataset.value = '00';
        humid.textContent = '00';
        wind.textContent = '00';
        throw new Error(error);
    }
}

humidIcon.src = hIcon;
windIcon.src = wIcon;

btn.addEventListener('click',() => {
    updateDOM();
    input.blur();
});
input.addEventListener('keypress', (e) => {
    if(e.key === 'Enter') updateDOM();
});
toggle.addEventListener('click', () => {
    if(toggle.dataset.unit == 'c'){
        toggle.dataset.unit = 'f';
        toggle.textContent = 'F';
        unitLabel[0].src = fImg;
        unitLabel[1].src = fImg;
    } else {
        toggle.dataset.unit = 'c';
        toggle.textContent = 'C';
        unitLabel[0].src = cImg;
        unitLabel[1].src = cImg;
    }
    let ft = feels.textContent;
    feels.textContent = feels.dataset.value;
    feels.dataset.value = ft;
    let tt = temp.textContent;
    temp.textContent = temp.dataset.value;
    temp.dataset.value = tt;
});
document.querySelector('header').addEventListener('click', () => {
    input.focus();
})