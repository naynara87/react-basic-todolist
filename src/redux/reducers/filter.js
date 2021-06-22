import {SHOW_COMPLETE, SHOW_ALL} from '../actions'

const initialState = 'ALL'

export default function filter(previousState = initialState, action) {
    if(action.type === SHOW_COMPLETE){
        return "COMPLETE";
    }

    if(action.type === SHOW_COMPLETE){
        return "ALL";
    }

    return previousState;
}