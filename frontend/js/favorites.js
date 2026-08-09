let favorites =
    JSON.parse(localStorage.getItem("favorites")) || [];


// ======================
// Toggle Favorite
// ======================

export function toggleFavorite(id) {

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


// ======================
// Check Favorite
// ======================

export function isFavorite(id) {

    return favorites.includes(id);

}


// ======================
// Get Favorites
// ======================

export function getFavorites() {

    return favorites;

}