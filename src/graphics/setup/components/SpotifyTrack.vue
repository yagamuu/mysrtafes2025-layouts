<script setup lang="ts">
import { useSpotifyPlayingTrack } from '../../../composable';

const { trackName, artists, albumName } = useSpotifyPlayingTrack();
</script>

<template>
  <div class="music">
    <p class="music_track">{{ trackName }} - {{ artists }}</p>
    <p class="music_album">{{ albumName }}</p>
  </div>
</template>