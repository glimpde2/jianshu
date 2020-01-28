import {CHANGE_FOCUSED} from './actionType';
const defaultState = {
    focused:false
}

export default (state=defaultState,action)=>{
    if(action.type == CHANGE_FOCUSED){
        const newState = JSON.parse(JSON.stringify(state));
        newState.focused = action.value;
        return newState;
    }
    return state;
}