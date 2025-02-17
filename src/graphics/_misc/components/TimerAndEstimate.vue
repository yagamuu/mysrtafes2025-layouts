<!-- eslint-disable max-len -->
<script setup lang="ts">
import { computed } from 'vue';
import { useRunData, useTimer, useCustomData } from '../../../composable';

const { estimate } = useRunData();
const { isChallenge, challengeTime } = useCustomData();

const { time, runState, timer } = useTimer();

interface Props {
  horizontal?: boolean;
}

const props = defineProps<Props>();

const timerStateClass = computed(() => {
  /*
  if (runState.value === 'paused') {
    return 'pause';
  }
  if (runState.value === 'forfeit') {
    return 'forfeit';
  }
  */
  if (runState.value === 'finished') {
    return '-is_stop';
  }
  return '';
});

const timerText = computed(() => {
  if (!isChallenge.value || !timer?.data) {
    return time.value;
  }
  return challengeTime.value;
});

</script>

<template>
  <div :class="[timerStateClass, 'time', props.horizontal ? '-horizontal' : '-vertical']">
    <div class="now">{{ timerText }}</div>
    <div class="will"><span class="will_label">予定タイム</span><span class="will_time">{{ estimate }}</span></div>
  </div>
</template>
