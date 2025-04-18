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

const timeZoneMap: Record<string, string> = {
    AC: 'America/Rio_Branco',
    AM: 'America/Manaus',
    MT: 'America/Cuiaba',
    MS: 'America/Campo_Grande',
    RO: 'America/Porto_Velho',
    RR: 'America/Boa_Vista',
    AP: 'America/Belem',
    PA: 'America/Belem',
    MA: 'America/Fortaleza',
    PI: 'America/Fortaleza',
    CE: 'America/Fortaleza',
    RN: 'America/Fortaleza',
    PB: 'America/Fortaleza',
    PE: 'America/Recife',
    AL: 'America/Maceio',
    SE: 'America/Aracaju',
    BA: 'America/Bahia',
    SP: 'America/Sao_Paulo',
    RJ: 'America/Sao_Paulo',
    MG: 'America/Sao_Paulo',
    PR: 'America/Sao_Paulo',
    SC: 'America/Sao_Paulo',
    RS: 'America/Sao_Paulo',
    DF: 'America/Sao_Paulo',
    GO: 'America/Sao_Paulo',
    TO: 'America/Araguaina',
};

export function getTimezoneByProvinceFullName(name: string): string | undefined {
    if (typeof name !== 'string' || name === '') return;

    for (const province of provincesList) {
        if (province.name === name) {
            return timeZoneMap[province.acronym];
        }
    }
}

export function isValidProvinceByAcronym(acronym: string): string | undefined {
    if (typeof acronym !== 'string' || acronym === '') return;

    for (const province of provincesList) {
        if (province.acronym === acronym.toUpperCase()) {
            return province.name;
        }
    }
}

function fill(): void {
    let provinceParent = <HTMLInputElement>document.getElementById('province-input');

    for (const province of provincesList) {
        let newProvince = document.createElement('option');
        newProvince.value = province.acronym;
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
