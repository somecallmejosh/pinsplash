<script setup>
const route = useRoute()
const hideCollections = ['photons']
</script>
<template>
  <div class="flex h-dvh flex-col">
    <NuxtRouteAnnouncer />
    <layout-site-header />
    <collections v-if="!route.path.includes(hideCollections)" />
    <main class="flex-1">
      <NuxtPage />
    </main>
    <layout-site-footer />
  </div>
</template>
