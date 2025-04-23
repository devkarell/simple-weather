import { getProvincesList } from '../utils/provincesMap';
import { isProvinceValid } from './regionValidator';

export function setupSelect(): void {
    const provincesList = getProvincesList();
    const provinceInput = <HTMLInputElement>document.getElementById('province-input');

    for (const province of provincesList) {
        const newProvince = document.createElement('option');
        newProvince.value = province.acronym;
        newProvince.textContent = province.name;
        provinceInput.appendChild(newProvince);
    }

    $('#province-input').on('select2:select', isProvinceValid);
}
