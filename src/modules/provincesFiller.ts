const provincesList = [
    { acronym: 'AC', name: 'Acre' },
    { acronym: 'AL', name: 'Alagoas' },
    { acronym: 'AP', name: 'Amapá' },
    { acronym: 'AM', name: 'Amazonas' },
    { acronym: 'BA', name: 'Bahia' },
    { acronym: 'CE', name: 'Ceará' },
    { acronym: 'DF', name: 'Distrito Federal' },
    { acronym: 'ES', name: 'Espírito Santo' },
    { acronym: 'GO', name: 'Goiás' },
    { acronym: 'MA', name: 'Maranhão' },
    { acronym: 'MT', name: 'Mato Grosso' },
    { acronym: 'MS', name: 'Mato Grosso do Sul' },
    { acronym: 'MG', name: 'Minas Gerais' },
    { acronym: 'PA', name: 'Pará' },
    { acronym: 'PB', name: 'Paraíba' },
    { acronym: 'PR', name: 'Paraná' },
    { acronym: 'PE', name: 'Pernambuco' },
    { acronym: 'PI', name: 'Piauí' },
    { acronym: 'RJ', name: 'Rio de Janeiro' },
    { acronym: 'RN', name: 'Rio Grande do Norte' },
    { acronym: 'RS', name: 'Rio Grande do Sul' },
    { acronym: 'RO', name: 'Rondônia' },
    { acronym: 'RR', name: 'Roraima' },
    { acronym: 'SC', name: 'Santa Catarina' },
    { acronym: 'SP', name: 'São Paulo' },
    { acronym: 'SE', name: 'Sergipe' },
    { acronym: 'TO', name: 'Tocantins' },
];

export function isValidProvinceByAcronym(acronym: string): boolean | undefined {
    if (typeof acronym !== 'string' || acronym === '') return;

    for (const province of provincesList) {
        if (province.acronym === acronym.toUpperCase()) {
            return true;
        }
    }
}

function fill(): void {
    let provinceParent = <HTMLInputElement>document.getElementById('province-input');

    for (const province of provincesList) {
        let newProvince = document.createElement('option');
        newProvince.value = province.acronym.toLowerCase();
        newProvince.innerHTML = province.name;
        provinceParent.appendChild(newProvince);
    }

    $('#province-input').select2({
        placeholder: 'Estado',
        allowClear: true,
        language: 'pt-BR',
        maximumInputLength: 23,
    });
}

fill();
