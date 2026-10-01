package com.example.rest_practice.controller;

import com.example.rest_practice.dto.MovieCreateRequestDto;
import com.example.rest_practice.dto.MovieResponseDto;
import com.example.rest_practice.dto.MovieTitleUpdateDto;
import com.example.rest_practice.dto.StudioDto;
import com.example.rest_practice.model.Movie;
import com.example.rest_practice.model.Studio;
import com.example.rest_practice.service.MovieService;

import jakarta.validation.Valid;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/movies")
@CrossOrigin(origins = "http://localhost:3000")
public class MovieController {

    private final MovieService movieService;

    public MovieController(MovieService movieService) {
        this.movieService = movieService;
    }

    // GET ALL + PAGINATION + SORTING
    @GetMapping
    public ResponseEntity<Page<MovieResponseDto>> getAllMovies(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "5") int size,
            @RequestParam(defaultValue = "id") String sortBy,
            @RequestParam(defaultValue = "asc") String direction) {

        Sort sort = direction.equalsIgnoreCase("desc")
                ? Sort.by(sortBy).descending()
                : Sort.by(sortBy).ascending();

        Pageable pageable =
                PageRequest.of(page, size, sort);

        Page<Movie> movies =
                movieService.getAllMovies(pageable);

        Page<MovieResponseDto> response =
                movies.map(this::toDto);

        return ResponseEntity.ok(response);
    }

    // GET BY ID
    @GetMapping("/{id}")
    public ResponseEntity<MovieResponseDto> getMovieById(
            @PathVariable int id) {

        Movie movie = movieService.getMovieById(id);

        return ResponseEntity.ok(toDto(movie));
    }

    // CREATE
    @PostMapping
    public ResponseEntity<MovieResponseDto> addMovie(
            @Valid @RequestBody MovieCreateRequestDto request) {

        Movie movie = new Movie();

        movie.setTitle(request.getTitle());
        movie.setDirector(request.getDirector());
        movie.setYear(request.getYear());

        if (request.getStudio() != null) {

            Studio studio = new Studio();

            studio.setName(
                    request.getStudio().getName());

            studio.setCountry(
                    request.getStudio().getCountry());

            movie.setStudio(studio);
        }

        Movie savedMovie =
                movieService.addMovie(movie);

        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(toDto(savedMovie));
    }

    // PUT
    @PutMapping("/{id}")
    public ResponseEntity<MovieResponseDto> updateMovie(
            @PathVariable int id,
            @Valid @RequestBody Movie updatedMovie) {

        Movie movie =
                movieService.updateMovie(id, updatedMovie);

        return ResponseEntity.ok(toDto(movie));
    }

    // PATCH
    @PatchMapping("/{id}")
    public ResponseEntity<MovieResponseDto> patchMovie(
            @PathVariable int id,
            @RequestParam(required = false)
            Boolean markAsFavorite,
            @RequestBody MovieTitleUpdateDto titleUpdate) {

        Movie movie =
                movieService.patchMovie(
                        id,
                        titleUpdate.getTitle(),
                        markAsFavorite
                );

        return ResponseEntity.ok(toDto(movie));
    }

    // DELETE
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteMovie(
            @PathVariable int id) {

        movieService.deleteMovie(id);

        return ResponseEntity.noContent().build();
    }

    // SEARCH / FILTER
    @GetMapping("/search")
    public ResponseEntity<List<MovieResponseDto>> searchMovies(
            @RequestParam(required = false) Integer year,
            @RequestParam(required = false) String director) {

        List<Movie> movies =
                movieService.searchMovies(year, director);

        List<MovieResponseDto> response =
                movies.stream()
                        .map(this::toDto)
                        .toList();

        return ResponseEntity.ok(response);
    }

    // HEADERS
    @GetMapping("/headers")
    public ResponseEntity<String> getHeaders(
            @RequestHeader("Accept") String accept) {

        return ResponseEntity.ok(
                "Accept header: " + accept
        );
    }

    // DTO CONVERSION
    private MovieResponseDto toDto(Movie movie) {

        MovieResponseDto dto =
                new MovieResponseDto();

        dto.setId(movie.getId());
        dto.setTitle(movie.getTitle());
        dto.setDirector(movie.getDirector());
        dto.setYear(movie.getYear());

        if (movie.getStudio() != null) {

            StudioDto studioDto =
                    new StudioDto();

            studioDto.setName(
                    movie.getStudio().getName());

            studioDto.setCountry(
                    movie.getStudio().getCountry());

            dto.setStudio(studioDto);
        }

        return dto;
    }
}