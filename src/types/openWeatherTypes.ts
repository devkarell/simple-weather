export type Geocode = Promise<{
    lat: number,
    lon: number
}> | undefined