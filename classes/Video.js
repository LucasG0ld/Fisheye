class Video {
    constructor(video, name) {
      // Medias
      this.video = video;
      this.name = name;
    }
    display(control = false) {
      var controlAttribute = "controls"
      if(control == false) {
        controlAttribute = "";
      }
      return `<video ${controlAttribute} class="pictures" aria-label="video ${this.video.title}" id="media-${this.video.id}" tabindex="0" onclick="openLightbox(event)" onkeypress="openLightbox(event)"><source src="assets/images/${this.name}/${this.video.video}" type="video/mp4"></video>`
    }
  }