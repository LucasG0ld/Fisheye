

function displayModal() {
    const modal = document.getElementById("contact_modal");
	modal.style.display = "block";
}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
}

function keyPress (e) {
    if(e.key == "Escape") {
        closeModal();
    }
}

document.getElementById("photographer-form").addEventListener("submit", function validateForm(e) {
    var photographerForm = document.getElementById('photographer-form')
    var textPrenom = document.getElementById('text-prenom')
    var textNom = document.getElementById('text-nom')
    var textEmail= document.getElementById('text-email')
    var textMessage = document.getElementById('text-message')

    var firstName = document.getElementById('first');
    var lastName = document.getElementById('last');
    var email = document.getElementById('email');
    var message = document.getElementById('email');

    var regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var regexName = /^[a-zA-Z ]{2,30}$/;

    // Firstname Verifiaction
    if (!firstName.value.match(regexName)) {
        textPrenom.classList.add("dp-block");
        textPrenom.classList.remove("dp-none");
        e.preventDefault();
        return false;
    } else {
        textPrenom.classList.add("dp-none");
        textPrenom.classList.remove("dp-block")
        console.log("Prénom : " + firstName.value);
    }

    //Name Verifiaction
    if (!lastName.value.match(regexName)) {
        textNom.classList.add("dp-block");
        textNom.classList.remove("dp-none");
        e.preventDefault();
        return false;
    } else {
        textNom.classList.add("dp-none");
        textNom.classList.remove("dp-block")
        console.log("Nom : " + lastName.value);
    }

    // Email Verifiaction
    if (!email.value.match(regexEmail)) {
        textEmail.classList.add("dp-block");
        textEmail.classList.remove("dp-none");
        e.preventDefault();
        return false;
    } else {
        textEmail.classList.add("dp-none");
        textEmail.classList.remove("dp-block")
        console.log("Email : " + email.value);
    }

    // Message Verifiaction
    if (message.value == "") {
        textMessage.classList.add("dp-block");
        textMessage.classList.remove("dp-none");
        e.preventDefault();
        return false;
    } else {
        textMessage.classList.add("dp-none");
        textMessage.classList.remove("dp-block")
    }

     // Submit Verifiaction and show thanks pop up
    if (photographerForm.submit) {
        e.preventDefault();
        photographerForm.reset();
        return false;
    }
});