<script setup lang="ts">
import { ref, computed } from 'vue';
import type { Schemas } from '../../../types';
import { setupInformationArray } from '../../../browser_shared/replicants';

const props = defineProps({
  runData: {
    type: Object as () => Schemas.Speedcontrol.RunData.RunData,
    default: undefined,
  },
});

const runners = computed(() => {
  if (!props.runData) {
    return '';
  }
  return props.runData.teams.flatMap((team) => team.players.flatMap((player) => player.name)).join(', ');
});

const displaySetupInformation = ref(0);

setInterval(() => {
  const length = setupInformationArray?.data?.length || 0;
  displaySetupInformation.value = (displaySetupInformation.value + 1) % length;
}, 20000);

</script>

<template>
  <div class="setup_box_1">
    <h1 class="title">
      {{ runData?.game }}
    </h1>
    <span class="runner">
      {{ runData?.category }} / Runner : {{ runners }}
    </span>
    <span class="detail">
      <span
        v-for="(information, index) in setupInformationArray?.data"
        :key="information.id"
        :class="[index === displaySetupInformation ? 'active' : '']">
        {{ information.text }}
      </span>
    </span>
  </div>
</template>