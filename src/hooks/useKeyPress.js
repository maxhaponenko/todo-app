import { useState, useEffect } from 'react';

// Hook
export default function useKeyPress(targetKey) {
    const [keyPressed, setKeyPressed] = useState(false);
  
    // Add event listeners
    useEffect(() => {

        function downHandler({ key }) {
            console.log(key)
            if (key === targetKey) {
                setKeyPressed(true);
            }
        }
      
        function upHandler({ key }) {
            if (key === targetKey) {
                setKeyPressed(false);
            }
        };

        window.addEventListener('keydown', downHandler);
        window.addEventListener('keyup', upHandler);
        // Remove event listeners on cleanup
        return () => {
            window.removeEventListener('keydown', downHandler);
            window.removeEventListener('keyup', upHandler);
        };
    }, [targetKey]);
  
    return keyPressed;
  }