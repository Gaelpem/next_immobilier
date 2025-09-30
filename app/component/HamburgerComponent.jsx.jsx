"use client"

import React, { useState } from 'react';
import Hamburger from 'hamburger-react';
import classes from './Hamburger.module.css';
import {motion} from "framer-motion"

const HamburgerComponent = () => {
    const [open , setOpen] = useState(false)
    return (
        <>
       
        <div  className={classes.hamburgerWrapper}>
            <Hamburger
            size={25}
            toggled={open}
            toggle={setOpen}/>
        </div>

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

            
        </motion.div>}
        </>
    );
};

export default HamburgerComponent;