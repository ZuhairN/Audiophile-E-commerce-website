import { useReducer, useEffect } from 'react';

export default function useLocalStorageReducer(reducer, defaultVal, storageKey = 'Cart') {
    const [state, dispatch] = useReducer(reducer, defaultVal, () => {
        if (typeof window !== "undefined") return JSON.parse(window.localStorage.getItem(storageKey)) || defaultVal;
        return defaultVal
    });
    useEffect(() => window.localStorage.setItem(storageKey, JSON.stringify(state)), [storageKey, state]);
    return [state, dispatch];
}