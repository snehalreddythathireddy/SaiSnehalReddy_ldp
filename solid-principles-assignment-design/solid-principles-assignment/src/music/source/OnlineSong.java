package music.source;

import music.contract.Downloadable;
import music.contract.Playable;

public class OnlineSong implements Playable, Downloadable {
    @Override
    public void play(String title) {
        System.out.println("Streaming from internet: " + title);
    }

    @Override
    public void download(String title) {
        System.out.println("Downloaded for offline use: " + title);
    }
}