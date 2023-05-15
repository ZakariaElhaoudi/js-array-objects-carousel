/*Adesso rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente servendoci dell’array fornito e un semplice ciclo for che concatena un template literal. Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile. Al termine di questa fase ci ritroveremo con lo stesso slider stilato nella milestone 1, ma costruito dinamicamente attraverso JavaScript.
Al click dell’utente sulle frecce, il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente.*/

// variabili globali 
 const topArrow = document.querySelector('.top-arrow')
 const bottomArrow = document.querySelector('.bottom-arrow')
 const elContainer =document.getElementById("list-item")
 const imgOpacity = document.getElementById("thumbnails")
 let immagineAttiva = 0;
// dati dell’array 
const immagini = [
  {
      image: 'img/01.webp',
      title: "Marvel\\'s Spiderman Miles Morale",
      text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
  }, {
      image: 'img/02.webp',
      title: 'Ratchet & Clank: Rift Apart',
      text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
  }, {
      image: 'img/03.webp',
      title: 'Fortnite',
      text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
  }, {
      image: 'img/04.webp',
      title: 'Stray',
      text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
  }, {
      image: 'img/05.webp',
      title: "Marvel's Avengers",
      text: "Marvel\\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
  }
];
  console.log(immagini);
  
// ciclo creazione div 
for (let i = 0; i < immagini.length; i++) {
  const datiImmagine = immagini[i];
  console.log(datiImmagine.image, datiImmagine.title, datiImmagine.text);
  
  // Stampare le stesse informazioni su DOM 
  elContainer.innerHTML += `<div class ="square">  
                          <img src="${datiImmagine.image}" alt="immagine">
                          <div class ="dati"><h2>${datiImmagine.title}</h2> ${datiImmagine.text}</div>
                          </div>`

    const  imgThumbnails  = `<div class="img-thumbnails opacity "><img src="${datiImmagine.image}"></div>`;
    imgOpacity.innerHTML +=  imgThumbnails;
}


// Nascondi tutte le immagini, tranne la prima
const items = elContainer.querySelectorAll('.square');
items[immagineAttiva].classList.add('active');  

// opacizza tutte le miniature, tranne la prima
const imgThumbnails = imgOpacity.querySelectorAll('.img-thumbnails');
imgThumbnails[immagineAttiva].classList.add('active');
        
console.log(imgThumbnails,imgOpacity);
/*Al click dell’utente sulle frecce, il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente.*/
  topArrow.addEventListener('click', topButton)
     
  
  function topButton() { 
            
      //const items = elContainer.querySelectorAll('.square');
      items[immagineAttiva].classList.remove('active');
      imgThumbnails[immagineAttiva].classList.remove('active');
        
      immagineAttiva++;
        
      if (immagineAttiva >= immagini.length) {
        immagineAttiva = 0;
      }
      items[immagineAttiva].classList.add('active');
      imgThumbnails[immagineAttiva].classList.add('active');
  };

  bottomArrow.addEventListener('click', bottomButton)
  
  function bottomButton() { 
  
    items[immagineAttiva].classList.remove('active');
    imgThumbnails[immagineAttiva].classList.remove('active');
      
    immagineAttiva--;
      
    if (immagineAttiva < 0) {
      immagineAttiva = immagini.length -1 ;
    }
     
    items[immagineAttiva].classList.add('active');
    imgThumbnails[immagineAttiva].classList.add('active');
 };