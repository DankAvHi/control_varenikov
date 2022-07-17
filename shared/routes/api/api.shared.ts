export const API_ROUTE = "/api";

export const AUTH_ROUTE = "/auth";
export const LOGIN_ROUTE = "/login";
export const VERIFY_ROUTE = "/verify";
export const LOGIN_API = API_ROUTE + AUTH_ROUTE + LOGIN_ROUTE;
export const VERIFY_API = API_ROUTE + AUTH_ROUTE + VERIFY_ROUTE;

export const FORM_ROUTE = "/form";
export const SEND_VARENIK_ROUTE = "/send-varenik";
export const SEND_VARENIK_PHOTO_ROUTE = "/send-varenik-photo";
export const GET_VARENIK_ROUTE = "/get-varenik";
export const DELETE_VARENIK_ROUTE = "/delete-varenik";
export const GET_VARENIK_API = API_ROUTE + FORM_ROUTE + GET_VARENIK_ROUTE;
export const SEND_VARENIK_API = API_ROUTE + FORM_ROUTE + SEND_VARENIK_ROUTE;
export const SEND_VARENIK_PHOTO_API = API_ROUTE + FORM_ROUTE + SEND_VARENIK_PHOTO_ROUTE;
export const DELETE_VARENIK_API = API_ROUTE + FORM_ROUTE + DELETE_VARENIK_ROUTE;

export type LoginFormType = {
     login: string;
     password: string;
};

export type VarenikFormType = {
     idvarenik?: number;
     name: string;
     metro: string;
     height: string;
     age: string;
     weight: string;
     clothingSize: string;
     shoeSize: string;
     hairColor: string;
     race: string;
     boobsSize: string;
     photo: File | null;
     oneHourPrice: string;
     twoHourPrice: string;
     [key: string]: any;
};

export type GetVarenikiRequestType = {
     sendAll?: boolean;
     page: number;
     count?: number;
};

export type VarenikiType = [Omit<VarenikFormType, "photo"> & { photo: string }];
