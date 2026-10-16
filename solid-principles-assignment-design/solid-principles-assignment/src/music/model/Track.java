package music.model;

public class Track {
    private final String title;
    private final String artist;

    public Track(String title, String artist) {
        this.title = title;
        this.artist = artist;
    }

    public String getTitle() {
        return title;
    }

    public String getArtist() {
        return artist;
    }
}