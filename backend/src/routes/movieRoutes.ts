import express from "express";
import * as movieController from "../controllers/movieController";

const router = express.Router();

router.get("/movies/paged", movieController.getPagedMovies);
router.get("/movies", movieController.getAllMovies);
router.get("/movies/search", movieController.searchMovies);
router.get("/autofill", movieController.getAutofillSuggestions);
router.get("/movies/:id", movieController.getMovieById);
router.post("/movie-view/:id", movieController.recordMovieView);

export default router;
