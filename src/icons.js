// Day == 1
import clearDay from './assests/1/clear-day.svg';
import cloudy from './assests/1/cloudy.svg';
import codeRed from './assests/code-red.svg';
import extremeDayDrizzle from './assests/1/extreme-day-drizzle.svg';
import extremeDayFog from './assests/1/extreme-day-fog.svg';
import extremeDayHail from './assests/1/extreme-day-hail.svg';
import extremeDayRain from './assests/1/extreme-day-rain.svg';
import extremeDaySleet from './assests/1/extreme-day-sleet.svg';
import extremeDaySnow from './assests/1/extreme-day-snow.svg';
import extremeRain from './assests/1/extreme-rain.svg';
import extremeSleet from './assests/1/extreme-sleet.svg';
import extremeSnow from './assests/1/extreme-snow.svg';
import fogDay from './assests/1/fog-day.svg';
import fogNight from './assests/1/fog-night.svg';
import loader from './assests/pollen.svg'
import mist from './assests/1/mist.svg';
// import notAvailable from './assests/1/not-available.svg';
import overcastDay from './assests/1/overcast-day.svg';
import overcastDayDrizzle from './assests/1/overcast-day-drizzle.svg';
import overcastDayRain from './assests/1/overcast-day-rain.svg';
import overcastDaySnow from './assests/1/overcast-day-snow.svg';
import partlyCloudyDay from './assests/1/partly-cloudy-day.svg'
import partlyCloudyDayDrizzle from './assests/1/partly-cloudy-day-drizzle.svg'
import partlyCloudyDayHail from './assests/1/partly-cloudy-day-hail.svg'
import partlyCloudyDayRain from './assests/1/partly-cloudy-day-rain.svg'
import partlyCloudyDaySleet from './assests/1/partly-cloudy-day-sleet.svg'
import partlyCloudyDaySnow from './assests/1/partly-cloudy-day-snow.svg'
import rain from './assests/1/rain.svg';
import sleet from './assests/1/sleet.svg';
import snow from './assests/1/snow.svg';
import snowflake from './assests/1/snowflake.svg';
import thunderstormsDayExtremeRain from './assests/1/thunderstorms-day-extreme-rain.svg';
import thunderstormsDayExtremeSnow from './assests/1/thunderstorms-day-extreme-snow.svg';
import thunderstormsDayRain from './assests/1/thunderstorms-day-rain.svg';
import thunderstormsDaySnow from './assests/1/thunderstorms-day-snow.svg';
import thunderstormsRain from './assests/1/thunderstorms-rain.svg';
import tornado from './assests/1/tornado.svg';
import windSnow from './assests/1/wind-snow.svg';
// Night == 0
import clearNight from './assests/0/clear-night.svg';
import extremeNightDrizzle from './assests/0/extreme-night-drizzle.svg';
import extremeNightFog from './assests/0/extreme-night-fog.svg';
import extremeNightHail from './assests/0/extreme-night-hail.svg';
import extremeNightRain from './assests/0/extreme-night-rain.svg';
import extremeNightSleet from './assests/0/extreme-night-sleet.svg';
import extremeNightSnow from './assests/0/extreme-night-snow.svg';
import overcastNight from './assests/0/overcast-night.svg';
import overcastNightDrizzle from './assests/0/overcast-night-drizzle.svg';
import overcastNightRain from './assests/0/overcast-night-rain.svg';
import overcastNightSnow from './assests/0/overcast-night-snow.svg';
import partlyCloudyNight from './assests/0/partly-cloudy-night.svg'
import partlyCloudyNightDrizzle from './assests/0/partly-cloudy-night-drizzle.svg'
import partlyCloudyNightHail from './assests/0/partly-cloudy-night-hail.svg'
import partlyCloudyNightRain from './assests/0/partly-cloudy-night-rain.svg'
import partlyCloudyNightSleet from './assests/0/partly-cloudy-night-sleet.svg'
import partlyCloudyNightSnow from './assests/0/partly-cloudy-night-snow.svg'
import thunderstormsNightExtremeRain from './assests/0/thunderstorms-night-extreme-rain.svg';
import thunderstormsNightExtremeSnow from './assests/0/thunderstorms-night-extreme-snow.svg';
import thunderstormsNightRain from './assests/0/thunderstorms-night-rain.svg';
import thunderstormsNightSnow from './assests/0/thunderstorms-night-snow.svg';

