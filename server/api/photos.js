export default defineEventHandler(async (event) => {
  const { accessKey, photoApiBaseUrl } = useRuntimeConfig(event)

  const result = await $fetch(
    `${photoApiBaseUrl}/topics/?client_id=${accessKey}&per_page=20`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    },
  )

  const photos = ({ cover_photo: photo }) => {
    const user = photo.user
    return {
      photo: {
        id: photo.id,
        slug: photo.slug,
        url: photo.urls.regular,
        alt_description: photo.alt_description
          ? photo.alt_description
          : photo.description,
        description: photo.description
          ? photo.description
          : photo.alt_description,
        height: photo.height,
        width: photo.width,
      },
      user: {
        id: user.id,
        name: user.name ? user.name : user.username,
        profile_image: user.profile_image.small,
      },
    }
  }

  const photoResults = result.map(photos)
  return photoResults
  // return result
})
