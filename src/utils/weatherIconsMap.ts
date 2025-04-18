import { library } from '@fortawesome/fontawesome-svg-core';
import {
    faSun,
    faMoon,
    faCloud,
    faCloudSun,
    faCloudMoon,
    faCloudRain,
    faCloudSunRain,
    faCloudMoonRain,
    faCloudShowersHeavy,
    faBolt,
    faSmog,
    faSnowflake,
    faQuestion,
} from '@fortawesome/free-solid-svg-icons';

library.add(
    faSun,
    faMoon,
    faCloud,
    faCloudSun,
    faCloudMoon,
    faCloudRain,
    faCloudSunRain,
    faCloudMoonRain,
    faCloudShowersHeavy,
    faBolt,
    faSmog,
    faSnowflake,
    faQuestion
);

export const iconsMap: Record<string, string> = {
    '01d': 'sun',
    '01n': 'moon',
    '02d': 'cloud-sun',
    '02n': 'cloud-moon',
    '03d': 'cloud',
    '03n': 'cloud',
    '04d': 'cloud',
    '04n': 'cloud',
    '09d': 'cloud-showers-heavy',
    '09n': 'cloud-showers-heavy',
    '10d': 'cloud-sun-rain',
    '10n': 'cloud-moon-rain',
    '11d': 'cloud-bolt',
    '11n': 'cloud-bolt',
    '13d': 'snowflake',
    '13n': 'snowflake',
    '50d': 'smog',
    '50n': 'smog',
};
