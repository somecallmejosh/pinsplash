<script setup lang="ts">
const categories = [
  {
    id: 1,
    image:
      'https://images.unsplash.com/photo-1626593261859-4fe4865d8cb1?q=80&w=100&h=100&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    active: false,
    link: '/category/',
    text: 'Abstract',
  },
  {
    id: 2,
    image:
      'https://images.unsplash.com/photo-1626593261859-4fe4865d8cb1?q=80&w=100&h=100&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    active: false,
    link: '/category/',
    text: 'Animals',
  },
  {
    id: 3,
    image:
      'https://images.unsplash.com/photo-1626593261859-4fe4865d8cb1?q=80&w=100&h=100&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    active: false,
    link: '/category/',
    text: 'Business',
  },
  {
    id: 4,
    image:
      'https://images.unsplash.com/photo-1626593261859-4fe4865d8cb1?q=80&w=100&h=100&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    active: false,
    link: '/category/',
    text: 'Cats',
  },
  {
    id: 5,
    image:
      'https://images.unsplash.com/photo-1626593261859-4fe4865d8cb1?q=80&w=100&h=100&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    active: false,
    link: '/category/',
    text: 'City',
  },
  {
    id: 6,
    image:
      'https://images.unsplash.com/photo-1626593261859-4fe4865d8cb1?q=80&w=100&h=100&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    active: false,
    link: '/category/',
    text: 'Food',
  },
  {
    id: 7,
    image:
      'https://images.unsplash.com/photo-1626593261859-4fe4865d8cb1?q=80&w=100&h=100&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    active: false,
    link: '/category/',
    text: 'Nature',
  },
  {
    id: 8,
    image:
      'https://images.unsplash.com/photo-1626593261859-4fe4865d8cb1?q=80&w=100&h=100&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    active: false,
    link: '/category/',
    text: 'People',
  },
  {
    id: 9,
    image:
      'https://images.unsplash.com/photo-1626593261859-4fe4865d8cb1?q=80&w=100&h=100&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    active: false,
    link: '/category/',
    text: 'Space',
  },
  {
    id: 10,
    image:
      'https://images.unsplash.com/photo-1626593261859-4fe4865d8cb1?q=80&w=100&h=100&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    active: false,
    link: '/category/',
    text: 'Sports',
  },
  {
    id: 11,
    image:
      'https://images.unsplash.com/photo-1626593261859-4fe4865d8cb1?q=80&w=100&h=100&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    active: false,
    link: '/category/',
    text: 'Transport',
  },
  {
    id: 12,
    image:
      'https://images.unsplash.com/photo-1626593261859-4fe4865d8cb1?q=80&w=100&h=100&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    active: false,
    link: '/category/',
    text: 'Travel',
  },
]
</script>
<template>
  <div>
    <layout-overflow-x>
      <ul class="flex items-center space-x-4">
        <ui-pill-tab
          v-for="category in categories"
          :key="category.id"
          tag="li"
          :active="category.active"
          :link="`${category.link}${category.id}`"
          :text="category.text"
          :image="category.image"
        />
      </ul>
    </layout-overflow-x>
  </div>
</template>
