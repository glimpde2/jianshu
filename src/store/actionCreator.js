import {CHANGE_FOCUSED} from './actionType';

export const getChangeFocusedAction=(value)=>{
    return{
        type:CHANGE_FOCUSED,
        value:value
    }
}