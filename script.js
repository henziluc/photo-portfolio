const galleryImages = document.querySelectorAll(".gallery-grid img");

const lightbox = document.getElementById("lightbox");

const lightboxImage = document.getElementById("lightbox-image");

const closeButton = document.getElementById("close");

galleryImages.forEach(function (image) {

    image.addEventListener("click", function () {

        lightbox.style.display = "flex";

        lightboxImage.src = image.src;

    });

})

closeButton.addEventListener("click", function () {

    lightbox.style.display = "none";

});

lightbox.addEventListener("click", function (event) {

    if (event.target === lightbox) {

        lightbox.style.display = "none";

    }

});

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

        lightbox.style.display = "none";

    }

});

