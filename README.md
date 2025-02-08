# Project brief

In this challenge, you are tasked with creating a responsive interface that enables users to explore images from Unsplash using the Unsplash API. The app should include the following features:

- Image gallery: Displays images in a grid format, with infinite scroll.
  Search functionality: Allows users to search for images using keywords and display search results dynamically.
- Downloading images: Allows users to download images.
- API integration: Integrate with the Unsplash API to fetch images, image details and search results.

## Project roadmap

https://github.com/users/somecallmejosh/projects/3/views/4

## Functional Requirements

### 1. Image listing page

- Masonry layout: Implement a masonry layout that dynamically adjusts the number of columns based on screen size.
- Image hover: Display the uploader's avatar and image name on hover, as per the designs.
- Infinite scroll: Load additional images as the user scrolls or clicks a "Load More" button.

### 2. Search functionality

- Search bar: Implement a search bar that allows users to type keywords and fetch search results from the Unsplash API.
- Empty state: If there are no search results for a given set of keywords, display an empty state as per the provided design.

### 3. Photo details page

- Navigation: Clicking on images leads to the photo details page which includes information such as the number of views, upload date, category tags and number of downloads.
- Download options: Upon clicking the "Download" button, a dropdown menu of the possible options should be triggered – Small (640px width), Medium (1920px width) and Large (2400px width). The respective heights depend on the original image dimensions. Allow users to download the image in the appropriate resolution.
- Download feedback: Provide users with indications of download success and failure using the toast notifications as per the provided design.
- Related images: Allow users to view "Related images" to the current image. You are free to decide which images are deemed relevant.

### 4. Category detail page

- When a category chip (on homepage) or category tag (on photo details page) is clicked, lead the user to the category detail page. Only allow users to select 1 category chip at a time.
- Display images relevant to the selected category in a masonry format similar to the image listing page.

### 5. API Integration

- Unsplash API: Use the Unsplash API to fetch images, handle search queries and download images.
- Data fetching issues: If there are issues fetching data, display the data fetch issue state as per the provided design

## General requirements

- Design fidelity: Aim to follow the design as closely as possible. All elements in the design should be present, using the specified text color, font size, font weight, spacing, dimensions, etc.
- Responsive behavior:
  - Text size: Should be responsive; font size is larger for wider devices, smaller for narrow devices.
  - Responsive layout: The content should stack vertically on smaller screens and align horizontally as the screen width increases.
- Interactivity:
  - **Toast notification: **This component is used for displaying error messages when it is not specific to any input field
  - Link / Button states: Implement and style links and buttons to reflect different states - normal, hover, focus and disabled.
  - Category pill tabs / tags: Implement in Normal and Hover statues
    Input field states: Implement and style input fields to reflect different states - normal, focus filled, disabled, error, error filled, error focused.
- Cross-browser compatibility: Check that your solution works for major browsers including Chrome, Firefox, and Safari.
- [Stretch goal] Performance optimization: Code for fast load times with efficient CSS and JavaScript techniques.
- [Stretch goal] Accessibility and semantics: Follow best practices for web accessibility, such as using semantic HTML and ARIA roles where necessary and using proper alt tags for images.

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
