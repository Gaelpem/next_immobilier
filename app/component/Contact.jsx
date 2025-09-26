"use client"
import React, { useState } from 'react';
import classes from "./Contact.module.css"

const Contact = ({onClose}) => {

     const [error, setError]= useState(false)

      function submitAction(formData){
           
        const credentials = {
             prenom : formData.get('surname'), 
             nom : formData.get('name'),
             email : formData.get('email')
        }

        if(!credentials.prenom || !credentials.nom || !credentials.email ){
            
      return setError('Vous devez remplir tous les choix')
        }
    
        setError("")// si tout est remplie ;
      }

    return (

         <section className={classes.contact}>

           <div className={classes.btnEspace}>
             <div></div>
             <button onClick = {onClose}>X</button>
           </div>
           <h1>Contact-</h1>
           <h2>Une demande particulère?<span className={classes.changeColor}> Parlons-en.</span></h2>
        <form action={submitAction} className={classes.inputContainer}>
              <label htmlFor="prenom">Prenom</label>
              <input type="text" name = "surname" />
              
              <label htmlFor="nom">Nom</label>
              <input type="text" name = "name" />

              <label htmlFor="email">Email</label>
              <input type="text" name = "email" />
              <div className={classes.btnContainer}>
              <div></div>
           
              <button>Envoyer</button>
              </div>
              {error && <p style = {{color : "red"}}>{error}</p>}



        </form>
        </section>
    );
   
};

export default Contact;