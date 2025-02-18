<script setup lang="ts">
import { useHead } from '@unhead/vue';
import { computed } from 'vue';
import { calculateClipPath } from '../_misc/clipPathCalculator';
import type { Box } from '../_misc/clipPathCalculator';
import BaseOverlay from '../_misc/components/views/BaseOverlay.vue';
import InfoBox from '../_misc/components/InfoBox.vue';
import TimerAndEstimate from '../_misc/components/TimerAndEstimate.vue';

useHead({ title: '16x9-1' }); // set the title of this page

const gamePosition = (): Box[] => {
  const x = 415;
  const y = 11;
  const width = 1485;
  const height = 835.3125;
  return [[x, x + width, y, y + height]];
};

const clipPath = computed(() => calculateClipPath(gamePosition()));
</script>

<template>
  <BaseOverlay :clip-path="clipPath" disableBackground>
    <section class="information_box">
      <TimerAndEstimate />
      <InfoBox />
    </section>
  </BaseOverlay>
</template>

<style>
  @import url('../_misc/css/reset.css');
  @import url('../_misc/css/base.css');
  @import url('../_misc/css/components.css');
  @import url('../_misc/css/run_1_challenge.css');
</style>