
"use client"
import React, { useEffect, useState } from 'react';


const Heure = () => {
   const [time, setTime] = useState({
    hour : 0, 
    minute:0, 
    seconde:0
   })

// function qui recupere l'heure actuelle  et va le mettre à jour grace setTime
    function  handleHour(){
       const date  =  new Date(); // recupere l'heure actulle 

       let h = date.getHours(); 
       let m = date.getMinutes();
       let s = date.getSeconds(); 

       // mise à jour de l'état 
       setTime({
        hour : h, 
        minute: m, 
        seconde:s
       })

   }

   let ht  = time.hour
   let mt = time.minute
   let st = time.seconde

  // Formatage pour ajouter un 0 devant si inférieur à 10
    ht = ht<10 ? "0" + ht : ht; 
    mt = mt<10 ? "0" + mt : mt; 
    st = st<10 ? "0" + st : st; 

  // Chaîne finale affichée dans le JSX
     
  const afficheHeur = `${ht} : ${mt} : ${st}`

  useEffect(()=>{
      handleHour(); // on affiche l'heure une 1ere fois 
      const timer = setInterval(handleHour,1000)// on reactualise chaque seconse
      
    // Nettoyage : on supprime l'intervalle si le composant est démonté
      return ()=> clearInterval(timer)
  }, [])
  
   
    return (
        <div>
            <h4>{afficheHeur} -  Paris,fr</h4>
        </div>
    );
};

export default Heure;