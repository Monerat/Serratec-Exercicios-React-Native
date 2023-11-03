import axios, { AxiosResponse } from "axios";

const moonPhaseAPI = axios.create({
    baseURL: "https://www.icalendar37.net/lunar/api"
});
    
export interface apiConfig {
    lang  		: 'pt' | "en" |  "es" |  "fr" |  "zh" |  "ru" |  "ca" |  "it" |  "pt" |  "de" |  "pl"; 
    month 		: number; // 1  - 12
    year  		: number; // year
    size		: 100; //  "100%" - pixels
    lightColor	: string; //CSS color
    shadeColor	: string; // CSS color    
    texturize	: string; // true - false
};

export interface MoonPhaseResponse {
    monthName:         string;
    firstDayMonth:     string;
    daysMonth:         string;
    nameDay:           string[];
    nameMonth:         string[];
    phase:             { [key: string]: Phase };
    month:             number;
    year:              number;
    receivedVariables: ReceivedVariables;
    lang:              string;
    language:          string;
    title:             string[];
    nextFullMoon:      string;
    autor:             string;
    version:           string;
};

export interface Phase {
    phaseName:    string;
    isPhaseLimit: boolean | number;
    lighting:     number;
    svg:          string;
    svgMini:      boolean | string;
    timeEvent:    boolean | string;
    dis:          number;
    dayWeek:      number;
    npWidget:     string;
};

export interface ReceivedVariables {
    lang:       string;
    month:      string;
    year:       string;
    size:       string;
    lightColor: string;
    shadeColor: string;
    texturize:  string;
    LDZ:        string;
};

export const getMoonPhase = (params: apiConfig): Promise<AxiosResponse<MoonPhaseResponse>> => {
    
   return moonPhaseAPI.get("/", {params: params})
};

