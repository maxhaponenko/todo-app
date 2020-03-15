import { ADD_NEW_FOLDER } from 'redux/actionTypes';


export const initialState = {
    folders: [
        {
            uid: '7e64bca0-66e0-11ea-bb46-8debddd0ad2a',
            name: 'Projects',
            active: true,
            inTrash: false,
            children: ['EverDo', 'Rubicon', 'Gemshark'],
        },
        {
            uid: '7e64bca0-66e0-11ea-bb46-8debddd0ad2b',
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