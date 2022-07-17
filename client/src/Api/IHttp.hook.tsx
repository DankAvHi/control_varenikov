import { HTTPMethod } from "workbox-routing/utils/constants";

export type HttpHookLoadingType = boolean;
export type HttpHookErrorType = string | null;
export type HttpHookErrorStatusType = number | null;

export type HttpHookPropsType = {
     url: string;
     method: HTTPMethod;
     body?: BodyInit | null | undefined | FormData | any;
     headers?: Headers;
     sendCredentials?: boolean | null | undefined;
     isJSON?: boolean | null | undefined;
     waitingForJson?: boolean | null | undefined;
};
