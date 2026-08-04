
import { photos } from "./data.js";


const gallery = document.getElementById("gallery");

photos.forEach(photo => {

    gallery.innerHTML += `

    <figure class="photo-card">

        <img
            src="../images/landscape/${photo.file}"
            alt="${photo.title}">

        <figcaption>

            <h3>${photo.title}</h3>

            <p>${photo.location}</p>

            <p>${photo.camera}</p>

        </figcaption>

    </figure>

`;

});

const lightbox =
    document.getElementById("lightbox");

const lightboxImage =
    document.getElementById("lightbox-image");

const previousButton =
    document.getElementById("previous");

const nextButton =
    document.getElementById("next");

const closeButton =
    document.getElementById("close");

const lightboxTitle =
    document.getElementById("lightbox-title");

let currentPhoto = 0;

const galleryImages =
    document.querySelectorAll(".photo-card img");

const imageCounter =
    document.getElementById("image-counter");

galleryImages.forEach((image, index) => {

    image.addEventListener("click", () => {

        currentPhoto = index;

        showPhoto();

    });

});

import { showPhoto } from "./lightbox.js";



closeButton.addEventListener("click", () => {

    lightbox.classList.remove("open");

});

nextButton.addEventListener("click", () => {

    currentPhoto++;

    if (currentPhoto >= photos.length) {

        currentPhoto = 0;

    }

    showPhoto();

});

previousButton.addEventListener("click", () => {

    currentPhoto--;

    if (currentPhoto < 0) {

        currentPhoto = photos.length - 1;

    }

    showPhoto();

});

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        lightbox.classList.remove("open");

    }

    if (event.key === "ArrowRight") {

        nextButton.click();

    }

    if (event.key === "ArrowLeft") {

        previousButton.click();

    }

});

lightbox.addEventListener("click", (event) => {

    if (event.target === lightbox) {

        lightbox.classList.remove("open");

    }

});