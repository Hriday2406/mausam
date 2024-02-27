import './style.css';

async function getData(location) {
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=233cfebb578a433d928121208242202&q=${location}`, {mode: 'cors'});
    const data = await response.json();
    console.log(data);

    const feelsC = data.current.feelslike_c;
    const feelsF = data.current.feelslike_f;
    const tempC = data.current.temp_c;
    const tempF = data.current.temp_f;
    const icon = data.current.condition.icon;
    const humid = data.current.humidity;
    const windK = data.current.wind_kph;
    const windM = data.current.wind_mph;

    return {feelsC, feelsF, tempC, tempF, icon, humid, windK, windM};
}

const btn = document.getElementById('btn');
const input = document.getElementById('search');

btn.addEventListener('click', async () => {
    const inp = input.value;
    let data = await getData(inp);
    console.log(data);
    
    document.getElementById('icon').src = data.icon;
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
