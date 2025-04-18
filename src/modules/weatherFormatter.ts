import { WeatherDataResponse } from '../types/openWeatherTypes';
import { isValidProvinceByAcronym, getTimezoneByProvinceFullName } from './provincesFiller';
import { renderWeatherIcon } from './weatherIconsRenderer';

// const dashboardGridElements = document.getElementsByClassName('grid-element');

// main results elements
const cityNameTitle = <HTMLTitleElement>document.getElementById('city-name');
const regionTitle = <HTMLTitleElement>document.getElementById('region-name');
const dayInfosTitle = <HTMLTitleElement>document.getElementById('day-infos');
const temperatureTitle = <HTMLTitleElement>document.getElementById('current-temperature');

function showPrimaryResults(weatherData: WeatherDataResponse, provinceName: string): void {
    const formattedCelsius = Math.floor(weatherData.main.temp - 273.15);
    const weekdayName = new Date().toLocaleDateString('pt-BR', { weekday: 'long' });
    const localRelativeUTCCode = weatherData.timezone / 60 / 60;

    const localRelativeTime = new Date(weatherData.dt * 1000).toLocaleTimeString('pt-BR', {
        timeZone: getTimezoneByProvinceFullName(provinceName),
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
    });

    dayInfosTitle.textContent = `Hoje é ${weekdayName}, ${localRelativeTime} (UTC${localRelativeUTCCode})`;
    cityNameTitle.textContent = weatherData.name;
    regionTitle.textContent = `${provinceName}, Brasil`;
    temperatureTitle.textContent = `${formattedCelsius} °C`;

    renderWeatherIcon(weatherData.weather[0].icon);
}

export function showResults(data: WeatherDataResponse, provinceAcronym: string): void {
    if (!data || typeof data !== 'object') return;

    showPrimaryResults(data, isValidProvinceByAcronym(provinceAcronym) as string);
}
