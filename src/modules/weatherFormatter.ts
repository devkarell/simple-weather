import { WeatherDataResponse } from '../types/responses';
import { getDashboardFillerMap } from '../utils/dashboardMap';
import { isProvince } from '../utils/provincesMap';
import { getTimezoneByProvince } from '../utils/timezonesMap';
import { renderWeatherIcon } from './weatherIconRenderer';

// main results elements
const cityNameTitle = <HTMLTitleElement>document.getElementById('city-name');
const regionTitle = <HTMLTitleElement>document.getElementById('region-name');
const dayInfosTitle = <HTMLTitleElement>document.getElementById('day-infos');
const temperatureTitle = <HTMLTitleElement>document.getElementById('current-temperature');

const dashboardGridElements = document.getElementsByClassName('grid-element');
const searchCoordTitle = <HTMLParagraphElement>document.getElementById('search-cord');

function showDashboardResults(weatherData: WeatherDataResponse): void {
    const fillerMap = getDashboardFillerMap(weatherData);

    for (const gridElement of dashboardGridElements) {
        if (!(gridElement.id in fillerMap)) continue;

        const elementValueTitle = gridElement.querySelector('.data') as HTMLTitleElement;
        elementValueTitle.textContent = fillerMap[gridElement.id].value;

        const elementExpandedInfos = gridElement.querySelectorAll('.expanded-info');
        if (!elementExpandedInfos || !elementExpandedInfos.length) continue;

        for (const expandedInfo of elementExpandedInfos) {
            const keyName = expandedInfo.id.replace(/-/g, '');
            if (!(keyName in fillerMap[gridElement.id])) continue;

            expandedInfo.innerHTML = fillerMap[gridElement.id][keyName];
        }
    }

    searchCoordTitle.innerHTML = `<strong>Latitude: ${weatherData.coord.lat} | Longitude: ${weatherData.coord.lon}</strong>`;
}

function showPrimaryResults(weatherData: WeatherDataResponse, provinceName: string): void {
    const formattedCelsius = Math.ceil(weatherData.main.temp - 273.15);
    const weekdayName = new Date().toLocaleDateString('pt-BR', { weekday: 'long' });
    const localRelativeUTCCode = weatherData.timezone / 60 / 60;

    const localRelativeTime = new Date(weatherData.dt * 1000).toLocaleTimeString('pt-BR', {
        timeZone: getTimezoneByProvince(provinceName),
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
    });

    dayInfosTitle.textContent = `Hoje é ${weekdayName}, ${localRelativeTime} (UTC${localRelativeUTCCode})`;
    cityNameTitle.textContent = weatherData.name;
    regionTitle.textContent = `${provinceName}, Brasil`;
    temperatureTitle.textContent = `${formattedCelsius} °C`;

    renderWeatherIcon(weatherData.weather[0].icon);
}

export function showResults(data: WeatherDataResponse, provinceAcronym: string): void {
    if (!data || typeof data !== 'object') return;

    showPrimaryResults(data, isProvince(provinceAcronym) as string);
    showDashboardResults(data);
}