function getPath(code, isDay){
    switch (code) {
        case 1000:
            if(isDay) return clearDay;
            return clearNight;

        case 1003:
            if(isDay) return partlyCloudyDay;
            return partlyCloudyNight;

        case 1006:
            return cloudy;

        case 1009:
            if(isDay) return overcastDay;
            return overcastNight;

        case 1030:
            return mist;

        case 1063:
            if(isDay) return partlyCloudyDayRain;
            return partlyCloudyNightRain;

        case 1066:
            if(isDay) return partlyCloudyDaySnow;
            return partlyCloudyNightSnow;

        case 1069:
            if(isDay) return partlyCloudyDaySleet;
            return partlyCloudyNightSleet;

        case 1072:
            if(isDay) return partlyCloudyDayHail;
            return partlyCloudyNightHail;

        case 1087:
            return thunderstormsRain;

        case 1114:
            return windSnow;

        case 1117:
            if(isDay) return extremeDaySnow;
            return extremeNightSnow;

        case 1135:
            if(isDay) return fogDay;
            return fogNight;

        case 1147:
            if(isDay) return extremeDayFog;
            return extremeNightFog;

        case 1150:
            if(isDay) return partlyCloudyDayDrizzle;
            return partlyCloudyNightDrizzle;

        case 1153:
            if(isDay) return partlyCloudyDayDrizzle;
            return partlyCloudyNightDrizzle;

        case 1168:
            if(isDay) return overcastDayDrizzle;
            return overcastNightDrizzle;

        case 1171:
            if(isDay) return extremeDayDrizzle;
            return extremeNightDrizzle;

        case 1180:
            if(isDay) return partlyCloudyDayRain;
            return partlyCloudyNightRain;

        case 1183:
            return rain;

        case 1186:
            if(isDay) return partlyCloudyDayRain;
            return partlyCloudyNightRain;

        case 1189:
            if(isDay) return overcastDayRain;
            return overcastNightRain;

        case 1192:
            if(isDay) return extremeDayRain;
            return extremeNightRain;

        case 1195:
            if(isDay) return extremeDayRain;
            return extremeNightRain;

        case 1198:
            if(isDay) return partlyCloudyDayHail;
            return partlyCloudyNightHail;

        case 1201:
            if(isDay) return extremeDayHail;
            return extremeNightHail;

        case 1204:
            if(isDay) return partlyCloudyDaySleet;
            return partlyCloudyNightSleet;

        case 1207:
            if(isDay) return extremeDaySleet;
            return extremeNightSleet;

        case 1210:
            if(isDay) return partlyCloudyDaySnow;
            return partlyCloudyNightSnow;

        case 1213:
            return snow;

        case 1216:
            if(isDay) return partlyCloudyDaySnow;
            return partlyCloudyNightSnow;

        case 1219:
            if(isDay) return overcastDaySnow;
            return overcastNightSnow;

        case 1222:
            if(isDay) return extremeDaySnow;
            return extremeNightSnow;

        case 1225:
            if(isDay) return extremeDaySnow;
            return extremeNightSnow;

        case 1237:
            return snowflake;

        case 1240:
            return rain;

        case 1243:
            return extremeRain;

        case 1246:
            return tornado;

        case 1249:
            return sleet;

        case 1252:
            return extremeSleet;

        case 1255:
            return snow;

        case 1258:
            return extremeSnow;

        case 1261:
            return snowflake;

        case 1264:
            return snowflake;

        case 1273:
            if(isDay) return thunderstormsDayRain;
            return thunderstormsNightRain;

        case 1276:
            if(isDay) return thunderstormsDayExtremeRain;
            return thunderstormsNightExtremeRain;

        case 1279:
            if(isDay) return thunderstormsDaySnow;
            return thunderstormsNightSnow;

        case 1282:
            if(isDay) return thunderstormsDayExtremeSnow;
            return thunderstormsNightExtremeSnow;

        case 2406:
            return loader;

        default:
            return codeRed;
    }
}

export { getPath };