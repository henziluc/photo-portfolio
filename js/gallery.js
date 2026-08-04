import { photos } from "./data.js";

// ======================
// DOM Elements
// ======================

const gallery = document.getElementById("gallery");

const filterButtons = document.querySelectorAll(".filters button");

const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightbox-image");
const lightboxTitle = document.getElementById("lightbox-title");
const imageCounter = document.getElementById("image-counter");

const previousButton = document.getElementById("previous");
const nextButton = document.getElementById("next");
const closeButton = document.getElementById("close");

// ======================
// Variables
// ======================

// Which photos are currently displayed?
let currentPhotos = [...photos];

// Which photo is currently open?
let currentPhoto = 0;

// ======================
// Gallery
// ======================

function renderGallery(photoList) {

    gallery.innerHTML = "";

    currentPhotos = photoList;

    photoList.forEach((photo, index) => {

        gallery.innerHTML += `
            <figure class="photo-card">

                <img
                    src="../images/landscape/${photo.file}"
                    alt="${photo.title}"
                    data-index="${index}">

                <figcaption>

                    ${photo.title}

                </figcaption>

            </figure>
        `;

    });

    addImageClickEvents();

}

// ======================
// Click Events
// ======================

function addImageClickEvents() {

    const galleryImages =
        document.querySelectorAll(".photo-card img");

    galleryImages.forEach(image => {

        image.addEventListener("click", () => {

            currentPhoto = Number(image.dataset.index);

            showPhoto();

        });

    });

}

// ======================
// Lightbox
// ======================

function showPhoto() {

    const photo = currentPhotos[currentPhoto];

    lightbox.classList.add("open");

    lightboxImage.src =
        "../images/landscape/" + photo.file;

    lightboxTitle.textContent =
        photo.title;

    imageCounter.textContent =
        `${currentPhoto + 1} / ${currentPhotos.length}`;

}

// ======================
// Close Lightbox
// ======================

closeButton.addEventListener("click", () => {

    lightbox.classList.remove("open");

});

// Close when clicking the dark background

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

        currentPhoto = currentPhotos.length - 1;

    }

    showPhoto();

});

// ======================
// Keyboard Navigation
// ======================

document.addEventListener("keydown", (event) => {

    if (!lightbox.classList.contains("open")) return;

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

// ======================
// Filters
// ======================

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        // Remove active class
        filterButtons.forEach(btn =>
            btn.classList.remove("active")
        );

        // Highlight current button
        button.classList.add("active");

        const category = button.dataset.category;

        if (category === "all") {

            renderGallery(photos);

        } else {

            const filteredPhotos = photos.filter(photo => {

                return photo.category === category;

            });
            
            renderGallery(filteredPhotos);

        }

    });

});

// ======================
// Initial Gallery
// ======================

renderGallery(photos);