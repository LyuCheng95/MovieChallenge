export type Movie = {
    id: number;
    title: string;
    year: string;
    runtime: string;
    genres: Genres[];
    director: string;
    actors: string;
    plot: string;
    posterUrl: string;
};
export declare enum Genres {
    "Comedy" = 0,
    "Fantasy" = 1,
    "Crime" = 2,
    "Drama" = 3,
    "Music" = 4,
    "Adventure" = 5,
    "History" = 6,
    "Thriller" = 7,
    "Family" = 8,
    "Animation" = 9,
    "Mystery" = 10,
    "Biography" = 11,
    "Action" = 12,
    "Sci-Fi" = 13,
    "War" = 14,
    "Romance" = 15,
    "Western" = 16,
    "Horror" = 17,
    "Musical" = 18,
    "Sport" = 19,
    "Film-Noir" = 20
}
