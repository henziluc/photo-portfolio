// ======================
// DOM Elements
// ======================

const lightbox =
    document.getElementById("lightbox");

const lightboxImage =
    document.getElementById("lightbox-image");

const lightboxTitle =
    document.getElementById("lightbox-title");

const imageCounter =
    document.getElementById("image-counter");

const previousButton =
    document.getElementById("previous");

const nextButton =
    document.getElementById("next");

const closeButton =
    document.getElementById("close");


// ======================
// Variables
// ======================

let currentPhotos = [];

let currentPhoto = 0;


// ======================
// Set Photos
// ======================

export function setLightboxPhotos(photos) {

    currentPhotos = photos;

}


// ======================
// Open Photo
// ======================

export function openLightbox(index) {

    currentPhoto = index;

    showPhoto();

}


// ======================
// Show Photo
// ======================

function showPhoto() {

    const photo =
        currentPhotos[currentPhoto];


    lightbox.classList.add("open");


    lightboxImage.src =
        "../images/landscape/" + photo.file;


    lightboxTitle.textContent =
        photo.title;


    imageCounter.textContent =
        `${currentPhoto + 1} / ${currentPhotos.length}`;

}


// ======================
// Close
// ======================

closeButton.addEventListener("click", () => {

    lightbox.classList.remove("open");

});


// ======================
// Background Click
// ======================

lightbox.addEventListener("click", (event) => {

    if (event.target === lightbox) {

        lightbox.classList.remove("open");

    }

});


// ======================
// Next
// ======================

nextButton.addEventListener("click", () => {

    currentPhoto++;


    if (currentPhoto >= currentPhotos.length) {

        currentPhoto = 0;

    }


    showPhoto();

});


// ======================
// Previous
// ======================

previousButton.addEventListener("click", () => {

    currentPhoto--;


    if (currentPhoto < 0) {

        currentPhoto =
            currentPhotos.length - 1;

    }


    showPhoto();

});


// ======================
// Keyboard
// ======================

document.addEventListener("keydown", (event) => {

    if (!lightbox.classList.contains("open")) {

        return;

    }


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