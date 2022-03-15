class Photographer {
    constructor(data) {
        this.id = data.id;
        this.name = data.name;
        this.portrait = data.portrait;
        this.city = data.city;
        this.tagline = data.tagline;
        this.price = data.price;
      } 

      getUserCardDOM() {
        let homePageTemplate = `
        <a href="photographer.html?id=${this.id}">
        <article data-id="${this.id}" data-class="photographer">
            <img src="assets/images/Photographers/${this.portrait}" alt="Photographer ${this.name}">
            <h2>${this.name}</h2>
            <p class="location">${this.city}</p>
            <p class="tagline">${this.tagline}</p>
            <p class="price">${this.price}€/jour</p>
        </article>
        </a>`;
        return homePageTemplate;
    }
}