// TODO! New feature: Request user geolocation and fetch weather data based on that

import { Geocode } from '../types/global.ts';
import { WeatherDataResponse, RegionDataResponse } from '../types/responses.ts';

const FETCH_TIMEOUT = 5000; // five seconds (in ms)

async function fetchWeatherData(requestURL: string): Promise<WeatherDataResponse | RegionDataResponse | any> {
    if (!requestURL || typeof requestURL !== 'string') return;

    const abortController = new AbortController();
    const fetchTimoutId = setTimeout(() => abortController.abort(), FETCH_TIMEOUT);

    try {
        const response = await fetch(requestURL, { signal: abortController.signal });
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

        const data = await response.json();
        if (!data) return;
        if (Array.isArray(data) && data.length === 0) return;

        return data;
    } catch (err) {
        console.warn(err);
    } finally {
        clearTimeout(fetchTimoutId);
    }
}

function getWeatherEndpoint(geocode: Geocode): string | undefined {
    if (!geocode || typeof geocode !== 'object') return;
    if (Number.isNaN(geocode.lat) || Number.isNaN(geocode.lon)) return;

    const endpointURL = `https://api.openweathermap.org/data/2.5/weather?lat=${geocode.lat}&lon=${geocode.lon}&appid=${
        import.meta.env.VITE_APP_ID
    }&lang=pt_br`;
    return endpointURL;
}

function getRegionDataEndpoint(cityName: string, provinceAcronym: string): string | undefined {
    if (typeof cityName !== 'string' || typeof provinceAcronym !== 'string') return;

    const encodedCityName = encodeURIComponent(cityName);
    const endpointURL = `https://api.openweathermap.org/geo/1.0/direct?q=${encodedCityName},BR-${provinceAcronym},BR&limit=1&appid=${
        import.meta.env.VITE_APP_ID
    }`;
    return endpointURL;
}

export async function searchWeatherByRegion(cityName: string, provinceAcronym: string): Promise<WeatherDataResponse | undefined> {
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
