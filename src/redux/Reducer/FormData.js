import {ADD_DATA_FORM, DELETE_DATA_FORM} from "../Actions/Actions";

export const formData = (state = [], action)=> {
    switch (action.type) {
        case ADD_DATA_FORM :
            const d = state.filter(obj => obj.name !== action.payload.name);
            return [...d,Object.assign({},action.payload)];
        case DELETE_DATA_FORM:
            const newData = state.filter(objN => objN.name !== action.name);
            return [...newData];

        default:
            return state
    }
};
