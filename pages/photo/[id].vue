<script setup lang="ts">
const route = useRoute()
const id = route.params.id
</script>
<template>
  <Container>
    <div>Photo {{ id }}</div>
  </Container>
</template>
