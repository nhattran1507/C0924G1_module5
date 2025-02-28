const GET_USERS= "GET_USERS"
const GET_USER_SUCCESS= "GET_USER_SUCCESS"
const GET_USER_FAILURE= "GET_USER_FAILURE"

const DELETE_USER= "DELETE_USER"
const DELETE_USER_SUCCESS= "DELETE_USER_SUCCESS"
const DELETE_USER_FAILURE= "DELETE_USER_FAILURE"

const getUsersAction=()=>({
    type: GET_USERS
})

const getUserSuccessAction=(users)=>({
    type: GET_USER_SUCCESS,
    payload: users
})

const getUserFailureAction=(error)=>({
    type: GET_USER_FAILURE,
    payload: error
})

const deleteUserAction=(userId)=>({
    type: DELETE_USER,
    payload: userId
})

const deleteUserSuccessAction=(userId)=>({
    type: DELETE_USER_SUCCESS,
    payload: userId
})

const deleteUserFailureAction=(error)=>({
    type: DELETE_USER_FAILURE,
    payload: error
})

export {
    GET_USERS,
    GET_USER_SUCCESS,
    GET_USER_FAILURE,
    DELETE_USER,
    DELETE_USER_SUCCESS,
    DELETE_USER_FAILURE,
    getUsersAction,
    getUserSuccessAction,
    getUserFailureAction,
    deleteUserAction,
    deleteUserSuccessAction,
    deleteUserFailureAction,
}