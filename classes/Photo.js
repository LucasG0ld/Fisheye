class Photo {
    constructor(photo, name) {
      // Medias
      this.photo = photo;
      this.name = name
    }
    display() {
      return `<img class="pictures" aria-label="Photo ${this.photo.title}" id="media-${this.photo.id}" tabindex="0" src="assets/images/${this.name}/${this.photo.image}" alt="${this.photo.title}" onclick="openLightbox(event)" onkeypress="openLightbox(event)"></img>`;
    }
  }