import { http } from "./HTTPApi";

export function getRoomTags(classId: number) {
    return http(`/room/${classId}/tags`);
}

export function setRoomTags(classId: number, tags: string[]) {
    return http(`/room/${classId}/tags`, "PUT", {}, { tags });
}

export function joinRoomByCode(code: string) {
    return http(`/room/${code}/join`, "POST");
}

export function leaveRoom(classId: number) {
    return http(`/room/${classId}/leave`, "POST");
}

export function deleteRoom(classId: number) {
    return http(`/room/${classId}`, "DELETE");
}

export function deleteRoomLink(classId: number, linkName: string) {
    return http(`/room/${classId}/links`, "DELETE", {}, { name: linkName });
}

export function getRoomLinks(classId: number) {
    return http(`/room/${classId}/links`);
}

export function createRoomLink(classId: number, body: {
    name: string,
    url: string,
}) {
    return http(`/room/${classId}/links/add`, "POST", {}, body);
}

export function updateRoomLink(classId: number, body: {
    oldName: string,
    name: string,
    url: string,
}) {
    return http(`/room/${classId}/links`, "PUT", {}, body);
}