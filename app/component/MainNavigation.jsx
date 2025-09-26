"use client"; 

import React, { useState } from 'react';
import Heure from './Heure';
import  Link from "next/link";
import Contact from './Contact';
import classes from './MainNavigation.module.css'
const MainNavigation = () => {
    const [showContact , setShowContact] = useState(false)


    function handleShowContact(){
         setShowContact(true)
    }

    function handleClose(){
        setShowContact(false)
    }

    return (
        <header className={classes.header}>
            <h1 className={classes.logo}>Shtib.</h1>
            <Heure/>
            <nav>
                <Link href = '/'  className={classes.link}>home</Link>
            </nav>
            <button className = {classes.btn}  onClick={handleShowContact}>Contact - </button>
            {showContact && <Contact onClose={handleClose} />}
            
        </header>
    );
};

export default MainNavigation;