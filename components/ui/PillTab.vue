<script setup lang="ts">
const props = defineProps<{
  tag: string
  active: boolean
  text: string
  image: string
  link: string
}>()
</script>
<template>
  <component :is="tag">
    <NuxtLink
      :to="link"
      class="flex h-12 items-center gap-[.75rem] rounded-full p-1 transition-all duration-200 hover:bg-indigo-50 focus:ring-0 focus:outline-1 focus:outline-indigo-500"
      :class="{
        'bg-indigo-50 text-neutral-900': active,
        'bg-neutral-50 text-neutral-600': !active,
      }"
    >
      <div class="size-[2.5rem] rounded-full bg-neutral-600">
        <img :src="image" :alt="text" class="rounded-full" />
      </div>
      <span class="ml-2 pr-[.75rem] text-sm font-medium">{{ text }}</span>
    </NuxtLink>
  </component>
</template>
