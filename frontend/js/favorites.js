let favorites =
    JSON.parse(localStorage.getItem("favorites")) || [];


// Make sure all IDs are numbers

favorites = favorites.map(id => Number(id));


// ======================
// Toggle Favorite
// ======================

export function toggleFavorite(id) {

    id = Number(id);


    if (favorites.includes(id)) {

        favorites = favorites.filter(
            photoId => photoId !== id
        );

    } else {

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

    return favorites.includes(Number(id));

}


// ======================
// Get Favorites
// ======================

export function getFavorites() {

    return favorites;

}