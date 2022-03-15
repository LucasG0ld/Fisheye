function openLightbox(e) {
    if(e.type == "keypress" && !(e.key == "Enter" || e.key == " ")) {
        return;
    }
    var lightbox = document.getElementById("lightbox");
    lightbox.classList.add("display-block")
    lightbox.classList.remove("display-none")
    
}

function closeLightbox() {
    var lightbox = document.getElementById("lightbox");
    lightbox.classList.remove("display-block")
    lightbox.classList.add("display-none")
}