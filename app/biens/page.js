
import getBiens from "@/lib/biens"
import { NavLink } from "react-router-dom"

export default function Biens(){
    const biens =  getBiens(); 

     return(
        <ul>
            {biens.map((bien)=>(
                 <li key={bien.id} className={classes.items}>
                 <div className={classes.image}>
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
                    <NavLink>[voir plus...]</NavLink>
                 </div>
               </li>
            ))}
        </ul>
     )
}