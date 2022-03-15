function photographerFactory(data) {
    const { name, portrait, city, tagline, price } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        let homePageTemplate = `
        <article>
            <img src="${portrait}">
            <h2>${name}</h2>
            <p class="location">${city}</p>
            <p class="tagline">${tagline}</p>
            <p class="price">${price}/jour</p>
        </article>`;
        console.log(homePageTemplate);
        /*const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        // Ville
        const cityText = document.createElement( 'p' );
        cityText.classList.add('location')
        cityText.textContent = city;
        // Tagline
        const taglineText = document.createElement( 'p' );
        taglineText.classList.add('tagline')
        taglineText.textContent = tagline;
        // Price
        const priceText = document.createElement( 'p' );
        priceText.classList.add('price')
        priceText.textContent = price + "€/jour";
        // Affichage
        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(cityText);
        article.appendChild(taglineText);
        article.appendChild(priceText);
        return (article);*/
    }
    return { name, picture, city, getUserCardDOM }
}