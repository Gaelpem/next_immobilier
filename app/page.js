import  { getBiens } from "@/lib/biens"
import Link from "next/link"
export default function Home() {
    const biens = getBiens()
  return (
            <div>
           <h1>| Seigfried Vigier |</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero molestiae, dolorum ipsam quam nam enim eos perferendis facere saepe tenetur sunt cum vel excepturi voluptatum cumque. Earum eligendi beatae odit.</p>
            <ul>
            {biens.map((bien)=>(
                 <li key={bien.id} >
                 <div>
                   <img src={bien.image} alt={bien.location} />
                 </div>
     
                 <div>
                   
                  <div>
                     <h1>Localisation</h1>
                     <h2>{bien.location}</h2>
                   </div>
     
                   <div >
                     {bien.description}
                   </div>
                    <Link href={`/${bien.id}`}>[voir plus...]</Link>
                 </div>
               </li>
            ))}
        </ul>
            </div>
            
  );
}
