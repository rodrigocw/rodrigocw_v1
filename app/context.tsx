"use client"

import { createContext, useContext, useEffect, useState } from 'react';
import { ReactNode } from 'react';

interface PersistData {
    themeColor: string
    openMenu: boolean
    isDark: boolean
}

interface AppContextProps {
    persist: PersistData
    setThemeColor: (theme: string) => void
    setOpenMenu: () => void
}

const AppContext = createContext({
    persist: {},
    setThemeColor: (theme: string) => { },
    setOpenMenu: () => { }
} as AppContextProps)

const keyLocalStorage = 'site-persist' //storedValues[key]

const getLocalStoragePersist = () => {
    const localStorageValue = getStoredValues()
    const isSmall = window.innerWidth < 768;
    const themeColor = localStorageValue["themeColor"] !== null ? localStorageValue["themeColor"] : "system"
    const openMenu = localStorageValue["openMenu"] !== null ? (localStorageValue["openMenu"] && !isSmall) : true
    const persist: PersistData = {
        themeColor: themeColor,
        openMenu: openMenu,
        isDark: themeColor !== "system" ? (themeColor === "dark" ? true : false) : window.matchMedia('(prefers-color-scheme: dark)').matches
    }
    return persist
}

const getPersist = () => {
    const localStoragePersist = getStoredValues();
    const isSmall = window.innerWidth < 768;
    if (localStoragePersist === null) {
        const persist: PersistData = {
            themeColor: 'system',
            openMenu: !isSmall,
            isDark: window.matchMedia('(prefers-color-scheme: dark)').matches
        };
        const dataToStore = {
            themeColor: persist.themeColor,
            openMenu: persist.openMenu
        };
        localStorage.setItem(keyLocalStorage, JSON.stringify(dataToStore))
        return persist;
    } else {
        const persist = getLocalStoragePersist()
        return persist
    }
};

const getStoredValues = () => {
    if (typeof window !== 'undefined' && window.localStorage) {
        const storedValues = localStorage.getItem(keyLocalStorage);
        if (storedValues) {
            return JSON.parse(storedValues);
        }
    }
    return null;
};

const getLocalStorageValue = (key: string) => {
    if (typeof window !== 'undefined' && window.localStorage) {
        const storedValues = getStoredValues();
        return storedValues[key];
    }
    return null;
};

const setLocalStorageValue = (key: keyof PersistData, value: any) => {
    if (typeof window !== 'undefined' && window.localStorage) {
        let storedValues = getStoredValues();
        if (storedValues) {
            storedValues[key] = value;
            localStorage.setItem(keyLocalStorage, JSON.stringify(storedValues));
        }
    }
};

export function AppProvider({ children }: { children: ReactNode }) {
    const [persist, setPersist] = useState({} as PersistData)
    
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const tempPersist = getPersist()
            setPersist(tempPersist)
            document.documentElement.setAttribute(
                'data-theme',
                tempPersist.isDark ? 'dark' : 'light'
            )
        }
    }, []);

    if (JSON.stringify(persist) === '{}') {
        return null
    }

    const setThemeColor = (theme: string) => {
        setLocalStorageValue("themeColor", theme)
        const tempPersist = getLocalStoragePersist()
        setPersist(tempPersist)
        document.documentElement.setAttribute(
            'data-theme',
            tempPersist.isDark ? 'dark' : 'light'
        )
    }

    const setOpenMenu = () => {
        const openMenu = persist.openMenu
        setLocalStorageValue("openMenu", !openMenu)
        const tempPersist = getLocalStoragePersist()
        setPersist(tempPersist)
    }

    return (
        <AppContext.Provider
            value={{
                persist,
                setThemeColor: setThemeColor,
                setOpenMenu: setOpenMenu
            }}
        >
            {children}
        </AppContext.Provider>
    );
}

export function useAppContext() {
    return useContext(AppContext);
}