
import { getBiens } from '@/lib/biens';
import React from 'react';
import Link from 'next/link';
import classes from './BiensList.module.css'

const  BiensList = () => {
    const biens = getBiens() 
    return (
       
              <ul className={classes.bienContainer}>
             
             {biens.map((bien)=>(
 
                  <li key={bien.id} className={classes.items} >
 
                  <div  className={classes.image}>
                    <img src={bien.image} alt={bien.location} />
                  </div>
      
                  <div className={classes.localisationDescrip}>
                    
                   <div className={classes.localisation}>
                      <h1>Localisation</h1>
                      <h2>{bien.location}</h2>
                    </div>
      
                    <div className={classes.description}>
                      {bien.description}
                    </div>
                    
                     <Link href={`/${bien.id}`} className={classes.btn}>[voir plus...]</Link>
                  </div>
                </li>
             ))}
         </ul>
    
    );
};

export default  BiensList;