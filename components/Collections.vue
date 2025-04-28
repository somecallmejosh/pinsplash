<script setup>
const route = useRoute()
const { id } = route.params
const { data: collections, error } = useFetch('/api/collections')
</script>
<template>
  <div
    class="category-wrapper overflow-visible px-4 xl:ml-[calc((100%-90rem)/2)]"
  >
    <div v-if="error" class="text-red-500">{{ error.message }}</div>
    <layout-overflow-x v-else="collections">
      <ul class="flex items-center space-x-4">
        <ui-pill-tab
          v-for="collection in collections"
          :key="collection.id"
          :active="collection.id === id"
          tag="li"
          :link="`/collection/${collection.id}`"
          :text="collection.title"
          :image="collection.photo.url ? collection.photo.url : ''"
        />
      </ul>
    </layout-overflow-x>
  </div>
</template>
