import {LOAD_API} from '../actions/data-actions'

export default function dataReducer(state= [], action) {

    switch(action.type) {
    case LOAD_API:
        return action.payload.ipData;
    default:
        return state;
}
}