<script setup lang="ts">
import { useHead } from '@unhead/vue';
import { computed } from 'vue';
import { calculateClipPath } from '../_misc/clipPathCalculator';
import type { Box } from '../_misc/clipPathCalculator';
import BaseOverlay from '../_misc/components/views/BaseOverlay.vue';
import InfoBox from '../_misc/components/InfoBox.vue';
import TimerAndEstimate from '../_misc/components/TimerAndEstimate.vue';
import RunnerNameplate from '../_misc/components/RunnerNameplate.vue';

useHead({ title: '4x3-2' }); // set the title of this page

const player1GamePosition = (): Box[] => {
  const x = 50;
  const y = 189;
  const width = 904;
  const height = 678;
  return [[x, x + width, y, y + height]];
};

const player2GamePosition = (): Box[] => {
  const x = 966;
  const y = 189;
  const width = 904;
  const height = 678;
  return [[x, x + width, y, y + height]];
};

const clipPath = computed(() => calculateClipPath([...player1GamePosition(), ...player2GamePosition()]));
</script>

<template>
  <BaseOverlay :clip-path="clipPath" disableBackground>
    <RunnerNameplate :index="0" layoutClass="4_3" />
    <RunnerNameplate :index="1" layoutClass="4_3" />
    <section class="information_box">
      <TimerAndEstimate horizontal />
    </section>
    <section class="information_box_header">
      <InfoBox />
    </section>
  </BaseOverlay>
</template>

<style>
  @import url('../_misc/css/reset.css');
  @import url('../_misc/css/base.css');
  @import url('../_misc/css/components.css');
  @import url('../_misc/css/run_2_4x3.css');
</style>