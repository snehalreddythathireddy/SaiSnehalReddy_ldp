package com.example.rest_practice.dto;

public class MovieResponseDto {

    private int id;

    private String title;

    private String director;

    private int year;

    private StudioDto studio;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

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