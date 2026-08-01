// ----------------------------
// Photo Database
// ----------------------------

const photos = [

    {
        file: "images/frog.jpeg",
        title: "Frog",
        location: "Costa Rica",
        year: 2026,
        camera: "Sony A6700"
    },

    {
        file: "images/lake.jpeg",
        title: "Lake",
        location: "Costa Rica",
        year: 2026,
        camera: "Sony A6700"
    },

    {
        file: "images/ocean.jpeg",
        title: "Ocean",
        location: "Costa Rica",
        year: 2026,
        camera: "Sony A6700"
    },

    {
        file: "images/village.jpeg",
        title: "Village",
        location: "Martinique",
        year: 2026,
        camera: "Sony A6700"
    }

];

// ----------------------------
// References
// ----------------------------

const gallery = document.querySelector(".gallery-grid");

const lightbox = document.getElementById("lightbox");

const lightboxImage = document.getElementById("lightbox-image");

const closeButton = document.getElementById("close");

// ----------------------------
// Create Gallery
// ----------------------------

photos.forEach(photo => {

    gallery.innerHTML += `

        <figure class="photo-card">

            <img
                src="${photo.file}"
                alt="${photo.title}"
            >

            <figcaption>

                <h3>${photo.title}</h3>

                <p>${photo.location}</p>

                <p>${photo.camera}</p>

                <p>${photo.year}</p>

            </figcaption>

        </figure>

    `;

});

// ----------------------------
// Lightbox
// ----------------------------

const galleryImages = document.querySelectorAll(".photo-card img");

galleryImages.forEach(image => {

    image.addEventListener("click", () => {

        lightbox.classList.add("open");

        lightboxImage.src = image.src;

    });

});

// ----------------------------
// Close Button
// ----------------------------

closeButton.addEventListener("click", () => {

    lightbox.classList.remove("open");

});

// ----------------------------
// Click Background
// ----------------------------

lightbox.addEventListener("click", (event) => {

    if (event.target === lightbox) {

        lightbox.classList.remove("open");

    }

});

// ----------------------------
// ESC Key
// ----------------------------

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        lightbox.classList.remove("open");

    }

});