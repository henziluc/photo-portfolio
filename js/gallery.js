let favorites =
    JSON.parse(localStorage.getItem("favorites")) || [];

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

                <button
                    class="favorite-button"
                    data-id="${photo.id}">
    
                    ♡

                </button>

                <figcaption>

                    ${photo.title}

                </figcaption>

            </figure>
        `;

    });

    addImageClickEvents();
    addFavoriteEvents();
    updateFavoriteButtons();

}

// ======================
// Click Events
// ======================

function addImageClickEvents() {
    console.log("Adding image click events");
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

        filterButtons.forEach(button => {

            button.addEventListener("click", () => {


                const category = button.dataset.category;


                let filteredPhotos;


                if (category === "all") {


                    filteredPhotos = photos;


                }
                else if (category === "favorites") {


                    filteredPhotos = photos.filter(photo => {

                        return favorites.includes(photo.id);

                    });


                }
                else {


                    filteredPhotos = photos.filter(photo => {

                        return photo.category === category;

                    });


                }


                renderGallery(filteredPhotos);


            });

        });

    });

});


// ======================
// Favourite Function
// ======================


function toggleFavorite(id) {

    if (favorites.includes(id)) {

        favorites =
            favorites.filter(photoId =>
                photoId !== id
            );

    }
    else {

        favorites.push(id);

    }


    localStorage.setItem(
        "favorites",
        JSON.stringify(favorites)
    );

}

function addFavoriteEvents() {

    const buttons =
        document.querySelectorAll(".favorite-button");


    buttons.forEach(button => {


        button.addEventListener("click", () => {


            const id =
                button.dataset.id;


            toggleFavorite(id);


            updateFavoriteButtons();


        });


    });

}

function updateFavoriteButtons() {

    const buttons =
        document.querySelectorAll(".favorite-button");


    buttons.forEach(button => {


        const id =
            button.dataset.id;


        if (favorites.includes(id)) {

            button.textContent = "♥";

        }
        else {

            button.textContent = "♡";

        }


    });

}

// ======================
// Initial Gallery
// ======================

renderGallery(photos);

addImageClickEvents();

addFavoriteEvents();

updateFavoriteButtons();

