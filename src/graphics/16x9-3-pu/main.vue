<script setup lang="ts">
import { useHead } from '@unhead/vue';
import { computed } from 'vue';
import { calculateClipPath } from '../_misc/clipPathCalculator';
import type { Box } from '../_misc/clipPathCalculator';
import BaseOverlay from '../_misc/components/views/BaseOverlay.vue';
import InfoBox from '../_misc/components/InfoBox.vue';
import TimerAndEstimate from '../_misc/components/TimerAndEstimate.vue';
import RunnerNameplate from '../_misc/components/RunnerNameplate.vue';

useHead({ title: '16x9-3-pu' }); // set the title of this page

const player1GamePosition = (): Box[] => {
  const x = 343;
  const y = 98;
  const width = 1195;
  const height = 672.1875;
  return [[x, x + width, y, y + height]];
};

const player2GamePosition = (): Box[] => {
  const x = 1548;
  const y = 233;
  const width = 363;
  const height = 204.1875;
  return [[x, x + width, y, y + height]];
};

const player3GamePosition = (): Box[] => {
  const x = 1548;
  const y = 531;
  const width = 363;
  const height = 204.1875;
  return [[x, x + width, y, y + height]];
};

const clipPath = computed(() => calculateClipPath([...player1GamePosition(), ...player2GamePosition(), ...player3GamePosition()]));
</script>

<template>
  <BaseOverlay :clip-path="clipPath" disableBackground>
    <RunnerNameplate :index="0" layoutClass="16_9" />
    <RunnerNameplate :index="1" layoutClass="16_9" />
    <RunnerNameplate :index="2" layoutClass="16_9" />
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
  @import url('../_misc/css/run_3_pu.css');
</style>