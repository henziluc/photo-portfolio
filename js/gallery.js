

const photos = [

    {
        file: "lake.jpeg",
        title: "Lake",
        location: "Costa Rica",
        camera: "Sony A6700",
        lens: "20mm f/1.8",
        year: 2026
    },

    {
        file: "ocean.jpeg",
        title: "Ocean",
        location: "Costa Rica",
        camera: "Sony A6700",
        lens: "20mm f/1.8",
        year: 2026
    },

    {
        file: "village.jpeg",
        title: "Village",
        location: "Martinique",
        camera: "Sony A6700",
        lens: "20mm f/1.8",
        year: 2026
    },

    {
        file: "apostels.jpeg",
        title: "Apostels",
        location: "South Africa",
        camera: "Sony A6700",
        lens: "20mm f/1.8",
        year: 2025
    }

];

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

function showPhoto() {

    lightbox.classList.add("open");

    lightboxImage.src =
        "../images/landscape/" +
        photos[currentPhoto].file;

    lightboxTitle.textContent =
        photos[currentPhoto].title;

    imageCounter.textContent =
        `${currentPhoto + 1} / ${photos.length}`;

}



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