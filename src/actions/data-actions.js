export const LOAD_API = 'data:loadAPI';

export function loadAPI(data) {
    return {
        type: LOAD_API,
        payload: {
            ipData: data
        }
    }
}