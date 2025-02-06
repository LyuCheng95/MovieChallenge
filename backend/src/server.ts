import express, { Request, Response } from 'express';
import cors from 'cors';
import moviesData from '../data/movies.json';

import type { Movie } from './types/movie';
const movies: Movie[] = moviesData as unknown as Movie[];

const app = express();
const port = 3001;

app.use(cors());

app.get('/api/movies', (req: Request, res: Response) => {
    res.json(movies);
});

app.get('/api/movies/search', (req: Request, res: Response) => {
    const query = req.query.query as string;
    const filteredMovies = movies.filter(movie =>
        movie.title.toLowerCase().includes(query.toLowerCase()) ||
        movie.director.toLowerCase().includes(query.toLowerCase())
    );
    res.json(filteredMovies);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
