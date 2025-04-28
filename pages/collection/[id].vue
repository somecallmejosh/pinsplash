<script setup>
import { motion } from "motion-v"
const route = useRoute()
const id = route.params.id
const { data: collection, error } = useFetch(
  `/api/collections/collection/${id}`,
)

useSeoMeta({
  title: collection.value?.collectionDetails.title,
  description: collection.value?.collectionDetails.description,
  image: collection.value?.collectionDetails.photo.url,
  type: 'website',
})
</script>
<template>
  <div>
    <layout-container v-if="collection">
      <div
        class="relative mb-[4.5rem] aspect-[16/9] overflow-hidden rounded-xl bg-neutral-50 lg:mb-[5rem]"
      >
        <div
          class="absolute inset-0 z-10 flex items-center bg-gradient-to-r from-white/90 via-white/20 to-transparent p-8"
        >
          <div class="w-full max-w-[15rem] space-y-2 lg:max-w-[24rem]">
            <h1
              class="text-[1.25rem] font-[600] text-pretty capitalize lg:text-[1.875rem]"
            >
              {{ collection.collectionDetails.title }}
            </h1>
            <p
              v-if="collection.collectionDetails.description"
              class="font-[500 text-pretty] leading-[1.5rem]"
            >
              {{ collection.collectionDetails.description }}
            </p>
          </div>
        </div>
        <motion.div
          :initial="{ opacity: 0.25 }"
          :whileInView="{ opacity: 1 }"
          :transition="{ duration: 1 }"
          class="absolute inset-0 z-0 origin-top">
          <NuxtImg
            :src="`${collection.collectionDetails.photo.url}&w=1600&h=900&fit=crop&crop=entropy&fm=webp&dpr=2`"
            :alt="collection.collectionDetails.photo.alt_description"
            class="h-full w-full object-cover"
            height="1600"
            width="900"
            quality="80"
          />
        </motion.div>
      </div>
      <grid-masonry
        v-if="collection.collectionRelatedPhotos.length > 0"
        :list="collection.collectionRelatedPhotos"
      />
      <div v-else class="rounded-lg bg-neutral-50 p-8">
        <h2 class="text-[1.25rem] font-[600] capitalize">No photos found</h2>
        <p>
          There are no photos associated with the
          <em class="font-medium">{{ collection.collectionDetails.title }}</em>
          collection.
        </p>
      </div>
    </layout-container>
  </div>
</template>
