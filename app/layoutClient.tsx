"use client"

import { AppProvider } from "./context";
import { useState, useEffect } from "react";

export default function RootLayoutClient({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
        setIsDarkMode(prefersDarkScheme);

        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

        const updateTheme = () => {
            setIsDarkMode(mediaQuery.matches);
        };

        mediaQuery.addEventListener('change', updateTheme);

        return () => mediaQuery.removeEventListener('change', updateTheme);
    }, []);

    return (
        <div className={isDarkMode ? 'dark' : ''}>
            <AppProvider>
                {children}
            </AppProvider>
        </div>
    );
}