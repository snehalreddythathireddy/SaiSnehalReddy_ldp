package music.service;

import music.contract.Downloadable;
import music.model.Track;

public class DownloadManager {
    public void downloadTrack(Downloadable item, Track track) {
        item.download(track.getTitle());
    }
}