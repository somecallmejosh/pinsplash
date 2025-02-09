<template>
  <header>
    <layout-container>
      <div class="flex items-center gap-4 lg:gap-[1.94rem]">
        <NuxtLink to="/" class="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Pinterest"
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            class="size-[1.75rem]"
          >
            <path
              d="M12.8333 16.3333H14.5833C16.8385 16.3333 18.6667 14.5052 18.6667 12.25C18.6667 9.99483 16.8385 8.16667 14.5833 8.16667H10.5V19.8333H12.8333V16.3333ZM4.66667 3.5H23.3333C23.9777 3.5 24.5 4.02234 24.5 4.66667V23.3333C24.5 23.9777 23.9777 24.5 23.3333 24.5H4.66667C4.02234 24.5 3.5 23.9777 3.5 23.3333V4.66667C3.5 4.02234 4.02234 3.5 4.66667 3.5ZM12.8333 10.5H14.5833C15.5498 10.5 16.3333 11.2835 16.3333 12.25C16.3333 13.2165 15.5498 14 14.5833 14H12.8333V10.5Z"
              fill="black"
            />
          </svg>
          <div class="logo hidden md:block">Pinsplash</div>
        </NuxtLink>
        <search />
      </div>
    </layout-container>
  </header>
</template>
<style scoped>
.logo {
  font-family: Inter, sans-serif;
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.5rem; /* 150% */
  letter-spacing: -0.06rem;
}
</style>
