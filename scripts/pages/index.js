async function getPhotographers() {
        // Penser à remplacer par les données récupérées dans le json
        const photographers = await fetch('./data/photographers.json')
		.then((res) => res.json())
		.catch((err) => console.log("There was an error", err));
            
        // et bien retourner le tableau photographers seulement une fois
        console.log(photographers);
        return (photographers);
    };

async function init() {
    const photographersSection = document.querySelector(".photographer_section");
    const { photographers } = await getPhotographers();
    console.log(photographers)

    photographers.forEach(photographerJson => {
        const photographer = new Photographer(photographerJson)      // Object.assign(new Photographer, photographerJson);
        console.log(photographer);
        console.log(photographersSection);
        const userCardDOM = photographer.getUserCardDOM();
        photographersSection.innerHTML += (userCardDOM);
    });

}

init();

    


    