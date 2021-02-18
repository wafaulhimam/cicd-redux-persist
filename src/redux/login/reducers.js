import { LOG_IN } from './actionTypes'

const initialState = {
    data: '',
}

const loginReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOG_IN:
            return {
                ...state,
                data: action.payload
            }
        default: return state
    }
}

export default loginReducer;

