type topPopupTypes = "warning" | "error" | "succes" | "info";

export type TopPopupPropsType = { text: string; type?: topPopupTypes; duration?: number };
export type TopPopupHookPropsType = { message: TopPopupPropsType; clearError?: null | Function };
export type TopPopupArrayType = TopPopupPropsType[] | [];
