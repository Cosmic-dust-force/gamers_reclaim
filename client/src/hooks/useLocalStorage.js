import { useState } from "react";

function getInitialState(key){
    try {
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : null;
    } catch (error) {
        console.error(error);
    }

    return null;
}

function useLocalStorage(key) {
    const [storedValue, setStoredValue] = useState(getInitialState(key));
    
    function setValue(value){
        try {
            window.localStorage.setItem(key, JSON.stringify(value));
            setStoredValue(value);
        } catch (error) {
            console.error(error);
        }
    }

    return [storedValue, setValue];
}


export default useLocalStorage;