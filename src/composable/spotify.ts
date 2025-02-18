import { computed } from 'vue'
import { spotifyPlayingTrack } from '../browser_shared/replicants';

export function useSpotifyPlayingTrack() {
  const trackName = computed(() => spotifyPlayingTrack?.data?.name || '');
  const artists = computed(() => spotifyPlayingTrack?.data?.artists.join(', ') || '');
  const albumName = computed(() => spotifyPlayingTrack?.data?.albumName || '');

  return {
    spotifyPlayingTrack,
    trackName,
    artists,
    albumName,
  }
}