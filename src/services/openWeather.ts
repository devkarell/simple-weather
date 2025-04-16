import * as openWeatherTypes from '../types/openWeatherTypes.ts';
// import * as weatherFormatter from './weatherFormatter.ts'

const FETCH_TIMEOUT = 5000; // five seconds (in ms)
const APP_ID = '';

async function getRegionGeocode(cityName: string, provinceAcronym: string): Promise<openWeatherTypes.Geocode> {
    const abortController = new AbortController();
    const fetchTimoutId = setTimeout(() => abortController.abort(), FETCH_TIMEOUT);

    const encodedCityName = encodeURIComponent(cityName);
    const requestURL = `http://api.openweathermap.org/geo/1.0/direct?q=${encodedCityName},BR-${provinceAcronym.toUpperCase()},BR&limit=1&appid=${APP_ID}`;

    try {
        const data = await fetch(requestURL, { signal: abortController.signal }).then((data) => data.json());

        return {
            lat: data[0].lat,
            lon: data[0].lon,
        };
    } catch (err) {
        console.warn(err);
    } finally {
        clearTimeout(fetchTimoutId);
    }
}

export async function searchWeatherByRegion(cityName: string, provinceAcronym: string): Promise<boolean | undefined> {
    const regionGeocode = await getRegionGeocode(cityName, provinceAcronym);
    if (!regionGeocode) return;

    const abortController = new AbortController();
    const fetchTimoutId = setTimeout(() => abortController.abort(), FETCH_TIMEOUT);

    const requestURL = `https://api.openweathermap.org/data/2.5/weather?lat=${regionGeocode.lat}&lon=${regionGeocode.lon}&appid=${APP_ID}&lang=pt_br`;
    let data;

    try {
        data = await fetch(requestURL, { signal: abortController.signal }).then((data) => data.json());

        //weatherFormatter.show(data, provinceAcronym.toUpperCase());
        console.log(data);
    } catch (err) {
        console.warn(err);
    } finally {
        clearTimeout(fetchTimoutId);
    }

    return data && true;
}
