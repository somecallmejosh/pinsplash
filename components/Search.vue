<script setup lang="ts">
const search = ref('')
</script>
<template>
  <form
    class="relative h-10 w-full rounded-[0.25rem] border border-neutral-200 bg-neutral-50 px-4"
  >
    <input
      type="text"
      v-model="search"
      class="absolute inset-0 h-full w-full rounded-[0.25rem] border-none bg-transparent px-4 text-sm placeholder-[neutral-500] focus:ring-0 focus:outline-1 focus:outline-indigo-500"
      placeholder="Search image Eg. Landsacpe"
    />
    <button
      type="submit"
      class="absolute top-1/2 right-1 -translate-y-1/2 transform rounded p-2 transition-colors duration-200"
      :class="
        search
          ? 'cursor-pointer bg-indigo-100 text-indigo-800 hover:bg-indigo-200'
          : 'cursor-not-allowed text-[#A3A3A3]'
      "
    >
      <div class="sr-only">Search</div>
      <svg
        role="img"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        class="size-4"
      >
        <path
          d="M7.33301 1.33334C10.645 1.33334 13.333 4.02134 13.333 7.33334C13.333 10.6453 10.645 13.3333 7.33301 13.3333C4.02101 13.3333 1.33301 10.6453 1.33301 7.33334C1.33301 4.02134 4.02101 1.33334 7.33301 1.33334ZM7.33301 12C9.91134 12 11.9997 9.91168 11.9997 7.33334C11.9997 4.75501 9.91134 2.66668 7.33301 2.66668C4.75467 2.66668 2.66634 4.75501 2.66634 7.33334C2.66634 9.91168 4.75467 12 7.33301 12ZM12.9899 12.0474L14.8755 13.933L13.9327 14.8758L12.0471 12.9902L12.9899 12.0474Z"
          fill="currentColor"
        />
      </svg>
    </button>
    <button
      v-if="search"
      type="button"
      class="absolute top-1/2 right-12 flex size-6 -translate-y-1/2 transform cursor-pointer items-center justify-center rounded-full border px-1 text-xs opacity-30 transition-opacity duration-200 hover:opacity-100"
      @click="search = ''"
    >
      <div class="sr-only">Clear Search</div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
      >
        <path
          d="M8.00047 7.05767L11.3003 3.75781L12.2431 4.70062L8.94327 8.00047L12.2431 11.3003L11.3003 12.2431L8.00047 8.94327L4.70062 12.2431L3.75781 11.3003L7.05767 8.00047L3.75781 4.70062L4.70062 3.75781L8.00047 7.05767Z"
          fill="#404040"
        />
      </svg>
    </button>
  </form>
</template>
