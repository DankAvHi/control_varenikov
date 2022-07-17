import { Response } from "express";

export type ErrorType = (e: unknown) => Promise<void>;
export type RequestErrorType = (e: unknown, res: Response) => Promise<void>;
export type StrategyErrorType = (e: unknown, done: any) => Promise<void>;
