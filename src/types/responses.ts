export type WeatherDataResponse = {
    main: {
        temp: number;
        feels_like: number;
        temp_min: number;
        temp_max: number;
        pressure: number;
        humidity: number;
    };

    weather: [
        {
            id: number;
            main: string;
            description: string;
            icon: string;
        }
    ];

    wind: {
        speed: number;
        deg: number;
        gust?: number | undefined;
    };

    rain?:
        | {
              '1h': number;
          }
        | undefined;

    snow?:
        | {
              '1h': number;
          }
        | undefined;

    clouds: {
        all: number;
    };

    sys: {
        sunrise: number;
        sunset: number;
    };

    coord: {
        lat: number;
        lon: number;
    };

    name: string;
    dt: number;
    timezone: number;
    cod: number;
};

export type RegionDataResponse = [
    {
        lat: number;
        lon: number;
    }
];
