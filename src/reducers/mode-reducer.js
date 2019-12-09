import {CHANGE_MODE} from '../actions/mode-actions'

export default function modeReducer(state= [], action) {
switch(action.type) {
    case CHANGE_MODE:
        return action.payload.mapMode;
    default:
        return state;
}
}