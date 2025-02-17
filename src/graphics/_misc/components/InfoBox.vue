<!-- eslint-disable max-len -->
<script setup lang="ts">
import { useRunData } from '../../../composable';

const { runTitle, runCategory, runSystem, runRelease } = useRunData();

</script>

<template>
  <h1 class="title">
    {{ runTitle }}
  </h1>
  <div class="game_detail">
    <div class="category">{{ runCategory }}</div>
    <div class="game_console">{{ runSystem }} - {{ runRelease }}</div>
  </div>
</template>
