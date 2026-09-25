package com.example.rest_practice.service;

import com.example.rest_practice.exception.MovieNotFoundException;
import com.example.rest_practice.model.Movie;
import com.example.rest_practice.repository.MovieRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MovieService {

    private final MovieRepository movieRepository;

    public MovieService(MovieRepository movieRepository) {
        this.movieRepository = movieRepository;
    }

    public Page<Movie> getAllMovies(Pageable pageable) {
        return movieRepository.findAll(pageable);
    }

    public Movie getMovieById(int id) {

        return movieRepository.findById(id)
                .orElseThrow(() ->
                        new MovieNotFoundException(id));
    }

    public Movie addMovie(Movie movie) {
        return movieRepository.save(movie);
    }

    public Movie updateMovie(int id, Movie updatedMovie) {

        Movie movie = getMovieById(id);

        movie.setTitle(updatedMovie.getTitle());
        movie.setDirector(updatedMovie.getDirector());
        movie.setYear(updatedMovie.getYear());

        return movieRepository.save(movie);
    }

    public Movie patchMovie(
            int id,
            String title,
            Boolean favorite) {

        Movie movie = getMovieById(id);

        if (title != null) {
            movie.setTitle(title);
        }

        if (favorite != null) {
            movie.setFavorite(favorite);
        }

        return movieRepository.save(movie);
    }

    public void deleteMovie(int id) {

        Movie movie = getMovieById(id);

        movieRepository.delete(movie);
    }

    public List<Movie> searchMovies(
            Integer year,
            String director) {

        List<Movie> movies = movieRepository.findAll();

        return movies.stream()
                .filter(movie ->
                        year == null ||
                                movie.getYear() == year)
                .filter(movie ->
                        director == null ||
                                movie.getDirector()
                                        .equalsIgnoreCase(director))
                .toList();
    }
}