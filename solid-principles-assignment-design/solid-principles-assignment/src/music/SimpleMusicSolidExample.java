package music;

import music.model.Track;
import music.service.DownloadManager;
import music.service.MusicApp;
import music.source.LiveRadio;
import music.source.LocalSong;
import music.source.OnlineSong;
import music.source.PodcastEpisode;

public class SimpleMusicSolidExample {
    public static void main(String[] args) {

        Track track = new Track("Perfect", "Ed Sheeran");

        new MusicApp(new LocalSong()).start(track);
        System.out.println("------------");
        new MusicApp(new OnlineSong()).start(track);
        System.out.println("------------");
        new MusicApp(new LiveRadio()).start(track);

        System.out.println("------------");
        new MusicApp(new PodcastEpisode()).start(new Track("Tech Talk Ep 1", "Radio Team"));

        System.out.println("------------");
        new DownloadManager().downloadTrack(new OnlineSong(), track);
    }
}