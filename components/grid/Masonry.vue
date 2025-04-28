
<script setup>
const gridVisible = ref(false)
/**
 * PROPS:
 * - items (Array): the content you want to display in masonry
 * - gap (Number): optional gap in pixels between columns
 */
const props = defineProps({
  list: {
    type: Array,
    default: () => [],
  },
  gap: {
    type: Number,
    default: 16, // 16px gap, for example
  },
})

const container = ref(null)

/**
 * We'll use a simple approach based on Tailwind breakpoints:
 * - < 640px (sm): 1 column
 * - >= 640px (sm) and < 1024px (lg): 2 columns
 * - >= 1024px (lg): 3 columns
 *
 * Adjust as needed for your design or breakpoints.
 */
function getColumnsCount() {
  const width = window.innerWidth
  return width >= 1024 ? 3 : 2
}

/**
 * Reset the inline transform and top/left styles on items
 * so we can recalculate the layout in a "clean" state.
 */
function resetItems() {
  const itemEls = container.value?.querySelectorAll('.masonry-item') || []
  itemEls.forEach((item) => {
    item.style.transform = ''
    item.style.left = ''
    item.style.top = ''
    // If you previously set position or width in JS, reset those too
    item.style.position = ''
    item.style.width = ''
  })
}

/**
 * The main logic to create a masonry layout.
 */
function createMasonryGrid() {
  if (!container.value) return

  const itemEls = container.value.querySelectorAll('.masonry-item')
  if (!itemEls.length) return

  // Container width
  const containerWidth = container.value.offsetWidth

  // Determine how many columns we should have (based on window width)
  const columnsCount = getColumnsCount()

  // Calculate the width of each column (distribute container width evenly)
  // Also subtract total horizontal gaps so items fit nicely.
  // If we have (columnsCount - 1) gaps, total gap = gap * (columnsCount - 1).
  // We'll simply do an even distribution for the columns, then apply a "left"
  // offset that accounts for the gap.
  const totalGapWidth = props.gap * (columnsCount - 1)
  const columnWidth = (containerWidth - totalGapWidth) / columnsCount

  // Column heights array
  const columnHeights = new Array(columnsCount).fill(0)

  // Absolutely position each item
  itemEls.forEach((item) => {
    item.style.position = 'absolute'
    item.style.width = `${columnWidth}px` // each item gets the computed column width

    // Find the column with the smallest height
    let minColIndex = 0
    let minColHeight = columnHeights[0]
    for (let i = 1; i < columnsCount; i++) {
      if (columnHeights[i] < minColHeight) {
        minColIndex = i
        minColHeight = columnHeights[i]
      }
    }

    // x offset = column index * (column width + gap)
    const x = minColIndex * (columnWidth + props.gap)
    const y = minColHeight

    // Position the item
    item.style.transform = `translate(${x}px, ${y}px)`

    // Update the column height
    // We'll add this item's height, plus a vertical gap
    // but let's only add a gap if there's another item below (i.e. we always
    // add the gap so each item is spaced from the one below it).
    const itemHeight = item.offsetHeight
    columnHeights[minColIndex] = minColHeight + itemHeight + props.gap
  })

  // Ensure the container is "relative"
  container.value.style.position = 'relative'
  // The container’s height should match the tallest column
  const maxHeight = Math.max(...columnHeights)
  container.value.style.height = `${maxHeight}px`
}

/**
 * Debounce handling of window resizing.
 */
let resizeTimer = null
function onResize() {
  clearTimeout(resizeTimer)
  resizeTimer = setTimeout(() => {
    resetItems()
    nextTick(() => createMasonryGrid())
  }, 150) // 150ms debounce
}

/**
 * Watch for changes to props.items and
 * re-run the masonry logic (useful if data is updated asynchronously).
 */
watch(
  () => props.items,
  () => {
    nextTick(() => {
      resetItems()
      createMasonryGrid()
    })
  },
  { deep: true, immediate: true },
)

onMounted(() => {
  // Initial layout
  createMasonryGrid()

  // Listen for resize
  window.addEventListener('resize', onResize)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', onResize)
})
</script>

<template>
  <div ref="container">
    <!-- Render each item using v-for -->
    <ul class="masonry-container grid grid-cols-2 lg:grid-cols-3">
      <ui-card
        v-for="photo in list"
        :key="photo.photo.id"
        :photo="photo"
        :user="photo.user"
        class="masonry-item"
      />
    </ul>
  </div>
</template>

<style scoped>
.masonry-container {
  width: 100%;
  margin: 0 auto;
  gap: 16px;
  position: relative;
}

.masonry-item {
  box-sizing: border-box;
}
</style>
