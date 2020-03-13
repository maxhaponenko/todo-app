import { ADD_NEW_FOLDER } from 'redux/actionTypes';

export const addNewFolder = folderData => {
    return dispatch({
        type: ADD_NEW_FOLDER,
        payload: folderData
    })
}