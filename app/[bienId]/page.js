import  { getBienId } from "@/lib/biens"

export default function BienId({params}){
    const {bienId} = params
    const bien =  getBienId(bienId); 

    return (
      <div>
               
    <section>

<div >

  <div >
   <img src={bien.image}/>
  </div>
    
    <div >
    <img src={bien.image1}  />
    <img src={bien.image2}  />
    <img src={bien.image3}  />
    </div>


 </div>

 <div >
    
  <div >

     <h1 >Descriptions</h1>
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae dolorem nihil excepturi aut suscipit deleniti, tempora quaerat in dolore facere error laboriosam.</p>

  </div>



  <div>

   <div>
     <h1>Lieu</h1>
     <p>{bien.location}</p>
   </div>

   <div>
     <h1>Prix</h1>
     <p>{bien.prix}</p>
   </div>

  </div>


  <div>
     <h1>Détails</h1>
     <p>{bien.detail}</p>
   </div>
  


 </div>
</section>

      </div>
    )
}