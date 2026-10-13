package music.source;

import music.contract.Playable;

public class LiveRadio implements Playable {
    @Override
    public void play(String title) {
        System.out.println("Live radio on air: " + title);
    }
}