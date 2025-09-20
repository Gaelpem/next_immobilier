const BIENS = 
[
    {
      d: 1,
      location: "Paris, France",
      prix : "1200€", 
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum eveniet ipsum dolorum deleniti quod commodi quos fugit dolor repellendus modi? Itaque ad dolorum eligendi architecto ratione illum aliquam. Incidunt, tempora!",
      detail : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum eveniet ipsum dolorum deleniti quod commodi quos fugit dolor repellendus modi? Itaque ad",
      image: "img/app1.jpg",
      image1: "img/app4.jpg",
      image2: "img/app6.jpg",
      image3: "img/app2.jpg"
  
    },
    {
      id: 2,
      location: "Nice, France",
      prix : "1500€", 
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum eveniet ipsum dolorum deleniti quod commodi quos fugit dolor repellendus modi? Itaque ad dolorum eligendi architecto ratione illum aliquam. Incidunt, tempora!",
      detail : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum eveniet ipsum dolorum deleniti quod commodi quos fugit dolor repellendus modi? Itaque ad",
      image: "img/app2.jpg",
      image1: "img/app6.jpg",
      image2: "img/app5.jpg",
      image3: "img/app1.jpg"
      
    },
    {
      id: 3,
      location: "Paris, France",
      prix: "2300€", 
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum eveniet ipsum dolorum deleniti quod commodi quos fugit dolor repellendus modi? Itaque ad dolorum eligendi architecto ratione illum aliquam. Incidunt, tempora!",
      detail : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum eveniet ipsum dolorum deleniti quod commodi quos fugit dolor repellendus modi? Itaque ad",
      image: "img/app5.jpg",
      image1: "img/app3.jpg",
      image2: "img/app5.jpg",
      image3: "img/app1.jpg"
    }
]

// creation une fonction d'exportation pour utiliser cette les BIEN aillieur
export default function  getBiens(){
    return BIENS ; 
}

export default function  getBienId(bienId){
    // on partourt tous les 
    return BIENS.find((bien)=> bien === bienId)
}