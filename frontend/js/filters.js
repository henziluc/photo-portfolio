import { photos } from "./data.js";
import { getFavorites } from "./favorites.js";


export function filterPhotos(
    filterCategory,
    pageCategory
) {
    
    let pagePhotos;
    // First get only photos
    // belonging to this portfolio page
    if (pageCategory === "portfolio") {

        pagePhotos = photos

    } else { 

        pagePhotos = photos.filter(photo =>
            photo.folder === pageCategory
    );
    }

    // Show all photos on this page

    if (filterCategory === "all") {

        return pagePhotos;

    }


    // Show favorites on this page

    if (filterCategory === "favorites") {

        const favorites = getFavorites();

        return pagePhotos.filter(photo =>
            favorites.includes(photo.id)
        );

    }


    // Other filters

    return pagePhotos.filter(photo =>
        photo.category === filterCategory
    );

}