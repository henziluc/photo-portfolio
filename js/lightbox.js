export function showPhoto() {

    lightbox.classList.add("open");

    lightboxImage.src =
        "../images/landscape/" +
        photos[currentPhoto].file;

    lightboxTitle.textContent =
        photos[currentPhoto].title;

    imageCounter.textContent =
        `${currentPhoto + 1} / ${photos.length}`;

}