<script setup>
const { data: photos, error } = useFetch('/api/photos')
</script>
<template>
  <div>
    <layout-container>
      <div>
        <div v-if="error" class="text-red-500">{{ error.message }}</div>
        <grid-masonry v-else-if="photos" :list="photos" />
      </div>
    </layout-container>
  </div>
</template>

<style scoped>
@media (min-width: 1280px) and (max-width: 89rem) {
  .category-wrapper {
    margin-left: 0px;
  }
}
</style>
