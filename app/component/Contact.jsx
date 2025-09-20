"use client"

import React, { useState } from 'react';

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

         <section >
           <div>

             <div></div>
             <button onClick = {onClose}>Close</button>
           </div>
        <form action={submitAction}>
              <label htmlFor="prenom">Prenom</label>
              <input type="text" name = "surname" />
              
              <label htmlFor="nom">Nom</label>
              <input type="text" name = "name" />

              <label htmlFor="email">Email</label>
              <input type="text" name = "email" />
              
              <button>Envoyer</button>
              {error && <p style = {{color : "red"}}>{error}</p>}
        </form>
        </section>
    );
   
};

export default Contact;