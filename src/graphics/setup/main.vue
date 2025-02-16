<script setup lang="ts">
import { useHead } from '@unhead/vue';
import { computed } from 'vue';
import { startSoon } from '../../browser_shared/replicants';
import BaseOverlay from '../_misc/components/views/BaseOverlay.vue';
import SetupSchedule from './components/SetupSchedule.vue';
import SpotifyTrack from './components/SpotifyTrack.vue';

useHead({ title: 'Setup' }); // set the title of this page

const startSoonClass = computed(() => {
  if (startSoon?.data) {
    return 'active';
  }
  return '';
});
</script>

<template>
  <BaseOverlay disable-background>
    <div :class="[startSoonClass, 'description_part']">
      <div class="description_part_alert">
        <img src="../_misc/images/icon-speaker.png" />まもなく開始します
      </div>
    </div>
    <SetupSchedule/>
    <SpotifyTrack/>
  </BaseOverlay>
</template>

<style>
  @import url('../_misc/css/reset.css');
  @import url('../_misc/css/base.css');
  @import url('../_misc/css/setup.css');
</style>