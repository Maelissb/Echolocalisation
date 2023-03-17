// // Récupérer l'élément h1
// const h1 = document.getElementById('slider-h1');

// // Ajouter un écouteur d'événements sur l'élément h1 pour détecter le clic
// h1.addEventListener('click', function() {
//   // Ajouter la classe "typing" à l'élément h1 pour déclencher l'animation
//   h1.classList.add('typing');

//   // Supprimer la classe "typing" de l'élément h1 après 2 secondes
//   setTimeout(function() {
//     h1.classList.remove('typing');
//   }, 2000);
// });


// // On récupère les éléments h1 et h2 du DOM
// const sliderH1 = document.getElementById("slider-h1");
// const sliderH2 = document.getElementById("slider-h2");


// // On définit les animations à appliquer sur chaque élément
// const animations = [
//   { transform: "translateY(0)", opacity: 1 },
//   { transform: "translateY(-50px)", opacity: 0 },
// ];

// // On définit la durée de chaque animation en millisecondes
// const animationDuration = 1000;

// // On définit la durée d'attente entre chaque animation en millisecondes
// const animationDelay = 2000;

// // On définit une fonction pour lancer les animations en boucle
// function animate() {
//     console.log(animate);
//   // On lance l'animation sur le premier élément h1
//   sliderH1.animate(animations, animationDuration);
  
//   // On attend la fin de l'animation avant de lancer celle du deuxième élément h2
//   setTimeout(() => {
//     sliderH2.animate(animations, animationDuration);
//   }, animationDelay);
  
//   // On attend la fin de la deuxième animation avant de relancer la fonction
//   setTimeout(animate, animationDuration + animationDelay);
// }

// // On lance la première animation
// animate();


// const h1 = document.getElementById('slider-h1');
// const h2 = document.getElementById('slider-h2');

// // Définition des durées d'animation
// const duration = 1000; // Durée de l'animation (en millisecondes)

// // Fonction de transition des éléments
// function popUpElement(element) {
//   element.style.opacity = 0;
//   element.style.transform = 'scale(0.5)';
//   element.style.transition = `transform ${duration / 2}ms ease-in-out, opacity ${duration / 2}ms ease-in-out`;
//   setTimeout(() => {
//     element.style.opacity = 1;
//     element.style.transform = 'scale(1)';
//   }, duration / 2);
// }

// // Appel de la fonction de pop-up pour chaque élément
// popUpElement(h1);
// popUpElement(h2);


  // Récupération des éléments HTML
  const h1 = document.getElementById('slider-h1');
  const h2 = document.getElementById('slider-h2');

  // Définition des durées d'animation
  const duration = 1000; // Durée de l'animation (en millisecondes)
  const delay = 2000; // Délai entre chaque itération (en millisecondes)

  // Fonction de transition des éléments
  function popUpElement(element) {
    element.style.opacity = 0;
    element.style.transform = 'scale(0.5)';
    element.style.transition = `transform ${duration / 2}ms ease-in-out, opacity ${duration / 2}ms ease-in-out`;
    setTimeout(() => {
      element.style.opacity = 1;
      element.style.transform = 'scale(1)';
      setTimeout(() => popUpElement(element), delay);
    }, duration / 2);
  }

  // Appel initial de la fonction de pop-up pour chaque élément
  popUpElement(h1);
  popUpElement(h2);