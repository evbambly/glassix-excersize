export const CHANGE_MODE = 'mode:changeMode';

export function changeMode(newMode) {

    return {
        type: CHANGE_MODE,
        payload: {
           mapMode : newMode
        }
    }
}