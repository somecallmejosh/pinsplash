<script setup>
import { motion } from "motion-v"
const props = defineProps({
  photo: {
    type: Object,
    required: true,
  },
  user: {
    type: Object,
    required: false,
  },
  element: {
    type: String,
    default: 'li',
  },
})
</script>
<template>
  <component :is="element" class="group relative overflow-hidden rounded-lg bg-gray-100">
    <figure >
      <motion.div
        :initial="{ opacity: 0.25 }"
        :whileInView="{ opacity: 1 }"
        :transition="{ duration: 1.25 }"
        class="z-0 h-auto w-full rounded-lg overflow-hidden origin-top">
        <NuxtImg
          :src="`${photo.photo.url}&w=460&auto=format&dpr=2&q=60`"
          :alt="photo.photo.alt_description"
          class="z-0 h-auto w-full scale-110 rounded-lg transition-transform duration-300 group-hover:scale-100"
          loading="lazy"
          :height="photo.photo.height"
          :width="photo.photo.width"
          :style="{
            aspectRatio: `${photo.photo.width} / ${photo.photo.height}`,
          }"
        />
      </motion.div>

      <figcaption
        class="flext absolute inset-0 content-end bg-gradient-to-t from-black/90 via-black/30 to-black/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      >
        <template v-if="user">
          <div
            class="relative z-20 flex w-full max-w-full translate-y-10 items-center gap-2 truncate p-4 overflow-ellipsis text-white transition-transform duration-300 group-hover:translate-y-0"
          >
            <NuxtImg
              :src="`${photo.user.profileImage}`"
              :alt="photo.user.name"
              class="size-6 rounded-full"
              loading="lazy"
            />
            <p class="truncate capitalize">
              {{ photo.photo.description }}
            </p>

            <div class="sr-only">
              {{ photo.user.name }}
            </div>
          </div>
        </template>
        <NuxtLink
          class="inset-indigo-500 absolute inset-0 z-10 block rounded-xl focus:inset-2"
          :to="`/photo/${photo.photo.id}`"
        >
          <div class="sr-only">
            {{ photo.photo.description }}
          </div>
        </NuxtLink>
      </figcaption>
    </figure>
  </component>
</template>
