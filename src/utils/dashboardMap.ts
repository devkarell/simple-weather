import { DashboardFillerMap } from '../types/global';
import { WeatherDataResponse } from '../types/responses';

function getWindGustStatus(gust: number): string {
    if (gust <= 15) return 'fracas';
    if (gust <= 30) return 'frequentes';
    if (gust <= 50) return 'fortes';
    if (gust <= 70) return 'muito fortes';
    return 'muito perigosas';
}

function getPressureStatus(pressure: number): string {
    if (pressure < 1000) return 'muito baixa';
    if (pressure < 1013) return 'baixa';
    if (pressure <= 1015) return 'normal';
    if (pressure <= 1025) return 'alta';
    return 'muito alta';
}

export function getDashboardFillerMap(weatherData: WeatherDataResponse): DashboardFillerMap {
    return {
        'feels-like': {
            value: `${Math.ceil(weatherData.main.feels_like - 273.15)} °C`,
            mintemp: `Mínimas de <strong>${Math.ceil(weatherData.main.temp_min - 273.15)} °C</strong>`,
            maxtemp: `Máximas de <strong>${Math.ceil(weatherData.main.temp_max - 273.15)} °C</strong>`,
        },

        'wind-speed': {
            value: `${Math.round(weatherData.wind.speed * 3.6)} km/h`,
        },

        'humidity': {
            value: `${weatherData.main.humidity} %`,
        },

        'clouds-percent': {
            value: `${weatherData.clouds.all} %`,
            weatherstatus: `Agora <strong>${weatherData.clouds.all >= 60 ? 'está nublado' : 'não está nublado'}</strong>`,
        },

        'atmospheric-pressure': {
            value: `${weatherData.main.pressure} hPa`,
            atmosphericpressurestatus: `A pressão atmosférica <strong>está ${getPressureStatus(weatherData.main.pressure)}</strong>`,
        },

        'wind-direction': {
            value: `${Math.round(weatherData.wind.deg)} °`,
        },

        'wind-gust': {
            value: `${weatherData.wind.gust ? Math.round(weatherData.wind.gust * 3.6) : 0} km/h`,
            windguststatus: `As rajadas de vento <strong>estão ${getWindGustStatus(
                weatherData.wind.gust ? Math.round(weatherData.wind.gust * 3.6) : 0
            )}</strong>`,
        },

        'snow-probability': {
            value: `${weatherData.snow ? weatherData.snow['1h'] : '-'} mm/h`,
            snowprobabilitystatus: weatherData.snow
                ? '<strong>Há previsão</strong> de neve ou gelo'
                : '<strong>Não há previsão</strong> de neve ou gelo',
        },

        'rain-probability': {
            value: '- %',
            rainingstatus: '<strong>Informação indisponível no momento</strong>',
        },
    };
}
