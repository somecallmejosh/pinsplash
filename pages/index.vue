<script setup>
const { data: photos, error } = useFetch('/api/photos')
const showPhotos = ref(false)
</script>
<template>
  <div>
    <div
      class="category-wrapper overflow-visible px-4 xl:ml-[calc((100%-90rem)/2)]"
    >
      <categories />
    </div>
    <layout-container>
      <div>
        <div v-if="error" class="text-red-500">{{ error.message }}</div>
        <div v-else-if="photos">
          <ul class="columns-2 space-y-6 lg:columns-3">
            <li
              v-for="photo in photos"
              :key="photo.photo.id"
              class="group relative overflow-hidden rounded-lg"
            >
              <figure>
                <NuxtImg
                  :src="photo.photo.url"
                  :alt="photo.photo.alt_description"
                  class="h-auto w-full scale-115 rounded-lg transition-transform duration-300 group-hover:scale-100"
                />

                <figcaption
                  class="flext absolute inset-0 content-end bg-gradient-to-t from-black/90 via-black/30 to-black/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                >
                  <div
                    class="relative z-10 flex w-full max-w-full translate-y-10 items-center gap-2 truncate p-4 overflow-ellipsis text-white transition-transform duration-300 group-hover:translate-y-0"
                  >
                    <NuxtImg
                      :src="photo.user.profile_image"
                      :alt="photo.user.name"
                      class="size-6 rounded-full"
                    />
                    <p class="truncate">
                      {{ photo.photo.description }}
                    </p>

                    <div class="sr-only">
                      {{ photo.user.name }}
                    </div>
                  </div>
                  <NuxtLink
                    class="absolute inset-0 z-0"
                    :to="`/photo/${photo.photo.id}`"
                  >
                    <div class="sr-only">
                      {{ photo.photo.description }}
                    </div>
                  </NuxtLink>
                </figcaption>
              </figure>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <div v-if="showPhotos" class="overflow-auto rounded border p-4">
          <pre>{{ photos }}</pre>
        </div>
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
