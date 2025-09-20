import getBienId from "@/lib/biens"
import styles from "page.modules.css"

export default function BienId({params}){
    const {bienId} = params
    const bien =  getBienId(bienId); 

    return (
      <div>
               
    <section className={styles.imgDescription}>

<div className={styles.image}>

  <div className={classes.imgPrincipal}>
   <img src={bien.image}/>
  </div>
    
    <div className={classes.items}>
    <img src={bien.image1}  />
    <img src={bien.image2}  />
    <img src={bien.image3}  />
    </div>


 </div>

 <div className={classes.container}>
    
  <div className={classes.descriptions}>

     <h1 className={classes.description}>Descriptions</h1>
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae dolorem nihil excepturi aut suscipit deleniti, tempora quaerat in dolore facere error laboriosam.</p>

  </div>



  <div className={classes.prixLieu}>

   <div className={classes.lieu}>
     <h1>Lieu</h1>
     <p>{bien.location}</p>
   </div>

   <div className={classes.prix}>
     <h1>Prix</h1>
     <p>{bien.prix}</p>
   </div>

  </div>


  <div className={classes.detail}>
     <h1>Détails</h1>
     <p className={classes.detail}>{bien.detail}</p>
   </div>
  


 </div>
</section>

      </div>
    )
}