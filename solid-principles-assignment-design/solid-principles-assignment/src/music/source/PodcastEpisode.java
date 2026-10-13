package music.source;

import music.contract.Playable;

public class PodcastEpisode implements Playable {
    @Override
    public void play(String title) {
        System.out.println("Podcast playing: " + title);
    }
}