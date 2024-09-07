<script setup lang="ts">
const route = useRoute()

let status = null;

status = await apiGet('/check_status', null);
console.log(status);

</script>

<template>
  <div class="grid grid-cols-2 gap-1">
      <template v-for="value, key in status">
        <div>{{ prettyName(key) }}:</div>
        <div>{{ value }}</div>
      </template>
  </div>
</template>
