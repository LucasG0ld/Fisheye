class Factory {
    static createMedia(media, name) {
      if (media.hasOwnProperty('image')) {
        return new Photo(media, name);
      } else {
        return new Video(media, name);
      }
    }
  }