<template>
  <UContainer>
    <UCard class="mt-10">
      <template #header>
        <div class="flex justify-between align-middle">
          <div class="logo align-middle pr-5"><img src="/logo.svg" /></div>
          <!-- <ColorScheme><USelect v-model="$colorMode.preference" :options="['system', 'light', 'dark']" /></ColorScheme> -->
          <UHorizontalNavigation :links="links" />
        </div>
      </template>
        
      
      <NuxtPage />
    </UCard>
  </UContainer>
</template>

<script setup lang="ts">
//Icons: https://icones.js.org/collection/material-symbols
const links = [
  {
    label: "Status",
    icon: "material-symbols:help-rounded",
    to: "/"
  },{
    label: "Settings",
    icon: "material-symbols:settings-outline",
  },{
    label: "Automate",
    icon: "material-symbols:automation-outline",
  },{
    label: "Monitor",
    icon: "material-symbols:monitor-heart-outline",
  },{
    label: "About",
    icon: "material-symbols:help-outline",
  }
]
</script>
