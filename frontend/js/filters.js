import { photos } from "./data.js";

import { getFavorites } from "./favorites.js";


// ======================
// Filter Photos
// ======================

export function filterPhotos(category) {

    if (category === "all") {

        return photos;

    }


    if (category === "favorites") {

        const favorites =
            getFavorites();


        return photos.filter(photo =>
            favorites.includes(photo.id)
        );

    }


    return photos.filter(photo =>
        photo.category === category
    );

}