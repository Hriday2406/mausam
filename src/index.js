import './style.css';
import image from './rain.png';


const btn = document.getElementById('searchBtn');
const input = document.getElementById('search');
const toggle = document.getElementById('toggle');

const name = document.getElementById('location');
const temp = document.getElementById('tempValue');
const feels = document.getElementById('feelsValue');
const icon = document.getElementById('icon');
const humid = document.getElementById('humidValue');
const wind = document.getElementById('windValue');
const unitLabel = document.querySelectorAll('.unit');

icon.src = image;
async function getData(location) {
    try {
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=233cfebb578a433d928121208242202&q=${location}`, {mode: 'cors'});
        const data = await response.json();
        console.log(data);
        
        const name = data.location.name;
        const feelsC = data.current.feelslike_c;
        const feelsF = data.current.feelslike_f;
        const tempC = data.current.temp_c;
        const tempF = data.current.temp_f;
        const icon = data.current.condition.icon;
        const humid = data.current.humidity;
        const wind = data.current.wind_kph;

        return {feelsC, feelsF, tempC, tempF, name, icon, humid, wind};
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
        console.log(data);
        
        name.textContent = data.name;
        icon.src = data.icon;
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
        alert("Error! PLease Try Again!");
        throw new Error(error);
    }
}

btn.addEventListener('click', updateDOM);
input.addEventListener('keypress', (e) => {
    if(e.key === 'Enter') updateDOM();
});
toggle.addEventListener('click', () => {
    if(toggle.dataset.unit == 'c'){
        toggle.dataset.unit = 'f';
        toggle.textContent = 'F';
        unitLabel[0].textContent = 'F';
        unitLabel[1].textContent = 'F';
    } else {
        toggle.dataset.unit = 'c';
        toggle.textContent = 'C';
        unitLabel[0].textContent = 'C';
        unitLabel[1].textContent = 'C';
    }
    let ft = feels.textContent;
    feels.textContent = feels.dataset.value;
    feels.dataset.value = ft;
    let tt = temp.textContent;
    temp.textContent = temp.dataset.value;
    temp.dataset.value = tt;
});

/*
feelslike_c
feelslike_f
temp_c
temp_f
condition.icon
humidity
wind_kph
is_day //
condition.text //
*/
