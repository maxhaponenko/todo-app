import { useState, useEffect } from 'react';

// Hook
export default function useKeyPress(targetKey) {
    const [keyPressed, setKeyPressed] = useState(false);
    
    function downHandler({ key }) {
        console.log(key)
        if (key === targetKey) {
            setKeyPressed(true);
        }
    }
  
    const upHandler = ({ key }) => {
        if (key === targetKey) {
            setKeyPressed(false);
        }
    };
  
    // Add event listeners
    useEffect(() => {
        window.addEventListener('keydown', downHandler);
        window.addEventListener('keyup', upHandler);
        // Remove event listeners on cleanup
        return () => {
            window.removeEventListener('keydown', downHandler);
            window.removeEventListener('keyup', upHandler);
        };
    }, []);
  
    return keyPressed;
  }