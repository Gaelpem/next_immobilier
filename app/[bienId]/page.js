"use client";

import { useState, use } from "react"; // Importer 'use'
import { getBienId } from "@/lib/biens";
import styles from "./page.module.css";
import Footer from "../component/Footer";

export default function BienId({ params }) {
  //  Unwrapper la Promise params avec React.use()
  const { bienId } = use(params);
  const bien = getBienId(bienId);

  //  Regrouper toutes les images dans un tableau
  const images = [bien.image, bien.image1, bien.image2, bien.image3];

  //  Index de l'image affichée
  const [index, setIndex] = useState(0);


  return (
    <> 
    <section className={styles.imgDescription}>
      {/*  Zone diapo  */}
      <div className={styles.image}>
        {/* Image principale */}
        <div className={styles.imgPrincipal}>
          <img src={images[index]} alt={`Image ${index + 1}`} />
        </div>

        {/* Petite image cliquable */}
        <div className={styles.items}>

          {images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`miniature ${i + 1}`}
              onClick={() => setIndex(i)}
              style={{
         cursor: "pointer",
         transition: "all 0.3s ease",
         transform: index === i ? "scale(1.05)" : "scale(1)",
         opacity: index === i ? 1 : 0.7,
         filter: index === i ? "brightness(1)" : "brightness(0.9)",
}}
            />
          ))}
        </div>
      </div>

      {/*  Zone description  */}
      <div className={styles.container}>
        <div className={styles.descriptions}>
          <h1 className={styles.description}>Descriptions</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae dolorem
            nihil excepturi aut suscipit deleniti, tempora quaerat in dolore
            facere error laboriosam.
          </p>
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
    <Footer/>
    </>
  );
}