import  { getBienId } from "@/lib/biens"
import styles from './page.module.css'

export default function BienId({params}){
    const {bienId} = params
    const bien =  getBienId(bienId); 

    return (
      <section className={styles.imgDescription}>

         <div className={styles.image}>

           <div className={styles.imgPrincipal}>
            <img src={bien.image}/>
           </div>
             
             <div className={styles.items}>
             <img src={bien.image1}  />
             <img src={bien.image2}  />
             <img src={bien.image3}  />
             </div>


          </div>

          <div className={styles.container}>
             
           <div className={styles.descriptions}>

              <h1 className={styles.description}>Descriptions</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae dolorem nihil excepturi aut suscipit deleniti, tempora quaerat in dolore facere error laboriosam.</p>

           </div>



           <div className={styles.prixLieu}>

            <div className={styles.lieu}>
              <h1>Lieu</h1>
              <p>{bien.location}</p>
            </div>

            <div className={styles.prix}>
              <h1>Prix</h1>
              <p>{bien.prix}</p>
            </div>

           </div>


           <div className={styles.detail}>
              <h1>Détails</h1>
              <p className={styles.detail}>{bien.detail}</p>
            </div>
           


          </div>
        </section>
    );
    
}