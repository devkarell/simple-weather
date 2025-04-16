import * as provinces from './provincesFiller.ts';
import * as openWeather from '../services/openWeather.ts';

const regionForm = <HTMLFormElement>document.getElementById('search-form');
const submitFormBtn = <HTMLButtonElement>document.getElementById('submit-user-region');
const cityInput = <HTMLInputElement>document.getElementById('city-input');
const provinceInput = <HTMLInputElement>document.getElementById('province-input');
const dashboard = <HTMLDivElement>document.getElementById('dashboard');

const cityRegexSearch = /[^A-Za-z]/g;
const cityRegexFormatter = /[^A-Za-z\s]/g;

function formatCityInput(): void {
    let value = cityInput.value;
    if (value === '') return;

    cityInput.value = value.replace(cityRegexFormatter, '');
}

function isCityInputValidCharacters(): boolean | undefined {
    if (cityInput.value === '') return;

    let cleanedValue = cityInput.value.replace(cityRegexSearch, '');
    return cleanedValue.length >= 3;
}

function isUserRegionValid(): boolean | undefined {
    if (!isCityInputValidCharacters()) return;
    return provinceInput.value !== 'none' && provinces.isValidProvinceByAcronym(provinceInput.value);
}

function submitRegion() {
    if (!isUserRegionValid()) return;
    return openWeather.searchWeatherByRegion(cityInput.value, provinceInput.value);
}

regionForm.addEventListener('submit', (e) => {
    e.preventDefault();
    submitFormBtn.setAttribute('disabled', '');

    const sucessSumbit = submitRegion();

    if (sucessSumbit) {
        dashboard.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    cityInput.value = '';
    provinceInput.value = '';
    submitFormBtn.removeAttribute('disabled');
});

cityInput.addEventListener('input', formatCityInput);
