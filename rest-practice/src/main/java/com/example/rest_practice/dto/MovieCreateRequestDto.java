package com.example.rest_practice.dto;

import jakarta.validation.Valid;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;

public class MovieCreateRequestDto {

    @NotBlank(message = "Title cannot be empty")
    private String title;

    private String director;

    @Min(value = 1900, message = "Year must be 1900 or later")
    @Max(value = 2030, message = "Year must be 2030 or earlier")
    private int year;

    @Valid
    private StudioDto studio;

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDirector() {
        return director;
    }

    public void setDirector(String director) {
        this.director = director;
    }

    public int getYear() {
        return year;
    }

    public void setYear(int year) {
        this.year = year;
    }

    public StudioDto getStudio() {
        return studio;
    }

    public void setStudio(StudioDto studio) {
        this.studio = studio;
    }
}