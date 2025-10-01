
import styles from './Home.module.css'
import BiensList from "./component/ BiensList";
import Footer from './component/Footer';


export default function Home() {

  return (

       <>
     
            <section className={styles.section1}>

            <h1>Seigfried Vigier.</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero molestiae, dolorum ipsam quam nam enim eos perferendis <span className={styles.decorationText}>facere saepe tenetur sunt cum vel excepturi voluptatum cumque. Earum eligendi beatae odit.</span></p>
           </section>

    
           <section className={styles.section2}>
        

          <div className={styles.imageWrapper}>

         <img src= "/img1.jpg" alt="image" width={1200} height={800}  />
         <h1>Studio, Paris</h1>
         <h3>75010 - rue des petites écuries </h3>
         </div>

       </section>

       <section className={styles.section3}> 
       <BiensList/>
        </section>

        <section className={styles.section4}>
       <Footer/>
        </section>
            </>
            
  );
}
