<script setup lang="ts">
import { useHead } from '@unhead/vue';
import { computed } from 'vue';
import { calculateClipPath } from '../_misc/clipPathCalculator';
import type { Box } from '../_misc/clipPathCalculator';
import BaseOverlay from '../_misc/components/views/BaseOverlay.vue';
import InfoBox from '../_misc/components/InfoBox.vue';
import TimerAndEstimate from '../_misc/components/TimerAndEstimate.vue';
import RunnerNameplate from '../_misc/components/RunnerNameplate.vue';

useHead({ title: '4x3-3' }); // set the title of this page

const player1GamePosition = (): Box[] => {
  const x = 1213;
  const y = 21;
  const width = 584;
  const height = 438;
  return [[x, x + width, y, y + height]];
};

const player2GamePosition = (): Box[] => {
  const x = 517;
  const y = 525;
  const width = 584;
  const height = 438;
  return [[x, x + width, y, y + height]];
};

const player3GamePosition = (): Box[] => {
  const x = 1213;
  const y = 525;
  const width = 584;
  const height = 438;
  return [[x, x + width, y, y + height]];
};

const clipPath = computed(() => calculateClipPath([...player1GamePosition(), ...player2GamePosition(), ...player3GamePosition()]));
</script>

<template>
  <BaseOverlay :clip-path="clipPath" disableBackground>
    <RunnerNameplate :index="0" layoutClass="4_3" />
    <RunnerNameplate :index="1" layoutClass="4_3" />
    <RunnerNameplate :index="2" layoutClass="4_3" />
    <section class="information_box">
      <TimerAndEstimate horizontal />
      <InfoBox />
    </section>
  </BaseOverlay>
</template>

<style>
  @import url('../_misc/css/reset.css');
  @import url('../_misc/css/base.css');
  @import url('../_misc/css/components.css');
  @import url('../_misc/css/run_3_4x3.css');
</style>