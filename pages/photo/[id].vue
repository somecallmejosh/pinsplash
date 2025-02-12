<script setup>
const route = useRoute()
const id = route.params.id
const { data: photo, error } = useFetch(`/api/photo/${id}`)
const expanded = ref(true)
</script>
<template>
  <layout-container>
    <div v-if="photo">
      <div
        class="relative flex items-start rounded-xl bg-neutral-100"
        :class="!expanded && 'aspect-[16/9] overflow-hidden'"
      >
        <img
          @click="expanded = !expanded"
          :src="photo.urls.regular"
          alt="img"
          class="h-full w-full rounded-xl object-cover"
        />
      </div>
    </div>
  </layout-container>
</template>
