import { getProvincesList } from '../utils/provincesMap';

export function setupSelect(): void {
    const provincesList = getProvincesList();
    const provinceInput = <HTMLInputElement>document.getElementById('province-input');

    for (const province of provincesList) {
        const newProvince = document.createElement('option');
        newProvince.value = province.acronym;
        newProvince.textContent = province.name;
        provinceInput.appendChild(newProvince);
    }

    $('#province-input').select2({
        placeholder: 'Estado',
        allowClear: false,
        language: 'pt-BR',
        width: 'style',
        dropdownCssClass: 'province-select2-dropdown',
        theme: 'SimpleWeather',
    });
}
