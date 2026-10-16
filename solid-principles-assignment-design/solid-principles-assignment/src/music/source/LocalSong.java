package music.source;

import music.contract.Playable;

public class LocalSong implements Playable {
    @Override
    public void play(String title) {
        System.out.println("Playing from phone storage: " + title);
    }
}