import { ADD_NEW_FOLDER } from 'redux/actionTypes';


export const initialState = {
    folders: [
        {
            uid: 1239912309401234,
            name: 'Projects',
            active: true,
            inTrash: false,
            children: ['EverDo', 'Rubicon', 'Gemshark'],
        },
        {
            uid: 1239912309401234,
            name: 'Projects',
            active: false,
            inTrash: true,
            children: ['EverDo', 'Rubicon', 'Gemshark'],
        },
    ]
}

const itemsReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_NEW_FOLDER: {
            let newFolder = action.payload.folder
            let newState = {folders: [...state.folders, newFolder]}
            console.log(newState)
            return newState 
        }
        default: {
            return state
        }
    }
}



export default itemsReducer