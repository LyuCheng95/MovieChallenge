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
    Comedy = "Comedy",
    Fantasy = "Fantasy",
    Crime = "Crime",
    Drama = "Drama",
    Music = "Music",
    Adventure = "Adventure",
    History = "History",
    Thriller = "Thriller",
    Family = "Family",
    Animation = "Animation",
    Mystery = "Mystery",
    Biography = "Biography",
    Action = "Action",
    "Sci-Fi" = "Sci-Fi",
    War = "War",
    Romance = "Romance",
    Western = "Western",
    Horror = "Horror",
    Musical = "Musical",
    Sport = "Sport",
    "Film-Noir" = "Film-Noir"
}
