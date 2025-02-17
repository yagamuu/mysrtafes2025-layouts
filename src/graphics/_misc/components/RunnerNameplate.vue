<!-- eslint-disable max-len -->
<script setup lang="ts">
import { computed } from 'vue';
import { useRunData, useTimer } from '../../../composable';
import { displaySound } from '../../../browser_shared/replicants';
import * as util from '../../../composable/util/format';

interface Props {
  index: number;
  layoutClass?: string;
}

const props = defineProps<Props>();

const { runDataActiveRun } = useRunData();
const { timer } = useTimer();

const name = computed(() => {
  if (!runDataActiveRun?.data || !runDataActiveRun?.data.teams[props.index]) {
    return '';
  }
  return runDataActiveRun?.data.teams[props.index].players[0].name;
});

const finishTime = computed(() => {
  if (!runDataActiveRun?.data || !runDataActiveRun?.data.teams[props.index]) {
    return '';
  }
  const teamId = runDataActiveRun?.data.teams[props.index].id;
  if (!timer?.data?.teamFinishTimes[teamId]) {
    return '';
  }
  const finish = timer?.data?.teamFinishTimes[teamId];
  if (finish.state === 'completed' || finish.state === 'forfeit') {
    return util.formatSeconds(Math.trunc(finish.milliseconds / 1000));
  }
  return '';
});

const isSpeakerClass = computed(() => {
  if (!runDataActiveRun?.data || !runDataActiveRun?.data.teams[props.index]) {
    return '';
  }
  return runDataActiveRun?.data.teams[props.index].players[0].id
    === displaySound?.data?.playerId ? '-is_speaker' : '';
});

const finishTimeClass = computed(() => {
  if (!runDataActiveRun?.data || !runDataActiveRun?.data.teams[props.index]) {
    return '';
  }
  const teamId = runDataActiveRun?.data.teams[props.index].id;
  if (!timer?.data?.teamFinishTimes[teamId]) {
    return '';
  }
  const finish = timer?.data?.teamFinishTimes[teamId];

  if (finish.state === 'completed') {
    return '-is_stop';
  }

  if (finish.state === 'forfeit') {
    return '-is_retire';
  }

  return '';
});

const playerClass = computed(() => {
  return `-player${props.index + 1}`;
});

const layoutClass = computed(() => {
  return props.layoutClass ? `-as_${props.layoutClass}` : '';
});

</script>

<template>
  <section :class="[isSpeakerClass, finishTimeClass, playerClass, 'movie']">
    <div :class="[layoutClass, 'movie_screen']" />
    <div class="movie_footer">
      <div class="player">{{ name }}</div>
      <div class="player_time" v-if="finishTime">{{ finishTime }}</div>
    </div>
  </section>
</template>
