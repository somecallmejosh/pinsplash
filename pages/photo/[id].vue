<script setup>
import { motion } from "motion-v"
const route = useRoute()
const id = route.params.id
const { data: photo, error } = useFetch(`/api/photo/${id}`)

const dateOptions = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
}

useSeoMeta({
  title: photo.value?.description || photo.value?.alt_description || `Photo by ${photo.value?.user.name}`,
  description: photo.value?.alt_description,
  image: photo.value?.urls.regular,
  type: 'website',
})
</script>
<template>
  <layout-container>
    <div v-if="photo">
      <div
        class="mb-8 flex items-center justify-between gap-2">
        <div class="flex items-center gap-1 truncate">
          <NuxtImg
            :src="`${photo.user.profile_image.medium}&dpr=2&fm=webp`"
            alt="img"
            class="mr-3 h-12 w-12 rounded-full"
          />
          <h1
            class="truncate text-[1.25rem] font-[600] capitalize lg:text-[1.875rem]"
          >
            {{ photo.user.username }}
          </h1>
        </div>
        <div>
          <a
            :href="photo.links.download_location"
            target="_blank"
            class="bg-ingigo-700 justifypcenter inline-flex h-[2.5rem] cursor-pointer items-center gap-1 rounded-[0.25rem] bg-indigo-600 pr-4 pl-6 text-[0.875rem] font-[500] text-white hover:bg-indigo-800 focus:bg-indigo-800"
          >
            Download
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="arrow-down-s-line">
                <path
                  id="Vector"
                  d="M8.99974 9.81353L12.4371 6.37622L13.4192 7.35831L8.99974 11.7778L4.58032 7.35831L5.56242 6.37622L8.99974 9.81353Z"
                  fill="currentColor"
                />
              </g>
            </svg>
          </a>
        </div>
      </div>
      <motion.div
        :initial="{ opacity: 0.25 }"
        :whileInView="{ opacity: 1 }"
        :transition="{ duration: 1 }"
        class="mb-8 aspect-[16/9] overflow-hidden rounded-xl bg-neutral-100 origin-top">
        <NuxtImg
          :src="`${photo.urls.raw}&w=1600&h=900&fit=crop&crop=entropy&fm=webp&q=80&dpr=2`"
          alt="img"
          :hash="photo.blur_hash"
          class="h-full w-full object-cover"
        />
      </motion.div>
      <h1
        class="mb-6 max-w-[60ch] text-[1.5rem] leading-[2rem] font-[600] text-pretty capitalize"
      >
        {{ photo.description ? photo.description : photo.alt_description }}
      </h1>
      <dl class="mb-6 flex flex-col gap-4 lg:flex-row lg:gap-[9.5rem]">
        <div>
          <dt class="mb-1 text-[.75rem] text-neutral-600">Views</dt>
          <dd class="font-[600] text-[0.875]">
            {{ photo.views.toLocaleString() }}
          </dd>
        </div>
        <div>
          <dt class="mb-1 text-[.75rem] text-neutral-600">Downloads</dt>
          <dd class="font-[600] text-[0.875]">
            {{ photo.downloads.toLocaleString() }}
          </dd>
        </div>
        <div>
          <dt class="color-neutral-600 text-[.75rem]">Date</dt>
          <dd class="font-[600] text-[0.875]">
            {{
              new Intl.DateTimeFormat('en-US', dateOptions).format(
                new Date(photo.created_at),
              )
            }}
          </dd>
        </div>
      </dl>
      <ul class="mb-[3.5rem] flex flex-wrap gap-[0.75rem]">
        <li v-for="category in photo.related_collections.results">
          <NuxtLink
            :to="`/collection/${category.id}`"
            class="inline-flex rounded-[.25rem] bg-gray-50 px-2 py-1 text-[.875rem] font-[500] text-neutral-600 capitalize"
          >
            {{ category.title }}
          </NuxtLink>
        </li>
      </ul>
      <h2
        class="mb-6 max-w-[60ch] text-[1.5rem] leading-[2rem] font-[600] text-pretty capitalize"
      >
        Related Images
      </h2>
      <grid-masonry v-if="photo.related_collections" :list="photo.related_collections" />
    </div>
  </layout-container>
</template>
