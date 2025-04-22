export type DashboardFillerMap = {
    [groupName: string]: {
        [queryName: string]: string;
    };
};

export type Geocode = {
    lat: number;
    lon: number;
};
