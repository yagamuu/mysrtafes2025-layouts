<script setup lang="ts">
import { useHead } from '@unhead/vue';
import { ref, watchEffect } from 'vue';
import { startSoon } from '../../browser_shared/replicants';

// Set the title of this page.
useHead({ title: 'Start Soon' });

const selected = ref(startSoon?.data);
watchEffect(() => {
  selected.value = startSoon?.data;
});
const toggleSwitch = () => {
  if (!startSoon) return;
  startSoon.data = selected.value;
  startSoon.save();
};
</script>

<template>
  <div class="q-pa-md">
    <QToggle
      v-model="selected"
      label="開始前通知ON"
      @update:model-value="toggleSwitch"/>
  </div>
</template>
