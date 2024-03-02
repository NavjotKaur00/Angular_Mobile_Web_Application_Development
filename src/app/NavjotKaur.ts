export class NavjotKaur
{
    myName!: string;
    mySNumber!: string;
    mySLogin!: string;
    mySEmail!: string;
    mySCampus: string | undefined;
    titleOA!: string;
}

export interface Bk
 {
     food: string,
     qty: number,
     calories: number
    }

    export interface Bs
    {
        id: number,
        stationName: string,
        availableDocks: number,
        totalDocks: number,
        latitude: number,
        longitude: number,
        statusValue: string,
        statusKey: number,
        availableBikes: number,
        city: string
    }

