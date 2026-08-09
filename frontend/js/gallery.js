import { photos } from "./data.js";

import {
    toggleFavorite,
    isFavorite
} from "./favorites.js";

import {
    openLightbox,
    setLightboxPhotos
} from "./lightbox.js";

import {
    filterPhotos
} from "./filters.js";


// ======================
// DOM Elements
// ======================

const gallery =
    document.getElementById("gallery");

const filterButtons =
    document.querySelectorAll(".filters button");


// ======================
// Current Photos
// ======================

let currentPhotos = [...photos];


// ======================
// Render Gallery
// ======================

function renderGallery(photoList) {

    gallery.innerHTML = "";

    currentPhotos = photoList;


    setLightboxPhotos(currentPhotos);


    photoList.forEach((photo, index) => {

        gallery.innerHTML += `

            <figure class="photo-card">

                <img
                    src="../images/${photo.folder}/${photo.file}"
                    alt="${photo.title}"
                    data-index="${index}"
                >


                <button
                    class="favorite-button"
                    data-id="${photo.id}"
                >
                    ${isFavorite(photo.id) ? "♥" : "♡"}
                </button>


                <figcaption>

                    <div>
                        ${photo.title}
                    </div>

                    <div class="photo-location">
                        ${photo.location}
                    </div>

                    <div class="photo-camera">
                        ${photo.camera}
                    </div>

                </figcaption>

            </figure>

        `;

    });


    addImageClickEvents();

    addFavoriteEvents();

}


// ======================
// Image Click Events
// ======================

function addImageClickEvents() {

    const galleryImages =
        document.querySelectorAll(
            ".photo-card img"
        );


    galleryImages.forEach(image => {

        image.addEventListener("click", () => {

            const index =
                Number(image.dataset.index);


            openLightbox(index);

        });

    });

}


// ======================
// Favorite Click Events
// ======================

function addFavoriteEvents() {

    const buttons =
        document.querySelectorAll(
            ".favorite-button"
        );


    buttons.forEach(button => {

        button.addEventListener("click", (event) => {

            event.stopPropagation();

            const id =
                button.dataset.id;


            toggleFavorite(id);


            renderGallery(currentPhotos);

        });

    });

}


// ======================
// Filter Events
// ======================

filterButtons.forEach(button => {

    button.addEventListener("click", () => {


        filterButtons.forEach(btn => {

            btn.classList.remove("active");

        });


        button.classList.add("active");


        const category =
            button.dataset.category;


        const filteredPhotos =
            filterPhotos(category);


        renderGallery(filteredPhotos);

    });

});


// ======================
// Initial Gallery
// ======================

renderGallery(photos);