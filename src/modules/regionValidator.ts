import * as provinces from './provincesFiller.ts';
import { searchWeatherByRegion } from '../services/openWeather.ts';
import { showResults } from './weatherFormatter.ts';

const regionForm = <HTMLFormElement>document.getElementById('search-form');
const submitFormBtn = <HTMLButtonElement>document.getElementById('submit-user-region');
const cityInput = <HTMLInputElement>document.getElementById('city-input');
const provinceInput = <HTMLInputElement>document.getElementById('province-input');
const dashboard = <HTMLDivElement>document.getElementById('dashboard');

// ui advertises
const invalidCityAdvertise = <HTMLParagraphElement>document.getElementById('invalid-city-label');
const invalidFormatAdvertise = <HTMLParagraphElement>document.getElementById('format-label');
const invalidProvinceAdvertise = <HTMLParagraphElement>document.getElementById('province-label');
const minCharactersAdvertise = <HTMLParagraphElement>document.getElementById('minimun-characters-label');

const cityRegexSearch = /^[\p{L}\s]+$/u;

function isCityValid(): boolean {
    const value = cityInput.value;
    const isValidChars = value.trim().length > 3;
    const isValidFormat = cityRegexSearch.test(value);

    // invalid city advertise
    invalidCityAdvertise.textContent = 'Hmm.. Este nome não parece familiar';
    invalidCityAdvertise.style.display = isValidChars && isValidFormat ? 'none' : 'inline';

    // invalid min chars advertise
    minCharactersAdvertise.classList.remove(isValidChars ? 'invalid' : 'valid');
    minCharactersAdvertise.classList.add(isValidChars ? 'valid' : 'invalid');

    // invalid format advertise
    invalidFormatAdvertise.classList.remove(isValidFormat ? 'invalid' : 'valid');
    invalidFormatAdvertise.classList.add(isValidFormat ? 'valid' : 'invalid');

    return isValidChars && isValidFormat;
}

export function isProvinceValid(): boolean {
    const isProvinceValid = !!provinces.isValidProvinceByAcronym(provinceInput.value);
    invalidProvinceAdvertise.classList.remove(isProvinceValid ? 'invalid' : 'valid');
    invalidProvinceAdvertise.classList.add(isProvinceValid ? 'valid' : 'invalid');

    return isProvinceValid;
}

async function submitRegion(): Promise<void> {
    if (!isCityValid() || !isProvinceValid()) return;
    submitFormBtn.setAttribute('disabled', '');

    const sucessSubmit = await searchWeatherByRegion(cityInput.value, provinceInput.value);
    if (!sucessSubmit || !sucessSubmit.weather) return console.warn('No weather data found!');

    showResults(sucessSubmit, provinceInput.value);
    dashboard.style.display = 'flex';
    dashboard.scrollIntoView({ behavior: 'smooth', block: 'center' });

    // resets the select2 & city name to default value
    $('#province-input').val('').trigger('change');
    cityInput.value = '';

    // update advertise titles
    isCityValid();
    isProvinceValid();

    submitFormBtn.removeAttribute('disabled');
}

regionForm.addEventListener('submit', (e) => {
    e.preventDefault();
    submitRegion();
});

cityInput.addEventListener('input', isCityValid);
$('#province-input').on('select2:select', isProvinceValid);
