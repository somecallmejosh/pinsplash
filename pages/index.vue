<template>
  <div>
    <div
      class="category-wrapper overflow-visible px-4 xl:ml-[calc((100%-90rem)/2)]"
    >
      <categories />
    </div>
    <layout-container>
      <div>Home</div>
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
