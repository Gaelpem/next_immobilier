import React from 'react';
import classes from './Footer.module.css';
import Link from 'next/link'


const Footer = () => {
    return (
        <footer className={classes.containerFooter}>

           <h1 className={classes.logo}>Shtib.</h1>

           <nav><Link href = "/" className={classes.linker}>home</Link></nav> 

           <h1>©2025-Seigfried Vigier</h1>
        </footer>
    );
};

export default Footer;