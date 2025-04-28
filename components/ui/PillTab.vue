<script setup>
const props = defineProps({
  tag: {
    type: String,
    required: true,
  },
  active: {
    type: Boolean,
    required: true,
  },

  text: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
})
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
      <div
        class="aspect-square size-[2.5rem] shrink-0 overflow-hidden rounded-full bg-neutral-600"
      >
        <NuxtImg
          :src="`${image}&w=50&h=50&fm=webp&dpr=2`"
          :alt="text"
          height="50"
          width="50"
          quality="80"
          fit="cover"
        />
      </div>
      <span class="pr-[.75rem] text-sm font-medium whitespace-nowrap">{{
        text
      }}</span>
    </NuxtLink>
  </component>
</template>
