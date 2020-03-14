import React, { useState, useEffect, useRef, useCallback } from 'react';
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

    function addNewFolder(name) {
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

    function cleanupNewFolderProcess() {
        setNewFolderProcess({
            inProcess: false,
            name: '',
            uid: undefined,
            children: []
        })
    }
 
    const createNewFolder = () => {
        setNewFolderProcess((prevState) => ({
            ...prevState,
            inProcess: !prevState.inProcess
        }))
    }
    
    const newFolderInput = useRef();
    useEffect(() => {
        if (newFolderProcess.inProcess === true) {
            newFolderInput.current.focus();
        }
    }, [newFolderProcess.inProcess])


    const onPressEnterButton = useKeyPress('Enter')
    const onPressEscapeButton = useKeyPress('Escape')
    const addFolder = useCallback((name) => addNewFolder(name), [])
    useEffect(() => {
        if (onPressEnterButton === true && newFolderProcess.name.length > 0) {
            addFolder(newFolderProcess.name)
            cleanupNewFolderProcess()
        } else if (onPressEscapeButton === true) {
            cleanupNewFolderProcess()
        }
    }, [onPressEnterButton, onPressEscapeButton])

    return (
        <nav>
            <Navigation />
            <Folders />
            {newFolderProcess.inProcess && (
                <input 
                    ref={newFolderInput} 
                    value={newFolderProcess.name} 
                    onChange={(e) => {
                    e.persist()
                    setNewFolderProcess(prevState => ({...prevState, name: e.target.value.toUpperCase()}))}} 
                    onBlur={() => cleanupNewFolderProcess()}
                    className="new-folder-input">    
                </input>
            )}
            <div onClick={() => createNewFolder()} className="add-new-item"><i className="fas fa-plus"></i></div>
        </nav>
    )
}

export default Sidebar