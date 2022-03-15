class TemplatePhotographer {
    constructor(data, photos) {
        // Photographers
        this.id = data.id;
        this.name = data.name;
        this.portrait = data.portrait;
        this.city = data.city;
        this.tagline = data.tagline;
        this.price = data.price;
        // Medias
        this.photos = photos;
    }

    // Header DOM
    header() {
        let photographerHeaderTemplate = `<div class="photograph-header">
      <div>
        <h2>${this.name}</h2>
        <p class="location">${this.city}</p>
        <span>${this.tagline}</span>
      </div>
      <button class="contact_button" onclick="displayModal()">Contactez-moi</button>
      <img class="img-portrait" src="assets/images/Photographers/${this.portrait}" alt="Photographer ${this.name}">
    </div>`;

        return photographerHeaderTemplate;
    }

    // Media DOM
    media(media) {
      let photographerMediaTemplate = 
      `<article class="picture-container">${Factory.createMedia(media, this.name).display()}
        <div>
          <p>${media.title}</p>
          <p><span id="counter-like-${media.id}">${media.likes}</span> <button aria-label="Ajouter une mention j'aime" tabindex="0" class="${media.liked ? 'fa-solid' : 'fa-regular'} fa-heart like-icon" id="heart-like-${media.id}"></button></p>
        </div>
      </article>`;

      return photographerMediaTemplate;
    }

    // Lightbox DOM

    lightbox(picture) {
      let photographerLightboxTemplate = 
      `<div class="lightbox-container">
        ${Factory.createMedia(picture, this.name).display(true)}
      </div>
      <p class="lightbox-title">${picture.title}</p>`;

      return photographerLightboxTemplate;
    }

    // Form DOM
    form() {
        let formTemplate = `<div class="form-header-text"><h2>Contactez-moi</h2>
        <img class="outline" src="assets/icons/close.svg" onclick="closeModal(), keyPress()" tabindex="0" aria-label="Bouton fermer formulaire" />
        </div>
        <h2 class="form-title-name">${this.name}</h2>
        `;

        return formTemplate;
    }

    // Resume DOM
    resume() {
      let resumeTemplate = `<div><p><span id="totalLikes">${this.totalOfLikes()}</span> <i class="fas fa-heart"></i></p><p>${this.price}€ / jour</p></div>`;

      return resumeTemplate;
    }
    

    // Boucle par rapport au nombre de medias + filtre
    medias(filter) {
      let mediasTemplate = ""
      var photos = this.photos.sort(function(photoa, photob) {
        if(photoa[filter] > photob[filter]) {
          return filter == 'title' ? 1 : -1;
        } else {
          return filter == 'title' ? -1 : 1;
        }
      });
      photos.forEach(photo => {
        mediasTemplate += this.media(photo);
      });
      return mediasTemplate;
    }

    // Initialiser lightboxes
    initLightboxes(idLightbox) {
      var lightboxContainer = document.getElementById(idLightbox);
      var currentLightbox = null;
      this.photos.forEach(photo => {
        const image = document.getElementById(`media-${photo.id}`);
        const lightboxContent =  this.lightbox(photo);
        image.addEventListener("click", function() {
          lightboxContainer.innerHTML = lightboxContent;
          currentLightbox = photo;
        })
        image.addEventListener("keypress", function(e) {
          if(e.type == "keypress" && (e.key == "Enter" || e.key == " ")) {
            lightboxContainer.innerHTML = lightboxContent;
            currentLightbox = photo;
        }
        })
      })
      
      const previousButton = document.querySelector(".lightbox-prev");
      const nextButton = document.querySelector(".lightbox-next");
      var that = this;

      // Clic sur le bouton précédent
      previousButton.addEventListener("click", ()=> {
        const prevMedia = that.prevMedia(currentLightbox);
        const lightboxContent = that.lightbox(prevMedia);
        lightboxContainer.innerHTML = lightboxContent;
        currentLightbox = prevMedia;
      })

 

      // Clic sur le bouton suivant
      nextButton.addEventListener("click", ()=> {
        const nextMedia = that.nextMedia(currentLightbox);
        const lightboxContent = that.lightbox(nextMedia);
        lightboxContainer.innerHTML = lightboxContent;
        currentLightbox = nextMedia ;
      })

      // Clic sur le bouton précédent
      let clickEvent = new Event("click")
      document.addEventListener("keyup", (e)=> {
        if(e.key == 'ArrowRight') {
          previousButton.dispatchEvent(clickEvent);
        }
        if(e.key == 'ArrowLeft') {
          nextButton.dispatchEvent(clickEvent);
        }
        if(e.key == 'Escape') {
          closeLightbox();
        }
      })
    }

    // Calculer le prochain média
    nextMedia(media) {
      const mediaIndex = this.photos.findIndex(photo => photo.id == media.id);
      var nextIndex = mediaIndex + 1;
      if(nextIndex >= this.photos.length) {
        nextIndex = 0;
      }
      return this.photos[nextIndex];
    }

    // Calculer le média précédent
    prevMedia(media) {
      const mediaIndex = this.photos.findIndex(photo => photo.id == media.id);
      var prevIndex = mediaIndex - 1;
      if(prevIndex < 0) {
        prevIndex = this.photos.length -1;
      }
      return this.photos[prevIndex];
    }

    // Calcul ajout / supression de like
    initLikes() {
      var that = this;
      this.photos.forEach(function(photo) {
        const heart = document.getElementById(`heart-like-${photo.id}`);
        heart.addEventListener("click", ()=> {
          if(photo.hasOwnProperty('liked') && photo.liked) {
            photo.likes--;
            photo.liked = false;
            heart.classList.replace("fa-solid", "fa-regular");
          } else {
            photo.likes++;
            photo.liked = true;
            heart.classList.replace("fa-regular", "fa-solid");
          }
          that.updateDomLikes(photo);
        })
      })   
    }

    // Changement nombre like DOM
    updateDomLikes(photo) {
      const counter = document.getElementById(`counter-like-${photo.id}`);
      counter.innerHTML = photo.likes;
      var totalLikes = document.getElementById("totalLikes");
      totalLikes.innerHTML = this.totalOfLikes();
    }

    // Calcul nombre total like
    totalOfLikes() {
      /*var likes = this.photos.reduce(function(a, b){
        return a.likes + b.likes;
      }, 0);
      console.log(likes);*/
      var likes = 0;
      this.photos.forEach(function(photo) {
        likes = likes + photo.likes;
      })
      return likes;
      
    }

}