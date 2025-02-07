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

export enum Genres {
  "Comedy",
  "Fantasy",
  "Crime",
  "Drama",
  "Music",
  "Adventure",
  "History",
  "Thriller",
  "Family",
  "Animation",
  "Mystery",
  "Biography",
  "Action",
  "Sci-Fi",
  "War",
  "Romance",
  "Western",
  "Horror",
  "Musical",
  "Sport",
  "Film-Noir",
}
