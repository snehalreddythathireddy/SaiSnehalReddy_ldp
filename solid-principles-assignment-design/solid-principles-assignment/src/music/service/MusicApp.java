package music.service;

import music.contract.Playable;
import music.model.Track;

public class MusicApp {
    private final Playable source;

    public MusicApp(Playable source) {
        this.source = source;
    }

    public void start(Track track) {
        System.out.println("Now playing: " + track.getTitle() + " by " + track.getArtist());
        source.play(track.getTitle());
    }
}