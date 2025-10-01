"use client"

import React, { useState } from 'react';
import Hamburger from 'hamburger-react';
import classes from './Hamburger.module.css';
import {motion} from "framer-motion"
import Link  from 'next/link';


const HamburgerComponent = () => {
    const [open , setOpen] = useState(false)
    return (
        <>
    

            <Hamburger
            size={25}
            toggled={open}
            toggle={setOpen}/>
    

        {open && <motion.div 
        className= {classes.burgerContact}
        initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ 
              type: 'spring', 
              damping: 25, 
              stiffness: 200 
          }}
          onClick={(e) => e.stopPropagation()}>
          <header className={classes.header}
          
          >
          <h1 className={classes.logo}>Shtib.</h1>
          <Hamburger
          className={classes.closeHamburger} 
            size={25}
            toggled={open}
            toggle={setOpen}/>
          </header>
    
            <main className={classes.list}>
         <Link href = "/" onClick={()=> setOpen(false)} className={classes.homeLink}>home</Link>
            </main>
        </motion.div>}
        </>
    );
};

export default HamburgerComponent;