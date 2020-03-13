import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Navigation from './components/navigation';
import Folders from './components/folders';
import useKeyPress from 'hooks/useKeyPress';
import { ADD_NEW_FOLDER } from 'redux/actionTypes';
import './sidebar.scss';

const Sidebar = () => {

    const dispatch = useDispatch()

    const [newFolderProcess, setNewFolderProcess] = useState({
        inProcess: false,
        name: '',
        uid: 123123,
        children: []
    });

    const addNewFolder = (name) => {
        dispatch({
            type: ADD_NEW_FOLDER,
            payload: {
                folder: {
                    name: name,
                    uid: 123,
                }
            }
        })
    }
 
    const createNewFolder = () => {
        setNewFolderProcess((prevState) => ({
            ...prevState,
            inProcess: !prevState.inProcess
        }))
    }
    const onPressEnterButton = useKeyPress('Enter')

    useEffect(() => {
        if (onPressEnterButton === true) {
            addNewFolder(newFolderProcess.name);
            setNewFolderProcess({
                inProcess: false,
                name: '',
                uid: 123123,
                children: []
            })
        }
    }, [onPressEnterButton])

    return (
        <nav>
            <Navigation />
            <Folders />
            {newFolderProcess.inProcess && (
                <input value={newFolderProcess.name} onChange={(e) => {
                    e.persist()
                    setNewFolderProcess(prevState => ({...prevState, name: e.target.value.toUpperCase()}))} } className="new-folder-input"></input>
            )}
            <div onClick={() => createNewFolder()} className="add-new-item"><i className="fas fa-plus"></i></div>
        </nav>
    )
}

export default Sidebar