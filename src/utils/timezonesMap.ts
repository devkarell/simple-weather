import { getProvincesList } from './provincesMap';

const timezoneMap: Record<string, string> = {
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

export function getTimezoneByProvince(province: string): string | undefined {
    if (typeof province !== 'string' || province === '') return;

    if (!(province in timezoneMap)) {
        const provinceFullObj = getProvincesList().find((provinceObj) => provinceObj.name === province);
        if (!provinceFullObj) return;

        return timezoneMap[provinceFullObj.acronym];
    }

    return timezoneMap[province.toUpperCase()];
}
