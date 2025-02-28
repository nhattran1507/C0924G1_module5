import { call, put, takeLatest } from "redux-saga/effects";
import {getUser,deleteUser} from "../service/UserService";
import {   GET_USERS,
    DELETE_USER,
    getUserSuccessAction,
    getUserFailureAction,
    deleteUserSuccessAction,
    deleteUserFailureAction} from "../actions/userAction";

function* fetchUsersSaga() {
    try {
        const users = yield call(getUser);
        yield put(getUserSuccessAction(users));
    } catch (error) {
        yield put(getUserFailureAction(error.message));
    }
}

function* deleteUserSaga(action) {
    try {
        yield call(deleteUser, action.payload);
        yield put(deleteUserSuccessAction(action.payload));
    } catch (error) {
        yield put(deleteUserFailureAction(error.message));
    }
}

function * userSaga()
{
    yield takeLatest(GET_USERS, fetchUsersSaga);
    yield takeLatest(DELETE_USER, deleteUserSaga);
}

export default userSaga;