import * as service from "../services/user-service";

export const GET_USERS = "GET_USERS";
export const DELETE_USER = "DELETE_USER";

export const getUsers = async (dispatch) => {
    try {
        const users = await service.getUsers();
        dispatch({
            type: GET_USERS,
            users
        })
    } catch (e) {
        throw e;
    }
}

export const deleteUser = async (user, dispatch) => {
    try {
        await service.deleteUser(user);
    } catch (e) {
        throw e;
    }
    dispatch({
        type: DELETE_USER,
        user
    })
}