//Mettre le code JavaScript lié à la page photographer.html

async function getPhotographers() {
    // Penser à remplacer par les données récupérées dans le json
    const photographers = await fetch('./data/photographers.json')
    .then((res) => res.json())
    .catch((err) => console.log("There was an error", err));
        
    // et bien retourner le tableau photographers seulement une fois
    return (photographers);
};

async function init() {
    // Variables
        // DOM HMTL
    const templateHeader = document.querySelector("#photograph_header");
    const templateMedia = document.querySelector("#photograph_media");
    const templateLightbox = document.querySelector("#lightbox");
    const templateForm = document.querySelector("#form-header");
    const templateResume = document.querySelector("#resume_likes");
        // Objets JSON
    const { photographers, media } = await getPhotographers();
        // Id photographer -> Lien
    const idPage = window.location.search.split('id=')[1];
        // Filtre trouver id photographer = id lien
    const photographerById = photographers.filter(photographer=>photographer.id == idPage)[0];
        // Filtre trouver id media = id lien
    const mediasById = media.filter(element=>element.photographerId == idPage);
        // Instancier un nouveau template de photographer
    const photographer = new TemplatePhotographer(photographerById, mediasById)
    const userHeaderDOM = photographer.header();
    const filtre = document.getElementById('filtre');
    var filter = filtre.value;
    var userMediaDOM = photographer.medias(filter);
    var userFormDOM = photographer.form();
    var userResumeDOM = photographer.resume();
    
    //const userLightboxDOM = photographer.lightbox();
    // Afficher le contenu de la classe
    templateHeader.innerHTML += (userHeaderDOM);
    templateMedia.innerHTML += (userMediaDOM);
    templateForm.innerHTML += (userFormDOM);
    templateResume.innerHTML += (userResumeDOM);
    
    // Initialiser lightboxes
    const idLightbox = "lightbox-content";
    photographer.initLightboxes(idLightbox);

    // Initialiser like
    photographer.initLikes();
    
    // Changement de valeur du filtre
    filtre.addEventListener('change', function() {
        filter = filtre.value;
        userMediaDOM = photographer.medias(filter);
        templateMedia.innerHTML = userMediaDOM;
        // Initialiser like après filtre
        photographer.initLikes();
        // Initialiser Lightboxes après filtre
        photographer.initLightboxes(idLightbox);
    })

}

init();