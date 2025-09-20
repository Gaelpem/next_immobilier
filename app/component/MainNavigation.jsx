"use client"; 

import React, { useState } from 'react';
import Heure from './Heure';
import  Link from "next/link";
import Contact from './Contact';

const MainNavigation = () => {
    const [showContact , setShowContact] = useState(false)


    function handleShowContact(){
         setShowContact(true)
    }

    function handleClose(){
        setShowContact(false)
    }

    return (
        <header>
            <h1>Shtib.</h1>
            <Heure/>
            <nav>
                <Link href = '/'>home</Link>
            </nav>
            <button onClick={handleShowContact}>Contact - </button>
            {showContact && <Contact onClose={handleClose} />}
            
        </header>
    );
};

export default MainNavigation;