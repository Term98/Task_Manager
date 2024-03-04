"use client"
import React, { useEffect, useState } from 'react'
import GlobalProvider from '../Context/globalProvider';
import { Toaster } from 'react-hot-toast';
interface Props {
    children: React.ReactNode;
}


function ContextProvider({ children }: Props) {
    const [isReady, setIsReady] = useState(false)
    useEffect(() => {
        setTimeout(() => {
            setIsReady(true);
        }, 150)
    }, []);

    if (!isReady) {
        return (
            <div className="w-full h-full flex items-center justify-center" >
                <span className="loader"></span>
            </div>
        );
    }

    return <GlobalProvider >
        <Toaster />
        {children}
    </GlobalProvider>
}

export default ContextProvider