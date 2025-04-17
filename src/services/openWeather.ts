// TODO! New feature: Request user geolocation and fetch weather data based on that

import { WeatherDataResponse, RegionDataResponse, Geocode } from '../types/openWeatherTypes.ts';

const FETCH_TIMEOUT = 5000; // five seconds (in ms)

async function fetchWeatherData(requestURL: string): Promise<WeatherDataResponse | RegionDataResponse | any> {
    if (!requestURL || typeof requestURL !== 'string') return;

    const abortController = new AbortController();
    const fetchTimoutId = setTimeout(() => abortController.abort(), FETCH_TIMEOUT);

    try {
        const response = await fetch(requestURL, { signal: abortController.signal });
        if (!response.ok) return;

        return await response.json();
    } catch (err) {
        console.warn(err);
    } finally {
        clearTimeout(fetchTimoutId);
    }
}

function getWeatherEndpoint(geocode: Geocode): string | undefined {
    if (!geocode || typeof geocode !== 'object') return;
    if (!geocode.lat || !geocode.lon) return;
    if (typeof geocode.lat !== 'number' || typeof geocode.lon !== 'number') return;

    const endpointURL = `https://api.openweathermap.org/data/2.5/weather?lat=${geocode.lat}&lon=${geocode.lon}&appid=${APP_ID}&lang=pt_br`;
    return endpointURL;
}

function getRegionDataEndpoint(cityName: string, provinceAcronym: string): string | undefined {
    if (!cityName || !provinceAcronym) return;
    if (typeof cityName !== 'string' || typeof provinceAcronym !== 'string') return;

    const encodedCityName = encodeURIComponent(cityName);
    const endpointURL = `http://api.openweathermap.org/geo/1.0/direct?q=${encodedCityName},BR-${provinceAcronym.toUpperCase()},BR&limit=1&appid=${APP_ID}`;
    return endpointURL;
}

export async function searchWeatherByRegion(cityName: string, provinceAcronym: string): Promise<WeatherDataResponse | undefined> {
    if (!APP_ID || APP_ID.length < 32) return;

    const regionDataEndpoint = getRegionDataEndpoint(cityName, provinceAcronym);
    if (!regionDataEndpoint) return;

    const regionData = <RegionDataResponse>await fetchWeatherData(regionDataEndpoint);
    if (!regionData) return;

    const geocodeObject: Geocode = {
        lat: regionData[0].lat,
        lon: regionData[0].lon,
    };

    const weatherEndpoint = getWeatherEndpoint(geocodeObject);
    if (!weatherEndpoint) return;

    const weatherForecastData = <WeatherDataResponse>await fetchWeatherData(weatherEndpoint);
    return weatherForecastData;
}
