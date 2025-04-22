import { icon } from '@fortawesome/fontawesome-svg-core';
import { iconsMap } from '../utils/weatherIconsMap';

const weatherIconContainer = <HTMLDivElement>document.getElementById('weather-large-icon');

export function renderWeatherIcon(iconCode: string): void {
    const iconName = iconsMap[iconCode] || 'question';
    const weatherIcon = icon({ prefix: 'fas', iconName: iconName as any });

    if (weatherIcon) {
        weatherIconContainer.innerHTML = ''; // Clear previous icon
        weatherIconContainer.appendChild(weatherIcon.node[0]);
    }
}
