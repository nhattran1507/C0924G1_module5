import{GET_USERS,GET_USER_SUCCESS,GET_USER_FAILURE,DELETE_USER,DELETE_USER_SUCCESS,DELETE_USER_FAILURE} from "../actions/userAction";

const initialState = {
    users: [],
    loading: false,
    error: null
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USERS:
            return {...state, loading: true, error: null};
        case GET_USER_SUCCESS:
            return {...state, loading: false, users: action.payload};
        case GET_USER_FAILURE:
            return {...state, loading: false, error: action.payload};
        case DELETE_USER:
            return {...state, loading: true, error: null};
        case DELETE_USER_SUCCESS:
            return {...state, loading: false, users: state.users.filter(user => user.id!==action.payload)};
        case DELETE_USER_FAILURE:
            return {...state, loading: false, error: action.payload};
        default:
            return state;
    }
}

export default userReducer;