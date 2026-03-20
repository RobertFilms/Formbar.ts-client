import { http } from "./HTTPApi";

export function deletePool(poolId: number) {
    return http(`/pools/${poolId}`, "DELETE");
}

export function createPool(body: {
    name: string,
    description: string,
}) {
    return http("/pools/create", "POST", {}, body);
}

export function addPoolMember(poolId: number, body: {
    userId: string,
}) {
    return http(`/pools/${poolId}/add`, "POST", {}, body);
}

export function payoutPool(poolId: number) {
    return http(`/pools/${poolId}/payout`, "POST");
}

export function removePoolMember(poolId: number, body: {
    userId: string,
}) {
    return http(`/pools/${poolId}/remove`, "POST", {}, body);
}