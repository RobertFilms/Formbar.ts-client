import { http } from "./HTTPApi";

export function getManagerData(offset?: number, limit?: number, sortBy?: string) {
    return http(`/manager?offset=${offset}&limit=${limit}&sortBy=${sortBy}`);
}